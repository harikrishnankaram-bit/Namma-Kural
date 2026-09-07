import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { CheckCircle2, Clock, AlertTriangle, Calendar, TrendingUp, MapPin, Building2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useWorkflow } from "@/lib/workflow";
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
      className="w-full text-left rounded-2xl border border-slate-200 bg-white shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition-all overflow-hidden group cursor-pointer"
    >
      {img && (
        <div className="h-44 overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-black text-slate-950 text-sm leading-snug">{bi(project.name)}</h3>
          <Badge className={cn("shrink-0 text-xs font-bold border-0 gap-1", cfg.cls)}>
            <StatusIcon className="h-3 w-3" />
            {bi(cfg.label as { en: string; ta: string })}
          </Badge>
        </div>

        <div className="space-y-1.5 text-xs text-slate-700 font-semibold mb-4">
          <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary shrink-0" />{project.location}</div>
          <div className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 text-indigo-600 shrink-0" />{dept ? bi(dept.name) : project.departmentId}</div>
          {ward && <div className="flex items-center gap-1.5"><span className="font-black text-slate-950">Ward {ward.number}:</span> {bi(ward.name)}</div>}
        </div>

        {project.status !== "planned" && (
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-700 font-bold">Progress</span>
              <span className="font-black text-slate-950">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
        )}

        <div className="flex justify-between text-xs text-slate-600 font-medium mt-3">
          <span>Start: {project.start}</span>
          <span>End: {project.end}</span>
        </div>
        {project.budget && (
          <div className="mt-2 text-xs font-extrabold text-primary">{project.budget}</div>
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-lift max-h-[90vh] overflow-y-auto text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-200 px-5 py-4 flex items-center justify-between z-10">
          <h2 className="font-black text-slate-950">{bi(project.name)}</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="font-bold text-slate-700">{t("common.close")}</Button>
        </div>

        <div className="p-5 space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={cn("text-xs font-bold border-0 gap-1", cfg.cls)}>
              <StatusIcon className="h-3 w-3" />{bi(cfg.label as { en: string; ta: string })}
            </Badge>
            {project.budget && <Badge variant="secondary" className="font-bold text-xs">{project.budget}</Badge>}
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div><span className="text-slate-600 font-medium">Department: </span><span className="font-bold text-slate-950">{dept ? bi(dept.name) : "—"}</span></div>
            <div><span className="text-slate-600 font-medium">Ward: </span><span className="font-bold text-slate-950">{ward ? bi(ward.name) : "—"}</span></div>
            <div><span className="text-slate-600 font-medium">{t("projects.start")}: </span><span className="font-bold text-slate-950">{project.start}</span></div>
            <div><span className="text-slate-600 font-medium">{t("projects.end")}: </span><span className="font-bold text-slate-950">{project.end}</span></div>
            <div className="col-span-2"><span className="text-slate-600 font-medium"><MapPin className="inline h-3.5 w-3.5 mr-1 text-primary" /></span><span className="font-bold text-slate-950">{project.location}</span></div>
          </div>

          {project.status !== "planned" && (
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-slate-900">{t("projects.progress")}</span>
                <span className="font-black text-primary">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-3 rounded-full" />
            </div>
          )}

          {/* Photo Timeline */}
          {imgs.length > 0 && (
            <div>
              <h3 className="font-black text-slate-950 text-sm mb-3">Photo Timeline</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {imgs.map(({ label, src }) => (
                  <div key={label} className="space-y-1.5">
                    <img src={src} alt={label} className="w-full h-28 object-cover rounded-xl border border-slate-200" />
                    <p className="text-center text-xs text-slate-700 font-bold">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const FILTER_STATUSES = ["all", "planned", "in_progress", "completed", "delayed"] as const;

function DevelopmentPage() {
  const { t, bi } = useI18n();
  const { fetchDevelopmentWorks } = useWorkflow();
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const [dbWorks, setDbWorks] = useState<any[]>([]);

  useEffect(() => {
    fetchDevelopmentWorks().then((works) => {
      if (Array.isArray(works) && works.length > 0) {
        setDbWorks(works);
      }
    }).catch(() => {});
  }, [fetchDevelopmentWorks]);

  // Combine DB works with mock projects
  const mappedDbProjects: Project[] = dbWorks.map((w) => ({
    id: w.workId,
    name: w.name || w.title || { en: "Constituency Infrastructure Project", ta: "தொகுதி உள்கட்டமைப்பு திட்டம்" },
    departmentId: w.department || "works",
    wardId: "w-01",
    status: (w.status?.toLowerCase() === "in_progress" ? "in_progress" : w.status?.toLowerCase() === "completed" ? "completed" : "planned") as any,
    progress: w.progressPercent ?? w.progressPercentage ?? 0,
    start: w.startDate || "2026-01-01",
    end: w.expectedCompletion || w.expectedCompletionDate || "2026-12-31",
    location: w.location || "Tiruchengode",
    budget: w.budget ? `₹${typeof w.budget === "number" ? w.budget.toLocaleString() : w.budget}` : "₹50,00,000",
    images: {
      before: w.photos?.[0] || w.images?.[0] || "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=60",
      progress: w.photos?.[1] || w.images?.[1] || "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=60",
      completed: w.photos?.[2] || w.images?.[2] || "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=60",
    },
  }));

  const allProjects = [...mappedDbProjects, ...MOCK_PROJECTS];
  const projects = filter === "all" ? allProjects : allProjects.filter((p) => p.status === filter);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 my-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-200 text-slate-950">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 mb-1 font-display">{t("projects.title")}</h1>
        <p className="text-sm text-slate-800 font-semibold">Live tracking of constituency public infrastructure projects and development works.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { status: "all", label: bi({ en: "Total Projects", ta: "மொத்த திட்டங்கள்" }), count: allProjects.length, cls: "bg-slate-100 border-slate-300" },
          { status: "in_progress", label: bi({ en: "In Progress", ta: "நடைபெறுகிறது" }), count: allProjects.filter((p) => p.status === "in_progress").length, cls: "bg-blue-50 border-blue-200" },
          { status: "completed", label: bi({ en: "Completed", ta: "முடிந்தது" }), count: allProjects.filter((p) => p.status === "completed").length, cls: "bg-green-50 border-green-200" },
          { status: "delayed", label: bi({ en: "Delayed", ta: "தாமதம்" }), count: allProjects.filter((p) => p.status === "delayed").length, cls: "bg-red-50 border-red-200" },
        ].map(({ status, label, count, cls }) => (
          <button key={status} onClick={() => setFilter(status)} className={cn("rounded-2xl p-4 text-left border-2 transition-all cursor-pointer", cls, filter === status ? "border-primary shadow-sm" : "hover:border-primary/40")}>
            <div className="text-2xl font-black text-slate-950">{count}</div>
            <div className="text-xs text-slate-800 font-bold mt-0.5">{label}</div>
          </button>
        ))}
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 flex-wrap mb-6">
        {FILTER_STATUSES.map((s) => (
          <Button key={s} variant={filter === s ? "default" : "outline"} size="sm" onClick={() => setFilter(s)} className={`text-xs font-bold ${filter === s ? "bg-primary text-white" : "text-slate-900 border-slate-300 bg-white hover:bg-slate-100"}`}>
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
