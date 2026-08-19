import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Clock,
  Building2,
  FileText,
  Filter,
  Search,
  Check,
  X,
  Copy,
  HelpCircle,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Send,
  Cpu,
  Layers,
  BarChart3,
  Users,
  Calendar,
  Eye,
  CalendarCheck,
  RotateCcw,
  MessageSquare,
  ChevronRight,
  Sparkles,
  Flame,
  Camera,
  AlertTriangle,
  RefreshCw,
  Phone,
  UserCheck,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { useWorkflow, type AppointmentItem, type FieldOfficerItem } from "@/lib/workflow";
import type { Complaint } from "@/data/mock";
import { maskMobile } from "@/data/mock";
import { CATEGORIES, DEPARTMENTS, WARDS, STATUS_META } from "@/config/aram";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/_layout/dashboard/constituency")({
  component: ConstituencyAdminDashboard,
});

const APPT_STATUS_CONFIG: Record<string, { label: string; cls: string }> = {
  pending: { label: "Pending Review", cls: "bg-amber-100 text-amber-800 border-amber-200" },
  under_review: { label: "Under Review", cls: "bg-blue-100 text-blue-800 border-blue-200" },
  approved: { label: "Approved", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  rescheduled: { label: "Rescheduled", cls: "bg-purple-100 text-purple-800 border-purple-200" },
  upcoming: { label: "Upcoming", cls: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  completed: { label: "Completed", cls: "bg-slate-100 text-slate-800 border-slate-200" },
  rejected: { label: "Rejected", cls: "bg-rose-100 text-rose-800 border-rose-200" },
  cancelled: { label: "Cancelled", cls: "bg-red-100 text-red-800 border-red-200" },
};

const COMPLAINT_STATUS_BADGES: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  pending_verification: "bg-amber-100 text-amber-800",
  verified: "bg-sky-100 text-sky-800",
  assigned: "bg-indigo-100 text-indigo-800",
  in_progress: "bg-amber-100 text-amber-800",
  completed: "bg-purple-100 text-purple-800",
  citizen_verification: "bg-purple-100 text-purple-800",
  closed: "bg-emerald-100 text-emerald-800",
};

export function ConstituencyAdminDashboard() {
  const { bi, lang } = useI18n();
  const { user } = useAuth();
  const {
    complaints,
    assignDepartmentToComplaint,
    verifyResolutionOnComplaint,
    fetchAppointments,
    updateAppointment,
    fetchFieldOfficers,
    refreshData,
  } = useWorkflow();

  const [activeMainTab, setActiveMainTab] = useState<"overview" | "complaints" | "verification" | "appointments" | "officers" | "escalations">("overview");

  // ── Complaint States ──
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [filterWard, setFilterWard] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [assignDeptId, setAssignDeptId] = useState<string>("highways");
  const [assignPriority, setAssignPriority] = useState<string>("medium");
  const [assignRemarks, setAssignRemarks] = useState("");
  const [reworkRemarks, setReworkRemarks] = useState("");
  const [showReworkBox, setShowReworkBox] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // ── Appointment States ──
  const [appointments, setAppointments] = useState<AppointmentItem[]>([]);
  const [loadingAppts, setLoadingAppts] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState<AppointmentItem | null>(null);
  const [apptStatusFilter, setApptStatusFilter] = useState<string>("all");
  const [apptSearchQuery, setApptSearchQuery] = useState("");

  // Action Dialog States for Appointments
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [confirmDate, setConfirmDate] = useState("");
  const [confirmTime, setConfirmTime] = useState("10:30 AM");
  const [venue, setVenue] = useState("MLA Constituency Office, Thousand Lights, Chennai");
  const [representative, setRepresentative] = useState("Hon. Member of Legislative Assembly");
  const [instructions, setInstructions] = useState("Please bring any supporting documents or previous complaint receipts.");
  const [apptRemarks, setApptRemarks] = useState("");

  const [showRescheduleDialog, setShowRescheduleDialog] = useState(false);
  const [rescheduleDate, setRescheduleDate] = useState("");
  const [rescheduleTime, setRescheduleTime] = useState("11:00 AM");

  const [showRejectApptDialog, setShowRejectApptDialog] = useState(false);
  const [apptRejectReason, setApptRejectReason] = useState("");

  // Field Officers
  const [officers, setOfficers] = useState<FieldOfficerItem[]>([]);

  const loadAppts = async () => {
    setLoadingAppts(true);
    const data = await fetchAppointments();
    setAppointments(data);
    setLoadingAppts(false);
  };

  const loadOfficers = async () => {
    const list = await fetchFieldOfficers();
    setOfficers(list);
  };

  useEffect(() => {
    loadAppts();
    loadOfficers();
  }, []);

  // Stats calculation
  const totalComplaints = complaints.length;
  const newCount = complaints.filter((c) => c.status === "new").length;
  const assignedCount = complaints.filter((c) => c.status === "assigned" || c.status === "verified").length;
  const inProgressCount = complaints.filter((c) => c.status === "in_progress").length;
  const pendingVerificationCount = complaints.filter((c) => ["completed", "citizen_verification"].includes(c.status)).length;
  const resolvedCount = complaints.filter((c) => c.status === "closed").length;
  const overdueCount = complaints.filter((c) => c.priority === "high" && c.status !== "closed").length;

  const totalAppts = appointments.length;
  const pendingAppts = appointments.filter((a) => a.status === "pending" || a.status === "under_review").length;
  const approvedAppts = appointments.filter((a) => a.status === "approved").length;

  // Open complaint review and auto-suggest department based on category
  const handleOpenComplaintReview = (c: Complaint) => {
    setSelectedComplaint(c);
    setShowReworkBox(false);
    setReworkRemarks("");
    // Recommend department based on category
    const cat = CATEGORIES.find((x) => x.id === c.categoryId);
    const suggestedDept = cat ? cat.department : "highways";
    setAssignDeptId(c.departmentId || suggestedDept);
    setAssignPriority(c.priority || "medium");
    setAssignRemarks("");
  };

  const handleAssignDepartment = async () => {
    if (!selectedComplaint) return;
    const res = await assignDepartmentToComplaint(selectedComplaint.id, assignDeptId, assignPriority, assignRemarks);
    if (res.ok) {
      setToastMsg(`Complaint #${selectedComplaint.id} allocated to department!`);
      setTimeout(() => {
        setSelectedComplaint(null);
        setToastMsg("");
        refreshData();
      }, 1500);
    }
  };

  const handleApproveResolution = async (id: string) => {
    const res = await verifyResolutionOnComplaint(id, true, "Verified and approved by Constituency Admin.");
    if (res.ok) {
      setToastMsg(`Complaint #${id} resolution verified and closed! Citizen notified.`);
      setTimeout(() => {
        setSelectedComplaint(null);
        setToastMsg("");
        refreshData();
      }, 1500);
    }
  };

  const handleRequestRework = async (id: string) => {
    if (!reworkRemarks.trim()) return;
    const res = await verifyResolutionOnComplaint(id, false, reworkRemarks);
    if (res.ok) {
      setToastMsg(`Complaint #${id} returned for rework with instructions.`);
      setTimeout(() => {
        setSelectedComplaint(null);
        setShowReworkBox(false);
        setReworkRemarks("");
        setToastMsg("");
        refreshData();
      }, 1500);
    }
  };

  const openApptDetails = (appt: AppointmentItem) => {
    setSelectedAppt(appt);
    setConfirmDate(appt.preferredDate);
    setConfirmTime(appt.preferredTime);
    setRescheduleDate(appt.preferredDate);
    setRescheduleTime(appt.preferredTime);
    setApptRemarks(appt.adminRemarks || "");
  };

  const handleApproveAppt = async () => {
    if (!selectedAppt) return;
    const res = await updateAppointment(selectedAppt.appointmentId, "approve", {
      confirmedDate: confirmDate || selectedAppt.preferredDate,
      confirmedTime: confirmTime || selectedAppt.preferredTime,
      meetingLocation: venue,
      mlaRepresentative: representative,
      instructions,
      adminRemarks: apptRemarks,
    });
    if (res.ok) {
      setToastMsg(`Appointment #${selectedAppt.appointmentId} confirmed and citizen notified!`);
      setShowApproveDialog(false);
      setSelectedAppt(null);
      loadAppts();
      setTimeout(() => setToastMsg(""), 2000);
    }
  };

  const handleRescheduleAppt = async () => {
    if (!selectedAppt) return;
    const res = await updateAppointment(selectedAppt.appointmentId, "reschedule", {
      confirmedDate: rescheduleDate,
      confirmedTime: rescheduleTime,
      adminRemarks: apptRemarks,
    });
    if (res.ok) {
      setToastMsg(`Appointment #${selectedAppt.appointmentId} rescheduled!`);
      setShowRescheduleDialog(false);
      setSelectedAppt(null);
      loadAppts();
      setTimeout(() => setToastMsg(""), 2000);
    }
  };

  const handleRejectAppt = async () => {
    if (!selectedAppt || !apptRejectReason.trim()) return;
    const res = await updateAppointment(selectedAppt.appointmentId, "reject", {
      reason: apptRejectReason.trim(),
      adminRemarks: apptRemarks,
    });
    if (res.ok) {
      setToastMsg(`Appointment #${selectedAppt.appointmentId} rejected.`);
      setShowRejectApptDialog(false);
      setSelectedAppt(null);
      setApptRejectReason("");
      loadAppts();
      setTimeout(() => setToastMsg(""), 2000);
    }
  };

  const handleCompleteAppt = async (apptId: string) => {
    const res = await updateAppointment(apptId, "complete", { adminRemarks: "Meeting concluded with MLA office." });
    if (res.ok) {
      setToastMsg(`Appointment #${apptId} marked as completed!`);
      setSelectedAppt(null);
      loadAppts();
      setTimeout(() => setToastMsg(""), 2000);
    }
  };

  // Filtered lists
  const filteredComplaints = complaints.filter((c) => {
    if (filterWard !== "all" && c.wardId !== filterWard) return false;
    if (filterStatus !== "all" && c.status !== filterStatus) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        c.id.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const filteredAppointments = appointments.filter((a) => {
    if (apptStatusFilter !== "all" && a.status !== apptStatusFilter) return false;
    if (apptSearchQuery.trim()) {
      const q = apptSearchQuery.toLowerCase();
      return (
        a.appointmentId.toLowerCase().includes(q) ||
        a.citizenName.toLowerCase().includes(q) ||
        a.mobileNumber.includes(q) ||
        a.purpose.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      {/* ── Top Header Banner ── */}
      <div className="rounded-3xl border border-border bg-white shadow-soft p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-600 text-white text-2xl shrink-0 shadow-md">
            🏛️
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-foreground font-display">
                ARAM Constituency Command Center
              </h1>
              <Badge className="bg-rose-100 text-rose-800 border-0 text-xs font-bold">
                Constituency Admin
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Logged in as: <strong className="text-foreground">{user?.name || "Constituency Administrator"}</strong> • Legislative Assembly Operations Desk
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              refreshData();
              loadAppts();
              loadOfficers();
            }}
            className="h-10 rounded-xl text-xs font-semibold gap-1.5"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Sync DB</span>
          </Button>
        </div>
      </div>

      {toastMsg && (
        <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2 shadow-xs">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* ── Global Nav Tabs ── */}
      <Tabs value={activeMainTab} onValueChange={(v: any) => setActiveMainTab(v)} className="space-y-6">
        <TabsList className="bg-muted/70 p-1.5 rounded-2xl h-auto flex flex-wrap gap-1">
          <TabsTrigger value="overview" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Layers className="h-3.5 w-3.5 mr-1.5" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="complaints" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <FileText className="h-3.5 w-3.5 mr-1.5" />
            Complaints Pipeline ({totalComplaints})
          </TabsTrigger>
          <TabsTrigger value="verification" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-purple-600" />
            Pending Verification ({pendingVerificationCount})
          </TabsTrigger>
          <TabsTrigger value="appointments" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Calendar className="h-3.5 w-3.5 mr-1.5 text-rose-600" />
            MLA Appointments ({totalAppts})
          </TabsTrigger>
          <TabsTrigger value="officers" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Users className="h-3.5 w-3.5 mr-1.5" />
            Field Officers ({officers.length})
          </TabsTrigger>
          <TabsTrigger value="escalations" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Flame className="h-3.5 w-3.5 mr-1.5 text-rose-600" />
            Escalations & SLA ({overdueCount})
          </TabsTrigger>
        </TabsList>

        {/* ── TAB 1: OVERVIEW ── */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
              <span className="text-[11px] font-bold text-blue-800 uppercase">New Reports</span>
              <p className="text-2xl sm:text-3xl font-black text-blue-950 mt-1 font-display">{newCount}</p>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
              <span className="text-[11px] font-bold text-indigo-800 uppercase">Assigned</span>
              <p className="text-2xl sm:text-3xl font-black text-indigo-950 mt-1 font-display">{assignedCount}</p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-[11px] font-bold text-amber-800 uppercase">In Progress</span>
              <p className="text-2xl sm:text-3xl font-black text-amber-950 mt-1 font-display">{inProgressCount}</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
              <span className="text-[11px] font-bold text-purple-800 uppercase">To Verify</span>
              <p className="text-2xl sm:text-3xl font-black text-purple-950 mt-1 font-display">{pendingVerificationCount}</p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-[11px] font-bold text-emerald-800 uppercase">Resolved</span>
              <p className="text-2xl sm:text-3xl font-black text-emerald-950 mt-1 font-display">{resolvedCount}</p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
              <span className="text-[11px] font-bold text-rose-800 uppercase flex items-center gap-1">
                <Flame className="h-3 w-3 text-rose-600" /> Overdue
              </span>
              <p className="text-2xl sm:text-3xl font-black text-rose-950 mt-1 font-display">{overdueCount}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-3xl border-border p-6 bg-white space-y-4">
              <h3 className="text-base font-bold text-foreground">Recent New Complaints Awaiting Allocation</h3>
              <div className="divide-y divide-border/60">
                {complaints.filter((c) => c.status === "new").slice(0, 4).map((c) => (
                  <div key={c.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <p className="font-bold text-primary">{c.id}</p>
                      <p className="font-semibold text-foreground">{c.description}</p>
                      <p className="text-muted-foreground">{c.address}</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleOpenComplaintReview(c)}
                      className="bg-primary hover:bg-primary/90 text-white text-xs rounded-xl h-8 font-bold"
                    >
                      Assign Dept →
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-3xl border-border p-6 bg-white space-y-4">
              <h3 className="text-base font-bold text-foreground">Pending MLA Appointment Requests</h3>
              <div className="divide-y divide-border/60">
                {appointments.filter((a) => a.status === "pending").slice(0, 4).map((a) => (
                  <div key={a.appointmentId} className="py-3 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <p className="font-bold text-rose-700">{a.appointmentId} • {a.citizenName}</p>
                      <p className="font-medium text-foreground">{a.purpose}</p>
                      <p className="text-muted-foreground">{a.preferredDate} at {a.preferredTime}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openApptDetails(a)}
                      className="text-xs rounded-xl h-8 font-bold hover:bg-rose-50 hover:text-rose-700"
                    >
                      Review →
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* ── TAB 2: COMPLAINTS PIPELINE ── */}
        <TabsContent value="complaints" className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-border shadow-sm">
            <div className="relative flex-1">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search complaints by ID, description, or address..."
                className="h-10 text-xs pl-9 rounded-xl"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <select
                value={filterWard}
                onChange={(e) => setFilterWard(e.target.value)}
                className="h-10 rounded-xl border border-input bg-background px-3 text-xs font-semibold"
              >
                <option value="all">All Wards (108 - 113)</option>
                {WARDS.map((w) => (
                  <option key={w.id} value={w.id}>
                    Ward {w.number} — {bi(w.name)}
                  </option>
                ))}
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="h-10 rounded-xl border border-input bg-background px-3 text-xs font-semibold"
              >
                <option value="all">All Statuses</option>
                <option value="new">New Complaints</option>
                <option value="verified">Verified (Assigned Dept)</option>
                <option value="assigned">Assigned Officer</option>
                <option value="in_progress">Work In Progress</option>
                <option value="completed">Pending Verification</option>
                <option value="closed">Resolved & Closed</option>
              </select>
            </div>
          </div>

          <Card className="rounded-3xl border-border shadow-sm overflow-hidden bg-white">
            <CardHeader className="border-b border-border/60 bg-muted/20 px-6 py-4">
              <CardTitle className="text-base font-bold text-foreground">
                Constituency Complaints List ({filteredComplaints.length})
              </CardTitle>
            </CardHeader>
            <div className="divide-y divide-border/60">
              {filteredComplaints.length === 0 ? (
                <div className="p-12 text-center text-xs text-muted-foreground">
                  No complaints found matching criteria.
                </div>
              ) : (
                filteredComplaints.map((c) => {
                  const catObj = CATEGORIES.find((cat) => cat.id === c.categoryId);
                  const wardObj = WARDS.find((w) => w.id === c.wardId);
                  const statusObj = STATUS_META[c.status];

                  return (
                    <div
                      key={c.id}
                      className="p-4 sm:p-5 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono font-bold text-xs text-primary">{c.id}</span>
                          <Badge className="bg-muted text-muted-foreground border-0 text-[10px]">
                            {bi(catObj?.name || { en: c.categoryId, ta: c.categoryId })}
                          </Badge>
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-primary" />
                            {wardObj ? `Ward ${wardObj.number} (${bi(wardObj.name)})` : c.wardId}
                          </span>
                          <Badge
                            className={`text-[10px] border-0 font-bold ${
                              c.priority === "high"
                                ? "bg-rose-100 text-rose-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {c.priority.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-foreground line-clamp-1">
                          {c.description}
                        </p>
                        <p className="text-[11px] text-muted-foreground truncate">{c.address}</p>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                        <Badge className={`text-xs border-0 font-semibold ${COMPLAINT_STATUS_BADGES[c.status] || "bg-muted"}`}>
                          {bi(statusObj?.label || { en: c.status, ta: c.status })}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleOpenComplaintReview(c)}
                          className="h-9 px-3.5 rounded-xl text-xs font-semibold"
                        >
                          Review & Manage →
                        </Button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </Card>
        </TabsContent>

        {/* ── TAB 3: RESOLUTION VERIFICATION ── */}
        <TabsContent value="verification" className="space-y-4">
          <Card className="rounded-3xl border-border shadow-sm p-6 bg-white space-y-4">
            <div>
              <h3 className="text-base font-bold text-foreground">
                Pending Admin Verification Queue ({pendingVerificationCount})
              </h3>
              <p className="text-xs text-muted-foreground">
                Field officers have submitted resolution evidence for these issues. Review and verify to resolve or request rework.
              </p>
            </div>

            <div className="divide-y divide-border/60">
              {complaints.filter((c) => ["completed", "citizen_verification"].includes(c.status)).length === 0 ? (
                <div className="p-12 text-center text-xs text-muted-foreground">
                  No complaints awaiting admin verification. All resolutions verified.
                </div>
              ) : (
                complaints
                  .filter((c) => ["completed", "citizen_verification"].includes(c.status))
                  .map((c) => (
                    <div key={c.id} className="py-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary font-mono">{c.id}</span>
                          <Badge className="bg-purple-100 text-purple-800 border-0 text-[10px] font-bold">
                            Resolution Submitted
                          </Badge>
                        </div>
                        <h4 className="font-bold text-sm text-foreground">{c.description}</h4>
                        <p className="text-xs text-muted-foreground">{c.address}</p>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                          <p className="font-semibold text-foreground">Officer Remarks: {c.resolutionDetails || "Work completed on site."}</p>
                          <p className="text-muted-foreground">Officer: {c.officer || "Field Unit"} • Completed Date: {c.completedOn || "Today"}</p>
                        </div>
                        {c.afterImage && (
                          <div className="flex items-center gap-2 pt-1">
                            <span className="text-xs font-semibold text-foreground">Work Proof Photo:</span>
                            <img src={c.afterImage} alt="Work Proof" className="h-16 w-24 object-cover rounded-lg border border-border" />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 shrink-0 self-end md:self-center">
                        <Button
                          size="sm"
                          onClick={() => handleApproveResolution(c.id)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl h-10 gap-1.5 shadow-sm"
                        >
                          <Check className="h-4 w-4" />
                          <span>Approve & Resolve</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedComplaint(c);
                            setShowReworkBox(true);
                          }}
                          className="text-xs rounded-xl h-10 text-rose-600 border-rose-200 hover:bg-rose-50"
                        >
                          <X className="h-4 w-4 mr-1" />
                          <span>Request Rework</span>
                        </Button>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </Card>
        </TabsContent>

        {/* ── TAB 4: MLA APPOINTMENTS ── */}
        <TabsContent value="appointments" className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-border shadow-sm">
            <div className="relative flex-1">
              <Input
                value={apptSearchQuery}
                onChange={(e) => setApptSearchQuery(e.target.value)}
                placeholder="Search appointments by ID, Citizen Name, Mobile, or Purpose..."
                className="h-10 text-xs pl-9 rounded-xl"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={apptStatusFilter}
                onChange={(e) => setApptStatusFilter(e.target.value)}
                className="h-10 rounded-xl border border-input bg-background px-3 text-xs font-semibold"
              >
                <option value="all">All Appointment Statuses</option>
                <option value="pending">Pending Review</option>
                <option value="approved">Approved</option>
                <option value="upcoming">Upcoming</option>
                <option value="rescheduled">Rescheduled</option>
                <option value="completed">Completed</option>
                <option value="rejected">Rejected</option>
              </select>

              <Button
                variant="outline"
                size="sm"
                onClick={loadAppts}
                className="h-10 rounded-xl px-3 text-xs font-semibold gap-1.5"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Refresh</span>
              </Button>
            </div>
          </div>

          <Card className="rounded-3xl border-border shadow-sm overflow-hidden bg-white">
            <CardHeader className="border-b border-border/60 bg-muted/20 px-6 py-4">
              <CardTitle className="text-base font-bold text-foreground">
                Citizen MLA Appointment Pipeline ({filteredAppointments.length})
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0 overflow-x-auto">
              {filteredAppointments.length === 0 ? (
                <div className="p-10 text-center text-xs text-muted-foreground">
                  No appointment requests found.
                </div>
              ) : (
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border/80 bg-slate-50 text-[11px] font-bold text-muted-foreground uppercase">
                      <th className="py-3.5 px-4">Appointment ID</th>
                      <th className="py-3.5 px-4">Citizen Name</th>
                      <th className="py-3.5 px-4">Mobile</th>
                      <th className="py-3.5 px-4">Requested Slot</th>
                      <th className="py-3.5 px-4">Purpose</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {filteredAppointments.map((appt) => {
                      const statusMeta = APPT_STATUS_CONFIG[appt.status] ?? APPT_STATUS_CONFIG["pending"]!;
                      return (
                        <tr key={appt.appointmentId} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-primary">
                            {appt.appointmentId}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-foreground">
                            {appt.citizenName}
                          </td>
                          <td className="py-3.5 px-4 font-mono text-muted-foreground">
                            +91 {maskMobile(appt.mobileNumber)}
                          </td>
                          <td className="py-3.5 px-4 font-medium text-foreground">
                            {appt.preferredDate} · {appt.preferredTime}
                          </td>
                          <td className="py-3.5 px-4 font-medium text-foreground max-w-[160px] truncate">
                            {appt.purpose}
                          </td>
                          <td className="py-3.5 px-4">
                            <Badge className={`text-[10px] border font-bold px-2 py-0.5 ${statusMeta.cls}`}>
                              {statusMeta.label}
                            </Badge>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => openApptDetails(appt)}
                              className="h-8 px-3 rounded-xl text-xs font-bold"
                            >
                              <Eye className="h-3.5 w-3.5 mr-1" />
                              Manage
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── TAB 5: FIELD OFFICERS ROSTER ── */}
        <TabsContent value="officers" className="space-y-4">
          <Card className="rounded-3xl border-border shadow-sm p-6 bg-white space-y-4">
            <h3 className="text-base font-bold text-foreground">Field Officers Roster Across All Departments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {officers.map((o) => (
                <div key={o.userId} className="p-4 rounded-2xl border border-border bg-slate-50/60 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-foreground">{o.name}</span>
                    <Badge variant="outline" className="text-[10px] font-bold uppercase">{o.departmentName || o.departmentId}</Badge>
                  </div>
                  <p className="text-muted-foreground">Mobile: +91 {o.mobile} • Ward: {o.wardId?.toUpperCase() || "W-110"}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-border/60">
                    <span className="text-[11px] font-semibold text-amber-700">Active: {o.activeTasks}</span>
                    <span className="text-[11px] font-semibold text-emerald-700">Completed: {o.completedTasks}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* ── TAB 6: ESCALATIONS & SLA ── */}
        <TabsContent value="escalations" className="space-y-4">
          <Card className="rounded-3xl border-border shadow-sm p-6 bg-white space-y-4">
            <div>
              <h3 className="text-base font-bold text-rose-950 flex items-center gap-2">
                <Flame className="h-4 w-4 text-rose-600" />
                Escalated & High SLA Complaints ({overdueCount})
              </h3>
              <p className="text-xs text-muted-foreground">Complaints requiring immediate executive administrative attention</p>
            </div>

            <div className="divide-y divide-border/60">
              {complaints.filter((c) => c.priority === "high" && c.status !== "closed").map((c) => (
                <div key={c.id} className="py-4 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-rose-700">{c.id}</span>
                      <Badge className="bg-rose-100 text-rose-800 border-0 text-[10px] font-bold">High Priority SLA</Badge>
                    </div>
                    <p className="font-bold text-foreground mt-1">{c.description}</p>
                    <p className="text-muted-foreground">{c.address} • Department: {c.departmentId}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleOpenComplaintReview(c)}
                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl h-8"
                  >
                    Take Action →
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* ── COMPLAINT REVIEW & DEPARTMENT ASSIGNMENT MODAL ── */}
      <Dialog open={!!selectedComplaint} onOpenChange={(open) => !open && setSelectedComplaint(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-6">
          {selectedComplaint && (
            <div className="space-y-6">
              <DialogHeader className="border-b border-border pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DialogTitle className="text-lg font-black text-foreground font-mono">
                      {selectedComplaint.id}
                    </DialogTitle>
                    <Badge className={`text-xs border-0 font-semibold ${COMPLAINT_STATUS_BADGES[selectedComplaint.status] || "bg-muted"}`}>
                      {bi(STATUS_META[selectedComplaint.status]?.label || { en: selectedComplaint.status, ta: selectedComplaint.status })}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">Registered: {selectedComplaint.createdAt}</span>
                </div>
              </DialogHeader>

              {/* 1. Citizen Info */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <h4 className="font-bold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground">
                  Citizen Details
                </h4>
                <p className="font-bold text-foreground">Mobile: +91 {maskMobile(selectedComplaint.citizenMobile)}</p>
                <p className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-primary shrink-0" />
                  <span>{selectedComplaint.address} (Ward {selectedComplaint.wardId})</span>
                </p>
              </div>

              {/* 2. Issue Details */}
              <div className="p-4 rounded-2xl bg-muted/30 border border-border text-xs space-y-2">
                <h4 className="font-bold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground">
                  Problem Description
                </h4>
                <p className="font-semibold text-foreground text-sm">{selectedComplaint.description}</p>
                {selectedComplaint.beforeImage && (
                  <div className="pt-2">
                    <p className="text-[10px] text-muted-foreground font-bold mb-1">Citizen Evidence Photo:</p>
                    <img src={selectedComplaint.beforeImage} alt="Citizen Evidence" className="h-32 w-48 object-cover rounded-xl border" />
                  </div>
                )}
              </div>

              {/* 3. Department Assignment Form */}
              <div className="p-5 rounded-2xl bg-indigo-50/80 border border-indigo-300 space-y-4">
                <h4 className="text-sm font-bold text-indigo-950">
                  Assign Department & SLA Priority
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-indigo-950">Department</Label>
                    <select
                      value={assignDeptId}
                      onChange={(e) => setAssignDeptId(e.target.value)}
                      className="h-10 w-full rounded-xl border border-indigo-200 bg-white px-3 text-xs font-semibold"
                    >
                      {DEPARTMENTS.map((d) => (
                        <option key={d.id} value={d.id}>
                          {bi(d.name)} (SLA: {d.slaDays} days)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-indigo-950">Priority Level</Label>
                    <select
                      value={assignPriority}
                      onChange={(e) => setAssignPriority(e.target.value)}
                      className="h-10 w-full rounded-xl border border-indigo-200 bg-white px-3 text-xs font-semibold"
                    >
                      <option value="high">High Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="low">Low Priority</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <Label className="text-xs font-bold text-indigo-950">Instructions / Remarks for Department</Label>
                    <Input
                      value={assignRemarks}
                      onChange={(e) => setAssignRemarks(e.target.value)}
                      placeholder="e.g. Please dispatch field crew to repair immediately..."
                      className="h-10 rounded-xl text-xs bg-white"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleAssignDepartment}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-11 rounded-xl shadow-md gap-2 text-xs"
                >
                  <Send className="h-4 w-4" />
                  <span>Assign Department & Dispatch Task</span>
                </Button>
              </div>

              {/* Rework Box if Requested */}
              {showReworkBox && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-300 space-y-3">
                  <Label className="text-xs font-bold text-rose-900">Explain why rework is required *:</Label>
                  <Textarea
                    value={reworkRemarks}
                    onChange={(e) => setReworkRemarks(e.target.value)}
                    placeholder="e.g. Streetlight is still not functioning. Please revisit site..."
                    rows={2}
                    className="text-xs bg-white rounded-xl"
                  />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleRequestRework(selectedComplaint.id)}
                      disabled={!reworkRemarks.trim()}
                      className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold"
                    >
                      Confirm Rework Request
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setShowReworkBox(false)} className="text-xs">
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {/* Full Timeline */}
              <div className="space-y-2 pt-2 border-t border-border">
                <Label className="text-xs font-bold">Lifecycle Audit Trail:</Label>
                <div className="space-y-2 pl-2 border-l-2 border-primary/30 max-h-40 overflow-y-auto">
                  {selectedComplaint.timeline.map((entry, idx) => (
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
        </DialogContent>
      </Dialog>

      {/* ── APPOINTMENT DETAILS & ACTIONS MODAL ── */}
      <Dialog open={!!selectedAppt} onOpenChange={(open) => !open && setSelectedAppt(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-6">
          {selectedAppt && (
            <>
              <DialogHeader className="border-b border-border pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DialogTitle className="text-lg font-black text-foreground font-mono">
                      {selectedAppt.appointmentId}
                    </DialogTitle>
                    <Badge className={`text-xs border font-bold ${APPT_STATUS_CONFIG[selectedAppt.status]?.cls}`}>
                      {APPT_STATUS_CONFIG[selectedAppt.status]?.label}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Submitted: {selectedAppt.createdAt.split("T")[0]}
                  </span>
                </div>
              </DialogHeader>

              {/* Citizen Details Block */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <span className="text-muted-foreground">Citizen Name:</span>
                  <p className="font-bold text-foreground mt-0.5">{selectedAppt.citizenName}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Mobile:</span>
                  <p className="font-bold text-foreground mt-0.5">+91 {maskMobile(selectedAppt.mobileNumber)}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Requested Slot:</span>
                  <p className="font-bold text-primary mt-0.5">{selectedAppt.preferredDate} at {selectedAppt.preferredTime}</p>
                </div>
                <div className="col-span-2 sm:col-span-3">
                  <span className="text-muted-foreground">Purpose of Meeting:</span>
                  <p className="font-bold text-foreground mt-0.5">{selectedAppt.purpose}</p>
                  {selectedAppt.description && (
                    <p className="text-muted-foreground mt-1 bg-white p-2.5 rounded-xl border border-slate-200">{selectedAppt.description}</p>
                  )}
                </div>
              </div>

              {/* Admin Actions Bar */}
              <div className="pt-2 border-t border-border space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    onClick={() => setShowApproveDialog(true)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl h-10 gap-1.5"
                  >
                    <Check className="h-4 w-4" /> Approve & Confirm
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowRescheduleDialog(true)}
                    className="text-xs font-bold rounded-xl h-10 border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <Clock className="h-4 w-4 mr-1" /> Reschedule Slot
                  </Button>

                  {selectedAppt.status === "approved" && (
                    <Button
                      size="sm"
                      onClick={() => handleCompleteAppt(selectedAppt.appointmentId)}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl h-10"
                    >
                      <CheckCircle2 className="h-4 w-4 mr-1" /> Mark Meeting Completed
                    </Button>
                  )}

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowRejectApptDialog(true)}
                    className="text-xs font-bold rounded-xl h-10 text-rose-600 hover:bg-rose-50"
                  >
                    <X className="h-4 w-4 mr-1" /> Reject Request
                  </Button>
                </div>
              </div>

              {/* Approve Dialog Inner */}
              {showApproveDialog && (
                <div className="p-5 rounded-3xl bg-emerald-50/80 border border-emerald-300 space-y-4">
                  <h4 className="text-sm font-bold text-emerald-950">Confirm Meeting Schedule & Venue</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1">
                      <Label className="font-bold">Confirmed Date</Label>
                      <Input
                        type="date"
                        value={confirmDate}
                        onChange={(e) => setConfirmDate(e.target.value)}
                        className="bg-white rounded-xl h-10"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="font-bold">Confirmed Time</Label>
                      <Input
                        value={confirmTime}
                        onChange={(e) => setConfirmTime(e.target.value)}
                        className="bg-white rounded-xl h-10"
                      />
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <Label className="font-bold">Meeting Venue</Label>
                      <Input
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                        className="bg-white rounded-xl h-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button onClick={handleApproveAppt} className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold h-10 rounded-xl">
                      Send Confirmation to Citizen
                    </Button>
                    <Button variant="ghost" onClick={() => setShowApproveDialog(false)} className="text-xs h-10 rounded-xl">
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {/* Reschedule Dialog Inner */}
              {showRescheduleDialog && (
                <div className="p-5 rounded-3xl bg-purple-50/80 border border-purple-300 space-y-4">
                  <h4 className="text-sm font-bold text-purple-950">Propose New Slot for Appointment</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1">
                      <Label className="font-bold">New Date</Label>
                      <Input
                        type="date"
                        value={rescheduleDate}
                        onChange={(e) => setRescheduleDate(e.target.value)}
                        className="bg-white rounded-xl h-10"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="font-bold">New Time</Label>
                      <Input
                        value={rescheduleTime}
                        onChange={(e) => setRescheduleTime(e.target.value)}
                        className="bg-white rounded-xl h-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleRescheduleAppt} className="bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold h-10 rounded-xl">
                      Confirm Reschedule
                    </Button>
                    <Button variant="ghost" onClick={() => setShowRescheduleDialog(false)} className="text-xs h-10 rounded-xl">
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {/* Reject Dialog Inner */}
              {showRejectApptDialog && (
                <div className="p-5 rounded-3xl bg-rose-50 border border-rose-300 space-y-4">
                  <h4 className="text-sm font-bold text-rose-950">Reason for Rejection</h4>
                  <Textarea
                    value={apptRejectReason}
                    onChange={(e) => setApptRejectReason(e.target.value)}
                    placeholder="Specify why appointment cannot be scheduled..."
                    rows={2}
                    className="bg-white rounded-xl text-xs"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleRejectAppt} className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold h-10 rounded-xl">
                      Confirm Rejection
                    </Button>
                    <Button variant="ghost" onClick={() => setShowRejectApptDialog(false)} className="text-xs h-10 rounded-xl">
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
