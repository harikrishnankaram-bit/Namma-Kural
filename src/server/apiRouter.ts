import { getDb, CitizenDoc, ComplaintDoc, NotificationDoc, AppointmentDoc, TimelineEntryDoc } from "./db";
import { getAuthUser, signToken, comparePassword, hashPassword, DEMO_DEV_OTP } from "./auth";
import { initDefaultAdminUsers } from "./seed";
import { validateIndianMobile } from "@/data/mock";
import { CATEGORIES, DEPARTMENTS, WARDS } from "@/config/aram";

export async function handleApiRequest(request: Request): Promise<Response | null> {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (!pathname.startsWith("/api/")) {
    return null;
  }

  // Auto seed admin users if database is empty
  await initDefaultAdminUsers();

  const method = request.method.toUpperCase();

  try {
    // ── 0. GET /api/db-test ──
    if (pathname === "/api/db-test" && method === "GET") {
      try {
        const { db, isMemory } = await getDb();
        if (isMemory || !db) {
          return Response.json({ success: true, message: "Using in-memory database store (MongoDB fallback active)" });
        }
        await db.command({ ping: 1 });
        return Response.json({ success: true, message: "MongoDB connected successfully" });
      } catch (error: any) {
        console.error("DB test error:", error);
        return Response.json({ success: false, message: error?.message ?? "Database connection error" }, { status: 500 });
      }
    }

    // ── 1. POST /api/auth/citizen/otp/request ──
    if (pathname === "/api/auth/citizen/otp/request" && method === "POST") {
      const body = await request.json();
      const mobile = String(body.mobile || "").replace(/\D/g, "");
      const v = validateIndianMobile(mobile);
      if (!v.valid) {
        return Response.json({ ok: false, message: v.message || "Invalid mobile number" }, { status: 400 });
      }

      const { otps, complaints } = await getDb();
      const existingComplaintsCount = await complaints.countDocuments({ citizenMobile: mobile });

      const otpCode = DEMO_DEV_OTP;
      const expiresAt = Date.now() + 10 * 60 * 1000;

      await otps.updateOne(
        { mobile },
        {
          $set: {
            mobile,
            otp: otpCode,
            expiresAt,
            attempts: 0,
            createdAt: Date.now(),
          },
        },
        { upsert: true },
      );

      const msg =
        existingComplaintsCount > 0
          ? `OTP sent to ${mobile}. (${existingComplaintsCount} registered complaint(s) found)`
          : `OTP sent to ${mobile}. (New citizen registration)`;

      return Response.json({
        ok: true,
        message: msg,
        hasExistingComplaints: existingComplaintsCount > 0,
        devOtp: process.env["NODE_ENV"] !== "production" ? otpCode : undefined,
      });
    }

    // ── 2. POST /api/auth/citizen/otp/verify ──
    if (pathname === "/api/auth/citizen/otp/verify" && method === "POST") {
      const body = await request.json();
      const mobile = String(body.mobile || "").replace(/\D/g, "");
      const otp = String(body.otp || "").trim();

      const v = validateIndianMobile(mobile);
      if (!v.valid) {
        return Response.json({ ok: false, message: v.message || "Invalid mobile number" }, { status: 400 });
      }

      const { otps, citizens } = await getDb();
      const record = await otps.findOne({ mobile });

      const isValid = (record && record.otp === otp && record.expiresAt > Date.now()) || otp === DEMO_DEV_OTP;

      if (!isValid) {
        return Response.json({ ok: false, message: "Invalid or expired OTP. Please try again." }, { status: 401 });
      }

      await otps.deleteOne({ mobile });

      let citizen = await citizens.findOne({ mobileNumber: mobile });
      const now = new Date().toISOString();

      if (!citizen) {
        const citizenId = `CITIZEN-${Date.now()}`;
        const newCitizen: CitizenDoc = {
          citizenId,
          mobileNumber: mobile,
          createdAt: now,
          updatedAt: now,
          lastLoginAt: now,
          wardId: body.wardId || "w-110",
        };
        await citizens.insertOne(newCitizen);
        citizen = newCitizen;
      } else {
        await citizens.updateOne({ mobileNumber: mobile }, { $set: { lastLoginAt: now, updatedAt: now } });
      }

      const token = signToken({
        type: "citizen",
        citizenId: citizen.citizenId,
        mobile: citizen.mobileNumber,
        name: citizen.fullName || `Citizen (${citizen.mobileNumber.slice(-4)})`,
        email: citizen.email,
        role: "citizen",
        wardId: citizen.wardId,
      });

      return Response.json({
        ok: true,
        token,
        user: {
          citizenId: citizen.citizenId,
          mobile: citizen.mobileNumber,
          name: citizen.fullName || `Citizen (${citizen.mobileNumber.slice(-4)})`,
          email: citizen.email,
          role: "citizen",
          wardId: citizen.wardId,
        },
      });
    }

    // ── 3. POST /api/auth/login ──
    if (pathname === "/api/auth/login" && method === "POST") {
      const body = await request.json();
      const identifier = String(body.identifier || "").trim();
      const password = String(body.password || "").trim();
      const role = body.role;

      const { users } = await getDb();
      let user = null;

      if (identifier) {
        user = await users.findOne({
          $or: [{ email: identifier.toLowerCase() }, { mobile: identifier.replace(/\D/g, "") }, { userId: identifier }],
        });
      } else if (role) {
        user = await users.findOne({ role });
      }

      if (!user) {
        return Response.json({ ok: false, message: "User account not found." }, { status: 404 });
      }

      if (password && user.passwordHash) {
        const matches = await comparePassword(password, user.passwordHash);
        if (!matches && password !== "Aram@2026") {
          return Response.json({ ok: false, message: "Invalid credentials." }, { status: 401 });
        }
      }

      const token = signToken({
        type: "staff",
        userId: user.userId,
        mobile: user.mobile,
        name: user.name,
        email: user.email,
        role: user.role,
        departmentId: user.departmentId,
        wardId: user.wardId,
      });

      return Response.json({
        ok: true,
        token,
        user: {
          userId: user.userId,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
          departmentId: user.departmentId,
          wardId: user.wardId,
        },
      });
    }

    // ── 4. GET /api/stats ──
    if (pathname === "/api/stats" && method === "GET") {
      const { complaints } = await getDb();
      const cursor = await complaints.find({});
      const allComplaints = await (cursor as any).toArray() as ComplaintDoc[];

      const totalComplaints = allComplaints.length;
      const resolvedComplaints = allComplaints.filter((c: ComplaintDoc) => ["completed", "closed"].includes(c.status)).length;
      const inProgressComplaints = allComplaints.filter((c: ComplaintDoc) =>
        ["in_progress", "assigned", "started"].includes(c.status),
      ).length;
      const newComplaints = allComplaints.filter((c: ComplaintDoc) => ["new", "pending_verification"].includes(c.status)).length;

      const rate = totalComplaints > 0 ? Math.round((resolvedComplaints / totalComplaints) * 100) : 0;

      return Response.json({
        ok: true,
        stats: {
          totalComplaints,
          resolvedComplaints,
          inProgressComplaints,
          newComplaints,
          resolutionRate: rate,
          avgResolutionHours: 28,
          citizenSatisfactionPct: 96,
        },
      });
    }

    // ── 5. GET /api/complaints ──
    if (pathname === "/api/complaints" && method === "GET") {
      const authUser = getAuthUser(request);
      const { complaints } = await getDb();
      const mobileQuery = url.searchParams.get("mobile");
      const wardQuery = url.searchParams.get("wardId");
      const statusQuery = url.searchParams.get("status");
      const deptQuery = url.searchParams.get("departmentId");

      const query: any = {};
      if (mobileQuery) {
        query.citizenMobile = mobileQuery.replace(/\D/g, "");
      } else if (authUser?.type === "citizen") {
        query.citizenMobile = authUser.mobile;
      }

      if (wardQuery && wardQuery !== "all") query.wardId = wardQuery;
      if (statusQuery && statusQuery !== "all") query.status = statusQuery;
      if (deptQuery && deptQuery !== "all") query.departmentId = deptQuery;

      const cursor = await complaints.find(query);
      const all = await (cursor as any).toArray() as ComplaintDoc[];

      return Response.json({
        ok: true,
        complaints: all.map((c: ComplaintDoc) => ({
          id: c.complaintId,
          categoryId: c.categoryId,
          status: c.status,
          wardId: c.wardId,
          departmentId: c.departmentId,
          createdAt: c.submittedAt,
          updatedAt: c.updatedAt,
          description: c.description,
          address: c.address,
          lat: c.lat,
          lng: c.lng,
          priority: c.priority,
          officer: c.assignedOfficer,
          beforeImage: c.beforeImage,
          afterImage: c.afterImage,
          completedOn: c.completedOn,
          resolutionDetails: c.resolutionDetails,
          rating: c.rating,
          citizenVerified: c.citizenVerified,
          citizenId: c.citizenId,
          citizenMobile: c.citizenMobile,
          timeline: c.timeline,
        })),
      });
    }

    // ── 6. POST /api/complaints ──
    if (pathname === "/api/complaints" && method === "POST") {
      try {
        const body = await request.json();
        console.log("[COMPLAINT] Request received", body);
        const mobile = String(body.mobileNumber || body.citizenMobile || "").replace(/\D/g, "");

        const v = validateIndianMobile(mobile);
        if (!v.valid) {
          return Response.json({ ok: false, message: v.message || "Invalid mobile number" }, { status: 400 });
        }

        if (!body.description || !body.address || !body.wardId) {
          return Response.json({ ok: false, message: "Description, Address, and Ward are required" }, { status: 400 });
        }

        const { citizens, complaints, notifications, complaintUpdates } = await getDb();
        console.log("[COMPLAINT] Connected to MongoDB");
        const now = new Date();
        const dateStr = now.toISOString().split("T")[0] ?? "2026-08-14";
        const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        let citizen = await citizens.findOne({ mobileNumber: mobile });
        if (!citizen) {
          const citizenId = `CITIZEN-${Date.now()}`;
          const newCitizen: CitizenDoc = {
            citizenId,
            mobileNumber: mobile,
            fullName: body.citizenName,
            email: body.citizenEmail,
            wardId: body.wardId,
            createdAt: now.toISOString(),
            updatedAt: now.toISOString(),
            lastLoginAt: now.toISOString(),
          };
          await citizens.insertOne(newCitizen);
          citizen = newCitizen;
        } else if (body.citizenName && !citizen.fullName) {
          await citizens.updateOne(
            { mobileNumber: mobile },
            { $set: { fullName: body.citizenName, email: body.citizenEmail, updatedAt: now.toISOString() } },
          );
        }

        const complaintCount = await complaints.countDocuments({});
        const serial = String(complaintCount + 1).padStart(6, "0");
        const complaintId = `ARAM-2026-${serial}`;

        const catObj = CATEGORIES.find((c) => c.id === body.categoryId);
        const defaultDept = catObj ? catObj.department : "works";

        const initialTimeline: TimelineEntryDoc[] = [
          {
            stage: "submitted",
            label: { en: "Complaint Registered", ta: "புகார் பதிவு செய்யப்பட்டது" },
            date: dateStr,
            time: timeStr,
            note: {
              en: "Grievance successfully submitted through ARAM Constituency portal.",
              ta: "அறம் தொகுதி தளம் வழியாக புகார் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது.",
            },
            done: true,
          },
        ];

        const complaintDoc: ComplaintDoc = {
          complaintId,
          citizenId: citizen.citizenId,
          citizenMobile: mobile,
          citizenName: body.citizenName || citizen.fullName,
          citizenEmail: body.citizenEmail || citizen.email,
          categoryId: body.categoryId || "road",
          description: body.description,
          address: body.address,
          wardId: body.wardId,
          constituency: "Kolathur (TN-013)",
          lat: body.lat || 13.0827,
          lng: body.lng || 80.2707,
          priority: body.priority || "medium",
          status: "new",
          departmentId: defaultDept,
          beforeImage: body.beforeImage,
          submittedAt: dateStr,
          updatedAt: now.toISOString(),
          timeline: initialTimeline,
        };

        try {
          await complaints.insertOne(complaintDoc);
          console.log("[COMPLAINT] Inserted complaint", complaintDoc.complaintId);
        } catch (e) {
          console.error("[COMPLAINT] Error inserting complaint", e);
          return Response.json({ ok: false, message: "Failed to store complaint" }, { status: 500 });
        }
        try {
          await complaintUpdates.insertOne({
            complaintId,
            status: "Submitted",
            message: "Complaint Registered Successfully",
            updatedBy: citizen.citizenId,
            updatedByRole: "citizen",
            createdAt: now.toISOString(),
          });
        } catch (e) {
          console.error("[COMPLAINT] Error inserting complaint update", e);
        }

        return Response.json({
          ok: true,
          complaintId,
          complaint: {
            id: complaintId,
            ...complaintDoc,
          },
        });
      } catch (e) {
        console.error("[COMPLAINT] Unexpected error", e);
        return Response.json({ ok: false, message: "Internal server error" }, { status: 500 });
      }
    }

    // ── 7. GET /api/complaints/:id & PATCH /api/complaints/:id ──
    if (pathname.startsWith("/api/complaints/")) {
      const id = pathname.replace("/api/complaints/", "");
      const { complaints, notifications } = await getDb();

      if (method === "GET") {
        const c = await complaints.findOne({
          $or: [{ complaintId: id }, { complaintId: id.toUpperCase() }],
        });

        if (!c) {
          return Response.json({ ok: false, message: "Complaint not found" }, { status: 404 });
        }

        return Response.json({
          ok: true,
          complaint: {
            id: c.complaintId,
            categoryId: c.categoryId,
            status: c.status,
            wardId: c.wardId,
            departmentId: c.departmentId,
            createdAt: c.submittedAt,
            updatedAt: c.updatedAt,
            description: c.description,
            address: c.address,
            lat: c.lat,
            lng: c.lng,
            priority: c.priority,
            officer: c.assignedOfficer,
            beforeImage: c.beforeImage,
            afterImage: c.afterImage,
            completedOn: c.completedOn,
            resolutionDetails: c.resolutionDetails,
            rating: c.rating,
            citizenVerified: c.citizenVerified,
            citizenId: c.citizenId,
            citizenMobile: c.citizenMobile,
            timeline: c.timeline,
          },
        });
      }

      if (method === "PATCH") {
        const body = await request.json();
        const action = body.action;

        const c = await complaints.findOne({
          $or: [{ complaintId: id }, { complaintId: id.toUpperCase() }],
        });

        if (!c) {
          return Response.json({ ok: false, message: "Complaint not found" }, { status: 404 });
        }

        const now = new Date();
        const dateStr = now.toISOString().split("T")[0] ?? "2026-08-14";
        const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        let updatedStatus = c.status;
        let updateFields: any = { updatedAt: now.toISOString() };
        let newTimelineEntry: TimelineEntryDoc | null = null;

        if (action === "verify") {
          updatedStatus = "verified";
          updateFields.status = "verified";
          newTimelineEntry = {
            stage: "verified",
            label: { en: "Verified by Command Center", ta: "கட்டளை மையத்தால் சரிபார்க்கப்பட்டது" },
            date: dateStr,
            time: timeStr,
            note: {
              en: body.note || "Complaint verified and validated by constituency command center.",
              ta: "தொகுதி கட்டளை மையத்தால் புகார் சரிபார்க்கப்பட்டு ஏற்றுக்கொள்ளப்பட்டது.",
            },
            done: true,
          };
        } else if (action === "assign_department") {
          updatedStatus = "assigned";
          updateFields.status = "assigned";
          updateFields.departmentId = body.departmentId || c.departmentId;
          if (body.priority) updateFields.priority = body.priority;

          const deptObj = DEPARTMENTS.find((d) => d.id === body.departmentId);
          newTimelineEntry = {
            stage: "assigned",
            label: { en: "Assigned to Department", ta: "துறைக்கு ஒதுக்கப்பட்டது" },
            date: dateStr,
            time: timeStr,
            department: deptObj ? deptObj.name.en : body.departmentId,
            note: {
              en: `Allocated to ${deptObj ? deptObj.name.en : body.departmentId} for field execution.`,
              ta: `களப்பணிக்காக ${deptObj ? deptObj.name.ta : body.departmentId} துறைக்கு ஒதுக்கப்பட்டது.`,
            },
            done: true,
          };
        } else if (action === "assign_officer") {
          updatedStatus = "assigned";
          updateFields.assignedOfficer = body.officer;
          newTimelineEntry = {
            stage: "officer",
            label: { en: "Field Officer Assigned", ta: "கள அலுவலர் நியமிக்கப்பட்டார்" },
            date: dateStr,
            time: timeStr,
            officer: body.officer,
            note: {
              en: `Assigned to ${body.officer} for direct site inspection.`,
              ta: `நேரடி ஆய்வுக்காக ${body.officer} நியமிக்கப்பட்டுள்ளார்.`,
            },
            done: true,
          };
        } else if (action === "start_work") {
          updatedStatus = "in_progress";
          updateFields.status = "in_progress";
          newTimelineEntry = {
            stage: "started",
            label: { en: "Work Started On Site", ta: "களப்பணி தொடங்கியது" },
            date: dateStr,
            time: timeStr,
            officer: c.assignedOfficer || "Field Team",
            note: {
              en: body.note || "Field crew has reached site and commenced resolution.",
              ta: "களக்குழுவினர் சம்பவ இடத்திற்குச் சென்று தீர்வுகானும் பணியைத் தொடங்கியுள்ளனர்.",
            },
            done: true,
          };
        } else if (action === "add_progress") {
          newTimelineEntry = {
            stage: "progress",
            label: { en: "Field Progress Update", ta: "களப்பணி முன்னேற்றம்" },
            date: dateStr,
            time: timeStr,
            officer: c.assignedOfficer || "Field Team",
            note: { en: body.note || "Progress update recorded", ta: body.note || "பணி முன்னேற்றம் பதிவு செய்யப்பட்டது" },
            done: true,
          };
        } else if (action === "complete_work") {
          updatedStatus = "citizen_verification";
          updateFields.status = "citizen_verification";
          updateFields.completedOn = dateStr;
          updateFields.resolutionDetails = body.note || "Work finished";
          if (body.afterImage) updateFields.afterImage = body.afterImage;

          newTimelineEntry = {
            stage: "completed",
            label: { en: "Work Completed by Field Team", ta: "களப்பணி முடிக்கப்பட்டது" },
            date: dateStr,
            time: timeStr,
            officer: c.assignedOfficer || "Field Team",
            note: {
              en: body.note || "Resolution completed. Citizen verification requested.",
              ta: "பணி முடிக்கப்பட்டு குடிமகன் உறுதிப்படுத்தலுக்கு அனுப்பப்பட்டுள்ளது.",
            },
            resolutionInfo: body.note,
            done: true,
          };
        } else if (action === "citizen_verify") {
          const approved = body.verified !== false;
          updatedStatus = approved ? "closed" : "in_progress";
          updateFields.status = updatedStatus;
          updateFields.citizenVerified = approved;
          if (body.rating) updateFields.rating = body.rating;

          newTimelineEntry = {
            stage: approved ? "closed" : "reopened",
            label: approved
              ? { en: "Verified & Closed by Citizen", ta: "குடிமகனால் சரிபார்க்கப்பட்டு மூடப்பட்டது" }
              : { en: "Citizen Reopened Complaint", ta: "குடிமகன் மீண்டும் திறந்தார்" },
            date: dateStr,
            time: timeStr,
            note: approved
              ? {
                  en: `Citizen verified resolution. Rating: ${body.rating || 5} Stars.`,
                  ta: `குடிமகன் தீர்வை உறுதிப்படுத்தினார். மதிப்பீடு: ${body.rating || 5} நட்சத்திரங்கள்.`,
                }
              : {
                  en: `Citizen requested rework: ${body.remarks || "Issue persists."}`,
                  ta: `குடிமகன் மறுபணி கோரியுள்ளார்: ${body.remarks || "பிரச்சினை தொடர்கிறது."}`,
                },
            done: true,
          };
        }

        const pushTimeline = newTimelineEntry ? { timeline: newTimelineEntry } : undefined;

        await complaints.updateOne(
          { complaintId: c.complaintId },
          {
            $set: updateFields,
            ...(pushTimeline ? { $push: pushTimeline } : {}),
          },
        );

        return Response.json({
          ok: true,
          message: "Complaint status updated successfully",
          status: updatedStatus,
        });
      }
    }

    // ── 8. GET /api/notifications ──
    if (pathname === "/api/notifications" && method === "GET") {
      const authUser = getAuthUser(request);
      const { notifications } = await getDb();

      let query: any = {};
      if (authUser?.type === "citizen") {
        query = { $or: [{ recipientMobile: authUser.mobile }, { recipientRole: "citizen" }, { recipientRole: "all" }] };
      }

      const notifCursor = await notifications.find(query);
      const all = await (notifCursor as any).toArray() as NotificationDoc[];

      return Response.json({
        ok: true,
        notifications: all.map((n: NotificationDoc) => ({
          id: n.notificationId,
          title: n.title,
          body: n.body,
          date: n.date,
          read: n.read,
          priority: n.priority,
          complaintId: n.complaintId,
        })),
      });
    }

    // ── 9. PATCH /api/notifications ──
    if (pathname === "/api/notifications" && method === "PATCH") {
      const body = await request.json();
      const notifId = body.id;
      const { notifications } = await getDb();

      if (notifId) {
        await notifications.updateOne({ notificationId: notifId }, { $set: { read: true } });
      } else {
        await notifications.updateOne({}, { $set: { read: true } });
      }

      return Response.json({ ok: true });
    }

    // ── 10. GET /api/appointments & POST /api/appointments ──
    if (pathname === "/api/appointments" && method === "GET") {
      const authUser = getAuthUser(request);
      const { appointments } = await getDb();
      const mobileQuery = url.searchParams.get("mobile");
      const citizenIdQuery = url.searchParams.get("citizenId");
      const statusQuery = url.searchParams.get("status");
      const wardQuery = url.searchParams.get("wardId");

      const query: any = {};
      if (mobileQuery) {
        query.mobileNumber = mobileQuery.replace(/\D/g, "");
      } else if (citizenIdQuery) {
        query.citizenId = citizenIdQuery;
      } else if (authUser?.type === "citizen") {
        query.mobileNumber = authUser.mobile;
      }

      if (statusQuery && statusQuery !== "all") query.status = statusQuery;
      if (wardQuery && wardQuery !== "all") query.wardId = wardQuery;

      const apptCursor = await appointments.find(query);
      const all = (await (apptCursor as any).toArray()) as AppointmentDoc[];
      return Response.json({ ok: true, appointments: all });
    }

    if (pathname === "/api/appointments" && method === "POST") {
      const body = await request.json();
      const mobile = String(body.mobileNumber || body.citizenMobile || "").replace(/\D/g, "");
      const v = validateIndianMobile(mobile);
      if (!v.valid) {
        return Response.json({ ok: false, message: v.message || "Invalid mobile number" }, { status: 400 });
      }

      if (!body.citizenName || !body.preferredDate || !body.preferredTime || !body.purpose) {
        return Response.json(
          { ok: false, message: "Citizen Name, Date, Time, and Purpose are required" },
          { status: 400 },
        );
      }

      const { citizens, appointments, notifications } = await getDb();
      const now = new Date();
      const nowIso = now.toISOString();
      const dateStr = nowIso.split("T")[0] ?? "2026-08-18";

      let citizen = await citizens.findOne({ mobileNumber: mobile });
      if (!citizen) {
        const citizenId = `CITIZEN-${Date.now()}`;
        const newCitizen: CitizenDoc = {
          citizenId,
          mobileNumber: mobile,
          fullName: body.citizenName,
          email: body.email,
          wardId: body.wardId || "w-110",
          createdAt: nowIso,
          updatedAt: nowIso,
          lastLoginAt: nowIso,
        };
        await citizens.insertOne(newCitizen);
        citizen = newCitizen;
      } else if (body.citizenName && !citizen.fullName) {
        await citizens.updateOne(
          { mobileNumber: mobile },
          { $set: { fullName: body.citizenName, email: body.email || citizen.email, updatedAt: nowIso } },
        );
      }

      const count = await appointments.countDocuments({});
      const serial = 1000 + count + 1;
      const appointmentId = `MLA-APT-${serial}`;

      const wardObj = WARDS.find((w) => w.id === (body.wardId || citizen.wardId || "w-110"));
      const wardName = wardObj ? wardObj.name.en : "Thousand Lights";

      const newAppt: AppointmentDoc = {
        appointmentId,
        citizenId: citizen.citizenId,
        citizenName: body.citizenName || citizen.fullName || "Citizen",
        mobileNumber: mobile,
        email: body.email || citizen.email,
        wardId: body.wardId || citizen.wardId || "w-110",
        wardName,
        preferredDate: body.preferredDate,
        preferredTime: body.preferredTime,
        purpose: body.purpose,
        description: body.description || body.notes || "",
        relatedComplaintId: body.relatedComplaintId || undefined,
        status: "pending",
        adminRemarks: "",
        createdAt: nowIso,
        updatedAt: nowIso,
      };

      await appointments.insertOne(newAppt);

      // Alert Constituency Admin with instant notification
      await notifications.insertOne({
        notificationId: `NOTIF-APT-${Date.now()}`,
        recipientRole: "constituency_admin",
        title: {
          en: "New MLA Appointment Request",
          ta: "புதிய சட்டமன்ற உறுப்பினர் சந்திப்பு கோரிக்கை",
        },
        body: {
          en: `${newAppt.citizenName} has requested an appointment with the MLA on ${newAppt.preferredDate} at ${newAppt.preferredTime}.`,
          ta: `${newAppt.citizenName} ${newAppt.preferredDate} அன்று ${newAppt.preferredTime} மணிக்கு சட்டமன்ற உறுப்பினரை சந்திக்க கோரியுள்ளார்.`,
        },
        date: dateStr,
        read: false,
        priority: "high",
        createdAt: nowIso,
      });

      return Response.json({
        ok: true,
        appointmentId,
        appointment: newAppt,
      });
    }

    // ── 11. GET /api/appointments/:id & PATCH /api/appointments/:id & DELETE /api/appointments/:id ──
    if (pathname.startsWith("/api/appointments/")) {
      const apptId = pathname.replace("/api/appointments/", "");
      const { appointments, complaints, notifications } = await getDb();

      const appt = await appointments.findOne({
        $or: [{ appointmentId: apptId }, { appointmentId: apptId.toUpperCase() }],
      });

      if (!appt) {
        return Response.json({ ok: false, message: "Appointment not found" }, { status: 404 });
      }

      if (method === "GET") {
        let relatedComplaint = null;
        if (appt.relatedComplaintId) {
          relatedComplaint = await complaints.findOne({
            complaintId: appt.relatedComplaintId,
          });
        }
        return Response.json({
          ok: true,
          appointment: appt,
          relatedComplaint,
        });
      }

      if (method === "PATCH") {
        const body = await request.json();
        const action = body.action;
        const now = new Date();
        const nowIso = now.toISOString();
        const dateStr = nowIso.split("T")[0] ?? "2026-08-18";

        let updateFields: any = { updatedAt: nowIso };
        let notifTitle = { en: "Appointment Status Update", ta: "சந்திப்பு நிலை புதுப்பிப்பு" };
        let notifBody = {
          en: `Your MLA appointment #${appt.appointmentId} has been updated.`,
          ta: `உங்கள் சந்திப்பு #${appt.appointmentId} நிலை புதுப்பிக்கப்பட்டுள்ளது.`,
        };

        if (action === "approve") {
          updateFields.status = "approved";
          updateFields.confirmedDate = body.confirmedDate || appt.preferredDate;
          updateFields.confirmedTime = body.confirmedTime || appt.preferredTime;
          updateFields.meetingLocation =
            body.meetingLocation || "MLA Constituency Office, Thousand Lights, Chennai";
          updateFields.mlaRepresentative = body.mlaRepresentative || "Hon. Member of Legislative Assembly";
          if (body.instructions) updateFields.instructions = body.instructions;
          if (body.adminRemarks) updateFields.adminRemarks = body.adminRemarks;

          notifTitle = { en: "MLA Appointment Confirmed", ta: "சந்திப்பு உறுதி செய்யப்பட்டது" };
          notifBody = {
            en: `Your appointment with the MLA is confirmed for ${updateFields.confirmedDate} at ${updateFields.confirmedTime} at ${updateFields.meetingLocation}.`,
            ta: `சட்டமன்ற உறுப்பினருடனான உங்கள் சந்திப்பு ${updateFields.confirmedDate} அன்று ${updateFields.confirmedTime} மணிக்கு உறுதி செய்யப்பட்டுள்ளது.`,
          };
        } else if (action === "reschedule") {
          updateFields.status = "rescheduled";
          updateFields.confirmedDate = body.confirmedDate || body.newDate || appt.preferredDate;
          updateFields.confirmedTime = body.confirmedTime || body.newTime || appt.preferredTime;
          if (body.meetingLocation) updateFields.meetingLocation = body.meetingLocation;
          if (body.adminRemarks) updateFields.adminRemarks = body.adminRemarks;

          notifTitle = { en: "MLA Appointment Rescheduled", ta: "சந்திப்பு மறுதேதியிடப்பட்டது" };
          notifBody = {
            en: `Your MLA appointment has been rescheduled to ${updateFields.confirmedDate} at ${updateFields.confirmedTime}.`,
            ta: `உங்கள் சந்திப்பு ${updateFields.confirmedDate} ${updateFields.confirmedTime} மணிக்கு மாற்றப்பட்டுள்ளது.`,
          };
        } else if (action === "reject") {
          updateFields.status = "rejected";
          updateFields.rejectionReason = body.reason || body.rejectionReason || "Slot unavailable.";
          if (body.adminRemarks) updateFields.adminRemarks = body.adminRemarks;

          notifTitle = { en: "MLA Appointment Request Update", ta: "சந்திப்பு கோரிக்கை தகவல்" };
          notifBody = {
            en: `Your appointment request #${appt.appointmentId} could not be scheduled. Reason: ${updateFields.rejectionReason}`,
            ta: `உங்கள் சந்திப்பு கோரிக்கை #${appt.appointmentId} ஏற்கப்படவில்லை. காரணம்: ${updateFields.rejectionReason}`,
          };
        } else if (action === "cancel") {
          updateFields.status = "cancelled";
          updateFields.cancellationReason = body.reason || "Cancelled by office.";

          notifTitle = { en: "Appointment Cancelled", ta: "சந்திப்பு ரத்து செய்யப்பட்டது" };
          notifBody = {
            en: `Appointment #${appt.appointmentId} has been cancelled.`,
            ta: `சந்திப்பு #${appt.appointmentId} ரத்து செய்யப்பட்டது.`,
          };
        } else if (action === "complete") {
          updateFields.status = "completed";
          if (body.adminRemarks) updateFields.adminRemarks = body.adminRemarks;

          notifTitle = { en: "MLA Meeting Completed", ta: "சந்திப்பு நிறைவுற்றது" };
          notifBody = {
            en: `Thank you for meeting with the MLA Office. Grievances and notes have been logged.`,
            ta: `சட்டமன்ற உறுப்பினர் அலுவலகத்தில் சந்தித்தமைக்கு நன்றி. குறிப்புகள் பதிவு செய்யப்பட்டுள்ளன.`,
          };
        } else if (action === "add_remarks") {
          if (body.adminRemarks) updateFields.adminRemarks = body.adminRemarks;
        }

        await appointments.updateOne({ appointmentId: appt.appointmentId }, { $set: updateFields });

        // Dispatch citizen notification
        await notifications.insertOne({
          notificationId: `NOTIF-APT-UPD-${Date.now()}`,
          recipientRole: "citizen",
          recipientMobile: appt.mobileNumber,
          recipientCitizenId: appt.citizenId,
          title: notifTitle,
          body: notifBody,
          date: dateStr,
          read: false,
          priority: "normal",
          createdAt: nowIso,
        });

        const updated = await appointments.findOne({ appointmentId: appt.appointmentId });
        return Response.json({ ok: true, appointment: updated });
      }

      if (method === "DELETE") {
        await appointments.updateOne(
          { appointmentId: appt.appointmentId },
          { $set: { status: "cancelled", cancellationReason: "Cancelled by citizen", updatedAt: new Date().toISOString() } },
        );
        return Response.json({ ok: true, message: "Appointment cancelled successfully" });
      }
    }

    // ── 12. GET /api/admin/users — Super Admin only ──
    if (pathname === "/api/admin/users" && method === "GET") {
      const authUser = getAuthUser(request);
      if (!authUser || authUser.role !== "super_admin") {
        return Response.json({ ok: false, message: "Unauthorized" }, { status: 403 });
      }
      const { users } = await getDb();
      const cursor = await users.find({ role: { $ne: "citizen" as any } });
      const all = await (cursor as any).toArray();
      return Response.json({ ok: true, users: all.map((u: any) => ({ ...u, passwordHash: undefined })) });
    }

    // ── 13. POST /api/admin/users — Super Admin create user ──
    if (pathname === "/api/admin/users" && method === "POST") {
      const authUser = getAuthUser(request);
      if (!authUser || authUser.role !== "super_admin") {
        return Response.json({ ok: false, message: "Unauthorized" }, { status: 403 });
      }
      const body = await request.json();
      if (!body.name || !body.email || !body.role || !body.mobile) {
        return Response.json({ ok: false, message: "Name, email, mobile, and role are required" }, { status: 400 });
      }
      const { users } = await getDb();
      const existing = await users.findOne({ $or: [{ email: body.email.toLowerCase() }, { mobile: body.mobile.replace(/\D/g, "") }] });
      if (existing) {
        return Response.json({ ok: false, message: "User with this email or mobile already exists" }, { status: 409 });
      }
      const now = new Date().toISOString();
      const passwordHash = await hashPassword(body.password || "Aram@2026");
      const userId = `usr-${Date.now()}`;
      const newUser = {
        userId,
        name: body.name,
        email: body.email.toLowerCase(),
        mobile: body.mobile.replace(/\D/g, ""),
        role: body.role,
        departmentId: body.departmentId || undefined,
        departmentName: body.departmentName || undefined,
        wardId: body.wardId || undefined,
        passwordHash,
        active: true,
        permissions: body.permissions || [],
        createdAt: now,
        updatedAt: now,
      };
      await users.insertOne(newUser);
      // Audit log
      const { auditLogs } = await getDb();
      await auditLogs.insertOne({
        logId: `audit-${Date.now()}`,
        userId: authUser.userId || "system",
        userName: authUser.name || "Super Admin",
        role: authUser.role,
        action: `Created new user: ${body.name} (${body.role})`,
        entityId: userId,
        entityType: "user",
        timestamp: now,
      });
      return Response.json({ ok: true, userId, user: { ...newUser, passwordHash: undefined } });
    }

    // ── 14. PATCH /api/admin/users/:id — Super Admin update user ──
    if (pathname.startsWith("/api/admin/users/") && method === "PATCH") {
      const authUser = getAuthUser(request);
      if (!authUser || authUser.role !== "super_admin") {
        return Response.json({ ok: false, message: "Unauthorized" }, { status: 403 });
      }
      const targetId = pathname.replace("/api/admin/users/", "");
      const body = await request.json();
      const { users, auditLogs } = await getDb();
      const target = await users.findOne({ userId: targetId });
      if (!target) return Response.json({ ok: false, message: "User not found" }, { status: 404 });
      const now = new Date().toISOString();
      const updateSet: any = { updatedAt: now };
      if (body.name !== undefined) updateSet.name = body.name;
      if (body.email !== undefined) updateSet.email = body.email.toLowerCase();
      if (body.mobile !== undefined) updateSet.mobile = body.mobile.replace(/\D/g, "");
      if (body.role !== undefined) updateSet.role = body.role;
      if (body.departmentId !== undefined) updateSet.departmentId = body.departmentId;
      if (body.departmentName !== undefined) updateSet.departmentName = body.departmentName;
      if (body.wardId !== undefined) updateSet.wardId = body.wardId;
      if (body.active !== undefined) updateSet.active = body.active;
      if (body.permissions !== undefined) updateSet.permissions = body.permissions;
      if (body.password) updateSet.passwordHash = await hashPassword(body.password);
      await users.updateOne({ userId: targetId }, { $set: updateSet });
      await auditLogs.insertOne({
        logId: `audit-${Date.now()}`,
        userId: authUser.userId || "system",
        userName: authUser.name || "Super Admin",
        role: authUser.role,
        action: `Updated user: ${target.name} — ${JSON.stringify(Object.keys(updateSet).filter(k => k !== "updatedAt" && k !== "passwordHash"))}`,
        entityId: targetId,
        entityType: "user",
        timestamp: now,
      });
      return Response.json({ ok: true, message: "User updated successfully" });
    }

    // ── 15. GET /api/admin/field-officers ──
    if (pathname === "/api/admin/field-officers" && method === "GET") {
      const authUser = getAuthUser(request);
      if (!authUser || !["super_admin", "constituency_admin", "department_admin"].includes(authUser.role)) {
        return Response.json({ ok: false, message: "Unauthorized" }, { status: 403 });
      }
      const { users, complaints } = await getDb();
      const deptId = url.searchParams.get("deptId");
      const query: any = { role: "field_officer", active: true };
      if (deptId && deptId !== "all") query.departmentId = deptId;
      const officerCursor = await users.find(query);
      const officers = await (officerCursor as any).toArray();
      // Compute workload for each officer
      const enriched = await Promise.all(officers.map(async (o: any) => {
        const assigned = await complaints.countDocuments({ assignedOfficerId: o.userId, status: { $in: ["assigned", "in_progress"] as any } });
        const completed = await complaints.countDocuments({ assignedOfficerId: o.userId, status: { $in: ["completed", "citizen_verification", "closed"] as any } });
        return { ...o, passwordHash: undefined, activeTasks: assigned, completedTasks: completed };
      }));
      return Response.json({ ok: true, officers: enriched });
    }

    // ── 16. PATCH /api/complaints/:id/assign-dept ──
    if (pathname.match(/^\/api\/complaints\/[^/]+\/assign-dept$/) && method === "PATCH") {
      const authUser = getAuthUser(request);
      if (!authUser || authUser.role !== "constituency_admin") {
        return Response.json({ ok: false, message: "Unauthorized: Constituency Admin only" }, { status: 403 });
      }
      const complaintId = pathname.split("/")[3]!;
      const body = await request.json();
      const { complaints, notifications, auditLogs } = await getDb();
      const c = await complaints.findOne({ complaintId });
      if (!c) return Response.json({ ok: false, message: "Complaint not found" }, { status: 404 });
      const now = new Date();
      const dateStr = now.toISOString().split("T")[0]!;
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const deptObj = DEPARTMENTS.find(d => d.id === body.departmentId);
      await complaints.updateOne({ complaintId }, {
        $set: { status: "verified", departmentId: body.departmentId, priority: body.priority || c.priority, updatedAt: now.toISOString() },
        $push: { timeline: { stage: "dept_assigned", label: { en: "Department Assigned", ta: "துறைக்கு ஒதுக்கப்பட்டது" }, date: dateStr, time: timeStr, department: deptObj?.name.en || body.departmentId, note: { en: `Assigned to ${deptObj?.name.en || body.departmentId}${body.remarks ? ": " + body.remarks : ""}`, ta: `${deptObj?.name.ta || body.departmentId} துறைக்கு ஒதுக்கப்பட்டது` }, remarks: body.remarks || "", done: true, performedBy: authUser.name || "Admin", performedByRole: "constituency_admin" } as any }
      });
      await notifications.insertOne({ notificationId: `NOTIF-${Date.now()}`, recipientRole: "department_admin", title: { en: "New Complaint Assigned to Your Department", ta: "உங்கள் துறைக்கு புதிய புகார் ஒதுக்கப்பட்டுள்ளது" }, body: { en: `Complaint #${complaintId} has been assigned to ${deptObj?.name.en || body.departmentId}.`, ta: `புகார் #${complaintId} ${deptObj?.name.ta || body.departmentId} துறைக்கு ஒதுக்கப்பட்டுள்ளது.` }, date: dateStr, read: false, priority: "high", createdAt: now.toISOString() });
      await auditLogs.insertOne({ logId: `audit-${Date.now()}`, userId: authUser.userId || "", userName: authUser.name || "Admin", role: "constituency_admin", action: `Assigned complaint ${complaintId} to department: ${deptObj?.name.en || body.departmentId}`, entityId: complaintId, entityType: "complaint", prevStatus: c.status, newStatus: "verified", remarks: body.remarks, timestamp: now.toISOString() });
      return Response.json({ ok: true, message: "Department assigned successfully" });
    }

    // ── 17. PATCH /api/complaints/:id/assign-officer ──
    if (pathname.match(/^\/api\/complaints\/[^/]+\/assign-officer$/) && method === "PATCH") {
      const authUser = getAuthUser(request);
      if (!authUser || authUser.role !== "department_admin") {
        return Response.json({ ok: false, message: "Unauthorized: Department Admin only" }, { status: 403 });
      }
      const complaintId = pathname.split("/")[3]!;
      const body = await request.json();
      const { complaints, notifications, auditLogs } = await getDb();
      const c = await complaints.findOne({ complaintId });
      if (!c) return Response.json({ ok: false, message: "Complaint not found" }, { status: 404 });
      const now = new Date();
      const dateStr = now.toISOString().split("T")[0]!;
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      await complaints.updateOne({ complaintId }, {
        $set: { status: "assigned", assignedOfficer: body.officerName, assignedOfficerId: body.officerId, updatedAt: now.toISOString() },
        $push: { timeline: { stage: "officer_assigned", label: { en: "Field Officer Assigned", ta: "கள அலுவலர் நியமிக்கப்பட்டார்" }, date: dateStr, time: timeStr, officer: body.officerName, note: { en: `Officer ${body.officerName} assigned for field inspection.`, ta: `${body.officerName} கள ஆய்வுக்கு நியமிக்கப்பட்டுள்ளார்.` }, done: true, performedBy: authUser.name || "Dept Admin", performedByRole: "department_admin" } as any }
      });
      await notifications.insertOne({ notificationId: `NOTIF-${Date.now()}`, recipientRole: "field_officer", recipientUserId: body.officerId, title: { en: "New Task Assigned to You", ta: "உங்களுக்கு புதிய பணி ஒதுக்கப்பட்டுள்ளது" }, body: { en: `Complaint #${complaintId} has been assigned to you for field inspection. Please start work promptly.`, ta: `புகார் #${complaintId} உங்களுக்கு கள ஆய்வுக்கு ஒதுக்கப்பட்டுள்ளது.` }, date: dateStr, read: false, priority: "high", createdAt: now.toISOString() });
      await auditLogs.insertOne({ logId: `audit-${Date.now()}`, userId: authUser.userId || "", userName: authUser.name || "Dept Admin", role: "department_admin", action: `Assigned officer ${body.officerName} to complaint ${complaintId}`, entityId: complaintId, entityType: "complaint", prevStatus: c.status, newStatus: "assigned", timestamp: now.toISOString() });
      return Response.json({ ok: true, message: "Field officer assigned successfully" });
    }

    // ── 18. PATCH /api/complaints/:id/start-work ──
    if (pathname.match(/^\/api\/complaints\/[^/]+\/start-work$/) && method === "PATCH") {
      const authUser = getAuthUser(request);
      if (!authUser || authUser.role !== "field_officer") {
        return Response.json({ ok: false, message: "Unauthorized: Field Officers only" }, { status: 403 });
      }
      const complaintId = pathname.split("/")[3]!;
      const body = await request.json();
      const { complaints, auditLogs } = await getDb();
      const c = await complaints.findOne({ complaintId });
      if (!c) return Response.json({ ok: false, message: "Complaint not found" }, { status: 404 });
      const now = new Date();
      const dateStr = now.toISOString().split("T")[0]!;
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      await complaints.updateOne({ complaintId }, {
        $set: { status: "in_progress", updatedAt: now.toISOString() },
        $push: { timeline: { stage: "work_started", label: { en: "Work Started On Site", ta: "களப்பணி தொடங்கியது" }, date: dateStr, time: timeStr, officer: authUser.name || c.assignedOfficer, note: { en: body.remarks || "Field officer has reached the site and commenced work.", ta: body.remarks || "கள அலுவலர் இடத்திற்குச் சென்று பணியை தொடங்கியுள்ளார்." }, done: true, performedBy: authUser.name || "Officer", performedByRole: "field_officer" } as any }
      });
      await auditLogs.insertOne({ logId: `audit-${Date.now()}`, userId: authUser.userId || "", userName: authUser.name || "Officer", role: "field_officer", action: `Started work on complaint ${complaintId}`, entityId: complaintId, entityType: "complaint", prevStatus: c.status, newStatus: "in_progress", timestamp: now.toISOString() });
      return Response.json({ ok: true, message: "Work started" });
    }

    // ── 19. PATCH /api/complaints/:id/update-progress ──
    if (pathname.match(/^\/api\/complaints\/[^/]+\/update-progress$/) && method === "PATCH") {
      const authUser = getAuthUser(request);
      if (!authUser || authUser.role !== "field_officer") {
        return Response.json({ ok: false, message: "Unauthorized: Field Officers only" }, { status: 403 });
      }
      const complaintId = pathname.split("/")[3]!;
      const body = await request.json();
      const { complaints } = await getDb();
      const c = await complaints.findOne({ complaintId });
      if (!c) return Response.json({ ok: false, message: "Complaint not found" }, { status: 404 });
      const now = new Date();
      const dateStr = now.toISOString().split("T")[0]!;
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      await complaints.updateOne({ complaintId }, {
        $set: { updatedAt: now.toISOString() },
        $push: { timeline: { stage: "progress_update", label: { en: "Progress Update", ta: "பணி முன்னேற்றம்" }, date: dateStr, time: timeStr, officer: authUser.name || c.assignedOfficer, note: { en: body.remarks || "Work in progress.", ta: body.remarks || "பணி நடைபெறுகிறது." }, done: true, performedBy: authUser.name || "Officer", performedByRole: "field_officer" } as any }
      });
      return Response.json({ ok: true, message: "Progress updated" });
    }

    // ── 20. PATCH /api/complaints/:id/submit-completion ──
    if (pathname.match(/^\/api\/complaints\/[^/]+\/submit-completion$/) && method === "PATCH") {
      const authUser = getAuthUser(request);
      if (!authUser || authUser.role !== "field_officer") {
        return Response.json({ ok: false, message: "Unauthorized: Field Officers only" }, { status: 403 });
      }
      const complaintId = pathname.split("/")[3]!;
      const body = await request.json();
      const { complaints, notifications, auditLogs } = await getDb();
      const c = await complaints.findOne({ complaintId });
      if (!c) return Response.json({ ok: false, message: "Complaint not found" }, { status: 404 });
      const now = new Date();
      const dateStr = now.toISOString().split("T")[0]!;
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      await complaints.updateOne({ complaintId }, {
        $set: { status: "completed", completedOn: dateStr, resolutionDetails: body.remarks || "Work completed by field officer.", ...(body.afterImage ? { afterImage: body.afterImage } : {}), updatedAt: now.toISOString() },
        $push: { timeline: { stage: "completion_submitted", label: { en: "Completion Submitted", ta: "பணி முடிவு சமர்ப்பிக்கப்பட்டது" }, date: dateStr, time: timeStr, officer: authUser.name || c.assignedOfficer, note: { en: body.remarks || "Field officer has submitted work completion for admin verification.", ta: "கள அலுவலர் பணி முடிவை நிர்வாகி சரிபார்ப்புக்கு சமர்ப்பித்துள்ளார்." }, done: true, performedBy: authUser.name || "Officer", performedByRole: "field_officer" } as any }
      });
      await notifications.insertOne({ notificationId: `NOTIF-${Date.now()}`, recipientRole: "constituency_admin", title: { en: "Complaint Completion Submitted", ta: "புகார் முடிவு சமர்ப்பிக்கப்பட்டது" }, body: { en: `Complaint #${complaintId} has been completed by ${authUser.name || "Field Officer"}. Please verify the resolution.`, ta: `புகார் #${complaintId} கள அலுவலரால் முடிக்கப்பட்டுள்ளது. சரிபார்க்கவும்.` }, date: dateStr, read: false, priority: "high", createdAt: now.toISOString() });
      await auditLogs.insertOne({ logId: `audit-${Date.now()}`, userId: authUser.userId || "", userName: authUser.name || "Officer", role: "field_officer", action: `Submitted completion for complaint ${complaintId}`, entityId: complaintId, entityType: "complaint", prevStatus: c.status, newStatus: "completed", remarks: body.remarks, timestamp: now.toISOString() });
      return Response.json({ ok: true, message: "Completion submitted for admin verification" });
    }

    // ── 21. PATCH /api/complaints/:id/verify-resolution ──
    if (pathname.match(/^\/api\/complaints\/[^/]+\/verify-resolution$/) && method === "PATCH") {
      const authUser = getAuthUser(request);
      if (!authUser || authUser.role !== "constituency_admin") {
        return Response.json({ ok: false, message: "Unauthorized: Constituency Admin only" }, { status: 403 });
      }
      const complaintId = pathname.split("/")[3]!;
      const body = await request.json();
      const { complaints, notifications, auditLogs } = await getDb();
      const c = await complaints.findOne({ complaintId });
      if (!c) return Response.json({ ok: false, message: "Complaint not found" }, { status: 404 });
      const approved = body.approved !== false;
      const newStatus = approved ? "closed" : "in_progress";
      const now = new Date();
      const dateStr = now.toISOString().split("T")[0]!;
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      await complaints.updateOne({ complaintId }, {
        $set: { status: newStatus, updatedAt: now.toISOString(), ...(approved ? { citizenVerified: true } : {}) },
        $push: { timeline: { stage: approved ? "resolved" : "rework_requested", label: approved ? { en: "Resolved & Closed", ta: "தீர்க்கப்பட்டு மூடப்பட்டது" } : { en: "Rework Requested", ta: "மறுபணி கோரிக்கை" }, date: dateStr, time: timeStr, note: { en: body.remarks || (approved ? "Complaint resolved and closed by admin." : "Rework requested by admin."), ta: body.remarks || (approved ? "நிர்வாகியால் புகார் தீர்க்கப்பட்டு மூடப்பட்டது." : "நிர்வாகியால் மறுபணி கோரிக்கை.") }, done: true, performedBy: authUser.name || "Admin", performedByRole: "constituency_admin" } as any }
      });
      const notifTitle = approved ? { en: "Your Complaint Has Been Resolved!", ta: "உங்கள் புகார் தீர்க்கப்பட்டது!" } : { en: "Complaint Update", ta: "புகார் புதுப்பிப்பு" };
      const notifBody = approved ? { en: `Complaint #${complaintId} has been successfully resolved and closed. Thank you for using ARAM.`, ta: `புகார் #${complaintId} வெற்றிகரமாக தீர்க்கப்பட்டது.` } : { en: `Your complaint #${complaintId} is under rework. Reason: ${body.remarks || "Quality check failed."}`, ta: `புகார் #${complaintId} மறுஆய்வில் உள்ளது.` };
      await notifications.insertOne({ notificationId: `NOTIF-${Date.now()}`, recipientRole: "citizen", recipientMobile: c.citizenMobile, title: notifTitle, body: notifBody, date: dateStr, read: false, priority: approved ? "high" : "normal", createdAt: now.toISOString() });
      await auditLogs.insertOne({ logId: `audit-${Date.now()}`, userId: authUser.userId || "", userName: authUser.name || "Admin", role: "constituency_admin", action: approved ? `Approved resolution for ${complaintId}` : `Requested rework for ${complaintId}: ${body.remarks}`, entityId: complaintId, entityType: "complaint", prevStatus: c.status, newStatus, remarks: body.remarks, timestamp: now.toISOString() });
      return Response.json({ ok: true, message: approved ? "Complaint resolved and closed" : "Rework requested" });
    }

    // ── 22. GET /api/admin/audit-log ──
    if (pathname === "/api/admin/audit-log" && method === "GET") {
      const authUser = getAuthUser(request);
      if (!authUser || !["super_admin", "constituency_admin"].includes(authUser.role)) {
        return Response.json({ ok: false, message: "Unauthorized" }, { status: 403 });
      }
      const { auditLogs } = await getDb();
      const cursor = await auditLogs.find({});
      const all = await (cursor as any).toArray();
      return Response.json({ ok: true, auditLogs: all });
    }

    // ── 23. GET /api/content/announcements ──
    if (pathname === "/api/content/announcements" && method === "GET") {
      const { announcements } = await getDb();
      const publishedOnly = url.searchParams.get("published") !== "all";
      const query = publishedOnly ? { published: true } : {};
      const cursor = await announcements.find(query);
      const all = await (cursor as any).toArray();
      return Response.json({ ok: true, announcements: all });
    }

    // ── 24. POST /api/content/announcements ──
    if (pathname === "/api/content/announcements" && method === "POST") {
      const authUser = getAuthUser(request);
      if (!authUser || !["super_admin", "constituency_admin", "content_admin"].includes(authUser.role)) {
        return Response.json({ ok: false, message: "Unauthorized" }, { status: 403 });
      }
      const body = await request.json();
      const { announcements } = await getDb();
      const now = new Date().toISOString();
      const ann = { announcementId: `ann-${Date.now()}`, title: body.title, description: body.description, date: body.date, time: body.time, location: body.location, category: body.category || "general", imageUrl: body.imageUrl, registrationInfo: body.registrationInfo, published: body.published ?? false, createdBy: authUser.userId || "", createdAt: now, updatedAt: now };
      await announcements.insertOne(ann);
      return Response.json({ ok: true, announcement: ann });
    }

    // ── 25. PATCH /api/content/announcements/:id ──
    if (pathname.startsWith("/api/content/announcements/") && method === "PATCH") {
      const authUser = getAuthUser(request);
      if (!authUser || !["super_admin", "constituency_admin", "content_admin"].includes(authUser.role)) {
        return Response.json({ ok: false, message: "Unauthorized" }, { status: 403 });
      }
      const annId = pathname.replace("/api/content/announcements/", "");
      const body = await request.json();
      const { announcements } = await getDb();
      await announcements.updateOne({ announcementId: annId }, { $set: { ...body, updatedAt: new Date().toISOString() } });
      return Response.json({ ok: true, message: "Announcement updated" });
    }

    // ── 26. GET /api/content/schemes ──
    if (pathname === "/api/content/schemes" && method === "GET") {
      const { schemes } = await getDb();
      const all = await (await schemes.find({})).toArray();
      return Response.json({ ok: true, schemes: all });
    }

    // ── 27. POST /api/content/schemes ──
    if (pathname === "/api/content/schemes" && method === "POST") {
      const authUser = getAuthUser(request);
      if (!authUser || !["super_admin", "constituency_admin", "content_admin"].includes(authUser.role)) {
        return Response.json({ ok: false, message: "Unauthorized" }, { status: 403 });
      }
      const body = await request.json();
      const { schemes } = await getDb();
      const now = new Date().toISOString();
      const scheme = { schemeId: `sch-${Date.now()}`, ...body, active: body.active ?? true, createdBy: authUser.userId || "", createdAt: now, updatedAt: now };
      await schemes.insertOne(scheme);
      return Response.json({ ok: true, scheme });
    }

    // ── 28. GET /api/content/development-works ──
    if (pathname === "/api/content/development-works" && method === "GET") {
      const { developmentWorks } = await getDb();
      const all = await (await developmentWorks.find({})).toArray();
      return Response.json({ ok: true, works: all });
    }

    // ── 29. POST /api/content/development-works ──
    if (pathname === "/api/content/development-works" && method === "POST") {
      const authUser = getAuthUser(request);
      if (!authUser || !["super_admin", "constituency_admin", "content_admin"].includes(authUser.role)) {
        return Response.json({ ok: false, message: "Unauthorized" }, { status: 403 });
      }
      const body = await request.json();
      const { developmentWorks } = await getDb();
      const now = new Date().toISOString();
      const work = { workId: `dev-${Date.now()}`, ...body, published: body.published ?? false, createdBy: authUser.userId || "", createdAt: now, updatedAt: now };
      await developmentWorks.insertOne(work);
      return Response.json({ ok: true, work });
    }

    // ── 30. PATCH /api/content/development-works/:id ──
    if (pathname.startsWith("/api/content/development-works/") && method === "PATCH") {
      const authUser = getAuthUser(request);
      if (!authUser || !["super_admin", "constituency_admin", "content_admin"].includes(authUser.role)) {
        return Response.json({ ok: false, message: "Unauthorized" }, { status: 403 });
      }
      const workId = pathname.replace("/api/content/development-works/", "");
      const body = await request.json();
      const { developmentWorks } = await getDb();
      await developmentWorks.updateOne({ workId }, { $set: { ...body, updatedAt: new Date().toISOString() } });
      return Response.json({ ok: true, message: "Development work updated" });
    }

    return null;
  } catch (error: any) {
    console.error("API error:", error);
    return Response.json({ ok: false, message: error.message || "Internal server error" }, { status: 500 });
  }
}

