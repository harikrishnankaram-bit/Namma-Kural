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
  id: "tn-tiruchengode",
  name: { en: "Tiruchengode Constituency", ta: "திருச்செங்கோடு தொகுதி" } as Bilingual,
  district: { en: "Namakkal", ta: "நாமக்கல்" } as Bilingual,
  state: { en: "Tamil Nadu", ta: "தமிழ்நாடு" } as Bilingual,
  center: { lat: 11.3787, lng: 77.8953 },
  defaultZoom: 14,
  helpline: "1800-000-2026",
  officeEmail: "office@tiruchengode.gov.example",
};

export const MLA = {
  name: { en: "Hon. MLA Representative", ta: "மாண்புமிகு தொகுதி சட்டமன்ற உறுப்பினர்" } as Bilingual,
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
  { id: "w-01", number: 1, name: { en: "Tiruchengode Main Road", ta: "திருச்செங்கோடு பிரதான சாலை" }, center: { lat: 11.3787, lng: 77.8953 }, population: 42150 },
  { id: "w-02", number: 2, name: { en: "Sankari Road Sector", ta: "சங்ககிரி சாலை பகுதி" }, center: { lat: 11.3850, lng: 77.8900 }, population: 38400 },
  { id: "w-03", number: 3, name: { en: "Taluk Office Zone", ta: "தாலுகா அலுவலக பகுதி" }, center: { lat: 11.3720, lng: 77.9010 }, population: 46980 },
  { id: "w-04", number: 4, name: { en: "Government Hospital Sector", ta: "அரசு மருத்துவமனை பகுதி" }, center: { lat: 11.3810, lng: 77.9050 }, population: 51220 },
  { id: "w-05", number: 5, name: { en: "Velur Road West", ta: "வேலூர் சாலை மேற்கு" }, center: { lat: 11.3690, lng: 77.8880 }, population: 44310 },
  { id: "w-06", number: 6, name: { en: "Namakkal Road East", ta: "நாமக்கல் சாலை கிழக்கு" }, center: { lat: 11.3750, lng: 77.9120 }, population: 39875 },
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
  | "NEW"
  | "under_review"
  | "UNDER_REVIEW"
  | "pending_verification"
  | "verified"
  | "assigned"
  | "ASSIGNED"
  | "accepted"
  | "ACCEPTED"
  | "in_progress"
  | "IN_PROGRESS"
  | "completed"
  | "COMPLETED"
  | "verification_pending"
  | "VERIFICATION_PENDING"
  | "citizen_verification"
  | "resolved"
  | "RESOLVED"
  | "closed"
  | "rejected"
  | "REJECTED"
  | "reopened"
  | "REOPENED";

export const STATUS_META: Record<
  string,
  { label: Bilingual; tone: "new" | "assigned" | "progress" | "resolved" | "pending" | "rejected" }
> = {
  new: { label: { en: "Newly Registered", ta: "புதிதாக பதிவு" }, tone: "new" },
  NEW: { label: { en: "Newly Registered", ta: "புதிதாக பதிவு" }, tone: "new" },
  under_review: { label: { en: "Under Review", ta: "ஆய்வில் உள்ளது" }, tone: "pending" },
  UNDER_REVIEW: { label: { en: "Under Review", ta: "ஆய்வில் உள்ளது" }, tone: "pending" },
  pending_verification: { label: { en: "Pending Verification", ta: "சரிபார்ப்பு நிலுவையில்" }, tone: "pending" },
  verified: { label: { en: "Verified", ta: "சரிபார்க்கப்பட்டது" }, tone: "assigned" },
  assigned: { label: { en: "Assigned to Dept", ta: "துறைக்கு ஒதுக்கப்பட்டது" }, tone: "assigned" },
  ASSIGNED: { label: { en: "Assigned to Dept", ta: "துறைக்கு ஒதுக்கப்பட்டது" }, tone: "assigned" },
  accepted: { label: { en: "Officer Accepted", ta: "அலுவலர் ஏற்றுக்கொண்டார்" }, tone: "progress" },
  ACCEPTED: { label: { en: "Officer Accepted", ta: "அலுவலர் ஏற்றுக்கொண்டார்" }, tone: "progress" },
  in_progress: { label: { en: "In Progress", ta: "பணி நடைபெறுகிறது" }, tone: "progress" },
  IN_PROGRESS: { label: { en: "In Progress", ta: "பணி நடைபெறுகிறது" }, tone: "progress" },
  completed: { label: { en: "Work Completed", ta: "பணி முடிந்தது" }, tone: "progress" },
  COMPLETED: { label: { en: "Work Completed", ta: "பணி முடிந்தது" }, tone: "progress" },
  verification_pending: { label: { en: "Verification Pending", ta: "சரிபார்ப்பு நிலுவையில்" }, tone: "pending" },
  VERIFICATION_PENDING: { label: { en: "Verification Pending", ta: "சரிபார்ப்பு நிலுவையில்" }, tone: "pending" },
  citizen_verification: { label: { en: "Citizen Verification", ta: "குடிமகன் உறுதிப்படுத்தல்" }, tone: "progress" },
  resolved: { label: { en: "Resolved", ta: "தீர்க்கப்பட்டது" }, tone: "resolved" },
  RESOLVED: { label: { en: "Resolved", ta: "தீர்க்கப்பட்டது" }, tone: "resolved" },
  closed: { label: { en: "Resolved & Closed", ta: "தீர்க்கப்பட்டு மூடப்பட்டது" }, tone: "resolved" },
  rejected: { label: { en: "Rejected", ta: "நிராகரிக்கப்பட்டது" }, tone: "rejected" },
  REJECTED: { label: { en: "Rejected", ta: "நிராகரிக்கப்பட்டது" }, tone: "rejected" },
  reopened: { label: { en: "Reopened", ta: "மீண்டும் திறக்கப்பட்டது" }, tone: "new" },
  REOPENED: { label: { en: "Reopened", ta: "மீண்டும் திறக்கப்பட்டது" }, tone: "new" },
};

export const STATUS_TONE_COLOR: Record<string, string> = {
  new: "var(--status-new)",
  assigned: "var(--status-assigned)",
  progress: "var(--status-progress)",
  resolved: "var(--status-resolved)",
  pending: "var(--status-pending)",
  rejected: "#ef4444",
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