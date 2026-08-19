import { getDb } from "./db";
import { hashPassword } from "./auth";

export async function initDefaultAdminUsers() {
  const { users, announcements, schemes, developmentWorks } = await getDb();
  const existingUsers = await users.countDocuments();
  if (existingUsers > 0) return;

  const defaultPassword = await hashPassword("Aram@2026");
  const now = new Date().toISOString();

  const initialStaff = [
    {
      userId: "usr-super-01",
      name: "Dr. S. Ramanathan",
      email: "superadmin@aram.gov.in",
      mobile: "9876500004",
      role: "super_admin" as const,
      passwordHash: defaultPassword,
      active: true,
      permissions: ["manage_users", "manage_roles", "view_audit_log", "system_config"],
      createdAt: now,
      updatedAt: now,
    },
    {
      userId: "usr-mla-01",
      name: "M. Anbazhagan",
      email: "admin@aram.gov.in",
      mobile: "9876500001",
      role: "constituency_admin" as const,
      passwordHash: defaultPassword,
      active: true,
      permissions: ["view_all_complaints", "assign_department", "verify_resolution", "manage_appointments", "manage_announcements"],
      createdAt: now,
      updatedAt: now,
    },
    {
      userId: "usr-dept-01",
      name: "R. Selvam",
      email: "highways.dept@aram.gov.in",
      mobile: "9876500002",
      role: "department_admin" as const,
      departmentId: "highways",
      departmentName: "Highways & Roads",
      passwordHash: defaultPassword,
      active: true,
      permissions: ["view_dept_complaints", "assign_officer", "review_completion"],
      createdAt: now,
      updatedAt: now,
    },
    {
      userId: "usr-dept-02",
      name: "S. Priya",
      email: "water.dept@aram.gov.in",
      mobile: "9876500005",
      role: "department_admin" as const,
      departmentId: "water",
      departmentName: "Water Supply Board",
      passwordHash: defaultPassword,
      active: true,
      permissions: ["view_dept_complaints", "assign_officer", "review_completion"],
      createdAt: now,
      updatedAt: now,
    },
    {
      userId: "usr-dept-03",
      name: "K. Murugan",
      email: "electricity.dept@aram.gov.in",
      mobile: "9876500006",
      role: "department_admin" as const,
      departmentId: "electricity",
      departmentName: "Electricity Board",
      passwordHash: defaultPassword,
      active: true,
      permissions: ["view_dept_complaints", "assign_officer", "review_completion"],
      createdAt: now,
      updatedAt: now,
    },
    {
      userId: "usr-officer-01",
      name: "Kumar S.",
      email: "kumar.field@aram.gov.in",
      mobile: "9876500003",
      role: "field_officer" as const,
      departmentId: "highways",
      departmentName: "Highways & Roads",
      wardId: "w-110",
      passwordHash: defaultPassword,
      active: true,
      permissions: ["view_assigned_work", "update_work", "submit_completion"],
      createdAt: now,
      updatedAt: now,
    },
    {
      userId: "usr-officer-02",
      name: "Rajan P.",
      email: "rajan.field@aram.gov.in",
      mobile: "9876500007",
      role: "field_officer" as const,
      departmentId: "highways",
      departmentName: "Highways & Roads",
      wardId: "w-111",
      passwordHash: defaultPassword,
      active: true,
      permissions: ["view_assigned_work", "update_work", "submit_completion"],
      createdAt: now,
      updatedAt: now,
    },
    {
      userId: "usr-officer-03",
      name: "Lakshmi V.",
      email: "lakshmi.field@aram.gov.in",
      mobile: "9876500008",
      role: "field_officer" as const,
      departmentId: "water",
      departmentName: "Water Supply Board",
      wardId: "w-110",
      passwordHash: defaultPassword,
      active: true,
      permissions: ["view_assigned_work", "update_work", "submit_completion"],
      createdAt: now,
      updatedAt: now,
    },
    {
      userId: "usr-officer-04",
      name: "Suresh M.",
      email: "suresh.field@aram.gov.in",
      mobile: "9876500009",
      role: "field_officer" as const,
      departmentId: "electricity",
      departmentName: "Electricity Board",
      wardId: "w-112",
      passwordHash: defaultPassword,
      active: true,
      permissions: ["view_assigned_work", "update_work", "submit_completion"],
      createdAt: now,
      updatedAt: now,
    },
    {
      userId: "usr-content-01",
      name: "Meena R.",
      email: "content@aram.gov.in",
      mobile: "9876500010",
      role: "content_admin" as const,
      passwordHash: defaultPassword,
      active: true,
      permissions: ["manage_announcements", "manage_schemes", "manage_development_works"],
      createdAt: now,
      updatedAt: now,
    },
  ];

  for (const user of initialStaff) {
    await users.insertOne(user);
  }

  // Seed sample announcements
  const announcementCount = await announcements.countDocuments();
  if (announcementCount === 0) {
    await announcements.insertOne({
      announcementId: "ann-001",
      title: { en: "Free Medical Camp", ta: "இலவச மருத்துவ முகாம்" },
      description: { en: "A free medical camp will be held at ARAM Community Hall. All residents are welcome. Services include blood pressure check, diabetes screening, and eye check-up.", ta: "ARAM சமுதாய மண்டபத்தில் இலவச மருத்துவ முகாம் நடைபெறும்." },
      date: "2026-09-05",
      time: "9:00 AM – 1:00 PM",
      location: "ARAM Community Hall, Ward 110",
      category: "health",
      published: true,
      createdBy: "usr-mla-01",
      createdAt: now,
      updatedAt: now,
    });
    await announcements.insertOne({
      announcementId: "ann-002",
      title: { en: "Constituency Meeting", ta: "தொகுதி கூட்டம்" },
      description: { en: "Monthly constituency grievance meeting. Citizens can raise their issues directly with the MLA and officials.", ta: "மாதாந்திர தொகுதி குறைதீர்வு கூட்டம். குடிமக்கள் நேரடியாக பிரச்சினைகளை எழுப்பலாம்." },
      date: "2026-08-30",
      time: "10:00 AM",
      location: "MLA Office, Thousand Lights",
      category: "governance",
      published: true,
      createdBy: "usr-mla-01",
      createdAt: now,
      updatedAt: now,
    });
  }

  // Seed sample schemes
  const schemeCount = await schemes.countDocuments();
  if (schemeCount === 0) {
    await schemes.insertOne({
      schemeId: "sch-001",
      name: { en: "Tamil Nadu Housing Scheme", ta: "தமிழ்நாடு வீடு திட்டம்" },
      department: "works",
      description: { en: "Free housing for eligible low-income families under the Tamil Nadu Housing Board scheme.", ta: "தமிழ்நாடு வீட்டுவசதி வாரிய திட்டம் — தகுதியான குறைந்த வருமான குடும்பங்களுக்கு இலவச வீடு." },
      benefits: ["Free house construction", "25 sq.yd plot", "Basic amenities included"],
      eligibility: ["Annual income below ₹2 lakh", "No existing house ownership", "TN resident for 5+ years"],
      documents: ["Aadhaar Card", "Income Certificate", "Residence Proof", "Caste Certificate (if applicable)"],
      applicationProcess: "Visit the Collectorate or apply online at tn.gov.in/housing",
      applicationLink: "https://tn.gov.in/housing",
      active: true,
      createdBy: "usr-content-01",
      createdAt: now,
      updatedAt: now,
    });
    await schemes.insertOne({
      schemeId: "sch-002",
      name: { en: "CM Solar Power Scheme", ta: "முதலமைச்சர் சூரிய மின்சார திட்டம்" },
      department: "electricity",
      description: { en: "Free solar panels for eligible households to reduce electricity bills.", ta: "மின்சார கட்டணத்தை குறைக்க தகுதியான குடும்பங்களுக்கு இலவச சூரிய மின் பலகைகள்." },
      benefits: ["Free rooftop solar installation", "Reduced electricity bill", "Excess power sold to grid"],
      eligibility: ["Residential consumer", "Roof area minimum 100 sq.ft", "Monthly bill above ₹500"],
      documents: ["Aadhaar Card", "Electricity bill copy", "Property ownership proof"],
      applicationProcess: "Apply at TANGEDCO office or tneb.gov.in",
      applicationLink: "https://tneb.gov.in",
      active: true,
      createdBy: "usr-content-01",
      createdAt: now,
      updatedAt: now,
    });
  }

  // Seed sample development works
  const devCount = await developmentWorks.countDocuments();
  if (devCount === 0) {
    await developmentWorks.insertOne({
      workId: "dev-001",
      name: { en: "Anna Salai Road Relaying", ta: "அண்ணா சாலை மறுபரப்பு" },
      location: "Anna Salai, Ward 110",
      department: "highways",
      description: { en: "Complete relaying of Anna Salai from Thousand Lights junction to Gemini flyover. Includes new footpaths and pedestrian crossings.", ta: "ஆயிரம் விளக்கு சந்தி முதல் ஜெமினி மேம்பாலம் வரை சாலை மறுபரப்பு பணி." },
      startDate: "2026-07-01",
      expectedCompletion: "2026-09-30",
      status: "in_progress",
      progressPercent: 65,
      published: true,
      createdBy: "usr-content-01",
      createdAt: now,
      updatedAt: now,
    });
    await developmentWorks.insertOne({
      workId: "dev-002",
      name: { en: "Ward 112 Underground Drainage", ta: "வார்டு 112 நிலத்தடி வடிகால்" },
      location: "Nungambakkam, Ward 112",
      department: "drainage",
      description: { en: "New underground drainage system for Ward 112 to prevent waterlogging during monsoon season.", ta: "பருவமழையின்போது தண்ணீர் தேக்கம் தவிர்க்க வார்டு 112 நிலத்தடி வடிகால் அமைப்பு." },
      startDate: "2026-08-15",
      expectedCompletion: "2026-11-30",
      status: "in_progress",
      progressPercent: 20,
      published: true,
      createdBy: "usr-content-01",
      createdAt: now,
      updatedAt: now,
    });
  }
}
