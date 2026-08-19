import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Bilingual, Lang } from "@/config/aram";
import { strings, type StringKey } from "./strings";

const STORAGE_KEY = "aram.lang";

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: StringKey, vars?: Record<string, string | number>) => string;
  bi: (value: Bilingual) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ta" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (key: StringKey, vars?: Record<string, string | number>) => {
      const entry = strings[key];
      let out = (entry ? entry[lang] : key) || key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) out = out.replaceAll(`{${k}}`, String(v));
      }
      return out;
    },
    [lang],
  );

  const bi = useCallback((value: Bilingual) => value[lang] ?? value.en, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, bi }), [lang, setLang, t, bi]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}