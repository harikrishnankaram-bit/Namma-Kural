import { createFileRoute } from "@tanstack/react-router";
import { DepartmentAdminDashboard } from "./_layout.dashboard.department";

export const Route = createFileRoute("/_layout/console/department")({
  component: DepartmentAdminDashboard,
});
