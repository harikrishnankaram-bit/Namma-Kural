import { Link } from "@tanstack/react-router";
import { Phone, Mail, ExternalLink, Globe, Shield, FileText } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CONSTITUENCY } from "@/config/aram";

export function Footer() {
  const { bi, lang, setLang } = useI18n();

  return (
    <footer className="border-t border-border bg-slate-50/70 text-foreground mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/aram.png"
                alt="ARAM"
                className="h-12 sm:h-14 w-auto object-contain max-w-[170px]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />
              <span className="font-bold text-xl text-primary font-display">ARAM</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              {lang === "ta"
                ? "குடிமக்களை நேரடியாக நிர்வாகத்துடன் இணைக்கும் நவீன தொகுதி மேலாண்மை தளம்."
                : "Citizen-first constituency digital governance portal connecting residents with constituency services and administrative departments."}
            </p>
            <div className="text-xs font-semibold text-foreground">
              {bi(CONSTITUENCY.name)} · {bi(CONSTITUENCY.district)}, {bi(CONSTITUENCY.state)}
            </div>

            {/* Language Switch */}
            <div className="pt-2">
              <button
                onClick={() => setLang(lang === "en" ? "ta" : "en")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-white text-xs font-semibold hover:bg-muted transition-colors"
              >
                <Globe className="h-3.5 w-3.5 text-primary" />
                <span>{lang === "en" ? "தமிழில் பார்க்க" : "Switch to English"}</span>
              </button>
            </div>
          </div>

          {/* Citizen Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
              {lang === "ta" ? "குடிமக்கள் சேவைகள்" : "Citizen Services"}
            </h3>
            <ul className="space-y-2">
              {[
                { label: lang === "ta" ? "புகார் பதிவு செய்க" : "Report a Complaint", to: "/complaints/register" },
                { label: lang === "ta" ? "புகாரை கண்காணிக்க" : "Track Complaint", to: "/complaints/track" },
                { label: lang === "ta" ? "எம்.எல்.ஏ.வை சந்திக்க" : "Meet Your MLA", to: "/appointments" },
                { label: lang === "ta" ? "அரசு நலத்திட்டங்கள்" : "Government Schemes", to: "/schemes" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information & Updates */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
              {lang === "ta" ? "தகவல் மையம்" : "Information"}
            </h3>
            <ul className="space-y-2">
              {[
                { label: lang === "ta" ? "வளர்ச்சி திட்டங்கள்" : "Development Works", to: "/development" },
                { label: lang === "ta" ? "வெளிப்படைத்தன்மை" : "Public Transparency", to: "/transparency" },
                { label: lang === "ta" ? "அறிவிப்புகள்" : "Notifications & Alerts", to: "/notifications" },
                { label: lang === "ta" ? "உள்நுழைவு" : "Official Login", to: "/login" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpline & Emergency Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
              {lang === "ta" ? "அவசர தொடர்பு" : "Emergency & Contact"}
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <Phone className="h-3.5 w-3.5 shrink-0 text-red-600" />
                <a href={`tel:${CONSTITUENCY.helpline}`} className="font-semibold text-foreground hover:text-primary transition-colors">
                  {CONSTITUENCY.helpline} (24/7)
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                <a href={`mailto:${CONSTITUENCY.officeEmail}`} className="hover:text-primary transition-colors truncate">
                  {CONSTITUENCY.officeEmail}
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-primary" />
                <a
                  href="https://www.tn.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Tamil Nadu Portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Demo Disclaimer */}
        <div className="mt-10 pt-6 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © 2026 ARAM — {bi(CONSTITUENCY.name)}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Accessibility</span>
            <span>•</span>
            <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              Demo Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
