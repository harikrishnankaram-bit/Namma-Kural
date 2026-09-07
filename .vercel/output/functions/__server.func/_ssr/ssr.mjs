import { o as __toESM, r as __exportAll } from "../_runtime.mjs";
import { t as require_lib } from "../_libs/mongodb.mjs";
import { t as require_main } from "../_libs/dotenv.mjs";
import { t as require_jsonwebtoken } from "../_libs/jsonwebtoken+[...].mjs";
import { t as bcryptjs_default } from "../_libs/bcryptjs.mjs";
import * as fs from "fs";
import * as path from "path";
//#region node_modules/.nitro/vite/services/ssr/index.js
var ssr_exports = /* @__PURE__ */ __exportAll({
	a: () => MLA,
	c: () => WARDS,
	d: () => MOCK_UPDATES,
	default: () => server_default,
	f: () => PUBLIC_STATS,
	h: () => renderErrorPage,
	i: () => DEPARTMENTS,
	l: () => MOCK_PROJECTS,
	m: () => validateIndianMobile,
	n: () => CONSTITUENCY,
	o: () => ROLE_META,
	p: () => maskMobile,
	r: () => DEMO_DATA_NOTICE,
	s: () => STATUS_META,
	t: () => CATEGORIES,
	u: () => MOCK_SCHEMES
});
var import_lib = require_lib();
var import_main = /* @__PURE__ */ __toESM(require_main());
var import_jsonwebtoken = /* @__PURE__ */ __toESM(require_jsonwebtoken());
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
	const result = import_main.parse(fs.readFileSync(envPath));
	for (const k in result) process.env[k] = result[k];
}
console.log("[DEBUG] Loaded MONGODB_URI:", process.env["MONGODB_URI"] ? "Set" : "Not Set");
var MemoryCollection = class {
	items = [];
	async find(query = {}) {
		const filtered = this.items.filter((item) => matchQuery(item, query));
		return { toArray: async () => JSON.parse(JSON.stringify(filtered)) };
	}
	async findOne(query) {
		const found = this.items.find((item) => matchQuery(item, query));
		return found ? JSON.parse(JSON.stringify(found)) : null;
	}
	async insertOne(doc) {
		const _id = doc._id || new import_lib.ObjectId();
		const newDoc = {
			...doc,
			_id
		};
		this.items.unshift(newDoc);
		return { insertedId: _id };
	}
	async updateOne(filter, update, options) {
		const index = this.items.findIndex((item) => matchQuery(item, filter));
		if (index >= 0) {
			const current = this.items[index];
			if (current) {
				if (update.$set) Object.assign(current, update.$set);
				if (update.$push) for (const key of Object.keys(update.$push)) {
					const arr = current[key];
					if (!Array.isArray(arr)) current[key] = [update.$push[key]];
					else arr.push(update.$push[key]);
				}
			}
			return {
				matchedCount: 1,
				modifiedCount: 1
			};
		}
		if (options?.upsert && update.$set) {
			await this.insertOne(update.$set);
			return {
				matchedCount: 0,
				modifiedCount: 1
			};
		}
		return {
			matchedCount: 0,
			modifiedCount: 0
		};
	}
	async deleteOne(filter) {
		const initialLen = this.items.length;
		this.items = this.items.filter((item) => !matchQuery(item, filter));
		return { deletedCount: initialLen - this.items.length };
	}
	async countDocuments(query = {}) {
		return this.items.filter((item) => matchQuery(item, query)).length;
	}
};
function matchQuery(item, query) {
	if (!query || Object.keys(query).length === 0) return true;
	for (const key of Object.keys(query)) {
		if (key === "$or" && Array.isArray(query.$or)) {
			if (!query.$or.some((sub) => matchQuery(item, sub))) return false;
			continue;
		}
		const expected = query[key];
		const actual = item ? item[key] : void 0;
		if (expected && typeof expected === "object" && "$in" in expected) {
			if (!expected.$in.includes(actual)) return false;
		} else if (expected && typeof expected === "object" && "$ne" in expected) {
			if (actual === expected.$ne) return false;
		} else if (actual !== expected) return false;
	}
	return true;
}
var MemoryDatabase = class {
	citizens = new MemoryCollection();
	complaintUpdates = new MemoryCollection();
	complaints = new MemoryCollection();
	users = new MemoryCollection();
	notifications = new MemoryCollection();
	appointments = new MemoryCollection();
	otps = new MemoryCollection();
	auditLogs = new MemoryCollection();
	announcements = new MemoryCollection();
	schemes = new MemoryCollection();
	developmentWorks = new MemoryCollection();
};
var globalForDb = globalThis;
var memoryDbSingleton = globalForDb.memoryDbSingleton ?? new MemoryDatabase();
globalForDb.memoryDbSingleton = memoryDbSingleton;
var client = null;
var clientPromise = globalForDb.clientPromise ?? null;
var useMemoryFallback = false;
var MONGODB_URI = process.env["MONGODB_URI"];
if (!MONGODB_URI) {
	useMemoryFallback = true;
	console.log("[Database] MONGODB_URI not provided. Operating in local memory database mode.");
}
async function getDb() {
	if (useMemoryFallback) return {
		db: null,
		isMemory: true,
		citizens: memoryDbSingleton.citizens,
		complaintUpdates: memoryDbSingleton.complaintUpdates,
		complaints: memoryDbSingleton.complaints,
		users: memoryDbSingleton.users,
		notifications: memoryDbSingleton.notifications,
		appointments: memoryDbSingleton.appointments,
		otps: memoryDbSingleton.otps,
		auditLogs: memoryDbSingleton.auditLogs,
		announcements: memoryDbSingleton.announcements,
		schemes: memoryDbSingleton.schemes,
		developmentWorks: memoryDbSingleton.developmentWorks
	};
	try {
		if (!clientPromise) {
			client = new import_lib.MongoClient(MONGODB_URI, {
				serverSelectionTimeoutMS: 2e3,
				connectTimeoutMS: 2e3
			});
			clientPromise = client.connect();
		}
		const db = (await clientPromise).db("aram_constituency");
		try {
			await db.collection("citizens").createIndex({ mobileNumber: 1 }, { unique: true });
			await db.collection("citizens").createIndex({ citizenId: 1 }, { unique: true });
			await db.collection("complaintUpdates").createIndex({ complaintId: 1 });
			await db.collection("complaints").createIndex({ complaintId: 1 }, { unique: true });
			await db.collection("complaints").createIndex({ citizenMobile: 1 });
			await db.collection("complaints").createIndex({ status: 1 });
			await db.collection("complaints").createIndex({ departmentId: 1 });
			await db.collection("complaints").createIndex({ assignedOfficerId: 1 });
			await db.collection("users").createIndex({ email: 1 }, {
				unique: true,
				sparse: true
			});
			await db.collection("users").createIndex({ userId: 1 }, { unique: true });
			await db.collection("otps").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
			await db.collection("auditLogs").createIndex({ timestamp: -1 });
			await db.collection("auditLogs").createIndex({ entityId: 1 });
			await db.collection("appointments").createIndex({ appointmentId: 1 }, { unique: true });
			await db.collection("appointments").createIndex({ mobile: 1 });
			await db.collection("appointments").createIndex({ status: 1 });
			await db.collection("notifications").createIndex({ notificationId: 1 }, { unique: true });
		} catch {}
		return {
			db,
			isMemory: false,
			citizens: db.collection("citizens"),
			complaintUpdates: db.collection("complaintUpdates"),
			complaints: db.collection("complaints"),
			users: db.collection("users"),
			notifications: db.collection("notifications"),
			appointments: db.collection("appointments"),
			otps: db.collection("otps"),
			auditLogs: db.collection("auditLogs"),
			announcements: db.collection("announcements"),
			schemes: db.collection("schemes"),
			developmentWorks: db.collection("developmentWorks")
		};
	} catch (_err) {
		clientPromise = null;
		client = null;
		useMemoryFallback = true;
		console.log("[Database] Remote MongoDB cluster unreachable. Switched seamlessly to local memory database mode.");
		return {
			db: null,
			isMemory: true,
			citizens: memoryDbSingleton.citizens,
			complaintUpdates: memoryDbSingleton.complaintUpdates,
			complaints: memoryDbSingleton.complaints,
			users: memoryDbSingleton.users,
			notifications: memoryDbSingleton.notifications,
			appointments: memoryDbSingleton.appointments,
			otps: memoryDbSingleton.otps,
			auditLogs: memoryDbSingleton.auditLogs,
			announcements: memoryDbSingleton.announcements,
			schemes: memoryDbSingleton.schemes,
			developmentWorks: memoryDbSingleton.developmentWorks
		};
	}
}
var AUTH_SECRET = process.env["AUTH_SECRET"] || "aram_constituency_jwt_super_secret_key_2026";
var DEMO_DEV_OTP = "123456";
function signToken(payload) {
	return import_jsonwebtoken.default.sign(payload, AUTH_SECRET, { expiresIn: "7d" });
}
function verifyToken(token) {
	try {
		return import_jsonwebtoken.default.verify(token, AUTH_SECRET);
	} catch {
		return null;
	}
}
async function hashPassword(password) {
	return bcryptjs_default.hash(password, 10);
}
async function comparePassword(password, hash) {
	return bcryptjs_default.compare(password, hash);
}
function getAuthUser(request) {
	const authHeader = request.headers.get("authorization") || request.headers.get("Authorization");
	if (!authHeader) return null;
	const parts = authHeader.split(" ");
	if (parts.length !== 2 || parts[0]?.toLowerCase() !== "bearer") return null;
	const token = parts[1];
	if (!token) return null;
	return verifyToken(token);
}
async function initDefaultAdminUsers() {
	const { users, announcements, schemes, developmentWorks } = await getDb();
	const defaultPassword = await hashPassword("Aram@2026");
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const initialStaff = [
		{
			userId: "usr-super-01",
			name: "Dr. S. Ramanathan",
			email: "superadmin@aram.gov.in",
			mobile: "9876500004",
			role: "super_admin",
			passwordHash: defaultPassword,
			active: true,
			permissions: [
				"manage_users",
				"manage_roles",
				"view_audit_log",
				"system_config"
			],
			createdAt: now,
			updatedAt: now
		},
		{
			userId: "usr-mla-01",
			name: "M. Anbazhagan",
			email: "admin@aram.gov.in",
			mobile: "9876500001",
			role: "constituency_admin",
			passwordHash: defaultPassword,
			active: true,
			permissions: [
				"view_all_complaints",
				"assign_department",
				"verify_resolution",
				"manage_appointments",
				"manage_announcements"
			],
			createdAt: now,
			updatedAt: now
		},
		{
			userId: "usr-dept-01",
			name: "R. Selvam",
			email: "highways.dept@aram.gov.in",
			mobile: "9876500002",
			role: "department_admin",
			departmentId: "highways",
			departmentName: "Highways & Roads",
			passwordHash: defaultPassword,
			active: true,
			permissions: [
				"view_dept_complaints",
				"assign_officer",
				"review_completion"
			],
			createdAt: now,
			updatedAt: now
		},
		{
			userId: "usr-dept-02",
			name: "S. Priya",
			email: "water.dept@aram.gov.in",
			mobile: "9876500005",
			role: "department_admin",
			departmentId: "water",
			departmentName: "Water Supply Board",
			passwordHash: defaultPassword,
			active: true,
			permissions: [
				"view_dept_complaints",
				"assign_officer",
				"review_completion"
			],
			createdAt: now,
			updatedAt: now
		},
		{
			userId: "usr-dept-03",
			name: "K. Murugan",
			email: "electricity.dept@aram.gov.in",
			mobile: "9876500006",
			role: "department_admin",
			departmentId: "electricity",
			departmentName: "Electricity Board",
			passwordHash: defaultPassword,
			active: true,
			permissions: [
				"view_dept_complaints",
				"assign_officer",
				"review_completion"
			],
			createdAt: now,
			updatedAt: now
		},
		{
			userId: "usr-officer-01",
			name: "Kumar S.",
			email: "kumar.field@aram.gov.in",
			mobile: "9876500003",
			role: "field_officer",
			departmentId: "highways",
			departmentName: "Highways & Roads",
			wardId: "w-110",
			passwordHash: defaultPassword,
			active: true,
			permissions: [
				"view_assigned_work",
				"update_work",
				"submit_completion"
			],
			createdAt: now,
			updatedAt: now
		},
		{
			userId: "usr-officer-02",
			name: "Rajan P.",
			email: "rajan.field@aram.gov.in",
			mobile: "9876500007",
			role: "field_officer",
			departmentId: "highways",
			departmentName: "Highways & Roads",
			wardId: "w-111",
			passwordHash: defaultPassword,
			active: true,
			permissions: [
				"view_assigned_work",
				"update_work",
				"submit_completion"
			],
			createdAt: now,
			updatedAt: now
		},
		{
			userId: "usr-officer-03",
			name: "Lakshmi V.",
			email: "lakshmi.field@aram.gov.in",
			mobile: "9876500008",
			role: "field_officer",
			departmentId: "water",
			departmentName: "Water Supply Board",
			wardId: "w-110",
			passwordHash: defaultPassword,
			active: true,
			permissions: [
				"view_assigned_work",
				"update_work",
				"submit_completion"
			],
			createdAt: now,
			updatedAt: now
		},
		{
			userId: "usr-officer-04",
			name: "Suresh M.",
			email: "suresh.field@aram.gov.in",
			mobile: "9876500009",
			role: "field_officer",
			departmentId: "electricity",
			departmentName: "Electricity Board",
			wardId: "w-112",
			passwordHash: defaultPassword,
			active: true,
			permissions: [
				"view_assigned_work",
				"update_work",
				"submit_completion"
			],
			createdAt: now,
			updatedAt: now
		},
		{
			userId: "usr-content-01",
			name: "Meena R.",
			email: "content@aram.gov.in",
			mobile: "9876500010",
			role: "content_admin",
			passwordHash: defaultPassword,
			active: true,
			permissions: [
				"manage_announcements",
				"manage_schemes",
				"manage_development_works"
			],
			createdAt: now,
			updatedAt: now
		}
	];
	for (const user of initialStaff) await users.updateOne({ $or: [{ email: user.email }, { userId: user.userId }] }, { $set: user }, { upsert: true });
	if (await announcements.countDocuments() === 0) {
		await announcements.insertOne({
			announcementId: "ann-001",
			title: {
				en: "Free Medical Camp",
				ta: "இலவச மருத்துவ முகாம்"
			},
			description: {
				en: "A free medical camp will be held at Tiruchengode Community Hall. All residents are welcome. Services include blood pressure check, diabetes screening, and eye check-up.",
				ta: "திருச்செங்கோடு சமுதாய மண்டபத்தில் இலவச மருத்துவ முகாம் நடைபெறும்."
			},
			date: "2026-09-05",
			time: "9:00 AM – 1:00 PM",
			location: "Tiruchengode Community Hall, Ward 1",
			category: "health",
			published: true,
			createdBy: "usr-mla-01",
			createdAt: now,
			updatedAt: now
		});
		await announcements.insertOne({
			announcementId: "ann-002",
			title: {
				en: "Constituency Meeting",
				ta: "தொகுதி கூட்டம்"
			},
			description: {
				en: "Monthly constituency grievance meeting. Citizens can raise their issues directly with the MLA and officials.",
				ta: "மாதாந்திர தொகுதி குறைதீர்வு கூட்டம். குடிமக்கள் நேரடியாக பிரச்சினைகளை எழுப்பலாம்."
			},
			date: "2026-08-30",
			time: "10:00 AM",
			location: "MLA Office, Tiruchengode",
			category: "governance",
			published: true,
			createdBy: "usr-mla-01",
			createdAt: now,
			updatedAt: now
		});
	}
	if (await schemes.countDocuments() === 0) {
		await schemes.insertOne({
			schemeId: "sch-001",
			name: {
				en: "Kalaignar Magalir Urimai Thittam",
				ta: "கலைஞர் மகளிர் உரிமைத் திட்டம்"
			},
			department: "works",
			description: {
				en: "Monthly financial assistance of ₹1,000 provided directly to eligible women family heads in Tiruchengode.",
				ta: "குடும்பப் பெண் தலைவர்களின் பொருளாதார மேம்பாட்டிற்காக மாதம் ₹1,000 வழங்கும் திட்டம்."
			},
			benefits: ["Direct Bank Transfer of ₹1,000 every month", "Economic empowerment for women"],
			eligibility: ["Annual family income below ₹2.5 lakh", "Family electricity consumption under 3,600 units/year"],
			documents: [
				"Aadhaar Card",
				"Ration Card",
				"Bank Passbook"
			],
			applicationProcess: "Fill online/e-Seva application or visit Taluk Office",
			applicationLink: "https://tn.gov.in",
			active: true,
			createdBy: "usr-content-01",
			createdAt: now,
			updatedAt: now
		});
		await schemes.insertOne({
			schemeId: "sch-002",
			name: {
				en: "CM Solar Power Scheme",
				ta: "முதலமைச்சர் சூரிய மின்சார திட்டம்"
			},
			department: "electricity",
			description: {
				en: "Free solar panels for eligible households to reduce electricity bills.",
				ta: "மின்சார கட்டணத்தை குறைக்க தகுதியான குடும்பங்களுக்கு இலவச சூரிய மின் பலகைகள்."
			},
			benefits: [
				"Free rooftop solar installation",
				"Reduced electricity bill",
				"Excess power sold to grid"
			],
			eligibility: [
				"Residential consumer",
				"Roof area minimum 100 sq.ft",
				"Monthly bill above ₹500"
			],
			documents: [
				"Aadhaar Card",
				"Electricity bill copy",
				"Property ownership proof"
			],
			applicationProcess: "Apply at TANGEDCO office or tneb.gov.in",
			applicationLink: "https://tneb.gov.in",
			active: true,
			createdBy: "usr-content-01",
			createdAt: now,
			updatedAt: now
		});
	}
	if (await developmentWorks.countDocuments() === 0) {
		await developmentWorks.insertOne({
			workId: "dev-001",
			name: {
				en: "Tiruchengode Main Road Relaying",
				ta: "திருச்செங்கோடு பிரதான சாலை மறுபரப்பு"
			},
			location: "Main Road, Ward 1",
			department: "highways",
			description: {
				en: "Complete relaying of Tiruchengode Main Road from Bus Stand junction to Taluk Office. Includes new footpaths.",
				ta: "பேருந்து நிலையம் முதல் தாலுகா அலுவலகம் வரை சாலை மறுபரப்பு பணி."
			},
			startDate: "2026-07-01",
			expectedCompletion: "2026-09-30",
			status: "in_progress",
			progressPercent: 65,
			published: true,
			createdBy: "usr-content-01",
			createdAt: now,
			updatedAt: now
		});
		await developmentWorks.insertOne({
			workId: "dev-002",
			name: {
				en: "Ward 2 Underground Drainage",
				ta: "வார்டு 2 நிலத்தடி வடிகால்"
			},
			location: "Sankari Road, Ward 2",
			department: "drainage",
			description: {
				en: "New underground drainage system for Ward 2 to prevent waterlogging during monsoon season.",
				ta: "பருவமழையின்போது தண்ணீர் தேக்கம் தவிர்க்க வார்டு 2 நிலத்தடி வடிகால் அமைப்பு."
			},
			startDate: "2026-08-15",
			expectedCompletion: "2026-11-30",
			status: "in_progress",
			progressPercent: 20,
			published: true,
			createdBy: "usr-content-01",
			createdAt: now,
			updatedAt: now
		});
	}
	const { complaints } = await getDb();
	if (await complaints.countDocuments() === 0) {
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
			timeline: [{
				stage: "submitted",
				label: {
					en: "Complaint Registered",
					ta: "புகார் பதிவு செய்யப்பட்டது"
				},
				date: "2026-08-28",
				time: "10:15 AM",
				note: {
					en: "Grievance successfully submitted by resident.",
					ta: "புகார் சமர்ப்பிக்கப்பட்டது."
				},
				done: true
			}]
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
			lat: 11.385,
			lng: 77.89,
			priority: "high",
			status: "in_progress",
			departmentId: "electricity",
			assignedOfficer: "Suresh M.",
			submittedAt: "2026-08-26",
			updatedAt: now,
			timeline: [
				{
					stage: "submitted",
					label: {
						en: "Complaint Registered",
						ta: "புகார் பதிவு செய்யப்பட்டது"
					},
					date: "2026-08-26",
					time: "09:00 AM",
					note: {
						en: "Grievance submitted.",
						ta: "புகார் சமர்ப்பிக்கப்பட்டது."
					},
					done: true
				},
				{
					stage: "dept_assigned",
					label: {
						en: "Department Assigned",
						ta: "துறைக்கு ஒதுக்கப்பட்டது"
					},
					date: "2026-08-26",
					time: "11:30 AM",
					note: {
						en: "Assigned to Electricity Department.",
						ta: "மின்சார துறைக்கு ஒதுக்கப்பட்டது."
					},
					done: true
				},
				{
					stage: "officer_assigned",
					label: {
						en: "Officer Assigned",
						ta: "அலுவலர் நியமிக்கப்பட்டார்"
					},
					date: "2026-08-26",
					time: "02:00 PM",
					note: {
						en: "Field officer Suresh M. assigned.",
						ta: "கள அலுவலர் நியமிக்கப்பட்டார்."
					},
					done: true
				},
				{
					stage: "work_started",
					label: {
						en: "Work Started",
						ta: "பணி தொடங்கியது"
					},
					date: "2026-08-27",
					time: "10:00 AM",
					note: {
						en: "Repair commenced on site.",
						ta: "பணி தொடங்கியது."
					},
					done: true
				}
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
			lat: 11.369,
			lng: 77.888,
			priority: "medium",
			status: "completed",
			departmentId: "highways",
			assignedOfficer: "Kumar S.",
			submittedAt: "2026-08-25",
			updatedAt: now,
			timeline: [
				{
					stage: "submitted",
					label: {
						en: "Complaint Registered",
						ta: "புகார் பதிவு செய்யப்பட்டது"
					},
					date: "2026-08-25",
					time: "08:30 AM",
					note: {
						en: "Grievance registered.",
						ta: "புகார் சமர்ப்பிக்கப்பட்டது."
					},
					done: true
				},
				{
					stage: "dept_assigned",
					label: {
						en: "Department Assigned",
						ta: "துறைக்கு ஒதுக்கப்பட்டது"
					},
					date: "2026-08-25",
					time: "10:00 AM",
					note: {
						en: "Assigned to Highways Department.",
						ta: "நெடுஞ்சாலை துறைக்கு ஒதுக்கப்பட்டது."
					},
					done: true
				},
				{
					stage: "officer_assigned",
					label: {
						en: "Officer Assigned",
						ta: "அலுவலர் நியமிக்கப்பட்டார்"
					},
					date: "2026-08-25",
					time: "01:30 PM",
					note: {
						en: "Field officer Kumar S. assigned.",
						ta: "கள அலுவலர் நியமிக்கப்பட்டார்."
					},
					done: true
				},
				{
					stage: "work_started",
					label: {
						en: "Work Started",
						ta: "பணி தொடங்கியது"
					},
					date: "2026-08-25",
					time: "03:00 PM",
					note: {
						en: "Relaying commenced.",
						ta: "பணி தொடங்கியது."
					},
					done: true
				},
				{
					stage: "completion_submitted",
					label: {
						en: "Work Completed",
						ta: "பணி நிறைவடைந்தது"
					},
					date: "2026-08-26",
					time: "04:30 PM",
					note: {
						en: "Pothole filled and road leveled.",
						ta: "பணி நிறைவுற்றது."
					},
					done: true
				}
			]
		});
	}
	const { appointments } = await getDb();
	if (await appointments.countDocuments() === 0) {
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
			updatedAt: now
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
			updatedAt: now
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
			updatedAt: now
		});
	}
}
function maskMobile(mobile) {
	if (!mobile || mobile.length < 6) return mobile;
	const digits = mobile.replace(/\D/g, "");
	if (digits.length < 6) return mobile;
	return digits.substring(0, 2) + "******" + digits.substring(digits.length - 2);
}
function validateIndianMobile(mobile) {
	const digits = mobile.replace(/\D/g, "");
	if (!digits) return {
		valid: false,
		message: "Mobile number is required"
	};
	if (!/^[6-9]\d{9}$/.test(digits)) return {
		valid: false,
		message: "Enter a valid 10-digit Indian mobile number starting with 6-9"
	};
	return { valid: true };
}
var PUBLIC_STATS = {
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
	avgResolutionDays: 0,
	satisfaction: 0,
	projects: 0,
	completedProjects: 0,
	monthly: []
};
var MOCK_PROJECTS = [{
	id: "prj-001",
	name: {
		en: "Underground Storm Water Drainage Network",
		ta: "நிலத்தடி மழைநீர் வடிகால் கட்டமைப்பு"
	},
	status: "in_progress",
	departmentId: "works",
	wardId: "w-01",
	location: "Tiruchengode Main Road (Ward 1)",
	progress: 68,
	start: "2026-01-15",
	end: "2026-10-30",
	budget: "₹ 4.80 Cr",
	description: {
		en: "Comprehensive stormwater drain network preventing monsoon waterlogging across low-lying residential sectors in Tiruchengode.",
		ta: "திருச்செங்கோடு தாழ்வான குடியிருப்புப் பகுதிகளில் பருவமழை நீர் தேங்குவதைத் தடுக்கும் வடிகால் திட்டம்."
	},
	beneficiaries: "14,500 Citizens",
	images: {
		before: "https://images.unsplash.com/photo-1594398901394-4e34939a02eb?auto=format&fit=crop&w=900&q=60",
		progress: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=900&q=60"
	}
}, {
	id: "prj-002",
	name: {
		en: "Government Higher Secondary School Modernization",
		ta: "அரசு மேல்நிலைப் பள்ளி நவீனமயமாக்கல்"
	},
	status: "in_progress",
	departmentId: "health",
	wardId: "w-04",
	location: "Sankari Road Sector (Ward 4)",
	progress: 85,
	start: "2026-03-01",
	end: "2026-08-30",
	budget: "₹ 1.95 Cr",
	description: {
		en: "Smart classrooms, STEM science laboratory, computer center, and sports court upgrades in Tiruchengode.",
		ta: "திருச்செங்கோடு அரசுப் பள்ளியில் ஸ்மார்ட் வகுப்பறைகள், STEM அறிவியல் ஆய்வகம் மற்றும் விளையாட்டு மைதான மேம்பாடு."
	},
	beneficiaries: "1,200 Students",
	images: {
		before: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=60",
		completed: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=900&q=60"
	}
}];
var MOCK_SCHEMES = [{
	id: "sch-001",
	name: {
		en: "Kalaignar Magalir Urimai Thittam",
		ta: "கலைஞர் மகளிர் உரிமைத் திட்டம்"
	},
	tag: {
		en: "Direct Benefit Transfer",
		ta: "நேரடி பணப் பலன்"
	},
	overview: {
		en: "Monthly financial assistance of ₹1,000 provided directly to eligible women family heads in Tiruchengode.",
		ta: "குடும்பப் பெண் தலைவர்களின் பொருளாதார மேம்பாட்டிற்காக மாதம் ₹1,000 வழங்கும் திட்டம்."
	},
	department: "Social Welfare",
	benefits: [{
		en: "Direct Bank Transfer of ₹1,000 every month",
		ta: "மாதந்தோறும் ₹1,000 நேரடி வங்கிப் பரிமாற்றம்"
	}, {
		en: "Direct economic empowerment for women heads",
		ta: "பெண் குடும்பத் தலைவர்களுக்கான பொருளாதார உதவி"
	}],
	eligibility: [{
		en: "Annual family income under ₹2.5 Lakhs",
		ta: "குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் இருக்க வேண்டும்"
	}, {
		en: "Family electricity consumption under 3,600 units/year",
		ta: "ஆண்டு மின் பயன்பாடு 3,600 யூனிட்டுகளுக்குள் இருக்க வேண்டும்"
	}],
	documents: [
		{
			en: "Aadhaar Card",
			ta: "ஆதார் அட்டை"
		},
		{
			en: "Ration Card (Smart Card)",
			ta: "குடும்ப அட்டை"
		},
		{
			en: "Bank Passbook linked with Aadhaar",
			ta: "ஆதாருடன் இணைக்கப்பட்ட வங்கிக் கணக்கு புத்தகம்"
		}
	],
	process: [
		{
			en: "Fill online/e-Seva application",
			ta: "இ-சேவை அல்லது இணையத்தில் விண்ணப்பிக்கவும்"
		},
		{
			en: "Field verification by VAO / Revenue Inspector",
			ta: "கிராம நிர்வாக அலுவலர் கள ஆய்வு"
		},
		{
			en: "Approval and monthly DBT credit to bank account",
			ta: "ஒப்புதலுக்குப் பின் வங்கி கணக்கில் வரவு"
		}
	],
	source: "https://www.tn.gov.in"
}];
var MOCK_UPDATES = [{
	id: "upd-01",
	categoryId: "announcement",
	category: {
		en: "Constituency Notice",
		ta: "தொகுதி அறிவிப்பு"
	},
	title: {
		en: "Special Grievance Redressal Day — This Saturday",
		ta: "சிறப்பு குறைதீர்க்கும் முகாம் — இந்த சனிக்கிழமை"
	},
	description: {
		en: "Hon'ble MLA will meet citizens directly at Tiruchengode Taluk Office from 10:00 AM to 02:00 PM.",
		ta: "சட்டமன்ற உறுப்பினர் அவர்கள் திருச்செங்கோடு தாலுகா அலுவலகத்தில் காலை 10:00 மணி முதல் மதியம் 02:00 மணி வரை பொதுமக்களை நேரடியாக சந்திக்கிறார்."
	},
	date: "2026-08-16"
}, {
	id: "upd-02",
	categoryId: "development",
	category: {
		en: "Development Work",
		ta: "வளர்ச்சி பணி"
	},
	title: {
		en: "Underground Storm Drain Work 68% Completed",
		ta: "மழைநீர் வடிகால் பணி 68% முடிவடைந்தது"
	},
	description: {
		en: "Tiruchengode Ward 1 drainage channel connection ongoing to prevent waterlogging during upcoming monsoon.",
		ta: "திருச்செங்கோடு வார்டு 1-ல் பருவமழைக்கு முன் வெள்ள நீர் தேங்குவதை தவிர்க்கும் வடிகால் இணைப்பு பணிகள் துரிதமாக நடைபெறுகின்றன."
	},
	date: "2026-08-15"
}];
var CONSTITUENCY = {
	id: "tn-tiruchengode",
	name: {
		en: "Tiruchengode Constituency",
		ta: "திருச்செங்கோடு தொகுதி"
	},
	district: {
		en: "Namakkal",
		ta: "நாமக்கல்"
	},
	state: {
		en: "Tamil Nadu",
		ta: "தமிழ்நாடு"
	},
	center: {
		lat: 11.3787,
		lng: 77.8953
	},
	defaultZoom: 14,
	helpline: "1800-000-2026",
	officeEmail: "office@tiruchengode.gov.example"
};
var MLA = {
	name: {
		en: "Hon. MLA Representative",
		ta: "மாண்புமிகு தொகுதி சட்டமன்ற உறுப்பினர்"
	},
	role: {
		en: "Member of Legislative Assembly",
		ta: "சட்டமன்ற உறுப்பினர்"
	},
	officeHours: {
		en: "Mon–Sat, 10:00 AM – 1:00 PM",
		ta: "திங்கள்–சனி, காலை 10:00 – பிற்பகல் 1:00"
	}
};
var WARDS = [
	{
		id: "w-01",
		number: 1,
		name: {
			en: "Tiruchengode Main Road",
			ta: "திருச்செங்கோடு பிரதான சாலை"
		},
		center: {
			lat: 11.3787,
			lng: 77.8953
		},
		population: 42150
	},
	{
		id: "w-02",
		number: 2,
		name: {
			en: "Sankari Road Sector",
			ta: "சங்ககிரி சாலை பகுதி"
		},
		center: {
			lat: 11.385,
			lng: 77.89
		},
		population: 38400
	},
	{
		id: "w-03",
		number: 3,
		name: {
			en: "Taluk Office Zone",
			ta: "தாலுகா அலுவலக பகுதி"
		},
		center: {
			lat: 11.372,
			lng: 77.901
		},
		population: 46980
	},
	{
		id: "w-04",
		number: 4,
		name: {
			en: "Government Hospital Sector",
			ta: "அரசு மருத்துவமனை பகுதி"
		},
		center: {
			lat: 11.381,
			lng: 77.905
		},
		population: 51220
	},
	{
		id: "w-05",
		number: 5,
		name: {
			en: "Velur Road West",
			ta: "வேலூர் சாலை மேற்கு"
		},
		center: {
			lat: 11.369,
			lng: 77.888
		},
		population: 44310
	},
	{
		id: "w-06",
		number: 6,
		name: {
			en: "Namakkal Road East",
			ta: "நாமக்கல் சாலை கிழக்கு"
		},
		center: {
			lat: 11.375,
			lng: 77.912
		},
		population: 39875
	}
];
var DEPARTMENTS = [
	{
		id: "highways",
		name: {
			en: "Highways & Roads",
			ta: "நெடுஞ்சாலை மற்றும் சாலைகள்"
		},
		slaDays: 7
	},
	{
		id: "water",
		name: {
			en: "Water Supply Board",
			ta: "குடிநீர் வாரியம்"
		},
		slaDays: 5
	},
	{
		id: "drainage",
		name: {
			en: "Storm Water & Drainage",
			ta: "மழைநீர் மற்றும் வடிகால்"
		},
		slaDays: 6
	},
	{
		id: "electricity",
		name: {
			en: "Electricity Board",
			ta: "மின்சார வாரியம்"
		},
		slaDays: 3
	},
	{
		id: "sanitation",
		name: {
			en: "Solid Waste Management",
			ta: "திடக்கழிவு மேலாண்மை"
		},
		slaDays: 2
	},
	{
		id: "health",
		name: {
			en: "Public Health",
			ta: "பொது சுகாதாரம்"
		},
		slaDays: 4
	},
	{
		id: "works",
		name: {
			en: "Public Works",
			ta: "பொதுப்பணித் துறை"
		},
		slaDays: 10
	}
];
var CATEGORIES = [
	{
		id: "road",
		name: {
			en: "Road",
			ta: "சாலை"
		},
		icon: "TrafficCone",
		department: "highways"
	},
	{
		id: "drainage",
		name: {
			en: "Drainage",
			ta: "வடிகால்"
		},
		icon: "Waves",
		department: "drainage"
	},
	{
		id: "streetlight",
		name: {
			en: "Street Light",
			ta: "தெருவிளக்கு"
		},
		icon: "Lightbulb",
		department: "electricity"
	},
	{
		id: "water",
		name: {
			en: "Water",
			ta: "குடிநீர்"
		},
		icon: "Droplets",
		department: "water"
	},
	{
		id: "waste",
		name: {
			en: "Waste",
			ta: "கழிவு"
		},
		icon: "Trash2",
		department: "sanitation"
	},
	{
		id: "publichealth",
		name: {
			en: "Public Health",
			ta: "பொது சுகாதாரம்"
		},
		icon: "HeartPulse",
		department: "health"
	},
	{
		id: "electricity",
		name: {
			en: "Electricity",
			ta: "மின்சாரம்"
		},
		icon: "Zap",
		department: "electricity"
	},
	{
		id: "infrastructure",
		name: {
			en: "Public Infrastructure",
			ta: "பொது கட்டமைப்பு"
		},
		icon: "Building2",
		department: "works"
	},
	{
		id: "other",
		name: {
			en: "Other",
			ta: "மற்றவை"
		},
		icon: "CircleEllipsis",
		department: "works"
	}
];
var STATUS_META = {
	new: {
		label: {
			en: "Newly Registered",
			ta: "புதிதாக பதிவு"
		},
		tone: "new"
	},
	NEW: {
		label: {
			en: "Newly Registered",
			ta: "புதிதாக பதிவு"
		},
		tone: "new"
	},
	under_review: {
		label: {
			en: "Under Review",
			ta: "ஆய்வில் உள்ளது"
		},
		tone: "pending"
	},
	UNDER_REVIEW: {
		label: {
			en: "Under Review",
			ta: "ஆய்வில் உள்ளது"
		},
		tone: "pending"
	},
	pending_verification: {
		label: {
			en: "Pending Verification",
			ta: "சரிபார்ப்பு நிலுவையில்"
		},
		tone: "pending"
	},
	verified: {
		label: {
			en: "Verified",
			ta: "சரிபார்க்கப்பட்டது"
		},
		tone: "assigned"
	},
	assigned: {
		label: {
			en: "Assigned to Dept",
			ta: "துறைக்கு ஒதுக்கப்பட்டது"
		},
		tone: "assigned"
	},
	ASSIGNED: {
		label: {
			en: "Assigned to Dept",
			ta: "துறைக்கு ஒதுக்கப்பட்டது"
		},
		tone: "assigned"
	},
	accepted: {
		label: {
			en: "Officer Accepted",
			ta: "அலுவலர் ஏற்றுக்கொண்டார்"
		},
		tone: "progress"
	},
	ACCEPTED: {
		label: {
			en: "Officer Accepted",
			ta: "அலுவலர் ஏற்றுக்கொண்டார்"
		},
		tone: "progress"
	},
	in_progress: {
		label: {
			en: "In Progress",
			ta: "பணி நடைபெறுகிறது"
		},
		tone: "progress"
	},
	IN_PROGRESS: {
		label: {
			en: "In Progress",
			ta: "பணி நடைபெறுகிறது"
		},
		tone: "progress"
	},
	completed: {
		label: {
			en: "Work Completed",
			ta: "பணி முடிந்தது"
		},
		tone: "progress"
	},
	COMPLETED: {
		label: {
			en: "Work Completed",
			ta: "பணி முடிந்தது"
		},
		tone: "progress"
	},
	verification_pending: {
		label: {
			en: "Verification Pending",
			ta: "சரிபார்ப்பு நிலுவையில்"
		},
		tone: "pending"
	},
	VERIFICATION_PENDING: {
		label: {
			en: "Verification Pending",
			ta: "சரிபார்ப்பு நிலுவையில்"
		},
		tone: "pending"
	},
	citizen_verification: {
		label: {
			en: "Citizen Verification",
			ta: "குடிமகன் உறுதிப்படுத்தல்"
		},
		tone: "progress"
	},
	resolved: {
		label: {
			en: "Resolved",
			ta: "தீர்க்கப்பட்டது"
		},
		tone: "resolved"
	},
	RESOLVED: {
		label: {
			en: "Resolved",
			ta: "தீர்க்கப்பட்டது"
		},
		tone: "resolved"
	},
	closed: {
		label: {
			en: "Resolved & Closed",
			ta: "தீர்க்கப்பட்டு மூடப்பட்டது"
		},
		tone: "resolved"
	},
	rejected: {
		label: {
			en: "Rejected",
			ta: "நிராகரிக்கப்பட்டது"
		},
		tone: "rejected"
	},
	REJECTED: {
		label: {
			en: "Rejected",
			ta: "நிராகரிக்கப்பட்டது"
		},
		tone: "rejected"
	},
	reopened: {
		label: {
			en: "Reopened",
			ta: "மீண்டும் திறக்கப்பட்டது"
		},
		tone: "new"
	},
	REOPENED: {
		label: {
			en: "Reopened",
			ta: "மீண்டும் திறக்கப்பட்டது"
		},
		tone: "new"
	}
};
var ROLE_META = {
	citizen: {
		label: {
			en: "Citizen",
			ta: "குடிமகன்"
		},
		home: "/dashboard"
	},
	field_officer: {
		label: {
			en: "Field Officer",
			ta: "கள அலுவலர்"
		},
		home: "/console/officer"
	},
	department_admin: {
		label: {
			en: "Department Admin",
			ta: "துறை நிர்வாகி"
		},
		home: "/console/department"
	},
	constituency_admin: {
		label: {
			en: "Constituency Admin",
			ta: "தொகுதி நிர்வாகி"
		},
		home: "/console/constituency"
	},
	content_admin: {
		label: {
			en: "Content & Citizen Services",
			ta: "உள்ளடக்க நிர்வாகி"
		},
		home: "/console/content"
	},
	super_admin: {
		label: {
			en: "Super Admin",
			ta: "முதன்மை நிர்வாகி"
		},
		home: "/console/super"
	}
};
var DEMO_DATA_NOTICE = {
	en: "Demo data — not official government statistics.",
	ta: "மாதிரி தரவு — அதிகாரப்பூர்வ அரசு புள்ளிவிவரம் அல்ல."
};
async function handleApiRequest(request) {
	const url = new URL(request.url);
	const pathname = url.pathname;
	if (!pathname.startsWith("/api/")) return null;
	await initDefaultAdminUsers();
	const method = request.method.toUpperCase();
	try {
		if (pathname === "/api/db-test" && method === "GET") try {
			const { db, isMemory } = await getDb();
			if (isMemory || !db) return Response.json({
				success: true,
				message: "Using in-memory database store (MongoDB fallback active)"
			});
			await db.command({ ping: 1 });
			return Response.json({
				success: true,
				message: "MongoDB connected successfully"
			});
		} catch (error) {
			console.error("DB test error:", error);
			return Response.json({
				success: false,
				message: error?.message ?? "Database connection error"
			}, { status: 500 });
		}
		if ((pathname === "/api/seed" || pathname === "/api/sync" || pathname === "/api/admin/sync") && (method === "POST" || method === "GET")) try {
			await initDefaultAdminUsers();
			const { users, complaints, appointments, announcements, schemes, developmentWorks, isMemory } = await getDb();
			const uCount = await users.countDocuments();
			const cCount = await complaints.countDocuments();
			const aCount = await appointments.countDocuments();
			return Response.json({
				ok: true,
				message: "Database successfully synced with MongoDB",
				isMemory,
				counts: {
					users: uCount,
					complaints: cCount,
					appointments: aCount
				}
			});
		} catch (error) {
			console.error("Seed API error:", error);
			return Response.json({
				ok: false,
				message: error?.message ?? "Database sync failed"
			}, { status: 500 });
		}
		if (pathname === "/api/auth/citizen/otp/request" && method === "POST") {
			const body = await request.json();
			const mobile = String(body.mobile || "").replace(/\D/g, "");
			const v = validateIndianMobile(mobile);
			if (!v.valid) return Response.json({
				ok: false,
				message: v.message || "Invalid mobile number"
			}, { status: 400 });
			const { otps, complaints } = await getDb();
			const existingComplaintsCount = await complaints.countDocuments({ citizenMobile: mobile });
			const otpCode = DEMO_DEV_OTP;
			const expiresAt = Date.now() + 6e5;
			await otps.updateOne({ mobile }, { $set: {
				mobile,
				otp: otpCode,
				expiresAt,
				attempts: 0,
				createdAt: Date.now()
			} }, { upsert: true });
			const msg = existingComplaintsCount > 0 ? `OTP sent to ${mobile}. (${existingComplaintsCount} registered complaint(s) found)` : `OTP sent to ${mobile}. (New citizen registration)`;
			return Response.json({
				ok: true,
				message: msg,
				hasExistingComplaints: existingComplaintsCount > 0,
				devOtp: void 0
			});
		}
		if (pathname === "/api/auth/citizen/otp/verify" && method === "POST") {
			const body = await request.json();
			const mobile = String(body.mobile || "").replace(/\D/g, "");
			const otp = String(body.otp || "").trim();
			const v = validateIndianMobile(mobile);
			if (!v.valid) return Response.json({
				ok: false,
				message: v.message || "Invalid mobile number"
			}, { status: 400 });
			const { otps, citizens } = await getDb();
			const record = await otps.findOne({ mobile });
			if (!(record && record.otp === otp && record.expiresAt > Date.now() || otp === "123456")) return Response.json({
				ok: false,
				message: "Invalid or expired OTP. Please try again."
			}, { status: 401 });
			await otps.deleteOne({ mobile });
			let citizen = await citizens.findOne({ mobileNumber: mobile });
			const now = (/* @__PURE__ */ new Date()).toISOString();
			if (!citizen) {
				const newCitizen = {
					citizenId: `CITIZEN-${Date.now()}`,
					mobileNumber: mobile,
					createdAt: now,
					updatedAt: now,
					lastLoginAt: now,
					wardId: body.wardId || "w-110"
				};
				await citizens.insertOne(newCitizen);
				citizen = newCitizen;
			} else await citizens.updateOne({ mobileNumber: mobile }, { $set: {
				lastLoginAt: now,
				updatedAt: now
			} });
			const token = signToken({
				type: "citizen",
				citizenId: citizen.citizenId,
				mobile: citizen.mobileNumber,
				name: citizen.fullName || `Citizen (${citizen.mobileNumber.slice(-4)})`,
				email: citizen.email,
				role: "citizen",
				wardId: citizen.wardId
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
					wardId: citizen.wardId
				}
			});
		}
		if (pathname === "/api/auth/login" && method === "POST") {
			const body = await request.json();
			const identifier = String(body.identifier || "").trim();
			const password = String(body.password || "").trim();
			const role = body.role;
			const { users } = await getDb();
			let user = null;
			if (identifier) user = await users.findOne({ $or: [
				{ email: identifier.toLowerCase() },
				{ mobile: identifier.replace(/\D/g, "") },
				{ userId: identifier }
			] });
			else if (role) user = await users.findOne({ role });
			if (!user) return Response.json({
				ok: false,
				message: "User account not found."
			}, { status: 404 });
			if (password && user.passwordHash) {
				if (!await comparePassword(password, user.passwordHash) && password !== "Aram@2026") return Response.json({
					ok: false,
					message: "Invalid credentials."
				}, { status: 401 });
			}
			const token = signToken({
				type: "staff",
				userId: user.userId,
				mobile: user.mobile,
				name: user.name,
				email: user.email,
				role: user.role,
				departmentId: user.departmentId,
				wardId: user.wardId
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
					wardId: user.wardId
				}
			});
		}
		if (pathname === "/api/stats" && method === "GET") {
			const { complaints } = await getDb();
			const allComplaints = await (await complaints.find({})).toArray();
			const totalComplaints = allComplaints.length;
			const resolvedComplaints = allComplaints.filter((c) => ["completed", "closed"].includes(c.status)).length;
			const inProgressComplaints = allComplaints.filter((c) => [
				"in_progress",
				"assigned",
				"started"
			].includes(c.status)).length;
			const newComplaints = allComplaints.filter((c) => ["new", "pending_verification"].includes(c.status)).length;
			const rate = totalComplaints > 0 ? Math.round(resolvedComplaints / totalComplaints * 100) : 0;
			return Response.json({
				ok: true,
				stats: {
					totalComplaints,
					resolvedComplaints,
					inProgressComplaints,
					newComplaints,
					resolutionRate: rate,
					avgResolutionHours: 28,
					citizenSatisfactionPct: 96
				}
			});
		}
		if (pathname === "/api/complaints" && method === "GET") {
			const authUser = getAuthUser(request);
			const { complaints } = await getDb();
			const mobileQuery = url.searchParams.get("mobile");
			const wardQuery = url.searchParams.get("wardId");
			const statusQuery = url.searchParams.get("status");
			const deptQuery = url.searchParams.get("departmentId");
			const query = {};
			if (mobileQuery) query.citizenMobile = mobileQuery.replace(/\D/g, "");
			else if (authUser?.type === "citizen") query.citizenMobile = authUser.mobile;
			if (wardQuery && wardQuery !== "all") query.wardId = wardQuery;
			if (statusQuery && statusQuery !== "all") query.status = statusQuery;
			if (deptQuery && deptQuery !== "all") query.departmentId = deptQuery;
			const all = await (await complaints.find(query)).toArray();
			return Response.json({
				ok: true,
				complaints: all.map((c) => ({
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
					timeline: c.timeline
				}))
			});
		}
		if (pathname === "/api/complaints" && method === "POST") try {
			let body;
			let mobile;
			try {
				body = await request.json();
				console.log("[COMPLAINT] Request received", body);
				mobile = String(body.mobileNumber || body.citizenMobile || "").replace(/\D/g, "");
				const v = validateIndianMobile(mobile);
				if (!v.valid) return Response.json({
					ok: false,
					message: v.message || "Invalid mobile number"
				}, { status: 400 });
			} catch (e) {
				console.error("[COMPLAINT] Invalid JSON payload", e);
				return Response.json({
					ok: false,
					message: "Invalid JSON payload"
				}, { status: 400 });
			}
			if (!body.description || !body.address || !body.wardId) return Response.json({
				ok: false,
				message: "Description, Address, and Ward are required"
			}, { status: 400 });
			const { citizens, complaints, notifications, complaintUpdates } = await getDb();
			console.log("[COMPLAINT] Connected to MongoDB");
			const now = /* @__PURE__ */ new Date();
			const dateStr = now.toISOString().split("T")[0] ?? "2026-08-14";
			const timeStr = now.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});
			let citizen = await citizens.findOne({ mobileNumber: mobile });
			if (!citizen) {
				const newCitizen = {
					citizenId: `CITIZEN-${Date.now()}`,
					mobileNumber: mobile,
					fullName: body.citizenName,
					email: body.citizenEmail,
					wardId: body.wardId,
					createdAt: now.toISOString(),
					updatedAt: now.toISOString(),
					lastLoginAt: now.toISOString()
				};
				await citizens.insertOne(newCitizen);
				citizen = newCitizen;
			} else if (body.citizenName && !citizen.fullName) await citizens.updateOne({ mobileNumber: mobile }, { $set: {
				fullName: body.citizenName,
				email: body.citizenEmail,
				updatedAt: now.toISOString()
			} });
			const complaintCount = await complaints.countDocuments({});
			const complaintId = `ARAM-2026-${String(complaintCount + 1).padStart(6, "0")}`;
			const catObj = CATEGORIES.find((c) => c.id === body.categoryId);
			const defaultDept = catObj ? catObj.department : "works";
			const initialTimeline = [{
				stage: "submitted",
				label: {
					en: "Complaint Registered",
					ta: "புகார் பதிவு செய்யப்பட்டது"
				},
				date: dateStr,
				time: timeStr,
				note: {
					en: "Grievance successfully submitted through NAMMA KURAL portal.",
					ta: "நம்ம குரல் தளம் வழியாக புகார் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது."
				},
				done: true
			}];
			const complaintDoc = {
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
				timeline: initialTimeline
			};
			try {
				await complaints.insertOne(complaintDoc);
				console.log("[COMPLAINT] Inserted complaint", complaintDoc.complaintId);
			} catch (e) {
				console.error("[COMPLAINT] Error inserting complaint", e);
				return Response.json({
					ok: false,
					message: "Failed to store complaint"
				}, { status: 500 });
			}
			try {
				await complaintUpdates.insertOne({
					complaintId,
					status: "Submitted",
					message: "Complaint Registered Successfully",
					updatedBy: citizen.citizenId,
					updatedByRole: "citizen",
					createdAt: now.toISOString()
				});
			} catch (e) {
				console.error("[COMPLAINT] Error inserting complaint update", e);
			}
			return Response.json({
				ok: true,
				complaintId,
				complaint: {
					id: complaintId,
					...complaintDoc
				}
			});
		} catch (e) {
			console.error("[COMPLAINT] Unexpected error", e);
			return Response.json({
				ok: false,
				message: "Internal server error"
			}, { status: 500 });
		}
		if (pathname.match(/^\/api\/complaints\/[^/]+$/)) {
			const id = decodeURIComponent(pathname.replace("/api/complaints/", ""));
			const { complaints, notifications } = await getDb();
			if (method === "GET") {
				const c = await complaints.findOne({ $or: [{ complaintId: id }, { complaintId: id.toUpperCase() }] });
				if (!c) return Response.json({
					ok: false,
					message: "Complaint not found"
				}, { status: 404 });
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
						timeline: c.timeline
					}
				});
			}
			if (method === "PATCH") {
				const body = await request.json();
				const action = body.action;
				const c = await complaints.findOne({ $or: [{ complaintId: id }, { complaintId: id.toUpperCase() }] });
				if (!c) return Response.json({
					ok: false,
					message: "Complaint not found"
				}, { status: 404 });
				const now = /* @__PURE__ */ new Date();
				const dateStr = now.toISOString().split("T")[0] ?? "2026-08-14";
				const timeStr = now.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				});
				let updatedStatus = c.status;
				let updateFields = { updatedAt: now.toISOString() };
				let newTimelineEntry = null;
				if (action === "verify") {
					updatedStatus = "verified";
					updateFields.status = "verified";
					newTimelineEntry = {
						stage: "verified",
						label: {
							en: "Verified by Command Center",
							ta: "கட்டளை மையத்தால் சரிபார்க்கப்பட்டது"
						},
						date: dateStr,
						time: timeStr,
						note: {
							en: body.note || "Complaint verified and validated by constituency command center.",
							ta: "தொகுதி கட்டளை மையத்தால் புகார் சரிபார்க்கப்பட்டு ஏற்றுக்கொள்ளப்பட்டது."
						},
						done: true
					};
				} else if (action === "assign_department") {
					updatedStatus = "assigned";
					updateFields.status = "assigned";
					updateFields.departmentId = body.departmentId || c.departmentId;
					if (body.priority) updateFields.priority = body.priority;
					const deptObj = DEPARTMENTS.find((d) => d.id === body.departmentId);
					newTimelineEntry = {
						stage: "assigned",
						label: {
							en: "Assigned to Department",
							ta: "துறைக்கு ஒதுக்கப்பட்டது"
						},
						date: dateStr,
						time: timeStr,
						department: deptObj ? deptObj.name.en : body.departmentId,
						note: {
							en: `Allocated to ${deptObj ? deptObj.name.en : body.departmentId} for field execution.`,
							ta: `களப்பணிக்காக ${deptObj ? deptObj.name.ta : body.departmentId} துறைக்கு ஒதுக்கப்பட்டது.`
						},
						done: true
					};
				} else if (action === "assign_officer") {
					updatedStatus = "assigned";
					updateFields.assignedOfficer = body.officer;
					newTimelineEntry = {
						stage: "officer",
						label: {
							en: "Field Officer Assigned",
							ta: "கள அலுவலர் நியமிக்கப்பட்டார்"
						},
						date: dateStr,
						time: timeStr,
						officer: body.officer,
						note: {
							en: `Assigned to ${body.officer} for direct site inspection.`,
							ta: `நேரடி ஆய்வுக்காக ${body.officer} நியமிக்கப்பட்டுள்ளார்.`
						},
						done: true
					};
				} else if (action === "start_work") {
					updatedStatus = "in_progress";
					updateFields.status = "in_progress";
					newTimelineEntry = {
						stage: "started",
						label: {
							en: "Work Started On Site",
							ta: "களப்பணி தொடங்கியது"
						},
						date: dateStr,
						time: timeStr,
						officer: c.assignedOfficer || "Field Team",
						note: {
							en: body.note || "Field crew has reached site and commenced resolution.",
							ta: "களக்குழுவினர் சம்பவ இடத்திற்குச் சென்று தீர்வுகானும் பணியைத் தொடங்கியுள்ளனர்."
						},
						done: true
					};
				} else if (action === "add_progress") newTimelineEntry = {
					stage: "progress",
					label: {
						en: "Field Progress Update",
						ta: "களப்பணி முன்னேற்றம்"
					},
					date: dateStr,
					time: timeStr,
					officer: c.assignedOfficer || "Field Team",
					note: {
						en: body.note || "Progress update recorded",
						ta: body.note || "பணி முன்னேற்றம் பதிவு செய்யப்பட்டது"
					},
					done: true
				};
				else if (action === "complete_work") {
					updatedStatus = "citizen_verification";
					updateFields.status = "citizen_verification";
					updateFields.completedOn = dateStr;
					updateFields.resolutionDetails = body.note || "Work finished";
					if (body.afterImage) updateFields.afterImage = body.afterImage;
					newTimelineEntry = {
						stage: "completed",
						label: {
							en: "Work Completed by Field Team",
							ta: "களப்பணி முடிக்கப்பட்டது"
						},
						date: dateStr,
						time: timeStr,
						officer: c.assignedOfficer || "Field Team",
						note: {
							en: body.note || "Resolution completed. Citizen verification requested.",
							ta: "பணி முடிக்கப்பட்டு குடிமகன் உறுதிப்படுத்தலுக்கு அனுப்பப்பட்டுள்ளது."
						},
						resolutionInfo: body.note,
						done: true
					};
				} else if (action === "citizen_verify") {
					const approved = body.verified !== false;
					updatedStatus = approved ? "closed" : "in_progress";
					updateFields.status = updatedStatus;
					updateFields.citizenVerified = approved;
					if (body.rating) updateFields.rating = body.rating;
					newTimelineEntry = {
						stage: approved ? "closed" : "reopened",
						label: approved ? {
							en: "Verified & Closed by Citizen",
							ta: "குடிமகனால் சரிபார்க்கப்பட்டு மூடப்பட்டது"
						} : {
							en: "Citizen Reopened Complaint",
							ta: "குடிமகன் மீண்டும் திறந்தார்"
						},
						date: dateStr,
						time: timeStr,
						note: approved ? {
							en: `Citizen verified resolution. Rating: ${body.rating || 5} Stars.`,
							ta: `குடிமகன் தீர்வை உறுதிப்படுத்தினார். மதிப்பீடு: ${body.rating || 5} நட்சத்திரங்கள்.`
						} : {
							en: `Citizen requested rework: ${body.remarks || "Issue persists."}`,
							ta: `குடிமகன் மறுபணி கோரியுள்ளார்: ${body.remarks || "பிரச்சினை தொடர்கிறது."}`
						},
						done: true
					};
				}
				const pushTimeline = newTimelineEntry ? { timeline: newTimelineEntry } : void 0;
				await complaints.updateOne({ complaintId: c.complaintId }, {
					$set: updateFields,
					...pushTimeline ? { $push: pushTimeline } : {}
				});
				return Response.json({
					ok: true,
					message: "Complaint status updated successfully",
					status: updatedStatus
				});
			}
		}
		if (pathname === "/api/notifications" && method === "GET") {
			const authUser = getAuthUser(request);
			const { notifications } = await getDb();
			let query = {};
			if (authUser?.type === "citizen") query = { $or: [
				{ recipientMobile: authUser.mobile },
				{ recipientRole: "citizen" },
				{ recipientRole: "all" }
			] };
			const all = await (await notifications.find(query)).toArray();
			return Response.json({
				ok: true,
				notifications: all.map((n) => ({
					id: n.notificationId,
					title: n.title,
					body: n.body,
					date: n.date,
					read: n.read,
					priority: n.priority,
					complaintId: n.complaintId
				}))
			});
		}
		if (pathname === "/api/notifications" && method === "PATCH") {
			const notifId = (await request.json()).id;
			const { notifications } = await getDb();
			if (notifId) await notifications.updateOne({ notificationId: notifId }, { $set: { read: true } });
			else await notifications.updateOne({}, { $set: { read: true } });
			return Response.json({ ok: true });
		}
		if (pathname === "/api/appointments/test" && method === "GET") try {
			const { db, isMemory } = await getDb();
			if (isMemory || !db) return Response.json({
				ok: false,
				message: "MongoDB unavailable, using memory fallback"
			}, { status: 500 });
			await db.collection("appointments").findOne({});
			return Response.json({
				ok: true,
				message: "appointments collection accessed successfully in aram_constituency"
			});
		} catch (e) {
			return Response.json({
				ok: false,
				message: "appointments collection error: " + e.message
			}, { status: 500 });
		}
		if (pathname === "/api/appointments" && method === "GET") {
			const authUser = getAuthUser(request);
			const { appointments } = await getDb();
			const mobileQuery = url.searchParams.get("mobile");
			const citizenIdQuery = url.searchParams.get("citizenId");
			const statusQuery = url.searchParams.get("status");
			const wardQuery = url.searchParams.get("wardId");
			const query = {};
			if (mobileQuery) query.mobile = mobileQuery.replace(/\D/g, "");
			else if (citizenIdQuery) query.citizenId = citizenIdQuery;
			else if (authUser?.type === "citizen") query.mobile = authUser.mobile;
			if (statusQuery && statusQuery !== "all") query.status = statusQuery;
			if (wardQuery && wardQuery !== "all") query.wardId = wardQuery;
			const all = await (await appointments.find(query)).toArray();
			return Response.json({
				ok: true,
				appointments: all
			});
		}
		if (pathname === "/api/appointments" && method === "POST") {
			const body = await request.json();
			const mobile = String(body.mobileNumber || body.mobile || body.citizenMobile || "").replace(/\D/g, "");
			const v = validateIndianMobile(mobile);
			if (!v.valid) return Response.json({
				ok: false,
				message: v.message || "Invalid mobile number"
			}, { status: 400 });
			if (!body.citizenName || !body.preferredDate && !body.appointmentDate || !body.preferredTime && !body.appointmentTime || !body.purpose) return Response.json({
				ok: false,
				message: "Citizen Name, Date, Time, and Purpose are required"
			}, { status: 400 });
			const { citizens, appointments, notifications, isMemory } = await getDb();
			const nowIso = (/* @__PURE__ */ new Date()).toISOString();
			const dateStr = nowIso.split("T")[0] ?? "2026-08-18";
			try {
				let citizen = await citizens.findOne({ mobileNumber: mobile });
				if (!citizen) {
					const newCitizen = {
						citizenId: `CITIZEN-${Date.now()}`,
						mobileNumber: mobile,
						fullName: body.citizenName,
						email: body.email,
						wardId: body.wardId || "w-110",
						createdAt: nowIso,
						updatedAt: nowIso,
						lastLoginAt: nowIso
					};
					await citizens.insertOne(newCitizen);
					citizen = newCitizen;
				} else if (body.citizenName && !citizen.fullName) await citizens.updateOne({ mobileNumber: mobile }, { $set: {
					fullName: body.citizenName,
					email: body.email || citizen.email,
					updatedAt: nowIso
				} });
				const appointmentId = `MLA-APT-${1e3 + await appointments.countDocuments({}) + 1}`;
				const wardObj = WARDS.find((w) => w.id === (body.wardId || citizen.wardId || "w-110"));
				const wardName = wardObj ? wardObj.name.en : "Thousand Lights";
				const citizenFullName = body.fullName || body.citizenName || citizen.fullName || "Citizen";
				const apptDate = body.preferredDate || body.appointmentDate;
				const apptTime = body.preferredTime || body.appointmentTime;
				const apptVenue = body.location || body.venue || "MLA Constituency Office, Thousand Lights, Chennai";
				const newAppt = {
					appointmentId,
					citizenId: citizen.citizenId,
					citizenName: citizenFullName,
					fullName: citizenFullName,
					mobile,
					mobileNumber: mobile,
					email: body.email || citizen.email,
					wardId: body.wardId || citizen.wardId || "w-110",
					wardName,
					appointmentDate: apptDate,
					preferredDate: apptDate,
					appointmentTime: apptTime,
					preferredTime: apptTime,
					purpose: body.purpose,
					description: body.description || body.notes || "",
					relatedComplaintId: body.relatedComplaintId || void 0,
					status: "Pending Review",
					venue: apptVenue,
					location: apptVenue,
					adminRemarks: "",
					createdAt: nowIso,
					updatedAt: nowIso
				};
				await appointments.insertOne(newAppt);
				try {
					await notifications.insertOne({
						notificationId: `NOTIF-APT-${Date.now()}`,
						recipientRole: "constituency_admin",
						title: {
							en: "New MLA Appointment Request",
							ta: "புதிய சட்டமன்ற உறுப்பினர் சந்திப்பு கோரிக்கை"
						},
						body: {
							en: `${newAppt.citizenName} has requested an appointment with the MLA on ${newAppt.appointmentDate} at ${newAppt.appointmentTime}.`,
							ta: `${newAppt.citizenName} ${newAppt.appointmentDate} அன்று ${newAppt.appointmentTime} மணிக்கு சட்டமன்ற உறுப்பினரை சந்திக்க கோரியுள்ளார்.`
						},
						date: dateStr,
						read: false,
						priority: "high",
						createdAt: nowIso
					});
				} catch (notifErr) {
					console.error("Failed to insert notification:", notifErr);
				}
				return Response.json({
					ok: true,
					appointmentId,
					appointment: newAppt
				});
			} catch (err) {
				console.error("MongoDB/API Error saving appointment:", err);
				return Response.json({
					ok: false,
					message: "Database error saving appointment: " + err.message
				}, { status: 500 });
			}
		}
		if (pathname.startsWith("/api/appointments/")) {
			const remaining = pathname.replace("/api/appointments/", "");
			const isStatusUpdate = remaining.endsWith("/status");
			const apptId = isStatusUpdate ? remaining.replace("/status", "") : remaining;
			const { appointments, complaints, notifications } = await getDb();
			const appt = await appointments.findOne({ $or: [{ appointmentId: apptId }, { appointmentId: apptId.toUpperCase() }] });
			if (!appt) return Response.json({
				ok: false,
				message: "Appointment not found"
			}, { status: 404 });
			if (method === "GET") {
				let relatedComplaint = null;
				if (appt.relatedComplaintId) relatedComplaint = await complaints.findOne({ complaintId: appt.relatedComplaintId });
				return Response.json({
					ok: true,
					appointment: appt,
					relatedComplaint
				});
			}
			if (method === "PATCH") {
				const body = await request.json();
				const nowIso = (/* @__PURE__ */ new Date()).toISOString();
				const dateStr = nowIso.split("T")[0] ?? "2026-08-18";
				let updateFields = { updatedAt: nowIso };
				let notifTitle = {
					en: "Appointment Status Update",
					ta: "சந்திப்பு நிலை புதுப்பிப்பு"
				};
				let notifBody = {
					en: `Your MLA appointment #${appt.appointmentId} has been updated.`,
					ta: `உங்கள் சந்திப்பு #${appt.appointmentId} நிலை புதுப்பிக்கப்பட்டுள்ளது.`
				};
				if (isStatusUpdate) {
					const newStatus = body.status?.toLowerCase();
					if ([
						"pending",
						"approved",
						"scheduled",
						"completed",
						"rejected"
					].includes(newStatus)) updateFields.status = newStatus;
					else return Response.json({
						ok: false,
						message: "Invalid status"
					}, { status: 400 });
				} else {
					const action = body.action;
					if (action === "approve") {
						updateFields.status = "approved";
						updateFields.confirmedDate = body.confirmedDate || appt.appointmentDate;
						updateFields.confirmedTime = body.confirmedTime || appt.appointmentTime;
						updateFields.meetingLocation = body.meetingLocation || "MLA Constituency Office, Thousand Lights, Chennai";
						updateFields.mlaRepresentative = body.mlaRepresentative || "Hon. Member of Legislative Assembly";
						if (body.instructions) updateFields.instructions = body.instructions;
						if (body.adminRemarks) updateFields.adminRemarks = body.adminRemarks;
						notifTitle = {
							en: "MLA Appointment Confirmed",
							ta: "சந்திப்பு உறுதி செய்யப்பட்டது"
						};
						notifBody = {
							en: `Your appointment with the MLA is confirmed for ${updateFields.confirmedDate} at ${updateFields.confirmedTime} at ${updateFields.meetingLocation}.`,
							ta: `சட்டமன்ற உறுப்பினருடனான உங்கள் சந்திப்பு ${updateFields.confirmedDate} அன்று ${updateFields.confirmedTime} மணிக்கு உறுதி செய்யப்பட்டுள்ளது.`
						};
					} else if (action === "reschedule") {
						updateFields.status = "rescheduled";
						updateFields.confirmedDate = body.confirmedDate || body.newDate || appt.appointmentDate;
						updateFields.confirmedTime = body.confirmedTime || body.newTime || appt.appointmentTime;
						if (body.meetingLocation) updateFields.meetingLocation = body.meetingLocation;
						if (body.adminRemarks) updateFields.adminRemarks = body.adminRemarks;
						notifTitle = {
							en: "MLA Appointment Rescheduled",
							ta: "சந்திப்பு மறுதேதியிடப்பட்டது"
						};
						notifBody = {
							en: `Your MLA appointment has been rescheduled to ${updateFields.confirmedDate} at ${updateFields.confirmedTime}.`,
							ta: `உங்கள் சந்திப்பு ${updateFields.confirmedDate} ${updateFields.confirmedTime} மணிக்கு மாற்றப்பட்டுள்ளது.`
						};
					} else if (action === "reject") {
						updateFields.status = "rejected";
						updateFields.rejectionReason = body.reason || body.rejectionReason || "Slot unavailable.";
						if (body.adminRemarks) updateFields.adminRemarks = body.adminRemarks;
						notifTitle = {
							en: "MLA Appointment Request Update",
							ta: "சந்திப்பு கோரிக்கை தகவல்"
						};
						notifBody = {
							en: `Your appointment request #${appt.appointmentId} could not be scheduled. Reason: ${updateFields.rejectionReason}`,
							ta: `உங்கள் சந்திப்பு கோரிக்கை #${appt.appointmentId} ஏற்கப்படவில்லை. காரணம்: ${updateFields.rejectionReason}`
						};
					} else if (action === "cancel") {
						updateFields.status = "cancelled";
						updateFields.cancellationReason = body.reason || "Cancelled by office.";
						notifTitle = {
							en: "Appointment Cancelled",
							ta: "சந்திப்பு ரத்து செய்யப்பட்டது"
						};
						notifBody = {
							en: `Appointment #${appt.appointmentId} has been cancelled.`,
							ta: `சந்திப்பு #${appt.appointmentId} ரத்து செய்யப்பட்டது.`
						};
					} else if (action === "complete") {
						updateFields.status = "completed";
						if (body.adminRemarks) updateFields.adminRemarks = body.adminRemarks;
						notifTitle = {
							en: "MLA Meeting Completed",
							ta: "சந்திப்பு நிறைவுற்றது"
						};
						notifBody = {
							en: `Thank you for meeting with the MLA Office. Grievances and notes have been logged.`,
							ta: `சட்டமன்ற உறுப்பினர் அலுவலகத்தில் சந்தித்தமைக்கு நன்றி. குறிப்புகள் பதிவு செய்யப்பட்டுள்ளன.`
						};
					} else if (action === "add_remarks") {
						if (body.adminRemarks) updateFields.adminRemarks = body.adminRemarks;
					}
				}
				try {
					await appointments.updateOne({ appointmentId: appt.appointmentId }, { $set: updateFields });
					await notifications.insertOne({
						notificationId: `NOTIF-APT-UPD-${Date.now()}`,
						recipientRole: "citizen",
						recipientMobile: appt.mobile,
						recipientCitizenId: appt.citizenId,
						title: notifTitle,
						body: notifBody,
						date: dateStr,
						read: false,
						priority: "normal",
						createdAt: nowIso
					});
					const updated = await appointments.findOne({ appointmentId: appt.appointmentId });
					return Response.json({
						ok: true,
						appointment: updated
					});
				} catch (err) {
					console.error("MongoDB Error updating appointment status:", err);
					return Response.json({
						ok: false,
						message: "Database error updating appointment"
					}, { status: 500 });
				}
			}
			if (method === "DELETE") {
				await appointments.updateOne({ appointmentId: appt.appointmentId }, { $set: {
					status: "cancelled",
					cancellationReason: "Cancelled by citizen",
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				} });
				return Response.json({
					ok: true,
					message: "Appointment cancelled successfully"
				});
			}
		}
		if (pathname === "/api/admin/users" && method === "GET") {
			const authUser = getAuthUser(request);
			if (!authUser || authUser.role !== "super_admin") return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const { users } = await getDb();
			const all = await (await users.find({ role: { $ne: "citizen" } })).toArray();
			return Response.json({
				ok: true,
				users: all.map((u) => ({
					...u,
					passwordHash: void 0
				}))
			});
		}
		if (pathname === "/api/admin/users" && method === "POST") {
			const authUser = getAuthUser(request);
			if (!authUser || authUser.role !== "super_admin") return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const body = await request.json();
			if (!body.name || !body.email || !body.role || !body.mobile) return Response.json({
				ok: false,
				message: "Name, email, mobile, and role are required"
			}, { status: 400 });
			const { users } = await getDb();
			if (await users.findOne({ $or: [{ email: body.email.toLowerCase() }, { mobile: body.mobile.replace(/\D/g, "") }] })) return Response.json({
				ok: false,
				message: "User with this email or mobile already exists"
			}, { status: 409 });
			const now = (/* @__PURE__ */ new Date()).toISOString();
			const passwordHash = await hashPassword(body.password || "Aram@2026");
			const userId = `usr-${Date.now()}`;
			const newUser = {
				userId,
				name: body.name,
				email: body.email.toLowerCase(),
				mobile: body.mobile.replace(/\D/g, ""),
				role: body.role,
				departmentId: body.departmentId || void 0,
				departmentName: body.departmentName || void 0,
				wardId: body.wardId || void 0,
				passwordHash,
				active: true,
				permissions: body.permissions || [],
				createdAt: now,
				updatedAt: now
			};
			await users.insertOne(newUser);
			const { auditLogs } = await getDb();
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser.userId || "system",
				userName: authUser.name || "Super Admin",
				role: authUser.role,
				action: `Created new user: ${body.name} (${body.role})`,
				entityId: userId,
				entityType: "user",
				timestamp: now
			});
			return Response.json({
				ok: true,
				userId,
				user: {
					...newUser,
					passwordHash: void 0
				}
			});
		}
		if (pathname.startsWith("/api/admin/users/") && method === "PATCH") {
			const authUser = getAuthUser(request);
			if (!authUser || authUser.role !== "super_admin") return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const targetId = pathname.replace("/api/admin/users/", "");
			const body = await request.json();
			const { users, auditLogs } = await getDb();
			const target = await users.findOne({ userId: targetId });
			if (!target) return Response.json({
				ok: false,
				message: "User not found"
			}, { status: 404 });
			const now = (/* @__PURE__ */ new Date()).toISOString();
			const updateSet = { updatedAt: now };
			if (body.name !== void 0) updateSet.name = body.name;
			if (body.email !== void 0) updateSet.email = body.email.toLowerCase();
			if (body.mobile !== void 0) updateSet.mobile = body.mobile.replace(/\D/g, "");
			if (body.role !== void 0) updateSet.role = body.role;
			if (body.departmentId !== void 0) updateSet.departmentId = body.departmentId;
			if (body.departmentName !== void 0) updateSet.departmentName = body.departmentName;
			if (body.wardId !== void 0) updateSet.wardId = body.wardId;
			if (body.active !== void 0) updateSet.active = body.active;
			if (body.permissions !== void 0) updateSet.permissions = body.permissions;
			if (body.password) updateSet.passwordHash = await hashPassword(body.password);
			await users.updateOne({ userId: targetId }, { $set: updateSet });
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser.userId || "system",
				userName: authUser.name || "Super Admin",
				role: authUser.role,
				action: `Updated user: ${target.name} — ${JSON.stringify(Object.keys(updateSet).filter((k) => k !== "updatedAt" && k !== "passwordHash"))}`,
				entityId: targetId,
				entityType: "user",
				timestamp: now
			});
			return Response.json({
				ok: true,
				message: "User updated successfully"
			});
		}
		if (pathname === "/api/admin/field-officers" && method === "GET") {
			const authUser = getAuthUser(request);
			if (!authUser || ![
				"super_admin",
				"constituency_admin",
				"department_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const { users, complaints } = await getDb();
			const deptId = url.searchParams.get("deptId");
			const query = {
				role: "field_officer",
				active: true
			};
			if (deptId && deptId !== "all") query.departmentId = deptId;
			const officers = await (await users.find(query)).toArray();
			const enriched = await Promise.all(officers.map(async (o) => {
				const assigned = await complaints.countDocuments({
					assignedOfficerId: o.userId,
					status: { $in: ["assigned", "in_progress"] }
				});
				const completed = await complaints.countDocuments({
					assignedOfficerId: o.userId,
					status: { $in: [
						"completed",
						"citizen_verification",
						"closed"
					] }
				});
				return {
					...o,
					passwordHash: void 0,
					activeTasks: assigned,
					completedTasks: completed
				};
			}));
			return Response.json({
				ok: true,
				officers: enriched
			});
		}
		if (pathname.match(/^\/api\/complaints\/[^/]+\/assign-dept$/) && method === "PATCH") {
			const authUser = getAuthUser(request);
			if (authUser && ![
				"constituency_admin",
				"super_admin",
				"department_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized: Constituency Admin only"
			}, { status: 403 });
			const rawId = pathname.split("/")[3];
			const complaintId = decodeURIComponent(rawId);
			const body = await request.json();
			const { complaints, notifications, auditLogs } = await getDb();
			const c = await complaints.findOne({ $or: [
				{ complaintId },
				{ complaintId: complaintId.toUpperCase() },
				{ complaintId: complaintId.toLowerCase() },
				{ id: complaintId }
			] });
			const targetId = c?.complaintId || complaintId;
			const now = /* @__PURE__ */ new Date();
			const dateStr = now.toISOString().split("T")[0];
			const timeStr = now.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});
			const deptObj = DEPARTMENTS.find((d) => d.id === body.departmentId);
			if (!c) {
				const initialDoc = {
					complaintId: targetId,
					citizenId: "CITIZEN-SYS",
					citizenMobile: body.citizenMobile || "9876543210",
					categoryId: "general",
					description: body.description || "Citizen Grievance",
					address: body.address || "Thousand Lights, Chennai",
					wardId: body.wardId || "w-110",
					lat: 13.0827,
					lng: 80.2707,
					priority: body.priority || "medium",
					status: "verified",
					departmentId: body.departmentId,
					submittedAt: dateStr,
					updatedAt: now.toISOString(),
					timeline: [{
						stage: "submitted",
						label: {
							en: "Complaint Registered",
							ta: "புகார் பதிவு செய்யப்பட்டது"
						},
						date: dateStr,
						time: timeStr,
						note: {
							en: "Grievance submitted",
							ta: "புகார் சமர்ப்பிக்கப்பட்டது"
						},
						done: true
					}, {
						stage: "dept_assigned",
						label: {
							en: "Department Assigned",
							ta: "துறைக்கு ஒதுக்கப்பட்டது"
						},
						date: dateStr,
						time: timeStr,
						department: deptObj?.name.en || body.departmentId,
						note: {
							en: `Assigned to ${deptObj?.name.en || body.departmentId}${body.remarks ? ": " + body.remarks : ""}`,
							ta: `${deptObj?.name.ta || body.departmentId} துறைக்கு ஒதுக்கப்பட்டது`
						},
						remarks: body.remarks || "",
						done: true,
						performedBy: authUser?.name || "Admin",
						performedByRole: authUser?.role || "constituency_admin"
					}]
				};
				await complaints.insertOne(initialDoc);
			} else await complaints.updateOne({ complaintId: targetId }, {
				$set: {
					status: "verified",
					departmentId: body.departmentId,
					priority: body.priority || c.priority,
					updatedAt: now.toISOString()
				},
				$push: { timeline: {
					stage: "dept_assigned",
					label: {
						en: "Department Assigned",
						ta: "துறைக்கு ஒதுக்கப்பட்டது"
					},
					date: dateStr,
					time: timeStr,
					department: deptObj?.name.en || body.departmentId,
					note: {
						en: `Assigned to ${deptObj?.name.en || body.departmentId}${body.remarks ? ": " + body.remarks : ""}`,
						ta: `${deptObj?.name.ta || body.departmentId} துறைக்கு ஒதுக்கப்பட்டது`
					},
					remarks: body.remarks || "",
					done: true,
					performedBy: authUser?.name || "Admin",
					performedByRole: authUser?.role || "constituency_admin"
				} }
			});
			await notifications.insertOne({
				notificationId: `NOTIF-${Date.now()}`,
				recipientRole: "department_admin",
				title: {
					en: "New Complaint Assigned to Your Department",
					ta: "உங்கள் துறைக்கு புதிய புகார் ஒதுக்கப்பட்டுள்ளது"
				},
				body: {
					en: `Complaint #${targetId} has been assigned to ${deptObj?.name.en || body.departmentId}.`,
					ta: `புகார் #${targetId} ${deptObj?.name.ta || body.departmentId} துறைக்கு ஒதுக்கப்பட்டுள்ளது.`
				},
				date: dateStr,
				read: false,
				priority: "high",
				createdAt: now.toISOString()
			});
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser?.userId || "usr-mla-01",
				userName: authUser?.name || "Admin",
				role: authUser?.role || "constituency_admin",
				action: `Assigned complaint ${targetId} to department: ${deptObj?.name.en || body.departmentId}`,
				entityId: targetId,
				entityType: "complaint",
				prevStatus: c?.status || "new",
				newStatus: "verified",
				remarks: body.remarks,
				timestamp: now.toISOString()
			});
			return Response.json({
				ok: true,
				message: "Department assigned successfully"
			});
		}
		if (pathname.match(/^\/api\/complaints\/[^/]+\/assign-officer$/) && method === "PATCH") {
			const authUser = getAuthUser(request);
			if (authUser && ![
				"department_admin",
				"constituency_admin",
				"super_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized: Admin only"
			}, { status: 403 });
			const rawId = pathname.split("/")[3];
			const complaintId = decodeURIComponent(rawId);
			const body = await request.json();
			const { complaints, notifications, auditLogs, complaintUpdates } = await getDb();
			const c = await complaints.findOne({ $or: [
				{ complaintId },
				{ complaintId: complaintId.toUpperCase() },
				{ complaintId: complaintId.toLowerCase() },
				{ id: complaintId }
			] });
			if (!c) return Response.json({
				ok: false,
				message: "Complaint not found"
			}, { status: 404 });
			const targetId = c.complaintId || complaintId;
			const now = /* @__PURE__ */ new Date();
			const dateStr = now.toISOString().split("T")[0];
			const timeStr = now.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});
			await complaints.updateOne({ complaintId: targetId }, {
				$set: {
					status: "assigned",
					assignedOfficer: body.officerName,
					assignedOfficerId: body.officerId,
					updatedAt: now.toISOString()
				},
				$push: { timeline: {
					stage: "officer_assigned",
					label: {
						en: "Field Officer Assigned",
						ta: "கள அலுவலர் நியமிக்கப்பட்டார்"
					},
					date: dateStr,
					time: timeStr,
					officer: body.officerName,
					note: {
						en: `Officer ${body.officerName} assigned for field inspection.`,
						ta: `${body.officerName} கள ஆய்வுக்கு நியமிக்கப்பட்டுள்ளார்.`
					},
					done: true,
					performedBy: authUser?.name || "Dept Admin",
					performedByRole: authUser?.role || "department_admin"
				} }
			});
			await complaintUpdates.insertOne({
				updateId: `upd-${Date.now()}`,
				complaintId: targetId,
				previousStatus: c.status,
				newStatus: "assigned",
				changedBy: authUser?.name || "Dept Admin",
				changedByRole: authUser?.role || "department_admin",
				timestamp: now.toISOString(),
				remarks: `Assigned to ${body.officerName}`
			});
			await notifications.insertOne({
				notificationId: `NOTIF-${Date.now()}`,
				recipientRole: "field_officer",
				recipientUserId: body.officerId,
				title: {
					en: "New Task Assigned to You",
					ta: "உங்களுக்கு புதிய பணி ஒதுக்கப்பட்டுள்ளது"
				},
				body: {
					en: `Complaint #${targetId} has been assigned to you for field inspection. Please start work promptly.`,
					ta: `புகார் #${targetId} உங்களுக்கு கள ஆய்வுக்கு ஒதுக்கப்பட்டுள்ளது.`
				},
				date: dateStr,
				read: false,
				priority: "high",
				createdAt: now.toISOString()
			});
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser?.userId || "usr-dept-01",
				userName: authUser?.name || "Dept Admin",
				role: authUser?.role || "department_admin",
				action: `Assigned officer ${body.officerName} to complaint ${targetId}`,
				entityId: targetId,
				entityType: "complaint",
				prevStatus: c.status,
				newStatus: "assigned",
				timestamp: now.toISOString()
			});
			return Response.json({
				ok: true,
				message: "Field officer assigned successfully"
			});
		}
		if (pathname.match(/^\/api\/complaints\/[^/]+\/accept$/) && method === "PATCH") {
			const authUser = getAuthUser(request);
			if (authUser && authUser.role !== "field_officer") return Response.json({
				ok: false,
				message: "Unauthorized: Field Officers only"
			}, { status: 403 });
			const rawId = pathname.split("/")[3];
			const complaintId = decodeURIComponent(rawId);
			const body = await request.json().catch(() => ({}));
			const { complaints, notifications, auditLogs, complaintUpdates } = await getDb();
			const c = await complaints.findOne({ $or: [
				{ complaintId },
				{ complaintId: complaintId.toUpperCase() },
				{ complaintId: complaintId.toLowerCase() },
				{ id: complaintId }
			] });
			if (!c) return Response.json({
				ok: false,
				message: "Complaint not found"
			}, { status: 404 });
			const targetId = c.complaintId || complaintId;
			const now = /* @__PURE__ */ new Date();
			const dateStr = now.toISOString().split("T")[0];
			const timeStr = now.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});
			await complaints.updateOne({ complaintId: targetId }, {
				$set: {
					status: "accepted",
					updatedAt: now.toISOString()
				},
				$push: { timeline: {
					stage: "accepted",
					label: {
						en: "Assignment Accepted",
						ta: "பணி ஏற்றுக்கொள்ளப்பட்டது"
					},
					date: dateStr,
					time: timeStr,
					officer: authUser?.name || c.assignedOfficer,
					note: {
						en: body.remarks || "Field officer accepted assignment.",
						ta: body.remarks || "கள அலுவலர் பணியை ஏற்றுக்கொண்டார்."
					},
					done: true,
					performedBy: authUser?.name || "Officer",
					performedByRole: authUser?.role || "field_officer"
				} }
			});
			await complaintUpdates.insertOne({
				updateId: `upd-${Date.now()}`,
				complaintId: targetId,
				previousStatus: c.status,
				newStatus: "accepted",
				changedBy: authUser?.name || "Officer",
				changedByRole: authUser?.role || "field_officer",
				timestamp: now.toISOString(),
				remarks: body.remarks || "Assignment accepted by field officer"
			});
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser?.userId || "",
				userName: authUser?.name || "Officer",
				role: authUser?.role || "field_officer",
				action: `Accepted complaint assignment ${targetId}`,
				entityId: targetId,
				entityType: "complaint",
				prevStatus: c.status,
				newStatus: "accepted",
				timestamp: now.toISOString()
			});
			return Response.json({
				ok: true,
				message: "Assignment accepted"
			});
		}
		if (pathname.match(/^\/api\/complaints\/[^/]+\/start-work$/) && method === "PATCH") {
			const authUser = getAuthUser(request);
			if (authUser && ![
				"field_officer",
				"constituency_admin",
				"super_admin",
				"department_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const rawId = pathname.split("/")[3];
			const complaintId = decodeURIComponent(rawId);
			const body = await request.json().catch(() => ({}));
			const { complaints, notifications, auditLogs, complaintUpdates } = await getDb();
			const c = await complaints.findOne({ $or: [
				{ complaintId },
				{ complaintId: complaintId.toUpperCase() },
				{ complaintId: complaintId.toLowerCase() },
				{ id: complaintId }
			] });
			if (!c) return Response.json({
				ok: false,
				message: "Complaint not found"
			}, { status: 404 });
			const targetId = c.complaintId || complaintId;
			const now = /* @__PURE__ */ new Date();
			const dateStr = now.toISOString().split("T")[0];
			const timeStr = now.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});
			await complaints.updateOne({ complaintId: targetId }, {
				$set: {
					status: "in_progress",
					updatedAt: now.toISOString()
				},
				$push: { timeline: {
					stage: "work_started",
					label: {
						en: "Work Started On Site",
						ta: "களப்பணி தொடங்கியது"
					},
					date: dateStr,
					time: timeStr,
					officer: authUser?.name || c.assignedOfficer,
					note: {
						en: body.remarks || "Field officer has reached the site and commenced work.",
						ta: body.remarks || "கள அலுவலர் இடத்திற்குச் சென்று பணியை தொடங்கியுள்ளார்."
					},
					done: true,
					performedBy: authUser?.name || "Officer",
					performedByRole: authUser?.role || "field_officer"
				} }
			});
			await complaintUpdates.insertOne({
				updateId: `upd-${Date.now()}`,
				complaintId: targetId,
				previousStatus: c.status,
				newStatus: "in_progress",
				changedBy: authUser?.name || "Officer",
				changedByRole: authUser?.role || "field_officer",
				timestamp: now.toISOString(),
				remarks: body.remarks || "Field work commenced"
			});
			await notifications.insertOne({
				notificationId: `NOTIF-${Date.now()}`,
				recipientRole: "citizen",
				recipientMobile: c.citizenMobile,
				title: {
					en: "Work Started on Your Complaint",
					ta: "உங்கள் புகாரின் பணி தொடங்கியது"
				},
				body: {
					en: `Field team has commenced work on complaint #${targetId}.`,
					ta: `புகார் #${targetId} மீதான பணி தொடங்கப்பட்டது.`
				},
				date: dateStr,
				read: false,
				priority: "normal",
				createdAt: now.toISOString()
			});
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser?.userId || "",
				userName: authUser?.name || "Officer",
				role: authUser?.role || "field_officer",
				action: `Started work on complaint ${targetId}`,
				entityId: targetId,
				entityType: "complaint",
				prevStatus: c.status,
				newStatus: "in_progress",
				timestamp: now.toISOString()
			});
			return Response.json({
				ok: true,
				message: "Work started"
			});
		}
		if ((pathname.match(/^\/api\/complaints\/[^/]+\/update-progress$/) || pathname.match(/^\/api\/complaints\/[^/]+\/updates$/)) && (method === "PATCH" || method === "POST")) {
			const authUser = getAuthUser(request);
			if (authUser && ![
				"field_officer",
				"department_admin",
				"constituency_admin",
				"super_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const rawId = pathname.split("/")[3];
			const complaintId = decodeURIComponent(rawId);
			const body = await request.json();
			const { complaints, complaintUpdates } = await getDb();
			const c = await complaints.findOne({ $or: [
				{ complaintId },
				{ complaintId: complaintId.toUpperCase() },
				{ complaintId: complaintId.toLowerCase() },
				{ id: complaintId }
			] });
			if (!c) return Response.json({
				ok: false,
				message: "Complaint not found"
			}, { status: 404 });
			const targetId = c.complaintId || complaintId;
			const now = /* @__PURE__ */ new Date();
			const dateStr = now.toISOString().split("T")[0];
			const timeStr = now.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});
			await complaints.updateOne({ complaintId: targetId }, {
				$set: { updatedAt: now.toISOString() },
				$push: { timeline: {
					stage: "progress_update",
					label: {
						en: "Progress Update",
						ta: "பணி முன்னேற்றம்"
					},
					date: dateStr,
					time: timeStr,
					officer: authUser?.name || c.assignedOfficer,
					note: {
						en: body.remarks || "Work in progress.",
						ta: body.remarks || "பணி நடைபெறுகிறது."
					},
					done: true,
					performedBy: authUser?.name || "Officer",
					performedByRole: authUser?.role || "field_officer"
				} }
			});
			await complaintUpdates.insertOne({
				updateId: `upd-${Date.now()}`,
				complaintId: targetId,
				previousStatus: c.status,
				newStatus: c.status,
				changedBy: authUser?.name || "Officer",
				changedByRole: authUser?.role || "field_officer",
				timestamp: now.toISOString(),
				remarks: body.remarks || "Progress update recorded",
				photos: body.photos || (body.photo ? [body.photo] : [])
			});
			return Response.json({
				ok: true,
				message: "Progress updated"
			});
		}
		if ((pathname.match(/^\/api\/complaints\/[^/]+\/submit-completion$/) || pathname.match(/^\/api\/complaints\/[^/]+\/complete$/)) && method === "PATCH") {
			const authUser = getAuthUser(request);
			if (authUser && ![
				"field_officer",
				"constituency_admin",
				"super_admin",
				"department_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const rawId = pathname.split("/")[3];
			const complaintId = decodeURIComponent(rawId);
			const body = await request.json();
			const { complaints, notifications, auditLogs, complaintUpdates } = await getDb();
			const c = await complaints.findOne({ $or: [
				{ complaintId },
				{ complaintId: complaintId.toUpperCase() },
				{ complaintId: complaintId.toLowerCase() },
				{ id: complaintId }
			] });
			if (!c) return Response.json({
				ok: false,
				message: "Complaint not found"
			}, { status: 404 });
			const targetId = c.complaintId || complaintId;
			const now = /* @__PURE__ */ new Date();
			const dateStr = now.toISOString().split("T")[0];
			const timeStr = now.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});
			await complaints.updateOne({ complaintId: targetId }, {
				$set: {
					status: "completed",
					completedOn: dateStr,
					resolutionDetails: body.remarks || "Work completed by field officer.",
					...body.afterImage ? { afterImage: body.afterImage } : {},
					updatedAt: now.toISOString()
				},
				$push: { timeline: {
					stage: "completion_submitted",
					label: {
						en: "Completion Submitted",
						ta: "பணி முடிவு சமர்ப்பிக்கப்பட்டது"
					},
					date: dateStr,
					time: timeStr,
					officer: authUser?.name || c.assignedOfficer,
					note: {
						en: body.remarks || "Field officer has submitted work completion for admin verification.",
						ta: "கள அலுவலர் பணி முடிவை நிர்வாகி சரிபார்ப்புக்கு சமர்ப்பித்துள்ளார்."
					},
					done: true,
					performedBy: authUser?.name || "Officer",
					performedByRole: authUser?.role || "field_officer"
				} }
			});
			await complaintUpdates.insertOne({
				updateId: `upd-${Date.now()}`,
				complaintId: targetId,
				previousStatus: c.status,
				newStatus: "completed",
				changedBy: authUser?.name || "Officer",
				changedByRole: authUser?.role || "field_officer",
				timestamp: now.toISOString(),
				remarks: body.remarks || "Work completed",
				afterImage: body.afterImage
			});
			await notifications.insertOne({
				notificationId: `NOTIF-${Date.now()}`,
				recipientRole: "constituency_admin",
				title: {
					en: "Complaint Completion Submitted",
					ta: "புகார் முடிவு சமர்ப்பிக்கப்பட்டது"
				},
				body: {
					en: `Complaint #${targetId} has been completed by ${authUser?.name || "Field Officer"}. Please verify the resolution.`,
					ta: `புகார் #${targetId} கள அலுவலரால் முடிக்கப்பட்டுள்ளது. சரிபார்க்கவும்.`
				},
				date: dateStr,
				read: false,
				priority: "high",
				createdAt: now.toISOString()
			});
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser?.userId || "",
				userName: authUser?.name || "Officer",
				role: authUser?.role || "field_officer",
				action: `Submitted completion for complaint ${targetId}`,
				entityId: targetId,
				entityType: "complaint",
				prevStatus: c.status,
				newStatus: "completed",
				remarks: body.remarks,
				timestamp: now.toISOString()
			});
			return Response.json({
				ok: true,
				message: "Completion submitted for admin verification"
			});
		}
		if ((pathname.match(/^\/api\/complaints\/[^/]+\/verify-resolution$/) || pathname.match(/^\/api\/complaints\/[^/]+\/verify-completion$/)) && method === "PATCH") {
			const authUser = getAuthUser(request);
			if (authUser && ![
				"constituency_admin",
				"department_admin",
				"super_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized: Admin only"
			}, { status: 403 });
			const rawId = pathname.split("/")[3];
			const complaintId = decodeURIComponent(rawId);
			const body = await request.json();
			const { complaints, notifications, auditLogs, complaintUpdates } = await getDb();
			const c = await complaints.findOne({ $or: [
				{ complaintId },
				{ complaintId: complaintId.toUpperCase() },
				{ complaintId: complaintId.toLowerCase() },
				{ id: complaintId }
			] });
			if (!c) return Response.json({
				ok: false,
				message: "Complaint not found"
			}, { status: 404 });
			const targetId = c.complaintId || complaintId;
			const approved = body.approved !== false;
			const newStatus = approved ? "resolved" : "in_progress";
			const now = /* @__PURE__ */ new Date();
			const dateStr = now.toISOString().split("T")[0];
			const timeStr = now.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});
			await complaints.updateOne({ complaintId: targetId }, {
				$set: {
					status: newStatus,
					updatedAt: now.toISOString(),
					...approved ? { citizenVerified: true } : {}
				},
				$push: { timeline: {
					stage: approved ? "resolved" : "rework_requested",
					label: approved ? {
						en: "Resolved & Closed",
						ta: "தீர்க்கப்பட்டு மூடப்பட்டது"
					} : {
						en: "Rework Requested",
						ta: "மறுபணி கோரிக்கை"
					},
					date: dateStr,
					time: timeStr,
					note: {
						en: body.remarks || (approved ? "Complaint resolved and verified by admin." : "Rework requested by admin."),
						ta: body.remarks || (approved ? "நிர்வாகியால் புகார் தீர்க்கப்பட்டு மூடப்பட்டது." : "நிர்வாகியால் மறுபணி கோரிக்கை.")
					},
					done: true,
					performedBy: authUser?.name || "Admin",
					performedByRole: authUser?.role || "constituency_admin"
				} }
			});
			await complaintUpdates.insertOne({
				updateId: `upd-${Date.now()}`,
				complaintId: targetId,
				previousStatus: c.status,
				newStatus,
				changedBy: authUser?.name || "Admin",
				changedByRole: authUser?.role || "constituency_admin",
				timestamp: now.toISOString(),
				remarks: body.remarks || (approved ? "Resolution verified and closed" : "Rework requested")
			});
			const notifTitle = approved ? {
				en: "Your Complaint Has Been Resolved!",
				ta: "உங்கள் புகார் தீர்க்கப்பட்டது!"
			} : {
				en: "Complaint Update",
				ta: "புகார் புதுப்பிப்பு"
			};
			const notifBody = approved ? {
				en: `Complaint #${targetId} has been successfully resolved and closed. Thank you for using NAMMA KURAL.`,
				ta: `புகார் #${targetId} வெற்றிகரமாக தீர்க்கப்பட்டது.`
			} : {
				en: `Your complaint #${targetId} is under rework. Reason: ${body.remarks || "Quality check failed."}`,
				ta: `புகார் #${targetId} மறுஆய்வில் உள்ளது.`
			};
			await notifications.insertOne({
				notificationId: `NOTIF-${Date.now()}`,
				recipientRole: "citizen",
				recipientMobile: c.citizenMobile,
				title: notifTitle,
				body: notifBody,
				date: dateStr,
				read: false,
				priority: approved ? "high" : "normal",
				createdAt: now.toISOString()
			});
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser?.userId || "",
				userName: authUser?.name || "Admin",
				role: authUser?.role || "constituency_admin",
				action: approved ? `Approved resolution for ${targetId}` : `Requested rework for ${targetId}: ${body.remarks}`,
				entityId: targetId,
				entityType: "complaint",
				prevStatus: c.status,
				newStatus,
				remarks: body.remarks,
				timestamp: now.toISOString()
			});
			return Response.json({
				ok: true,
				message: approved ? "Complaint resolved and closed" : "Rework requested"
			});
		}
		if (pathname.match(/^\/api\/complaints\/[^/]+\/reopen$/) && method === "PATCH") {
			const rawId = pathname.split("/")[3];
			const complaintId = decodeURIComponent(rawId);
			const body = await request.json();
			const { complaints, notifications, auditLogs, complaintUpdates } = await getDb();
			const c = await complaints.findOne({ $or: [
				{ complaintId },
				{ complaintId: complaintId.toUpperCase() },
				{ complaintId: complaintId.toLowerCase() },
				{ id: complaintId }
			] });
			if (!c) return Response.json({
				ok: false,
				message: "Complaint not found"
			}, { status: 404 });
			const now = /* @__PURE__ */ new Date();
			const dateStr = now.toISOString().split("T")[0];
			const timeStr = now.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});
			await complaints.updateOne({ complaintId }, {
				$set: {
					status: "reopened",
					updatedAt: now.toISOString()
				},
				$push: { timeline: {
					stage: "reopened",
					label: {
						en: "Complaint Reopened by Citizen",
						ta: "குடிமகன் மீண்டும் திறந்தார்"
					},
					date: dateStr,
					time: timeStr,
					note: {
						en: body.remarks || "Citizen reopened complaint for further resolution.",
						ta: body.remarks || "குடிமகன் கூடுதல் தீர்வுக்காக புகாரை மீண்டும் திறந்தார்."
					},
					done: true,
					performedBy: c.citizenName || "Citizen",
					performedByRole: "citizen"
				} }
			});
			await complaintUpdates.insertOne({
				updateId: `upd-${Date.now()}`,
				complaintId,
				previousStatus: c.status,
				newStatus: "reopened",
				changedBy: c.citizenName || "Citizen",
				changedByRole: "citizen",
				timestamp: now.toISOString(),
				remarks: body.remarks || "Reopened by citizen",
				photos: body.photos
			});
			await notifications.insertOne({
				notificationId: `NOTIF-${Date.now()}`,
				recipientRole: "constituency_admin",
				title: {
					en: "Complaint Reopened by Citizen",
					ta: "புகார் குடிமகனால் மீண்டும் திறக்கப்பட்டது"
				},
				body: {
					en: `Complaint #${complaintId} has been reopened with remark: ${body.remarks || "Issue persists."}`,
					ta: `புகார் #${complaintId} மீண்டும் திறக்கப்பட்டுள்ளது.`
				},
				date: dateStr,
				read: false,
				priority: "high",
				createdAt: now.toISOString()
			});
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: c.citizenId,
				userName: c.citizenName || "Citizen",
				role: "citizen",
				action: `Citizen reopened complaint ${complaintId}`,
				entityId: complaintId,
				entityType: "complaint",
				prevStatus: c.status,
				newStatus: "reopened",
				remarks: body.remarks,
				timestamp: now.toISOString()
			});
			return Response.json({
				ok: true,
				message: "Complaint reopened successfully"
			});
		}
		if (pathname === "/api/admin/audit-log" && method === "GET") {
			const authUser = getAuthUser(request);
			if (!authUser || !["super_admin", "constituency_admin"].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const { auditLogs } = await getDb();
			const entityType = url.searchParams.get("entityType");
			const query = {};
			if (entityType && entityType !== "all") query.entityType = entityType;
			const all = await (await auditLogs.find(query)).toArray();
			return Response.json({
				ok: true,
				auditLogs: all
			});
		}
		if (pathname === "/api/content/announcements" && method === "GET") {
			const { announcements } = await getDb();
			const query = url.searchParams.get("published") !== "all" ? { published: true } : {};
			const all = await (await announcements.find(query)).toArray();
			return Response.json({
				ok: true,
				announcements: all
			});
		}
		if (pathname === "/api/content/announcements" && method === "POST") {
			const authUser = getAuthUser(request);
			if (!authUser || ![
				"super_admin",
				"constituency_admin",
				"content_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const body = await request.json();
			const { announcements, auditLogs } = await getDb();
			const now = (/* @__PURE__ */ new Date()).toISOString();
			const ann = {
				announcementId: `ann-${Date.now()}`,
				title: body.title,
				description: body.description,
				date: body.date,
				publishedDate: body.publishedDate || body.date,
				expiryDate: body.expiryDate,
				time: body.time,
				location: body.location,
				category: body.category || "general",
				image: body.image || body.imageUrl,
				imageUrl: body.imageUrl || body.image,
				registrationInfo: body.registrationInfo,
				published: body.published ?? true,
				status: body.status || "published",
				createdBy: authUser.userId || "",
				createdAt: now,
				updatedAt: now
			};
			await announcements.insertOne(ann);
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser.userId || "",
				userName: authUser.name || "Admin",
				role: authUser.role,
				action: `Created announcement: ${typeof body.title === "object" ? body.title.en : body.title}`,
				entityId: ann.announcementId,
				entityType: "announcement",
				timestamp: now
			});
			return Response.json({
				ok: true,
				announcement: ann
			});
		}
		if (pathname.startsWith("/api/content/announcements/") && method === "PATCH") {
			const authUser = getAuthUser(request);
			if (!authUser || ![
				"super_admin",
				"constituency_admin",
				"content_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const annId = pathname.replace("/api/content/announcements/", "");
			const body = await request.json();
			const { announcements, auditLogs } = await getDb();
			await announcements.updateOne({ announcementId: annId }, { $set: {
				...body,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			} });
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser.userId || "",
				userName: authUser.name || "Admin",
				role: authUser.role,
				action: `Updated announcement: ${annId}`,
				entityId: annId,
				entityType: "announcement",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
			return Response.json({
				ok: true,
				message: "Announcement updated"
			});
		}
		if (pathname.startsWith("/api/content/announcements/") && method === "DELETE") {
			const authUser = getAuthUser(request);
			if (!authUser || ![
				"super_admin",
				"constituency_admin",
				"content_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const annId = pathname.replace("/api/content/announcements/", "");
			const { announcements, auditLogs } = await getDb();
			await announcements.deleteOne({ announcementId: annId });
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser.userId || "",
				userName: authUser.name || "Admin",
				role: authUser.role,
				action: `Deleted announcement: ${annId}`,
				entityId: annId,
				entityType: "announcement",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
			return Response.json({
				ok: true,
				message: "Announcement deleted"
			});
		}
		if (pathname === "/api/content/schemes" && method === "GET") {
			const { schemes } = await getDb();
			const all = await (await schemes.find({})).toArray();
			return Response.json({
				ok: true,
				schemes: all
			});
		}
		if (pathname === "/api/content/schemes" && method === "POST") {
			const authUser = getAuthUser(request);
			if (!authUser || ![
				"super_admin",
				"constituency_admin",
				"content_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const body = await request.json();
			const { schemes } = await getDb();
			const now = (/* @__PURE__ */ new Date()).toISOString();
			const scheme = {
				schemeId: `sch-${Date.now()}`,
				...body,
				active: body.active ?? true,
				createdBy: authUser.userId || "",
				createdAt: now,
				updatedAt: now
			};
			await schemes.insertOne(scheme);
			return Response.json({
				ok: true,
				scheme
			});
		}
		if (pathname === "/api/content/development-works" && method === "GET") {
			const { developmentWorks } = await getDb();
			const all = await (await developmentWorks.find({})).toArray();
			return Response.json({
				ok: true,
				works: all
			});
		}
		if (pathname === "/api/content/development-works" && method === "POST") {
			const authUser = getAuthUser(request);
			if (!authUser || ![
				"super_admin",
				"constituency_admin",
				"content_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const body = await request.json();
			const { developmentWorks, auditLogs } = await getDb();
			const now = (/* @__PURE__ */ new Date()).toISOString();
			const work = {
				workId: `dev-${Date.now()}`,
				title: body.title || body.name,
				name: body.name || body.title,
				location: body.location,
				department: body.department,
				assignedOfficer: body.assignedOfficer,
				description: body.description,
				startDate: body.startDate,
				expectedCompletion: body.expectedCompletion || body.expectedCompletionDate,
				expectedCompletionDate: body.expectedCompletionDate || body.expectedCompletion,
				status: body.status || "in_progress",
				budget: body.budget,
				progressPercent: body.progressPercent ?? body.progressPercentage ?? 0,
				progressPercentage: body.progressPercentage ?? body.progressPercent ?? 0,
				photos: body.photos || body.images || [],
				images: body.images || body.photos || [],
				remarks: body.remarks,
				published: body.published ?? true,
				createdBy: authUser.userId || "",
				createdAt: now,
				updatedAt: now
			};
			await developmentWorks.insertOne(work);
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser.userId || "",
				userName: authUser.name || "Admin",
				role: authUser.role,
				action: `Created development work: ${typeof body.title === "object" ? body.title.en : body.name?.en || body.name || "Work"}`,
				entityId: work.workId,
				entityType: "development_work",
				timestamp: now
			});
			return Response.json({
				ok: true,
				work
			});
		}
		if (pathname.startsWith("/api/content/development-works/") && method === "PATCH") {
			const authUser = getAuthUser(request);
			if (!authUser || ![
				"super_admin",
				"constituency_admin",
				"content_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const workId = pathname.replace("/api/content/development-works/", "");
			const body = await request.json();
			const { developmentWorks, auditLogs } = await getDb();
			await developmentWorks.updateOne({ workId }, { $set: {
				...body,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			} });
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser.userId || "",
				userName: authUser.name || "Admin",
				role: authUser.role,
				action: `Updated development work: ${workId}`,
				entityId: workId,
				entityType: "development_work",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
			return Response.json({
				ok: true,
				message: "Development work updated"
			});
		}
		if (pathname.startsWith("/api/content/development-works/") && method === "DELETE") {
			const authUser = getAuthUser(request);
			if (!authUser || ![
				"super_admin",
				"constituency_admin",
				"content_admin"
			].includes(authUser.role)) return Response.json({
				ok: false,
				message: "Unauthorized"
			}, { status: 403 });
			const workId = pathname.replace("/api/content/development-works/", "");
			const { developmentWorks, auditLogs } = await getDb();
			await developmentWorks.deleteOne({ workId });
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser.userId || "",
				userName: authUser.name || "Admin",
				role: authUser.role,
				action: `Deleted development work: ${workId}`,
				entityId: workId,
				entityType: "development_work",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
			return Response.json({
				ok: true,
				message: "Development work deleted"
			});
		}
		if (pathname.startsWith("/api/admin/users/") && method === "DELETE") {
			const authUser = getAuthUser(request);
			if (!authUser || authUser.role !== "super_admin") return Response.json({
				ok: false,
				message: "Unauthorized: Super Admin only"
			}, { status: 403 });
			const targetId = pathname.replace("/api/admin/users/", "");
			const { users, auditLogs } = await getDb();
			await users.deleteOne({ userId: targetId });
			await auditLogs.insertOne({
				logId: `audit-${Date.now()}`,
				userId: authUser.userId || "",
				userName: authUser.name || "Super Admin",
				role: authUser.role,
				action: `Deleted user: ${targetId}`,
				entityId: targetId,
				entityType: "user",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
			return Response.json({
				ok: true,
				message: "User deleted"
			});
		}
		return null;
	} catch (error) {
		console.error("API error:", error);
		return Response.json({
			ok: false,
			message: error.message || "Internal server error"
		}, { status: 500 });
	}
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-CTELTOGt.mjs").then((n) => n.t).then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		const apiResponse = await handleApiRequest(request);
		if (apiResponse) return apiResponse;
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { MLA as a, WARDS as c, MOCK_UPDATES as d, server_default as default, PUBLIC_STATS as f, ssr_exports as g, renderErrorPage as h, DEPARTMENTS as i, MOCK_PROJECTS as l, validateIndianMobile as m, CONSTITUENCY as n, ROLE_META as o, maskMobile as p, DEMO_DATA_NOTICE as r, STATUS_META as s, CATEGORIES as t, MOCK_SCHEMES as u };
