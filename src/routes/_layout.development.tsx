import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Clock, AlertTriangle, Calendar, TrendingUp, MapPin, Building2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { MOCK_PROJECTS } from "@/data/mock";
import type { Project } from "@/data/mock";
import { DEPARTMENTS, WARDS } from "@/config/aram";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_layout/development")({
  component: DevelopmentPage,
});

const STATUS_CONFIG = {
  planned: { label: { en: "Planned", ta: "திட்டமிடப்பட்டது" }, cls: "bg-muted text-muted-foreground", icon: Calendar },
  in_progress: { label: { en: "In Progress", ta: "நடைபெறுகிறது" }, cls: "bg-blue-100 text-blue-700", icon: Clock },
  completed: { label: { en: "Completed", ta: "முடிந்தது" }, cls: "bg-green-100 text-green-700", icon: CheckCircle2 },
  delayed: { label: { en: "Delayed", ta: "தாமதம்" }, cls: "bg-red-100 text-red-700", icon: AlertTriangle },
};

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const { bi } = useI18n();
  const cfg = STATUS_CONFIG[project.status];
  const StatusIcon = cfg.icon;
  const dept = DEPARTMENTS.find((d) => d.id === project.departmentId);
  const ward = WARDS.find((w) => w.id === project.wardId);
  const img = project.images.completed ?? project.images.progress ?? project.images.before;

  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-2xl border border-border bg-white shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition-all overflow-hidden group"
    >
      {img && (
        <div className="h-44 overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-foreground text-sm leading-snug">{bi(project.name)}</h3>
          <Badge className={cn("shrink-0 text-xs border-0 gap-1", cfg.cls)}>
            <StatusIcon className="h-3 w-3" />
            {bi(cfg.label as { en: string; ta: string })}
          </Badge>
        </div>

        <div className="space-y-1.5 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 shrink-0" />{project.location}</div>
          <div className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 shrink-0" />{dept ? bi(dept.name) : project.departmentId}</div>
          {ward && <div className="flex items-center gap-1.5"><span className="font-medium text-foreground">Ward {ward.number}:</span> {bi(ward.name)}</div>}
        </div>

        {project.status !== "planned" && (
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold text-foreground">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
        )}

        <div className="flex justify-between text-xs text-muted-foreground mt-3">
          <span>Start: {project.start}</span>
          <span>End: {project.end}</span>
        </div>
        {project.budget && (
          <div className="mt-2 text-xs font-medium text-primary">{project.budget}</div>
        )}
      </div>
    </button>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, bi } = useI18n();
  const cfg = STATUS_CONFIG[project.status];
  const StatusIcon = cfg.icon;
  const dept = DEPARTMENTS.find((d) => d.id === project.departmentId);
  const ward = WARDS.find((w) => w.id === project.wardId);

  const imgs = [
    project.images.before && { label: t("track.before"), src: project.images.before },
    project.images.progress && { label: t("projects.progress"), src: project.images.progress },
    project.images.completed && { label: bi({ en: "Completed", ta: "முடிந்தது" }), src: project.images.completed },
  ].filter(Boolean) as { label: string; src: string }[];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-lift max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-border px-5 py-4 flex items-center justify-between z-10">
          <h2 className="font-bold text-foreground">{bi(project.name)}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>{t("common.close")}</Button>
        </div>

        <div className="p-5 space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={cn("text-xs border-0 gap-1", cfg.cls)}>
              <StatusIcon className="h-3 w-3" />{bi(cfg.label as { en: string; ta: string })}
            </Badge>
            {project.budget && <Badge variant="secondary">{project.budget}</Badge>}
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div><span className="text-muted-foreground">Department: </span><span className="font-medium">{dept ? bi(dept.name) : "—"}</span></div>
            <div><span className="text-muted-foreground">Ward: </span><span className="font-medium">{ward ? bi(ward.name) : "—"}</span></div>
            <div><span className="text-muted-foreground">{t("projects.start")}: </span><span className="font-medium">{project.start}</span></div>
            <div><span className="text-muted-foreground">{t("projects.end")}: </span><span className="font-medium">{project.end}</span></div>
            <div className="col-span-2"><span className="text-muted-foreground"><MapPin className="inline h-3.5 w-3.5 mr-1" /></span><span className="font-medium">{project.location}</span></div>
          </div>

          {project.status !== "planned" && (
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{t("projects.progress")}</span>
                <span className="font-bold text-primary">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-3 rounded-full" />
            </div>
          )}

          {imgs.length > 0 && (
            <div>
              <h3 className="font-semibold text-sm mb-3">Photo Timeline</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {imgs.map(({ label, src }) => (
                  <div key={label} className="space-y-1.5">
                    <img src={src} alt={label} className="w-full h-28 object-cover rounded-xl" />
                    <p className="text-center text-xs text-muted-foreground font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-700 flex gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            {t("common.demoData")} — Not official government data.
          </div>
        </div>
      </div>
    </div>
  );
}

const FILTER_STATUSES = ["all", "planned", "in_progress", "completed", "delayed"] as const;

function DevelopmentPage() {
  const { t, bi } = useI18n();
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const projects = filter === "all" ? MOCK_PROJECTS : MOCK_PROJECTS.filter((p) => p.status === filter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-1">{t("projects.title")}</h1>
        <p className="text-sm text-muted-foreground">{t("common.demoData")}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { status: "all", label: bi({ en: "Total Projects", ta: "மொத்த திட்டங்கள்" }), count: MOCK_PROJECTS.length, cls: "bg-muted/50" },
          { status: "in_progress", label: bi({ en: "In Progress", ta: "நடைபெறுகிறது" }), count: MOCK_PROJECTS.filter((p) => p.status === "in_progress").length, cls: "bg-blue-50" },
          { status: "completed", label: bi({ en: "Completed", ta: "முடிந்தது" }), count: MOCK_PROJECTS.filter((p) => p.status === "completed").length, cls: "bg-green-50" },
          { status: "delayed", label: bi({ en: "Delayed", ta: "தாமதம்" }), count: MOCK_PROJECTS.filter((p) => p.status === "delayed").length, cls: "bg-red-50" },
        ].map(({ status, label, count, cls }) => (
          <button key={status} onClick={() => setFilter(status)} className={cn("rounded-2xl p-4 text-left border-2 transition-all", cls, filter === status ? "border-primary" : "border-transparent hover:border-primary/30")}>
            <div className="text-2xl font-bold text-foreground">{count}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
          </button>
        ))}
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 flex-wrap mb-6">
        {FILTER_STATUSES.map((s) => (
          <Button key={s} variant={filter === s ? "default" : "outline"} size="sm" onClick={() => setFilter(s)} className="text-xs">
            {s === "all" ? t("common.all") : bi(STATUS_CONFIG[s].label as { en: string; ta: string })}
          </Button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
        ))}
      </div>

      {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
