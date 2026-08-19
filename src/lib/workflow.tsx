import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Complaint, TimelineEntry, Citizen } from "@/data/mock";
import type { Role, Bilingual } from "@/config/aram";
import { useAuth } from "@/lib/auth";

export const DEMO_TEST_OTP = "123456";
export const OTP_TTL_MS = 5 * 60 * 1000;

const STORAGE_KEY_CITIZEN_SESSION = "aram.citizens.session";
const STORAGE_KEY_CITIZEN_TOKEN = "aram.citizens.token";

export interface PendingOTP {
  mobile: string;
  otp: string;
  expiresAt: number;
  attempts: number;
}

export interface CitizenSession {
  citizenId: string;
  mobileNumber: string;
  fullName?: string | undefined;
  wardId?: string | undefined;
  email?: string | undefined;
  loginAt: string;
}

export interface AuditRecord {
  id?: string;
  logId?: string;
  complaintId?: string;
  action: string;
  performedBy?: string;
  userName?: string;
  role: Role | string;
  timestamp: string;
  details?: string;
  entityId?: string;
  entityType?: string;
  prevStatus?: string;
  newStatus?: string;
  remarks?: string;
}

export interface WorkflowNotification {
  id: string;
  recipientRole: Role | "all" | "citizen";
  complaintId?: string | undefined;
  title: Bilingual;
  body: Bilingual;
  date: string;
  read: boolean;
  priority: "normal" | "high";
}

export interface PublicStatsData {
  totalComplaints: number;
  newComplaints: number;
  assignedComplaints: number;
  inProgressComplaints: number;
  completedComplaints: number;
  resolvedComplaints: number;
  closedComplaints: number;
  resolutionRate: number;
  totalCitizens: number;
  avgResolutionHours: number;
  citizenSatisfactionPct: number;
  departmentBreakdown?: Array<{
    id: string;
    name: Bilingual;
    total: number;
    resolved: number;
    inProgress: number;
    resolutionRate: number;
  }>;
  wardBreakdown?: Array<{
    id: string;
    name: Bilingual;
    number: number;
    total: number;
    resolved: number;
  }>;
}

