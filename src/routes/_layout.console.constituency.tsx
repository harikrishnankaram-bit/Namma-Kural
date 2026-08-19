import { createFileRoute } from "@tanstack/react-router";
import { ConstituencyAdminDashboard } from "./_layout.dashboard.constituency";

export const Route = createFileRoute("/_layout/console/constituency")({
  component: ConstituencyAdminDashboard,
});
