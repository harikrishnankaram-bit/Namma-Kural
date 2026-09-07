import { o as __toESM } from "./_runtime.mjs";
import { c as WARDS, i as DEPARTMENTS, s as STATUS_META, t as CATEGORIES } from "./_ssr/ssr.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { ct as CircleX, lt as CircleCheck, mt as ChevronDown, v as Search } from "./_libs/lucide-react.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "./_libs/radix-ui__react-slider.mjs";
import { _ as cn, c as Input, h as Badge, l as Button, m as useWorkflow, r as Textarea, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.complaints.track-RDhWVyZf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/slider.tsx";
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderRange, { className: "absolute h-full bg-primary" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 16,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 15,
		columnNumber: 5
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
Slider.displayName = Slider$1.displayName;
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.complaints.track.tsx?tsr-split=component";
function BeforeAfterSlider({ before, after }) {
	const [pos, setPos] = (0, import_react.useState)(50);
	const containerRef = (0, import_react.useRef)(null);
	const { t } = useI18n();
	const handleMove = (clientX) => {
		const rect = containerRef.current?.getBoundingClientRect();
		if (!rect) return;
		const p = Math.max(0, Math.min(100, (clientX - rect.left) / rect.width * 100));
		setPos(p);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			ref: containerRef,
			className: "relative w-full h-52 rounded-xl overflow-hidden cursor-ew-resize select-none",
			onMouseMove: (e) => handleMove(e.clientX),
			onTouchMove: (e) => {
				const touch = e.touches[0];
				if (touch) handleMove(touch.clientX);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: after,
					alt: "After",
					className: "absolute inset-0 w-full h-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute inset-0 overflow-hidden",
					style: { width: `${pos}%` },
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: before,
						alt: "Before",
						className: "w-full h-full object-cover",
						style: { minWidth: "100vw" }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute inset-y-0 w-0.5 bg-white shadow-lg",
					style: { left: `${pos}%` },
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4 text-foreground rotate-90" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "absolute top-2 left-2 text-[10px] font-bold bg-black/50 text-white px-2 py-0.5 rounded",
					children: t("track.before")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "absolute top-2 right-2 text-[10px] font-bold bg-black/50 text-white px-2 py-0.5 rounded",
					children: t("track.after")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slider, {
			value: [pos],
			onValueChange: ([v]) => {
				if (typeof v === "number") setPos(v);
			},
			className: "w-full"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 77,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 52,
		columnNumber: 10
	}, this);
}
function ComplaintTrack() {
	const { t, bi, lang } = useI18n();
	const { complaints, verifyResolution, reopenComplaintOnWorkflow } = useWorkflow();
	const [query, setQuery] = (0, import_react.useState)("");
	const [searched, setSearched] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [fetchedComplaint, setFetchedComplaint] = (0, import_react.useState)(null);
	const [verified, setVerified] = (0, import_react.useState)(null);
	const [rating, setRating] = (0, import_react.useState)(5);
	const [comment, setComment] = (0, import_react.useState)("");
	const [thankYou, setThankYou] = (0, import_react.useState)(false);
	const [reopenRemarks, setReopenRemarks] = (0, import_react.useState)("");
	const [reopenLoading, setReopenLoading] = (0, import_react.useState)(false);
	const [reopenSuccess, setReopenSuccess] = (0, import_react.useState)(false);
	const localComplaint = complaints.find((c) => c.id.toLowerCase() === query.trim().toLowerCase());
	const complaint = fetchedComplaint || localComplaint;
	const category = CATEGORIES.find((c) => c.id === complaint?.categoryId);
	const department = DEPARTMENTS.find((d) => d.id === complaint?.departmentId);
	const ward = WARDS.find((w) => w.id === complaint?.wardId);
	const statusMeta = complaint ? STATUS_META[complaint.status] || STATUS_META["new"] : null;
	const doSearch = async () => {
		const q = query.trim();
		if (!q) return;
		setSearched(true);
		setLoading(true);
		try {
			const res = await fetch(`/api/complaints/${encodeURIComponent(q)}`);
			const data = await res.json();
			if (res.ok && data.ok && data.complaint) setFetchedComplaint(data.complaint);
			else setFetchedComplaint(localComplaint || null);
		} catch {
			setFetchedComplaint(localComplaint || null);
		} finally {
			setLoading(false);
		}
	};
	const handleReopen = async () => {
		if (!complaint || !reopenRemarks.trim()) return;
		setReopenLoading(true);
		try {
			if ((await reopenComplaintOnWorkflow(complaint.id, reopenRemarks)).ok) {
				setReopenSuccess(true);
				doSearch();
			}
		} finally {
			setReopenLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-4xl px-6 py-10 my-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-200 text-slate-950",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl sm:text-3xl font-black text-slate-950 mb-1 font-display",
				children: lang === "ta" ? "புகாரின் நேரடி நிலை" : "Track Complaint Status"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 200,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-slate-800 font-semibold mb-6",
				children: lang === "ta" ? "உங்கள் புகார் ஐடியை உள்ளிட்டு 8 படிநிலை முன்னேற்றம் மற்றும் நேரடி அறிக்கையை பார்க்கவும்." : "Enter your registered Complaint ID to inspect live 8-stage progress, assigned staff, and resolution evidence."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 203,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-2 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						value: query,
						onChange: (e) => {
							setQuery(e.target.value);
							setSearched(false);
							setFetchedComplaint(null);
						},
						placeholder: lang === "ta" ? "எ.கா. NK-2026-000101" : "e.g. NK-2026-000101",
						className: "pl-10 h-12 rounded-xl text-base font-bold text-slate-950 bg-white border-2 border-slate-300 placeholder:text-slate-400",
						onKeyDown: (e) => e.key === "Enter" && doSearch()
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 210,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 209,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					onClick: doSearch,
					disabled: loading,
					className: "h-12 px-6 rounded-xl font-bold bg-red-700 hover:bg-red-800 text-white border border-red-800 shadow-sm",
					children: loading ? lang === "ta" ? "தேடுகிறது..." : "Searching..." : t("common.search")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 217,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 208,
				columnNumber: 7
			}, this),
			searched && !complaint && !loading && /* @__PURE__ */ (void 0)("div", {
				className: "text-center py-12 bg-slate-50 border border-slate-200 rounded-3xl p-8",
				children: [
					/* @__PURE__ */ (void 0)(CircleX, { className: "h-12 w-12 text-slate-400 mx-auto mb-3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 223,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "font-black text-slate-950",
						children: t("common.notFound")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 224,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "text-xs text-slate-700 font-medium mt-1",
						children: lang === "ta" ? "இந்த ஐடியில் புகார் எதுவும் காணப்படவில்லை. சரியான புகார் எண்ணை சரிபார்க்கவும்." : "No complaint found for this ID. Please verify the complaint ID and try again."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 225,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 222,
				columnNumber: 46
			}, this),
			complaint && /* @__PURE__ */ (void 0)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 border-b border-slate-200 pb-4",
								children: [/* @__PURE__ */ (void 0)("div", { children: [
									/* @__PURE__ */ (void 0)("span", {
										className: "text-xs text-slate-600 uppercase font-extrabold tracking-wider",
										children: "Complaint Reference"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 235,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "text-xl font-black text-primary tracking-tight mt-0.5",
										children: complaint.id
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 236,
										columnNumber: 17
									}, this),
									complaint.citizenName && /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-slate-950 font-bold mt-1",
										children: [
											lang === "ta" ? "மனுதாரர்:" : "Citizen:",
											" ",
											complaint.citizenName,
											" ",
											complaint.citizenMobile ? `(${complaint.citizenMobile})` : ""
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 237,
										columnNumber: 43
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 234,
									columnNumber: 15
								}, this), statusMeta && /* @__PURE__ */ (void 0)(Badge, {
									className: cn("self-start px-3 py-1 text-xs font-bold shrink-0", [
										"resolved",
										"closed",
										"RESOLVED"
									].includes(complaint.status) ? "bg-emerald-100 text-emerald-800 border-0" : [
										"in_progress",
										"IN_PROGRESS",
										"accepted",
										"ACCEPTED"
									].includes(complaint.status) ? "bg-blue-100 text-blue-800 border-0" : ["rejected", "REJECTED"].includes(complaint.status) ? "bg-rose-100 text-rose-800 border-0" : "bg-amber-100 text-amber-800 border-0"),
									children: bi(statusMeta.label)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 241,
									columnNumber: 30
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 233,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "p-3 rounded-xl bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-slate-600 block font-bold mb-0.5",
											children: t("common.category")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 248,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-black text-slate-950 text-sm",
											children: category ? bi(category.name) : complaint.categoryId
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 249,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 247,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "p-3 rounded-xl bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-slate-600 block font-bold mb-0.5",
											children: t("common.department")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 252,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-black text-slate-950 text-sm",
											children: department ? bi(department.name) : complaint.departmentId
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 253,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 251,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "p-3 rounded-xl bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-slate-600 block font-bold mb-0.5",
											children: [t("common.ward"), " / Location"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 256,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-black text-slate-950 text-sm",
											children: ward ? `Ward ${ward.number} (${bi(ward.name)})` : complaint.address || "Thousand Lights"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 257,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 255,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "p-3 rounded-xl bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-slate-600 block font-bold mb-0.5",
											children: "Assigned Officer"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 260,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-black text-slate-950 text-sm",
											children: complaint.officer || "Pending Assignment"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 261,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "p-3 rounded-xl bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-slate-600 block font-bold mb-0.5",
											children: "Priority"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 264,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: cn("font-black text-sm uppercase", complaint.priority === "high" ? "text-rose-700" : "text-amber-800"),
											children: complaint.priority || "Medium"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 265,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 263,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "p-3 rounded-xl bg-slate-50 border border-slate-200",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-slate-600 block font-bold mb-0.5",
											children: [t("common.date"), " Submitted"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 270,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-black text-slate-950 text-sm",
											children: complaint.createdAt
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 271,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 269,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 246,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10",
								children: [
									/* @__PURE__ */ (void 0)("span", {
										className: "text-xs font-bold text-primary block mb-1",
										children: "Issue Description"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 276,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-foreground leading-relaxed",
										children: complaint.description
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 277,
										columnNumber: 15
									}, this),
									complaint.address && /* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] text-muted-foreground mt-2",
										children: ["📍 ", complaint.address]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 278,
										columnNumber: 37
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 275,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 232,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl border border-border bg-white p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (void 0)("h2", {
								className: "text-base font-bold text-foreground mb-1",
								children: t("track.timeline")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 284,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground mb-6",
								children: "Real-time verification audit trail across departments and field officers."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 285,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (void 0)("div", { className: "absolute left-4 top-2 bottom-4 w-0.5 bg-slate-200" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 288,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "space-y-6",
									children: (complaint.timeline && complaint.timeline.length > 0 ? complaint.timeline : [{
										stage: "submitted",
										label: {
											en: "Complaint Submitted",
											ta: "புகார் பதிவு செய்யப்பட்டது"
										},
										date: complaint.createdAt,
										time: "10:00 AM",
										done: true,
										note: {
											en: "Complaint registered in database.",
											ta: "புகார் பதிவு செய்யப்பட்டது."
										},
										performedBy: complaint.citizenName || "Citizen",
										performedByRole: "citizen"
									}]).map((entry, idx) => {
										const isDone = !!entry.done;
										return /* @__PURE__ */ (void 0)("div", {
											className: "flex gap-4 pl-10 relative",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: cn("absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors", isDone ? "border-primary bg-primary text-white shadow-sm" : "border-slate-300 bg-white text-slate-400"),
												children: /* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 309,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 308,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex-1 pb-1",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex flex-col sm:flex-row sm:items-center justify-between gap-1",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-sm font-bold text-foreground",
															children: typeof entry.label === "object" ? bi(entry.label) : entry.label || entry.stage
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 313,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[11px] text-muted-foreground font-mono",
															children: [
																entry.date,
																" ",
																entry.time ? `· ${entry.time}` : ""
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 316,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 312,
														columnNumber: 25
													}, this),
													entry.performedBy && /* @__PURE__ */ (void 0)("div", {
														className: "text-[11px] font-semibold text-primary mt-0.5",
														children: [
															"👤 ",
															entry.performedBy,
															" ",
															entry.performedByRole ? `(${entry.performedByRole.replace("_", " ").toUpperCase()})` : ""
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 320,
														columnNumber: 47
													}, this),
													entry.note && /* @__PURE__ */ (void 0)("div", {
														className: "text-xs text-slate-600 mt-1.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 leading-relaxed",
														children: typeof entry.note === "object" ? bi(entry.note) : entry.note
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 323,
														columnNumber: 40
													}, this),
													entry.remarks && /* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-slate-500 italic mt-1",
														children: ["Remark: ", entry.remarks]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 326,
														columnNumber: 43
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 311,
												columnNumber: 23
											}, this)]
										}, idx, true, {
											fileName: _jsxFileName,
											lineNumber: 307,
											columnNumber: 22
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 289,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 287,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 283,
						columnNumber: 11
					}, this),
					(complaint.beforeImage || complaint.afterImage) && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4",
						children: [/* @__PURE__ */ (void 0)("h2", {
							className: "text-base font-bold text-foreground",
							children: t("track.beforeAfter")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 336,
							columnNumber: 15
						}, this), complaint.beforeImage && complaint.afterImage ? /* @__PURE__ */ (void 0)(BeforeAfterSlider, {
							before: complaint.beforeImage,
							after: complaint.afterImage
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 337,
							columnNumber: 64
						}, this) : /* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [complaint.beforeImage && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-xs font-bold text-muted-foreground mb-1 block",
								children: "Initial Evidence Photo"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 339,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("img", {
								src: complaint.beforeImage,
								alt: "Initial",
								className: "w-full h-48 object-cover rounded-xl border"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 340,
								columnNumber: 23
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 338,
								columnNumber: 45
							}, this), complaint.afterImage && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-xs font-bold text-emerald-700 mb-1 block",
								children: "Completion Resolution Photo"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 343,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("img", {
								src: complaint.afterImage,
								alt: "Completed",
								className: "w-full h-48 object-cover rounded-xl border border-emerald-200"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 344,
								columnNumber: 23
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 342,
								columnNumber: 44
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 337,
							columnNumber: 148
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 335,
						columnNumber: 63
					}, this),
					[
						"resolved",
						"closed",
						"completed",
						"RESOLVED",
						"COMPLETED"
					].includes(complaint.status) && !reopenSuccess && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl border border-amber-200 bg-amber-50/60 p-6 space-y-3",
						children: [
							/* @__PURE__ */ (void 0)("h3", {
								className: "text-sm font-bold text-foreground",
								children: lang === "ta" ? "பிரச்சினை சரியாக தீர்க்கப்படவில்லையா?" : "Issue not resolved satisfactorily?"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 351,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground leading-relaxed",
								children: lang === "ta" ? "புகாரை மீண்டும் திறந்து கூடுதல் களப்பணி கோரலாம். உங்கள் குறிப்புகளை கீழே பதிவு செய்யவும்." : "You can reopen this complaint if the issue persists on site. Our command center will re-inspect immediately."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 354,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(Textarea, {
								value: reopenRemarks,
								onChange: (e) => setReopenRemarks(e.target.value),
								placeholder: lang === "ta" ? "மறுபணி தேவைக்கான காரணத்தை விவரிக்கவும்..." : "Please describe what is still pending...",
								rows: 3,
								className: "bg-white text-xs rounded-xl"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 357,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(Button, {
								onClick: handleReopen,
								disabled: reopenLoading || !reopenRemarks.trim(),
								variant: "destructive",
								className: "rounded-xl text-xs font-bold",
								children: reopenLoading ? "Reopening..." : lang === "ta" ? "புகாரை மீண்டும் திறக்க" : "Reopen Complaint"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 358,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 350,
						columnNumber: 121
					}, this),
					reopenSuccess && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl bg-blue-50 border border-blue-200 p-5 text-center",
						children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-8 w-8 text-blue-600 mx-auto mb-2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 364,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "font-bold text-blue-800 text-sm",
							children: lang === "ta" ? "புகார் மீண்டும் திறக்கப்பட்டது. அதிகாரிகள் விரைவில் ஆய்வு செய்வார்கள்." : "Complaint reopened successfully. Command center alerted."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 365,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 363,
						columnNumber: 29
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 230,
				columnNumber: 21
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 199,
		columnNumber: 10
	}, this);
}
//#endregion
export { ComplaintTrack as component };
