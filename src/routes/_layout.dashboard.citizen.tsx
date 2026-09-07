import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  FileText,
  Bell,
  Star,
  Users,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  MapPin,
  Calendar,
  Building2,
  MessageSquare,
  Sparkles,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Phone,
  Mail,
  UserCheck,
  RefreshCw,
  X,
  Eye,
  LogOut,
  Plus,
  Activity,
  FileCheck,
  FolderOpen,
  Workflow,
  Trash2,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { useWorkflow } from "@/lib/workflow";
import type { Complaint, TimelineEntry } from "@/data/mock";
import { maskMobile } from "@/data/mock";
import { CATEGORIES, DEPARTMENTS, WARDS, STATUS_META } from "@/config/aram";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/_layout/dashboard/citizen")({
  component: CitizenDashboardPage,
});

const STATUS_BADGES: Record<string, { bg: string; text: string }> = {
  new: { bg: "bg-blue-100", text: "text-blue-800" },
  pending_verification: { bg: "bg-amber-100", text: "text-amber-800" },
  verified: { bg: "bg-sky-100", text: "text-sky-800" },
  assigned: { bg: "bg-indigo-100", text: "text-indigo-800" },
  in_progress: { bg: "bg-amber-100", text: "text-amber-800" },
  completed: { bg: "bg-emerald-100", text: "text-emerald-800" },
  citizen_verification: { bg: "bg-violet-100", text: "text-violet-800" },
  closed: { bg: "bg-slate-100", text: "text-slate-700" },
  reopened: { bg: "bg-rose-100", text: "text-rose-800" },
};

const TIMELINE_STAGE_META: Record<
  string,
  { label: { en: string; ta: string };
  tone: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}
> = {
  submitted: { label: { en: "Submitted", ta: "சமர்ப்பிக்கப்பட்டது" }, tone: "from-blue-500 to-blue-600", icon: FileText, color: "bg-blue-500" },
  verified: { label: { en: "Admin Review", ta: "நிர்வாகி ஆய்வு" }, tone: "from-sky-500 to-sky-600", icon: ShieldCheck, color: "bg-sky-500" },
  assigned: { label: { en: "Department Assigned", ta: "துறை ஒதுக்கீடு" }, tone: "from-indigo-500 to-indigo-600", icon: Building2, color: "bg-indigo-500" },
  officer: { label: { en: "Officer Assigned", ta: "அலுவலர் நியமனம்" }, tone: "from-violet-500 to-violet-600", icon: UserCheck, color: "bg-violet-500" },
  started: { label: { en: "Work Started", ta: "பணி தொடக்கம்" }, tone: "from-orange-500 to-orange-600", icon: Activity, color: "bg-orange-500" },
  progress: { label: { en: "Work In Progress", ta: "பணி நடைபெறுகிறது" }, tone: "from-amber-500 to-amber-600", icon: Workflow, color: "bg-amber-500" },
  completed: { label: { en: "Resolution Submitted", ta: "தீர்வு சமர்ப்பணம்" }, tone: "from-teal-500 to-teal-600", icon: FileCheck, color: "bg-teal-500" },
  closed: { label: { en: "Complaint Resolved", ta: "புகார் தீர்வு" }, tone: "from-emerald-500 to-emerald-600", icon: CheckCircle2, color: "bg-emerald-500" },
  reopened: { label: { en: "Reopened", ta: "மீண்டும் திறக்கப்பட்டது" }, tone: "from-rose-500 to-rose-600", icon: RefreshCw, color: "bg-rose-500" },
  citizen_verify: { label: { en: "Citizen Verification", ta: "குடிமகன் உறுதிப்படுத்தல்" }, tone: "from-violet-500 to-purple-600", icon: UserCheck, color: "bg-violet-500" },
};

const EXPECTED_STAGE_ORDER: Array<keyof typeof TIMELINE_STAGE_META> = [
  "submitted",
  "verified",
  "assigned",
  "officer",
  "started",
  "progress",
  "completed",
  "closed",
];

