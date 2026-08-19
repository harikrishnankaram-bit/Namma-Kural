import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/complaints/$id")({
  component: () => null,
});
