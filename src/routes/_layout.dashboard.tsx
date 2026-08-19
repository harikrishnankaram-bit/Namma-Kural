import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { CitizenDashboardPage } from "./_layout.dashboard.citizen";
import { ConstituencyAdminDashboard } from "./_layout.dashboard.constituency";
import { DepartmentAdminDashboard } from "./_layout.dashboard.department";
import { FieldOfficerDashboard } from "./_layout.dashboard.officer";
import { SuperAdminDashboard } from "./_layout.dashboard.superadmin";

export const Route = createFileRoute("/_layout/dashboard")({
  component: DashboardDispatcher,
});

function DashboardDispatcher() {
  const { user } = useAuth();
  const location = useLocation();

  const isExactDashboard =
    location.pathname === "/dashboard" || location.pathname === "/dashboard/";

  if (isExactDashboard) {
    if (user?.role === "constituency_admin") return <ConstituencyAdminDashboard />;
    if (user?.role === "department_admin") return <DepartmentAdminDashboard />;
    if (user?.role === "field_officer") return <FieldOfficerDashboard />;
    if (user?.role === "super_admin") return <SuperAdminDashboard />;
    return <CitizenDashboardPage />;
  }

  return <Outlet />;
}
