import { useState } from "react";
import { MapPin, CheckCircle2, Clock, AlertCircle, Building2, Eye, Filter, ChevronRight, X, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { WARDS, CONSTITUENCY, CATEGORIES, DEPARTMENTS } from "@/config/aram";
import type { Ward } from "@/config/aram";
import { MOCK_COMPLAINTS, MOCK_PROJECTS } from "@/data/mock";
import type { Complaint } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PIN_COLORS: Record<string, { bg: string; text: string; dot: string; label: string }> = {
  closed: { bg: "bg-emerald-100", text: "text-emerald-800", dot: "bg-emerald-500", label: "Resolved" },
  completed: { bg: "bg-emerald-100", text: "text-emerald-800", dot: "bg-emerald-500", label: "Completed" },
  in_progress: { bg: "bg-amber-100", text: "text-amber-800", dot: "bg-amber-500", label: "In Progress" },
  new: { bg: "bg-rose-100", text: "text-rose-800", dot: "bg-rose-500", label: "Newly Registered" },
  assigned: { bg: "bg-blue-100", text: "text-blue-800", dot: "bg-blue-500", label: "Assigned" },
  verified: { bg: "bg-blue-100", text: "text-blue-800", dot: "bg-blue-500", label: "Verified" },
  pending_verification: { bg: "bg-slate-100", text: "text-slate-800", dot: "bg-slate-500", label: "Pending" },
  citizen_verification: { bg: "bg-violet-100", text: "text-violet-800", dot: "bg-violet-500", label: "Citizen Verification" },
};

export function ConstituencyMap({ isCompact = false }: { isCompact?: boolean }) {
  const { t, bi, lang } = useI18n();
  const [selectedWardId, setSelectedWardId] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);

  // Filter complaints based on Ward and Status
  const filteredComplaints = MOCK_COMPLAINTS.filter((c) => {
    if (selectedWardId !== "all" && c.wardId !== selectedWardId) return false;
    if (statusFilter === "resolved" && !["closed", "completed"].includes(c.status)) return false;
    if (statusFilter === "in_progress" && !["in_progress", "assigned", "verified"].includes(c.status)) return false;
    if (statusFilter === "new" && c.status !== "new") return false;
    return true;
  });

  const selectedWard = WARDS.find((w) => w.id === selectedWardId);

  // Current center coordinates
  const currentCenter = selectedWard
    ? selectedWard.center
    : CONSTITUENCY.center;

  // Google Maps Embed URL centered strictly on Thousand Lights Constituency
  const googleMapUrl = `https://maps.google.com/maps?q=${currentCenter.lat},${currentCenter.lng}&z=14&output=embed`;

  // Ward statistics
  const wardComplaints = selectedWardId === "all"
    ? MOCK_COMPLAINTS
    : MOCK_COMPLAINTS.filter((c) => c.wardId === selectedWardId);

  const resolvedCount = wardComplaints.filter((c) => ["closed", "completed"].includes(c.status)).length;
  const inProgressCount = wardComplaints.filter((c) => ["in_progress", "assigned", "verified"].includes(c.status)).length;
  const newCount = wardComplaints.filter((c) => c.status === "new").length;

  return (
    <div className="w-full space-y-4">
      {/* Header with Title & Ward Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{lang === "ta" ? "உங்கள் பகுதியில் என்ன நடக்கிறது?" : "What's Happening Around You?"}</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            {lang === "ta"
              ? "திருச்செங்கோடு தொகுதியின் நேரடி வரைபடம் மற்றும் புகார்கள்"
              : "Live interactive map of Tiruchengode Constituency and civic issues"}
          </p>
        </div>

        {/* Ward Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
            {lang === "ta" ? "வார்டு தேர்வு:" : "Select Ward:"}
          </label>
          <select
            value={selectedWardId}
            onChange={(e) => {
              setSelectedWardId(e.target.value);
              setSelectedComplaint(null);
            }}
            className="h-9 rounded-xl border border-border bg-white px-3 py-1 text-xs font-medium text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">
              {lang === "ta" ? "அனைத்து வார்டுகள் (All Wards)" : "All Wards (Constituency Wide)"}
            </option>
            {WARDS.map((w) => (
              <option key={w.id} value={w.id}>
                Ward {w.number} — {bi(w.name)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Ward Status Bar */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 bg-muted/40 p-3 rounded-2xl border border-border/70 text-xs">
        <div className="flex flex-col">
          <span className="text-muted-foreground">{lang === "ta" ? "தேர்ந்தெடுக்கப்பட்ட பகுதி" : "Selected Area"}</span>
          <span className="font-bold text-foreground truncate">
            {selectedWard ? `Ward ${selectedWard.number} (${bi(selectedWard.name)})` : bi(CONSTITUENCY.name)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
          <div>
            <span className="font-bold text-foreground">{resolvedCount}</span>
            <span className="text-muted-foreground ml-1">{lang === "ta" ? "தீர்க்கப்பட்டது" : "Resolved"}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shrink-0" />
          <div>
            <span className="font-bold text-foreground">{inProgressCount}</span>
            <span className="text-muted-foreground ml-1">{lang === "ta" ? "நடைபெறுகிறது" : "In Progress"}</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0" />
          <div>
            <span className="font-bold text-foreground">{newCount}</span>
            <span className="text-muted-foreground ml-1">{lang === "ta" ? "புதியவை" : "New"}</span>
          </div>
        </div>
      </div>

      {/* Main Map & Interactive Panel Container */}
      <div className="relative rounded-3xl border border-border overflow-hidden bg-white shadow-soft">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[380px] lg:min-h-[460px]">
          {/* Left / Top 2 Cols: Real Google Map */}
          <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-[460px] bg-slate-100">
            <iframe
              title="Tiruchengode Constituency Map"
              src={googleMapUrl}
              className="absolute inset-0 w-full h-full border-0 filter saturate-[0.95]"
              loading="lazy"
              allowFullScreen
            />

            {/* Map Legend Overlay */}
            <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-border/80 shadow-md text-[11px] space-y-1">
              <div className="font-bold text-foreground text-[10px] uppercase tracking-wider mb-1">
                {lang === "ta" ? "புகார் குறிகாட்டிகள்" : "Issue Markers"}
              </div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Green = Resolved</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500" /> Yellow = In Progress</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-500" /> Red = Newly Registered</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-blue-500" /> Blue = Assigned</div>
            </div>

            {/* External Google Map button */}
            <a
              href={`https://maps.google.com/?q=${currentCenter.lat},${currentCenter.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 left-3 z-10 bg-white/90 hover:bg-white text-foreground text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-border shadow-sm flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="h-3 w-3 text-primary" />
              <span>{lang === "ta" ? "பெரிய வரைபடம்" : "Open in Google Maps"}</span>
            </a>
          </div>

          {/* Right Col: Issue Pins & Inspector */}
          <div className="p-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border bg-slate-50/50">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {lang === "ta" ? "அருகிலுள்ள புகார்கள்" : "Constituency Issues"} ({filteredComplaints.length})
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {selectedWard ? `Ward ${selectedWard.number}` : "All"}
                </span>
              </div>

              {/* Complaint List */}
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {filteredComplaints.slice(0, 5).map((c) => {
                  const cat = CATEGORIES.find((x) => x.id === c.categoryId);
                  const pin = PIN_COLORS[c.status] ?? {
                    bg: "bg-slate-100",
                    text: "text-slate-800",
                    dot: "bg-slate-500",
                    label: "Issue",
                  };
                  const isSelected = selectedComplaint?.id === c.id;

                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedComplaint(c)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-white border-primary shadow-sm ring-1 ring-primary"
                          : "bg-white border-border/70 hover:border-primary/40 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1.5 mb-1">
                        <span className="text-[11px] font-mono font-semibold text-primary">
                          {c.id}
                        </span>
                        <Badge className={`text-[9px] px-1.5 py-0 border-0 ${pin.bg} ${pin.text}`}>
                          {pin.label}
                        </Badge>
                      </div>
                      <p className="text-xs font-semibold text-foreground line-clamp-1">
                        {cat ? bi(cat.name) : c.categoryId}
                      </p>
                      <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                        {c.address}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Complaint Detail Popup (Strictly no personal citizen data) */}
            {selectedComplaint && (
              <div className="mt-3 p-3 bg-white rounded-2xl border border-primary/30 shadow-sm relative space-y-2">
                <button
                  onClick={() => setSelectedComplaint(null)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                  aria-label="Close details"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
                <div className="text-xs font-bold text-primary font-mono">
                  {selectedComplaint.id}
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  <div>
                    <span className="text-muted-foreground">Category:</span>{" "}
                    <span className="font-semibold text-foreground">
                      {CATEGORIES.find((x) => x.id === selectedComplaint.categoryId)?.name.en || selectedComplaint.categoryId}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>{" "}
                    <span className="font-semibold capitalize text-foreground">
                      {selectedComplaint.status.replace("_", " ")}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Ward:</span>{" "}
                    <span className="font-semibold text-foreground">
                      {WARDS.find((w) => w.id === selectedComplaint.wardId)?.number || "—"}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Date:</span>{" "}
                    <span className="font-semibold text-foreground">
                      {selectedComplaint.createdAt}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-muted-foreground">Department:</span>{" "}
                    <span className="font-semibold text-foreground">
                      {DEPARTMENTS.find((d) => d.id === selectedComplaint.departmentId)?.name.en || "Public Works"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
