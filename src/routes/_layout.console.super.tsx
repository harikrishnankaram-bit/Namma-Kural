import { createFileRoute } from "@tanstack/react-router";
import { SuperAdminDashboard } from "./_layout.dashboard.superadmin";

export const Route = createFileRoute("/_layout/console/super")({
  component: SuperAdminDashboard,
});
