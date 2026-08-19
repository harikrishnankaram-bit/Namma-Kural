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

function ComplaintTrack() {
  const { t, bi, lang } = useI18n();
  const { complaints, verifyResolution } = useWorkflow();
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchedComplaint, setFetchedComplaint] = useState<any>(null);
  const [verified, setVerified] = useState<"yes" | "no" | null>(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [thankYou, setThankYou] = useState(false);

  const localComplaint = complaints.find(
    (c) => c.id.toLowerCase() === query.trim().toLowerCase(),
  );

  const complaint = fetchedComplaint || localComplaint;

  const category = CATEGORIES.find((c) => c.id === complaint?.categoryId);
  const department = DEPARTMENTS.find((d) => d.id === complaint?.departmentId);
  const ward = WARDS.find((w) => w.id === complaint?.wardId);
  const statusMeta = complaint ? STATUS_META[complaint.status as keyof typeof STATUS_META] : null;

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

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-1">{t("track.title")}</h1>
      <p className="text-sm text-muted-foreground mb-6">
        {lang === "ta"
          ? "உங்கள் புகார் ஐடியை உள்ளிட்டு நேரடி நிலையை கண்காணிக்கவும்."
          : "Enter your registered Complaint ID to track live progress and status."}
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
            placeholder={lang === "ta" ? "எ.கா. ARAM-2026-102934" : "e.g. ARAM-2026-102934"}
            className="pl-10 h-11 rounded-xl text-sm"
            onKeyDown={(e) => e.key === "Enter" && doSearch()}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <Button onClick={doSearch} disabled={loading} className="h-11 px-6 rounded-xl font-bold">
          {loading ? (lang === "ta" ? "தேடுகிறது..." : "Searching...") : t("common.search")}
        </Button>
      </div>

      {searched && !complaint && !loading && (
        <div className="text-center py-12 bg-muted/20 border border-border/60 rounded-3xl p-8">
          <XCircle className="h-12 w-12 text-muted-foreground/60 mx-auto mb-3" />
          <p className="font-bold text-foreground">{t("common.notFound")}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {lang === "ta"
              ? "இந்த ஐடியில் புகார் எதுவும் காணப்படவில்லை. சரியான புகார் எண்ணை சரிபார்க்கவும்."
              : "No complaint found for this ID. Please verify the complaint ID and try again."}
          </p>
        </div>
      )}

      {complaint && (
        <div className="space-y-6">
          {/* Summary card */}
          <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Complaint ID</div>
                <div className="text-lg font-bold text-primary">{complaint.id}</div>
              </div>
              {statusMeta && (
                <Badge className={cn("shrink-0", statusMeta.tone === "resolved" ? "bg-green-100 text-green-700 border-0" : statusMeta.tone === "progress" ? "bg-blue-100 text-blue-700 border-0" : "bg-amber-100 text-amber-700 border-0")}>
                  {bi(statusMeta.label)}
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div><span className="text-muted-foreground">{t("common.category")}:</span> <span className="font-medium">{category ? bi(category.name) : "—"}</span></div>
              <div><span className="text-muted-foreground">{t("common.ward")}:</span> <span className="font-medium">{ward ? bi(ward.name) : "—"}</span></div>
              <div><span className="text-muted-foreground">{t("common.department")}:</span> <span className="font-medium">{department ? bi(department.name) : "—"}</span></div>
              <div><span className="text-muted-foreground">{t("common.date")}:</span> <span className="font-medium">{complaint.createdAt}</span></div>
            </div>
            <div className="mt-3 text-sm text-muted-foreground border-t pt-3 line-clamp-2">{complaint.description}</div>
          </div>

          {/* Timeline */}
          <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
            <h2 className="font-semibold text-foreground mb-5">{t("track.timeline")}</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-5">
                {STAGES.map((stage, idx) => {
                  const entry = complaint.timeline.find((e: TimelineEntry) => e.stage === stage.id);
                  const done = !!entry?.done;
                  return (
                    <div key={stage.id} className="flex gap-4 pl-10 relative">
                      <div className={cn("absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors", done ? "border-primary bg-primary" : "border-border bg-white")}>
                        {done ? <CheckCircle2 className="h-4 w-4 text-white" /> : <div className="h-2 w-2 rounded-full bg-muted-foreground/40" />}
                      </div>
                      <div className="flex-1 pb-1">
                        <div className="flex items-center gap-2">
                          <span className={cn("text-sm font-medium", done ? "text-foreground" : "text-muted-foreground")}>{bi(stage.label)}</span>
                        </div>
                        {entry && (
                          <div className="text-xs text-muted-foreground mt-0.5">{entry.date} · {entry.time}</div>
                        )}
                        {entry?.note && done && (
                          <div className="text-xs text-muted-foreground mt-1 italic">{bi(entry.note)}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Before/After slider */}
          {complaint.beforeImage && complaint.afterImage && (
            <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
              <h2 className="font-semibold text-foreground mb-4">{t("track.beforeAfter")}</h2>
              <BeforeAfterSlider before={complaint.beforeImage} after={complaint.afterImage} />
              {complaint.completedOn && (
                <p className="text-xs text-muted-foreground mt-3">
                  {t("track.completedOn")}: {complaint.completedOn}
                </p>
              )}
            </div>
          )}

          {/* Citizen verification */}
          {(complaint.status === "completed" || complaint.status === "citizen_verification" || complaint.status === "closed") && !thankYou && (
            <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
              <h2 className="font-semibold text-foreground mb-4">{t("track.verify.q")}</h2>
              {!verified && (
                <div className="flex gap-3">
                  <Button onClick={() => setVerified("yes")} variant="outline" className="flex-1 gap-2 border-green-300 text-green-700 hover:bg-green-50">
                    <ThumbsUp className="h-4 w-4" /> {t("track.verify.yes")}
                  </Button>
                  <Button onClick={() => setVerified("no")} variant="outline" className="flex-1 gap-2 border-red-300 text-red-700 hover:bg-red-50">
                    <ThumbsDown className="h-4 w-4" /> {t("track.verify.no")}
                  </Button>
                </div>
              )}
              {verified === "yes" && (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">{t("track.verify.rating")}</p>
                    <div className="flex gap-2">
                      {[1,2,3,4,5].map((s) => (
                        <button key={s} onClick={() => setRating(s)}>
                          <Star className={cn("h-7 w-7 transition-colors", s <= rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground")} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <Textarea placeholder={t("track.verify.comment")} value={comment} onChange={(e) => setComment(e.target.value)} rows={3} />
                  <Button
                    onClick={() => {
                      verifyResolution(complaint.id, true, rating, comment);
                      setThankYou(true);
                    }}
                    className="bg-green-600 hover:bg-green-700 font-bold"
                  >
                    {t("common.confirm")}
                  </Button>
                </div>
              )}
              {verified === "no" && (
                <div className="space-y-3">
                  <Textarea placeholder={t("track.verify.comment")} value={comment} onChange={(e) => setComment(e.target.value)} rows={3} />
                  <Button
                    variant="destructive"
                    onClick={() => {
                      verifyResolution(complaint.id, false, 0, comment);
                      setThankYou(true);
                    }}
                    className="gap-2 font-bold"
                  >
                    {t("track.verify.reopen")}
                  </Button>
                </div>
              )}
            </div>
          )}
          {thankYou && (
            <div className="rounded-2xl bg-green-50 border border-green-200 p-5 text-center">
              <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="font-semibold text-green-700">{t("track.verify.thanks")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
