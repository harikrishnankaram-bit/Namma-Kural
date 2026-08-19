import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PUBLIC_STATS } from "@/data/mock";
import { DEPARTMENTS, WARDS, DEMO_DATA_NOTICE } from "@/config/aram";
import { AlertCircle, CheckCircle2, Clock, TrendingUp, Star, Building2 } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/_layout/transparency")({
  component: TransparencyPage,
});

const DEPT_PERF = [
  { dept: "Highways", sla: 7, avg: 6.1, satisfaction: 4.2 },
  { dept: "Water", sla: 5, avg: 4.8, satisfaction: 4.1 },
  { dept: "Drainage", sla: 6, avg: 7.2, satisfaction: 3.8 },
  { dept: "Electricity", sla: 3, avg: 2.9, satisfaction: 4.5 },
  { dept: "Sanitation", sla: 2, avg: 1.8, satisfaction: 4.6 },
  { dept: "Health", sla: 4, avg: 3.5, satisfaction: 4.3 },
  { dept: "Works", sla: 10, avg: 11.2, satisfaction: 3.7 },
];

function StatCard({ icon: Icon, value, label, sub, color }: {
  icon: React.ElementType; value: string | number; label: string; sub?: string; color: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-border shadow-soft p-5">
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl mb-3 ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-sm font-medium text-foreground mt-0.5">{label}</div>
      {sub && <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>}
    </div>
  );
}

function TransparencyPage() {
  const { t, bi } = useI18n();
  const resolutionRate = Math.round((PUBLIC_STATS.resolved / PUBLIC_STATS.total) * 100);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-1">{t("transparency.title")}</h1>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs gap-1.5">
            <AlertCircle className="h-3 w-3" />{bi(DEMO_DATA_NOTICE)}
          </Badge>
        </div>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        <StatCard icon={AlertCircle} value={PUBLIC_STATS.total.toLocaleString()} label={t("transparency.total")} color="bg-muted text-muted-foreground" />
        <StatCard icon={CheckCircle2} value={PUBLIC_STATS.resolved.toLocaleString()} label={t("home.live.resolved")} color="bg-green-100 text-green-700" />
        <StatCard icon={Clock} value={PUBLIC_STATS.inProgress} label={t("home.live.progress")} color="bg-blue-100 text-blue-700" />
        <StatCard icon={TrendingUp} value={`${PUBLIC_STATS.avgResolutionDays}d`} label={t("transparency.avgTime")} color="bg-amber-100 text-amber-700" />
        <StatCard icon={Star} value={`${PUBLIC_STATS.satisfaction}/5`} label={t("transparency.satisfaction")} color="bg-violet-100 text-violet-700" />
        <StatCard icon={Building2} value={PUBLIC_STATS.projects} label={t("transparency.projects")} sub={`${PUBLIC_STATS.completedProjects} ${t("transparency.completed")}`} color="bg-primary/10 text-primary" />
      </div>

      {/* Resolution rate */}
      <div className="rounded-2xl bg-white border border-border shadow-soft p-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-foreground">Resolution Rate</h2>
          <span className="text-2xl font-bold text-green-600">{resolutionRate}%</span>
        </div>
        <Progress value={resolutionRate} className="h-3 rounded-full" />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>{PUBLIC_STATS.resolved.toLocaleString()} resolved</span>
          <span>{(PUBLIC_STATS.total - PUBLIC_STATS.resolved).toLocaleString()} pending</span>
        </div>
      </div>

      {/* Monthly trend chart */}
      <div className="rounded-2xl bg-white border border-border shadow-soft p-6 mb-6">
        <h2 className="font-semibold text-foreground mb-4">Complaint Trends (Last 6 Months)</h2>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PUBLIC_STATS.monthly} margin={{ left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ borderRadius: "12px", fontSize: "12px" }} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="received" name="Received" fill="var(--color-status-new)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="resolved" name="Resolved" fill="var(--color-status-resolved)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department performance */}
      <div className="rounded-2xl bg-white border border-border shadow-soft p-6 mb-6">
        <h2 className="font-semibold text-foreground mb-4">Department Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-muted-foreground font-medium text-xs">Department</th>
                <th className="text-right py-2 text-muted-foreground font-medium text-xs">SLA (days)</th>
                <th className="text-right py-2 text-muted-foreground font-medium text-xs">Avg Resolution</th>
                <th className="text-right py-2 text-muted-foreground font-medium text-xs">Rating</th>
                <th className="text-left py-2 text-muted-foreground font-medium text-xs">Performance</th>
              </tr>
            </thead>
            <tbody>
              {DEPT_PERF.map((d) => {
                const withinSla = d.avg <= d.sla;
                return (
                  <tr key={d.dept} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="py-3 font-medium">{d.dept}</td>
                    <td className="py-3 text-right text-muted-foreground">{d.sla}</td>
                    <td className={`py-3 text-right font-semibold ${withinSla ? "text-green-600" : "text-red-600"}`}>{d.avg}</td>
                    <td className="py-3 text-right">
                      <span className="flex items-center justify-end gap-0.5">
                        <Star className="h-3 w-3 text-amber-400 fill-amber-400" />{d.satisfaction}
                      </span>
                    </td>
                    <td className="py-3 pl-4 w-32">
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${withinSla ? "bg-green-500" : "bg-red-500"}`} style={{ width: `${Math.min(100, (d.sla / d.avg) * 100)}%` }} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ward overview */}
      <div className="rounded-2xl bg-white border border-border shadow-soft p-6">
        <h2 className="font-semibold text-foreground mb-4">Ward Overview</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WARDS.map((w) => (
            <div key={w.id} className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm">Ward {w.number}</span>
                <Badge variant="secondary" className="text-xs">{bi(w.name)}</Badge>
              </div>
              <div className="text-xs text-muted-foreground">Population: {w.population.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {bi({ en: "Centre", ta: "மையம்" })}: {w.center.lat.toFixed(4)}, {w.center.lng.toFixed(4)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
