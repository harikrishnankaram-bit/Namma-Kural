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
  { key: "nav.contact", label: { en: "Contact Us", ta: "தொடர்புக்கு" }, to: "/appointments" },
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
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-white/95 backdrop-blur-md transition-all shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex h-18 sm:h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Left: ARAM Official Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1 group"
        >
          <div className="relative flex items-center">
            <img
              src="/aram.png"
              alt="ARAM"
              className="h-12 sm:h-14 w-auto object-contain max-w-[180px] drop-shadow-sm transition-transform group-hover:scale-102"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div className="hidden items-center gap-1.5 font-black text-2xl text-primary font-display tracking-tight">
              ARAM
            </div>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive(to)
                  ? "text-primary bg-primary/10 font-semibold"
                  : "text-foreground/75 hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {lang === "ta" ? label.ta : label.en}
            </Link>
          ))}
          {citizenSession && (
            <Link
              to="/dashboard/citizen"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                isActive("/dashboard/citizen")
                  ? "text-primary bg-primary/10 font-semibold"
                  : "text-primary hover:bg-primary/5 font-semibold"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>{lang === "ta" ? "என் புகார்கள்" : "My Complaints"}</span>
            </Link>
          )}
        </nav>

        {/* Right: Language switch & Login */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle: தமிழ் | English */}
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-white text-xs font-semibold text-foreground hover:bg-muted/60 transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5 text-primary" />
            <span>{lang === "en" ? "தமிழ்" : "English"}</span>
          </button>

          {/* Citizen Auth or Admin Auth */}
          {citizenSession ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 h-9 px-3 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    <User className="h-3.5 w-3.5" />
                  </div>
                  <span className="hidden sm:inline text-xs font-bold text-foreground max-w-[120px] truncate">
                    {citizenDisplayName}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-lift">
                <div className="px-3 py-2 border-b border-border text-xs mb-1">
                  <p className="font-bold text-foreground truncate">{citizenDisplayName}</p>
                  <p className="text-[10px] text-muted-foreground font-mono mt-0.5">
                    +91 {maskMobile(citizenSession.mobileNumber)}
                  </p>
                  <Badge variant="secondary" className="text-[10px] uppercase font-bold px-1.5 py-0 mt-1 bg-emerald-50 text-emerald-700 border-emerald-200">
                    Citizen Session
                  </Badge>
                </div>

                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg">
                  <Link to="/dashboard/citizen" className="flex items-center gap-2">
                    <LayoutDashboard className="h-3.5 w-3.5 text-primary" />
                    <span>{lang === "ta" ? "குடிமக்கள் முகப்பு" : "Citizen Dashboard"}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg">
                  <Link to="/complaints/register" className="flex items-center gap-2">
                    <User className="h-3.5 w-3.5 text-primary" />
                    <span>{lang === "ta" ? "புதிய புகார் பதிவு" : "Report New Complaint"}</span>
                  </Link>
                </DropdownMenuItem>

                <div className="border-t border-border/80 my-1 pt-1">
                  <DropdownMenuItem onClick={citizenLogout} className="text-destructive font-semibold cursor-pointer text-xs rounded-lg flex items-center gap-2">
                    <LogOut className="h-3.5 w-3.5" />
                    <span>{lang === "ta" ? "வெளியேறு" : "Sign Out"}</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 h-9 px-3 rounded-lg border border-border/60">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <span className="hidden sm:inline text-xs font-medium max-w-[100px] truncate">
                    {user.name}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-lift">
                <div className="px-3 py-2 border-b border-border text-xs mb-1">
                  <p className="font-bold text-foreground">{user.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Badge variant="secondary" className="text-[10px] uppercase font-bold px-1.5 py-0">
                      {user.role.replace("_", " ")}
                    </Badge>
                  </div>
                </div>

                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg">
                  <Link to="/dashboard/citizen">👤 Citizen Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg">
                  <Link to="/dashboard/officer">🦺 Field Officer Terminal</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg">
                  <Link to="/dashboard/department">🏢 Department Admin</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg">
                  <Link to="/dashboard/constituency">🏛️ MLA Constituency Admin</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-xs font-semibold rounded-lg">
                  <Link to="/dashboard/superadmin">⚙️ Super Admin Console</Link>
                </DropdownMenuItem>

                <div className="border-t border-border/80 my-1 pt-1">
                  <DropdownMenuItem onClick={logout} className="text-destructive font-semibold cursor-pointer text-xs rounded-lg">
                    Sign Out
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild size="sm" className="h-9 px-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs gap-1.5 shadow-sm">
              <Link to="/login">
                <LogIn className="h-3.5 w-3.5" />
                <span>{lang === "ta" ? "உள்நுழைக" : "Login"}</span>
              </Link>
            </Button>
          )}

          {/* Mobile Menu Hamburger */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg" aria-label="Open Navigation Menu">
                  <Menu className="h-5 w-5 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <img src="/aram.png" alt="ARAM" className="h-8 w-auto" />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
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
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <span>{lang === "ta" ? label.ta : label.en}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    ))}
                    {citizenSession && (
                      <Link
                        to="/dashboard/citizen"
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          isActive("/dashboard/citizen")
                            ? "bg-primary/10 text-primary"
                            : "text-primary hover:bg-primary/5"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <LayoutDashboard className="h-4 w-4" />
                          {lang === "ta" ? "என் புகார்கள்" : "My Complaints"}
                        </span>
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-4 border-t border-border space-y-3">
                  <button
                    onClick={() => setLang(lang === "en" ? "ta" : "en")}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-border text-xs font-semibold"
                  >
                    <Globe className="h-4 w-4 text-primary" />
                    <span>Language: {lang === "en" ? "தமிழ்" : "English"}</span>
                  </button>
                  {citizenSession ? (
                    <Button variant="outline" className="w-full text-xs text-destructive font-semibold" onClick={() => { citizenLogout(); setMobileOpen(false); }}>
                      <LogOut className="h-3.5 w-3.5 mr-1.5" />
                      {lang === "ta" ? "வெளியேறு (குடிமகன்)" : "Sign Out (Citizen)"}
                    </Button>
                  ) : !isAuthenticated ? (
                    <Button asChild className="w-full text-xs" onClick={() => setMobileOpen(false)}>
                      <Link to="/login">
                        <LogIn className="h-3.5 w-3.5 mr-1.5" />
                        {lang === "ta" ? "உள்நுழைக" : "Login"}
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full text-xs text-destructive" onClick={() => { logout(); setMobileOpen(false); }}>
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
