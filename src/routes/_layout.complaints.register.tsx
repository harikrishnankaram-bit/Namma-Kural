import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Camera,
  Image as ImageIcon,
  Video,
  Mic,
  MicOff,
  Cpu,
  AlertTriangle,
  AlertCircle,
  Download,
  Trash2,
  Search,
  Home,
  Check,
  ClipboardList,
  TrendingUp,
  Clock,
  Eye,
  ChevronRight,
  FileText,
  Pencil,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { useWorkflow } from "@/lib/workflow";
import { CATEGORIES, DEPARTMENTS, WARDS, CONSTITUENCY } from "@/config/aram";
import type { Ward, Department } from "@/config/aram";
import { validateIndianMobile, maskMobile } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useVoiceGuidance } from "@/hooks/useVoiceGuidance";

export const Route = createFileRoute("/_layout/complaints/register")({
  component: ComplaintRegister,
});

function generateId() {
  const num = Math.floor(Math.random() * 900000) + 100000;
  return `ARAM-2026-${String(num).padStart(6, "0")}`;
}

const CATEGORY_ICONS: Record<string, string> = {
  road: "🛣️",
  streetlight: "💡",
  water: "💧",
  drainage: "🌊",
  waste: "🗑️",
  electricity: "⚡",
  publichealth: "🏥",
  infrastructure: "🏗️",
  other: "📌",
};

interface MediaFile {
  id: string;
  name: string;
  url: string;
  type: "image" | "video";
}

interface FormErrors {
  category?: string | undefined;
  description?: string | undefined;
  location?: string | undefined;
  mobile?: string | undefined;
}

const DEFAULT_WARD: Ward = {
  id: "w-110",
  number: 110,
  name: { en: "Thousand Lights", ta: "ஆயிரம் விளக்கு" },
  center: { lat: 13.0604, lng: 80.2496 },
  population: 46980,
};

const DEFAULT_DEPT: Department = {
  id: "works",
  name: { en: "Public Works", ta: "பொதுப்பணித் துறை" },
  slaDays: 7,
};

// Precise Bilingual Guidance instructions per specifications
const FIELD_GUIDANCE = {
  mobile: {
    en: "Please enter your mobile number.",
    ta: "உங்கள் கைபேசி எண்ணை உள்ளிடவும்.",
  },
  name: {
    en: "Please enter your full name.",
    ta: "உங்கள் முழுப் பெயரை உள்ளிடவும்.",
  },
  email: {
    en: "Please enter your email address.",
    ta: "உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்.",
  },
  category: {
    en: "Please select the category that matches your problem.",
    ta: "உங்கள் பிரச்சனைக்குப் பொருத்தமான வகையைத் தேர்ந்தெடுக்கவும்.",
  },
  description: {
    en: "Please describe the problem in your own words.",
    ta: "உங்கள் பிரச்சனையைப் பற்றி உங்கள் சொந்த வார்த்தைகளில் தெரிவிக்கவும்.",
  },
  evidence: {
    en: "Please upload a photo or other evidence of the problem.",
    ta: "பிரச்சனைக்கான புகைப்படம் அல்லது ஆதாரத்தை பதிவேற்றவும்.",
  },
  location: {
    en: "Please select or enter the location where the problem occurred.",
    ta: "பிரச்சனை ஏற்பட்ட இடத்தைத் தேர்ந்தெடுக்கவும் அல்லது உள்ளிடவும்.",
  },
  location_search: {
    en: "Please search for your street or area location.",
    ta: "உங்கள் தெரு அல்லது பகுதியை தேடவும்.",
  },
  address: {
    en: "Please enter the street or landmark address.",
    ta: "தெரு அல்லது முகவரியை உள்ளிடவும்.",
  },
  ward: {
    en: "Please select your ward number.",
    ta: "வார்டு எண்ணைத் தேர்ந்தெடுக்கவும்.",
  },
  review: {
    en: "Please review your complaint details before submitting.",
    ta: "உங்கள் புகார் விவரங்களை சரிபார்த்து பின்னர் சமர்ப்பிக்கவும்.",
  },
};

