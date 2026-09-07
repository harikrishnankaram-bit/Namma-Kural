import { getDb } from "./db";
import { hashPassword } from "./auth";

export async function initDefaultAdminUsers() {
  try {
    const { users, announcements, schemes, developmentWorks } = await getDb();

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
    await users.updateOne(
      { $or: [{ email: user.email }, { userId: user.userId }] },
      { $set: user },
      { upsert: true }
    );
  }

  // Seed sample announcements
  const announcementCount = await announcements.countDocuments();
  if (announcementCount === 0) {
    await announcements.insertOne({
      announcementId: "ann-001",
      title: { en: "Free Medical Camp", ta: "இலவச மருத்துவ முகாம்" },
      description: { en: "A free medical camp will be held at Tiruchengode Community Hall. All residents are welcome. Services include blood pressure check, diabetes screening, and eye check-up.", ta: "திருச்செங்கோடு சமுதாய மண்டபத்தில் இலவச மருத்துவ முகாம் நடைபெறும்." },
      date: "2026-09-05",
      time: "9:00 AM – 1:00 PM",
      location: "Tiruchengode Community Hall, Ward 1",
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
      location: "MLA Office, Tiruchengode",
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
      name: { en: "Kalaignar Magalir Urimai Thittam", ta: "கலைஞர் மகளிர் உரிமைத் திட்டம்" },
      department: "works",
      description: { en: "Monthly financial assistance of ₹1,000 provided directly to eligible women family heads in Tiruchengode.", ta: "குடும்பப் பெண் தலைவர்களின் பொருளாதார மேம்பாட்டிற்காக மாதம் ₹1,000 வழங்கும் திட்டம்." },
      benefits: ["Direct Bank Transfer of ₹1,000 every month", "Economic empowerment for women"],
      eligibility: ["Annual family income below ₹2.5 lakh", "Family electricity consumption under 3,600 units/year"],
      documents: ["Aadhaar Card", "Ration Card", "Bank Passbook"],
      applicationProcess: "Fill online/e-Seva application or visit Taluk Office",
      applicationLink: "https://tn.gov.in",
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
      name: { en: "Tiruchengode Main Road Relaying", ta: "திருச்செங்கோடு பிரதான சாலை மறுபரப்பு" },
      location: "Main Road, Ward 1",
      department: "highways",
      description: { en: "Complete relaying of Tiruchengode Main Road from Bus Stand junction to Taluk Office. Includes new footpaths.", ta: "பேருந்து நிலையம் முதல் தாலுகா அலுவலகம் வரை சாலை மறுபரப்பு பணி." },
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
      name: { en: "Ward 2 Underground Drainage", ta: "வார்டு 2 நிலத்தடி வடிகால்" },
      location: "Sankari Road, Ward 2",
      department: "drainage",
      description: { en: "New underground drainage system for Ward 2 to prevent waterlogging during monsoon season.", ta: "பருவமழையின்போது தண்ணீர் தேக்கம் தவிர்க்க வார்டு 2 நிலத்தடி வடிகால் அமைப்பு." },
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

  // Seed sample complaints
  const { complaints } = await getDb();
  const complaintCount = await complaints.countDocuments();
  if (complaintCount === 0) {
    await complaints.insertOne({
      complaintId: "ARAM-2026-000001",
      citizenId: "CITIZEN-01",
      citizenMobile: "9876543210",
      citizenName: "R. Krishnan",
      categoryId: "water",
      description: "Water pipeline leakage on main road",
      address: "Tiruchengode Main Road, Namakkal, Tamil Nadu",
      wardId: "w-01",
      lat: 11.3787,
      lng: 77.8953,
      priority: "medium",
      status: "new",
      departmentId: "water",
      submittedAt: "2026-08-28",
      updatedAt: now,
      timeline: [
        { stage: "submitted", label: { en: "Complaint Registered", ta: "புகார் பதிவு செய்யப்பட்டது" }, date: "2026-08-28", time: "10:15 AM", note: { en: "Grievance successfully submitted by resident.", ta: "புகார் சமர்ப்பிக்கப்பட்டது." }, done: true }
      ]
    });

    await complaints.insertOne({
      complaintId: "ARAM-2026-000002",
      citizenId: "CITIZEN-02",
      citizenMobile: "9876543211",
      citizenName: "S. Murugan",
      categoryId: "electricity",
      description: "Streetlight blinking and sparking",
      address: "Sankari Road, Tiruchengode",
      wardId: "w-02",
      lat: 11.3850,
      lng: 77.8900,
      priority: "high",
      status: "in_progress",
      departmentId: "electricity",
      assignedOfficer: "Suresh M.",
      submittedAt: "2026-08-26",
      updatedAt: now,
      timeline: [
        { stage: "submitted", label: { en: "Complaint Registered", ta: "புகார் பதிவு செய்யப்பட்டது" }, date: "2026-08-26", time: "09:00 AM", note: { en: "Grievance submitted.", ta: "புகார் சமர்ப்பிக்கப்பட்டது." }, done: true },
        { stage: "dept_assigned", label: { en: "Department Assigned", ta: "துறைக்கு ஒதுக்கப்பட்டது" }, date: "2026-08-26", time: "11:30 AM", note: { en: "Assigned to Electricity Department.", ta: "மின்சார துறைக்கு ஒதுக்கப்பட்டது." }, done: true },
        { stage: "officer_assigned", label: { en: "Officer Assigned", ta: "அலுவலர் நியமிக்கப்பட்டார்" }, date: "2026-08-26", time: "02:00 PM", note: { en: "Field officer Suresh M. assigned.", ta: "கள அலுவலர் நியமிக்கப்பட்டார்." }, done: true },
        { stage: "work_started", label: { en: "Work Started", ta: "பணி தொடங்கியது" }, date: "2026-08-27", time: "10:00 AM", note: { en: "Repair commenced on site.", ta: "பணி தொடங்கியது." }, done: true }
      ]
    });

    await complaints.insertOne({
      complaintId: "ARAM-2026-000003",
      citizenId: "CITIZEN-03",
      citizenMobile: "9876543212",
      citizenName: "A. Lakshmi",
      categoryId: "highways",
      description: "Pothole needs immediate patching",
      address: "Velur Road West, Tiruchengode",
      wardId: "w-05",
      lat: 11.3690,
      lng: 77.8880,
      priority: "medium",
      status: "completed",
      departmentId: "highways",
      assignedOfficer: "Kumar S.",
      submittedAt: "2026-08-25",
      updatedAt: now,
      timeline: [
        { stage: "submitted", label: { en: "Complaint Registered", ta: "புகார் பதிவு செய்யப்பட்டது" }, date: "2026-08-25", time: "08:30 AM", note: { en: "Grievance registered.", ta: "புகார் சமர்ப்பிக்கப்பட்டது." }, done: true },
        { stage: "dept_assigned", label: { en: "Department Assigned", ta: "துறைக்கு ஒதுக்கப்பட்டது" }, date: "2026-08-25", time: "10:00 AM", note: { en: "Assigned to Highways Department.", ta: "நெடுஞ்சாலை துறைக்கு ஒதுக்கப்பட்டது." }, done: true },
        { stage: "officer_assigned", label: { en: "Officer Assigned", ta: "அலுவலர் நியமிக்கப்பட்டார்" }, date: "2026-08-25", time: "01:30 PM", note: { en: "Field officer Kumar S. assigned.", ta: "கள அலுவலர் நியமிக்கப்பட்டார்." }, done: true },
        { stage: "work_started", label: { en: "Work Started", ta: "பணி தொடங்கியது" }, date: "2026-08-25", time: "03:00 PM", note: { en: "Relaying commenced.", ta: "பணி தொடங்கியது." }, done: true },
        { stage: "completion_submitted", label: { en: "Work Completed", ta: "பணி நிறைவடைந்தது" }, date: "2026-08-26", time: "04:30 PM", note: { en: "Pothole filled and road leveled.", ta: "பணி நிறைவுற்றது." }, done: true }
      ]
    });
  }

  // Seed sample appointments
  const { appointments } = await getDb();
  const apptCount = await appointments.countDocuments();
  if (apptCount === 0) {
    await appointments.insertOne({
      appointmentId: "MLA-APT-1001",
      citizenId: "CITIZEN-01",
      citizenName: "R. Krishnan",
      fullName: "R. Krishnan",
      mobile: "9876543210",
      mobileNumber: "9876543210",
      email: "krishnan.r@example.com",
      wardId: "w-01",
      wardName: "Tiruchengode Main Road",
      appointmentDate: "2026-09-05",
      preferredDate: "2026-09-05",
      appointmentTime: "10:30 AM",
      preferredTime: "10:30 AM",
      purpose: "Discussion on Ward 1 drainage issues and road repairs",
      description: "Requesting MLA attention to recurring monsoon flooding in residential area.",
      status: "pending",
      venue: "MLA Constituency Office, Tiruchengode, Namakkal",
      location: "MLA Constituency Office, Tiruchengode, Namakkal",
      adminRemarks: "",
      createdAt: now,
      updatedAt: now,
    });

    await appointments.insertOne({
      appointmentId: "MLA-APT-1002",
      citizenId: "CITIZEN-02",
      citizenName: "S. Murugan",
      fullName: "S. Murugan",
      mobile: "9876543211",
      mobileNumber: "9876543211",
      email: "murugan.s@example.com",
      wardId: "w-02",
      wardName: "Sankari Road Sector",
      appointmentDate: "2026-09-06",
      preferredDate: "2026-09-06",
      appointmentTime: "11:15 AM",
      preferredTime: "11:15 AM",
      confirmedDate: "2026-09-06",
      confirmedTime: "11:15 AM",
      purpose: "Request for high-mast street light near government school",
      description: "School students safety during evening hours.",
      status: "approved",
      venue: "MLA Constituency Office, Tiruchengode, Namakkal",
      location: "MLA Constituency Office, Tiruchengode, Namakkal",
      mlaRepresentative: "Hon. Member of Legislative Assembly",
      adminRemarks: "Approved for priority review with MLA.",
      createdAt: now,
      updatedAt: now,
    });

    await appointments.insertOne({
      appointmentId: "MLA-APT-1003",
      citizenId: "CITIZEN-03",
      citizenName: "A. Lakshmi",
      fullName: "A. Lakshmi",
      mobile: "9876543212",
      mobileNumber: "9876543212",
      email: "lakshmi.a@example.com",
      wardId: "w-03",
      wardName: "Taluk Office Zone",
      appointmentDate: "2026-09-07",
      preferredDate: "2026-09-07",
      appointmentTime: "04:00 PM",
      preferredTime: "04:00 PM",
      purpose: "Community park renovation and senior citizen walking track",
      description: "Resident association appeal for neighborhood park enhancement.",
      status: "under_review",
      venue: "MLA Constituency Office, Tiruchengode, Namakkal",
      location: "MLA Constituency Office, Tiruchengode, Namakkal",
      adminRemarks: "Under review with MLA personal secretary.",
      createdAt: now,
      updatedAt: now,
    });
  }
  } catch (err) {
    console.warn("[Seed] initDefaultAdminUsers encountered non-fatal error:", err);
  }
}


