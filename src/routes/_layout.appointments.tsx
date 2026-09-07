import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useCallback, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  CalendarCheck,
  UploadCloud,
  FileCheck,
  X,
  Home,
  Building2,
  AlertCircle,
  FileText,
  Trash2,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { useWorkflow } from "@/lib/workflow";
import { MLA, WARDS } from "@/config/aram";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { maskMobile } from "@/data/mock";

export const Route = createFileRoute("/_layout/appointments")({
  component: AppointmentsPage,
});

interface PurposeOption {
  id: string;
  en: string;
  ta: string;
}

const APPOINTMENT_PURPOSES: PurposeOption[] = [
  { id: "civic", en: "Civic Grievance / Complaint", ta: "குடிமை புகார்" },
  { id: "development", en: "Constituency Development Proposal", ta: "தொகுதி வளர்ச்சி திட்டம்" },
  { id: "scheme", en: "Government Welfare Scheme Assistance", ta: "அரசு நலத்திட்ட உதவி" },
  { id: "personal", en: "Personal Grievance / Representation", ta: "தனிநபர் குறைதீர்ப்பு" },
  { id: "community", en: "Community / Resident Association Issue", ta: "குடியிருப்போர் நலச்சங்க விவகாரம்" },
  { id: "other", en: "Other Official Matter", ta: "மற்றவை" },
];

const TIME_SLOTS = [
  { time: "10:00 AM", available: true },
  { time: "10:30 AM", available: true },
  { time: "11:00 AM", available: true },
  { time: "11:30 AM", available: true },
  { time: "12:00 PM", available: true },
  { time: "12:30 PM", available: true },
];

