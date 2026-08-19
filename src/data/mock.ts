import type { Bilingual, ComplaintStatus } from "@/config/aram";

export interface TimelineEntry {
  stage: string;
  label: Bilingual;
  date: string;
  time: string;
  department?: string | undefined;
  officer?: string | undefined;
  note: Bilingual;
  remarks?: string | undefined;
  resolutionInfo?: string | undefined;
  performedBy?: string | undefined;
  performedByRole?: string | undefined;
  done: boolean;
}

export interface Citizen {
  citizenId: string;
  mobileNumber: string;
  createdAt: string;
  lastLoginAt?: string | undefined;
  fullName?: string | undefined;
  wardId?: string | undefined;
  email?: string | undefined;
}

export interface Complaint {
  id: string;
  categoryId: string;
  status: ComplaintStatus;
  wardId: string;
  departmentId: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  address: string;
  lat: number;
  lng: number;
  priority: "low" | "medium" | "high";
  officer?: string | undefined;
  beforeImage?: string | undefined;
  afterImage?: string | undefined;
  completedOn?: string | undefined;
  timeline: TimelineEntry[];
  citizenId: string;
  citizenMobile: string;
  citizenVerified?: boolean | undefined;
  rating?: number | undefined;
  resolutionDetails?: string | undefined;
}

export interface Project {
  id: string;
  name: Bilingual;
  status: "planned" | "in_progress" | "completed" | "delayed";
  departmentId: string;
  wardId: string;
  location: string;
  progress: number;
  start: string;
  end: string;
  budget?: string;
  description?: Bilingual;
  beneficiaries?: string;
  images: {
    before?: string;
    progress?: string;
    completed?: string;
  };
  // Optional criteria for scheme finder wizard
  criteria?: {
    minAge?: number;
    maxAge?: number;
    gender?: "male" | "female" | "any";
    maxIncome?: number;
  };
}

export interface Scheme {
  id: string;
  name: Bilingual;
  tag: Bilingual;
  overview: Bilingual;
  department: string;
  benefits: Bilingual[];
  eligibility: Bilingual[];
  documents: Bilingual[];
  process: Bilingual[];
  source: string;
  // Optional criteria for scheme finder
  criteria?: {
    minAge?: number;
    maxAge?: number;
    gender?: "male" | "female" | "any";
    maxIncome?: number;
  };
}

export function maskMobile(mobile: string): string {
  if (!mobile || mobile.length < 6) return mobile;
  const digits = mobile.replace(/\D/g, "");
  if (digits.length < 6) return mobile;
  return digits.substring(0, 2) + "******" + digits.substring(digits.length - 2);
}

export function validateIndianMobile(mobile: string): { valid: boolean; message?: string } {
  const digits = mobile.replace(/\D/g, "");
  if (!digits) return { valid: false, message: "Mobile number is required" };
  if (!/^[6-9]\d{9}$/.test(digits)) {
    return {
      valid: false,
      message: "Enter a valid 10-digit Indian mobile number starting with 6-9",
    };
  }
  return { valid: true };
}

export const STAGES: Array<{ id: string; label: Bilingual }> = [
  { id: "submitted", label: { en: "Submitted", ta: "சமர்ப்பிக்கப்பட்டது" } },
  { id: "verified", label: { en: "Verified", ta: "சரிபார்க்கப்பட்டது" } },
  { id: "assigned", label: { en: "Assigned", ta: "ஒதுக்கப்பட்டது" } },
  { id: "officer", label: { en: "Officer Assigned", ta: "அலுவலர் நியமிக்கப்பட்டார்" } },
  { id: "started", label: { en: "Work Started", ta: "பணி தொடங்கியது" } },
  { id: "completed", label: { en: "Work Completed", ta: "பணி முடிந்தது" } },
  { id: "dept_verified", label: { en: "Department Verified", ta: "துறை சரிபார்த்தது" } },
  { id: "citizen", label: { en: "Citizen Verification", ta: "குடிமகன் உறுதிப்படுத்தல்" } },
  { id: "closed", label: { en: "Closed", ta: "மூடப்பட்டது" } },
];

// Pure database-driven empty defaults (NO fake mock records)
export const MOCK_CITIZENS: Citizen[] = [];
export const MOCK_COMPLAINTS: Complaint[] = [];
export const MOCK_NOTIFICATIONS: any[] = [];

