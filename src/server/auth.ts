import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import type { Role } from "@/config/aram";

const AUTH_SECRET = process.env["AUTH_SECRET"] || "aram_constituency_jwt_super_secret_key_2026";
export const DEMO_DEV_OTP = "123456";

export interface AuthSessionUser {
  type: "citizen" | "staff";
  citizenId?: string | undefined;
  userId?: string | undefined;
  mobile: string;
  name?: string | undefined;
  email?: string | undefined;
  role: Role;
  departmentId?: string | undefined;
  wardId?: string | undefined;
}

export function signToken(payload: AuthSessionUser): string {
  return jwt.sign(payload, AUTH_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): AuthSessionUser | null {
  try {
    return jwt.verify(token, AUTH_SECRET) as AuthSessionUser;
  } catch {
    return null;
  }
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function getAuthUser(request: Request): AuthSessionUser | null {
  const authHeader = request.headers.get("authorization") || request.headers.get("Authorization");
  if (!authHeader) return null;
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0]?.toLowerCase() !== "bearer") return null;
  const token = parts[1];
  if (!token) return null;
  return verifyToken(token);
}
