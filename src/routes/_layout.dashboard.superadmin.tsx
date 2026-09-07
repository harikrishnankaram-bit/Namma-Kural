import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Users,
  Building2,
  KeyRound,
  History,
  CheckCircle2,
  AlertCircle,
  Search,
  Plus,
  Lock,
  UserCheck,
  UserX,
  FileText,
  CalendarCheck,
  AlertTriangle,
  Clock,
  RefreshCw,
  Sliders,
  Check,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { useWorkflow, type AdminUserItem, type AuditRecord } from "@/lib/workflow";
import type { Role } from "@/config/aram";
import { DEPARTMENTS, WARDS, ROLE_META } from "@/config/aram";
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

export const Route = createFileRoute("/_layout/dashboard/superadmin")({
  component: SuperAdminDashboard,
});

const ROLE_PERMISSIONS: Record<Role, string[]> = {
  citizen: [
    "Create complaint",
    "View own complaints",
    "Track live complaint timeline",
    "Verify completed resolutions",
    "Book MLA appointments",
    "Receive status notifications",
  ],
  field_officer: [
    "View assigned work",
    "GPS navigation to site",
    "Start work (update status)",
    "Add progress updates & notes",
    "Upload after photos & complete work",
  ],
  department_admin: [
    "View department complaints",
    "Assign field officers & teams",
    "Update SLA & priority levels",
    "Review completed work evidence",
    "Department performance monitoring",
  ],
  constituency_admin: [
    "View all constituency complaints",
    "Verify new citizen reports",
    "Allocate department & priority",
    "Reject & mark duplicate complaints",
    "Constituency ward SLA oversight",
    "Manage announcements & appointments",
  ],
  content_admin: [
    "Publish announcements & notices",
    "Manage government schemes",
    "Update project development progress",
  ],
  super_admin: [
    "Manage all users & accounts",
    "Configure roles & permissions",
    "Manage departments & SLA policies",
    "Audit entire system event logs",
    "Platform configuration & backups",
  ],
};