export interface AdminUserItem {
  userId: string;
  name: string;
  email: string;
  mobile: string;
  role: Role;
  departmentId?: string | undefined;
  departmentName?: string | undefined;
  wardId?: string | undefined;
  active: boolean;
  permissions?: string[] | undefined;
  lastLoginAt?: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface FieldOfficerItem extends AdminUserItem {
  activeTasks: number;
  completedTasks: number;
}

export interface AppointmentItem {
  _id?: string;
  appointmentId: string;
  citizenId: string;
  citizenName: string;
  mobileNumber: string;
  email?: string;
  wardId: string;
  wardName?: string;
  preferredDate: string;
  preferredTime: string;
  purpose: string;
  description?: string;
  relatedComplaintId?: string;
  status: "pending" | "under_review" | "approved" | "rescheduled" | "upcoming" | "completed" | "rejected" | "cancelled";
  confirmedDate?: string;
  confirmedTime?: string;
  meetingLocation?: string;
  mlaRepresentative?: string;
  adminRemarks?: string;
  rejectionReason?: string;
  instructions?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AnnouncementItem {
  announcementId: string;
  title: Bilingual;
  description: Bilingual;
  date: string;
  time?: string;
  location?: string;
  category: string;
  imageUrl?: string;
  registrationInfo?: string;
  published: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface SchemeItem {
  schemeId: string;
  name: Bilingual;
  department: string;
  description: Bilingual;
  benefits: string[];
  eligibility: string[];
  documents: string[];
  applicationProcess?: string;
  applicationLink?: string;
  importantDates?: string;
  active: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface DevelopmentWorkItem {
  workId: string;
  name: Bilingual;
  location: string;
  department: string;
  description: Bilingual;
  startDate: string;
  expectedCompletion: string;
  status: "planned" | "in_progress" | "completed" | "on_hold";
  progressPercent: number;
  images?: string[];
  published: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

interface WorkflowContextValue {
  complaints: Complaint[];
  citizens: Citizen[];
  auditTrail: AuditRecord[];
  notifications: WorkflowNotification[];
  citizenSession: CitizenSession | null;
  citizenToken: string | null;
  stats: PublicStatsData | null;
  isLoading: boolean;

  refreshData: () => Promise<void>;
  getComplaintById: (id: string) => Complaint | undefined;
  getCitizenByMobile: (mobile: string) => Citizen | undefined;
  getCitizenById: (citizenId: string) => Citizen | undefined;
  getComplaintsByMobile: (mobile: string) => Complaint[];
  getComplaintsByCitizenId: (citizenId: string) => Complaint[];

  getOrCreateCitizen: (payload: {
    mobileNumber: string;
    fullName?: string | undefined;
    wardId?: string | undefined;
    email?: string | undefined;
  }) => Citizen;

  createComplaint: (data: {
    categoryId: string;
    description: string;
    address: string;
    wardId: string;
    lat: number;
    lng: number;
    mobileNumber: string;
    citizenName?: string | undefined;
    citizenEmail?: string | undefined;
    beforeImage?: string | undefined;
  }) => Promise<Complaint>;

  requestOtp: (mobileNumber: string) => Promise<{ ok: boolean; message: string }>;
  verifyOtpAndLogin: (
    mobileNumber: string,
    otp: string,
  ) => Promise<{ ok: boolean; message: string }>;
  citizenLogout: () => void;

  verifyComplaint: (id: string, notes?: string) => Promise<void>;
  rejectComplaint: (id: string, reason: string) => Promise<void>;
  markDuplicate: (id: string, duplicateOfId?: string) => Promise<void>;
  requestMoreInfo: (id: string, question: string) => Promise<void>;
  assignDepartment: (id: string, departmentId: string, priority?: "low" | "medium" | "high", remarks?: string) => Promise<void>;
  assignOfficer: (id: string, officerName: string, officerId?: string) => Promise<void>;
  startWork: (id: string, note?: string) => Promise<void>;
  addProgress: (id: string, note: string, photoUrl?: string) => Promise<void>;
  completeWork: (id: string, completionNote: string, afterPhotoUrl?: string) => Promise<void>;
  verifyResolution: (
    id: string,
    satisfied: boolean,
    rating?: number,
    feedback?: string,
    reopenPhoto?: string,
  ) => Promise<void>;
  markNotificationRead: (id: string) => Promise<void>;
  resetToDefault: () => void;

  // Real Backend Administrative Workflow Methods
  fetchAdminUsers: () => Promise<AdminUserItem[]>;
  createAdminUser: (userData: Partial<AdminUserItem> & { password?: string }) => Promise<{ ok: boolean; message?: string }>;
  updateAdminUser: (userId: string, updates: Partial<AdminUserItem> & { password?: string }) => Promise<{ ok: boolean; message?: string }>;
  fetchFieldOfficers: (deptId?: string) => Promise<FieldOfficerItem[]>;
  fetchAuditLogs: () => Promise<AuditRecord[]>;
  
  // Real Workflow Step APIs
  assignDepartmentToComplaint: (complaintId: string, departmentId: string, priority?: string, remarks?: string) => Promise<{ ok: boolean; message?: string }>;
  assignOfficerToComplaint: (complaintId: string, officerId: string, officerName: string) => Promise<{ ok: boolean; message?: string }>;
  startWorkOnComplaint: (complaintId: string, remarks?: string) => Promise<{ ok: boolean; message?: string }>;
  updateProgressOnComplaint: (complaintId: string, remarks: string) => Promise<{ ok: boolean; message?: string }>;
  submitCompletionOnComplaint: (complaintId: string, remarks: string, afterImage?: string) => Promise<{ ok: boolean; message?: string }>;
  verifyResolutionOnComplaint: (complaintId: string, approved: boolean, remarks?: string) => Promise<{ ok: boolean; message?: string }>;

  // Appointments
  fetchAppointments: () => Promise<AppointmentItem[]>;
  updateAppointment: (appointmentId: string, action: string, data?: any) => Promise<{ ok: boolean; message?: string }>;

  // Content
  fetchAnnouncements: (publishedOnly?: boolean) => Promise<AnnouncementItem[]>;
  createAnnouncement: (announcement: Partial<AnnouncementItem>) => Promise<{ ok: boolean; announcement?: AnnouncementItem; message?: string }>;
  updateAnnouncement: (announcementId: string, updates: Partial<AnnouncementItem>) => Promise<{ ok: boolean; message?: string }>;
  fetchSchemes: () => Promise<SchemeItem[]>;
  createScheme: (scheme: Partial<SchemeItem>) => Promise<{ ok: boolean; scheme?: SchemeItem; message?: string }>;
  fetchDevelopmentWorks: () => Promise<DevelopmentWorkItem[]>;
  createDevelopmentWork: (work: Partial<DevelopmentWorkItem>) => Promise<{ ok: boolean; work?: DevelopmentWorkItem; message?: string }>;
  updateDevelopmentWork: (workId: string, updates: Partial<DevelopmentWorkItem>) => Promise<{ ok: boolean; message?: string }>;
}

const WorkflowContext = createContext<WorkflowContextValue | null>(null);

function mapComplaintDoc(doc: any): Complaint {
  return {
    id: doc.complaintId || doc.id || "",
    categoryId: doc.categoryId || "road",
    status: doc.status || "new",
    wardId: doc.wardId || "w-110",
    departmentId: doc.departmentId || "works",
    createdAt: doc.submittedAt || doc.createdAt || new Date().toISOString().split("T")[0]!,
    updatedAt: doc.updatedAt || doc.submittedAt || new Date().toISOString().split("T")[0]!,
    description: doc.description || "",
    address: doc.address || "",
    lat: doc.lat ?? 13.0827,
    lng: doc.lng ?? 80.2707,
    priority: doc.priority || "medium",
    officer: doc.assignedOfficer,
    beforeImage: doc.beforeImage,
    afterImage: doc.afterImage,
    completedOn: doc.completedOn,
    timeline: (doc.timeline || []).map((t: any) => ({
      stage: t.stage,
      label: t.label || { en: t.stage, ta: t.stage },
      date: t.date || doc.submittedAt,
      time: t.time || "10:00",
      department: t.department,
      officer: t.officer,
      note: t.note || { en: "", ta: "" },
      remarks: t.remarks,
      resolutionInfo: t.resolutionInfo,
      done: t.done ?? true,
      performedBy: t.performedBy,
      performedByRole: t.performedByRole,
    })),
    citizenId: doc.citizenId || "",
    citizenMobile: doc.citizenMobile || "",
    citizenVerified: doc.citizenVerified,
    rating: doc.rating,
    resolutionDetails: doc.resolutionDetails,
  };
}

export function WorkflowProvider({ children }: { children: ReactNode }) {
  const { user, token: staffToken } = useAuth();

  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [citizens, setCitizens] = useState<Citizen[]>([]);
  const [notifications, setNotifications] = useState<WorkflowNotification[]>([]);
  const [auditTrail, setAuditTrail] = useState<AuditRecord[]>([]);
  const [citizenSession, setCitizenSession] = useState<CitizenSession | null>(null);
  const [citizenToken, setCitizenToken] = useState<string | null>(null);
  const [stats, setStats] = useState<PublicStatsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Restore citizen session from localStorage
  useEffect(() => {
    try {
      const storedSession = window.localStorage.getItem(STORAGE_KEY_CITIZEN_SESSION);
      const storedToken = window.localStorage.getItem(STORAGE_KEY_CITIZEN_TOKEN);
      if (storedSession) {
        setCitizenSession(JSON.parse(storedSession) as CitizenSession);
      }
      if (storedToken) {
        setCitizenToken(storedToken);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const activeAuthToken = citizenToken || staffToken || null;

  const authHeaders = useCallback(() => {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (activeAuthToken) {
      headers["Authorization"] = `Bearer ${activeAuthToken}`;
    }
    return headers;
  }, [activeAuthToken]);

  // Fetch live complaints, notifications, and stats from API
  const refreshData = useCallback(async () => {
    try {
      setIsLoading(true);
      const headers = authHeaders();

      // 1. Fetch complaints
      let compUrl = "/api/complaints";
      if (citizenSession?.mobileNumber) {
        compUrl += `?mobile=${encodeURIComponent(citizenSession.mobileNumber)}`;
      }

      const [compRes, statsRes, notifRes] = await Promise.all([
        fetch(compUrl, { headers }),
        fetch("/api/stats"),
        fetch("/api/notifications", { headers }),
      ]);

      if (compRes.ok) {
        const compData = await compRes.json();
        if (compData.ok && Array.isArray(compData.complaints)) {
          setComplaints(compData.complaints.map(mapComplaintDoc));
        }
      }

      if (statsRes.ok) {
        const sData = await statsRes.json();
        if (sData.ok && sData.stats) {
          setStats(sData.stats);
        }
      }

      if (notifRes.ok) {
        const nData = await notifRes.json();
        if (nData.ok && Array.isArray(nData.notifications)) {
          setNotifications(
            nData.notifications.map((n: any) => ({
              id: n.notificationId || n.id,
              recipientRole: n.recipientRole,
              complaintId: n.complaintId,
              title: n.title,
              body: n.body,
              date: n.date,
              read: n.read,
              priority: n.priority || "normal",
            })),
          );
        }
      }
    } catch (err) {
      console.error("Workflow refreshData error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [authHeaders, citizenSession?.mobileNumber]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  const getComplaintById = useCallback(
    (id: string) => complaints.find((c) => c.id === id),
    [complaints],
  );

  const getCitizenByMobile = useCallback(
    (mobile: string) => {
      const m = mobile.replace(/\D/g, "");
      return citizens.find((c) => c.mobileNumber === m);
    },
    [citizens],
  );

  const getCitizenById = useCallback(
    (citizenId: string) => citizens.find((c) => c.citizenId === citizenId),
    [citizens],
  );

  const getComplaintsByMobile = useCallback(
    (mobile: string) => {
      const m = mobile.replace(/\D/g, "");
      return complaints.filter((c) => c.citizenMobile === m);
    },
    [complaints],
  );

  const getComplaintsByCitizenId = useCallback(
    (citizenId: string) => complaints.filter((c) => c.citizenId === citizenId),
    [complaints],
  );

  const getOrCreateCitizen = useCallback(
    (payload: {
      mobileNumber: string;
      fullName?: string | undefined;
      wardId?: string | undefined;
      email?: string | undefined;
    }) => {
      const mobile = payload.mobileNumber.replace(/\D/g, "");
      const existing = citizens.find((c) => c.mobileNumber === mobile);
      if (existing) return existing;
      const today = new Date().toISOString().split("T")[0] ?? "2026-08-14";
      const citizenId = `cit-${String(Date.now()).slice(-6)}${String(Math.floor(Math.random() * 100)).padStart(2, "0")}`;
      const created: Citizen = {
        citizenId,
        mobileNumber: mobile,
        createdAt: today,
        fullName: payload.fullName,
        wardId: payload.wardId,
        email: payload.email,
      };
      setCitizens((prev) => [...prev, created]);
      return created;
    },
    [citizens],
  );

  // 1. Create Complaint via API
  const createComplaint = useCallback(
    async (data: {
      categoryId: string;
      description: string;
      address: string;
      wardId: string;
      lat: number;
      lng: number;
      mobileNumber: string;
      citizenName?: string | undefined;
      citizenEmail?: string | undefined;
      beforeImage?: string | undefined;
    }) => {
      try {
        const res = await fetch("/api/complaints", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (!res.ok || !result.ok) {
          throw new Error(result.message || "Failed to create complaint");
        }
        const newComp = mapComplaintDoc(result.complaint);
        setComplaints((prev) => [newComp, ...prev]);

        if (!citizenSession) {
          const session: CitizenSession = {
            citizenId: newComp.citizenId,
            mobileNumber: newComp.citizenMobile,
            fullName: newComp.citizenMobile,
            wardId: newComp.wardId,
            loginAt: new Date().toISOString(),
          };
          setCitizenSession(session);
          if (typeof window !== "undefined") {
            window.localStorage.setItem(STORAGE_KEY_CITIZEN_SESSION, JSON.stringify(session));
          }
        }

        refreshData();
        return newComp;
      } catch (err: any) {
        console.error("createComplaint API error:", err);
        throw err;
      }
    },
    [citizenSession, refreshData],
  );

  // OTP Login Flow
  const requestOtp = useCallback(async (mobileNumber: string) => {
    try {
      const res = await fetch("/api/auth/citizen/otp/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: mobileNumber }),
      });
      const data = await res.json();
      return { ok: data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message || "Failed to request OTP" };
    }
  }, []);

  const verifyOtpAndLogin = useCallback(async (mobileNumber: string, otp: string) => {
    try {
      const res = await fetch("/api/auth/citizen/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: mobileNumber, otp }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        return { ok: false, message: data.message || "Invalid OTP" };
      }

      const session: CitizenSession = {
        citizenId: data.user.citizenId,
        mobileNumber: data.user.mobile,
        fullName: data.user.name,
        wardId: data.user.wardId,
        email: data.user.email,
        loginAt: new Date().toISOString(),
      };

      setCitizenSession(session);
      setCitizenToken(data.token);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY_CITIZEN_SESSION, JSON.stringify(session));
        window.localStorage.setItem(STORAGE_KEY_CITIZEN_TOKEN, data.token);
      }

      refreshData();
      return { ok: true, message: "Login successful" };
    } catch (err: any) {
      return { ok: false, message: err.message || "Login failed" };
    }
  }, [refreshData]);

  const citizenLogout = useCallback(() => {
    setCitizenSession(null);
    setCitizenToken(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY_CITIZEN_SESSION);
      window.localStorage.removeItem(STORAGE_KEY_CITIZEN_TOKEN);
    }
  }, []);

  // Generic action execution helper
  const executeAction = useCallback(
    async (id: string, actionPayload: any) => {
      try {
        const headers = authHeaders();
        const res = await fetch(`/api/complaints/${encodeURIComponent(id)}`, {
          method: "PATCH",
          headers,
          body: JSON.stringify(actionPayload),
        });
        const result = await res.json();
        refreshData();
        return result;
      } catch (err) {
        console.error(`Action ${actionPayload.action} error:`, err);
        return { ok: false, message: "Action failed" };
      }
    },
    [authHeaders, refreshData],
  );

  const verifyComplaint = useCallback(
    async (id: string, notes?: string) => {
      await executeAction(id, { action: "verify", note: notes });
    },
    [executeAction],
  );

  const rejectComplaint = useCallback(
    async (id: string, reason: string) => {
      await executeAction(id, { action: "reject", reason });
    },
    [executeAction],
  );

  const markDuplicate = useCallback(
    async (id: string, duplicateOfId?: string) => {
      await executeAction(id, { action: "reject", reason: `Duplicate of ${duplicateOfId || "existing complaint"}` });
    },
    [executeAction],
  );

  const requestMoreInfo = useCallback(
    async (id: string, question: string) => {
      await executeAction(id, { action: "add_progress", note: `Info requested: ${question}` });
    },
    [executeAction],
  );

  const assignDepartment = useCallback(
    async (id: string, departmentId: string, priority?: "low" | "medium" | "high", remarks?: string) => {
      await fetch(`/api/complaints/${encodeURIComponent(id)}/assign-dept`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ departmentId, priority, remarks }),
      });
      refreshData();
    },
    [authHeaders, refreshData],
  );

  const assignOfficer = useCallback(
    async (id: string, officerName: string, officerId?: string) => {
      await fetch(`/api/complaints/${encodeURIComponent(id)}/assign-officer`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ officerName, officerId: officerId || `usr-${Date.now()}` }),
      });
      refreshData();
    },
    [authHeaders, refreshData],
  );

  const startWork = useCallback(
    async (id: string, note?: string) => {
      await fetch(`/api/complaints/${encodeURIComponent(id)}/start-work`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ remarks: note }),
      });
      refreshData();
    },
    [authHeaders, refreshData],
  );