export const PUBLIC_STATS = {
  total: 0,
  totalComplaints: 0,
  resolved: 0,
  resolvedComplaints: 0,
  inProgress: 0,
  inProgressComplaints: 0,
  resolutionRate: 0,
  avgResolutionHours: 0,
  citizenSatisfactionPct: 0,
  activeProjects: 2,
  schemesAvailable: 1,
  // Additional fields used in transparency page
  avgResolutionDays: 0,
  satisfaction: 0,
  projects: 0,
  completedProjects: 0,
  monthly: [], // Array of { month: string, received: number, resolved: number }
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "prj-001",
    name: { en: "Underground Storm Water Drainage Network", ta: "நிலத்தடி மழைநீர் வடிகால் கட்டமைப்பு" },
    status: "in_progress",
    departmentId: "works",
    wardId: "w-110",
    location: "Ward 110 (MGR Nagar)",
    progress: 68,
    start: "2026-01-15",
    end: "2026-10-30",
    budget: "₹ 4.80 Cr",
    description: {
      en: "Comprehensive stormwater drain network preventing monsoon waterlogging across low-lying residential sectors.",
      ta: "தாழ்வான குடியிருப்புப் பகுதிகளில் பருவமழை நீர் தேங்குவதைத் தடுக்கும் மழைநீர் வடிகால் திட்டம்.",
    },
    beneficiaries: "14,500 Citizens",
    images: {
      before: "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?auto=format&fit=crop&w=900&q=60",
      progress: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=900&q=60",
    },
  },
  {
    id: "prj-002",
    name: { en: "Smart High School Modernization", ta: "அரசு மேல்நிலைப் பள்ளி நவீனமயமாக்கல்" },
    status: "in_progress",
    departmentId: "health",
    wardId: "w-112",
    location: "Ward 112 (Anna Nagar)",
    progress: 85,
    start: "2026-03-01",
    end: "2026-08-30",
    budget: "₹ 1.95 Cr",
    description: {
      en: "Smart classrooms, STEM science laboratory, computer center, and sports court upgrades.",
      ta: "ஸ்மார்ட் வகுப்பறைகள், STEM அறிவியல் ஆய்வகம், கணினி மையம் மற்றும் விளையாட்டு மைதான மேம்பாடு.",
    },
    beneficiaries: "1,200 Students",
    images: {
      before: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=60",
      completed: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=900&q=60",
    },
  },
];

export const MOCK_SCHEMES: Scheme[] = [
  {
    id: "sch-001",
    name: { en: "Kalaignar Magalir Urimai Thittam", ta: "கலைஞர் மகளிர் உரிமைத் திட்டம்" },
    tag: { en: "Direct Benefit Transfer", ta: "நேரடி பணப் பலன்" },
    overview: {
      en: "Monthly financial assistance of ₹1,000 provided directly to eligible women family heads to support economic empowerment.",
      ta: "குடும்பப் பெண் தலைவர்களின் பொருளாதார மேம்பாட்டிற்காக மாதம் ₹1,000 வழங்கும் திட்டம்.",
    },
    department: "Social Welfare",
    benefits: [
      { en: "Direct Bank Transfer of ₹1,000 every month", ta: "மாதந்தோறும் ₹1,000 நேரடி வங்கிப் பரிமாற்றம்" },
      { en: "Direct economic empowerment for women heads", ta: "பெண் குடும்பத் தலைவர்களுக்கான பொருளாதார உதவி" },
    ],
    eligibility: [
      { en: "Annual family income under ₹2.5 Lakhs", ta: "குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் இருக்க வேண்டும்" },
      { en: "Family electricity consumption under 3,600 units/year", ta: "ஆண்டு மின் பயன்பாடு 3,600 யூனிட்டுகளுக்குள் இருக்க வேண்டும்" },
    ],
    documents: [
      { en: "Aadhaar Card", ta: "ஆதார் அட்டை" },
      { en: "Ration Card (Smart Card)", ta: "குடும்ப அட்டை" },
      { en: "Bank Passbook linked with Aadhaar", ta: "ஆதாருடன் இணைக்கப்பட்ட வங்கிக் கணக்கு புத்தகம்" },
    ],
    process: [
      { en: "Fill online/e-Seva application", ta: "இ-சேவை அல்லது இணையத்தில் விண்ணப்பிக்கவும்" },
      { en: "Field verification by VAO / Revenue Inspector", ta: "கிராம நிர்வாக அலுவலர் கள ஆய்வு" },
      { en: "Approval and monthly DBT credit to bank account", ta: "ஒப்புதலுக்குப் பின் வங்கி கணக்கில் வரவு" },
    ],
    source: "https://www.tn.gov.in",
  },
];

export interface UpdateItem {
  id: string;
  categoryId: string;
  category: Bilingual;
  title: Bilingual;
  description: Bilingual;
  date: string;
}

export const MOCK_UPDATES: UpdateItem[] = [
  {
    id: "upd-01",
    categoryId: "announcement",
    category: { en: "Constituency Notice", ta: "தொகுதி அறிவிப்பு" },
    title: { en: "Special Grievance Redressal Day — This Saturday", ta: "சிறப்பு குறைதீர்க்கும் முகாம் — இந்த சனிக்கிழமை" },
    description: {
      en: "Hon'ble MLA will meet citizens directly at the Constituency Taluk Office from 10:00 AM to 02:00 PM.",
      ta: "சட்டமன்ற உறுப்பினர் அவர்கள் தொகுதி தாலுகா அலுவலகத்தில் காலை 10:00 மணி முதல் மதியம் 02:00 மணி வரை பொதுமக்களை நேரடியாக சந்திக்கிறார்.",
    },
    date: "2026-08-16",
  },
  {
    id: "upd-02",
    categoryId: "development",
    category: { en: "Development Work", ta: "வளர்ச்சி பணி" },
    title: { en: "Underground Storm Drain Work 68% Completed", ta: "மழைநீர் வடிகால் பணி 68% முடிவடைந்தது" },
    description: {
      en: "Ward 110 drainage channel connection ongoing to prevent waterlogging during upcoming monsoon.",
      ta: "வார்டு 110-ல் பருவமழைக்கு முன் வெள்ள நீர் தேங்குவதை தவிர்க்கும் வடிகால் இணைப்பு பணிகள் துரிதமாக நடைபெறுகின்றன.",
    },
    date: "2026-08-15",
  },
];