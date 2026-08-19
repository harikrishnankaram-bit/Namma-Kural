import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Search,
  Calendar,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Scale,
  Sparkles,
  Droplets,
  Trash2,
  Lightbulb,
  Waves,
  Building2,
  Trees,
  CheckCircle2,
  Clock,
  AlertCircle,
  FolderOpen,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useWorkflow } from "@/lib/workflow";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnnouncementTicker } from "@/components/home/AnnouncementTicker";

export const Route = createFileRoute("/_layout/")({
  component: HomePage,
});

function HomePage() {
  const { lang } = useI18n();
  const { stats, complaints } = useWorkflow();

  // Compute live database grievance stats (defaults cleanly to 0 if empty)
  const newlyRegistered =
    stats?.newComplaints ??
    complaints.filter((c) => ["new", "pending_verification"].includes(c.status)).length;
  const underReview =
    stats?.assignedComplaints ??
    complaints.filter((c) => ["verified", "assigned"].includes(c.status)).length;
  const inProgress =
    stats?.inProgressComplaints ??
    complaints.filter((c) => ["in_progress", "started"].includes(c.status)).length;
  const resolved =
    stats?.resolvedComplaints ??
    complaints.filter((c) => ["completed", "closed"].includes(c.status)).length;

  // ── Common Categories Configuration ──
  const COMMON_CATEGORIES = [
    {
      id: "road",
      icon: Building2,
      name: { en: "Roads & Footpaths", ta: "சாலைகள் & நடைபாதைகள்" },
      color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    },
    {
      id: "water",
      icon: Droplets,
      name: { en: "Water Supply", ta: "குடிநீர் விநியோகம்" },
      color: "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100",
    },
    {
      id: "waste",
      icon: Trash2,
      name: { en: "Garbage Collection", ta: "குப்பை சேகரிப்பு" },
      color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    },
    {
      id: "streetlight",
      icon: Lightbulb,
      name: { en: "Street Lights", ta: "தெருவிளக்குகள்" },
      color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    },
    {
      id: "drainage",
      icon: Waves,
      name: { en: "Drainage & Sewage", ta: "வடிகால் & கழிவுநீர்" },
      color: "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100",
    },
    {
      id: "sanitation",
      icon: Sparkles,
      name: { en: "Public Toilets", ta: "பொது கழிப்பறைகள்" },
      color: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100",
    },
    {
      id: "infrastructure",
      icon: Trees,
      name: { en: "Parks & Playgrounds", ta: "பூங்காக்கள் & மைதானங்கள்" },
      color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
    },
    {
      id: "all",
      icon: FolderOpen,
      name: { en: "View All Categories", ta: "அனைத்து பிரிவுகள்" },
      color: "bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200",
    },
  ];

  return (
    <div className="flex flex-col gap-8 sm:gap-12 pb-16 bg-gradient-to-b from-slate-50/50 via-white to-white min-h-screen">
      {/* ════════════════════════════════════════════════════════════════════════
          1. HERO SECTION WITH CIVIC BACKGROUND & SOFT OVERLAY
      ════════════════════════════════════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden border-b border-border/60 bg-slate-900 min-h-[480px]"
      >
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: "url('/background.png')",
          }}
        />

        {/* Subtle lightweight gradient overlay - lets the image pop while ensuring readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/55 to-slate-900/20 backdrop-blur-[0.5px] pointer-events-none" />

        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-16 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* ── Left Column: Headline, Subtitle, and 3 Action Cards ── */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-primary/30 text-primary text-xs font-bold tracking-wide shadow-xs">
                <ShieldCheck className="h-4 w-4" />
                <span>ARAM Constituency</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.12] font-display">
                  {lang === "ta" ? (
                    <>
                      உங்கள் குரல். <br />
                      எங்கள் பொறுப்பு. <br />
                      <span className="text-primary bg-gradient-to-r from-primary via-emerald-700 to-teal-600 bg-clip-text text-transparent">
                        இணைந்து வெல்வோம்.
                      </span>
                    </>
                  ) : (
                    <>
                      Your Voice. <br />
                      Our Responsibility. <br />
                      <span className="text-primary bg-gradient-to-r from-primary via-emerald-700 to-teal-600 bg-clip-text text-transparent">
                        Stronger Together.
                      </span>
                    </>
                  )}
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-xl pt-2">
                  {lang === "ta"
                    ? "புகார்களை பதிவு செய்யுங்கள், நிலையை கண்காணியுங்கள் மற்றும் அனைவருக்கும் சிறந்த, தூய்மையான மற்றும் பாதுகாப்பான தொகுதியை உருவாக்க உதவுங்கள்."
                    : "Report issues, track your complaints, and help us build a better, cleaner and safer constituency for everyone."}
                </p>
              </div>

              {/* ── 3 Main Citizen Action Cards ── */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                
                {/* 1. Report New Issue (Primary Action Card) */}
                <Link
                  to="/complaints/register"
                  className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/95 transition-all transform hover:-translate-y-0.5 border border-primary/20"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center text-white shadow-inner">
                      <FileText className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/80 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-black leading-snug">
                      {lang === "ta" ? "புதிய புகார் பதிவு" : "Report New Issue"}
                    </h2>
                    <p className="text-[11px] text-white/80 font-normal mt-1 leading-snug">
                      {lang === "ta"
                        ? "புகாரை பதிவு செய்து மாற்றத்தை ஏற்படுத்துங்கள்."
                        : "Raise a grievance and make a difference."}
                    </p>
                  </div>
                </Link>

                {/* 2. Track My Complaints */}
                <Link
                  to="/complaints/track"
                  className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white text-foreground shadow-sm hover:shadow-md border border-border/90 hover:border-primary/40 transition-all transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                      <Search className="h-5 w-5" />
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {lang === "ta" ? "புகாரை கண்காணிக்க" : "Track My Complaints"}
                    </h2>
                    <p className="text-[11px] text-muted-foreground font-normal mt-1 leading-snug">
                      {lang === "ta"
                        ? "சமர்ப்பிக்கப்பட்ட புகாரின் நேரடி நிலையை அறிய."
                        : "Check the status of your submitted complaints."}
                    </p>
                  </div>
                </Link>

                {/* 3. Meet MLA Appointment */}
                <Link
                  to="/appointments"
                  className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white text-foreground shadow-sm hover:shadow-md border border-border/90 hover:border-primary/40 transition-all transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {lang === "ta" ? "எம்.எல்.ஏ. சந்திப்பு" : "Meet MLA Appointment"}
                    </h2>
                    <p className="text-[11px] text-muted-foreground font-normal mt-1 leading-snug">
                      {lang === "ta"
                        ? "உங்கள் எம்.எல்.ஏ.வை சந்திக்க நேரம் பதிவு செய்க."
                        : "Book an appointment to meet your MLA."}
                    </p>
                  </div>
                </Link>

              </div>
            </div>

            {/* ── Right Column: Live Grievance Status (Floating Card) ── */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-border/80 bg-white/95 backdrop-blur-md p-6 sm:p-7 shadow-xl space-y-5">
                
                {/* Live Card Header */}
                <div className="flex items-center justify-between border-b border-border/60 pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600" />
                    </span>
                    <h2 className="text-sm sm:text-base font-black text-foreground tracking-tight font-display">
                      {lang === "ta" ? "நேரடி குறைதீர்வு நிலை" : "Live Grievance Status"}
                    </h2>
                  </div>
                  <Badge variant="outline" className="text-[10px] font-bold text-emerald-800 bg-emerald-50/80 border-emerald-200">
                    {lang === "ta" ? "நிகழ்நேர தரவு" : "Live Database"}
                  </Badge>
                </div>

                {/* 4 Grievance Metrics from Live Database */}
                <div className="grid grid-cols-2 gap-3.5">
                  
                  {/* Metric 1: Newly Registered */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        {lang === "ta" ? "புதிய புகார்கள்" : "Newly Registered"}
                      </span>
                      <AlertCircle className="h-3.5 w-3.5 text-slate-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                      {newlyRegistered}
                    </div>
                  </div>

                  {/* Metric 2: Under Review */}
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-1">
                    <div className="flex items-center justify-between text-blue-700">
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        {lang === "ta" ? "பரிசீலனையில்" : "Under Review"}
                      </span>
                      <Search className="h-3.5 w-3.5 text-blue-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-blue-900 font-display">
                      {underReview}
                    </div>
                  </div>

                  {/* Metric 3: In Progress */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                    <div className="flex items-center justify-between text-amber-700">
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        {lang === "ta" ? "செயல்பாட்டில்" : "In Progress"}
                      </span>
                      <Clock className="h-3.5 w-3.5 text-amber-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-900 font-display">
                      {inProgress}
                    </div>
                  </div>

                  {/* Metric 4: Resolved */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-1">
                    <div className="flex items-center justify-between text-emerald-700">
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        {lang === "ta" ? "தீர்க்கப்பட்டது" : "Resolved"}
                      </span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-900 font-display">
                      {resolved}
                    </div>
                  </div>

                </div>

                {/* Card CTA: View All Status */}
                <div className="pt-1">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-11 rounded-xl text-xs font-bold border-border/80 text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 justify-between px-4 transition-all"
                  >
                    <Link to="/transparency">
                      <span>{lang === "ta" ? "அனைத்து நிலைகளையும் காண்க" : "View All Status"}</span>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </Link>
                  </Button>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── Latest Announcements Ticker Inside Hero Footprint ── */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pb-6">
          <AnnouncementTicker />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════════
          2. CITIZEN TRUST INDICATORS (4 Simple Items)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white border border-border/70 shadow-sm">
          
          {/* Trust 1: Transparent */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-foreground">
                {lang === "ta" ? "வெளிப்படையானது" : "Transparent"}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {lang === "ta" ? "நிகழ்நேர தகவல்கள்" : "Real-time updates"}
              </p>
            </div>
          </div>

          {/* Trust 2: Faster Resolution */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-foreground">
                {lang === "ta" ? "விரைவான தீர்வு" : "Faster Resolution"}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {lang === "ta" ? "துரித நடவடிக்கை" : "Timely action on issues"}
              </p>
            </div>
          </div>

          {/* Trust 3: Citizen First */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-foreground">
                {lang === "ta" ? "குடிமக்கள் முதன்மை" : "Citizen First"}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {lang === "ta" ? "உங்கள் குரல் முக்கியம்" : "Your voice matters"}
              </p>
            </div>
          </div>

          {/* Trust 4: Accountable */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-700 flex items-center justify-center shrink-0">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-foreground">
                {lang === "ta" ? "பொறுப்புடைமை" : "Accountable"}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {lang === "ta" ? "நேர்மையான ஆட்சி" : "Responsible governance"}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          3. COMMON CATEGORIES (Horizontal & Clickable)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 space-y-4 sm:space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight font-display">
              {lang === "ta" ? "பொதுவான புகார் பிரிவுகள்" : "Common Categories"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {lang === "ta"
                ? "உங்கள் புகாரை நேரடியாக பதிவு செய்ய விரும்பிய பிரிவை தேர்வு செய்க"
                : "Select a category to report your issue directly"}
            </p>
          </div>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-xs font-bold text-primary hover:text-primary gap-1 hidden sm:flex"
          >
            <Link to="/complaints/register">
              <span>{lang === "ta" ? "அனைத்து பிரிவுகள் →" : "View All →"}</span>
            </Link>
          </Button>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
          {COMMON_CATEGORIES.map(({ id, icon: Icon, name, color }) => {
            const targetUrl = id === "all" ? "/complaints/register" : `/complaints/register?category=${id}`;
            return (
              <Link
                key={id}
                to={targetUrl}
                className={`group flex flex-col items-center justify-center text-center p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md transform hover:-translate-y-1 ${color}`}
              >
                <div className="h-11 w-11 rounded-xl bg-white/90 shadow-xs flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-foreground leading-tight line-clamp-2">
                  {lang === "ta" ? name.ta : name.en}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
