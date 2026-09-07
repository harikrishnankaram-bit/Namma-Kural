import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Search, CheckCircle2, Clock, XCircle, AlertCircle, Star, ThumbsUp, ThumbsDown, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useWorkflow } from "@/lib/workflow";
import { STAGES } from "@/data/mock";
import type { TimelineEntry } from "@/data/mock";
import { CATEGORIES, DEPARTMENTS, WARDS, STATUS_META } from "@/config/aram";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_layout/complaints/track")({
  component: ComplaintTrack,
});

const STATUS_ICON = {
  new: AlertCircle,
  verified: CheckCircle2,
  assigned: CheckCircle2,
  in_progress: Clock,
  completed: CheckCircle2,
  citizen_verification: AlertCircle,
  closed: CheckCircle2,
  pending_verification: Clock,
};

const STATUS_COLOR = {
  new: "text-status-new",
  verified: "text-status-assigned",
  assigned: "text-status-assigned",
  in_progress: "text-status-progress",
  completed: "text-green-600",
  citizen_verification: "text-amber-600",
  closed: "text-status-resolved",
  pending_verification: "text-status-pending",
};

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  const handleMove = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const p = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(p);
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative w-full h-52 rounded-xl overflow-hidden cursor-ew-resize select-none"
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          if (touch) handleMove(touch.clientX);
        }}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="Before" className="w-full h-full object-cover" style={{ minWidth: "100vw" }} />
        </div>
        {/* Divider */}
        <div className="absolute inset-y-0 w-0.5 bg-white shadow-lg" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg">
            <ChevronDown className="h-4 w-4 text-foreground rotate-90" />
          </div>
        </div>
        {/* Labels */}
        <span className="absolute top-2 left-2 text-[10px] font-bold bg-black/50 text-white px-2 py-0.5 rounded">{t("track.before")}</span>
        <span className="absolute top-2 right-2 text-[10px] font-bold bg-black/50 text-white px-2 py-0.5 rounded">{t("track.after")}</span>
      </div>
      <Slider value={[pos]} onValueChange={([v]) => { if (typeof v === "number") setPos(v); }} className="w-full" />
    </div>
  );
}

const WORKFLOW_STAGES = [
  { id: "submitted", label: { en: "Complaint Submitted", ta: "புகார் சமர்ப்பிக்கப்பட்டது" }, icon: AlertCircle },
  { id: "under_review", label: { en: "Under Review", ta: "ஆய்வில் உள்ளது" }, icon: Clock },
  { id: "assigned", label: { en: "Department Assigned", ta: "துறைக்கு ஒதுக்கப்பட்டது" }, icon: CheckCircle2 },
  { id: "accepted", label: { en: "Officer Accepted", ta: "அலுவலர் ஏற்றுக்கொண்டார்" }, icon: CheckCircle2 },
  { id: "in_progress", label: { en: "Work In Progress", ta: "பணி நடைபெறுகிறது" }, icon: Clock },
  { id: "completed", label: { en: "Work Completed", ta: "பணி முடிக்கப்பட்டது" }, icon: CheckCircle2 },
  { id: "verified", label: { en: "Admin Verified", ta: "நிர்வாகி சரிபார்த்தார்" }, icon: CheckCircle2 },
  { id: "resolved", label: { en: "Resolved & Closed", ta: "தீர்க்கப்பட்டு மூடப்பட்டது" }, icon: CheckCircle2 },
];