export function SuperAdminDashboard() {
  const { bi, lang } = useI18n();
  const { user } = useAuth();
  const {
    complaints,
    fetchAdminUsers,
    createAdminUser,
    updateAdminUser,
    fetchAuditLogs,
    fetchAppointments,
    refreshData,
  } = useWorkflow();

  const [activeTab, setActiveTab] = useState("overview");
  const [adminUsers, setAdminUsers] = useState<AdminUserItem[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditRecord[]>([]);
  const [appointmentsCount, setAppointmentsCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Create User Modal State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    role: "field_officer" as Role,
    departmentId: "highways",
    wardId: "w-110",
    password: "",
  });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [actionSuccess, setActionSuccess] = useState("");

  const loadData = async () => {
    setLoading(true);
    try {
      const [uList, aLogs, appts] = await Promise.all([
        fetchAdminUsers(),
        fetchAuditLogs(),
        fetchAppointments(),
      ]);
      setAdminUsers(uList);
      setAuditLogs(aLogs);
      setAppointmentsCount(appts.length);
    } catch (err) {
      console.error("Super Admin loadData error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Live Metrics Calculations
  const constituencyAdminsCount = adminUsers.filter((u) => u.role === "constituency_admin").length;
  const deptAdminsCount = adminUsers.filter((u) => u.role === "department_admin").length;
  const fieldOfficersCount = adminUsers.filter((u) => u.role === "field_officer").length;
  const totalDepartments = DEPARTMENTS.length;
  const totalComplaints = complaints.length;
  const pendingComplaints = complaints.filter((c) => ["new", "verified", "assigned", "in_progress"].includes(c.status)).length;
  const resolvedComplaints = complaints.filter((c) => ["completed", "closed", "citizen_verification"].includes(c.status)).length;
  const overdueComplaints = complaints.filter((c) => c.priority === "high" && c.status !== "closed").length;

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!formData.name || !formData.email || !formData.mobile) {
      setFormError(lang === "ta" ? "அனைத்து விவரங்களையும் நிரப்பவும்" : "Please fill in all required fields");
      return;
    }

    const deptObj = DEPARTMENTS.find((d) => d.id === formData.departmentId);
    const res = await createAdminUser({
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      role: formData.role,
      departmentId: ["department_admin", "field_officer"].includes(formData.role) ? formData.departmentId : undefined,
      departmentName: ["department_admin", "field_officer"].includes(formData.role) ? deptObj?.name.en : undefined,
      wardId: formData.role === "field_officer" ? formData.wardId : undefined,
      password: formData.password || "Aram@2026",
    });

    if (res.ok) {
      setFormSuccess(lang === "ta" ? "பயனர் வெற்றிகரமாக உருவாக்கப்பட்டது!" : "Admin user created successfully!");
      setTimeout(() => {
        setShowCreateModal(false);
        setFormSuccess("");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          role: "field_officer",
          departmentId: "highways",
          wardId: "w-110",
          password: "",
        });
        loadData();
      }, 1000);
    } else {
      setFormError(res.message || "Failed to create user");
    }
  };

  const handleToggleUserStatus = async (userItem: AdminUserItem) => {
    const res = await updateAdminUser(userItem.userId, { active: !userItem.active });
    if (res.ok) {
      setActionSuccess(`${userItem.name} ${!userItem.active ? "activated" : "deactivated"}.`);
      setTimeout(() => setActionSuccess(""), 3000);
      loadData();
    }
  };

  const filteredUsers = adminUsers.filter((u) => {
    if (roleFilter !== "all" && u.role !== roleFilter) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.mobile.includes(q) ||
      (u.departmentName && u.departmentName.toLowerCase().includes(q))
    );
  });

  const filteredAudit = auditLogs.filter((a) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      (a.entityId && a.entityId.toLowerCase().includes(q)) ||
      a.action.toLowerCase().includes(q) ||
      (a.userName && a.userName.toLowerCase().includes(q)) ||
      (a.remarks && a.remarks.toLowerCase().includes(q))
    );
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      {/* ── Top Super Admin Header ── */}
      <div className="rounded-3xl border border-border bg-white shadow-soft p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-700 text-white text-2xl shrink-0 shadow-md">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-foreground font-display">
                NAMMA KURAL Super Admin Command
              </h1>
              <Badge className="bg-purple-100 text-purple-800 border-0 text-xs font-bold">
                Platform Root Access
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Logged in as: <strong className="text-foreground">{user?.name || "System Super Administrator"}</strong> • Central Governance Engine
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={loadData}
            disabled={loading}
            className="rounded-xl font-semibold gap-1.5 text-xs"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>{lang === "ta" ? "புதுப்பி" : "Refresh"}</span>
          </Button>

          <Button
            size="sm"
            onClick={() => setShowCreateModal(true)}
            className="rounded-xl font-bold gap-1.5 text-xs bg-primary hover:bg-primary/90 text-white shadow-md"
          >
            <Plus className="h-4 w-4" />
            <span>{lang === "ta" ? "புதிய நிர்வாகி சேர்" : "Create Admin User"}</span>
          </Button>
        </div>
      </div>

      {actionSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* ── Key Metrics Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        <Card className="rounded-2xl border-border bg-white shadow-sm p-4 space-y-1">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Constituency Admins</p>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-foreground">{constituencyAdminsCount}</span>
            <Badge variant="outline" className="text-[10px] bg-blue-50 text-blue-700">Command</Badge>
          </div>
        </Card>

        <Card className="rounded-2xl border-border bg-white shadow-sm p-4 space-y-1">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Department Admins</p>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-foreground">{deptAdminsCount}</span>
            <Badge variant="outline" className="text-[10px] bg-indigo-50 text-indigo-700">{totalDepartments} Depts</Badge>
          </div>
        </Card>

        <Card className="rounded-2xl border-border bg-white shadow-sm p-4 space-y-1">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Field Officers</p>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-foreground">{fieldOfficersCount}</span>
            <Badge variant="outline" className="text-[10px] bg-teal-50 text-teal-700">Active Duty</Badge>
          </div>
        </Card>

        <Card className="rounded-2xl border-border bg-white shadow-sm p-4 space-y-1">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Total Complaints</p>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-foreground">{totalComplaints}</span>
            <span className="text-xs font-semibold text-emerald-600">{resolvedComplaints} Resolved</span>
          </div>
        </Card>

        <Card className="rounded-2xl border-border bg-white shadow-sm p-4 space-y-1 col-span-2 sm:col-span-1">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">MLA Appointments</p>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-foreground">{appointmentsCount}</span>
            {overdueComplaints > 0 ? (
              <Badge className="bg-rose-100 text-rose-800 border-0 text-[10px]">{overdueComplaints} Overdue</Badge>
            ) : (
              <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-700">Optimal</Badge>
            )}
          </div>
        </Card>
      </div>

      {/* ── Main Tabbed Layout ── */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted/70 p-1.5 rounded-2xl h-auto flex flex-wrap gap-1">
          <TabsTrigger value="overview" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Users className="h-3.5 w-3.5 mr-1.5" />
            Admin User Management ({adminUsers.length})
          </TabsTrigger>
          <TabsTrigger value="audit" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <History className="h-3.5 w-3.5 mr-1.5" />
            Live Audit Trail ({auditLogs.length})
          </TabsTrigger>
          <TabsTrigger value="departments" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Building2 className="h-3.5 w-3.5 mr-1.5" />
            Departments & SLA Policy
          </TabsTrigger>
          <TabsTrigger value="permissions" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <KeyRound className="h-3.5 w-3.5 mr-1.5" />
            Role Hierarchy & Permissions
          </TabsTrigger>
        </TabsList>

        {/* ── TAB 1: ADMIN USER MANAGEMENT ── */}
        <TabsContent value="overview" className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-border shadow-sm">
            <div className="relative flex-1">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search administrators by Name, Email, Mobile or Department..."
                className="h-10 text-xs pl-9 rounded-xl"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="h-10 rounded-xl px-3 text-xs border border-border bg-white font-medium"
              >
                <option value="all">All Roles</option>
                <option value="constituency_admin">Constituency Admin</option>
                <option value="department_admin">Department Admin</option>
                <option value="field_officer">Field Officer</option>
                <option value="content_admin">Content Admin</option>
                <option value="super_admin">Super Admin</option>
              </select>
            </div>
          </div>

          <Card className="rounded-3xl border-border shadow-sm overflow-hidden bg-white">
            <CardHeader className="bg-muted/20 border-b border-border/60 px-6 py-4 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-bold text-foreground">
                Administrative Accounts Directory ({filteredUsers.length})
              </CardTitle>
              <span className="text-xs text-muted-foreground">Managed via Role-Based Security</span>
            </CardHeader>

            <div className="divide-y divide-border/60">
              {filteredUsers.length === 0 ? (
                <div className="p-12 text-center text-sm text-muted-foreground font-medium">
                  No admin accounts found matching criteria.
                </div>
              ) : (
                filteredUsers.map((u) => {
                  const roleMeta = ROLE_META[u.role];
                  return (
                    <div
                      key={u.userId}
                      className="p-4 sm:p-5 hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-sm text-foreground">{u.name}</span>
                          <Badge
                            className={`border-0 text-[10px] uppercase font-bold ${
                              u.role === "super_admin"
                                ? "bg-purple-100 text-purple-800"
                                : u.role === "constituency_admin"
                                ? "bg-blue-100 text-blue-800"
                                : u.role === "department_admin"
                                ? "bg-indigo-100 text-indigo-800"
                                : "bg-teal-100 text-teal-800"
                            }`}
                          >
                            {roleMeta ? bi(roleMeta.label) : u.role.replace("_", " ")}
                          </Badge>
                          {u.active ? (
                            <Badge variant="outline" className="text-[10px] text-emerald-700 bg-emerald-50 border-emerald-200">
                              Active
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-[10px] text-rose-700 bg-rose-50 border-rose-200">
                              Inactive
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span>Email: <strong className="text-foreground">{u.email}</strong></span>
                          <span>Mobile: <strong className="text-foreground">+91 {u.mobile}</strong></span>
                          {u.departmentName && (
                            <span>Department: <strong className="text-foreground">{u.departmentName}</strong></span>
                          )}
                          {u.wardId && (
                            <span>Ward: <strong className="text-foreground">{u.wardId.toUpperCase()}</strong></span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start md:self-auto">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleToggleUserStatus(u)}
                          className={`rounded-xl text-xs font-semibold gap-1 ${
                            u.active
                              ? "text-rose-600 hover:bg-rose-50 hover:text-rose-700"
                              : "text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                          }`}
                        >
                          {u.active ? <UserX className="h-3.5 w-3.5" /> : <UserCheck className="h-3.5 w-3.5" />}
                          <span>{u.active ? "Deactivate" : "Activate"}</span>
                        </Button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </Card>
        </TabsContent>

        {/* ── TAB 2: AUDIT TRAIL ── */}
        <TabsContent value="audit" className="space-y-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-border shadow-sm">
            <div className="relative flex-1">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search audit trail by Complaint ID, User Name, or Action..."
                className="h-10 text-xs pl-9 rounded-xl"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <Card className="rounded-3xl border-border shadow-sm overflow-hidden bg-white">
            <CardHeader className="bg-muted/20 border-b border-border/60 px-6 py-4">
              <CardTitle className="text-sm font-bold text-foreground">
                Chronological Governance & Decision Audit Records ({filteredAudit.length})
              </CardTitle>
            </CardHeader>
            <div className="divide-y divide-border/60">
              {filteredAudit.length === 0 ? (
                <div className="p-12 text-center text-sm text-muted-foreground font-medium">
                  No audit trail records logged yet.
                </div>
              ) : (
                filteredAudit.map((rec, idx) => (
                  <div key={rec.id || rec.logId || idx} className="p-4 sm:p-5 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono font-bold text-primary">{rec.entityId || rec.complaintId || "SYSTEM"}</span>
                        <Badge className="bg-muted text-muted-foreground border-0 text-[10px] font-bold">
                          {rec.action}
                        </Badge>
                        <span className="text-[10px] text-muted-foreground">
                          {new Date(rec.timestamp).toLocaleString()}
                        </span>
                      </div>
                      {rec.remarks && <p className="font-medium text-foreground">{rec.remarks}</p>}
                      <p className="text-muted-foreground">
                        Performed by: <strong className="text-foreground">{rec.userName || rec.performedBy || "System"}</strong> (Role: <span className="uppercase text-[10px] font-semibold">{String(rec.role).replace("_", " ")}</span>)
                      </p>
                    </div>
                    <Badge variant="outline" className="text-[10px] text-emerald-700 bg-emerald-50 shrink-0 self-start sm:self-auto">
                      Immutable Log
                    </Badge>
                  </div>
                ))
              )}
            </div>
          </Card>
        </TabsContent>

        {/* ── TAB 3: DEPARTMENTS & SLA ── */}
        <TabsContent value="departments" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-3xl border-border shadow-sm p-6 space-y-4 bg-white">
              <h3 className="text-base font-bold text-foreground">Constituency Administrative Wards</h3>
              <div className="space-y-2.5">
                {WARDS.map((w) => (
                  <div key={w.id} className="p-3.5 rounded-2xl bg-muted/30 flex items-center justify-between text-xs border border-border/50">
                    <div>
                      <span className="font-bold text-foreground">Ward {w.number} — {bi(w.name)}</span>
                      <p className="text-muted-foreground mt-0.5">Population: {w.population.toLocaleString()}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-bold">Active Ward</Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-3xl border-border shadow-sm p-6 space-y-4 bg-white">
              <h3 className="text-base font-bold text-foreground">Department SLA Performance Standards</h3>
              <div className="space-y-2.5">
                {DEPARTMENTS.map((d) => (
                  <div key={d.id} className="p-3.5 rounded-2xl bg-muted/30 flex items-center justify-between text-xs border border-border/50">
                    <span className="font-bold text-foreground">{bi(d.name)}</span>
                    <Badge className="bg-teal-100 text-teal-800 border-0 text-[10px] font-bold">
                      Standard SLA: {d.slaDays} Days
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* ── TAB 4: PERMISSIONS MATRIX ── */}
        <TabsContent value="permissions" className="space-y-4">
          <Card className="rounded-3xl border-border shadow-sm p-6 space-y-6 bg-white">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-foreground">Hierarchical Role-Based Access Control (RBAC) Matrix</h3>
              <p className="text-xs text-muted-foreground">
                Super Admin → Constituency Admin → Department Admin → Field Officer
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(ROLE_PERMISSIONS).map(([role, perms]) => (
                <div key={role} className="p-4 rounded-2xl border border-border bg-slate-50/50 space-y-3">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2">
                    <span className="font-bold text-xs text-foreground uppercase tracking-wider">
                      {role.replace("_", " ")}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-bold">
                      {perms.length} Permissions
                    </Badge>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {perms.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* ── CREATE ADMIN USER MODAL ── */}
      <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
        <DialogContent className="max-w-lg rounded-3xl p-6 sm:p-8">
          <DialogHeader className="space-y-1 pb-2">
            <DialogTitle className="text-xl font-bold font-display">
              {lang === "ta" ? "புதிய நிர்வாகியைச் சேர்" : "Create Administrative User"}
            </DialogTitle>
          </DialogHeader>

          {formError && (
            <div className="p-3 rounded-xl bg-destructive/10 text-destructive text-xs font-bold flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {formSuccess && (
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{formSuccess}</span>
            </div>
          )}

          <form onSubmit={handleCreateUser} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">{lang === "ta" ? "முழுப் பெயர் *" : "Full Name *"}</Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. S. Narayanan"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">{lang === "ta" ? "மின்னஞ்சல் *" : "Official Email *"}</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="officer@aram.gov.in"
                  className="h-10 rounded-xl text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-bold">{lang === "ta" ? "மொபைல் எண் *" : "Official Mobile *"}</Label>
                <Input
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                  placeholder="9876543210"
                  className="h-10 rounded-xl text-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-bold">{lang === "ta" ? "நிர்வாக பங்கு *" : "Administrative Role *"}</Label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value as Role })}
                className="h-10 w-full rounded-xl px-3 text-xs border border-border bg-white font-medium"
              >
                <option value="constituency_admin">Constituency Admin</option>
                <option value="department_admin">Department Admin</option>
                <option value="field_officer">Field Officer</option>
                <option value="content_admin">Content Admin</option>
                <option value="super_admin">Super Admin</option>
              </select>
            </div>

            {["department_admin", "field_officer"].includes(formData.role) && (
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">{lang === "ta" ? "துறை *" : "Department *"}</Label>
                <select
                  value={formData.departmentId}
                  onChange={(e) => setFormData({ ...formData, departmentId: e.target.value })}
                  className="h-10 w-full rounded-xl px-3 text-xs border border-border bg-white font-medium"
                >
                  {DEPARTMENTS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name.en}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {formData.role === "field_officer" && (
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">{lang === "ta" ? "வார்டு / பகுதி *" : "Assigned Ward *"}</Label>
                <select
                  value={formData.wardId}
                  onChange={(e) => setFormData({ ...formData, wardId: e.target.value })}
                  className="h-10 w-full rounded-xl px-3 text-xs border border-border bg-white font-medium"
                >
                  {WARDS.map((w) => (
                    <option key={w.id} value={w.id}>
                      Ward {w.number} — {w.name.en}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="space-y-1.5">
              <Label className="text-xs font-bold">{lang === "ta" ? "கடவுச்சொல்" : "Initial Password"}</Label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Default: Aram@2026"
                className="h-10 rounded-xl text-xs"
              />
              <p className="text-[10px] text-muted-foreground">Leave empty to use default password (Aram@2026).</p>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowCreateModal(false)}
                className="h-10 rounded-xl text-xs font-semibold"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="h-10 rounded-xl text-xs font-bold bg-primary hover:bg-primary/90 text-white"
              >
                Create Account
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
