import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  ShieldCheck,
  Phone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Clock,
  LogIn,
  FileText,
  Home,
  Building2,
  Briefcase,
  SlidersHorizontal,
  KeyRound,
  Lock,
  User,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useAuth, ROLE_DASHBOARDS } from "@/lib/auth";
import { useWorkflow } from "@/lib/workflow";
import type { Role } from "@/config/aram";
import { ROLE_META } from "@/config/aram";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const Route = createFileRoute("/_layout/login")({
  component: LoginPage,
});

const OTP_RESEND_DELAY = 30;

/* ─────────────────────────── Citizen Mobile Login ─────────────────────────── */

function CitizenMobileLoginCard({
  onGoToOfficerLogin,
}: {
  onGoToOfficerLogin: () => void;
}) {
  const { bi, lang } = useI18n();
  const navigate = useNavigate();
  const { requestOtp, verifyOtpAndLogin } = useWorkflow();

  const [stage, setStage] = useState<"mobile" | "otp">("mobile");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [maskedMobile, setMaskedMobile] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (resendTimer > 0) {
      timerRef.current = window.setInterval(() => {
        setResendTimer((t) => (t <= 1 ? 0 : t - 1));
      }, 1000);
    }
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [resendTimer]);

  const maskMobileFn = (m: string) => {
    const digits = m.replace(/\D/g, "");
    if (digits.length !== 10) return m;
    return `${digits.substring(0, 2)}******${digits.substring(digits.length - 2)}`;
  };

  const validateMobile = (m: string): { valid: boolean; message?: string } => {
    const digits = m.replace(/\D/g, "");
    if (digits.length === 0)
      return {
        valid: false,
        message:
          lang === "ta" ? "மொபைல் எண் தேவை" : "Mobile number is required",
      };
    if (!/^[6-9]\d{9}$/.test(digits)) {
      return {
        valid: false,
        message:
          lang === "ta"
            ? "6-9-ல் தொடங்கும் சரியான 10 இலக்க இந்திய மொபைல் எண்ணை உள்ளிடவும்"
            : "Enter a valid 10-digit Indian mobile starting with 6-9",
      };
    }
    return { valid: true };
  };

  const handleRequestOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");
    setSuccessMsg("");
    const v = validateMobile(mobile);
    if (!v.valid) {
      setError(v.message || "");
      return;
    }
    setLoading(true);
    try {
      const res = await requestOtp(mobile);
      setLoading(false);
      if (!res.ok) {
        setError(res.message);
        return;
      }
      setMaskedMobile(maskMobileFn(mobile));
      setStage("otp");
      setResendTimer(OTP_RESEND_DELAY);
      setSuccessMsg(res.message);
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Failed to send OTP");
    }
  };

  const handleVerifyOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");
    if (otp.length !== 6) {
      setError(
        lang === "ta"
          ? "6 இலக்க OTP ஐ உள்ளிடவும்"
          : "Please enter a 6-digit OTP",
      );
      return;
    }
    setLoading(true);
    try {
      const res = await verifyOtpAndLogin(mobile, otp);
      setLoading(false);
      if (!res.ok) {
        setError(res.message);
        return;
      }
      setSuccessMsg(
        lang === "ta"
          ? "வெற்றிகரமாக உள்நுழையவுள்ளது..."
          : "Login successful...",
      );
      setTimeout(() => navigate({ to: "/dashboard/citizen" }), 400);
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Verification failed");
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0) return;
    setOtp("");
    setError("");
    setLoading(true);
    try {
      const res = await requestOtp(mobile);
      setLoading(false);
      if (!res.ok) {
        setError(res.message);
        return;
      }
      setResendTimer(OTP_RESEND_DELAY);
      setSuccessMsg(
        lang === "ta"
          ? "புதிய OTP அனுப்பப்பட்டது"
          : "A new OTP has been sent",
      );
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Failed to resend OTP");
    }
  };

  const handleBackToMobile = () => {
    setStage("mobile");
    setOtp("");
    setError("");
    setSuccessMsg("");
  };

  return (
    <div className="rounded-3xl border border-border bg-white shadow-soft p-6 sm:p-8 space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/5 rounded-full translate-y-12 -translate-x-10 pointer-events-none" />

      <div className="relative space-y-1">
        <div className="flex items-center justify-between">
          <Badge className="bg-red-700 text-white border-0 text-[11px] font-black px-3 py-1 shadow-2xs">
            <User className="h-3 w-3 mr-1 text-amber-400" />
            {lang === "ta" ? "குடிமகன் உள்நுழைவு" : "Citizen Login"}
          </Badge>
          <Badge
            variant="outline"
            className="text-[10px] text-slate-700 border-slate-300 font-bold gap-1"
          >
            <ShieldCheck className="h-3 w-3 text-emerald-600" />
            {lang === "ta" ? "OTP பாதுகாப்பு" : "OTP Secured"}
          </Badge>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-display tracking-tight pt-1">
          {lang === "ta"
            ? "உங்கள் மொபைல் எண்ணைக் கொண்டு உள்நுழையவும்"
            : "Sign in with your Mobile Number"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-800 font-medium">
          {lang === "ta"
            ? "பிரத்யேக பயனர் பெயர் அல்லது கடவுச்சொல் தேவையில்லை. OTP எளிதாக உள்நுழையவும்."
            : "No username or password needed. Simply verify with an OTP to track your complaints."}
        </p>
      </div>

      {successMsg && stage === "otp" && (
        <div className="relative flex items-start gap-2 p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-800 font-bold leading-snug">
            {successMsg}
          </div>
        </div>
      )}

      {error && (
        <div className="relative flex items-start gap-2 p-3 rounded-2xl bg-red-50 border border-red-200">
          <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
          <div className="text-xs text-red-800 font-bold leading-snug">
            {error}
          </div>
        </div>
      )}

      {stage === "mobile" ? (
        <form onSubmit={handleRequestOtp} className="relative space-y-4">
          <div className="space-y-2">
            <Label className="text-xs font-black text-slate-950 flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-primary" />
              {lang === "ta" ? "மொபைல் எண் *" : "Mobile Number *"}
            </Label>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-14 flex items-center justify-center border-r border-slate-300 bg-slate-100 rounded-l-xl text-sm font-black text-slate-800">
                +91
              </div>
              <Input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={mobile}
                onChange={(e) => {
                  const digits = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
                  setMobile(digits);
                  setError("");
                }}
                placeholder={lang === "ta" ? "98765 43210" : "98765 43210"}
                className="h-12 rounded-xl pl-16 text-base font-bold text-slate-950 bg-white border-2 border-slate-300 placeholder:text-slate-400 tracking-wider"
              />
            </div>
            <p className="text-[11px] text-slate-700 font-medium leading-relaxed">
              {lang === "ta"
                ? "உங்கள் மொபைல் எண் புகார் பதிவு செய்யப்பட்டது இருக்க வேண்டும். இல்லையெனில், முதலில் புகாரை பதிவு செய்யவும்."
                : "This mobile must already have at least one complaint registered. If not, please report a complaint first."}
            </p>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-md gap-2"
          >
            {loading ? (
              <span className="gap-1.5 flex items-center">
                <Clock className="h-4 w-4 animate-spin" />
                {lang === "ta"
                  ? "OTP அனுப்பப்படுகிறது..."
                  : "Sending OTP..."}
              </span>
            ) : (
              <>
                <KeyRound className="h-4 w-4" />
                <span>
                  {lang === "ta" ? "OTP ஐப் பெறு →" : "Send OTP →"}
                </span>
              </>
            )}
          </Button>

          <div className="flex items-center justify-between pt-1">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground gap-1 px-2 h-8"
            >
              <Link to="/">
                <Home className="h-3.5 w-3.5" />
                {lang === "ta" ? "முகப்பு" : "Home"}
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-xs text-primary font-semibold gap-1 px-2 h-8"
            >
              <Link to="/complaints/register">
                <FileText className="h-3.5 w-3.5" />
                {lang === "ta" ? "புதிய புகார் பதிவு" : "Report a Complaint"}
              </Link>
            </Button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="relative space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <KeyRound className="h-3.5 w-3.5 text-primary" />
                {lang === "ta" ? "OTP ஐ உள்ளிடவும்" : "Enter OTP"}
              </Label>
              <button
                type="button"
                onClick={handleBackToMobile}
                className="text-[11px] text-muted-foreground hover:text-foreground font-semibold"
              >
                ← {lang === "ta" ? "மொபைலை மாற்று" : "Change mobile"}
              </button>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-medium">
                    {lang === "ta" ? "OTP அனுப்பப்பட்டது" : "OTP sent to"}
                  </p>
                  <p className="text-sm font-black text-foreground font-display tracking-wide">
                    +91 {maskedMobile}
                  </p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="text-[10px] font-bold bg-white"
              >
                6 {lang === "ta" ? "இலக்கங்கள்" : "digits"}
              </Badge>
            </div>

            <div className="flex flex-col items-center gap-3 pt-2">
              <InputOTP
                value={otp}
                onChange={(v) => {
                  setOtp(v.replace(/\D/g, "").slice(0, 6));
                  setError("");
                }}
                maxLength={6}
                render={({ slots }) => (
                  <InputOTPGroup className="gap-2">
                    {slots.map((slot, idx) => (
                      <InputOTPSlot
                        key={idx}
                        index={idx}
                        {...slot}
                        className="w-11 h-12 sm:w-12 sm:h-14 rounded-xl border-2 border-slate-200 text-lg font-black font-display bg-white data-[active=true]:border-primary data-[active=true]:ring-2 data-[active=true]:ring-primary/20"
                      />
                    ))}
                  </InputOTPGroup>
                )}
              />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowOtp((s) => !s)}
                  className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground font-semibold"
                >
                  {showOtp ? (
                    <EyeOff className="h-3.5 w-3.5" />
                  ) : (
                    <Eye className="h-3.5 w-3.5" />
                  )}
                  {showOtp
                    ? lang === "ta"
                      ? "மறைக்க"
                      : "Hide"
                    : lang === "ta"
                      ? "காட்டு"
                      : "Show"}
                </button>
                <span className="text-slate-300 text-xs">|</span>
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendTimer > 0 || loading}
                  className={`text-[11px] font-bold flex items-center gap-1 ${
                    resendTimer > 0 || loading
                      ? "text-muted-foreground cursor-not-allowed"
                      : "text-primary hover:underline"
                  }`}
                >
                  <Clock className="h-3.5 w-3.5" />
                  {resendTimer > 0
                    ? `${lang === "ta" ? "மீண்டும் அனுப்பு" : "Resend in"} ${resendTimer}s`
                    : lang === "ta"
                      ? "மீண்டும் OTP அனுப்பு"
                      : "Resend OTP"}
                </button>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-md gap-2"
          >
            {loading ? (
              <span className="gap-1.5 flex items-center">
                <Clock className="h-4 w-4 animate-spin" />
                {lang === "ta" ? "உள்நுழைகிறது..." : "Verifying..."}
              </span>
            ) : (
              <>
                <LogIn className="h-4 w-4" />
                <span>
                  {lang === "ta" ? "உள்நுழைய →" : "Verify & Sign In →"}
                </span>
              </>
            )}
          </Button>
        </form>
      )}

      {/* ── Officer / Administrative Login Switch Button ── */}
      <div className="pt-4 border-t border-border/80">
        <button
          type="button"
          onClick={onGoToOfficerLogin}
          className="w-full rounded-2xl border border-dashed border-slate-300 hover:border-primary/50 hover:bg-slate-50/80 p-3.5 flex items-center gap-3 transition-all group"
        >
          <div className="h-10 w-10 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center text-indigo-700 transition-colors shrink-0">
            <Building2 className="h-5 w-5" />
          </div>
          <div className="text-left flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              {lang === "ta" ? "அலுவலர் / நிர்வாகி உள்நுழைவு" : "Officer / Administrative Login"}
            </p>
            <p className="text-[11px] text-muted-foreground truncate">
              {lang === "ta"
                ? "துறை நிர்வாகிகள், கள அலுவலர்கள், சட்டமன்ற அலுவலகம் — கடவுச்சொல் மூலம் உள்நுழைய."
                : "Department admins, field officers & constituency office — sign in with credentials."}
            </p>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────── Officer / Admin Login ─────────────────────────── */

