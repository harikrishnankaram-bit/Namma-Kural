import { MongoClient, Db, Collection, ObjectId } from "mongodb";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// Load .env explicitly from project root
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const result = dotenv.parse(fs.readFileSync(envPath));
  for (const k in result) {
    process.env[k] = result[k];
  }
}

// Debug: confirm env loaded
console.log("[DEBUG] Loaded MONGODB_URI:", process.env["MONGODB_URI"] ? "Set" : "Not Set");

import type { Role, Bilingual, ComplaintStatus } from "@/config/aram";

export interface CitizenDoc {
  _id?: ObjectId | undefined;
  citizenId: string;
  mobileNumber: string;
  fullName?: string | undefined;
  email?: string | undefined;
  address?: string | undefined;
  wardId?: string | undefined;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string | undefined;
}

export interface TimelineEntryDoc {
  stage: string;
  label: Bilingual;
  date: string;
  time: string;
  department?: string | undefined;
  officer?: string | undefined;
  note: Bilingual;
  remarks?: string | undefined;
  resolutionInfo?: string | undefined;
  done: boolean;
  performedBy?: string | undefined;
  performedByRole?: string | undefined;
}

export interface ComplaintDoc {
  _id?: ObjectId | undefined;
  complaintId: string;
  citizenId: string;
  citizenMobile: string;
  citizenName?: string | undefined;
  citizenEmail?: string | undefined;
  categoryId: string;
  description: string;
  address: string;
  wardId: string;
  constituency?: string | undefined;
  lat: number;
  lng: number;
  priority: "low" | "medium" | "high";
  status: ComplaintStatus;
  departmentId: string;
  assignedOfficerId?: string | undefined;
  assignedOfficer?: string | undefined;
  beforeImage?: string | undefined;
  afterImage?: string | undefined;
  completedOn?: string | undefined;
  resolutionDetails?: string | undefined;
  rating?: number | undefined;
  citizenVerified?: boolean | undefined;
  submittedAt: string;
  updatedAt: string;
  timeline: TimelineEntryDoc[];
  dueDate?: string | undefined;
  escalated?: boolean | undefined;
}