  const addProgress = useCallback(
    async (id: string, note: string, photoUrl?: string) => {
      await fetch(`/api/complaints/${encodeURIComponent(id)}/update-progress`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ remarks: note, photoUrl }),
      });
      refreshData();
    },
    [authHeaders, refreshData],
  );

  const completeWork = useCallback(
    async (id: string, completionNote: string, afterPhotoUrl?: string) => {
      await fetch(`/api/complaints/${encodeURIComponent(id)}/submit-completion`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ remarks: completionNote, afterImage: afterPhotoUrl }),
      });
      refreshData();
    },
    [authHeaders, refreshData],
  );

  const verifyResolution = useCallback(
    async (
      id: string,
      satisfied: boolean,
      rating: number = 5,
      feedback?: string,
      reopenPhoto?: string,
    ) => {
      await executeAction(id, { action: "citizen_verify", verified: satisfied, rating, feedback, remarks: feedback });
    },
    [executeAction],
  );

  const markNotificationRead = useCallback(async (id: string) => {
    try {
      await fetch("/api/notifications", {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ id }),
      });
      setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
    } catch (err) {
      console.error("Mark notification read error:", err);
    }
  }, [authHeaders]);

  const resetToDefault = useCallback(() => {
    refreshData();
  }, [refreshData]);

  // ── Role-Specific Workflow APIs ──

  const fetchAdminUsers = useCallback(async (): Promise<AdminUserItem[]> => {
    try {
      const res = await fetch("/api/admin/users", { headers: authHeaders() });
      const data = await res.json();
      return data.ok && Array.isArray(data.users) ? data.users : [];
    } catch {
      return [];
    }
  }, [authHeaders]);

  const createAdminUser = useCallback(async (userData: Partial<AdminUserItem> & { password?: string }) => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      return { ok: res.ok && data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders]);

  const updateAdminUser = useCallback(async (userId: string, updates: Partial<AdminUserItem> & { password?: string }) => {
    try {
      const res = await fetch(`/api/admin/users/${encodeURIComponent(userId)}`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify(updates),
      });
      const data = await res.json();
      return { ok: res.ok && data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders]);

  const fetchFieldOfficers = useCallback(async (deptId?: string): Promise<FieldOfficerItem[]> => {
    try {
      const url = deptId ? `/api/admin/field-officers?deptId=${encodeURIComponent(deptId)}` : "/api/admin/field-officers";
      const res = await fetch(url, { headers: authHeaders() });
      const data = await res.json();
      return data.ok && Array.isArray(data.officers) ? data.officers : [];
    } catch {
      return [];
    }
  }, [authHeaders]);

  const fetchAuditLogs = useCallback(async (): Promise<AuditRecord[]> => {
    try {
      const res = await fetch("/api/admin/audit-log", { headers: authHeaders() });
      const data = await res.json();
      return data.ok && Array.isArray(data.auditLogs) ? data.auditLogs : [];
    } catch {
      return [];
    }
  }, [authHeaders]);

  const assignDepartmentToComplaint = useCallback(async (complaintId: string, departmentId: string, priority?: string, remarks?: string) => {
    try {
      const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/assign-dept`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ departmentId, priority, remarks }),
      });
      const data = await res.json();
      refreshData();
      return { ok: res.ok && data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders, refreshData]);

  const assignOfficerToComplaint = useCallback(async (complaintId: string, officerId: string, officerName: string) => {
    try {
      const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/assign-officer`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ officerId, officerName }),
      });
      const data = await res.json();
      refreshData();
      return { ok: res.ok && data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders, refreshData]);

  const startWorkOnComplaint = useCallback(async (complaintId: string, remarks?: string) => {
    try {
      const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/start-work`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ remarks }),
      });
      const data = await res.json();
      refreshData();
      return { ok: res.ok && data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders, refreshData]);

  const updateProgressOnComplaint = useCallback(async (complaintId: string, remarks: string) => {
    try {
      const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/update-progress`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ remarks }),
      });
      const data = await res.json();
      refreshData();
      return { ok: res.ok && data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders, refreshData]);

  const submitCompletionOnComplaint = useCallback(async (complaintId: string, remarks: string, afterImage?: string) => {
    try {
      const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/submit-completion`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ remarks, afterImage }),
      });
      const data = await res.json();
      refreshData();
      return { ok: res.ok && data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders, refreshData]);

  const verifyResolutionOnComplaint = useCallback(async (complaintId: string, approved: boolean, remarks?: string) => {
    try {
      const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/verify-resolution`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ approved, remarks }),
      });
      const data = await res.json();
      refreshData();
      return { ok: res.ok && data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders, refreshData]);

  // Appointments
  const fetchAppointments = useCallback(async (): Promise<AppointmentItem[]> => {
    try {
      const res = await fetch("/api/appointments", { headers: authHeaders() });
      const data = await res.json();
      return data.ok && Array.isArray(data.appointments) ? data.appointments : [];
    } catch {
      return [];
    }
  }, [authHeaders]);

  const updateAppointment = useCallback(async (appointmentId: string, action: string, data?: any) => {
    try {
      const res = await fetch(`/api/appointments/${encodeURIComponent(appointmentId)}`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ action, ...data }),
      });
      const resData = await res.json();
      refreshData();
      return { ok: res.ok && resData.ok, message: resData.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders, refreshData]);

  // Content
  const fetchAnnouncements = useCallback(async (publishedOnly: boolean = false): Promise<AnnouncementItem[]> => {
    try {
      const url = publishedOnly ? "/api/content/announcements" : "/api/content/announcements?published=all";
      const res = await fetch(url, { headers: authHeaders() });
      const data = await res.json();
      return data.ok && Array.isArray(data.announcements) ? data.announcements : [];
    } catch {
      return [];
    }
  }, [authHeaders]);

  const createAnnouncement = useCallback(async (announcement: Partial<AnnouncementItem>) => {
    try {
      const res = await fetch("/api/content/announcements", {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(announcement),
      });
      const data = await res.json();
      return { ok: res.ok && data.ok, announcement: data.announcement, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders]);

  const updateAnnouncement = useCallback(async (announcementId: string, updates: Partial<AnnouncementItem>) => {
    try {
      const res = await fetch(`/api/content/announcements/${encodeURIComponent(announcementId)}`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify(updates),
      });
      const data = await res.json();
      return { ok: res.ok && data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders]);

  const fetchSchemes = useCallback(async (): Promise<SchemeItem[]> => {
    try {
      const res = await fetch("/api/content/schemes", { headers: authHeaders() });
      const data = await res.json();
      return data.ok && Array.isArray(data.schemes) ? data.schemes : [];
    } catch {
      return [];
    }
  }, [authHeaders]);

  const createScheme = useCallback(async (scheme: Partial<SchemeItem>) => {
    try {
      const res = await fetch("/api/content/schemes", {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(scheme),
      });
      const data = await res.json();
      return { ok: res.ok && data.ok, scheme: data.scheme, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders]);

  const fetchDevelopmentWorks = useCallback(async (): Promise<DevelopmentWorkItem[]> => {
    try {
      const res = await fetch("/api/content/development-works", { headers: authHeaders() });
      const data = await res.json();
      return data.ok && Array.isArray(data.works) ? data.works : [];
    } catch {
      return [];
    }
  }, [authHeaders]);

  const createDevelopmentWork = useCallback(async (work: Partial<DevelopmentWorkItem>) => {
    try {
      const res = await fetch("/api/content/development-works", {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(work),
      });
      const data = await res.json();
      return { ok: res.ok && data.ok, work: data.work, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders]);

  const updateDevelopmentWork = useCallback(async (workId: string, updates: Partial<DevelopmentWorkItem>) => {
    try {
      const res = await fetch(`/api/content/development-works/${encodeURIComponent(workId)}`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify(updates),
      });
      const data = await res.json();
      return { ok: res.ok && data.ok, message: data.message };
    } catch (err: any) {
      return { ok: false, message: err.message };
    }
  }, [authHeaders]);

  const value = useMemo(
    () => ({
      complaints,
      citizens,
      auditTrail,
      notifications,
      citizenSession,
      citizenToken,
      stats,
      isLoading,
      refreshData,
      getComplaintById,
      getCitizenByMobile,
      getCitizenById,
      getComplaintsByMobile,
      getComplaintsByCitizenId,
      getOrCreateCitizen,
      createComplaint,
      requestOtp,
      verifyOtpAndLogin,
      citizenLogout,
      verifyComplaint,
      rejectComplaint,
      markDuplicate,
      requestMoreInfo,
      assignDepartment,
      assignOfficer,
      startWork,
      addProgress,
      completeWork,
      verifyResolution,
      markNotificationRead,
      resetToDefault,
      fetchAdminUsers,
      createAdminUser,
      updateAdminUser,
      fetchFieldOfficers,
      fetchAuditLogs,
      assignDepartmentToComplaint,
      assignOfficerToComplaint,
      startWorkOnComplaint,
      updateProgressOnComplaint,
      submitCompletionOnComplaint,
      verifyResolutionOnComplaint,
      fetchAppointments,
      updateAppointment,
      fetchAnnouncements,
      createAnnouncement,
      updateAnnouncement,
      fetchSchemes,
      createScheme,
      fetchDevelopmentWorks,
      createDevelopmentWork,
      updateDevelopmentWork,
    }),
    [
      complaints,
      citizens,
      auditTrail,
      notifications,
      citizenSession,
      citizenToken,
      stats,
      isLoading,
      refreshData,
      getComplaintById,
      getCitizenByMobile,
      getCitizenById,
      getComplaintsByMobile,
      getComplaintsByCitizenId,
      getOrCreateCitizen,
      createComplaint,
      requestOtp,
      verifyOtpAndLogin,
      citizenLogout,
      verifyComplaint,
      rejectComplaint,
      markDuplicate,
      requestMoreInfo,
      assignDepartment,
      assignOfficer,
      startWork,
      addProgress,
      completeWork,
      verifyResolution,
      markNotificationRead,
      resetToDefault,
      fetchAdminUsers,
      createAdminUser,
      updateAdminUser,
      fetchFieldOfficers,
      fetchAuditLogs,
      assignDepartmentToComplaint,
      assignOfficerToComplaint,
      startWorkOnComplaint,
      updateProgressOnComplaint,
      submitCompletionOnComplaint,
      verifyResolutionOnComplaint,
      fetchAppointments,
      updateAppointment,
      fetchAnnouncements,
      createAnnouncement,
      updateAnnouncement,
      fetchSchemes,
      createScheme,
      fetchDevelopmentWorks,
      createDevelopmentWork,
      updateDevelopmentWork,
    ],
  );

  return <WorkflowContext.Provider value={value}>{children}</WorkflowContext.Provider>;
}

export function useWorkflow() {
  const ctx = useContext(WorkflowContext);
  if (!ctx) throw new Error("useWorkflow must be used inside WorkflowProvider");
  return ctx;
}
