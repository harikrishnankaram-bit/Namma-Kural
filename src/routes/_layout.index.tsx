import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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

  // Alternating Hero Leader Images (/arun.png and /vijay.png)
  const HERO_IMAGES = ["/arun.png", "/vijay.png"];
  const [heroImageIdx, setHeroImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400&h=300&fit=crop&q=80",
      name: { en: "Roads & Footpaths", ta: "சாலைகள் & நடைபாதைகள்" },
      desc: { en: "Road damage, potholes & pathways", ta: "சாலை சேதம், பீங்குகள் & பாதைகள்" },
      gradient: "from-blue-600/80 to-blue-900/90",
    },
    {
      id: "water",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop&q=80",
      name: { en: "Water Supply", ta: "குடிநீர் விநியோகம்" },
      desc: { en: "Leaks, shortage & supply issues", ta: "சோர்வு, குறைவு & விநியோக பிரச்சினைகள்" },
      gradient: "from-cyan-600/80 to-cyan-900/90",
    },
    {
      id: "waste",
      icon: Trash2,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop&q=80",
      name: { en: "Garbage Collection", ta: "குப்பை சேகரிப்பு" },
      desc: { en: "Waste collection & cleanliness", ta: "குப்பை சேகரிப்பு & சுத்தம்" },
      gradient: "from-emerald-600/80 to-emerald-900/90",
    },
    {
      id: "streetlight",
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1542332213-31f87348057f?w=400&h=300&fit=crop&q=80",
      name: { en: "Street Lights", ta: "தெருவிளக்குகள்" },
      desc: { en: "Damaged or non‑working lights", ta: "சீர்குலைவு அல்லது இயங்காத விளக்குகள்" },
      gradient: "from-amber-600/80 to-amber-900/90",
    },
    {
      id: "drainage",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1594398901394-4e34939a02eb?w=400&h=300&fit=crop&q=80",
      name: { en: "Drainage & Sewage", ta: "வடிகால் & கழிவுநீர்" },
      desc: { en: "Blocked drains & sewage issues", ta: "தடைப்பட்ட வடிகால்கள் & கழிவுநீர் பிரச்சினைகள்" },
      gradient: "from-teal-600/80 to-teal-900/90",
    },
    {
      id: "sanitation",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop&q=80",
      name: { en: "Public Toilets", ta: "பொது கழிப்பறைகள்" },
      desc: { en: "Maintenance & cleanliness", ta: "பராமரிப்பு & சுத்தம்" },
      gradient: "from-indigo-600/80 to-indigo-900/90",
    },
    {
      id: "infrastructure",
      icon: Trees,
      image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=400&h=300&fit=crop&q=80",
      name: { en: "Parks & Playgrounds", ta: "பூங்காக்கள் & மைதானங்கள்" },
      desc: { en: "Maintenance & public facilities", ta: "பராமரிப்பு & பொதுப் பயன்கள்" },
      gradient: "from-green-600/80 to-green-900/90",
    },
    {
      id: "all",
      icon: FolderOpen,
      image: "",
      name: { en: "View All Categories", ta: "அனைத்து பிரிவுகள்" },
      gradient: "from-slate-600/80 to-slate-900/90",
    },
  ];

  return (
    <div className="flex flex-col gap-8 sm:gap-12 pb-16 bg-gradient-to-b from-slate-50/50 via-white to-white min-h-screen">
      {/* ════════════════════════════════════════════════════════════════════════
          1. TVK HERO SECTION (BACKGROUND IMAGE ENDS AT STATISTICS CARD)
      ════════════════════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-[#170204] text-white border-b border-white/10">

        {/* ── Top Hero Block with Clear image.png Background ── */}
        <div
          className="relative bg-cover bg-top bg-no-repeat pt-6 pb-8 transition-all"
          style={{ backgroundImage: "url('/image.png')" }}
        >

          {/* ── Background Art: Flowing Red & Gold Silk Ribbon Waves ── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Left Ribbon Wave SVG */}
            <svg className="absolute -left-20 top-0 h-full w-[450px] opacity-30 mix-blend-screen" viewBox="0 0 400 800" fill="none">
              <path d="M-100 0C50 200 150 400 -50 800" stroke="url(#red-ribbon)" strokeWidth="120" strokeLinecap="round" filter="blur(30px)" />
              <path d="M-120 100C100 300 200 500 -20 800" stroke="url(#gold-ribbon)" strokeWidth="40" strokeLinecap="round" filter="blur(20px)" />
              <defs>
                <linearGradient id="red-ribbon" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d91c2b" />
                  <stop offset="100%" stopColor="#7a0712" />
                </linearGradient>
                <linearGradient id="gold-ribbon" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffb703" />
                  <stop offset="100%" stopColor="#d91c2b" />
                </linearGradient>
              </defs>
            </svg>

            {/* Right Ribbon Wave SVG */}
            <svg className="absolute -right-20 top-0 h-full w-[500px] opacity-25 mix-blend-screen" viewBox="0 0 500 800" fill="none">
              <path d="M600 0C350 250 250 550 500 800" stroke="url(#red-ribbon-right)" strokeWidth="140" strokeLinecap="round" filter="blur(35px)" />
              <path d="M550 100C400 300 300 600 450 800" stroke="url(#gold-ribbon-right)" strokeWidth="50" strokeLinecap="round" filter="blur(25px)" />
              <defs>
                <linearGradient id="red-ribbon-right" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d91c2b" />
                  <stop offset="100%" stopColor="#ffb703" />
                </linearGradient>
                <linearGradient id="gold-ribbon-right" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffb703" />
                  <stop offset="100%" stopColor="#7a0712" />
                </linearGradient>
              </defs>
            </svg>

            {/* Ambient Glows */}
            <div className="absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
            <div className="absolute left-1/3 bottom-0 w-[400px] h-[400px] bg-red-600/15 rounded-full blur-[90px]" />
          </div>

          <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-4 sm:pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* ── Left Column: Tag, Headline, Subtitle, 3 Action Buttons & Key Info ── */}
              <div className="lg:col-span-7 space-y-6">

                {/* Top Tag: TVK Constituency People's Platform */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 border border-amber-400/40 text-xs font-bold tracking-wide text-white shadow-lg backdrop-blur-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d91c2b] animate-pulse" />
                  <span>{lang === "ta" ? "• தவெக · திருச்செங்கோடு தொகுதி மக்கள் தளம்" : "• TVK · Tiruchengode Constituency People's Platform"}</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-display leading-[1.05] drop-shadow-lg">
                    {lang === "ta" ? (
                      <>
                        மக்களின் குரல் <br />
                        <span className="italic font-serif text-[#e61c2b] font-normal mr-2">வலுவான</span>
                        <span className="relative text-[#ffb703] inline-block">
                          திருச்செங்கோடு
                          <svg className="absolute -bottom-1.5 left-0 w-full h-3 text-[#ffb703]" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                          </svg>
                        </span>
                      </>
                    ) : (
                      <>
                        People’s Voice <br />
                        <span className="italic font-serif text-[#e61c2b] font-normal mr-2">Stronger</span>
                        <span className="relative text-[#ffb703] inline-block">
                          Tiruchengode
                          <svg className="absolute -bottom-1.5 left-0 w-full h-3 text-[#ffb703]" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                          </svg>
                        </span>
                      </>
                    )}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed max-w-xl pt-2 drop-shadow-md">
                    {lang === "ta" ? (
                      <>
                        தூய்மையான, பாதுகாப்பான மற்றும் வலுவான திருச்செங்கோடு தொகுதி — <strong className="text-amber-300 font-bold">உங்கள் குரல் மூலம்</strong>. உங்கள் புகார்களைப் பதிவு செய்யுங்கள், முன்னேற்றத்தைக் கண்காணிக்கவும், மக்கள் சார்ந்த ஆட்சியில் பங்கேற்பீர்.
                      </>
                    ) : (
                      <>
                        A cleaner, safer and stronger Tiruchengode — through <strong className="text-amber-300 font-bold">your voice</strong>. Submit your grievances, track progress, and be part of a people-driven governance.
                      </>
                    )}
                  </p>
                </div>

                {/* ── 3 Action Pill Buttons (High Contrast & Enhanced Visibility) ── */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {/* 1. Red Pill Button: New Grievance */}
                  <Link
                    to="/complaints/register"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#e61c2b] to-[#b81220] text-white text-sm font-black shadow-[0_10px_25px_rgba(230,28,43,0.5)] hover:brightness-110 transition-all transform hover:scale-102 border border-red-400/50"
                  >
                    <span className="text-base">🎙️</span>
                    <span>{lang === "ta" ? "புதிய புகார்" : "New Grievance"}</span>
                    <ArrowRight className="h-4 w-4 ml-0.5" />
                  </Link>

                  {/* 2. Dark Glass Pill Button: Track Status */}
                  <Link
                    to="/complaints/track"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black/75 border border-white/35 text-white text-sm font-bold shadow-lg hover:bg-black/90 transition-all backdrop-blur-md"
                  >
                    <Search className="h-4 w-4 text-amber-400" />
                    <span>{lang === "ta" ? "நிலையைக் கண்காணிக்க" : "Track Status"}</span>
                  </Link>

                  {/* 3. Gold Outlined Pill Button: Join as Volunteer */}
                  <Link
                    to="/schemes"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-300 text-sm font-bold shadow-lg hover:bg-amber-500/30 transition-all"
                  >
                    <HeartHandshake className="h-4 w-4 text-amber-400" />
                    <span>{lang === "ta" ? "பணியாளராக இணைய" : "Join as Volunteer"}</span>
                  </Link>
                </div>

                {/* ── Key Bullet Info Strip ── */}
                <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-8 text-xs text-white font-semibold drop-shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-sm">🏛️</span>
                    <span>{lang === "ta" ? "நேரடியாக சட்டமன்ற அலுவலகத்திற்கு" : "Direct to MLA Office"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-sm">🌐</span>
                    <span>{lang === "ta" ? "தமிழ் & ஆங்கில ஆதரவு" : "Tamil & English Support"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-400" />
                    <span>{lang === "ta" ? "நேரலை புதுப்பிப்புகள்" : "Real-time Updates"}</span>
                  </div>
                </div>

              </div>

              {/* ── Right Column: Leader Portrait + Golden TN Map & Side Typography ── */}
              <div className="lg:col-span-5 relative flex justify-center items-center pt-4 lg:pt-0">
                <div className="relative w-full max-w-lg flex items-center justify-center">

                  {/* Golden Tamil Nadu Map Vector Graphic Background */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[440px] opacity-25 pointer-events-none flex items-center justify-center">
                    <svg viewBox="0 0 300 350" fill="none" className="w-full h-full text-amber-400 drop-shadow-[0_0_35px_rgba(255,183,3,0.5)]">
                      <path d="M120 20 C160 30, 200 40, 220 70 C240 100, 270 140, 280 180 C290 220, 270 260, 230 290 C190 320, 140 340, 100 320 C60 300, 30 250, 40 200 C50 150, 80 80, 120 20 Z" fill="url(#tn-map-gradient)" opacity="0.8" />
                      <defs>
                        <linearGradient id="tn-map-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#ffb703" />
                          <stop offset="100%" stopColor="#d91c2b" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Leader Cutout Portrait Images (Alternating Cross-Fade with Subtle Outer Fade) */}
                  <div className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] h-[400px] sm:h-[460px] overflow-hidden">
                    {HERO_IMAGES.map((imgSrc, idx) => (
                      <img
                        key={imgSrc}
                        src={imgSrc}
                        alt="TVK Leader Representative"
                        className={`absolute inset-0 w-full h-full object-cover [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_98%)] drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] filter contrast-105 transition-opacity duration-1000 ease-in-out ${idx === heroImageIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                          }`}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.src = "/mla.png";
                        }}
                      />
                    ))}
                  </div>

                  {/* Right Side Vertical Typography Stack & Cursive Tagline (Clean Top-Right Positioning - No Collapsing) */}
                  <div className="hidden sm:flex flex-col justify-center items-end absolute -right-2 sm:-right-4 lg:-right-6 top-3 sm:top-5 z-20 text-right space-y-1 font-display tracking-widest pointer-events-none select-none">
                    <div className="text-[10px] sm:text-xs font-black uppercase text-amber-300 tracking-[0.24em] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                      PEOPLE
                    </div>
                    <div className="text-[10px] sm:text-xs font-black uppercase text-amber-300 tracking-[0.24em] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                      DEVELOPMENT
                    </div>
                    <div className="text-[10px] sm:text-xs font-black uppercase text-amber-300 tracking-[0.24em] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                      JUSTICE
                    </div>
                    <div className="text-[10px] sm:text-xs font-black uppercase text-amber-300 tracking-[0.24em] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                      EQUALITY
                    </div>

                    {/* Cursive Tagline */}
                    <div className="pt-2 font-serif italic text-amber-400 text-base sm:text-lg font-bold tracking-normal drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] rotate-[-4deg]">
                      Namakaga Namma Oor
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* ════════════════════════════════════════════════════════════════════════
                STATISTICS GLASS PILL CARD (EXACT SAMPLE MATCHING DESIGN - END OF BG IMAGE)
            ════════════════════════════════════════════════════════════════════════ */}
            <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-[#260408]/90 border border-amber-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">

                {/* Stat 1: Total Grievances */}
                <div className="flex items-center gap-4 pt-2 md:pt-0">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                      {lang === "ta" ? "12,458" : "12,458"}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-amber-300 mt-0.5 tracking-wide">
                      {lang === "ta" ? "மொத்த புகார்கள்" : "Total Grievances"}
                    </div>
                  </div>
                </div>

                {/* Stat 2: Pending */}
                <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                      {lang === "ta" ? "2,341" : "2,341"}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-amber-300 mt-0.5 tracking-wide">
                      {lang === "ta" ? "நிலுவையில் உள்ளவை" : "Pending"}
                    </div>
                  </div>
                </div>

                {/* Stat 3: Resolved */}
                <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                      {lang === "ta" ? "9,876" : "9,876"}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-amber-300 mt-0.5 tracking-wide">
                      {lang === "ta" ? "தீர்க்கப்பட்டவை" : "Resolved"}
                    </div>
                  </div>
                </div>

                {/* Stat 4: People Engaged */}
                <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                      {lang === "ta" ? "18,500+" : "18,500+"}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-amber-300 mt-0.5 tracking-wide">
                      {lang === "ta" ? "பயனடைந்த மக்கள்" : "People Engaged"}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>

        {/* ── Sub-Section Below Background Image: Quote Strip & Announcement Ticker ── */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pb-6 pt-4">
          {/* BOTTOM QUOTE STRIP & SCROLL INDICATOR */}
          <div className="py-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-300">

            {/* Quote Block */}
            <div className="flex items-center gap-3 max-w-md">
              <span className="text-2xl font-serif text-amber-400 font-bold leading-none">“</span>
              <div className="space-y-0.5">
                <p className="italic text-slate-200">
                  {lang === "ta"
                    ? "நல்லாட்சி என்பது ஒரு வாக்குறுதி அல்ல, ஆனால் ஒரு தொடர்ச்சியான பொறுப்பு."
                    : "Good governance is not a promise, but a continuous responsibility."}
                </p>
                <p className="text-[11px] font-bold text-amber-400">
                  – Thalapathy Vijay
                </p>
              </div>
            </div>

            {/* Center Leader Banner */}
            <div className="flex items-center gap-3 border-l md:border-r border-white/15 px-4 py-1">
              <img src="/logo.png" alt="NAMMA KURAL" className="h-9 w-9 rounded-full object-contain p-0.5 bg-[#1b0305] border border-amber-400/50" />
              <div>
                <p className="font-bold text-white text-xs">
                  {lang === "ta" ? "மக்களை மையமாகக் கொண்ட திருச்செங்கோட்டிற்காக" : "For a People-Centered Tiruchengode"}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                  TOGETHER FOR A BRIGHTER TOMORROW
                </p>
              </div>
            </div>

            {/* Mouse Scroll Indicator */}
            <div className="flex items-center gap-2 text-slate-400 font-medium">
              <div className="h-6 w-3.5 rounded-full border border-slate-400 flex justify-center pt-1">
                <span className="h-1.5 w-1 bg-amber-400 rounded-full animate-bounce" />
              </div>
              <span className="text-[11px]">{lang === "ta" ? "கீழே செல்லவும்" : "Scroll to explore"} &gt;</span>
            </div>

          </div>

          {/* Latest Announcements Ticker */}
          <div className="pt-4">
            <AnnouncementTicker />
          </div>
        </section>

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
              <p className="text-xs sm:text-sm font-bold text-slate-950">
                {lang === "ta" ? "வெளிப்படையானது" : "Transparent"}
              </p>
              <p className="text-[11px] text-slate-700 font-semibold">
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
              <p className="text-xs sm:text-sm font-bold text-slate-950">
                {lang === "ta" ? "விரைவான தீர்வு" : "Faster Resolution"}
              </p>
              <p className="text-[11px] text-slate-700 font-semibold">
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
              <p className="text-xs sm:text-sm font-bold text-slate-950">
                {lang === "ta" ? "குடிமக்கள் முதன்மை" : "Citizen First"}
              </p>
              <p className="text-[11px] text-slate-700 font-semibold">
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
              <p className="text-xs sm:text-sm font-bold text-slate-950">
                {lang === "ta" ? "பொறுப்புடைமை" : "Accountable"}
              </p>
              <p className="text-[11px] text-slate-700 font-semibold">
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
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="uppercase text-xs font-medium tracking-wider">
                {lang === "ta" ? "அறிக்கை" : "REPORT AN ISSUE"}
              </Badge>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight font-display mt-1">
              {lang === "ta" ? "பொதுவான புகார் பிரிவுகள்" : "Common Categories"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
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

        {/* 7 Categories Grid – Image Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {COMMON_CATEGORIES.filter(cat => cat.id !== "all").map(({ id, icon: Icon, image, name, desc, gradient }) => {
            const targetUrl = `/complaints/register?category=${id}`;
            return (
              <Link
                key={id}
                to={targetUrl}
                aria-label={`${lang === "ta" ? name.ta : name.en} – ${lang === "ta" ? desc?.ta : desc?.en}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 aspect-[4/3]"
              >
                {/* Background Image */}
                <img
                  src={image}
                  alt={lang === "ta" ? name.ta : name.en}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/20">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm">
                    {lang === "ta" ? name.ta : name.en}
                  </span>
                  {desc && (
                    <span className="text-[11px] sm:text-xs text-white/80 mt-0.5 line-clamp-2 leading-relaxed">
                      {lang === "ta" ? desc.ta : desc.en}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-4 text-center">
          <Link
            to="/complaints/register"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            {lang === "ta" ? "அனைத்து பிரிவுகள் →" : "View All Issues →"}
          </Link>
        </div>
      </section>
    </div>
  );
}