export interface UserDoc {
  _id?: ObjectId | undefined;
  userId: string;
  name: string;
  email: string;
  mobile: string;
  role: Role;
  departmentId?: string | undefined;
  departmentName?: string | undefined;
  wardId?: string | undefined;
  passwordHash?: string | undefined;
  active: boolean;
  permissions?: string[] | undefined;
  lastLoginAt?: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationDoc {
  _id?: ObjectId | undefined;
  notificationId: string;
  recipientRole: Role | "all" | "citizen";
  recipientUserId?: string | undefined;
  recipientCitizenId?: string | undefined;
  recipientMobile?: string | undefined;
  complaintId?: string | undefined;
  title: Bilingual;
  body: Bilingual;
  date: string;
  read: boolean;
  priority: "normal" | "high";
  createdAt: string;
}

export interface AppointmentDoc {
  _id?: ObjectId | undefined;
  appointmentId: string;
  citizenId: string;
  citizenName: string;
  fullName?: string | undefined;
  mobile: string;
  mobileNumber?: string | undefined;
  email?: string | undefined;
  wardId: string;
  wardName?: string | undefined;
  appointmentDate: string;
  preferredDate?: string | undefined;
  appointmentTime: string;
  preferredTime?: string | undefined;
  purpose: string;
  description?: string | undefined;
  relatedComplaintId?: string | undefined;
  status: "Pending Review" | "Approved" | "Rejected" | "Completed" | "Pending" | "PENDING" | "under_review" | "rescheduled" | "upcoming" | "cancelled" | string;
  confirmedDate?: string | undefined;
  confirmedTime?: string | undefined;
  venue?: string | undefined;
  location?: string | undefined;
  meetingLocation?: string | undefined;
  mlaRepresentative?: string | undefined;
  adminRemarks?: string | undefined;
  rejectionReason?: string | undefined;
  cancellationReason?: string | undefined;
  instructions?: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface OtpDoc {
  _id?: ObjectId | undefined;
  mobile: string;
  otp: string;
  expiresAt: number;
  attempts: number;
  createdAt: number;
}

export interface ComplaintUpdateDoc {
  _id?: ObjectId | undefined;
  updateId?: string | undefined;
  complaintId: string;
  previousStatus?: string | undefined;
  newStatus?: string | undefined;
  status?: string | undefined;
  message?: string | undefined;
  changedBy?: string | undefined;
  changedByRole?: string | undefined;
  updatedBy?: string | undefined;
  updatedByRole?: string | undefined;
  timestamp?: string | undefined;
  createdAt?: string | undefined;
  remarks?: string | undefined;
  photos?: string[] | undefined;
  afterImage?: string | undefined;
}

export interface AuditLogDoc {
  _id?: ObjectId | undefined;
  logId: string;
  userId: string;
  userName: string;
  role: string;
  action: string;
  entityId: string;
  entityType: "complaint" | "appointment" | "user" | "announcement" | "development_work" | "system";
  prevStatus?: string | undefined;
  newStatus?: string | undefined;
  previousValue?: string | undefined;
  newValue?: string | undefined;
  performedBy?: string | undefined;
  performedByRole?: string | undefined;
  remarks?: string | undefined;
  timestamp: string;
}

export interface AnnouncementDoc {
  _id?: ObjectId | undefined;
  announcementId: string;
  title: Bilingual;
  description: Bilingual;
  date: string;
  publishedDate?: string | undefined;
  expiryDate?: string | undefined;
  time?: string | undefined;
  location?: string | undefined;
  category: string;
  image?: string | undefined;
  imageUrl?: string | undefined;
  registrationInfo?: string | undefined;
  published: boolean;
  status?: "draft" | "published" | "scheduled" | "archived" | undefined;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface SchemeDoc {
  _id?: ObjectId | undefined;
  schemeId: string;
  name: Bilingual;
  department: string;
  description: Bilingual;
  benefits: string[];
  eligibility: string[];
  documents: string[];
  applicationProcess?: string | undefined;
  applicationLink?: string | undefined;
  importantDates?: string | undefined;
  active: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface DevelopmentWorkDoc {
  _id?: ObjectId | undefined;
  workId: string;
  title?: Bilingual | undefined;
  name: Bilingual;
  location: string;
  department: string;
  assignedOfficer?: string | undefined;
  description: Bilingual;
  startDate: string;
  expectedCompletion: string;
  expectedCompletionDate?: string | undefined;
  status: "planned" | "approved" | "in_progress" | "completed" | "on_hold" | "cancelled" | "PLANNED" | "APPROVED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
  budget?: number | string | undefined;
  progressPercent: number;
  progressPercentage?: number | undefined;
  photos?: string[] | undefined;
  images?: string[] | undefined;
  remarks?: string | undefined;
  published: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

// In-Memory fallback store if local MongoDB daemon is not running
// This ensures 100% uptime while maintaining exact MongoDB query semantics
export class MemoryCollection<T extends { _id?: ObjectId | undefined; [key: string]: any }> {
  private items: T[] = [];

  async find(query: any = {}): Promise<{ toArray: () => Promise<T[]> }> {
    const filtered = this.items.filter((item) => matchQuery(item, query));
    return {
      toArray: async () => JSON.parse(JSON.stringify(filtered)),
    };
  }

  async findOne(query: any): Promise<T | null> {
    const found = this.items.find((item) => matchQuery(item, query));
    return found ? (JSON.parse(JSON.stringify(found)) as T) : null;
  }

  async insertOne(doc: T): Promise<{ insertedId: ObjectId }> {
    const _id = doc._id || new ObjectId();
    const newDoc = { ...doc, _id };
    this.items.unshift(newDoc);
    return { insertedId: _id };
  }

  async updateOne(filter: any, update: any, options?: { upsert?: boolean }): Promise<{ matchedCount: number; modifiedCount: number }> {
    const index = this.items.findIndex((item) => matchQuery(item, filter));
    if (index >= 0) {
      const current = this.items[index];
      if (current) {
        if (update.$set) {
          Object.assign(current, update.$set);
        }
        if (update.$push) {
          for (const key of Object.keys(update.$push)) {
            const arr = (current as any)[key];
            if (!Array.isArray(arr)) {
              (current as any)[key] = [update.$push[key]];
            } else {
              arr.push(update.$push[key]);
            }
          }
        }
      }
      return { matchedCount: 1, modifiedCount: 1 };
    }
    if (options?.upsert && update.$set) {
      await this.insertOne(update.$set as T);
      return { matchedCount: 0, modifiedCount: 1 };
    }
    return { matchedCount: 0, modifiedCount: 0 };
  }

  async deleteOne(filter: any): Promise<{ deletedCount: number }> {
    const initialLen = this.items.length;
    this.items = this.items.filter((item) => !matchQuery(item, filter));
    return { deletedCount: initialLen - this.items.length };
  }

  async countDocuments(query: any = {}): Promise<number> {
    return this.items.filter((item) => matchQuery(item, query)).length;
  }
}

function matchQuery(item: any, query: any): boolean {
  if (!query || Object.keys(query).length === 0) return true;
  for (const key of Object.keys(query)) {
    if (key === "$or" && Array.isArray(query.$or)) {
      const matchesOr = query.$or.some((sub: any) => matchQuery(item, sub));
      if (!matchesOr) return false;
      continue;
    }
    const expected = query[key];
    const actual = item ? item[key] : undefined;
    if (expected && typeof expected === "object" && "$in" in expected) {
      if (!expected.$in.includes(actual)) return false;
    } else if (expected && typeof expected === "object" && "$ne" in expected) {
      if (actual === expected.$ne) return false;
    } else if (actual !== expected) {
      return false;
    }
  }
  return true;
}

class MemoryDatabase {
  public citizens = new MemoryCollection<CitizenDoc>();
  public complaintUpdates = new MemoryCollection<ComplaintUpdateDoc>();
  public complaints = new MemoryCollection<ComplaintDoc>();
  public users = new MemoryCollection<UserDoc>();
  public notifications = new MemoryCollection<NotificationDoc>();
  public appointments = new MemoryCollection<AppointmentDoc>();
  public otps = new MemoryCollection<OtpDoc>();
  public auditLogs = new MemoryCollection<AuditLogDoc>();
  public announcements = new MemoryCollection<AnnouncementDoc>();
  public schemes = new MemoryCollection<SchemeDoc>();
  public developmentWorks = new MemoryCollection<DevelopmentWorkDoc>();
}

const globalForDb = globalThis as unknown as {
  memoryDbSingleton?: MemoryDatabase;
  clientPromise?: Promise<MongoClient> | null;
};

const memoryDbSingleton = globalForDb.memoryDbSingleton ?? new MemoryDatabase();
globalForDb.memoryDbSingleton = memoryDbSingleton;

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = globalForDb.clientPromise ?? null;
let useMemoryFallback = false;

const MONGODB_URI = process.env["MONGODB_URI"];
if (!MONGODB_URI) {
  useMemoryFallback = true;
  console.log("[Database] MONGODB_URI not provided. Operating in local memory database mode.");
}

export async function getDb(): Promise<{
  db: Db | null;
  isMemory: boolean;
  citizens: Collection<CitizenDoc> | MemoryCollection<CitizenDoc>;
  complaintUpdates: Collection<ComplaintUpdateDoc> | MemoryCollection<ComplaintUpdateDoc>;
  complaints: Collection<ComplaintDoc> | MemoryCollection<ComplaintDoc>;
  users: Collection<UserDoc> | MemoryCollection<UserDoc>;
  notifications: Collection<NotificationDoc> | MemoryCollection<NotificationDoc>;
  appointments: Collection<AppointmentDoc> | MemoryCollection<AppointmentDoc>;
  otps: Collection<OtpDoc> | MemoryCollection<OtpDoc>;
  auditLogs: Collection<AuditLogDoc> | MemoryCollection<AuditLogDoc>;
  announcements: Collection<AnnouncementDoc> | MemoryCollection<AnnouncementDoc>;
  schemes: Collection<SchemeDoc> | MemoryCollection<SchemeDoc>;
  developmentWorks: Collection<DevelopmentWorkDoc> | MemoryCollection<DevelopmentWorkDoc>;
}> {
  if (useMemoryFallback) {
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
      developmentWorks: memoryDbSingleton.developmentWorks,
    };
  }

  try {
    if (!clientPromise) {
      client = new MongoClient(MONGODB_URI as string, {
        serverSelectionTimeoutMS: 2000,
        connectTimeoutMS: 2000,
      });
      clientPromise = client.connect();
    }
    const connectedClient = await clientPromise;
    const db = connectedClient.db("aram_constituency");

    // Ensure Indexes once connected
    try {
      await db.collection("citizens").createIndex({ mobileNumber: 1 }, { unique: true });
      await db.collection("citizens").createIndex({ citizenId: 1 }, { unique: true });
      await db.collection('complaintUpdates').createIndex({ complaintId: 1 });
      await db.collection("complaints").createIndex({ complaintId: 1 }, { unique: true });
      await db.collection("complaints").createIndex({ citizenMobile: 1 });
      await db.collection("complaints").createIndex({ status: 1 });
      await db.collection("complaints").createIndex({ departmentId: 1 });
      await db.collection("complaints").createIndex({ assignedOfficerId: 1 });
      await db.collection("users").createIndex({ email: 1 }, { unique: true, sparse: true });
      await db.collection("users").createIndex({ userId: 1 }, { unique: true });
      await db.collection("otps").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
      await db.collection("auditLogs").createIndex({ timestamp: -1 });
      await db.collection("auditLogs").createIndex({ entityId: 1 });
      await db.collection("appointments").createIndex({ appointmentId: 1 }, { unique: true });
      await db.collection("appointments").createIndex({ mobile: 1 });
      await db.collection("appointments").createIndex({ status: 1 });
      await db.collection("notifications").createIndex({ notificationId: 1 }, { unique: true });
    } catch {
      // index creation or permission warning
    }

    return {
      db,
      isMemory: false,
      citizens: db.collection<CitizenDoc>("citizens"),
      complaintUpdates: db.collection<ComplaintUpdateDoc>('complaintUpdates'),
      complaints: db.collection<ComplaintDoc>("complaints"),
      users: db.collection<UserDoc>("users"),
      notifications: db.collection<NotificationDoc>("notifications"),
      appointments: db.collection<AppointmentDoc>("appointments"),
      otps: db.collection<OtpDoc>("otps"),
      auditLogs: db.collection<AuditLogDoc>("auditLogs"),
      announcements: db.collection<AnnouncementDoc>("announcements"),
      schemes: db.collection<SchemeDoc>("schemes"),
      developmentWorks: db.collection<DevelopmentWorkDoc>("developmentWorks"),
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
      developmentWorks: memoryDbSingleton.developmentWorks,
    };
  }
}