function OfficerRoleLoginCard({ onBack }: { onBack: () => void }) {
  const { bi, lang } = useI18n();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<Role>("field_officer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!identifier.trim()) {
      setError(
        lang === "ta"
          ? "மின்னஞ்சல் அல்லது மொபைல் எண்ணை உள்ளிடவும்"
          : "Please enter email or mobile number",
      );
      return;
    }
    if (!password.trim()) {
      setError(
        lang === "ta"
          ? "கடவுச்சொல்லை உள்ளிடவும்"
          : "Please enter your password",
      );
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await login(identifier, selectedRole, password);
      setLoading(false);
      if (!res.ok) {
        setError(res.message);
        return;
      }
      const target = ROLE_DASHBOARDS[selectedRole] || "/dashboard/officer";
      navigate({ to: target });
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-white shadow-soft p-6 sm:p-8 space-y-6 relative overflow-hidden">
      <div className="relative space-y-1">
        <div className="flex items-center justify-between">
          <Badge className="bg-indigo-500/10 text-indigo-700 border-0 text-[11px] font-bold px-3 py-1 flex items-center gap-1">
            <Briefcase className="h-3 w-3" />
            {lang === "ta" ? "அலுவலர் / நிர்வாகி" : "Officer / Admin"}
          </Badge>
          <button
            type="button"
            onClick={onBack}
            className="text-[11px] text-slate-700 hover:text-slate-950 font-bold flex items-center gap-1"
          >
            ← {lang === "ta" ? "குடிமகன் உள்நுழைவு" : "Citizen Login"}
          </button>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-display tracking-tight pt-1">
          {lang === "ta"
            ? "பணியாளர் கண்ணில் உள்நுழைய"
            : "Authorized Personnel Sign In"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-800 font-medium">
          {lang === "ta"
            ? "பொறுப்பு சார்ந்த அங்கீகாரம் கொண்ட நிர்வாகிகள் மற்றும் பணியாளர்கள் மட்டும். தயவுசெய்து உங்கள் சான்றுகளை உள்ளிடவும்."
            : "Restricted to role-based personnel only. Please enter your credentials below."}
        </p>
      </div>

      {error && (
        <div className="relative flex items-start gap-2 p-3 rounded-2xl bg-destructive/10 border border-destructive/20">
          <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
          <div className="text-xs text-destructive font-semibold leading-snug">
            {error}
          </div>
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        {/* Role selector */}
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5 text-indigo-600" />
            {lang === "ta" ? "பங்கு *" : "Role *"}
          </Label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value as Role)}
            className="h-11 rounded-xl w-full pl-3 text-sm border border-slate-300 bg-white text-slate-950 font-semibold"
          >
            <option value="field_officer">
              {lang === "ta" ? "கள அலுவலர்" : "Field Officer"}
            </option>
            <option value="department_admin">
              {lang === "ta" ? "துறை நிர்வாகி" : "Department Admin"}
            </option>
            <option value="constituency_admin">
              {lang === "ta" ? "சட்டமன்ற அலுவலர்" : "Constituency Admin"}
            </option>
            <option value="super_admin">
              {lang === "ta" ? "முதன்மை நிர்வாகி" : "Super Admin"}
            </option>
          </select>
        </div>

        {/* Email / Mobile */}
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-indigo-600" />
            {lang === "ta"
              ? "மின்னஞ்சல் / மொபைல் எண் *"
              : "Email / Mobile Number *"}
          </Label>
          <Input
            type="text"
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              setError("");
            }}
            placeholder={
              lang === "ta"
                ? "9876543211 அல்லது பெயர்@example.com"
                : "9876543211 or user@example.com"
            }
            className="h-11 rounded-xl text-sm font-semibold text-slate-950 bg-white border-slate-300 placeholder:text-slate-400"
          />
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-foreground flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-indigo-600" />
            {lang === "ta" ? "கடவுச்சொல் *" : "Password *"}
          </Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="••••••••"
            className="h-11 rounded-xl text-sm"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md gap-2"
        >
          {loading ? (
            <span className="gap-1.5 flex items-center">
              <Clock className="h-4 w-4 animate-spin" />
              {lang === "ta" ? "உள்நுழைகிறது..." : "Signing in..."}
            </span>
          ) : (
            <>
              <LogIn className="h-4 w-4" />
              <span>{lang === "ta" ? "உள்நுழைவு →" : "Sign In →"}</span>
            </>
          )}
        </Button>
      </form>

      <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
        <ShieldCheck className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
        <span>
          {lang === "ta"
            ? "அதிகாரப்பூர்வ பணியாளர்கள் மட்டுமே: நிர்வாக டாஷ்போர்டுகளுக்கு பொறுப்பு சார்ந்த அங்கீகாரம் தேவை."
            : "Authorized personnel only: Administrative dashboards require role-based authorization."}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────── Login Page ─────────────────────────── */

function LoginPage() {
  const { lang } = useI18n();
  const [mode, setMode] = useState<"citizen" | "officer">("citizen");

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-10 sm:py-14">
      <div className="w-full max-w-xl space-y-6">
        <div className="text-center space-y-2.5">
          <Link
            to="/"
            className="inline-block transition-transform hover:scale-105"
          >
            <img
              src="/logo.png"
              alt="NAMMA KURAL"
              className="h-16 w-16 mx-auto object-cover rounded-full border-2 border-amber-400/50 shadow-md"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
              }}
            />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight font-display">
            {lang === "ta" ? "நம்ம குரல்" : "NAMMA KURAL"}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            {lang === "ta"
              ? "குடிமக்கள் முதன்மை டிஜிட்டல் ஆட்சி தளம்"
              : "Citizen-first Digital Governance Platform"}
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mt-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>
              {lang === "ta"
                ? "பாதுகாப்பான அணுகல்"
                : "Secure Access"}
            </span>
          </div>
        </div>

        {/* ── Top Mode Tab Switcher ── */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
          <button
            type="button"
            onClick={() => setMode("citizen")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mode === "citizen"
                ? "bg-white text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <User className="h-4 w-4" />
            <span>{lang === "ta" ? "குடிமக்கள் உள்நுழைவு" : "Citizen Sign In"}</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("officer")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mode === "officer"
                ? "bg-white text-indigo-700 shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Briefcase className="h-4 w-4" />
            <span>{lang === "ta" ? "அலுவலர் / நிர்வாகி" : "Officer / Admin Sign In"}</span>
          </button>
        </div>

        {mode === "citizen" ? (
          <CitizenMobileLoginCard
            onGoToOfficerLogin={() => setMode("officer")}
          />
        ) : (
          <OfficerRoleLoginCard onBack={() => setMode("citizen")} />
        )}

        <p className="text-center text-[11px] text-muted-foreground leading-relaxed max-w-lg mx-auto">
          {lang === "ta"
            ? "நம்ம குரல் தளத்தை பயன்படுத்துவதன் மூலம், நீங்கள் சேவை விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கைக்கு உட்படுகிறீர்கள். உங்கள் தகவல் பாதுகாப்பாக மறைக்கப்பட்டு சேமிக்கப்படுகிறது."
            : "By using NAMMA KURAL, you agree to our Terms of Service and Privacy Policy. Your mobile is stored securely and never shared publicly."}
        </p>
      </div>
    </div>
  );
}
