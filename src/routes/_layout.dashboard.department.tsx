import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Building2,
  Users,
  Clock,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Send,
  Sliders,
  Check,
  Search,
  ExternalLink,
  ShieldCheck,
  Flame,
  UserCheck,
  Briefcase,
  Layers,
  ArrowRight,
  Eye,
  Camera,
  RefreshCw,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { useWorkflow, type FieldOfficerItem } from "@/lib/workflow";
import type { Complaint } from "@/data/mock";
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

export const Route = createFileRoute("/_layout/dashboard/department")({
  component: DepartmentAdminDashboard,
});

export function DepartmentAdminDashboard() {
  const { bi, lang } = useI18n();
  const { user } = useAuth();
  const {
    complaints,
    fetchFieldOfficers,
    assignOfficerToComplaint,
    refreshData,
  } = useWorkflow();

  const [activeDept, setActiveDept] = useState<string>(user?.departmentId || "highways");
  const [fieldOfficers, setFieldOfficers] = useState<FieldOfficerItem[]>([]);
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [selectedOfficerId, setSelectedOfficerId] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"complaints" | "officers" | "resolutions">("complaints");

  const deptObj = DEPARTMENTS.find((d) => d.id === activeDept) || DEPARTMENTS[0];

  const loadOfficers = async (deptId: string) => {
    setLoading(true);
    try {
      const officers = await fetchFieldOfficers(deptId);
      setFieldOfficers(officers);
      if (officers.length > 0 && !selectedOfficerId) {
        setSelectedOfficerId(officers[0]!.userId);
      }
    } catch (err) {
      console.error("Load officers error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOfficers(activeDept);
  }, [activeDept]);

  // Department-specific complaint filtering
  const deptComplaints = complaints.filter(
    (c) => c.departmentId === activeDept || (!c.departmentId && activeDept === "works"),
  );

  const filtered = deptComplaints.filter((c) => {
    if (statusFilter !== "all" && c.status !== statusFilter) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.id.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.address.toLowerCase().includes(q) ||
      (c.officer && c.officer.toLowerCase().includes(q))
    );
  });

  // KPIs
  const totalAssigned = deptComplaints.length;
  const newDepartmentCount = deptComplaints.filter((c) => ["new", "verified", "assigned"].includes(c.status) && !c.officer).length;
  const inProgressCount = deptComplaints.filter((c) => c.status === "in_progress").length;
  const resolutionSubmittedCount = deptComplaints.filter((c) => ["completed", "citizen_verification"].includes(c.status)).length;
  const closedCount = deptComplaints.filter((c) => c.status === "closed").length;
  const overdueCount = deptComplaints.filter((c) => c.priority === "high" && c.status !== "closed").length;

  const handleAssignOfficer = async () => {
    if (!selectedComplaint || !selectedOfficerId) return;
    const officer = fieldOfficers.find((o) => o.userId === selectedOfficerId);
    if (!officer) return;

    const res = await assignOfficerToComplaint(selectedComplaint.id, officer.userId, officer.name);
    if (res.ok) {
      setToastMsg(`Assigned to ${officer.name}! Direct dispatch notification sent.`);
      setTimeout(() => {
        setSelectedComplaint(null);
        setToastMsg("");
        loadOfficers(activeDept);
        refreshData();
      }, 1500);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      {/* ── Top Department Header ── */}
      <div className="rounded-3xl border border-border bg-white shadow-soft p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-600 to-indigo-600 text-white text-2xl shrink-0 shadow-md">
            <Building2 className="h-8 w-8" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-foreground font-display">
                {deptObj ? bi(deptObj.name) : "Department Command"}
              </h1>
              <Badge className="bg-teal-100 text-teal-800 border-0 text-xs font-bold">
                Department Administrator
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Officer in Charge: <strong className="text-foreground">{user?.name || "Department Admin"}</strong> • SLA Target: <strong>{deptObj?.slaDays || 7} Days</strong> • Assigned Department: <strong>{deptObj?.name.en}</strong>
            </p>
          </div>
        </div>

        {/* Switch Department Dropdown (Authorized admin convenience) */}
        <div className="space-y-1 w-full md:w-auto">
          <Label className="text-[11px] text-muted-foreground font-semibold">Switch Department View:</Label>
          <select
            value={activeDept}
            onChange={(e) => setActiveDept(e.target.value)}
            className="h-10 w-full md:w-64 rounded-xl border border-input bg-background px-3 text-xs font-semibold"
          >
            {DEPARTMENTS.map((d) => (
              <option key={d.id} value={d.id}>
                {bi(d.name)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ── KPI Metrics Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-[11px] font-bold text-slate-700 uppercase">Total Department</span>
          <p className="text-2xl font-black text-slate-900 mt-1 font-display">{totalAssigned}</p>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
          <span className="text-[11px] font-bold text-blue-800 uppercase">Unassigned Tasks</span>
          <p className="text-2xl font-black text-blue-950 mt-1 font-display">{newDepartmentCount}</p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
          <span className="text-[11px] font-bold text-amber-800 uppercase">In Progress</span>
          <p className="text-2xl font-black text-amber-950 mt-1 font-display">{inProgressCount}</p>
        </div>

        <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
          <span className="text-[11px] font-bold text-purple-800 uppercase">Resolutions Submitted</span>
          <p className="text-2xl font-black text-purple-950 mt-1 font-display">{resolutionSubmittedCount}</p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
          <span className="text-[11px] font-bold text-emerald-800 uppercase">Verified Closed</span>
          <p className="text-2xl font-black text-emerald-950 mt-1 font-display">{closedCount}</p>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
          <span className="text-[11px] font-bold text-rose-800 uppercase flex items-center gap-1">
            <Flame className="h-3 w-3 text-rose-600" /> High SLA
          </span>
          <p className="text-2xl font-black text-rose-950 mt-1 font-display">{overdueCount}</p>
        </div>
      </div>

      {/* ── Main Tabbed Layout ── */}
      <Tabs value={activeTab} onValueChange={(v: any) => setActiveTab(v)} className="space-y-6">
        <TabsList className="bg-muted/70 p-1.5 rounded-2xl h-auto flex flex-wrap gap-1">
          <TabsTrigger value="complaints" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Briefcase className="h-3.5 w-3.5 mr-1.5" />
            Assigned Complaints ({filtered.length})
          </TabsTrigger>
          <TabsTrigger value="officers" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Users className="h-3.5 w-3.5 mr-1.5" />
            Field Officers & Workloads ({fieldOfficers.length})
          </TabsTrigger>
          <TabsTrigger value="resolutions" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
            Submitted Resolutions ({resolutionSubmittedCount})
          </TabsTrigger>
        </TabsList>

        {/* ── TAB 1: COMPLAINTS LIST ── */}
        <TabsContent value="complaints" className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-border shadow-sm">
            <div className="relative flex-1">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search complaints by ID, description, address, or officer..."
                className="h-10 text-xs pl-9 rounded-xl"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-10 rounded-xl px-3 text-xs border border-border bg-white font-medium"
              >
                <option value="all">All Department Tasks</option>
                <option value="verified">Unassigned / Pending Officer</option>
                <option value="assigned">Assigned to Officer</option>
                <option value="in_progress">Work In Progress</option>
                <option value="completed">Work Completed (Pending Verify)</option>
                <option value="closed">Closed & Resolved</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            {filtered.length === 0 ? (
              <Card className="rounded-2xl p-12 text-center text-sm text-muted-foreground font-medium bg-white">
                No complaints found in this department queue matching the filter.
              </Card>
            ) : (
              filtered.map((c) => {
                const cat = CATEGORIES.find((x) => x.id === c.categoryId);
                const ward = WARDS.find((w) => w.id === c.wardId);
                const isUnassigned = !c.officer;

                return (
                  <Card
                    key={c.id}
                    className={`rounded-2xl border transition-all overflow-hidden bg-white ${
                      isUnassigned
                        ? "border-amber-300 bg-amber-50/20 shadow-sm"
                        : "border-border hover:border-teal-400 shadow-sm"
                    }`}
                  >
                    <CardContent className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2 flex-1 min-w-0">
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
                            Priority: {c.priority.toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className="text-[10px] uppercase font-bold">
                            {c.status.replace("_", " ")}
                          </Badge>
                        </div>

                        <h3 className="text-base font-bold text-foreground">
                          {cat ? bi(cat.name) : c.categoryId}: {c.description}
                        </h3>

                        <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-primary shrink-0" />
                            <span>{c.address}</span>
                          </span>
                          <span>•</span>
                          <span>
                            Field Officer:{" "}
                            <strong className={c.officer ? "text-foreground font-bold" : "text-amber-700 font-bold"}>
                              {c.officer ? `🦺 ${c.officer}` : "⚠️ Unassigned — Action Required"}
                            </strong>
                          </span>
                          <span>•</span>
                          <span>Registered: {c.createdAt}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedComplaint(c);
                            if (fieldOfficers.length > 0 && !selectedOfficerId) {
                              setSelectedOfficerId(fieldOfficers[0]!.userId);
                            }
                          }}
                          className={`font-bold text-xs rounded-xl h-10 gap-1.5 shadow-sm text-white ${
                            isUnassigned
                              ? "bg-amber-600 hover:bg-amber-700"
                              : "bg-teal-600 hover:bg-teal-700"
                          }`}
                        >
                          <Users className="h-3.5 w-3.5" />
                          <span>{isUnassigned ? "Assign Field Officer →" : "Reassign Officer"}</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </TabsContent>

        {/* ── TAB 2: FIELD OFFICERS & WORKLOAD ── */}
        <TabsContent value="officers" className="space-y-4">
          <Card className="rounded-3xl border-border shadow-sm p-6 bg-white space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  Field Officers in {deptObj ? bi(deptObj.name) : "Department"} ({fieldOfficers.length})
                </h3>
                <p className="text-xs text-muted-foreground">Real-time live workload and active duty roster</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => loadOfficers(activeDept)}
                className="rounded-xl text-xs font-semibold gap-1"
              >
                <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} />
                <span>Refresh Roster</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fieldOfficers.map((officer) => (
                <div
                  key={officer.userId}
                  className="p-5 rounded-2xl border border-border bg-slate-50/50 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-sm">
                        🦺
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">{officer.name}</h4>
                        <p className="text-[11px] text-muted-foreground">+91 {officer.mobile} • {officer.email}</p>
                      </div>
                    </div>
                    {officer.activeTasks === 0 ? (
                      <Badge className="bg-emerald-100 text-emerald-800 border-0 text-[10px] font-bold">
                        Available
                      </Badge>
                    ) : (
                      <Badge className="bg-amber-100 text-amber-800 border-0 text-[10px] font-bold">
                        {officer.activeTasks} Active Tasks
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 text-center border-t border-border/60 text-xs">
                    <div className="p-2 rounded-xl bg-white border border-border">
                      <p className="text-[10px] text-muted-foreground">Ward</p>
                      <p className="font-bold text-foreground uppercase">{officer.wardId || "w-110"}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-border">
                      <p className="text-[10px] text-muted-foreground">Active</p>
                      <p className="font-bold text-amber-600">{officer.activeTasks}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-border">
                      <p className="text-[10px] text-muted-foreground">Completed</p>
                      <p className="font-bold text-emerald-600">{officer.completedTasks}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* ── TAB 3: RESOLUTIONS SUBMITTED ── */}
        <TabsContent value="resolutions" className="space-y-4">
          <Card className="rounded-3xl border-border shadow-sm p-6 bg-white space-y-4">
            <div>
              <h3 className="text-base font-bold text-foreground">Field Officer Completion Reports</h3>
              <p className="text-xs text-muted-foreground">Complaints where work is completed and awaiting admin verification</p>
            </div>

            <div className="divide-y divide-border/60">
              {deptComplaints.filter((c) => ["completed", "citizen_verification"].includes(c.status)).length === 0 ? (
                <p className="text-xs text-muted-foreground py-8 text-center">No pending resolutions currently awaiting review.</p>
              ) : (
                deptComplaints
                  .filter((c) => ["completed", "citizen_verification"].includes(c.status))
                  .map((c) => (
                    <div key={c.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary">{c.id}</span>
                          <Badge className="bg-purple-100 text-purple-800 border-0 text-[10px]">Work Completed</Badge>
                        </div>
                        <p className="font-semibold text-foreground">{c.description}</p>
                        <p className="text-muted-foreground">Officer Remarks: {c.resolutionDetails || "Work completed on site."}</p>
                        {c.completedOn && <p className="text-muted-foreground">Completed Date: {c.completedOn}</p>}
                      </div>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0">
                        Forwarded to Constituency Admin
                      </Badge>
                    </div>
                  ))
              )}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* ── ASSIGN FIELD OFFICER MODAL ── */}
      <Dialog open={!!selectedComplaint} onOpenChange={(open) => !open && setSelectedComplaint(null)}>
        <DialogContent className="max-w-lg rounded-3xl p-6 sm:p-8">
          {selectedComplaint && (
            <div className="space-y-5">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold font-display">
                  Assign Field Officer: {selectedComplaint.id}
                </DialogTitle>
              </DialogHeader>

              {toastMsg && (
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>{toastMsg}</span>
                </div>
              )}

              <div className="p-4 rounded-2xl bg-muted/30 border border-border text-xs space-y-1.5">
                <p className="font-semibold text-foreground">{selectedComplaint.description}</p>
                <p className="text-muted-foreground">{selectedComplaint.address} (Ward 110)</p>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold">Select Eligible Field Officer (Workload Aware):</Label>
                {fieldOfficers.length === 0 ? (
                  <p className="text-xs text-rose-600 font-semibold p-3 bg-rose-50 rounded-xl">
                    No active field officers found in {deptObj?.name.en}. Create an officer in Super Admin Console.
                  </p>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {fieldOfficers.map((officer) => (
                      <button
                        key={officer.userId}
                        type="button"
                        onClick={() => setSelectedOfficerId(officer.userId)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-xs font-semibold text-left transition-all ${
                          selectedOfficerId === officer.userId
                            ? "border-teal-500 bg-teal-50 text-teal-900 ring-2 ring-teal-200"
                            : "border-border hover:bg-muted/40"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🦺</span>
                          <div>
                            <p className="font-bold text-foreground">{officer.name}</p>
                            <p className="text-[10px] text-muted-foreground">
                              Ward {officer.wardId?.toUpperCase() || "W-110"} • Active Tasks: {officer.activeTasks}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={`text-[9px] font-bold border-0 ${
                              officer.activeTasks === 0
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {officer.activeTasks === 0 ? "Available" : `${officer.activeTasks} Active`}
                          </Badge>
                          {selectedOfficerId === officer.userId && <Check className="h-4 w-4 text-teal-600" />}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button
                onClick={handleAssignOfficer}
                disabled={!selectedOfficerId || fieldOfficers.length === 0}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold h-12 rounded-xl shadow-md gap-1.5 text-xs"
              >
                <Send className="h-4 w-4" />
                <span>Confirm Assignment & Notify Officer</span>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
