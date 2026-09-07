import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  oxc: {
    jsx: {
      runtime: "automatic",
      development: false,
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: [
      { find: /^punycode\/?$/, replacement: "punycode" },
      { find: "@", replacement: "/src" },
    ],
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    react({
      jsxRuntime: "automatic",
      development: false,
    }),
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    nitro({
      preset: "vercel",
      alias: {
        "punycode/": "punycode",
        "punycode": "punycode",
      },
    }),
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
});
