import { o as __toESM } from "./_runtime.mjs";
import { d as MOCK_UPDATES } from "./_ssr/ssr.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { B as Lightbulb, C as Play, Ct as ArrowRight, E as Pause, J as HeartHandshake, Q as FileText, St as Bell, X as FolderOpen, at as Clock, bt as Building2, f as Trees, ft as ChevronRight, g as ShieldCheck, h as Sparkles, i as Waves, lt as CircleCheck, p as Trash2, pt as ChevronLeft, rt as Droplets, t as Zap, v as Search, y as Scale } from "./_libs/lucide-react.mjs";
import { h as Badge, l as Button, m as useWorkflow, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.index-BBtzrLZq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/home/AnnouncementTicker.tsx";
var CATEGORY_STYLES = {
	development: {
		badge: "bg-emerald-100 text-emerald-950 border-emerald-300 font-bold",
		accent: "border-l-emerald-600",
		bg: "bg-emerald-50/60",
		dot: "bg-emerald-600"
	},
	scheme: {
		badge: "bg-amber-100 text-amber-950 border-amber-300 font-bold",
		accent: "border-l-amber-600",
		bg: "bg-amber-50/60",
		dot: "bg-amber-600"
	},
	notice: {
		badge: "bg-blue-100 text-blue-950 border-blue-300 font-bold",
		accent: "border-l-blue-600",
		bg: "bg-blue-50/60",
		dot: "bg-blue-600"
	},
	announcement: {
		badge: "bg-sky-100 text-sky-950 border-sky-300 font-bold",
		accent: "border-l-sky-600",
		bg: "bg-sky-50/60",
		dot: "bg-sky-600"
	},
	event: {
		badge: "bg-violet-100 text-violet-950 border-violet-300 font-bold",
		accent: "border-l-violet-600",
		bg: "bg-violet-50/60",
		dot: "bg-violet-600"
	},
	alert: {
		badge: "bg-rose-100 text-rose-950 border-rose-300 font-bold",
		accent: "border-l-rose-600",
		bg: "bg-rose-50/60",
		dot: "bg-rose-600"
	}
};
var DEFAULT_STYLE = {
	badge: "bg-sky-100 text-sky-950 border-sky-300 font-bold",
	accent: "border-l-primary",
	bg: "bg-sky-50/60",
	dot: "bg-primary"
};
var prefersReducedMotion = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
function AnnouncementTicker() {
	const { bi, lang } = useI18n();
	const updates = MOCK_UPDATES;
	const total = updates.length;
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const [animState, setAnimState] = (0, import_react.useState)("idle");
	const [displayIndex, setDisplayIndex] = (0, import_react.useState)(0);
	const touchStartX = (0, import_react.useRef)(null);
	const isAnimating = (0, import_react.useRef)(false);
	const autoplayRef = (0, import_react.useRef)(null);
	const resetAutoplay = (0, import_react.useCallback)(() => {
		if (autoplayRef.current) clearInterval(autoplayRef.current);
		if (isPaused || total <= 1) return;
		autoplayRef.current = setInterval(() => {
			goNext();
		}, 6e3);
	}, [isPaused, total]);
	(0, import_react.useEffect)(() => {
		resetAutoplay();
		return () => {
			if (autoplayRef.current) clearInterval(autoplayRef.current);
		};
	}, [resetAutoplay]);
	const animate = (0, import_react.useCallback)((nextIdx, direction) => {
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
		setAnimState(direction === "next" ? "slide-out-left" : "slide-out-right");
		setTimeout(() => {
			setCurrentIndex(nextIdx);
			setDisplayIndex(nextIdx);
			setAnimState(direction === "next" ? "slide-in-right" : "slide-in-left");
			setTimeout(() => {
				setAnimState("idle");
				isAnimating.current = false;
			}, 550);
		}, 350);
	}, [total]);
	const goNext = (0, import_react.useCallback)(() => {
		const next = (currentIndex + 1) % total;
		animate(next, "next");
		resetAutoplay();
	}, [
		currentIndex,
		total,
		animate,
		resetAutoplay
	]);
	const goPrev = (0, import_react.useCallback)(() => {
		const prev = (currentIndex - 1 + total) % total;
		animate(prev, "prev");
		resetAutoplay();
	}, [
		currentIndex,
		total,
		animate,
		resetAutoplay
	]);
	const goTo = (idx) => {
		if (idx === currentIndex) return;
		animate(idx, idx > currentIndex ? "next" : "prev");
		resetAutoplay();
	};
	const handleTouchStart = (e) => {
		const touch = e.touches[0];
		if (touch) touchStartX.current = touch.clientX;
	};
	const handleTouchEnd = (e) => {
		const touch = e.changedTouches[0];
		if (touchStartX.current === null || !touch) return;
		const diff = touchStartX.current - touch.clientX;
		if (diff > 40) goNext();
		else if (diff < -40) goPrev();
		touchStartX.current = null;
	};
	const item = updates[displayIndex] ?? updates[0];
	const style = CATEGORY_STYLES[item.categoryId] ?? DEFAULT_STYLE;
	const getTransform = () => {
		switch (animState) {
			case "slide-out-left": return "translateX(-100%)";
			case "slide-in-right": return "translateX(100%)";
			case "slide-out-right": return "translateX(100%)";
			case "slide-in-left": return "translateX(-100%)";
			default: return "translateX(0)";
		}
	};
	const isTransitioning = animState !== "idle";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between mb-4 px-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 text-[#ffb703] shrink-0 border border-amber-400/30",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: "h-5 w-5" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 208,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 207,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-base sm:text-lg font-bold text-white tracking-tight",
					children: lang === "ta" ? "சமீபத்திய அறிவிப்புகள்" : "Latest Announcements"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 211,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs text-slate-200 hidden sm:block",
					children: lang === "ta" ? "தொகுதியில் இருந்து முக்கிய அறிவிப்புகள்" : "Important public notices from your constituency"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 214,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 210,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 206,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setIsPaused((p) => !p),
						className: "h-8 w-8 flex items-center justify-center rounded-lg border border-amber-400/30 text-amber-300 hover:text-white hover:bg-[#d91c2b] transition-colors shadow-sm",
						"aria-label": isPaused ? "Play announcements" : "Pause announcements",
						title: isPaused ? "Play" : "Pause",
						children: isPaused ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "h-3.5 w-3.5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 230,
							columnNumber: 25
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pause, { className: "h-3.5 w-3.5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 230,
							columnNumber: 60
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 224,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: goPrev,
						className: "h-8 w-8 flex items-center justify-center rounded-lg border border-amber-400/30 text-amber-300 hover:text-white hover:bg-[#d91c2b] transition-colors shadow-sm",
						"aria-label": "Previous announcement",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 237,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 232,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: goNext,
						className: "h-8 w-8 flex items-center justify-center rounded-lg border border-amber-400/30 text-amber-300 hover:text-white hover:bg-[#d91c2b] transition-colors shadow-sm",
						"aria-label": "Next announcement",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 244,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 239,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 223,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 205,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative overflow-hidden rounded-2xl border border-amber-400/30 bg-white shadow-xl text-slate-950",
			style: { isolation: "isolate" },
			onMouseEnter: () => setIsPaused(true),
			onMouseLeave: () => setIsPaused(false),
			onFocus: () => setIsPaused(true),
			onBlur: () => setIsPaused(false),
			onTouchStart: handleTouchStart,
			onTouchEnd: handleTouchEnd,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					transform: getTransform(),
					transition: isTransitioning ? `transform ${animState.startsWith("slide-in") ? "550ms" : "350ms"} cubic-bezier(0.4, 0, 0.2, 1)` : "none",
					willChange: "transform"
				},
				className: `border-l-4 ${style.accent} ${style.bg}`,
				"aria-live": "polite",
				"aria-atomic": "true",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-5 sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between gap-2 mb-4 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
									className: `text-[11px] font-bold border uppercase tracking-wide ${style.badge}`,
									children: bi(item.category)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 278,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs text-slate-700 font-semibold",
									children: item.date
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 281,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 277,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs text-slate-800 font-bold tabular-nums",
								children: [
									displayIndex + 1,
									" / ",
									total
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 285,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 276,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "font-black text-slate-950 text-lg sm:text-xl leading-snug mb-3 font-display",
							children: bi(item.title)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 291,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm sm:text-base text-slate-800 leading-relaxed font-medium mb-5",
							children: bi(item.description)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 296,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/development",
							className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#170204] hover:bg-[#d91c2b] text-white font-bold text-xs shadow-md border border-amber-400/40 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "மேலும் படிக்க" : "Read More" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 305,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 306,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 301,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 274,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "bg-slate-100 px-5 sm:px-7 py-3 border-t border-slate-200 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						role: "tablist",
						"aria-label": "Announcement indicators",
						children: updates.map((_, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							role: "tab",
							"aria-selected": idx === displayIndex,
							onClick: () => goTo(idx),
							className: `h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${idx === displayIndex ? `w-7 bg-[#d91c2b]` : "w-2 bg-slate-300 hover:bg-slate-500"}`,
							"aria-label": `Go to announcement ${idx + 1}`
						}, idx, false, {
							fileName: _jsxFileName$1,
							lineNumber: 314,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 312,
						columnNumber: 13
					}, this), isPaused && /* @__PURE__ */ (void 0)("span", {
						className: "text-[10px] text-slate-600 font-bold uppercase tracking-wide",
						children: lang === "ta" ? "இடைநிறுத்தப்பட்டது" : "Paused"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 329,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 311,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 261,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 250,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 203,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.index.tsx?tsr-split=component";
function HomePage() {
	const { lang } = useI18n();
	const { stats, complaints } = useWorkflow();
	const HERO_IMAGES = ["/arun.png", "/vijay.png"];
	const [heroImageIdx, setHeroImageIdx] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setHeroImageIdx((prev) => (prev + 1) % HERO_IMAGES.length);
		}, 4500);
		return () => clearInterval(timer);
	}, []);
	stats?.newComplaints ?? complaints.filter((c) => ["new", "pending_verification"].includes(c.status)).length;
	stats?.assignedComplaints ?? complaints.filter((c) => ["verified", "assigned"].includes(c.status)).length;
	stats?.inProgressComplaints ?? complaints.filter((c) => ["in_progress", "started"].includes(c.status)).length;
	stats?.resolvedComplaints ?? complaints.filter((c) => ["completed", "closed"].includes(c.status)).length;
	const COMMON_CATEGORIES = [
		{
			id: "road",
			icon: Building2,
			image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400&h=300&fit=crop&q=80",
			name: {
				en: "Roads & Footpaths",
				ta: "சாலைகள் & நடைபாதைகள்"
			},
			desc: {
				en: "Road damage, potholes & pathways",
				ta: "சாலை சேதம், பீங்குகள் & பாதைகள்"
			},
			gradient: "from-blue-600/80 to-blue-900/90"
		},
		{
			id: "water",
			icon: Droplets,
			image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop&q=80",
			name: {
				en: "Water Supply",
				ta: "குடிநீர் விநியோகம்"
			},
			desc: {
				en: "Leaks, shortage & supply issues",
				ta: "சோர்வு, குறைவு & விநியோக பிரச்சினைகள்"
			},
			gradient: "from-cyan-600/80 to-cyan-900/90"
		},
		{
			id: "waste",
			icon: Trash2,
			image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop&q=80",
			name: {
				en: "Garbage Collection",
				ta: "குப்பை சேகரிப்பு"
			},
			desc: {
				en: "Waste collection & cleanliness",
				ta: "குப்பை சேகரிப்பு & சுத்தம்"
			},
			gradient: "from-emerald-600/80 to-emerald-900/90"
		},
		{
			id: "streetlight",
			icon: Lightbulb,
			image: "https://images.unsplash.com/photo-1542332213-31f87348057f?w=400&h=300&fit=crop&q=80",
			name: {
				en: "Street Lights",
				ta: "தெருவிளக்குகள்"
			},
			desc: {
				en: "Damaged or non‑working lights",
				ta: "சீர்குலைவு அல்லது இயங்காத விளக்குகள்"
			},
			gradient: "from-amber-600/80 to-amber-900/90"
		},
		{
			id: "drainage",
			icon: Waves,
			image: "https://images.unsplash.com/photo-1594398901394-4e34939a02eb?w=400&h=300&fit=crop&q=80",
			name: {
				en: "Drainage & Sewage",
				ta: "வடிகால் & கழிவுநீர்"
			},
			desc: {
				en: "Blocked drains & sewage issues",
				ta: "தடைப்பட்ட வடிகால்கள் & கழிவுநீர் பிரச்சினைகள்"
			},
			gradient: "from-teal-600/80 to-teal-900/90"
		},
		{
			id: "sanitation",
			icon: Sparkles,
			image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop&q=80",
			name: {
				en: "Public Toilets",
				ta: "பொது கழிப்பறைகள்"
			},
			desc: {
				en: "Maintenance & cleanliness",
				ta: "பராமரிப்பு & சுத்தம்"
			},
			gradient: "from-indigo-600/80 to-indigo-900/90"
		},
		{
			id: "infrastructure",
			icon: Trees,
			image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=400&h=300&fit=crop&q=80",
			name: {
				en: "Parks & Playgrounds",
				ta: "பூங்காக்கள் & மைதானங்கள்"
			},
			desc: {
				en: "Maintenance & public facilities",
				ta: "பராமரிப்பு & பொதுப் பயன்கள்"
			},
			gradient: "from-green-600/80 to-green-900/90"
		},
		{
			id: "all",
			icon: FolderOpen,
			image: "",
			name: {
				en: "View All Categories",
				ta: "அனைத்து பிரிவுகள்"
			},
			gradient: "from-slate-600/80 to-slate-900/90"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col gap-8 sm:gap-12 pb-16 bg-gradient-to-b from-slate-50/50 via-white to-white min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative overflow-hidden bg-[#170204] text-white border-b border-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative bg-cover bg-top bg-no-repeat pt-6 pb-8 transition-all",
					style: { backgroundImage: "url('/image.png')" },
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute inset-0 pointer-events-none overflow-hidden z-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
								className: "absolute -left-20 top-0 h-full w-[450px] opacity-30 mix-blend-screen",
								viewBox: "0 0 400 800",
								fill: "none",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
										d: "M-100 0C50 200 150 400 -50 800",
										stroke: "url(#red-ribbon)",
										strokeWidth: "120",
										strokeLinecap: "round",
										filter: "blur(30px)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
										d: "M-120 100C100 300 200 500 -20 800",
										stroke: "url(#gold-ribbon)",
										strokeWidth: "40",
										strokeLinecap: "round",
										filter: "blur(20px)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 153,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
										id: "red-ribbon",
										x1: "0",
										y1: "0",
										x2: "1",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
											offset: "0%",
											stopColor: "#d91c2b"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 156,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
											offset: "100%",
											stopColor: "#7a0712"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 157,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 155,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
										id: "gold-ribbon",
										x1: "0",
										y1: "0",
										x2: "1",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
											offset: "0%",
											stopColor: "#ffb703"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 160,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
											offset: "100%",
											stopColor: "#d91c2b"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 161,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 159,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 154,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
								className: "absolute -right-20 top-0 h-full w-[500px] opacity-25 mix-blend-screen",
								viewBox: "0 0 500 800",
								fill: "none",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
										d: "M600 0C350 250 250 550 500 800",
										stroke: "url(#red-ribbon-right)",
										strokeWidth: "140",
										strokeLinecap: "round",
										filter: "blur(35px)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 168,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
										d: "M550 100C400 300 300 600 450 800",
										stroke: "url(#gold-ribbon-right)",
										strokeWidth: "50",
										strokeLinecap: "round",
										filter: "blur(25px)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 169,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
										id: "red-ribbon-right",
										x1: "1",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
											offset: "0%",
											stopColor: "#d91c2b"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 172,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
											offset: "100%",
											stopColor: "#ffb703"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 173,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
										id: "gold-ribbon-right",
										x1: "1",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
											offset: "0%",
											stopColor: "#ffb703"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 176,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
											offset: "100%",
											stopColor: "#7a0712"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 177,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 175,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 170,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 167,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 183,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-1/3 bottom-0 w-[400px] h-[400px] bg-red-600/15 rounded-full blur-[90px]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 184,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 149,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						className: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-4 sm:pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "lg:col-span-7 space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 border border-amber-400/40 text-xs font-bold tracking-wide text-white shadow-lg backdrop-blur-sm",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#d91c2b] animate-pulse" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 195,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "• தவெக · திருச்செங்கோடு தொகுதி மக்கள் தளம்" : "• TVK · Tiruchengode Constituency People's Platform" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 196,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 194,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
											className: "text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-display leading-[1.05] drop-shadow-lg",
											children: lang === "ta" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
												"மக்களின் குரல் ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 203,
													columnNumber: 40
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "italic font-serif text-[#e61c2b] font-normal mr-2",
													children: "வலுவான"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 204,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "relative text-[#ffb703] inline-block",
													children: ["திருச்செங்கோடு", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
														className: "absolute -bottom-1.5 left-0 w-full h-3 text-[#ffb703]",
														viewBox: "0 0 100 20",
														preserveAspectRatio: "none",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
															d: "M0 15 Q 50 0, 100 15",
															stroke: "currentColor",
															strokeWidth: "4",
															fill: "none",
															strokeLinecap: "round"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 208,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 207,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 205,
													columnNumber: 25
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 202,
												columnNumber: 38
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
												"People’s Voice ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 212,
													columnNumber: 40
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "italic font-serif text-[#e61c2b] font-normal mr-2",
													children: "Stronger"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 213,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "relative text-[#ffb703] inline-block",
													children: ["Tiruchengode", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
														className: "absolute -bottom-1.5 left-0 w-full h-3 text-[#ffb703]",
														viewBox: "0 0 100 20",
														preserveAspectRatio: "none",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
															d: "M0 15 Q 50 0, 100 15",
															stroke: "currentColor",
															strokeWidth: "4",
															fill: "none",
															strokeLinecap: "round"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 217,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 216,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 214,
													columnNumber: 25
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 211,
												columnNumber: 29
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 201,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-sm sm:text-base text-slate-100 font-medium leading-relaxed max-w-xl pt-2 drop-shadow-md",
											children: lang === "ta" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
												"தூய்மையான, பாதுகாப்பான மற்றும் வலுவான திருச்செங்கோடு தொகுதி — ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
													className: "text-amber-300 font-bold",
													children: "உங்கள் குரல் மூலம்"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 226,
													columnNumber: 87
												}, this),
												". உங்கள் புகார்களைப் பதிவு செய்யுங்கள், முன்னேற்றத்தைக் கண்காணிக்கவும், மக்கள் சார்ந்த ஆட்சியில் பங்கேற்பீர்."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 225,
												columnNumber: 38
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
												"A cleaner, safer and stronger Tiruchengode — through ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
													className: "text-amber-300 font-bold",
													children: "your voice"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 228,
													columnNumber: 78
												}, this),
												". Submit your grievances, track progress, and be part of a people-driven governance."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 227,
												columnNumber: 29
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 224,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 200,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-center gap-3 pt-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: "/complaints/register",
												className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#e61c2b] to-[#b81220] text-white text-sm font-black shadow-[0_10px_25px_rgba(230,28,43,0.5)] hover:brightness-110 transition-all transform hover:scale-102 border border-red-400/50",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "text-base",
														children: "🎙️"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 237,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "புதிய புகார்" : "New Grievance" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 238,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4 ml-0.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 239,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 236,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: "/complaints/track",
												className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black/75 border border-white/35 text-white text-sm font-bold shadow-lg hover:bg-black/90 transition-all backdrop-blur-md",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-4 w-4 text-amber-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 244,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "நிலையைக் கண்காணிக்க" : "Track Status" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 245,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 243,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: "/schemes",
												className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-300 text-sm font-bold shadow-lg hover:bg-amber-500/30 transition-all",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeartHandshake, { className: "h-4 w-4 text-amber-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 250,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "பணியாளராக இணைய" : "Join as Volunteer" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 251,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 249,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 234,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "pt-2 flex flex-wrap items-center gap-5 sm:gap-8 text-xs text-white font-semibold drop-shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-amber-400 text-sm",
													children: "🏛️"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 258,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "நேரடியாக சட்டமன்ற அலுவலகத்திற்கு" : "Direct to MLA Office" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 259,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 257,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-amber-400 text-sm",
													children: "🌐"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 262,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "தமிழ் & ஆங்கில ஆதரவு" : "Tamil & English Support" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 263,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 261,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Zap, { className: "h-4 w-4 text-amber-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 266,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "நேரலை புதுப்பிப்புகள்" : "Real-time Updates" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 267,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 265,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 256,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "lg:col-span-5 relative flex justify-center items-center pt-4 lg:pt-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative w-full max-w-lg flex items-center justify-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[440px] opacity-25 pointer-events-none flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
												viewBox: "0 0 300 350",
												fill: "none",
												className: "w-full h-full text-amber-400 drop-shadow-[0_0_35px_rgba(255,183,3,0.5)]",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
													d: "M120 20 C160 30, 200 40, 220 70 C240 100, 270 140, 280 180 C290 220, 270 260, 230 290 C190 320, 140 340, 100 320 C60 300, 30 250, 40 200 C50 150, 80 80, 120 20 Z",
													fill: "url(#tn-map-gradient)",
													opacity: "0.8"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 280,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
													id: "tn-map-gradient",
													x1: "0",
													y1: "0",
													x2: "1",
													y2: "1",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
														offset: "0%",
														stopColor: "#ffb703"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 283,
														columnNumber: 27
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
														offset: "100%",
														stopColor: "#d91c2b"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 284,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 282,
													columnNumber: 25
												}, this) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 281,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 279,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 278,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "relative z-10 w-full max-w-[360px] sm:max-w-[400px] h-[400px] sm:h-[460px] overflow-hidden",
											children: HERO_IMAGES.map((imgSrc, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
												src: imgSrc,
												alt: "TVK Leader Representative",
												className: `absolute inset-0 w-full h-full object-cover [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_98%)] drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] filter contrast-105 transition-opacity duration-1000 ease-in-out ${idx === heroImageIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`,
												onError: (e) => {
													const target = e.currentTarget;
													target.src = "/mla.png";
												}
											}, imgSrc, false, {
												fileName: _jsxFileName,
												lineNumber: 292,
												columnNumber: 55
											}, this))
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 291,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "hidden sm:flex flex-col justify-center items-end absolute -right-2 sm:-right-4 lg:-right-6 top-3 sm:top-5 z-20 text-right space-y-1 font-display tracking-widest pointer-events-none select-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "text-[10px] sm:text-xs font-black uppercase text-amber-300 tracking-[0.24em] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]",
													children: "PEOPLE"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 300,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "text-[10px] sm:text-xs font-black uppercase text-amber-300 tracking-[0.24em] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]",
													children: "DEVELOPMENT"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 303,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "text-[10px] sm:text-xs font-black uppercase text-amber-300 tracking-[0.24em] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]",
													children: "JUSTICE"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 306,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "text-[10px] sm:text-xs font-black uppercase text-amber-300 tracking-[0.24em] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]",
													children: "EQUALITY"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 309,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "pt-2 font-serif italic text-amber-400 text-base sm:text-lg font-bold tracking-normal drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] rotate-[-4deg]",
													children: "Namakaga Namma Oor"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 314,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 299,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 275,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 274,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 188,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 p-5 sm:p-6 rounded-3xl bg-[#260408]/90 border border-amber-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-4 pt-2 md:pt-0",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "h-12 w-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-6 w-6" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 333,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 332,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm",
											children: lang === "ta" ? "12,458" : "12,458"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 336,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-xs sm:text-sm font-bold text-amber-300 mt-0.5 tracking-wide",
											children: lang === "ta" ? "மொத்த புகார்கள்" : "Total Grievances"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 339,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 335,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 331,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-4 pt-4 md:pt-0 md:pl-6",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "h-12 w-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-6 w-6" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 348,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 347,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm",
											children: lang === "ta" ? "2,341" : "2,341"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 351,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-xs sm:text-sm font-bold text-amber-300 mt-0.5 tracking-wide",
											children: lang === "ta" ? "நிலுவையில் உள்ளவை" : "Pending"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 354,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 350,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 346,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-4 pt-4 md:pt-0 md:pl-6",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "h-12 w-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-6 w-6" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 363,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 362,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm",
											children: lang === "ta" ? "9,876" : "9,876"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 366,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-xs sm:text-sm font-bold text-amber-300 mt-0.5 tracking-wide",
											children: lang === "ta" ? "தீர்க்கப்பட்டவை" : "Resolved"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 369,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 365,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 361,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-4 pt-4 md:pt-0 md:pl-6",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "h-12 w-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeartHandshake, { className: "h-6 w-6" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 378,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 377,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm",
											children: lang === "ta" ? "18,500+" : "18,500+"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 381,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-xs sm:text-sm font-bold text-amber-300 mt-0.5 tracking-wide",
											children: lang === "ta" ? "பயனடைந்த மக்கள்" : "People Engaged"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 384,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 380,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 376,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 328,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 327,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 144,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pb-6 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "py-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3 max-w-md",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-2xl font-serif text-amber-400 font-bold leading-none",
									children: "“"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 402,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "italic text-slate-200",
										children: lang === "ta" ? "நல்லாட்சி என்பது ஒரு வாக்குறுதி அல்ல, ஆனால் ஒரு தொடர்ச்சியான பொறுப்பு." : "Good governance is not a promise, but a continuous responsibility."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 404,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[11px] font-bold text-amber-400",
										children: "– Thalapathy Vijay"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 407,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 403,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 401,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3 border-l md:border-r border-white/15 px-4 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: "/logo.png",
									alt: "NAMMA KURAL",
									className: "h-9 w-9 rounded-full object-contain p-0.5 bg-[#1b0305] border border-amber-400/50"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 415,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-bold text-white text-xs",
									children: lang === "ta" ? "மக்களை மையமாகக் கொண்ட திருச்செங்கோட்டிற்காக" : "For a People-Centered Tiruchengode"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 417,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[10px] uppercase tracking-wider text-amber-400 font-bold",
									children: "TOGETHER FOR A BRIGHTER TOMORROW"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 420,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 416,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 414,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 text-slate-400 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-6 w-3.5 rounded-full border border-slate-400 flex justify-center pt-1",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-1.5 w-1 bg-amber-400 rounded-full animate-bounce" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 429,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 428,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11px]",
									children: [lang === "ta" ? "கீழே செல்லவும்" : "Scroll to explore", " >"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 431,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 427,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 398,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "pt-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnnouncementTicker, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 438,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 437,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 396,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 141,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white border border-border/70 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 p-2.5 rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-5 w-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 453,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 452,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs sm:text-sm font-bold text-slate-950",
								children: lang === "ta" ? "வெளிப்படையானது" : "Transparent"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 456,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] text-slate-700 font-semibold",
								children: lang === "ta" ? "நிகழ்நேர தகவல்கள்" : "Real-time updates"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 459,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 455,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 451,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 p-2.5 rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "h-10 w-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Zap, { className: "h-5 w-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 468,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 467,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs sm:text-sm font-bold text-slate-950",
								children: lang === "ta" ? "விரைவான தீர்வு" : "Faster Resolution"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 471,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] text-slate-700 font-semibold",
								children: lang === "ta" ? "துரித நடவடிக்கை" : "Timely action on issues"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 474,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 470,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 466,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 p-2.5 rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeartHandshake, { className: "h-5 w-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 483,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 482,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs sm:text-sm font-bold text-slate-950",
								children: lang === "ta" ? "குடிமக்கள் முதன்மை" : "Citizen First"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 486,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] text-slate-700 font-semibold",
								children: lang === "ta" ? "உங்கள் குரல் முக்கியம்" : "Your voice matters"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 489,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 485,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 481,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 p-2.5 rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-700 flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scale, { className: "h-5 w-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 498,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 497,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs sm:text-sm font-bold text-slate-950",
								children: lang === "ta" ? "பொறுப்புடைமை" : "Accountable"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 501,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] text-slate-700 font-semibold",
								children: lang === "ta" ? "நேர்மையான ஆட்சி" : "Responsible governance"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 504,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 500,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 496,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 448,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 447,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 space-y-4 sm:space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center space-x-2",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
									variant: "secondary",
									className: "uppercase text-xs font-medium tracking-wider",
									children: lang === "ta" ? "அறிக்கை" : "REPORT AN ISSUE"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 520,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 519,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-xl sm:text-2xl font-black text-foreground tracking-tight font-display mt-1",
								children: lang === "ta" ? "பொதுவான புகார் பிரிவுகள்" : "Common Categories"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 524,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs sm:text-sm text-muted-foreground mt-1",
								children: lang === "ta" ? "உங்கள் புகாரை நேரடியாக பதிவு செய்ய விரும்பிய பிரிவை தேர்வு செய்க" : "Select a category to report your issue directly"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 527,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 518,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "text-xs font-bold text-primary hover:text-primary gap-1 hidden sm:flex",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/complaints/register",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "அனைத்து பிரிவுகள் →" : "View All →" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 533,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 532,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 531,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 517,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5",
						children: COMMON_CATEGORIES.filter((cat) => cat.id !== "all").map(({ id, icon: Icon, image, name, desc, gradient }) => {
							const targetUrl = `/complaints/register?category=${id}`;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: targetUrl,
								"aria-label": `${lang === "ta" ? name.ta : name.en} – ${lang === "ta" ? desc?.ta : desc?.en}`,
								className: "group relative overflow-hidden rounded-2xl border border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 aspect-[4/3]",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: image,
										alt: lang === "ta" ? name.ta : name.en,
										className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
										loading: "lazy"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 551,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute inset-0 bg-gradient-to-t ${gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300` }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 553,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative z-10 flex flex-col justify-end h-full p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2 mb-1.5",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/20",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-4 w-4 text-white" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 558,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 557,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 556,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm",
												children: lang === "ta" ? name.ta : name.en
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 561,
												columnNumber: 19
											}, this),
											desc && /* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] sm:text-xs text-white/80 mt-0.5 line-clamp-2 leading-relaxed",
												children: lang === "ta" ? desc.ta : desc.en
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 564,
												columnNumber: 28
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 555,
										columnNumber: 17
									}, this)
								]
							}, id, true, {
								fileName: _jsxFileName,
								lineNumber: 549,
								columnNumber: 18
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 539,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 text-center",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/complaints/register",
							className: "inline-flex items-center text-primary font-medium hover:underline",
							children: lang === "ta" ? "அனைத்து பிரிவுகள் →" : "View All Issues →"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 572,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 571,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 516,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 137,
		columnNumber: 10
	}, this);
}
//#endregion
export { HomePage as component };