const STATUS_CONFIG: Record<string, { label: string; cls: string }> = {
  pending: { label: "Pending Review", cls: "bg-amber-100 text-amber-800 border-amber-200" },
  under_review: { label: "Under Review", cls: "bg-blue-100 text-blue-800 border-blue-200" },
  approved: { label: "Approved / Scheduled", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  rescheduled: { label: "Rescheduled", cls: "bg-purple-100 text-purple-800 border-purple-200" },
  upcoming: { label: "Upcoming Meeting", cls: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  completed: { label: "Completed", cls: "bg-slate-100 text-slate-800 border-slate-200" },
  rejected: { label: "Rejected", cls: "bg-rose-100 text-rose-800 border-rose-200" },
  cancelled: { label: "Cancelled", cls: "bg-red-100 text-red-800 border-red-200" },
};

interface FormErrors {
  name?: string | undefined;
  mobile?: string | undefined;
  description?: string | undefined;
  date?: string | undefined;
  time?: string | undefined;
  ward?: string | undefined;
}

function AppointmentsPage() {
  const { bi, lang } = useI18n();
  const { user } = useAuth();
  const { citizenSession, complaints } = useWorkflow();

  const [activeTab, setActiveTab] = useState<"book" | "history">("book");
  const [appointmentsList, setAppointmentsList] = useState<any[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  // Section 1: Citizen details
  const [fullName, setFullName] = useState(citizenSession?.fullName || user?.name || "");
  const [mobile, setMobile] = useState(citizenSession?.mobileNumber || user?.mobile || "");
  const [email, setEmail] = useState(citizenSession?.email || user?.email || "");
  const [wardId, setWardId] = useState(citizenSession?.wardId || "w-110");
  const [relatedComplaintId, setRelatedComplaintId] = useState<string>("");

  // Section 2: Purpose
  const [purposeId, setPurposeId] = useState("civic");
  const [description, setDescription] = useState("");

  // Section 3: Date & Time
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split("T")[0] ?? "2026-08-19";
  const [preferredDate, setPreferredDate] = useState(minDateStr);
  const [preferredTime, setPreferredTime] = useState("10:30 AM");

  // Section 4: Document
  const [documentFile, setDocumentFile] = useState<{ name: string; size: string } | null>(null);

  // Submission state
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedAppt, setSubmittedAppt] = useState<any | null>(null);
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  // Filter complaints belonging to this citizen
  const citizenComplaints = complaints.filter(
    (c) =>
      c.citizenMobile === mobile.replace(/\D/g, "") ||
      c.citizenId === citizenSession?.citizenId,
  );

  const fetchAppointments = useCallback(async () => {
    try {
      setLoadingHistory(true);
      const queryMobile = mobile.replace(/\D/g, "");
      const url = queryMobile ? `/api/appointments?mobile=${queryMobile}` : `/api/appointments`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok && data.ok && Array.isArray(data.appointments)) {
        setAppointmentsList(data.appointments);
      }
    } catch {
      /* ignore */
    } finally {
      setLoadingHistory(false);
    }
  }, [mobile]);

  useEffect(() => {
    if (activeTab === "history") {
      fetchAppointments();
    }
  }, [activeTab, fetchAppointments]);

  const selectedPurpose: PurposeOption =
    APPOINTMENT_PURPOSES.find((p) => p.id === purposeId) ?? APPOINTMENT_PURPOSES[0]!;

  const handleDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocumentFile({
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
      });
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!fullName.trim()) {
      newErrors.name = lang === "ta" ? "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்." : "Please enter your full name.";
    }
    const cleanMobile = mobile.replace(/\D/g, "");
    if (!cleanMobile || !/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobile =
        lang === "ta"
          ? "தயவுசெய்து சரியான 10 இலக்க இந்திய மொபைல் எண்ணை உள்ளிடவும்."
          : "Please enter a valid 10-digit Indian mobile number.";
    }
    if (!description.trim() || description.trim().length < 5) {
      newErrors.description =
        lang === "ta"
          ? "தயவுசெய்து சந்திப்பின் காரணத்தை விவரிக்கவும்."
          : "Please briefly describe the reason for your appointment.";
    }
    if (!preferredDate) {
      newErrors.date = lang === "ta" ? "தயவுசெய்து தேதியை தேர்வு செய்யவும்." : "Please select a date.";
    }
    if (!preferredTime) {
      newErrors.time = lang === "ta" ? "தயவுசெய்து நேரத்தை தேர்வு செய்யவும்." : "Please select a time slot.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          citizenName: fullName.trim(),
          mobileNumber: mobile.replace(/\D/g, ""),
          mobile: mobile.replace(/\D/g, ""),
          email: email.trim() || undefined,
          wardId,
          purpose: selectedPurpose.en,
          preferredDate,
          appointmentDate: preferredDate,
          preferredTime,
          appointmentTime: preferredTime,
          description: description.trim(),
          location: "MLA Constituency Office, Thousand Lights, Chennai",
          venue: "MLA Constituency Office, Thousand Lights, Chennai",
          relatedComplaintId: relatedComplaintId || undefined,
        }),
      });
      const data = await res.json();
      setSubmitting(false);
      if (res.ok && data.ok && data.appointment) {
        setSubmittedAppt(data.appointment);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setErrors({ description: data.message || "Failed to book appointment" });
      }
    } catch (err: any) {
      setSubmitting(false);
      setErrors({ description: err.message || "Failed to book appointment" });
    }
  };

  const handleCancelAppt = async (apptId: string) => {
    if (!confirm(lang === "ta" ? "இந்த சந்திப்பை ரத்து செய்ய விரும்புகிறீர்களா?" : "Are you sure you want to cancel this appointment?")) {
      return;
    }
    setCancellingId(apptId);
    try {
      const res = await fetch(`/api/appointments/${apptId}`, { method: "DELETE" });
      if (res.ok) {
        fetchAppointments();
      }
    } catch {
      /* ignore */
    } finally {
      setCancellingId(null);
    }
  };

  // ════════════════════════════════════════════════════════════════════════
  // SUCCESS SCREEN
  // ════════════════════════════════════════════════════════════════════════
  if (submitted && submittedAppt) {
    return (
      <div className="mx-auto max-w-xl px-4 py-12 sm:py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-6 shadow-sm ring-8 ring-emerald-50">
          <CalendarCheck className="h-10 w-10" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-2 font-display">
          {lang === "ta" ? "சந்திப்பு கோரிக்கை வெற்றிகரமாக பதிவு செய்யப்பட்டது!" : "Appointment Request Submitted!"}
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          {lang === "ta"
            ? "உங்கள் சந்திப்பு கோரிக்கை தொகுதி தலைமை நிர்வாகிக்கு அனுப்பப்பட்டுள்ளது. அலுவலகம் சரிபார்த்தவுடன் உறுதிப்படுத்தல் தகவல் உங்களுக்கு அனுப்பப்படும்."
            : "Your appointment request has been registered and forwarded to the Constituency Admin Office. You will receive an SMS update once reviewed."}
        </p>

        {/* Appointment Confirmation Card */}
        <Card className="border-border shadow-soft bg-white rounded-3xl overflow-hidden text-left mb-8">
          <div className="bg-primary/5 px-6 py-4 border-b border-border/80 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {lang === "ta" ? "சந்திப்பு எண்" : "Appointment ID"}
            </span>
            <Badge className="bg-amber-100 text-amber-800 border-0 font-bold text-xs">
              {lang === "ta" ? "பரிசீலனையில்" : "Pending Review"}
            </Badge>
          </div>
          <CardContent className="p-6 space-y-4 text-sm">
            <div className="text-2xl sm:text-3xl font-black text-primary font-mono tracking-tight">
              {submittedAppt.appointmentId}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/50 text-xs">
              <div>
                <span className="text-muted-foreground">{lang === "ta" ? "பெயர்" : "Citizen Name"}:</span>
                <p className="font-bold text-foreground mt-0.5">{submittedAppt.citizenName}</p>
              </div>
              <div>
                <span className="text-muted-foreground">{lang === "ta" ? "மொபைல்" : "Mobile"}:</span>
                <p className="font-bold text-foreground mt-0.5">+91 {maskMobile(submittedAppt.mobile || submittedAppt.mobileNumber)}</p>
              </div>
              <div>
                <span className="text-muted-foreground">{lang === "ta" ? "சந்திப்பு நோக்கம்" : "Purpose"}:</span>
                <p className="font-bold text-foreground mt-0.5">{submittedAppt.purpose}</p>
              </div>
              <div>
                <span className="text-muted-foreground">{lang === "ta" ? "விருப்ப நேரம்" : "Date & Time"}:</span>
                <p className="font-bold text-foreground mt-0.5">
                  {submittedAppt.appointmentDate || submittedAppt.preferredDate} · {submittedAppt.appointmentTime || submittedAppt.preferredTime}
                </p>
              </div>
              <div className="col-span-2">
                <span className="text-muted-foreground">{lang === "ta" ? "இடம்" : "Venue"}:</span>
                <p className="font-semibold text-foreground mt-0.5">
                  MLA Constituency Office, Thousand Lights, Chennai
                </p>
              </div>
              {submittedAppt.relatedComplaintId && (
                <div className="col-span-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-muted-foreground">Related Complaint: </span>
                  <span className="font-mono font-bold text-primary">#{submittedAppt.relatedComplaintId}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Button
            size="lg"
            className="rounded-xl font-bold bg-primary hover:bg-primary/90 gap-2 h-12"
            onClick={() => {
              setSubmitted(false);
              setActiveTab("history");
            }}
          >
            <Calendar className="h-4 w-4" />
            <span>{lang === "ta" ? "என் சந்திப்புகள்" : "View My Appointments"}</span>
          </Button>

          <Button asChild variant="ghost" size="lg" className="rounded-xl font-semibold gap-1.5 h-12">
            <Link to="/">
              <Home className="h-4 w-4" />
              <span>{lang === "ta" ? "முகப்புக்கு செல்ல" : "Back to Home"}</span>
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // SINGLE UNIFIED APPOINTMENT FORM & HISTORY TABS
  // ════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-[#f9f6f0] py-4 sm:py-6">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12 pb-20 bg-white min-h-screen rounded-3xl shadow-xl text-slate-950 border border-stone-200/80">
      {/* ── Page Header ── */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-display">
          {lang === "ta" ? "சட்டமன்ற உறுப்பினருடன் சந்திப்பு" : "Meet Your MLA — Book Appointment"}
        </h1>
        <p className="text-xs sm:text-sm text-slate-800 font-semibold mt-1">
          {lang === "ta"
            ? "தொகுதி விவகாரங்கள், கோரிக்கைகள் மற்றும் உதவிகளுக்கு மாண்புமிகு சட்டமன்ற உறுப்பினருடன் நேரடி சந்திப்பை முன்பதிவு செய்க."
            : "Request an official meeting appointment with your Member of Legislative Assembly to discuss constituency issues."}
        </p>
      </div>

      {/* MLA Profile Card */}
      <div className="rounded-3xl border border-rose-200/80 bg-gradient-to-r from-rose-50/80 via-white to-rose-50/50 p-5 sm:p-6 shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="h-12 w-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-base font-black text-slate-950">{bi(MLA.name)}</h2>
            <p className="text-xs text-slate-700 font-bold">{bi(MLA.role)}</p>
            <p className="text-[11px] text-rose-800 font-bold mt-0.5 flex items-center gap-1">
              <Clock className="h-3 w-3" /> {bi(MLA.officeHours)}
            </p>
          </div>
        </div>

        {/* Tab Switcher: Book / History */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-300 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("book")}
            className={`px-3.5 py-2 rounded-lg text-xs font-black transition-colors ${
              activeTab === "book" ? "bg-primary text-white shadow-xs" : "text-slate-700 hover:text-slate-950"
            }`}
          >
            {lang === "ta" ? "முன்பதிவு" : "Book Appointment"}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("history")}
            className={`px-3.5 py-2 rounded-lg text-xs font-black transition-colors ${
              activeTab === "history" ? "bg-primary text-white shadow-xs" : "text-slate-700 hover:text-slate-950"
            }`}
          >
            {lang === "ta" ? "என் சந்திப்புகள்" : "My Appointments"}
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          TAB: APPOINTMENT HISTORY
      ════════════════════════════════════════════════════════════════ */}
      {activeTab === "history" ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-950">
              {lang === "ta" ? "உங்கள் முந்தைய சந்திப்பு கோரிக்கைகள்" : "Your Appointment Requests"}
            </h3>
            <Button size="sm" variant="outline" className="text-xs font-bold rounded-xl text-slate-900 border-slate-300 bg-white" onClick={() => setActiveTab("book")}>
              + {lang === "ta" ? "புதிய சந்திப்பு" : "Book New Request"}
            </Button>
          </div>

          {loadingHistory ? (
            <div className="p-8 text-center text-xs text-slate-700 font-bold">
              {lang === "ta" ? "சந்திப்புகள் ஏற்றப்படுகின்றன..." : "Loading appointments..."}
            </div>
          ) : appointmentsList.length === 0 ? (
            <div className="p-10 text-center border border-dashed border-slate-300 rounded-3xl bg-slate-50/80 space-y-2">
              <Calendar className="h-8 w-8 text-slate-400 mx-auto" />
              <p className="text-sm font-black text-slate-950">
                {lang === "ta" ? "முன்பதிவு செய்யப்பட்ட சந்திப்புகள் எதுவும் இல்லை" : "No appointments found"}
              </p>
              <p className="text-xs text-slate-700 font-medium max-w-sm mx-auto">
                {lang === "ta"
                  ? "சட்டமன்ற உறுப்பினருடன் புதிய சந்திப்பை முன்பதிவு செய்ய மேலே உள்ள படிவத்தைப் பயன்படுத்தவும்."
                  : "You haven't requested any MLA appointments yet. Use the Book Appointment tab to request a slot."}
              </p>
            </div>
          ) : (
            appointmentsList.map((item) => {
              const statusMeta = STATUS_CONFIG[item.status] ?? STATUS_CONFIG["pending"]!;
              return (
                <Card key={item.appointmentId} className="rounded-3xl border-border bg-white shadow-sm p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-primary">{item.appointmentId}</span>
                        <Badge className={`text-[10px] border font-bold px-2 py-0.5 ${statusMeta.cls}`}>
                          {statusMeta.label}
                        </Badge>
                      </div>
                      <h4 className="font-bold text-sm text-foreground mt-1">{item.purpose}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                    </div>

                    {item.status === "pending" && (
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={cancellingId === item.appointmentId}
                        onClick={() => handleCancelAppt(item.appointmentId)}
                        className="text-xs text-destructive hover:bg-destructive/10 rounded-xl h-8 px-2.5 font-bold"
                      >
                        <Trash2 className="h-3.5 w-3.5 mr-1" />
                        {lang === "ta" ? "ரத்து செய்க" : "Cancel Request"}
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      <span>{item.confirmedDate || item.appointmentDate || item.preferredDate} · {item.confirmedTime || item.appointmentTime || item.preferredTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      <span className="truncate">{item.venue || item.meetingLocation || "MLA Constituency Office"}</span>
                    </div>
                    {item.relatedComplaintId && (
                      <div className="flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-primary" />
                        <span>Complaint #{item.relatedComplaintId}</span>
                      </div>
                    )}
                  </div>

                  {item.instructions && (
                    <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
                      <strong>Office Instructions:</strong> {item.instructions}
                    </div>
                  )}

                  {item.rejectionReason && (
                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900 font-medium">
                      <strong>Rejection Note:</strong> {item.rejectionReason}
                    </div>
                  )}
                </Card>
              );
            })
          )}
        </div>
      ) : (
        /* ════════════════════════════════════════════════════════════════
            TAB: BOOK APPOINTMENT FORM
        ════════════════════════════════════════════════════════════════ */
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="rounded-3xl border-border bg-white p-5 sm:p-8 shadow-soft space-y-8">
            
            {/* ── SECTION 1: CITIZEN DETAILS ── */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                  1
                </span>
                <h3 className="text-sm sm:text-base font-black text-slate-950">
                  {lang === "ta" ? "குடிமக்கள் விவரங்கள்" : "Citizen Details"}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-950">
                    {lang === "ta" ? "முழு பெயர் *" : "Full Name *"}
                  </label>
                  <Input
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      setErrors((err) => ({ ...err, name: undefined }));
                    }}
                    placeholder="e.g. Priya Raman"
                    className="h-11 rounded-xl text-xs sm:text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
                  />
                  {errors.name && <p className="text-xs text-destructive font-medium">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-950">
                    {lang === "ta" ? "மொபைல் எண் *" : "Mobile Number *"}
                  </label>
                  <div className="flex gap-2">
                    <div className="flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 px-3 text-xs font-black text-slate-900">
                      +91
                    </div>
                    <Input
                      type="tel"
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value.replace(/\D/g, ""));
                        setErrors((err) => ({ ...err, mobile: undefined }));
                      }}
                      placeholder="98765 43210"
                      className="h-11 rounded-xl text-xs sm:text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400 flex-1"
                    />
                  </div>
                  {errors.mobile && <p className="text-xs text-destructive font-medium">{errors.mobile}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-950">
                    {lang === "ta" ? "மின்னஞ்சல் முகவரி (விருப்பத்திற்குரியது)" : "Email Address (Optional)"}
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. citizen@example.com"
                    className="h-11 rounded-xl text-xs sm:text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-950">
                    {lang === "ta" ? "வார்டு *" : "Ward *"}
                  </label>
                  <select
                    value={wardId}
                    onChange={(e) => setWardId(e.target.value)}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-xs sm:text-sm font-semibold text-slate-950"
                  >
                    {WARDS.map((w) => (
                      <option key={w.id} value={w.id}>
                        Ward {w.number} — {bi(w.name)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* ── SECTION 2: PURPOSE OF MEETING ── */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                  2
                </span>
                <h3 className="text-sm sm:text-base font-black text-slate-950">
                  {lang === "ta" ? "சந்திப்பின் நோக்கம்" : "Purpose of Meeting"}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {APPOINTMENT_PURPOSES.map((p) => {
                    const isSelected = purposeId === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPurposeId(p.id)}
                        className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-left truncate ${
                          isSelected
                            ? "border-primary bg-primary/10 text-primary font-black shadow-xs"
                            : "border-slate-300 hover:border-primary/40 text-slate-900 bg-white"
                        }`}
                      >
                        {lang === "ta" ? p.ta : p.en}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-bold text-slate-950">
                    {lang === "ta" ? "சந்திப்பின் காரணத்தை சுருக்கமாக விவரிக்கவும் *" : "Brief Description / Subject *"}
                  </label>
                  <Textarea
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      setErrors((err) => ({ ...err, description: undefined }));
                    }}
                    placeholder={
                      lang === "ta"
                        ? "சந்திப்பின் நோக்கம், தொகுதி விவகாரம் மற்றும் தேவைப்படும் உதவிகளை இங்கு விவரிக்கவும்..."
                        : "Please describe the reason for your appointment and what support or action you are requesting from the MLA..."
                    }
                    rows={3}
                    className="resize-none text-xs sm:text-sm rounded-2xl border-slate-300 text-slate-950 font-semibold bg-white placeholder:text-slate-400"
                  />
                  {errors.description && <p className="text-xs text-destructive font-medium">{errors.description}</p>}
                </div>

                {/* Optional: Link an existing complaint */}
                {citizenComplaints.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-primary" />
                      <span>{lang === "ta" ? "தொடர்புடைய புகார் (விருப்பத்திற்குரியது)" : "Link an Existing Complaint (Optional)"}</span>
                    </label>
                    <select
                      value={relatedComplaintId}
                      onChange={(e) => setRelatedComplaintId(e.target.value)}
                      className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-950"
                    >
                      <option value="">No related complaint</option>
                      {citizenComplaints.map((c) => (
                        <option key={c.id} value={c.id}>
                          #{c.id} — {c.description.slice(0, 50)}... ({c.status})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* ── SECTION 3: PREFERRED DATE & TIME ── */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                  3
                </span>
                <h3 className="text-sm sm:text-base font-black text-slate-950">
                  {lang === "ta" ? "விருப்பமான தேதி மற்றும் நேரம்" : "Preferred Appointment Slot"}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-950">
                    {lang === "ta" ? "விருப்பமான தேதி *" : "Preferred Date *"}
                  </label>
                  <Input
                    type="date"
                    min={minDateStr}
                    value={preferredDate}
                    onChange={(e) => {
                      setPreferredDate(e.target.value);
                      setErrors((err) => ({ ...err, date: undefined }));
                    }}
                    className="h-11 rounded-xl text-xs sm:text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
                  />
                  {errors.date && <p className="text-xs text-destructive font-medium">{errors.date}</p>}
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-950">
                    {lang === "ta" ? "விருப்பமான நேரம் *" : "Preferred Time Slot *"}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-1">
                    {TIME_SLOTS.map(({ time, available }) => {
                      const isSelected = preferredTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={!available}
                          onClick={() => {
                            if (available) {
                              setPreferredTime(time);
                              setErrors((err) => ({ ...err, time: undefined }));
                            }
                          }}
                          className={`h-10 rounded-xl border text-xs transition-all ${
                            !available
                              ? "opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200"
                              : isSelected
                              ? "border-[#d91c2b] bg-[#d91c2b] text-white shadow-sm font-black"
                              : "border-slate-300 hover:border-[#d91c2b]/40 text-slate-900 bg-white hover:bg-slate-50 font-bold"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  {errors.time && <p className="text-xs text-destructive font-medium">{errors.time}</p>}
                </div>
              </div>
            </div>

            {/* ── SECTION 4: SUBMIT & PREVIEW ── */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 text-xs space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-semibold">Citizen Name:</span>
                  <span className="font-bold text-slate-950">{fullName || "—"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-semibold">Mobile Number:</span>
                  <span className="font-bold text-slate-950">{mobile || "—"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-semibold">Purpose:</span>
                  <span className="font-bold text-slate-950">{lang === "ta" ? selectedPurpose.ta : selectedPurpose.en}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-semibold">Requested Slot:</span>
                  <span className="font-black text-[#d91c2b]">{preferredDate} at {preferredTime}</span>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full h-12 rounded-xl font-bold bg-[#d91c2b] hover:bg-[#b81220] text-white shadow-md text-sm gap-2 mt-4"
              >
                {submitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <CalendarCheck className="h-4 w-4" />
                    <span>{lang === "ta" ? "சந்திப்பு கோரிக்கையை சமர்ப்பிக்கவும்" : "Submit Appointment Request"}</span>
                  </>
                )}
              </Button>
            </div>

          </Card>
        </form>
      )}
    </div>
    </div>
  );
}
