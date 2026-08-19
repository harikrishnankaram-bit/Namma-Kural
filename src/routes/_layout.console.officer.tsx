import { createFileRoute } from "@tanstack/react-router";
import { FieldOfficerDashboard } from "./_layout.dashboard.officer";

export const Route = createFileRoute("/_layout/console/officer")({
  component: FieldOfficerDashboard,
});
