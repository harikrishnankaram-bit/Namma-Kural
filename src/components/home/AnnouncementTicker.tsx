import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  Bell,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { MOCK_UPDATES } from "@/data/mock";
import type { UpdateItem } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ── Category accent colours ──────────────────────────────────────────────────
const CATEGORY_STYLES: Record<
  string,
  { badge: string; accent: string; bg: string; dot: string }
> = {
  development: {
    badge: "bg-emerald-100 text-emerald-950 border-emerald-300 font-bold",
    accent: "border-l-emerald-600",
    bg: "bg-emerald-50/60",
    dot: "bg-emerald-600",
  },
  scheme: {
    badge: "bg-amber-100 text-amber-950 border-amber-300 font-bold",
    accent: "border-l-amber-600",
    bg: "bg-amber-50/60",
    dot: "bg-amber-600",
  },
  notice: {
    badge: "bg-blue-100 text-blue-950 border-blue-300 font-bold",
    accent: "border-l-blue-600",
    bg: "bg-blue-50/60",
    dot: "bg-blue-600",
  },
  announcement: {
    badge: "bg-sky-100 text-sky-950 border-sky-300 font-bold",
    accent: "border-l-sky-600",
    bg: "bg-sky-50/60",
    dot: "bg-sky-600",
  },
  event: {
    badge: "bg-violet-100 text-violet-950 border-violet-300 font-bold",
    accent: "border-l-violet-600",
    bg: "bg-violet-50/60",
    dot: "bg-violet-600",
  },
  alert: {
    badge: "bg-rose-100 text-rose-950 border-rose-300 font-bold",
    accent: "border-l-rose-600",
    bg: "bg-rose-50/60",
    dot: "bg-rose-600",
  },
};

const DEFAULT_STYLE = {
  badge: "bg-sky-100 text-sky-950 border-sky-300 font-bold",
  accent: "border-l-primary",
  bg: "bg-sky-50/60",
  dot: "bg-primary",
};

// Detect prefers-reduced-motion at module level (SSR-safe)
const prefersReducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

