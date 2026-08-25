import {
createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Role } from "@/config/aram";
import { ROLE_META } from "@/config/aram";

export interface AuthUser {
  userId: string;
  name: string;
  mobile: string;
  email: string;
  role: Role;
  departmentId?: string;
  departmentName?: string;
  wardId?: string;
  wardNumber?: number;
  avatar?: string;
  preferredLang?: "en" | "ta";
}

interface AuthValue {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (mobileOrEmail: string, role: Role, password?: string) => Promise<{ ok: boolean; message: string }>;
  logout: () => void;
  switchRole: (role: Role) => Promise<void>;
}

const STORAGE_KEY_USER = "aram.auth.user";
const STORAGE_KEY_TOKEN = "aram.auth.token";

const AuthContext = createContext<AuthValue | null>(null);

export const ROLE_DASHBOARDS: Record<Role, string> = {
  citizen: "/dashboard/citizen",
  field_officer: "/dashboard/officer",
  department_admin: "/dashboard/department",
  constituency_admin: "/dashboard/constituency",
  content_admin: "/console/content",
  super_admin: "/dashboard/superadmin",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedUser = window.localStorage.getItem(STORAGE_KEY_USER);
      const storedToken = window.localStorage.getItem(STORAGE_KEY_TOKEN);
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser) as AuthUser);
        setToken(storedToken);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const login = useCallback(async (mobileOrEmail: string, role: Role, password?: string) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: mobileOrEmail.includes("@") ? mobileOrEmail : undefined,
          role,
          password: password || "Aram@2026",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        return { ok: false, message: data.message || "Authentication failed" };
      }

      const authenticatedUser: AuthUser = {
        userId: data.user.id || data.user.userId,
        name: data.user.name,
        email: data.user.email,
        mobile: data.user.mobile,
        role: data.user.role,
        departmentId: data.user.departmentId,
        wardId: data.user.wardId,
      };

      setUser(authenticatedUser);
      setToken(data.token);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(authenticatedUser));
        window.localStorage.setItem(STORAGE_KEY_TOKEN, data.token);
      }

      return { ok: true, message: "Login successful" };
    } catch (err: any) {
      console.error("Auth login API error:", err);
      return { ok: false, message: err.message || "Login request failed" };
    }
  }, []);

  const switchRole = useCallback(async (role: Role) => {
    await login("", role, "Aram@2026");
  }, [login]);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY_USER);
      window.localStorage.removeItem(STORAGE_KEY_TOKEN);
    }
  }, []);

  const value = useMemo(
    () => ({ user, token, isAuthenticated: !!user, login, logout, switchRole }),
    [user, token, login, logout, switchRole],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

export { ROLE_META };
