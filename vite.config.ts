// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      {
        name: "api-dev-middleware",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url && req.url.startsWith("/api/")) {
              try {
                const { handleApiRequest } = await server.ssrLoadModule("/src/server/apiRouter.ts");
                const protocol = req.headers["x-forwarded-proto"] || "http";
                const host = req.headers.host || "localhost:3000";
                const fullUrl = `${protocol}://${host}${req.url}`;

                let body: any = undefined;
                if (req.method !== "GET" && req.method !== "HEAD") {
                  const buffers: Buffer[] = [];
                  for await (const chunk of req) {
                    buffers.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
                  }
                  if (buffers.length > 0) {
                    body = Buffer.concat(buffers);
                  }
                }

                const webReq = new Request(fullUrl, {
                  method: req.method,
                  headers: req.headers as HeadersInit,
                  body,
                  // @ts-ignore
                  duplex: "half",
                });

                const webRes: Response | null = await handleApiRequest(webReq);
                if (webRes) {
                  res.statusCode = webRes.status;
                  webRes.headers.forEach((value, key) => {
                    res.setHeader(key, value);
                  });
                  const buf = await webRes.arrayBuffer();
                  res.end(Buffer.from(buf));
                  return;
                }
              } catch (e: any) {
                console.error("API middleware error:", e);
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ ok: false, message: e.message || "Internal server error" }));
                return;
              }
            }
            next();
          });
        },
      },
    ],
  },
});