function ComplaintRegister() {
  const { bi, lang } = useI18n();
  const { createComplaint } = useWorkflow();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Stepper: 1 Problem -> 2 Evidence -> 3 Location -> 4 Review
  const [step, setStep] = useState(1);

  // Form State
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState<MediaFile[]>([]);
  const [locationMode, setLocationMode] = useState<"current" | "search" | "map">("current");
  const [address, setAddress] = useState("Thousand Lights, Chennai, Tamil Nadu");
  const [selectedWardId, setSelectedWardId] = useState<string>("w-110");
  const [lat, setLat] = useState(13.0604);
  const [lng, setLng] = useState(80.2496);

  // Voice recording state
  const [isListening, setIsListening] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState("");

  // Location search input
  const [searchQuery, setSearchQuery] = useState("");
  const [locLoading, setLocLoading] = useState(false);

  // Validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Submission state
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [wardNumber, setWardNumber] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [complaintId, setComplaintId] = useState('');
  const [submittedDate, setSubmittedDate] = useState('');

  // Automatic voice guidance hook
  const { handleFocusGuidance, stopGuidance } = useVoiceGuidance();

  const handleFieldFocus = useCallback(
    (fieldKey: keyof typeof FIELD_GUIDANCE) => {
      const guidance = FIELD_GUIDANCE[fieldKey];
      if (guidance) {
        handleFocusGuidance(fieldKey, guidance, lang);
      }
    },
    [handleFocusGuidance, lang]
  );

  const selectedCategory = CATEGORIES.find((c) => c.id === categoryId);
  const selectedWard: Ward = WARDS.find((w) => w.id === selectedWardId) ?? WARDS[2] ?? DEFAULT_WARD;
  const selectedDept: Department = DEPARTMENTS.find((d) => d.id === selectedCategory?.department) ?? DEPARTMENTS[0] ?? DEFAULT_DEPT;

  // ── Speech Recognition ──
  const startVoiceInput = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const recognition = new SpeechRecognition();
      recognition.lang = lang === "ta" ? "ta-IN" : "en-IN";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        setVoiceNotice(lang === "ta" ? "பேசுங்கள், பதிவு செய்யப்படுகிறது..." : "Listening... please speak clearly.");
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setDescription((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsListening(false);
        setVoiceNotice(lang === "ta" ? "குரல் பதிவு சேர்க்கப்பட்டது. சரிபார்க்கவும்." : "Voice transcribed. You can review and edit.");
      };

      recognition.onerror = () => {
        setIsListening(false);
        setVoiceNotice(lang === "ta" ? "குரல் பதிவு தோல்வியுற்றது. தட்டச்சு செய்யவும்." : "Voice input error. Please type your description.");
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      setIsListening(true);
      setVoiceNotice(lang === "ta" ? "குரல் பதிவு செய்யப்படுகிறது (மாதிரி)..." : "Listening (Simulation)...");
      setTimeout(() => {
        const sampleText = lang === "ta"
          ? "எங்கள் தெருவில் குடிநீர் குழாய் உடைந்து தண்ணீர் வீணாகிறது."
          : "Drinking water pipe is broken and leaking on our street near the junction.";
        setDescription((prev) => (prev ? `${prev} ${sampleText}` : sampleText));
        setIsListening(false);
        setVoiceNotice(lang === "ta" ? "குரல் பதிவு சேர்க்கப்பட்டது. சரிபார்க்கவும்." : "Voice transcribed. You can review and edit.");
      }, 2500);
    }
  };

  // ── Media Handlers ──
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "image" | "video") => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newMedia: MediaFile[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (media.length + newMedia.length >= 5 && type === "image") break;
      if (file) {
        newMedia.push({
          id: `${Date.now()}-${i}`,
          name: file.name,
          url: URL.createObjectURL(file),
          type,
        });
      }
    }
    setMedia((prev) => [...prev, ...newMedia]);
  };

  const removeMedia = (id: string) => {
    setMedia((prev) => prev.filter((m) => m.id !== id));
  };

  // ── Location GPS ──
  const useCurrentLocation = () => {
    setLocLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const latVal = pos.coords.latitude;
          const lngVal = pos.coords.longitude;
          setLat(latVal);
          setLng(lngVal);
          setAddress(`${latVal.toFixed(4)}, ${lngVal.toFixed(4)} — Anna Salai, Thousand Lights`);
          setSelectedWardId("w-110");
          setLocLoading(false);
        },
        () => {
          setLat(CONSTITUENCY.center.lat);
          setLng(CONSTITUENCY.center.lng);
          setAddress("Anna Salai, Thousand Lights, Chennai");
          setSelectedWardId("w-110");
          setLocLoading(false);
        }
      );
    } else {
      setLocLoading(false);
    }
  };

  // ── Step Validation ──
  const validateStep = (currentStep: number) => {
    const newErrors: FormErrors = {};

    if (currentStep === 1) {
      const mobileValid = validateIndianMobile(mobile);
      if (!mobileValid.valid) {
        newErrors.mobile = mobileValid.message;
      }
      if (!categoryId) {
        newErrors.category = lang === "ta" ? "தயவுசெய்து ஒரு வகையைத் தேர்வு செய்யவும்." : "Please select a complaint category.";
      }
      if (!description.trim() || description.trim().length < 5) {
        newErrors.description = lang === "ta" ? "தயவுசெய்து உங்கள் புகாரை சுருக்கமாக விவரிக்கவும்." : "Please describe the problem (at least 5 characters).";
      }
    }

    if (currentStep === 3) {
      if (!address.trim()) {
        newErrors.location = lang === "ta" ? "தயவுசெய்து இடத்தை தேர்வு செய்யவும்." : "Please select or verify the location.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    const mobileValid = validateIndianMobile(mobile);
    if (!mobileValid.valid) {
      setErrors({ mobile: mobileValid.message });
      setStep(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const beforeImage = media.find((m) => m.type === "image")?.url;
    try {
      const newComp = await createComplaint({
        categoryId: categoryId || "road",
        description,
        address,
        wardId: selectedWardId,
        lat,
        lng,
        mobileNumber: mobile,
        citizenName: name || undefined,
        citizenEmail: email || undefined,
        ...(beforeImage !== undefined ? { beforeImage } : {}),
      });
      setComplaintId(newComp.id);
      setSubmittedDate(new Date().toISOString().split("T")[0] ?? "2026-08-14");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setErrors({ mobile: err.message || "Failed to submit complaint" });
    }
  };

  // ── Step Definitions ──
  const STEPS = [
    { num: 1, label: lang === "ta" ? "பிரச்சினை" : "Problem" },
    { num: 2, label: lang === "ta" ? "சான்று" : "Evidence" },
    { num: 3, label: lang === "ta" ? "இடம்" : "Location" },
    { num: 4, label: lang === "ta" ? "சரிபார்த்தல்" : "Review" },
  ];

  // ══════════════════════════════════════════════════════════════════════════
  // SUCCESS DASHBOARD
  // ══════════════════════════════════════════════════════════════════════════
  if (submitted) {
    const maskedMobile = maskMobile(mobile) || maskMobile("9876543210");
    return (
      <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight font-display">
            {lang === "ta" ? "புகார் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது ✓" : "Complaint Submitted Successfully ✓"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {lang === "ta"
              ? "உங்கள் புகார் பதிவு செய்யப்பட்டு சம்பந்தப்பட்ட துறைக்கு அனுப்பப்பட்டுள்ளது."
              : "Your civic complaint has been registered and routed to the concerned department."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Success Card */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border shadow-sm bg-white rounded-2xl overflow-hidden">
              <div className="bg-emerald-50 px-6 py-5 border-b border-emerald-200/60 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-6 ring-emerald-50 shrink-0">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                    {lang === "ta" ? "புகார் எண்" : "Complaint ID"}
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-900 font-mono tracking-tight">
                    {complaintId}
                  </p>
                </div>
                <Badge className="ml-auto bg-emerald-100 text-emerald-800 border-0 font-semibold text-xs">
                  {lang === "ta" ? "சமர்ப்பிக்கப்பட்டது" : "Submitted"}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <span className="text-xs text-muted-foreground">{lang === "ta" ? "வகை" : "Category"}</span>
                    <p className="font-bold text-foreground mt-0.5 flex items-center gap-1.5">
                      <span>{CATEGORY_ICONS[categoryId] ?? "📌"}</span>
                      {selectedCategory ? bi(selectedCategory.name) : "Civic Issue"}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">{lang === "ta" ? "துறை" : "Department"}</span>
                    <p className="font-bold text-foreground mt-0.5">{bi(selectedDept.name)}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">{lang === "ta" ? "வார்டு" : "Ward"}</span>
                    <p className="font-bold text-foreground mt-0.5">Ward {selectedWard.number} — {bi(selectedWard.name)}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">{lang === "ta" ? "சமர்ப்பித்த தேதி" : "Submitted Date"}</span>
                    <p className="font-bold text-foreground mt-0.5">{submittedDate}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">{lang === "ta" ? "மொபைல் எண்" : "Mobile Number"}</span>
                    <p className="font-bold text-foreground mt-0.5 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="font-mono tracking-wider">+91 {maskedMobile}</span>
                    </p>
                  </div>
                  {name && (
                    <div>
                      <span className="text-xs text-muted-foreground">{lang === "ta" ? "பெயர்" : "Name"}</span>
                      <p className="font-bold text-foreground mt-0.5">{name}</p>
                    </div>
                  )}
                  <div className="col-span-2">
                    <span className="text-xs text-muted-foreground">{lang === "ta" ? "இடம்" : "Location"}</span>
                    <p className="font-semibold text-foreground mt-0.5 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-primary shrink-0" /> {address}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-xs text-muted-foreground">{lang === "ta" ? "புகார் விவரம்" : "Issue Description"}</span>
                    <p className="font-medium text-foreground mt-0.5 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Login Access Card */}
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-white to-blue-50 rounded-2xl shadow-sm">
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-black text-foreground">
                      {lang === "ta" ? "🔐 உங்கள் உள்நுழைவு தகவல் (தனி கணக்கு தேவையில்லை)" : "🔐 Your Login Access (No Separate Account Needed)"}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {lang === "ta"
                        ? `மீண்டும் வரும்போது உங்கள் மொபைல் எண் (+91 ${maskedMobile})-ல் உள்நுழைந்து எல்லா புகார்களையும் ஒரே இடத்தில் கண்காணிக்கலாம்.`
                        : `Next time, simply login with your mobile (+91 ${maskedMobile}) to track all your complaints from one dashboard.`}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="rounded-xl bg-white border border-primary/20 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary/70">{lang === "ta" ? "உள்நுழைவு முறை" : "Login Method"}</p>
                    <p className="text-xs font-bold text-foreground mt-1">Mobile + OTP</p>
                  </div>
                  <div className="rounded-xl bg-white border border-primary/20 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary/70">{lang === "ta" ? "உங்கள் மொபைல்" : "Your Mobile"}</p>
                    <p className="text-xs font-bold text-foreground mt-1 font-mono">+91 {maskedMobile}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button asChild size="lg" className="rounded-xl font-bold bg-primary hover:bg-primary/90 gap-2 h-12 flex-1 shadow-md">
                <Link to="/login">
                  <Sparkles className="h-4 w-4" />
                  <span>{lang === "ta" ? "🔐 உடனே உள்நுழைய புகார்களைப் பார்க்க →" : "🔐 Login Now to See Dashboard →"}</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl font-semibold gap-2 h-12 flex-1">
                <Link to="/complaints/track">
                  <Search className="h-4 w-4" />
                  <span>{lang === "ta" ? "புகாரை எண் கொண்டு கண்காணிக்க" : "Track by Complaint ID"}</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-xl font-semibold gap-1.5 h-12">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  <span>{lang === "ta" ? "முகப்பு" : "Home"}</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Panel: What Happens Next? */}
          <div className="space-y-5">
            <Card className="border-border shadow-sm bg-white rounded-2xl">
              <div className="px-5 py-4 border-b border-border/60">
                <h3 className="text-sm font-bold text-foreground">{lang === "ta" ? "அடுத்து என்ன நடக்கும்?" : "What Happens Next?"}</h3>
              </div>
              <CardContent className="p-5 space-y-4">
                {[
                  { icon: "1", text: lang === "ta" ? "உங்கள் புகார் துறை குழுவுக்கு வழிநடத்தப்படும்." : "Your complaint is routed to the concerned department team.", color: "bg-blue-100 text-blue-700" },
                  { icon: "2", text: lang === "ta" ? "கள அலுவலர் தளத்தை ஆய்வு செய்வார்." : "A field officer will inspect the reported site.", color: "bg-amber-100 text-amber-700" },
                  { icon: "3", text: lang === "ta" ? "SLA காலக்கெடுவுக்குள் பணி நிறைவேற்றப்படும்." : "Resolution is completed within the SLA timeline.", color: "bg-emerald-100 text-emerald-700" },
                  { icon: "4", text: lang === "ta" ? "நீங்கள் சரிபார்க்கும்படி கேட்கப்படுவீர்கள்." : "You will be asked to verify the resolution.", color: "bg-violet-100 text-violet-700" },
                ].map((item) => (
                  <div key={item.icon} className="flex items-start gap-3">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold shrink-0 ${item.color}`}>
                      {item.icon}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Snapshot Card */}
            <Card className="border-border shadow-sm bg-white rounded-2xl">
              <div className="px-5 py-4 border-b border-border/60">
                <h3 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  <ClipboardList className="h-4 w-4 text-primary" />
                  {lang === "ta" ? "புகார் நிலை சுருக்கம்" : "Complaint Status Summary"}
                </h3>
              </div>
              <CardContent className="p-5 space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50/70 border border-blue-100">
                  <span className="font-semibold text-blue-800">{lang === "ta" ? "புதிதாக பதிவு" : "Newly Registered"}</span>
                  <div className="flex h-2 w-2 rounded-full bg-blue-500" />
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">{lang === "ta" ? "துறைக்கு ஒதுக்கீடு" : "Department Assignment"}</span>
                  <div className="flex h-2 w-2 rounded-full bg-indigo-500" />
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/70 border border-amber-100">
                  <span className="font-semibold text-amber-800">{lang === "ta" ? "களப்பணி நடப்படுத்தல்" : "Field Work In Progress"}</span>
                  <div className="flex h-2 w-2 rounded-full bg-amber-500" />
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100">
                  <span className="font-semibold text-emerald-800">{lang === "ta" ? "தீர்வு + உறுதிப்படுத்தல்" : "Resolution & Verified"}</span>
                  <div className="flex h-2 w-2 rounded-full bg-emerald-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // DASHBOARD-STYLE COMPLAINT REGISTRATION
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-[#f9f6f0] py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10 pb-28 sm:pb-16 bg-white min-h-screen rounded-3xl shadow-xl text-slate-950 border border-stone-200/80">
      {/* ── DASHBOARD HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-display">
            {lang === "ta" ? "புகாரைப் பதிவு செய்யவும்" : "Report a Complaint"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-800 font-semibold mt-1">
            {lang === "ta"
              ? "உங்கள் பகுதியில் உள்ள பிரச்சினையை பதிவு செய்து அதன் முன்னேற்றத்தை ஒரே இடத்தில் கண்காணிக்கவும்."
              : "Report an issue in your area and track its progress from one place."}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button asChild variant="outline" size="sm" className="rounded-lg text-xs font-bold gap-1.5 h-9 text-slate-900 border-slate-300 bg-white hover:bg-slate-100">
            <Link to="/dashboard">
              <ClipboardList className="h-3.5 w-3.5" />
              <span>{lang === "ta" ? "எனது புகார்கள்" : "My Complaints"}</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="rounded-lg text-xs font-bold gap-1.5 h-9 text-slate-900 border-slate-300 bg-white hover:bg-slate-100">
            <Link to="/complaints/track">
              <Search className="h-3.5 w-3.5" />
              <span>{lang === "ta" ? "புகாரைக் கண்காணிக்க" : "Track Complaint"}</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* ── MAIN DASHBOARD GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ════════════════════════════════════════════════
            LEFT / MAIN PANEL — Complaint Form
        ════════════════════════════════════════════════ */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-5">

          {/* Report a New Issue — Panel Header + Stepper */}
          <Card className="border-border shadow-sm bg-white rounded-2xl overflow-hidden">
            <div className="px-5 sm:px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                    {lang === "ta" ? "புதிய பிரச்சினையை பதிவு செய்க" : "Report a New Issue"}
                  </h2>
                  <p className="text-xs text-slate-700 font-medium mt-0.5">
                    {lang === "ta" ? "படிகளை பின்பற்றி உங்கள் புகாரை பதிவு செய்யவும் — தனி கணக்கு தேவையில்லை" : "Follow the steps to register — no separate account required"}
                  </p>
                </div>
              </div>

              {/* Horizontal Step Progress */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {STEPS.map(({ num, label }) => {
                  const isCompleted = step > num;
                  const isCurrent = step === num;
                  return (
                    <div key={num} className="flex items-center gap-1 sm:gap-1.5">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black transition-all ${
                          isCompleted
                            ? "bg-emerald-600 text-white"
                            : isCurrent
                            ? "bg-red-700 text-white ring-4 ring-amber-400/60 shadow-xs"
                            : "bg-slate-100 text-slate-700 border border-slate-300"
                        }`}
                      >
                        {isCompleted ? <Check className="h-3.5 w-3.5" /> : num}
                      </div>
                      <span
                        className={`text-[11px] font-bold hidden sm:inline ${
                          isCurrent ? "text-red-700 font-black" : "text-slate-700 font-semibold"
                        }`}
                      >
                        {label}
                      </span>
                      {num < 4 && (
                        <div className={`h-px w-4 sm:w-6 ${step > num ? "bg-emerald-400" : "bg-slate-200"}`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── STEP CONTENT ── */}
            <CardContent className="p-5 sm:p-6 text-slate-900">

              {/* ═══════ STEP 1: CONTACT + PROBLEM ═══════ */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* Citizen Mobile Number (MANDATORY) */}
                  <div className="rounded-2xl bg-gradient-to-r from-red-50/50 via-slate-50 to-amber-50/40 border border-red-200/80 p-4 sm:p-5">
                    <div className="flex items-start gap-2.5 mb-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-black text-slate-950">
                          {lang === "ta" ? "மொபைல் எண் (கட்டாயம்)" : "Mobile Number (Mandatory)"}
                        </h3>
                        <p className="text-[11px] text-slate-700 font-medium mt-0.5 leading-relaxed">
                          {lang === "ta"
                            ? "உங்கள் புகாரை கண்காணிக்க இதே மொபைல் எண் பயன்படுத்தப்படும். புதிய கணக்கு தேவையில்லை."
                            : "Use this same mobile number later to login and track all your complaints. No separate registration needed."}
                        </p>
                      </div>
                      <Badge className="bg-primary/15 text-primary border-0 text-[10px] font-bold shrink-0">
                        {lang === "ta" ? "தேவை" : "Required"}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-slate-700 select-none">+91</span>
                        <Input
                          id="mobileInput"
                          type="tel"
                          inputMode="numeric"
                          maxLength={15}
                          value={mobile}
                          onChange={(e) => {
                            const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                            setMobile(onlyDigits);
                            setErrors((err) => ({ ...err, mobile: undefined }));
                          }}
                          onFocus={() => handleFieldFocus("mobile")}
                          placeholder={lang === "ta" ? "98765 43210" : "98765 43210"}
                          className="h-12 pl-16 rounded-xl text-base font-bold tracking-wider border-2 border-primary/40 bg-white text-slate-950 placeholder:text-slate-400 focus:border-primary focus-visible:ring-0 shadow-xs"
                        />
                      </div>
                      {errors.mobile && (
                        <p className="text-xs text-destructive font-bold flex items-start gap-1 pt-0.5">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                          <span>{errors.mobile}</span>
                        </p>
                      )}
                      {!errors.mobile && mobile && validateIndianMobile(mobile).valid && (
                        <p className="text-[11px] text-emerald-800 font-bold flex items-center gap-1 pt-0.5">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                          {lang === "ta" ? `எண் சரி: ${maskMobile(mobile)}` : `Number verified: ${maskMobile(mobile)}`}
                        </p>
                      )}
                    </div>

                    {/* Optional Supplementary Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-200">
                      <div>
                        <label className="text-[11px] font-bold text-slate-900 mb-1 block">
                          {lang === "ta" ? "பெயர் (விருப்பம்)" : "Full Name (Optional)"}
                        </label>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onFocus={() => handleFieldFocus("name")}
                          placeholder={lang === "ta" ? "உங்கள் பெயர்" : "Your name"}
                          className="h-10 rounded-lg text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-slate-900 mb-1 block">
                          {lang === "ta" ? "மின்னஞ்சல் (விருப்பம்)" : "Email (Optional)"}
                        </label>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => handleFieldFocus("email")}
                          placeholder="you@example.com"
                          className="h-10 rounded-lg text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Category Grid */}
                  <div>
                    <h3 className="text-sm font-black text-slate-950 mb-3">
                      {lang === "ta" ? "பிரச்சினை வகையை தேர்வு செய்யவும்" : "Select Issue Category"}
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
                      {CATEGORIES.map((cat) => {
                        const icon = CATEGORY_ICONS[cat.id] ?? "📌";
                        const isSelected = categoryId === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => {
                              setCategoryId(cat.id);
                              setErrors((e) => ({ ...e, category: undefined }));
                              handleFieldFocus("category");
                            }}
                            onFocus={() => handleFieldFocus("category")}
                            className={`flex flex-col items-center justify-center gap-1.5 p-3 sm:p-4 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                              isSelected
                                ? "border-primary bg-red-50/60 shadow-sm ring-2 ring-primary/20"
                                : "border-slate-200 bg-white hover:border-primary/40 hover:bg-slate-50"
                            }`}
                          >
                            <span className="text-2xl sm:text-3xl">{icon}</span>
                            <span className={`text-[11px] sm:text-xs font-extrabold leading-tight ${isSelected ? "text-primary" : "text-slate-900"}`}>
                              {bi(cat.name)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.category && <p className="text-xs text-destructive font-bold mt-2">{errors.category}</p>}
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-sm font-black text-slate-950 mb-2">
                      {lang === "ta" ? "என்ன நடந்தது என்று கூறுங்கள்" : "Tell us what happened"}
                    </h3>
                    <div className="relative">
                      <Textarea
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                          setErrors((err) => ({ ...err, description: undefined }));
                        }}
                        onFocus={() => handleFieldFocus("description")}
                        placeholder={
                          lang === "ta"
                            ? "பிரச்சினையை உங்கள் சொந்த வார்த்தைகளில் விவரிக்கவும்..."
                            : "Describe the problem in your own words..."
                        }
                        rows={4}
                        className="resize-none text-sm font-semibold text-slate-950 bg-white border-slate-300 rounded-xl pr-14 placeholder:text-slate-400"
                      />
                      {/* Mic Button (Voice Recording by user) */}
                      <button
                        type="button"
                        onClick={startVoiceInput}
                        disabled={isListening}
                        className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl transition-all cursor-pointer ${
                          isListening
                            ? "bg-red-100 text-red-600 animate-pulse"
                            : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                        title={lang === "ta" ? "குரல் மூலம் பதிவு செய்ய" : "Record your explanation"}
                      >
                        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-1.5">
                      <p className="text-[11px] text-slate-700 font-medium">
                        {lang === "ta"
                          ? "நீங்கள் தமிழ் அல்லது ஆங்கிலத்தில் விவரிக்கலாம் அல்லது மைக் பட்டனை அழுத்தி பேசலாம்."
                          : "You can describe the issue in Tamil or English or click the microphone to speak."}
                      </p>
                      <span className="text-[11px] text-slate-700 font-bold">{description.length}/500</span>
                    </div>
                    {voiceNotice && (
                      <p className="text-xs text-blue-700 font-bold flex items-center gap-1 mt-1.5">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" /> {voiceNotice}
                      </p>
                    )}
                    {errors.description && <p className="text-xs text-destructive font-bold mt-1">{errors.description}</p>}
                  </div>
                </div>
              )}

              {/* ═══════ STEP 2: EVIDENCE ═══════ */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-black text-slate-950 mb-1">
                      {lang === "ta" ? "சான்றுகளைச் சேர்க்கவும்" : "Add Evidence"}
                    </h3>
                    <p className="text-xs text-slate-700 font-medium mb-4">
                      {lang === "ta"
                        ? "புகைப்படம் அல்லது வீடியோ சேர்ப்பது விரைவான தீர்வுக்கு உதவும். இது கட்டாயமில்லை."
                        : "Adding photos or video helps the field team resolve faster. This is optional."}
                    </p>
                  </div>

                  {/* Upload Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Take Photo */}
                    <label
                      tabIndex={0}
                      onFocus={() => handleFieldFocus("evidence")}
                      className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border-2 border-dashed border-slate-300 hover:border-primary bg-slate-50 hover:bg-red-50/40 cursor-pointer transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <Camera className="h-7 w-7 text-primary" />
                      <span className="text-xs font-bold text-slate-950">
                        {lang === "ta" ? "📷 புகைப்படம் எடுக்க" : "📷 Take Photo"}
                      </span>
                      <input type="file" accept="image/*" capture="environment" className="sr-only" onChange={(e) => handleFileUpload(e, "image")} />
                    </label>
                    {/* Upload Photo */}
                    <label
                      tabIndex={0}
                      onFocus={() => handleFieldFocus("evidence")}
                      className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border-2 border-dashed border-slate-300 hover:border-primary bg-slate-50 hover:bg-red-50/40 cursor-pointer transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <ImageIcon className="h-7 w-7 text-blue-600" />
                      <span className="text-xs font-bold text-slate-950">
                        {lang === "ta" ? "🖼 புகைப்படம் பதிவேற்ற" : "🖼 Upload Photo"}
                      </span>
                      <input type="file" accept="image/*" multiple className="sr-only" onChange={(e) => handleFileUpload(e, "image")} />
                    </label>
                    {/* Upload Video */}
                    <label
                      tabIndex={0}
                      onFocus={() => handleFieldFocus("evidence")}
                      className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border-2 border-dashed border-slate-300 hover:border-primary bg-slate-50 hover:bg-red-50/40 cursor-pointer transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <Video className="h-7 w-7 text-rose-600" />
                      <span className="text-xs font-bold text-slate-950">
                        {lang === "ta" ? "🎥 வீடியோ பதிவேற்ற" : "🎥 Upload Video"}
                      </span>
                      <input type="file" accept="video/*" className="sr-only" onChange={(e) => handleFileUpload(e, "video")} />
                    </label>
                  </div>

                  <p className="text-[11px] text-slate-700 font-medium">{lang === "ta" ? "அதிகபட்சம் 5 புகைப்படங்கள். வீடியோ விருப்பத்திற்குரியது." : "Maximum 5 images. Video is optional."}</p>

                  {/* Preview Gallery */}
                  {media.length > 0 && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                      {media.map((m) => (
                        <div key={m.id} className="relative group rounded-xl overflow-hidden border border-slate-300 bg-slate-100 aspect-square">
                          {m.type === "image" ? (
                            <img src={m.url} alt={m.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-slate-100">
                              <Video className="h-8 w-8 text-slate-400" />
                            </div>
                          )}
                          <button
                            type="button"
                            onClick={() => removeMedia(m.id)}
                            className="absolute top-1.5 right-1.5 h-6 w-6 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ═══════ STEP 3: LOCATION ═══════ */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-black text-slate-950 mb-1">
                      {lang === "ta" ? "பிரச்சினை எங்கே உள்ளது?" : "Where is the issue?"}
                    </h3>
                    <p className="text-xs text-slate-700 font-medium mb-4">
                      {lang === "ta"
                        ? "சரியான இடத்தை குறிக்க கீழ்கண்ட ஒரு வழியை தேர்வு செய்யவும்."
                        : "Select one of the options below to mark the exact location."}
                    </p>
                  </div>

                  {/* Location Mode Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => { setLocationMode("current"); useCurrentLocation(); handleFieldFocus("location"); }}
                      onFocus={() => handleFieldFocus("location")}
                      className={`flex items-center gap-2.5 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                        locationMode === "current" ? "border-primary bg-red-50/60" : "border-slate-200 hover:border-primary/40 bg-white"
                      }`}
                    >
                      <MapPin className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <p className="text-xs font-black text-slate-950">
                          {lang === "ta" ? "📍 தற்போதைய இடம்" : "📍 Current Location"}
                        </p>
                        <p className="text-[10px] text-slate-700 font-medium">
                          {lang === "ta" ? "GPS பயன்படுத்தவும்" : "Use GPS"}
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setLocationMode("search"); handleFieldFocus("location_search"); }}
                      onFocus={() => handleFieldFocus("location_search")}
                      className={`flex items-center gap-2.5 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                        locationMode === "search" ? "border-primary bg-red-50/60" : "border-slate-200 hover:border-primary/40 bg-white"
                      }`}
                    >
                      <Search className="h-5 w-5 text-blue-600 shrink-0" />
                      <div>
                        <p className="text-xs font-black text-slate-950">
                          {lang === "ta" ? "🔎 முகவரி தேடல்" : "🔎 Search Location"}
                        </p>
                        <p className="text-[10px] text-slate-700 font-medium">
                          {lang === "ta" ? "தெரு / பகுதி" : "Street / Area"}
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setLocationMode("map"); handleFieldFocus("location"); }}
                      onFocus={() => handleFieldFocus("location")}
                      className={`flex items-center gap-2.5 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                        locationMode === "map" ? "border-primary bg-red-50/60" : "border-slate-200 hover:border-primary/40 bg-white"
                      }`}
                    >
                      <MapPin className="h-5 w-5 text-emerald-600 shrink-0" />
                      <div>
                        <p className="text-xs font-black text-slate-950">
                          {lang === "ta" ? "🗺 வரைபடத்தில் தேர்வு" : "🗺 Select on Map"}
                        </p>
                        <p className="text-[10px] text-slate-700 font-medium">
                          {lang === "ta" ? "வரைபடத்தில் கிளிக்" : "Click on map"}
                        </p>
                      </div>
                    </button>
                  </div>

                  {locLoading && (
                    <p className="text-xs text-blue-700 font-bold animate-pulse">
                      {lang === "ta" ? "உங்கள் இடத்தை கண்டறிகிறது..." : "Detecting your location..."}
                    </p>
                  )}

                  {/* Search Input */}
                  {locationMode === "search" && (
                    <div className="flex gap-2">
                      <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => handleFieldFocus("location_search")}
                        placeholder={lang === "ta" ? "தெரு, பகுதி அல்லது அடையாளம்..." : "Street, area, or landmark..."}
                        className="h-10 rounded-lg text-sm font-semibold text-slate-950 bg-white border-slate-300 flex-1 placeholder:text-slate-400"
                      />
                      <Button
                        type="button"
                        size="sm"
                        className="h-10 px-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold"
                        onClick={() => {
                          if (searchQuery.trim()) {
                            setAddress(`${searchQuery.trim()}, Thousand Lights, Chennai`);
                            setSelectedWardId("w-110");
                          }
                        }}
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {/* Google Maps Embed */}
                  <div className="rounded-xl overflow-hidden border border-slate-300 shadow-sm">
                    <iframe
                      title="Issue Location Map"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat},${lng}&zoom=16`}
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>

                  {/* Address & Ward */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-950">
                        {lang === "ta" ? "முகவரி" : "Address"}
                      </label>
                      <Input
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          setErrors((err) => ({ ...err, location: undefined }));
                        }}
                        onFocus={() => handleFieldFocus("address")}
                        className="h-10 rounded-lg text-xs font-semibold text-slate-950 bg-white border-slate-300"
                      />
                      {errors.location && <p className="text-xs text-destructive font-bold">{errors.location}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-950">
                        {lang === "ta" ? "வார்டு" : "Ward"}
                      </label>
                      <select
                        value={selectedWardId}
                        onChange={(e) => setSelectedWardId(e.target.value)}
                        onFocus={() => handleFieldFocus("ward")}
                        className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs font-bold text-slate-950"
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
              )}

              {/* ═══════ STEP 4: REVIEW ═══════ */}
              {step === 4 && (
                <div className="space-y-5">
                  <div
                    tabIndex={0}
                    onFocus={() => handleFieldFocus("review")}
                    className="focus:outline-none"
                  >
                    <h3 className="text-sm font-black text-slate-950 mb-1">
                      {lang === "ta" ? "உங்கள் புகாரை சரிபார்க்கவும்" : "Review Your Complaint"}
                    </h3>
                    <p className="text-xs text-slate-700 font-medium mb-4">
                      {lang === "ta"
                        ? "எல்லா விவரங்களும் சரியா என்று உறுதிப்படுத்திய பின் சமர்ப்பிக்கவும்."
                        : "Please confirm all details are correct before submitting."}
                    </p>
                  </div>

                  {/* Summary Grid */}
                  <div
                    tabIndex={0}
                    onFocus={() => handleFieldFocus("review")}
                    className="rounded-xl bg-slate-50 border border-slate-200 p-4 sm:p-5 space-y-3 focus:outline-none focus:ring-1 focus:ring-primary/20"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">{lang === "ta" ? "வகை" : "Category"}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-slate-950 flex items-center gap-1.5">
                          <span>{CATEGORY_ICONS[categoryId] ?? "📌"}</span>
                          {selectedCategory ? bi(selectedCategory.name) : "—"}
                        </span>
                        <button type="button" onClick={() => setStep(1)} className="text-primary hover:text-primary/80">
                          <Pencil className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-bold text-slate-700 shrink-0">{lang === "ta" ? "விவரம்" : "Description"}</span>
                        <button type="button" onClick={() => setStep(1)} className="text-primary hover:text-primary/80 shrink-0 ml-2">
                          <Pencil className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-xs font-bold text-slate-950 mt-1 leading-relaxed">{description || "—"}</p>
                    </div>

                    <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">{lang === "ta" ? "சான்றுகள்" : "Evidence"}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-950">
                          {media.length > 0
                            ? `${media.filter((m) => m.type === "image").length} ${lang === "ta" ? "புகைப்படம்" : "photo(s)"}${media.some((m) => m.type === "video") ? ` + 1 ${lang === "ta" ? "வீடியோ" : "video"}` : ""}`
                            : lang === "ta" ? "சான்று இல்லை" : "No evidence attached"}
                        </span>
                        <button type="button" onClick={() => setStep(2)} className="text-primary hover:text-primary/80">
                          <Pencil className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">{lang === "ta" ? "இடம்" : "Location"}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-950 truncate max-w-[200px]">{address}</span>
                        <button type="button" onClick={() => setStep(3)} className="text-primary hover:text-primary/80">
                          <Pencil className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">{lang === "ta" ? "வார்டு" : "Ward"}</span>
                      <span className="text-xs font-bold text-slate-950">Ward {selectedWard.number} — {bi(selectedWard.name)}</span>
                    </div>
                  </div>

                  {/* ARAM Smart Check */}
                  <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Cpu className="h-4 w-4 text-blue-600" />
                      <h4 className="text-sm font-black text-slate-950">NAMMA KURAL Smart Check</h4>
                      <Badge className="bg-blue-100 text-blue-800 border-0 text-[10px] font-bold ml-auto">
                        {lang === "ta" ? "முன்னோட்டம்" : "Preview"}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="bg-white rounded-lg p-3 border border-blue-100">
                        <span className="text-slate-700 font-bold">{lang === "ta" ? "பரிந்துரைக்கப்பட்ட துறை" : "Suggested Department"}</span>
                        <p className="font-black text-slate-950 mt-0.5">{bi(selectedDept.name)}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-blue-100">
                        <span className="text-slate-700 font-bold">{lang === "ta" ? "முன்னுரிமை" : "Priority"}</span>
                        <p className="font-black text-amber-800 mt-0.5">{lang === "ta" ? "நடுத்தரம்" : "Medium"}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-blue-100">
                        <span className="text-slate-700 font-bold">{lang === "ta" ? "நகல் சோதனை" : "Possible Duplicate"}</span>
                        <p className="font-black text-emerald-800 mt-0.5 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          {lang === "ta" ? "ஒத்த புகார் இல்லை" : "No similar complaint nearby"}
                        </p>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-700 font-semibold mt-3 italic">
                      {lang === "ta"
                        ? "இது தற்போது முன்னோட்ட AI பகுப்பாய்வு. இறுதி துறை ஒதுக்கீடு அலுவலகத்தால் உறுதிப்படுத்தப்படும்."
                        : "This is a preview analysis. Final department assignment will be confirmed by the constituency office."}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* ════════════════════════════════════════════════
            RIGHT SIDEBAR — Today's Overview
        ════════════════════════════════════════════════ */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-5">
          {/* Today's Overview */}
          <Card className="border-border shadow-sm bg-white rounded-2xl">
            <div className="px-5 py-4 border-b border-slate-200">
              <h3 className="text-sm font-black text-slate-950">
                {lang === "ta" ? "இன்றைய சுருக்கம்" : "Today's Overview"}
              </h3>
            </div>
            <CardContent className="p-4 space-y-3">
              {/* Stat: New Issues */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50 border border-blue-200">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-950">
                    {lang === "ta" ? "புதிய பிரச்சினைகள்" : "New Issues"}
                  </span>
                </div>
                <span className="text-2xl font-black text-blue-700">1</span>
              </div>

              {/* Stat: In Progress */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50 border border-amber-200">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-950">
                    {lang === "ta" ? "செயல்பாட்டில்" : "In Progress"}
                  </span>
                </div>
                <span className="text-2xl font-black text-amber-700">0</span>
              </div>

              {/* Stat: Resolved */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-950">
                    {lang === "ta" ? "தீர்க்கப்பட்டது" : "Resolved"}
                  </span>
                </div>
                <span className="text-2xl font-black text-emerald-700">1</span>
              </div>

              {/* View My Complaints Link */}
              <Link
                to="/dashboard"
                className="flex items-center justify-center gap-1.5 pt-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <span>{lang === "ta" ? "எனது புகார்களைப் பார்க்க" : "View My Complaints"}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="border-border shadow-sm bg-white rounded-2xl">
            <div className="px-5 py-4 border-b border-slate-200">
              <h3 className="text-sm font-black text-slate-950 flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                {lang === "ta" ? "குறிப்புகள்" : "Quick Tips"}
              </h3>
            </div>
            <CardContent className="p-4">
              <ul className="space-y-2.5 text-xs text-slate-800 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">•</span>
                  <span>{lang === "ta" ? "புகைப்படம் சேர்ப்பது விரைவான தீர்வுக்கு உதவும்." : "Adding photos helps the team resolve faster."}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">•</span>
                  <span>{lang === "ta" ? "சரியான இடத்தை தேர்வு செய்வது மிக முக்கியம்." : "Selecting the exact location improves accuracy."}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">•</span>
                  <span>{lang === "ta" ? "குரல் உள்ளீடு தமிழ் மற்றும் ஆங்கிலத்தில் கிடைக்கும்." : "Voice input supports Tamil and English."}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ── STICKY BOTTOM ACTION BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-border px-4 py-3 sm:relative sm:bg-transparent sm:backdrop-blur-none sm:border-0 sm:px-0 sm:py-0 sm:mt-6 sm:z-auto">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-3">
          {/* Back + Next grouped together on the left */}
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={step === 1 ? () => navigate({ to: "/" }) : handleBack}
              className="h-11 px-5 rounded-xl font-semibold gap-1.5 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{lang === "ta" ? "பின்செல்" : "Back"}</span>
            </Button>

            {step < 4 ? (
              <Button
                type="button"
                size="lg"
                onClick={handleNext}
                className="h-11 px-6 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white gap-1.5 text-sm shadow-md"
              >
                <span>{step === 1 ? (lang === "ta" ? "அடுத்தது: இடம் சேர்க்க →" : "Next: Add Location →") : step === 2 ? (lang === "ta" ? "அடுத்தது: புகைப்படம் சேர்க்க →" : "Next: Add Photo →") : step === 3 ? (lang === "ta" ? "புகாரை சரிபார் →" : "Review Complaint →") : (lang === "ta" ? "சமர்ப்பிக்கவும் →" : "Submit My Complaint →")}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                size="lg"
                onClick={handleSubmit}
                onFocus={() => handleFieldFocus("review")}
                className="h-11 px-6 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5 text-sm shadow-md cursor-pointer"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>{lang === "ta" ? "புகாரை சமர்ப்பிக்கவும்" : "Submit My Complaint"}</span>
              </Button>
            )}
          </div>

          {/* Step counter on the right */}
          <span className="text-xs font-semibold text-muted-foreground shrink-0">
            {lang === "ta" ? `படி ${step} / 4` : `Step ${step} of 4`}
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}
