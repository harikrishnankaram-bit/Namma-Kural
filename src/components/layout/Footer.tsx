import { Link } from "@tanstack/react-router";
import { Phone, Mail, ExternalLink, Globe, Shield, FileText, Bell, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { CONSTITUENCY } from "@/config/aram";

export function Footer() {
  const { bi, lang } = useI18n();

  return (
    <footer 
      className="relative bg-[#1c0305] text-white mt-auto border-t border-white/10 overflow-hidden bg-cover bg-center bg-no-repeat transition-all"
      style={{ backgroundImage: "url('/image%20copy.png')" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-8 space-y-10">
        {/* ── Top Grid: Brand & Leaders, Quick Links, Constituency, Help ── */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Column 1 & 2: Brand, Title, Description, Leader Thumbnails */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-[#2a0508] border border-amber-400/50 p-1.5 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/logo.png"
                  alt="NAMMA KURAL"
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white font-display leading-tight tracking-tight">
                  Tamilaga Vettri Kazhagam
                </span>
                <span className="text-xs font-bold text-[#ffb703] uppercase tracking-wider">
                  TVK · NAMMA KURAL CONSTITUENCY
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-medium">
              {lang === "ta"
                ? "உங்கள் குரல், எங்கள் கடமை — நம்ம குரல் தொகுதிக்கான நவீன குடிமக்கள் சேவை தளம்."
                : "Your voice, our duty — the citizen-services portal for NAMMA KURAL constituency."}
            </p>
          </div>

          {/* Column 3: QUICK LINKS */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#ffb703] border-b border-[#ffb703]/30 pb-1.5 mb-3 inline-block">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {[
                { label: lang === "ta" ? "புகார் பதிவு செய்க" : "File grievance", to: "/complaints/register" },
                { label: lang === "ta" ? "நிலையை கண்காணிக்க" : "Track status", to: "/complaints/track" },
                { label: lang === "ta" ? "சமூகம் & திட்டங்கள்" : "Community", to: "/schemes" },
                { label: lang === "ta" ? "குறைதீர்ப்பு டிராக்கர்" : "Grievance tracker", to: "/complaints/track" },
              ].map(({ label, to }, idx) => (
                <li key={`${idx}-${to}`}>
                  <Link
                    to={to}
                    className="text-xs text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{label}</span>
                    <ChevronRight className="h-3 w-3 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONSTITUENCY */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#ffb703] border-b border-[#ffb703]/30 pb-1.5 mb-3 inline-block">
              CONSTITUENCY
            </h3>
            <ul className="space-y-2">
              {[
                { label: bi(CONSTITUENCY.name), to: "/development" },
                { label: lang === "ta" ? "சுயவிவரம் & முகப்பு" : "Profile & Dashboard", to: "/dashboard" },
                { label: lang === "ta" ? "வெளிப்படைத்தன்மை" : "Public Transparency", to: "/transparency" },
                { label: lang === "ta" ? "அறிவிப்புகள்" : "Announcements", to: "/notifications" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-xs text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{label}</span>
                    <ChevronRight className="h-3 w-3 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: HELP */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#ffb703] border-b border-[#ffb703]/30 pb-1.5 mb-3 inline-block">
              HELP
            </h3>
            <ul className="space-y-2">
              <li className="text-xs text-slate-300 flex items-center justify-between py-0.5">
                <span>Helpline: {CONSTITUENCY.helpline}</span>
                <ChevronRight className="h-3 w-3 text-slate-500" />
              </li>
              <li className="text-xs text-slate-300 flex items-center justify-between py-0.5">
                <Link to="/appointments" className="hover:text-white transition-colors flex items-center justify-between w-full">
                  <span>Volunteer / Meet MLA</span>
                  <ChevronRight className="h-3 w-3 text-slate-500" />
                </Link>
              </li>
              <li className="text-xs text-slate-300 flex items-center justify-between py-0.5">
                <span>Privacy Policy</span>
                <ChevronRight className="h-3 w-3 text-slate-500" />
              </li>
            </ul>
          </div>

        </div>

        {/* ── EMERGENCY NUMBERS BAR CARD (EXACT MATCH SAMPLE DESIGN) ── */}
        <div className="rounded-3xl sm:rounded-full bg-gradient-to-r from-[#180204] via-[#2a0408] to-[#180204] border border-red-500/40 p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-[0_0_30px_rgba(217,28,43,0.3)] backdrop-blur-xl relative overflow-hidden my-4">
          {/* Left: Siren + Heading */}
          <div className="flex items-center gap-3.5 shrink-0 text-left">
            <div className="relative flex items-center justify-center shrink-0">
              <div className="absolute inset-0 rounded-full bg-red-600/40 blur-md animate-pulse" />
              <span className="text-3xl sm:text-4xl relative z-10 select-none">🚨</span>
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] font-black text-[#ffb703] tracking-widest uppercase">
                EMERGENCY NUMBERS
              </p>
              <h4 className="text-base sm:text-lg font-black text-white font-display leading-tight">
                For your immediate assistance
              </h4>
              <p className="text-[11px] text-slate-400 font-medium">
                A safer constituency, a stronger community
              </p>
            </div>
          </div>

          <div className="hidden lg:block h-10 w-px bg-white/15 shrink-0" />

          {/* Center: 7 Emergency Icons & Numbers */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
            {[
              { icon: "👮", label: "POLICE", num: "100" },
              { icon: "🛣️", label: "TRAFFIC", num: "103" },
              { icon: "🔥", label: "FIRE", num: "101" },
              { icon: "🚑", label: "AMBULANCE", num: "108" },
              { icon: "🌀", label: "DISASTER", num: "1077" },
              { icon: "🧒", label: "CHILD", num: "1098" },
              { icon: "♀️", label: "WOMEN", num: "181" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 min-w-[52px]">
                <div className="h-9 w-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-sm shadow-xs">
                  {item.icon}
                </div>
                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">{item.label}</span>
                <span className="text-sm sm:text-base font-black text-white leading-none">{item.num}</span>
              </div>
            ))}
          </div>

          <div className="hidden lg:block h-10 w-px bg-white/15 shrink-0" />

          {/* Right: Big Red Call All Services Pill Button */}
          <div className="flex flex-col items-center shrink-0">
            <a
              href="tel:112"
              className="flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d91c2b] to-[#b81220] text-white hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(217,28,43,0.5)] border border-red-400/40 shrink-0 cursor-pointer"
            >
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-black shrink-0">
                📞
              </div>
              <div className="text-left leading-tight">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-100 block">
                  Call All Services
                </span>
                <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1">
                  112 <span className="text-xs">→</span>
                </span>
              </div>
            </a>
            <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase text-center mt-1.5">
              ONE NUMBER. A SAFER TOMORROW.
            </span>
          </div>
        </div>

        {/* ── Bottom Copyright Bar ── */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © 2026 Tamilaga Vettri Kazhagam - NAMMA KURAL Constituency. All rights reserved. - v1.0.677 · <strong className="text-[#ffb703] uppercase">PILOT</strong>
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
