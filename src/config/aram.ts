/**
 * ARAM — centralized platform configuration.
 * Everything constituency-specific lives here so an administrator (or a future
 * backend endpoint) can change it in one place.
 */

export type Lang = "en" | "ta";

export interface Bilingual {
  en: string;
  ta: string;
}

export const CONSTITUENCY = {
  id: "tn-thousand-lights",
  name: { en: "ARAM Constituency", ta: "ARAM Constituency" } as Bilingual,
  district: { en: "Chennai", ta: "சென்னை" } as Bilingual,
  state: { en: "Tamil Nadu", ta: "தமிழ்நாடு" } as Bilingual,
  center: { lat: 13.0604, lng: 80.2496 },
  defaultZoom: 14,
  helpline: "1800-000-2026",
  officeEmail: "office@aram.gov.example",
};

export const MLA = {
  name: { en: "Hon. Constituency Representative", ta: "மாண்புமிகு தொகுதி பிரதிநிதி" } as Bilingual,
  role: { en: "Member of Legislative Assembly", ta: "சட்டமன்ற உறுப்பினர்" } as Bilingual,
  officeHours: { en: "Mon–Sat, 10:00 AM – 1:00 PM", ta: "திங்கள்–சனி, காலை 10:00 – பிற்பகல் 1:00" } as Bilingual,
};

export interface Ward {
  id: string;
  number: number;
  name: Bilingual;
  center: { lat: number; lng: number };
  population: number;
}

export const WARDS: Ward[] = [
  { id: "w-108", number: 108, name: { en: "Egmore", ta: "எழும்பூர்" }, center: { lat: 13.0732, lng: 80.2609 }, population: 42150 },
  { id: "w-109", number: 109, name: { en: "Chintadripet", ta: "சிந்தாதிரிப்பேட்டை" }, center: { lat: 13.0704, lng: 80.2724 }, population: 38400 },
  { id: "w-110", number: 110, name: { en: "Thousand Lights", ta: "ஆயிரம் விளக்கு" }, center: { lat: 13.0604, lng: 80.2496 }, population: 46980 },
  { id: "w-111", number: 111, name: { en: "Royapettah", ta: "இராயப்பேட்டை" }, center: { lat: 13.0533, lng: 80.2645 }, population: 51220 },
  { id: "w-112", number: 112, name: { en: "Nungambakkam", ta: "நுங்கம்பாக்கம்" }, center: { lat: 13.0569, lng: 80.2425 }, population: 44310 },
  { id: "w-113", number: 113, name: { en: "Teynampet", ta: "தேனாம்பேட்டை" }, center: { lat: 13.0416, lng: 80.2497 }, population: 39875 },
];

export interface Department {
  id: string;
  name: Bilingual;
  slaDays: number;
}

export const DEPARTMENTS: Department[] = [
  { id: "highways", name: { en: "Highways & Roads", ta: "நெடுஞ்சாலை மற்றும் சாலைகள்" }, slaDays: 7 },
  { id: "water", name: { en: "Water Supply Board", ta: "குடிநீர் வாரியம்" }, slaDays: 5 },
  { id: "drainage", name: { en: "Storm Water & Drainage", ta: "மழைநீர் மற்றும் வடிகால்" }, slaDays: 6 },
  { id: "electricity", name: { en: "Electricity Board", ta: "மின்சார வாரியம்" }, slaDays: 3 },
  { id: "sanitation", name: { en: "Solid Waste Management", ta: "திடக்கழிவு மேலாண்மை" }, slaDays: 2 },
  { id: "health", name: { en: "Public Health", ta: "பொது சுகாதாரம்" }, slaDays: 4 },
  { id: "works", name: { en: "Public Works", ta: "பொதுப்பணித் துறை" }, slaDays: 10 },
];

export interface Category {
  id: string;
  name: Bilingual;
  icon: string;
  department: string;
}