function ComplaintTimeline({
  timeline,
  lang,
}: {
  timeline: TimelineEntry[];
  lang: "en" | "ta";
}) {
  const achieved = new Set(timeline.map((t) => t.stage));
  const orderedStages: Array<{ stage: string; entry?: TimelineEntry; status: "done" | "current" | "pending" }> = [];

  let firstMissing = true;
  EXPECTED_STAGE_ORDER.forEach((s) => {
    const entriesForStage = timeline.filter((t) => t.stage === s);
    if (entriesForStage.length > 0) {
      entriesForStage.forEach((entry, i) => {
        orderedStages.push({ stage: s, entry, status: "done" });
      });
      firstMissing = false;
    } else if (firstMissing) {
      orderedStages.push({ stage: s, status: "current" });
      firstMissing = false;
    } else {
      orderedStages.push({ stage: s, status: "pending" });
    }
  });

  const citizenVerifyEntries = timeline.filter((t) => t.stage === "citizen_verify");
  citizenVerifyEntries.forEach((entry) => {
    orderedStages.push({ stage: "citizen_verify", entry, status: "done" });
  });

  return (
    <div className="space-y-1">
      {orderedStages.map((item, idx) => {
        const meta = TIMELINE_STAGE_META[item.stage];
        const IconComp = meta?.icon || FileText;
        const isLast = idx === orderedStages.length - 1;
        const isDone = item.status === "done";
        const isCurrent = item.status === "current";
        return (
          <div key={`${item.stage}-${idx}`} className="relative flex gap-3 min-h-[72px]">
            {!isLast && (
              <div
                className={`absolute left-[19px] top-[38px] w-0.5 h-[calc(100%-32px)] ${
                  isDone ? "bg-emerald-300" : isCurrent ? "bg-primary/30" : "bg-slate-200"
                }`}
              />
            )}
            <div
              className={`relative z-10 h-9 w-9 rounded-full flex items-center justify-center shrink-0 ring-4 ${
                isDone
                  ? `bg-gradient-to-br ${meta?.tone || "from-primary to-primary/80"} ring-emerald-200 text-white`
                  : isCurrent
                    ? "bg-white ring-primary/40 border-2 border-primary text-primary"
                    : "bg-white ring-slate-100 text-slate-400 border border-slate-200"
              }`}
            >
              <IconComp className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0 pb-3">
              <div className="flex items-start justify-between gap-2 pt-0.5">
                <p
                  className={`text-sm font-bold ${
                  isDone ? "text-foreground" : isCurrent ? "text-primary" : "text-slate-400"
                }`}
                >
                  {meta ? (lang === "ta" ? meta.label.ta : meta.label.en) : item.stage}
                </p>
                {item.entry && (
                  <span className="text-[10px] text-muted-foreground shrink-0 font-medium">
                    {item.entry.date} • {item.entry.time}
                  </span>
                )}
              </div>
              {item.entry ? (
                <div className="space-y-1 mt-0.5">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.entry.note?.[lang] || item.entry.note?.en || ""}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
                    {item.entry.department && (
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <Building2 className="h-3 w-3" />
                        <span className="font-semibold text-slate-700">
                          {DEPARTMENTS.find((d) => d.id === item.entry!.department)
                            ? (lang === "ta"
                                ? DEPARTMENTS.find((d) => d.id === item.entry!.department)!.name.ta
                                : DEPARTMENTS.find((d) => d.id === item.entry!.department)!.name.en)
                            : item.entry.department}
                        </span>
                      </span>
                    )}
                    {item.entry.officer && (
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <UserCheck className="h-3 w-3" />
                        <span className="font-semibold text-slate-700">{item.entry.officer}</span>
                      </span>
                    )}
                    {item.entry.remarks && (
                      <span className="inline-flex items-start gap-1 text-muted-foreground max-w-full">
                        <MessageSquare className="h-3 w-3 mt-0.5 shrink-0" />
                        <span className="font-medium">{item.entry.remarks}</span>
                      </span>
                    )}
                    {item.entry.resolutionInfo && (
                      <div className="w-full rounded-lg bg-emerald-50 border border-emerald-200 p-2 mt-1 text-emerald-800">
                        <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-700 mb-0.5">
                          {lang === "ta" ? "தீர்வு விவரம்" : "Resolution Details"}
                        </p>
                        <p className="text-xs font-medium leading-relaxed">{item.entry.resolutionInfo}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-[11px] text-slate-400 mt-0.5 italic">
                  {lang === "ta"
                    ? "இந்த நிலை வரை எதிர்பார்க்கப்படுகிறது..."
                    : "Pending — awaiting this step..."}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CitizenDashboardPage() {
  const { bi, lang } = useI18n();
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    complaints,
    citizens,
    citizenSession,
    notifications,
    verifyResolution,
    markNotificationRead,
    citizenLogout,
    getComplaintsByCitizenId,
    getComplaintsByMobile,
  } = useWorkflow();

  const [activeTab, setActiveTab] = useState("complaints");
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [verificationFeedback, setVerificationFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const [showReopenForm, setShowReopenForm] = useState(false);
  const [reopenReason, setReopenReason] = useState("");
  const [actionDoneMsg, setActionDoneMsg] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [citizenAppts, setCitizenAppts] = useState<any[]>([]);
  const [loadingAppts, setLoadingAppts] = useState(false);

  const effectiveCitizen = citizenSession
    ? {
        citizenId: citizenSession.citizenId,
        mobile: citizenSession.mobileNumber,
        fullName: citizenSession.fullName,
        wardId: citizenSession.wardId,
      }
    : user
      ? {
          citizenId: "demo-citizen-01",
          mobile: user.mobile,
          fullName: user.name,
          wardId: user.wardId,
        }
      : null;

  const fetchCitizenAppts = useCallback(async () => {
    if (!effectiveCitizen?.mobile) return;
    try {
      setLoadingAppts(true);
      const res = await fetch(`/api/appointments?mobile=${effectiveCitizen.mobile.replace(/\D/g, "")}`);
      const data = await res.json();
      if (res.ok && data.ok && Array.isArray(data.appointments)) {
        setCitizenAppts(data.appointments);
      }
    } catch {
      /* ignore */
    } finally {
      setLoadingAppts(false);
    }
  }, [effectiveCitizen?.mobile]);

  useEffect(() => {
    if (!effectiveCitizen) {
      navigate({ to: "/login" });
    } else {
      fetchCitizenAppts();
    }
  }, [effectiveCitizen, navigate, fetchCitizenAppts]);

  const handleCancelCitizenAppt = async (apptId: string) => {
    if (!confirm(lang === "ta" ? "இந்த சந்திப்பை ரத்து செய்ய விரும்புகிறீர்களா?" : "Are you sure you want to cancel this appointment?")) {
      return;
    }
    try {
      const res = await fetch(`/api/appointments/${apptId}`, { method: "DELETE" });
      if (res.ok) {
        fetchCitizenAppts();
      }
    } catch {
      /* ignore */
    }
  };

  if (!effectiveCitizen) {
    return null;
  }

  const myComplaints = citizenSession
    ? getComplaintsByCitizenId(citizenSession.citizenId)
    : getComplaintsByMobile(effectiveCitizen.mobile);

  const filteredComplaints = myComplaints.filter((c) => {
    if (filterStatus !== "all" && c.status !== filterStatus) return false;
    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      return (
        c.id.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const total = myComplaints.length;
  const newlyRegistered = myComplaints.filter((c) => c.status === "new" || c.status === "pending_verification").length;
  const assigned = myComplaints.filter((c) => c.status === "assigned" || c.status === "verified").length;
  const inProgress = myComplaints.filter((c) => c.status === "in_progress").length;
  const resolved = myComplaints.filter((c) => c.status === "citizen_verification" || c.status === "completed").length;
  const closed = myComplaints.filter((c) => c.status === "closed").length;

  const awaitingVerification = myComplaints.filter(
    (c) => c.status === "citizen_verification",
  );

  const displayMobile = maskMobile(effectiveCitizen.mobile);
  const displayName = effectiveCitizen.fullName || (lang === "ta" ? "அரசு குடிமகன்" : "Citizen");
  const initial = displayName.charAt(0).toUpperCase();
  const ward = effectiveCitizen.wardId ? WARDS.find((w) => w.id === effectiveCitizen.wardId) : null;

  const handleVerifyYes = () => {
    if (!selectedComplaint) return;
    verifyResolution(selectedComplaint.id, true, rating, verificationFeedback);
    setActionDoneMsg(
      lang === "ta"
        ? "தீர்வு உறுதிப்படுத்தப்பட்டு புகார் மூடப்பட்டது!"
        : "Resolution verified! Complaint closed successfully.",
    );
    setTimeout(() => {
      setSelectedComplaint(null);
      setActionDoneMsg("");
    }, 1800);
  };

  const handleVerifyNo = () => {
    if (!selectedComplaint) return;
    verifyResolution(selectedComplaint.id, false, 0, reopenReason);
    setActionDoneMsg(
      lang === "ta"
        ? "புகார் மீண்டும் திறக்கப்பட்டு துறைக்கு அனுப்பப்பட்டது."
        : "Complaint reopened and sent back to the department.",
    );
    setTimeout(() => {
      setSelectedComplaint(null);
      setShowReopenForm(false);
      setActionDoneMsg("");
    }, 1800);
  };

  const handleLogout = () => {
    citizenLogout();
    navigate({ to: "/" });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10 space-y-6">
      <div className="rounded-3xl border border-border bg-white shadow-soft p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-primary/10 to-teal-400/10 rounded-full -translate-y-24 translate-x-24 pointer-events-none" />
        <div className="flex items-center gap-4 relative z-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-teal-500 text-white text-2xl font-bold font-display shadow-md ring-4 ring-white">
            {initial}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-slate-950 font-display tracking-tight">
                {displayName}
              </h1>
              <Badge className="bg-primary/10 text-primary border-0 text-xs font-bold">
                {lang === "ta" ? "குடிமகன்" : "Citizen"}
              </Badge>
              {citizenSession && (
                <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-300 text-[10px] font-extrabold gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  {lang === "ta" ? "OTP சரிபார்ப்பு" : "OTP Verified"}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-800 font-semibold mt-1.5 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span className="font-bold tracking-wide">+91 {displayMobile}</span>
              </span>
              {ward && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {lang === "ta" ? ward.name.ta : ward.name.en}
                </span>
              )}
              {citizens.find((c) => c.citizenId === effectiveCitizen.citizenId)?.email && (
                <span className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  {citizens.find((c) => c.citizenId === effectiveCitizen.citizenId)!.email}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto relative z-10">
          <Button asChild className="h-11 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold gap-2 flex-1 md:flex-initial shadow-sm">
            <Link to="/complaints/register">
              <Plus className="h-4 w-4" />
              <span>{lang === "ta" ? "புதிய புகார்" : "Report Complaint"}</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="h-11 rounded-xl font-bold gap-1.5 flex-1 md:flex-initial text-slate-900 border-slate-300 bg-white hover:bg-slate-100"
          >
            <LogOut className="h-4 w-4" />
            <span>{lang === "ta" ? "வெளியேறு" : "Logout"}</span>
          </Button>
        </div>
      </div>

      {awaitingVerification.length > 0 && (
        <div className="rounded-2xl bg-amber-50 border-2 border-amber-300 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 shrink-0">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-black text-amber-950">
                {lang === "ta" ? "உங்கள் உறுதிப்படுத்தல் தேவை!" : "Action Required: Verify Resolution"}
              </p>
              <p className="text-xs text-amber-900 font-bold mt-0.5">
                {awaitingVerification.length}{" "}
                {lang === "ta"
                  ? "புகார்(கள்) கள அலுவலரால் முடிக்கப்பட்டுள்ளது. பிரச்சினை தீர்க்கப்பட்டதா என உறுதிப்படுத்தவும்."
                  : "complaint(s) marked complete. Please confirm if resolved."}
              </p>
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => setSelectedComplaint(awaitingVerification[0] || null)}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 rounded-xl"
          >
            {lang === "ta" ? "இப்போது சரிபார்க்கவும் →" : "Verify Now →"}
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-4 sm:p-5">
          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">{lang === "ta" ? "மொத்தம்" : "Total"}</span>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-display">{total}</p>
          <div className="absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-slate-200/40 group-hover:bg-slate-200 transition-colors flex items-center justify-center">
            <FolderOpen className="h-5 w-5 text-slate-500" />
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-4 sm:p-5">
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">{lang === "ta" ? "புதிதாக பதிவு" : "New Registered"}</span>
          <p className="text-2xl sm:text-3xl font-black text-blue-900 mt-1 font-display">{newlyRegistered}</p>
          <div className="absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-blue-200/40 group-hover:bg-blue-200 transition-colors flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-blue-600" />
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 p-4 sm:p-5">
          <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wide">{lang === "ta" ? "ஒதுக்கப்பட்டது" : "Assigned"}</span>
          <p className="text-2xl sm:text-3xl font-black text-indigo-900 mt-1 font-display">{assigned}</p>
          <div className="absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-indigo-200/40 group-hover:bg-indigo-200 transition-colors flex items-center justify-center">
            <Building2 className="h-5 w-5 text-indigo-600" />
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-200 p-4 sm:p-5">
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wide">{lang === "ta" ? "செயல்பாட்டில்" : "In Progress"}</span>
          <p className="text-2xl sm:text-3xl font-black text-amber-900 mt-1 font-display">{inProgress}</p>
          <div className="absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-amber-200/40 group-hover:bg-amber-200 transition-colors flex items-center justify-center">
            <Activity className="h-5 w-5 text-amber-600" />
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-200 p-4 sm:p-5">
          <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wide">{lang === "ta" ? "தீர்க்கப்பட்டது" : "Resolved"}</span>
          <p className="text-2xl sm:text-3xl font-black text-teal-900 mt-1 font-display">{resolved}</p>
          <div className="absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-teal-200/40 group-hover:bg-teal-200 transition-colors flex items-center justify-center">
            <FileCheck className="h-5 w-5 text-teal-600" />
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-4 sm:p-5">
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">{lang === "ta" ? "மூடப்பட்டது" : "Closed"}</span>
          <p className="text-2xl sm:text-3xl font-black text-emerald-900 mt-1 font-display">{closed}</p>
          <div className="absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-emerald-200/40 group-hover:bg-emerald-200 transition-colors flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-5">
        <TabsList className="bg-slate-200/70 p-1 rounded-2xl h-auto flex flex-wrap gap-1">
          <TabsTrigger value="complaints" className="rounded-xl text-xs font-black py-2.5 px-4 text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            <FileText className="h-3.5 w-3.5 mr-1.5" />
            {lang === "ta" ? "எனது புகார்கள்" : "My Complaints"} ({total})
          </TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-xl text-xs font-black py-2.5 px-4 text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            <Bell className="h-3.5 w-3.5 mr-1.5" />
            {lang === "ta" ? "அறிவிப்புகள்" : "Notifications"}
          </TabsTrigger>
          <TabsTrigger value="appointments" className="rounded-xl text-xs font-black py-2.5 px-4 text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            <Users className="h-3.5 w-3.5 mr-1.5" />
            {lang === "ta" ? "எனது சந்திப்புகள்" : "Appointments"}
          </TabsTrigger>
          <TabsTrigger value="schemes" className="rounded-xl text-xs font-black py-2.5 px-4 text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            <Star className="h-3.5 w-3.5 mr-1.5" />
            {lang === "ta" ? "அரசு திட்டங்கள்" : "Schemes"}
          </TabsTrigger>
          <TabsTrigger value="profile" className="rounded-xl text-xs font-black py-2.5 px-4 text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            <UserCheck className="h-3.5 w-3.5 mr-1.5" />
            {lang === "ta" ? "சுயவிவரம்" : "Profile"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="complaints" className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={lang === "ta" ? "புகார் ID / விவரம் / முகவரி..." : "Search by ID, description, or address..."}
                className="h-10 pl-10 rounded-xl text-sm font-semibold text-slate-950 bg-white border-slate-300 placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto">
              {[
                { id: "all", label: { en: "All", ta: "அனைத்தும்" } },
                { id: "new", label: { en: "New", ta: "புதிய" } },
                { id: "assigned", label: { en: "Assigned", ta: "ஒதுக்கப்பட்டது" } },
                { id: "in_progress", label: { en: "Progress", ta: "முன்னேற்றம்" } },
                { id: "citizen_verification", label: { en: "To Verify", ta: "சரிபார்க்க" } },
                { id: "closed", label: { en: "Closed", ta: "மூடப்பட்டது" } },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilterStatus(f.id)}
                  className={`shrink-0 px-3 py-2 rounded-xl text-[11px] font-black border transition-all ${
                    filterStatus === f.id
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-slate-800 border-slate-300 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {lang === "ta" ? f.label.ta : f.label.en}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {filteredComplaints.length === 0 ? (
              <Card className="rounded-2xl border-dashed border-slate-300 bg-slate-50/60">
                <CardContent className="p-10 text-center space-y-3">
                  <div className="h-14 w-14 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                    <FileText className="h-7 w-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-slate-800">
                      {lang === "ta" ? "இப்போது புகார்கள் எதுவும் இல்லை" : "No complaints yet"}
                    </h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      {lang === "ta"
                        ? "இந்த மொபைல் எண்ணுக்கு புகார் பதிவு செய்யப்படவில்லை. புதிய புகாரை பதிவு செய்ய கீழே கிளிக் செய்யவும்."
                        : "You haven't registered any complaints on this mobile yet."}
                    </p>
                  </div>
                  <Button asChild className="mt-2 h-11 rounded-xl bg-primary hover:bg-primary/90 font-bold text-sm gap-2">
                    <Link to="/complaints/register">
                      <Plus className="h-4 w-4" />
                      {lang === "ta" ? "புதிய புகாரை பதிவு செய்க" : "Report Your First Complaint"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredComplaints.map((c) => {
                const cat = CATEGORIES.find((x) => x.id === c.categoryId);
                const dept = DEPARTMENTS.find((d) => d.id === c.departmentId);
                const ward = WARDS.find((w) => w.id === c.wardId);
                const badgeStyle = STATUS_BADGES[c.status] || { bg: "bg-muted", text: "text-muted-foreground" };
                const meta = STATUS_META[c.status];

                return (
                  <Card
                    key={c.id}
                    onClick={() => setSelectedComplaint(c)}
                    className="border-slate-200 bg-white hover:border-primary/50 shadow-sm hover:shadow-md transition-all cursor-pointer rounded-2xl overflow-hidden group"
                  >
                    <CardContent className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-mono font-black text-primary">{c.id}</span>
                          <Badge className={`text-[11px] font-extrabold border-0 ${badgeStyle.bg} ${badgeStyle.text}`}>
                            {meta ? bi(meta.label) : c.status.replace("_", " ")}
                          </Badge>
                          <span className="text-xs text-slate-700 flex items-center gap-1 font-bold">
                            <Calendar className="h-3 w-3" />
                            {c.createdAt}
                          </span>
                          {c.updatedAt && c.updatedAt !== c.createdAt && (
                            <span className="text-[11px] text-slate-600 font-semibold flex items-center gap-0.5">
                              <RefreshCw className="h-3 w-3" />
                              {lang === "ta" ? "புதுப்பிக்கப்பட்டது:" : "Updated:"} {c.updatedAt}
                            </span>
                          )}
                        </div>

                        <h3 className="text-sm sm:text-base font-black text-slate-950 group-hover:text-primary transition-colors line-clamp-1">
                          {cat ? bi(cat.name) : c.categoryId}: {c.description}
                        </h3>

                        <div className="flex items-center gap-x-3 gap-y-1 text-xs text-slate-800 font-medium flex-wrap">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span className="line-clamp-1 font-semibold">{c.address}</span>
                          </span>
                          <span>•</span>
                          <span className="font-bold">Ward {ward?.number || 110}</span>
                          <span>•</span>
                          <span className="font-extrabold text-slate-900">
                            {dept ? bi(dept.name) : "Public Works"}
                          </span>
                          {c.officer && (
                            <>
                              <span>•</span>
                              <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                                <UserCheck className="h-3 w-3" />
                                {c.officer}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 md:flex-row w-full md:w-auto">
                        {c.status === "citizen_verification" ? (
                          <Button className="flex-1 md:flex-none bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs gap-1.5 h-10 px-4">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>{lang === "ta" ? "சரிபார்க்க" : "Verify"}</span>
                          </Button>
                        ) : null}
                        <Button variant="outline" className="flex-1 md:flex-none rounded-xl text-xs font-semibold gap-1 group-hover:bg-primary group-hover:text-white transition-colors h-10 px-4">
                          <Eye className="h-3.5 w-3.5" />
                          <span>{lang === "ta" ? "விவரங்கள்" : "View Details"}</span>
                          <ChevronRight className="h-3.5 w-3.5 -mr-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-3">
          <Card className="rounded-2xl border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold">{lang === "ta" ? "அறிவிப்புகள்" : "Notifications"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-xs text-muted-foreground">
                  {lang === "ta" ? "இப்போது அறிவிப்புகள் எதுவும் இல்லை" : "No notifications yet."}
                </div>
              ) : (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => markNotificationRead(n.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      n.read ? "bg-white border-border" : "bg-primary/5 border-primary/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-3">
                        <div className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${n.read ? "bg-muted-foreground" : "bg-primary"}`} />
                        <div>
                          <h4 className="text-sm font-bold text-foreground">{bi(n.title)}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{bi(n.body)}</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-muted-foreground shrink-0">{n.date}</span>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-4">
          <Card className="rounded-2xl border-border shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {lang === "ta" ? "சட்டமன்ற உறுப்பினர் சந்திப்பு கோரிக்கைகள்" : "MLA Meeting Appointments"}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {lang === "ta" ? "பதிவு செய்யப்பட்ட நேரடி சந்திப்பு விவரங்கள்" : "Track and manage your official appointment requests"}
                </p>
              </div>
              <Button asChild size="sm" className="rounded-xl font-bold h-9">
                <Link to="/appointments">
                  <Plus className="h-3.5 w-3.5 mr-1" />
                  {lang === "ta" ? "புதிய சந்திப்பு" : "Book New"}
                </Link>
              </Button>
            </div>

            {loadingAppts ? (
              <div className="p-8 text-center text-xs text-muted-foreground">
                Loading your appointments...
              </div>
            ) : citizenAppts.length === 0 ? (
              <div className="p-10 text-center border border-dashed border-border rounded-2xl bg-muted/20 space-y-2">
                <Calendar className="h-8 w-8 text-muted-foreground/40 mx-auto" />
                <p className="font-bold text-foreground text-sm">No MLA appointments requested yet</p>
                <p className="text-xs text-muted-foreground">You can request an official meeting with your MLA to discuss constituency matters.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {citizenAppts.map((appt) => {
                  const statusColors: Record<string, string> = {
                    pending: "bg-amber-100 text-amber-800 border-amber-200",
                    under_review: "bg-blue-100 text-blue-800 border-blue-200",
                    approved: "bg-emerald-100 text-emerald-800 border-emerald-200",
                    rescheduled: "bg-purple-100 text-purple-800 border-purple-200",
                    upcoming: "bg-indigo-100 text-indigo-800 border-indigo-200",
                    completed: "bg-slate-100 text-slate-800 border-slate-200",
                    rejected: "bg-rose-100 text-rose-800 border-rose-200",
                    cancelled: "bg-red-100 text-red-800 border-red-200",
                  };

                  return (
                    <div
                      key={appt.appointmentId}
                      className="rounded-2xl border border-border p-4 bg-white shadow-xs space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-primary">{appt.appointmentId}</span>
                            <Badge className={`text-[10px] border font-bold px-2 py-0.5 ${statusColors[appt.status] || "bg-slate-100"}`}>
                              {appt.status?.replace("_", " ")?.toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-sm font-bold text-foreground mt-1">{appt.purpose}</p>
                          <p className="text-xs text-muted-foreground">{appt.description}</p>
                        </div>

                        {appt.status === "pending" && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleCancelCitizenAppt(appt.appointmentId)}
                            className="text-xs text-destructive hover:bg-destructive/10 rounded-xl h-8 px-2.5 font-bold"
                          >
                            <Trash2 className="h-3.5 w-3.5 mr-1" />
                            Cancel
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span>{appt.confirmedDate || appt.preferredDate} · {appt.confirmedTime || appt.preferredTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                          <span className="truncate">{appt.meetingLocation || "MLA Constituency Office"}</span>
                        </div>
                        {appt.relatedComplaintId && (
                          <div className="flex items-center gap-1.5">
                            <FileText className="h-3.5 w-3.5 text-primary" />
                            <span>Complaint #{appt.relatedComplaintId}</span>
                          </div>
                        )}
                      </div>

                      {appt.instructions && (
                        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                          <strong>Office Instructions:</strong> {appt.instructions}
                        </div>
                      )}

                      {appt.rejectionReason && (
                        <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
                          <strong>Note:</strong> {appt.rejectionReason}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="schemes" className="space-y-4">
          <Card className="rounded-2xl border-border shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <h3 className="text-base font-bold text-foreground">
                {lang === "ta" ? "பொருந்தக்கூடிய நலத்திட்டங்கள்" : "Eligible Citizen Schemes"}
              </h3>
              <Button asChild variant="ghost" size="sm" className="text-xs text-primary h-8">
                <Link to="/schemes">
                  {lang === "ta" ? "அனைத்தையும் காண்க →" : "Explore All →"}
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-border bg-white space-y-2 hover:shadow-sm transition-shadow">
                <Badge variant="secondary" className="text-[10px]">Education</Badge>
                <h4 className="text-sm font-bold text-foreground">Higher Education Scholarship</h4>
                <p className="text-xs text-muted-foreground">Tuition assistance up to ₹25,000 per year for college students.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-white space-y-2 hover:shadow-sm transition-shadow">
                <Badge variant="secondary" className="text-[10px]">Welfare</Badge>
                <h4 className="text-sm font-bold text-foreground">Senior Citizen Care Assistance</h4>
                <p className="text-xs text-muted-foreground">Monthly direct assistance and free health camp access.</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card className="rounded-2xl border-border shadow-sm p-6">
            <h3 className="text-base font-bold text-foreground mb-4">
              {lang === "ta" ? "குடிமக்கள் விவரக் குறிப்பு" : "Citizen Profile Details"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
                <span className="text-muted-foreground">{lang === "ta" ? "பெயர்:" : "Name:"}</span>
                <p className="text-sm font-bold text-foreground mt-0.5">{displayName}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
                <span className="text-muted-foreground">{lang === "ta" ? "மொபைல்:" : "Mobile:"}</span>
                <p className="text-sm font-bold text-foreground mt-0.5 font-mono tracking-wide">+91 {displayMobile}</p>
              </div>
              {citizens.find((c) => c.citizenId === effectiveCitizen.citizenId)?.email && (
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
                  <span className="text-muted-foreground">{lang === "ta" ? "மின்னஞ்சல்:" : "Email:"}</span>
                  <p className="text-sm font-bold text-foreground mt-0.5">
                    {citizens.find((c) => c.citizenId === effectiveCitizen!.citizenId)!.email}
                  </p>
                </div>
              )}
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
                <span className="text-muted-foreground">{lang === "ta" ? "தொகுதி & வார்டு:" : "Constituency & Ward:"}</span>
                <p className="text-sm font-bold text-foreground mt-0.5">
                  {ward ? (lang === "ta" ? ward.name.ta : ward.name.en) : "Ward 110 (Thousand Lights)"}
                </p>
              </div>
              {citizenSession?.loginAt && (
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-primary/5 to-white border border-primary/20 sm:col-span-2">
                  <span className="text-muted-foreground">{lang === "ta" ? "கடைசி உள்நுழைவு நேரம்:" : "Last Login:"}</span>
                  <p className="text-sm font-bold text-foreground mt-0.5">{citizenSession.loginAt}</p>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={!!selectedComplaint} onOpenChange={(open) => !open && setSelectedComplaint(null)}>
        <DialogContent className="max-w-2xl rounded-3xl p-0 max-h-[92vh] overflow-hidden flex flex-col">
          {selectedComplaint && (
            <div className="flex flex-col max-h-[92vh]">
              <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/60 shrink-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <DialogTitle className="text-lg sm:text-xl font-black font-display text-foreground flex items-center gap-2">
                      <span className="font-mono">{selectedComplaint.id}</span>
                      <Badge className={`text-[11px] font-bold border-0 ${STATUS_BADGES[selectedComplaint.status]?.bg || "bg-slate-100"} ${STATUS_BADGES[selectedComplaint.status]?.text || "text-slate-800"}`}>
                        {STATUS_META[selectedComplaint.status]?.label
                          ? bi(STATUS_META[selectedComplaint.status]!.label)
                          : selectedComplaint.status.replace("_", " ")}
                      </Badge>
                    </DialogTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      {lang === "ta" ? "சமர்ப்பித்த நேரம்:" : "Submitted:"} {selectedComplaint.createdAt}{"  •  "}
                      {lang === "ta" ? "கடைசி புதுப்பிப்பு:" : "Last Updated:"} {selectedComplaint.updatedAt}
                    </p>
                  </div>
                </div>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-5 space-y-5">
                {actionDoneMsg && (
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2 border border-emerald-200">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>{actionDoneMsg}</span>
                  </div>
                )}

                <div className="rounded-2xl bg-gradient-to-br from-slate-50/80 to-white border border-border p-4.5 p-5 space-y-3">
                  <p className="font-semibold text-foreground leading-relaxed">{selectedComplaint.description}</p>
                  <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-border/60 text-xs">
                    <div className="rounded-lg bg-white border border-border p-2.5">
                      <span className="text-muted-foreground text-[11px] block">{lang === "ta" ? "முகவரி:" : "Address:"}</span>
                      <span className="font-semibold text-foreground block mt-0.5 leading-snug">{selectedComplaint.address}</span>
                    </div>
                    <div className="rounded-lg bg-white border border-border p-2.5">
                      <span className="text-muted-foreground text-[11px] block">{lang === "ta" ? "வார்டு:" : "Ward:"}</span>
                      <span className="font-semibold text-foreground block mt-0.5">
                        {WARDS.find((w) => w.id === selectedComplaint.wardId)
                          ? lang === "ta"
                            ? WARDS.find((w) => w.id === selectedComplaint.wardId)!.name.ta
                            : WARDS.find((w) => w.id === selectedComplaint.wardId)!.name.en
                          : `Ward ${WARDS.find((w) => w.id === selectedComplaint.wardId)?.number || 110}`}
                      </span>
                    </div>
                    <div className="rounded-lg bg-white border border-border p-2.5">
                      <span className="text-muted-foreground text-[11px] block">{lang === "ta" ? "துரை:" : "Department:"}</span>
                      <span className="font-bold text-foreground block mt-0.5">
                        {DEPARTMENTS.find((d) => d.id === selectedComplaint.departmentId)
                          ? (lang === "ta"
                              ? DEPARTMENTS.find((d) => d.id === selectedComplaint.departmentId)!.name.ta
                              : DEPARTMENTS.find((d) => d.id === selectedComplaint.departmentId)!.name.en)
                          : selectedComplaint.departmentId}
                      </span>
                    </div>
                    <div className="rounded-lg bg-white border border-border p-2.5">
                      <span className="text-muted-foreground text-[11px] block">{lang === "ta" ? "முன்னுரிமை:" : "Priority:"}</span>
                      <span className="font-bold text-foreground uppercase block mt-0.5">{selectedComplaint.priority}</span>
                    </div>
                    <div className="rounded-lg bg-white border border-border p-2.5 sm:col-span-2">
                      <span className="text-muted-foreground text-[11px] block">{lang === "ta" ? "பொறுப்பு அலுவலர்:" : "Assigned Officer:"}</span>
                      <span className="font-semibold text-foreground block mt-0.5">
                        {selectedComplaint.officer || (lang === "ta" ? "ஒதுக்கப்படவில்லை" : "Pending Assignment")}
                      </span>
                    </div>
                    {selectedComplaint.resolutionDetails && (
                      <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 sm:col-span-2">
                        <span className="text-emerald-700 text-[11px] font-bold block uppercase tracking-wide">
                          {lang === "ta" ? "தீர்வு விவரம்:" : "Resolution Details:"}
                        </span>
                        <span className="font-medium text-emerald-900 block mt-0.5 leading-relaxed">
                          {selectedComplaint.resolutionDetails}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedComplaint.beforeImage && (
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {lang === "ta" ? "புகார் புகைப்படம்:" : "Before (Complaint):"}
                      </span>
                      <div className="rounded-xl overflow-hidden border border-border aspect-video shadow-sm">
                        <img src={selectedComplaint.beforeImage} alt="Before" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                  {selectedComplaint.afterImage && (
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        {lang === "ta" ? "தீர்வு புகைப்படம்:" : "After (Resolved):"}
                      </span>
                      <div className="rounded-xl overflow-hidden border border-emerald-300 ring-2 ring-emerald-100 aspect-video shadow-sm">
                        <img src={selectedComplaint.afterImage} alt="After" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                </div>

                {selectedComplaint.status === "citizen_verification" && (
                  <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border-2 border-violet-300 p-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-violet-700" />
                      <h4 className="text-sm font-black text-violet-950 font-display">
                        {lang === "ta" ? "பிரச்சினை தீர்க்கப்பட்டதா?" : "Has your issue been resolved?"}
                      </h4>
                    </div>
                    <p className="text-xs text-violet-800 leading-relaxed">
                      {lang === "ta"
                        ? "களப்பணி முடிந்ததாக குறிக்கப்பட்டுள்ளது. மேலேயுள்ள புகைப்படங்கள் மற்றும் கள நிலையை சரிபார்த்து உறுதிப்படுத்தவும்."
                        : "The field officer has marked this work complete with evidence. Please verify the resolution."}
                    </p>

                    {!showReopenForm ? (
                      <div className="space-y-4 pt-1">
                        <div className="space-y-1.5">
                          <Label className="text-xs font-bold text-violet-950">
                            {lang === "ta" ? "தீர்வு மதிப்பீடு (Rating):" : "Rate Resolution Quality:"}
                          </Label>
                          <div className="flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className={`text-2xl transition-transform hover:scale-110 ${
                                  star <= rating ? "text-amber-500" : "text-slate-300"
                                }`}
                              >
                                ★
                              </button>
                            ))}
                            <span className="text-xs font-bold text-violet-900 ml-2">{rating} / 5 Stars</span>
                          </div>
                        </div>

                        <Textarea
                          value={verificationFeedback}
                          onChange={(e) => setVerificationFeedback(e.target.value)}
                          placeholder={lang === "ta" ? "உங்கள் கருத்துக்களைப் பகிரவும் (விருப்பத்திற்குரியது)..." : "Share your feedback (optional)..."}
                          rows={2}
                          className="text-xs rounded-xl bg-white border-violet-200 focus-visible:ring-violet-400"
                        />

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
                          <Button
                            onClick={handleVerifyYes}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 rounded-xl gap-1.5 shadow-md"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                            <span>{lang === "ta" ? "ஆம், தீர்க்கப்பட்டது" : "YES, ISSUE RESOLVED"}</span>
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setShowReopenForm(true)}
                            className="flex-1 border-rose-300 text-rose-700 hover:bg-rose-50 font-bold h-11 rounded-xl"
                          >
                            <X className="h-4 w-4" />
                            <span>{lang === "ta" ? "இல்லை, இன்னும் உள்ளது" : "NO, STILL AN ISSUE"}</span>
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3 pt-1">
                        <Label className="text-xs font-bold text-rose-900">
                          {lang === "ta" ? "பிரச்சினை மீண்டும் திறக்கப்படுவதற்கான காரணம்:" : "Reason for reopening:"}
                        </Label>
                        <Textarea
                          value={reopenReason}
                          onChange={(e) => setReopenReason(e.target.value)}
                          placeholder="Please describe why the work is incomplete..."
                          rows={3}
                          className="text-xs rounded-xl bg-white border-rose-200 focus-visible:ring-rose-400"
                        />
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                          <Button
                            onClick={handleVerifyNo}
                            className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold h-10 rounded-xl"
                          >
                            {lang === "ta" ? "புகாரை மீண்டும் திறக்க" : "Reopen Complaint"}
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => setShowReopenForm(false)}
                            className="text-xs h-10"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <Workflow className="h-3.5 w-3.5 text-primary" />
                      {lang === "ta" ? "முழு காலவரிசை (Timeline)" : "Full Complaint Timeline"}
                    </h4>
                    <Badge variant="outline" className="text-[10px] text-muted-foreground bg-slate-50">
                      {selectedComplaint.timeline.length} {lang === "ta" ? "நிலைகள்" : "stages"}
                    </Badge>
                  </div>
                  <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-slate-50/60 p-4 sm:p-5">
                    <ComplaintTimeline timeline={selectedComplaint.timeline} lang={lang} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
