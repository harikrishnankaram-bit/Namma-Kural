import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Navigation,
  Camera,
  CheckCircle2,
  Clock,
  AlertCircle,
  Play,
  MapPin,
  FileText,
  Upload,
  Send,
  Sparkles,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  Image as ImageIcon,
  Check,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { useWorkflow } from "@/lib/workflow";
import type { Complaint } from "@/data/mock";
import { CATEGORIES, DEPARTMENTS, WARDS, STATUS_META } from "@/config/aram";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/_layout/dashboard/officer")({
  component: FieldOfficerDashboard,
});

export function FieldOfficerDashboard() {
  const { bi, lang } = useI18n();
  const { user } = useAuth();
  const {
    complaints,
    acceptAssignmentOnComplaint,
    startWorkOnComplaint,
    updateProgressOnComplaint,
    submitCompletionOnComplaint,
    refreshData,
  } = useWorkflow();

  const [selectedTask, setSelectedTask] = useState<Complaint | null>(null);
  const [activeModalAction, setActiveModalAction] = useState<"progress" | "complete" | "view">("view");
  const [progressRemarks, setProgressRemarks] = useState("");
  const [progressPhoto, setProgressPhoto] = useState("");
  const [completionRemarks, setCompletionRemarks] = useState("Resolution completed. Site inspected, repaired, and cleaned.");
  const [completionDate, setCompletionDate] = useState(new Date().toISOString().split("T")[0]!);
  const [afterPhotoUrl, setAfterPhotoUrl] = useState(
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=60",
  );
  const [toastMsg, setToastMsg] = useState("");
  const [loadingAction, setLoadingAction] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState<"all" | "active" | "in_progress" | "completed">("all");

  // Field officer tasks:
  // 1. Direct matches by officer name
  // 2. Department or Ward tasks
  // 3. All actionable grievances ready for field execution
  const officerTasks = complaints.filter((c) => {
    // If specific officer name is assigned
    if (user?.name && c.officer && c.officer.toLowerCase().includes(user.name.toLowerCase())) {
      return true;
    }
    // If user belongs to a specific department
    if (user?.departmentId && c.departmentId === user.departmentId) {
      return true;
    }
    // Actionable field tasks
    return ["verified", "assigned", "ASSIGNED", "accepted", "ACCEPTED", "in_progress", "IN_PROGRESS", "completed", "COMPLETED", "citizen_verification", "closed"].includes(c.status);
  });

  const activeTasks = officerTasks.filter((c) => ["assigned", "ASSIGNED", "accepted", "ACCEPTED", "in_progress", "IN_PROGRESS", "verified"].includes(c.status));
  const inProgressTasks = officerTasks.filter((c) => ["in_progress", "IN_PROGRESS"].includes(c.status));
  const completedTasks = officerTasks.filter((c) => ["completed", "COMPLETED", "closed", "resolved", "RESOLVED", "citizen_verification"].includes(c.status));

  const displayedTasks = officerTasks.filter((c) => {
    if (activeFilterTab === "active") return ["assigned", "ASSIGNED", "accepted", "ACCEPTED", "verified"].includes(c.status);
    if (activeFilterTab === "in_progress") return ["in_progress", "IN_PROGRESS"].includes(c.status);
    if (activeFilterTab === "completed") return ["completed", "COMPLETED", "closed", "resolved", "RESOLVED", "citizen_verification"].includes(c.status);
    return true;
  });

  const handleAcceptTask = async (id: string) => {
    setLoadingAction(true);
    try {
      const res = await acceptAssignmentOnComplaint(id, "Field officer accepted assignment and scheduled inspection.");
      if (res.ok) {
        setToastMsg(lang === "ta" ? "பணி ஏற்றுக்கொள்ளப்பட்டது!" : "Complaint Accepted! Status updated to Accepted.");
        setTimeout(() => {
          setToastMsg("");
          refreshData();
        }, 1200);
      } else {
        setToastMsg(`Error: ${res.message || "Failed to accept task"}`);
        setTimeout(() => setToastMsg(""), 3500);
      }
    } catch (err: any) {
      setToastMsg(`Error: ${err?.message || "Failed to accept task"}`);
      setTimeout(() => setToastMsg(""), 3500);
    } finally {
      setLoadingAction(false);
    }
  };

  const handleStartWork = async (id: string) => {
    setLoadingAction(true);
    try {
      const res = await startWorkOnComplaint(id, "Field officer arrived at site and commenced resolution.");
      if (res.ok) {
        setToastMsg(lang === "ta" ? "பணி தொடங்கியது! நிலை மாற்றப்பட்டது." : "Work Started! Status updated to In Progress.");
        setTimeout(() => {
          setToastMsg("");
          refreshData();
        }, 1200);
      } else {
        setToastMsg(`Error: ${res.message || "Failed to start work"}`);
        setTimeout(() => setToastMsg(""), 3500);
      }
    } catch (err: any) {
      setToastMsg(`Error: ${err?.message || "Failed to start work"}`);
      setTimeout(() => setToastMsg(""), 3500);
    } finally {
      setLoadingAction(false);
    }
  };

  const handleUpdateProgress = async (id: string) => {
    if (!progressRemarks.trim()) return;
    setLoadingAction(true);
    const res = await updateProgressOnComplaint(id, progressRemarks, progressPhoto ? [progressPhoto] : []);
    setLoadingAction(false);
    if (res.ok) {
      setToastMsg(lang === "ta" ? "முன்னேற்றக் குறிப்பு பதிவு செய்யப்பட்டது!" : "Progress update recorded successfully!");
      setTimeout(() => {
        setProgressRemarks("");
        setProgressPhoto("");
        setActiveModalAction("view");
        setToastMsg("");
        refreshData();
      }, 1200);
    }
  };

  const handleSubmitCompletion = async (id: string) => {
    if (!completionRemarks.trim()) return;
    setLoadingAction(true);
    const res = await submitCompletionOnComplaint(id, completionRemarks, afterPhotoUrl);
    setLoadingAction(false);
    if (res.ok) {
      setToastMsg(
        lang === "ta"
          ? "பணி முடிவு சமர்ப்பிக்கப்பட்டது! நிர்வாகி சரிபார்ப்புக்கு அனுப்பப்பட்டது."
          : "Work completion submitted! Sent to Constituency Admin for resolution verification.",
      );
      setTimeout(() => {
        setSelectedTask(null);
        setToastMsg("");
        refreshData();
      }, 1500);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:py-10 space-y-6">
      {toastMsg && (
        <div className="p-3.5 rounded-2xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-2 shadow-md">
          <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* ── Officer Mobile Terminal Banner ── */}
      <div className="rounded-3xl border border-border bg-white shadow-soft p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white text-2xl shrink-0 shadow-md">
            🦺
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black text-foreground font-display">
                Field Officer Terminal
              </h1>
              <Badge className="bg-amber-100 text-amber-800 border-0 text-[10px] font-bold">
                Mobile Field Unit
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Officer: <strong className="text-foreground">{user?.name || "Kumar S."}</strong> • Ward: <strong>{user?.wardId?.toUpperCase() || "W-110"}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs w-full sm:w-auto justify-between sm:justify-start">
          <div className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 font-bold text-amber-800">
            {activeTasks.length} Active Tasks
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 font-bold text-emerald-800">
            {completedTasks.length} Completed
          </div>
        </div>
      </div>

      {/* ── Task List ── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-foreground">
              {lang === "ta" ? "களப் பணிகள்" : "Field Tasks & Work Orders"}
            </h2>
            <Badge variant="secondary" className="text-xs font-bold">{displayedTasks.length}</Badge>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <Button
              size="sm"
              variant={activeFilterTab === "all" ? "default" : "outline"}
              onClick={() => setActiveFilterTab("all")}
              className="text-xs h-8 rounded-lg font-bold"
            >
              All ({officerTasks.length})
            </Button>
            <Button
              size="sm"
              variant={activeFilterTab === "active" ? "default" : "outline"}
              onClick={() => setActiveFilterTab("active")}
              className="text-xs h-8 rounded-lg font-bold"
            >
              Ready / Assigned ({activeTasks.length})
            </Button>
            <Button
              size="sm"
              variant={activeFilterTab === "in_progress" ? "default" : "outline"}
              onClick={() => setActiveFilterTab("in_progress")}
              className="text-xs h-8 rounded-lg font-bold"
            >
              In Progress ({inProgressTasks.length})
            </Button>
            <Button
              size="sm"
              variant={activeFilterTab === "completed" ? "default" : "outline"}
              onClick={() => setActiveFilterTab("completed")}
              className="text-xs h-8 rounded-lg font-bold"
            >
              Completed ({completedTasks.length})
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => refreshData()}
              className="text-xs font-semibold text-muted-foreground h-8 px-2"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              <span>Refresh</span>
            </Button>
          </div>
        </div>

        {displayedTasks.length === 0 ? (
          <Card className="rounded-3xl border border-dashed border-border p-12 text-center bg-muted/20">
            <Clock className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
            <h3 className="text-base font-bold text-foreground">
              {lang === "ta" ? "செயலில் உள்ள கள பணிகள் எதுவும் இல்லை" : "No tasks found in this view"}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
              {lang === "ta"
                ? "துறை நிர்வாகியால் புதிய பணிகள் ஒதுக்கப்பட்டவுடன் இங்கு காட்டப்படும்."
                : "Switch to 'All' or assign tasks from the Department Admin console."}
            </p>
          </Card>
        ) : (
          displayedTasks.map((c) => {
            const cat = CATEGORIES.find((x) => x.id === c.categoryId);
            const ward = WARDS.find((w) => w.id === c.wardId);
            const isAssigned = c.status === "assigned" || c.status === "verified";
            const isInProgress = c.status === "in_progress";
            const isResolutionSubmitted = c.status === "completed" || c.status === "citizen_verification";
            const isClosed = c.status === "closed";

            return (
              <Card
                key={c.id}
                className={`rounded-2xl border-2 shadow-sm transition-all overflow-hidden bg-white ${
                  isInProgress
                    ? "border-amber-400 bg-amber-50/10"
                    : isResolutionSubmitted
                    ? "border-purple-300 bg-purple-50/20"
                    : isClosed
                    ? "border-emerald-300"
                    : "border-border"
                }`}
              >
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-bold text-primary">{c.id}</span>
                        <Badge className="bg-muted text-muted-foreground border-0 text-[10px] font-bold">
                          Ward {ward?.number || 110} ({ward ? bi(ward.name) : "Thousand Lights"})
                        </Badge>
                        <Badge
                          className={`text-[10px] font-bold border-0 ${
                            c.priority === "high"
                              ? "bg-rose-100 text-rose-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {c.priority.toUpperCase()} PRIORITY
                        </Badge>
                      </div>

                      <h3 className="text-base font-bold text-foreground">
                        {cat ? bi(cat.name) : c.categoryId}: {c.description}
                      </h3>
                    </div>

                    <Badge
                      className={`text-xs font-bold border-0 shrink-0 ${
                        isInProgress
                          ? "bg-amber-500 text-white"
                          : isResolutionSubmitted
                          ? "bg-purple-600 text-white"
                          : isClosed
                          ? "bg-emerald-600 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {isInProgress
                        ? "In Progress"
                        : isResolutionSubmitted
                        ? "Resolution Submitted"
                        : isClosed
                        ? "Resolved & Verified"
                        : "Assigned to You"}
                    </Badge>
                  </div>

                  <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{c.address}</span>
                    </span>
                    <span>•</span>
                    <span>Assigned: {c.createdAt}</span>
                    <span>•</span>
                    <span>Due: <strong>3 Days SLA</strong></span>
                  </div>

                  {/* ── Strict Workflow Action Buttons ── */}
                  <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-border/60">
                    <a
                      href={`https://maps.google.com/?q=${c.lat},${c.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-foreground transition-colors"
                    >
                      <Navigation className="h-3.5 w-3.5 text-primary" />
                      <span>GPS Directions</span>
                    </a>

                    {/* Stage 1: Assigned -> Accept Task */}
                    {["assigned", "ASSIGNED"].includes(c.status) && (
                      <Button
                        size="sm"
                        disabled={loadingAction}
                        onClick={() => handleAcceptTask(c.id)}
                        className="bg-primary hover:bg-primary/90 text-white font-bold text-xs h-9 rounded-xl gap-1.5 shadow-md"
                      >
                        <Check className="h-3.5 w-3.5" />
                        <span>Accept Task →</span>
                      </Button>
                    )}

                    {/* Stage 1b: Accepted -> Start Work */}
                    {["accepted", "ACCEPTED", "verified"].includes(c.status) && (
                      <Button
                        size="sm"
                        disabled={loadingAction}
                        onClick={() => handleStartWork(c.id)}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs h-9 rounded-xl gap-1.5 shadow-md"
                      >
                        <Play className="h-3.5 w-3.5" />
                        <span>Start Work →</span>
                      </Button>
                    )}

                    {/* Stage 2: In Progress -> Update Progress & Submit Completion */}
                    {["in_progress", "IN_PROGRESS"].includes(c.status) && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedTask(c);
                            setActiveModalAction("progress");
                          }}
                          className="text-xs h-9 rounded-xl font-semibold gap-1"
                        >
                          + Update Progress
                        </Button>

                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedTask(c);
                            setActiveModalAction("complete");
                          }}
                          className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs h-9 rounded-xl gap-1.5 shadow-md"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>Submit Completion →</span>
                        </Button>
                      </>
                    )}

                    {/* Stage 3: Resolution Submitted */}
                    {isResolutionSubmitted && (
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs py-1.5 px-3">
                        ✓ Completion Submitted (Pending Admin Verification)
                      </Badge>
                    )}

                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setSelectedTask(c);
                        setActiveModalAction("view");
                      }}
                      className="text-xs h-9 rounded-xl ml-auto"
                    >
                      View Details →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>

      {/* ── Officer Workflow Dialog ── */}
      <Dialog open={!!selectedTask} onOpenChange={(open) => !open && setSelectedTask(null)}>
        <DialogContent className="max-w-lg rounded-3xl p-6 sm:p-8">
          {selectedTask && (
            <div className="space-y-5">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold font-display">
                  {activeModalAction === "complete"
                    ? `Submit Work Completion: ${selectedTask.id}`
                    : activeModalAction === "progress"
                    ? `Add Progress Update: ${selectedTask.id}`
                    : `Complaint Details: ${selectedTask.id}`}
                </DialogTitle>
              </DialogHeader>

              {toastMsg && (
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>{toastMsg}</span>
                </div>
              )}

              {/* ── Action 1: Submit Completion ── */}
              {activeModalAction === "complete" && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-900 space-y-1">
                    <p className="font-bold">Administrative Accountability Notice:</p>
                    <p className="leading-relaxed">
                      Submitting completion changes status to <strong>Resolution Submitted</strong>. The Constituency Admin will inspect remarks and evidence to verify and resolve.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold">Supporting Evidence / Resolution Photo:</Label>
                    <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-center space-y-2">
                      <img src={afterPhotoUrl} alt="Work Evidence" className="h-36 w-full object-cover rounded-xl shadow-sm" />
                      <p className="text-[11px] text-emerald-700 font-semibold">✓ Work proof attached</p>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold">Work Completion Remarks *:</Label>
                    <Textarea
                      value={completionRemarks}
                      onChange={(e) => setCompletionRemarks(e.target.value)}
                      rows={2}
                      className="text-xs rounded-xl"
                      placeholder="Describe the exact repair or resolution performed..."
                    />
                  </div>

                  <Button
                    onClick={() => handleSubmitCompletion(selectedTask.id)}
                    disabled={loadingAction || !completionRemarks.trim()}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold h-12 rounded-xl shadow-md gap-2 text-xs"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Submit Completion for Admin Verification</span>
                  </Button>
                </div>
              )}

              {/* ── Action 2: Progress Note ── */}
              {activeModalAction === "progress" && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold">Field Progress Remarks *:</Label>
                    <Textarea
                      value={progressRemarks}
                      onChange={(e) => setProgressRemarks(e.target.value)}
                      placeholder="e.g. Parts delivered to site, repair crew active..."
                      rows={3}
                      className="text-xs rounded-xl"
                    />
                  </div>
                  <Button
                    onClick={() => handleUpdateProgress(selectedTask.id)}
                    disabled={loadingAction || !progressRemarks.trim()}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11 rounded-xl text-xs"
                  >
                    Save Progress Note
                  </Button>
                </div>
              )}

              {/* ── Action 3: Details & Timeline View ── */}
              {activeModalAction === "view" && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-muted/30 text-xs space-y-1 border border-border">
                    <p className="font-bold text-foreground">{selectedTask.description}</p>
                    <p className="text-muted-foreground">{selectedTask.address}</p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-bold">Lifecycle Timeline History:</Label>
                    <div className="space-y-2 pl-2 border-l-2 border-primary/30 max-h-48 overflow-y-auto">
                      {selectedTask.timeline.map((entry, idx) => (
                        <div key={idx} className="relative pl-3 text-xs space-y-0.5">
                          <div className="absolute -left-[15px] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-foreground">{bi(entry.label)}</span>
                            <span className="text-[10px] text-muted-foreground">{entry.date} {entry.time}</span>
                          </div>
                          <p className="text-muted-foreground">{bi(entry.note)}</p>
                          {entry.performedBy && (
                            <p className="text-[10px] text-primary">By: {entry.performedBy} ({entry.performedByRole})</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