export const CATEGORIES: Category[] = [
  { id: "road", name: { en: "Road", ta: "சாலை" }, icon: "TrafficCone", department: "highways" },
  { id: "drainage", name: { en: "Drainage", ta: "வடிகால்" }, icon: "Waves", department: "drainage" },
  { id: "streetlight", name: { en: "Street Light", ta: "தெருவிளக்கு" }, icon: "Lightbulb", department: "electricity" },
  { id: "water", name: { en: "Water", ta: "குடிநீர்" }, icon: "Droplets", department: "water" },
  { id: "waste", name: { en: "Waste", ta: "கழிவு" }, icon: "Trash2", department: "sanitation" },
  { id: "publichealth", name: { en: "Public Health", ta: "பொது சுகாதாரம்" }, icon: "HeartPulse", department: "health" },
  { id: "electricity", name: { en: "Electricity", ta: "மின்சாரம்" }, icon: "Zap", department: "electricity" },
  { id: "infrastructure", name: { en: "Public Infrastructure", ta: "பொது கட்டமைப்பு" }, icon: "Building2", department: "works" },
  { id: "other", name: { en: "Other", ta: "மற்றவை" }, icon: "CircleEllipsis", department: "works" },
];

export type ComplaintStatus =
  | "new"
  | "verified"
  | "assigned"
  | "in_progress"
  | "completed"
  | "citizen_verification"
  | "closed"
  | "pending_verification";

export const STATUS_META: Record<
  ComplaintStatus,
  { label: Bilingual; tone: "new" | "assigned" | "progress" | "resolved" | "pending" }
> = {
  new: { label: { en: "Newly Registered", ta: "புதிதாக பதிவு" }, tone: "new" },
  pending_verification: { label: { en: "Pending Verification", ta: "சரிபார்ப்பு நிலுவையில்" }, tone: "pending" },
  verified: { label: { en: "Verified", ta: "சரிபார்க்கப்பட்டது" }, tone: "assigned" },
  assigned: { label: { en: "Assigned", ta: "ஒதுக்கப்பட்டது" }, tone: "assigned" },
  in_progress: { label: { en: "In Progress", ta: "பணி நடைபெறுகிறது" }, tone: "progress" },
  completed: { label: { en: "Work Completed", ta: "பணி முடிந்தது" }, tone: "progress" },
  citizen_verification: { label: { en: "Citizen Verification", ta: "குடிமகன் உறுதிப்படுத்தல்" }, tone: "progress" },
  closed: { label: { en: "Resolved & Closed", ta: "தீர்க்கப்பட்டு மூடப்பட்டது" }, tone: "resolved" },
};

export const STATUS_TONE_COLOR: Record<string, string> = {
  new: "var(--status-new)",
  assigned: "var(--status-assigned)",
  progress: "var(--status-progress)",
  resolved: "var(--status-resolved)",
  pending: "var(--status-pending)",
};

export type Role =
  | "citizen"
  | "field_officer"
  | "department_admin"
  | "constituency_admin"
  | "content_admin"
  | "super_admin";

export const ROLE_META: Record<Role, { label: Bilingual; home: string }> = {
  citizen: { label: { en: "Citizen", ta: "குடிமகன்" }, home: "/dashboard" },
  field_officer: { label: { en: "Field Officer", ta: "கள அலுவலர்" }, home: "/console/officer" },
  department_admin: { label: { en: "Department Admin", ta: "துறை நிர்வாகி" }, home: "/console/department" },
  constituency_admin: { label: { en: "Constituency Admin", ta: "தொகுதி நிர்வாகி" }, home: "/console/constituency" },
  content_admin: { label: { en: "Content & Citizen Services", ta: "உள்ளடக்க நிர்வாகி" }, home: "/console/content" },
  super_admin: { label: { en: "Super Admin", ta: "முதன்மை நிர்வாகி" }, home: "/console/super" },
};

export const DEMO_DATA_NOTICE = {
  en: "Demo data — not official government statistics.",
  ta: "மாதிரி தரவு — அதிகாரப்பூர்வ அரசு புள்ளிவிவரம் அல்ல.",
} as Bilingual;