function ComplaintTrack() {
  const { t, bi, lang } = useI18n();
  const { complaints, verifyResolution, reopenComplaintOnWorkflow } = useWorkflow();
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchedComplaint, setFetchedComplaint] = useState<any>(null);
  const [verified, setVerified] = useState<"yes" | "no" | null>(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [thankYou, setThankYou] = useState(false);
  const [reopenRemarks, setReopenRemarks] = useState("");
  const [reopenLoading, setReopenLoading] = useState(false);
  const [reopenSuccess, setReopenSuccess] = useState(false);

  const localComplaint = complaints.find(
    (c) => c.id.toLowerCase() === query.trim().toLowerCase(),
  );

  const complaint = fetchedComplaint || localComplaint;

  const category = CATEGORIES.find((c) => c.id === complaint?.categoryId);
  const department = DEPARTMENTS.find((d) => d.id === complaint?.departmentId);
  const ward = WARDS.find((w) => w.id === complaint?.wardId);
  const statusMeta = complaint ? STATUS_META[complaint.status as keyof typeof STATUS_META] || STATUS_META["new"] : null;

  const doSearch = async () => {
    const q = query.trim();
    if (!q) return;
    setSearched(true);
    setLoading(true);
    try {
      const res = await fetch(`/api/complaints/${encodeURIComponent(q)}`);
      const data = await res.json();
      if (res.ok && data.ok && data.complaint) {
        setFetchedComplaint(data.complaint);
      } else {
        setFetchedComplaint(localComplaint || null);
      }
    } catch {
      setFetchedComplaint(localComplaint || null);
    } finally {
      setLoading(false);
    }
  };

  const handleReopen = async () => {
    if (!complaint || !reopenRemarks.trim()) return;
    setReopenLoading(true);
    try {
      const res = await reopenComplaintOnWorkflow(complaint.id, reopenRemarks);
      if (res.ok) {
        setReopenSuccess(true);
        doSearch();
      }
    } finally {
      setReopenLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 my-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-200 text-slate-950">
      <h1 className="text-2xl sm:text-3xl font-black text-slate-950 mb-1 font-display">
        {lang === "ta" ? "புகாரின் நேரடி நிலை" : "Track Complaint Status"}
      </h1>
      <p className="text-sm text-slate-800 font-semibold mb-6">
        {lang === "ta"
          ? "உங்கள் புகார் ஐடியை உள்ளிட்டு 8 படிநிலை முன்னேற்றம் மற்றும் நேரடி அறிக்கையை பார்க்கவும்."
          : "Enter your registered Complaint ID to inspect live 8-stage progress, assigned staff, and resolution evidence."}
      </p>

      {/* Search box */}
      <div className="flex gap-2 mb-8">
        <div className="relative flex-1">
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSearched(false);
              setFetchedComplaint(null);
            }}
            placeholder={lang === "ta" ? "எ.கா. NK-2026-000101" : "e.g. NK-2026-000101"}
            className="pl-10 h-12 rounded-xl text-base font-bold text-slate-950 bg-white border-2 border-slate-300 placeholder:text-slate-400"
            onKeyDown={(e) => e.key === "Enter" && doSearch()}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
        </div>
        <Button onClick={doSearch} disabled={loading} className="h-12 px-6 rounded-xl font-bold bg-red-700 hover:bg-red-800 text-white border border-red-800 shadow-sm">
          {loading ? (lang === "ta" ? "தேடுகிறது..." : "Searching...") : t("common.search")}
        </Button>
      </div>

      {searched && !complaint && !loading && (
        <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-3xl p-8">
          <XCircle className="h-12 w-12 text-slate-400 mx-auto mb-3" />
          <p className="font-black text-slate-950">{t("common.notFound")}</p>
          <p className="text-xs text-slate-700 font-medium mt-1">
            {lang === "ta"
              ? "இந்த ஐடியில் புகார் எதுவும் காணப்படவில்லை. சரியான புகார் எண்ணை சரிபார்க்கவும்."
              : "No complaint found for this ID. Please verify the complaint ID and try again."}
          </p>
        </div>
      )}

      {complaint && (
        <div className="space-y-6">
          {/* Detailed Summary Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs text-slate-600 uppercase font-extrabold tracking-wider">Complaint Reference</span>
                <div className="text-xl font-black text-primary tracking-tight mt-0.5">{complaint.id}</div>
                {complaint.citizenName && (
                  <p className="text-xs text-slate-950 font-bold mt-1">
                    {lang === "ta" ? "மனுதாரர்:" : "Citizen:"} {complaint.citizenName} {complaint.citizenMobile ? `(${complaint.citizenMobile})` : ""}
                  </p>
                )}
              </div>
              {statusMeta && (
                <Badge className={cn("self-start px-3 py-1 text-xs font-bold shrink-0", 
                  ["resolved", "closed", "RESOLVED"].includes(complaint.status) ? "bg-emerald-100 text-emerald-800 border-0" : 
                  ["in_progress", "IN_PROGRESS", "accepted", "ACCEPTED"].includes(complaint.status) ? "bg-blue-100 text-blue-800 border-0" : 
                  ["rejected", "REJECTED"].includes(complaint.status) ? "bg-rose-100 text-rose-800 border-0" :
                  "bg-amber-100 text-amber-800 border-0"
                )}>
                  {bi(statusMeta.label)}
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-600 block font-bold mb-0.5">{t("common.category")}</span>
                <span className="font-black text-slate-950 text-sm">{category ? bi(category.name) : complaint.categoryId}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-600 block font-bold mb-0.5">{t("common.department")}</span>
                <span className="font-black text-slate-950 text-sm">{department ? bi(department.name) : complaint.departmentId}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-600 block font-bold mb-0.5">{t("common.ward")} / Location</span>
                <span className="font-black text-slate-950 text-sm">{ward ? `Ward ${ward.number} (${bi(ward.name)})` : complaint.address || "Thousand Lights"}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-600 block font-bold mb-0.5">Assigned Officer</span>
                <span className="font-black text-slate-950 text-sm">{complaint.officer || "Pending Assignment"}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-600 block font-bold mb-0.5">Priority</span>
                <span className={cn("font-black text-sm uppercase", complaint.priority === "high" ? "text-rose-700" : "text-amber-800")}>
                  {complaint.priority || "Medium"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-600 block font-bold mb-0.5">{t("common.date")} Submitted</span>
                <span className="font-black text-slate-950 text-sm">{complaint.createdAt}</span>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <span className="text-xs font-bold text-primary block mb-1">Issue Description</span>
              <p className="text-xs text-foreground leading-relaxed">{complaint.description}</p>
              {complaint.address && (
                <p className="text-[11px] text-muted-foreground mt-2">📍 {complaint.address}</p>
              )}
            </div>
          </div>

          {/* 8-Stage Visual Timeline */}
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-foreground mb-1">{t("track.timeline")}</h2>
            <p className="text-xs text-muted-foreground mb-6">Real-time verification audit trail across departments and field officers.</p>
            
            <div className="relative">
              <div className="absolute left-4 top-2 bottom-4 w-0.5 bg-slate-200" />
              <div className="space-y-6">
                {(complaint.timeline && complaint.timeline.length > 0 ? complaint.timeline : [
                  { stage: "submitted", label: { en: "Complaint Submitted", ta: "புகார் பதிவு செய்யப்பட்டது" }, date: complaint.createdAt, time: "10:00 AM", done: true, note: { en: "Complaint registered in database.", ta: "புகார் பதிவு செய்யப்பட்டது." }, performedBy: complaint.citizenName || "Citizen", performedByRole: "citizen" }
                ]).map((entry: any, idx: number) => {
                  const isDone = !!entry.done;
                  return (
                    <div key={idx} className="flex gap-4 pl-10 relative">
                      <div className={cn("absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors", 
                        isDone ? "border-primary bg-primary text-white shadow-sm" : "border-slate-300 bg-white text-slate-400"
                      )}>
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div className="flex-1 pb-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <span className="text-sm font-bold text-foreground">
                            {typeof entry.label === "object" ? bi(entry.label) : entry.label || entry.stage}
                          </span>
                          <span className="text-[11px] text-muted-foreground font-mono">
                            {entry.date} {entry.time ? `· ${entry.time}` : ""}
                          </span>
                        </div>
                        {entry.performedBy && (
                          <div className="text-[11px] font-semibold text-primary mt-0.5">
                            👤 {entry.performedBy} {entry.performedByRole ? `(${entry.performedByRole.replace("_", " ").toUpperCase()})` : ""}
                          </div>
                        )}
                        {entry.note && (
                          <div className="text-xs text-slate-600 mt-1.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 leading-relaxed">
                            {typeof entry.note === "object" ? bi(entry.note) : entry.note}
                          </div>
                        )}
                        {entry.remarks && (
                          <p className="text-xs text-slate-500 italic mt-1">Remark: {entry.remarks}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Before/After slider & Photo Evidence */}
          {(complaint.beforeImage || complaint.afterImage) && (
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-foreground">{t("track.beforeAfter")}</h2>
              {complaint.beforeImage && complaint.afterImage ? (
                <BeforeAfterSlider before={complaint.beforeImage} after={complaint.afterImage} />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {complaint.beforeImage && (
                    <div>
                      <span className="text-xs font-bold text-muted-foreground mb-1 block">Initial Evidence Photo</span>
                      <img src={complaint.beforeImage} alt="Initial" className="w-full h-48 object-cover rounded-xl border" />
                    </div>
                  )}
                  {complaint.afterImage && (
                    <div>
                      <span className="text-xs font-bold text-emerald-700 mb-1 block">Completion Resolution Photo</span>
                      <img src={complaint.afterImage} alt="Completed" className="w-full h-48 object-cover rounded-xl border border-emerald-200" />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Citizen Reopen Section */}
          {["resolved", "closed", "completed", "RESOLVED", "COMPLETED"].includes(complaint.status) && !reopenSuccess && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 space-y-3">
              <h3 className="text-sm font-bold text-foreground">
                {lang === "ta" ? "பிரச்சினை சரியாக தீர்க்கப்படவில்லையா?" : "Issue not resolved satisfactorily?"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {lang === "ta"
                  ? "புகாரை மீண்டும் திறந்து கூடுதல் களப்பணி கோரலாம். உங்கள் குறிப்புகளை கீழே பதிவு செய்யவும்."
                  : "You can reopen this complaint if the issue persists on site. Our command center will re-inspect immediately."}
              </p>
              <Textarea
                value={reopenRemarks}
                onChange={(e) => setReopenRemarks(e.target.value)}
                placeholder={lang === "ta" ? "மறுபணி தேவைக்கான காரணத்தை விவரிக்கவும்..." : "Please describe what is still pending..."}
                rows={3}
                className="bg-white text-xs rounded-xl"
              />
              <Button
                onClick={handleReopen}
                disabled={reopenLoading || !reopenRemarks.trim()}
                variant="destructive"
                className="rounded-xl text-xs font-bold"
              >
                {reopenLoading ? "Reopening..." : (lang === "ta" ? "புகாரை மீண்டும் திறக்க" : "Reopen Complaint")}
              </Button>
            </div>
          )}

          {reopenSuccess && (
            <div className="rounded-2xl bg-blue-50 border border-blue-200 p-5 text-center">
              <CheckCircle2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="font-bold text-blue-800 text-sm">
                {lang === "ta" ? "புகார் மீண்டும் திறக்கப்பட்டது. அதிகாரிகள் விரைவில் ஆய்வு செய்வார்கள்." : "Complaint reopened successfully. Command center alerted."}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