// ── Component ────────────────────────────────────────────────────────────────
export function AnnouncementTicker() {
  const { bi, lang } = useI18n();

  const updates: UpdateItem[] = MOCK_UPDATES;
  const total = updates.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slide animation state
  // "idle" | "slide-out-left" | "slide-in-right" | "slide-out-right" | "slide-in-left"
  const [animState, setAnimState] = useState<
    "idle" | "slide-out-left" | "slide-in-right" | "slide-out-right" | "slide-in-left"
  >("idle");
  const [displayIndex, setDisplayIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const isAnimating = useRef(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Clears & (re)starts the autoplay interval
  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (isPaused || total <= 1) return;
    autoplayRef.current = setInterval(() => {
      goNext();
    }, 6000);
  }, [isPaused, total]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [resetAutoplay]);

  // Slide logic
  const animate = useCallback(
    (nextIdx: number, direction: "next" | "prev") => {
      if (isAnimating.current || total <= 1) {
        setCurrentIndex(nextIdx);
        setDisplayIndex(nextIdx);
        return;
      }

      if (prefersReducedMotion) {
        setCurrentIndex(nextIdx);
        setDisplayIndex(nextIdx);
        return;
      }

      isAnimating.current = true;

      // Phase 1: slide current card out
      setAnimState(direction === "next" ? "slide-out-left" : "slide-out-right");

      setTimeout(() => {
        // Phase 2: swap content & slide new card in from opposite side
        setCurrentIndex(nextIdx);
        setDisplayIndex(nextIdx);
        setAnimState(direction === "next" ? "slide-in-right" : "slide-in-left");

        setTimeout(() => {
          // Phase 3: settle
          setAnimState("idle");
          isAnimating.current = false;
        }, 550);
      }, 350);
    },
    [total]
  );

  const goNext = useCallback(() => {
    const next = (currentIndex + 1) % total;
    animate(next, "next");
    resetAutoplay();
  }, [currentIndex, total, animate, resetAutoplay]);

  const goPrev = useCallback(() => {
    const prev = (currentIndex - 1 + total) % total;
    animate(prev, "prev");
    resetAutoplay();
  }, [currentIndex, total, animate, resetAutoplay]);

  const goTo = (idx: number) => {
    if (idx === currentIndex) return;
    const dir = idx > currentIndex ? "next" : "prev";
    animate(idx, dir);
    resetAutoplay();
  };

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) touchStartX.current = touch.clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    if (touchStartX.current === null || !touch) return;
    const diff = touchStartX.current - touch.clientX;
    if (diff > 40) goNext();
    else if (diff < -40) goPrev();
    touchStartX.current = null;
  };

  // Current item (always use displayIndex for rendered content)
  const item: UpdateItem = updates[displayIndex] ?? (updates[0] as UpdateItem);
  const style = CATEGORY_STYLES[item.categoryId] ?? DEFAULT_STYLE;

  // CSS transform based on animState
  const getTransform = () => {
    switch (animState) {
      case "slide-out-left":
        return "translateX(-100%)";
      case "slide-in-right":
        return "translateX(100%)";
      case "slide-out-right":
        return "translateX(100%)";
      case "slide-in-left":
        return "translateX(-100%)";
      default:
        return "translateX(0)";
    }
  };

  const isTransitioning = animState !== "idle";

  return (
    <div className="w-full">
      {/* ── Section Header ── */}
      <div className="flex items-center justify-between mb-4 px-0.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 text-[#ffb703] shrink-0 border border-amber-400/30">
            <Bell className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {lang === "ta" ? "சமீபத்திய அறிவிப்புகள்" : "Latest Announcements"}
            </h2>
            <p className="text-xs text-slate-200 hidden sm:block">
              {lang === "ta"
                ? "தொகுதியில் இருந்து முக்கிய அறிவிப்புகள்"
                : "Important public notices from your constituency"}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPaused((p) => !p)}
            className="h-8 w-8 flex items-center justify-center rounded-lg border border-amber-400/30 text-amber-300 hover:text-white hover:bg-[#d91c2b] transition-colors shadow-sm"
            aria-label={isPaused ? "Play announcements" : "Pause announcements"}
            title={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
          <button
            onClick={goPrev}
            className="h-8 w-8 flex items-center justify-center rounded-lg border border-amber-400/30 text-amber-300 hover:text-white hover:bg-[#d91c2b] transition-colors shadow-sm"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={goNext}
            className="h-8 w-8 flex items-center justify-center rounded-lg border border-amber-400/30 text-amber-300 hover:text-white hover:bg-[#d91c2b] transition-colors shadow-sm"
            aria-label="Next announcement"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── Slide Window ── */}
      <div
        className="relative overflow-hidden rounded-2xl border border-amber-400/30 bg-white shadow-xl text-slate-950"
        style={{ isolation: "isolate" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide panel */}
        <div
          style={{
            transform: getTransform(),
            transition: isTransitioning
              ? `transform ${animState.startsWith("slide-in") ? "550ms" : "350ms"} cubic-bezier(0.4, 0, 0.2, 1)`
              : "none",
            willChange: "transform",
          }}
          className={`border-l-4 ${style.accent} ${style.bg}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Card Body */}
          <div className="p-5 sm:p-7">
            {/* Top row: badge + date + counter */}
            <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Badge className={`text-[11px] font-bold border uppercase tracking-wide ${style.badge}`}>
                  {bi(item.category)}
                </Badge>
                <span className="text-xs text-slate-700 font-semibold">
                  {item.date}
                </span>
              </div>
              <span className="text-xs text-slate-800 font-bold tabular-nums">
                {displayIndex + 1} / {total}
              </span>
            </div>

            {/* Title (explicit dark text so text-white parent never turns it white!) */}
            <h3 className="font-black text-slate-950 text-lg sm:text-xl leading-snug mb-3 font-display">
              {bi(item.title)}
            </h3>

            {/* Description — explicit dark text */}
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium mb-5">
              {bi(item.description)}
            </p>

            {/* Read More button */}
            <Link
              to="/development"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#170204] hover:bg-[#d91c2b] text-white font-bold text-xs shadow-md border border-amber-400/40 transition-colors"
            >
              <span>{lang === "ta" ? "மேலும் படிக்க" : "Read More"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Pagination row */}
          <div className="bg-slate-100 px-5 sm:px-7 py-3 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2" role="tablist" aria-label="Announcement indicators">
              {updates.map((_, idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={idx === displayIndex}
                  onClick={() => goTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                    idx === displayIndex
                      ? `w-7 bg-[#d91c2b]`
                      : "w-2 bg-slate-300 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to announcement ${idx + 1}`}
                />
              ))}
            </div>
            {isPaused && (
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wide">
                {lang === "ta" ? "இடைநிறுத்தப்பட்டது" : "Paused"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
