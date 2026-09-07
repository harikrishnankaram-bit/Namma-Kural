import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Globe, LogIn, X, ChevronRight, User, LayoutDashboard, LogOut } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { useWorkflow } from "@/lib/workflow";
import { maskMobile } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { key: "nav.home", label: { en: "Home", ta: "முகப்பு" }, to: "/" },
  { key: "nav.report", label: { en: "Report Issue", ta: "புகார் பதிவு" }, to: "/complaints/register" },
  { key: "nav.mycomplaints", label: { en: "My Complaints", ta: "என் புகார்கள்" }, to: "/dashboard/citizen" },
  { key: "nav.appointment", label: { en: "Meet MLA", ta: "எம்.எல்.ஏ. சந்திப்பு" }, to: "/appointments" },
  { key: "nav.schemes", label: { en: "Schemes", ta: "திட்டங்கள்" }, to: "/schemes" },
  { key: "nav.projects", label: { en: "Development", ta: "வளர்ச்சி" }, to: "/development" },
  { key: "nav.notifications", label: { en: "Announcements", ta: "அறிவிப்புகள்" }, to: "/notifications" },
] as const;

export function Header() {
  const { lang, setLang } = useI18n();
  const { user, isAuthenticated, logout } = useAuth();
  const { citizenSession, citizenLogout } = useWorkflow();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/" || location.pathname === "";
    return location.pathname.startsWith(to);
  };

  const citizenDisplayName = citizenSession
    ? citizenSession.fullName || maskMobile(citizenSession.mobileNumber)
    : "";

  return (
    <header className="sticky top-2 sm:top-3 z-50 w-full px-2 sm:px-4 max-w-[1440px] mx-auto transition-all">
      {/* TVK Dark Capsule Header Container */}
      <div className="mx-auto flex h-14 sm:h-16 items-center justify-between gap-1.5 sm:gap-2 lg:gap-3 px-2.5 sm:px-4 lg:px-5 rounded-full bg-[#2c0508]/95 border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl max-w-full overflow-hidden relative">
        {/* Left: TVK Logo & Brand Badge */}
        <Link
          to="/"
          className="flex items-center gap-1.5 sm:gap-2 shrink-0 focus-visible:outline-none rounded-full group"
        >
          <div className="relative flex items-center gap-1.5 sm:gap-2">
            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#1b0305] border border-amber-400/40 p-1 flex items-center justify-center shrink-0 shadow-md">
              <img
                src="/logo.png"
                alt="NAMMA KURAL"
                className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xs sm:text-sm text-white font-display tracking-tight leading-none whitespace-nowrap">
                NAMMA KURAL
              </span>
              <span className="text-[8px] sm:text-[9px] font-extrabold uppercase text-amber-400 tracking-wider mt-0.5 whitespace-nowrap">
                TVK · CONSTITUENCY
              </span>
            </div>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center py-1 px-1 min-w-0 overflow-x-auto no-scrollbar scrollbar-none">
          {NAV_ITEMS.map(({ key, label, to }) => (
            <Link
              key={key}
              to={to}
              className={`px-1.5 xl:px-2.5 py-1 rounded-full text-[11px] xl:text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                isActive(to)
                  ? "text-[#ffb703] border-b-2 border-[#ffb703] bg-white/10 shadow-sm"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              {lang === "ta" ? label.ta : label.en}
            </Link>
          ))}
        </nav>

        {/* Right: Language, Red New Grievance Pill, Profile / Login */}
        <div className="flex items-center gap-1 sm:gap-1.5 xl:gap-2 shrink-0">
          {/* Language Switcher Dropdown/Pill */}
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full border border-white/20 bg-white/5 text-[10px] sm:text-xs font-bold text-slate-100 hover:bg-white/15 transition-all shrink-0"
            aria-label="Toggle language"
          >
            <Globe className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400 shrink-0" />
            <span className="whitespace-nowrap">{lang === "en" ? "English" : "தமிழ்"}</span>
          </button>

          {/* Red Pill Action Button: New Grievance (Visible on large screens) */}
          <Link
            to="/complaints/register"
            className="hidden xl:inline-flex items-center gap-1 px-2.5 xl:px-3 py-1 rounded-full bg-[#d91c2b] text-white text-[11px] xl:text-xs font-bold shadow-md hover:bg-[#b81220] transition-all border border-red-500/30 whitespace-nowrap shrink-0"
          >
            <LogIn className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
            <span>{lang === "ta" ? "புதிய புகார்" : "+ New grievance"}</span>
          </Link>

          {/* Citizen Auth or Admin Auth */}
          {citizenSession ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1.5 h-7 sm:h-8 px-2 sm:px-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-white shrink-0">
                  <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-amber-400 text-[#1b0305] text-[9px] sm:text-[10px] font-bold">
                    <User className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </div>
                  <span className="hidden sm:inline text-[11px] sm:text-xs font-bold max-w-[80px] sm:max-w-[100px] truncate text-slate-100">
                    {citizenDisplayName}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-lift bg-[#1c0305] text-white border border-white/20">
                <div className="px-3 py-2 border-b border-white/10 text-xs mb-1">
                  <p className="font-bold text-white truncate">{citizenDisplayName}</p>
                  <p className="text-[10px] text-slate-300 font-mono mt-0.5">
                    +91 {maskMobile(citizenSession.mobileNumber)}
                  </p>
                  <Badge variant="secondary" className="text-[10px] uppercase font-bold px-1.5 py-0 mt-1 bg-emerald-950 text-emerald-300 border-emerald-500/30">
                    Citizen Session
                  </Badge>
                </div>

                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 focus:bg-white/10 text-white">
                  <Link to="/dashboard/citizen" className="flex items-center gap-2">
                    <LayoutDashboard className="h-3.5 w-3.5 text-amber-400" />
                    <span>{lang === "ta" ? "குடிமக்கள் முகப்பு" : "Citizen Dashboard"}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 focus:bg-white/10 text-white">
                  <Link to="/complaints/register" className="flex items-center gap-2">
                    <User className="h-3.5 w-3.5 text-amber-400" />
                    <span>{lang === "ta" ? "புதிய புகார் பதிவு" : "Report New Complaint"}</span>
                  </Link>
                </DropdownMenuItem>

                <div className="border-t border-white/10 my-1 pt-1">
                  <DropdownMenuItem onClick={citizenLogout} className="text-red-400 font-semibold cursor-pointer text-xs rounded-lg flex items-center gap-2 hover:bg-white/10 focus:bg-white/10">
                    <LogOut className="h-3.5 w-3.5" />
                    <span>{lang === "ta" ? "வெளியேறு" : "Sign Out"}</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1.5 h-7 sm:h-8 px-2 sm:px-2.5 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 shrink-0">
                  <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-amber-400 text-[#1b0305] text-[9px] sm:text-[10px] font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <span className="hidden sm:inline text-[11px] sm:text-xs font-medium max-w-[75px] sm:max-w-[90px] truncate text-slate-100">
                    {user.name}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-lift bg-[#1c0305] text-white border border-white/20">
                <div className="px-3 py-2 border-b border-white/10 text-xs mb-1">
                  <p className="font-bold text-white">{user.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Badge variant="secondary" className="text-[10px] uppercase font-bold px-1.5 py-0 bg-amber-400/20 text-amber-300 border-amber-400/30">
                      {user.role.replace("_", " ")}
                    </Badge>
                  </div>
                </div>

                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 text-white">
                  <Link to="/dashboard/citizen">👤 Citizen Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 text-white">
                  <Link to="/dashboard/officer">🦺 Field Officer Terminal</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 text-white">
                  <Link to="/dashboard/department">🏢 Department Admin</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 text-white">
                  <Link to="/dashboard/constituency">🏛️ MLA Constituency Admin</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 text-white">
                  <Link to="/dashboard/superadmin">⚙️ Super Admin Console</Link>
                </DropdownMenuItem>

                <div className="border-t border-white/10 my-1 pt-1">
                  <DropdownMenuItem onClick={logout} className="text-red-400 font-semibold cursor-pointer text-xs rounded-lg hover:bg-white/10">
                    Sign Out
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild size="sm" className="h-7 sm:h-8 px-2.5 sm:px-3 rounded-full bg-[#d91c2b] hover:bg-[#b81220] text-white font-bold text-[11px] sm:text-xs gap-1 shadow-md border border-red-500/30 shrink-0 whitespace-nowrap">
              <Link to="/login">
                <LogIn className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                <span>{lang === "ta" ? "உள்நுழைக" : "Login"}</span>
              </Link>
            </Button>
          )}

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden shrink-0">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-white hover:bg-white/10" aria-label="Open Navigation Menu">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0 flex flex-col justify-between bg-[#1c0305] text-white border-white/20">
                <div>
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <img src="/logo.png" alt="NAMMA KURAL" className="h-8 w-auto rounded-full" />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10">
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetClose>
                  </div>

                  <div className="p-4 space-y-1">
                    {NAV_ITEMS.map(({ label, to }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          isActive(to)
                            ? "bg-amber-500/20 text-amber-300 font-semibold"
                            : "text-slate-200 hover:bg-white/10"
                        }`}
                      >
                        <span>{lang === "ta" ? label.ta : label.en}</span>
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      </Link>
                    ))}
                    {citizenSession && (
                      <Link
                        to="/dashboard/citizen"
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          isActive("/dashboard/citizen")
                            ? "bg-amber-500/20 text-amber-300"
                            : "text-amber-400 hover:bg-white/10"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <LayoutDashboard className="h-4 w-4" />
                          {lang === "ta" ? "என் புகார்கள்" : "My Complaints"}
                        </span>
                        <ChevronRight className="h-4 w-4 text-amber-400" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => setLang(lang === "en" ? "ta" : "en")}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-white/20 text-xs font-semibold text-white hover:bg-white/10"
                  >
                    <Globe className="h-4 w-4 text-amber-400" />
                    <span>Language: {lang === "en" ? "தமிழ்" : "English"}</span>
                  </button>
                  {citizenSession ? (
                    <Button variant="outline" className="w-full text-xs text-red-400 font-semibold border-white/20 hover:bg-white/10" onClick={() => { citizenLogout(); setMobileOpen(false); }}>
                      <LogOut className="h-3.5 w-3.5 mr-1.5" />
                      {lang === "ta" ? "வெளியேறு (குடிமகன்)" : "Sign Out (Citizen)"}
                    </Button>
                  ) : !isAuthenticated ? (
                    <Button asChild className="w-full text-xs bg-[#d91c2b] hover:bg-[#b81220] text-white" onClick={() => setMobileOpen(false)}>
                      <Link to="/login">
                        <LogIn className="h-3.5 w-3.5 mr-1.5" />
                        {lang === "ta" ? "உள்நுழைக" : "Login"}
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full text-xs text-red-400 border-white/20 hover:bg-white/10" onClick={() => { logout(); setMobileOpen(false); }}>
                      Logout
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
