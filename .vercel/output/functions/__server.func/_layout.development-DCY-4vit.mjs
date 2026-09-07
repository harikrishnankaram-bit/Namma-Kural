import { o as __toESM } from "./_runtime.mjs";
import { c as WARDS, i as DEPARTMENTS, l as MOCK_PROJECTS } from "./_ssr/ssr.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { F as MapPin, at as Clock, bt as Building2, lt as CircleCheck, u as TriangleAlert, vt as Calendar } from "./_libs/lucide-react.mjs";
import { _ as cn, h as Badge, l as Button, m as useWorkflow, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
import { t as Progress } from "./_ssr/progress-CDAM6lov.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.development-DCY-4vit.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.development.tsx?tsr-split=component";
var STATUS_CONFIG = {
	planned: {
		label: {
			en: "Planned",
			ta: "திட்டமிடப்பட்டது"
		},
		cls: "bg-muted text-muted-foreground",
		icon: Calendar
	},
	in_progress: {
		label: {
			en: "In Progress",
			ta: "நடைபெறுகிறது"
		},
		cls: "bg-blue-100 text-blue-700",
		icon: Clock
	},
	completed: {
		label: {
			en: "Completed",
			ta: "முடிந்தது"
		},
		cls: "bg-green-100 text-green-700",
		icon: CircleCheck
	},
	delayed: {
		label: {
			en: "Delayed",
			ta: "தாமதம்"
		},
		cls: "bg-red-100 text-red-700",
		icon: TriangleAlert
	}
};
function ProjectCard({ project, onClick }) {
	const { bi } = useI18n();
	const cfg = STATUS_CONFIG[project.status];
	const StatusIcon = cfg.icon;
	const dept = DEPARTMENTS.find((d) => d.id === project.departmentId);
	const ward = WARDS.find((w) => w.id === project.wardId);
	const img = project.images.completed ?? project.images.progress ?? project.images.before;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		onClick,
		className: "w-full text-left rounded-2xl border border-slate-200 bg-white shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition-all overflow-hidden group cursor-pointer",
		children: [img && /* @__PURE__ */ (void 0)("div", {
			className: "h-44 overflow-hidden",
			children: /* @__PURE__ */ (void 0)("img", {
				src: img,
				alt: "",
				className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 61,
			columnNumber: 15
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start justify-between gap-3 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-black text-slate-950 text-sm leading-snug",
						children: bi(project.name)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
						className: cn("shrink-0 text-xs font-bold border-0 gap-1", cfg.cls),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusIcon, { className: "h-3 w-3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 13
						}, this), bi(cfg.label)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1.5 text-xs text-slate-700 font-semibold mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3.5 w-3.5 text-primary shrink-0" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 54
							}, this), project.location]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-3.5 w-3.5 text-indigo-600 shrink-0" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 54
							}, this), dept ? bi(dept.name) : project.departmentId]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 11
						}, this),
						ward && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (void 0)("span", {
									className: "font-black text-slate-950",
									children: [
										"Ward ",
										ward.number,
										":"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 79,
									columnNumber: 63
								}, this),
								" ",
								bi(ward.name)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 20
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 9
				}, this),
				project.status !== "planned" && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex justify-between text-xs mb-1",
					children: [/* @__PURE__ */ (void 0)("span", {
						className: "text-slate-700 font-bold",
						children: "Progress"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("span", {
						className: "font-black text-slate-950",
						children: [project.progress, "%"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)(Progress, {
					value: project.progress,
					className: "h-2"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 42
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex justify-between text-xs text-slate-600 font-medium mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Start: ", project.start] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["End: ", project.end] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 9
				}, this),
				project.budget && /* @__PURE__ */ (void 0)("div", {
					className: "mt-2 text-xs font-extrabold text-primary",
					children: project.budget
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 28
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 64,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 60,
		columnNumber: 10
	}, this);
}
function ProjectDetail({ project, onClose }) {
	const { t, bi } = useI18n();
	const cfg = STATUS_CONFIG[project.status];
	const StatusIcon = cfg.icon;
	const dept = DEPARTMENTS.find((d) => d.id === project.departmentId);
	const ward = WARDS.find((w) => w.id === project.wardId);
	const imgs = [
		project.images.before && {
			label: t("track.before"),
			src: project.images.before
		},
		project.images.progress && {
			label: t("projects.progress"),
			src: project.images.progress
		},
		project.images.completed && {
			label: bi({
				en: "Completed",
				ta: "முடிந்தது"
			}),
			src: project.images.completed
		}
	].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-lift max-h-[90vh] overflow-y-auto text-slate-900",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "sticky top-0 bg-white border-b border-slate-200 px-5 py-4 flex items-center justify-between z-10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-black text-slate-950",
					children: bi(project.name)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: onClose,
					className: "font-bold text-slate-700",
					children: t("common.close")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 131,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-5 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							className: cn("text-xs font-bold border-0 gap-1", cfg.cls),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusIcon, { className: "h-3 w-3" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 15
							}, this), bi(cfg.label)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 13
						}, this), project.budget && /* @__PURE__ */ (void 0)(Badge, {
							variant: "secondary",
							className: "font-bold text-xs",
							children: project.budget
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 32
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-600 font-medium",
								children: "Department: "
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 18
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-bold text-slate-950",
								children: dept ? bi(dept.name) : "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 82
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-600 font-medium",
								children: "Ward: "
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 18
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-bold text-slate-950",
								children: ward ? bi(ward.name) : "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 76
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-600 font-medium",
								children: [t("projects.start"), ": "]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 18
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-bold text-slate-950",
								children: project.start
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 93
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-slate-600 font-medium",
								children: [t("projects.end"), ": "]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 18
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-bold text-slate-950",
								children: project.end
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 91
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-slate-600 font-medium",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "inline h-3.5 w-3.5 mr-1 text-primary" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 86
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 41
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-bold text-slate-950",
									children: project.location
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 152
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 147,
						columnNumber: 11
					}, this),
					project.status !== "planned" && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex justify-between text-sm mb-2",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "font-bold text-slate-900",
							children: t("projects.progress")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 157,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "font-black text-primary",
							children: [project.progress, "%"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 158,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 156,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)(Progress, {
						value: project.progress,
						className: "h-3 rounded-full"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 160,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 155,
						columnNumber: 44
					}, this),
					imgs.length > 0 && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
						className: "font-black text-slate-950 text-sm mb-3",
						children: "Photo Timeline"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
						children: imgs.map(({ label, src }) => /* @__PURE__ */ (void 0)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (void 0)("img", {
								src,
								alt: label,
								className: "w-full h-28 object-cover rounded-xl border border-slate-200"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 171,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-center text-xs text-slate-700 font-bold",
								children: label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 172,
								columnNumber: 21
							}, this)]
						}, label, true, {
							fileName: _jsxFileName,
							lineNumber: 170,
							columnNumber: 19
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 166,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 164,
						columnNumber: 31
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 136,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 130,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 129,
		columnNumber: 10
	}, this);
}
var FILTER_STATUSES = [
	"all",
	"planned",
	"in_progress",
	"completed",
	"delayed"
];
function DevelopmentPage() {
	const { t, bi } = useI18n();
	const { fetchDevelopmentWorks } = useWorkflow();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [dbWorks, setDbWorks] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetchDevelopmentWorks().then((works) => {
			if (Array.isArray(works) && works.length > 0) setDbWorks(works);
		}).catch(() => {});
	}, [fetchDevelopmentWorks]);
	const allProjects = [...dbWorks.map((w) => ({
		id: w.workId,
		name: w.name || w.title || {
			en: "Constituency Infrastructure Project",
			ta: "தொகுதி உள்கட்டமைப்பு திட்டம்"
		},
		departmentId: w.department || "works",
		wardId: "w-01",
		status: w.status?.toLowerCase() === "in_progress" ? "in_progress" : w.status?.toLowerCase() === "completed" ? "completed" : "planned",
		progress: w.progressPercent ?? w.progressPercentage ?? 0,
		start: w.startDate || "2026-01-01",
		end: w.expectedCompletion || w.expectedCompletionDate || "2026-12-31",
		location: w.location || "Tiruchengode",
		budget: w.budget ? `₹${typeof w.budget === "number" ? w.budget.toLocaleString() : w.budget}` : "₹50,00,000",
		images: {
			before: w.photos?.[0] || w.images?.[0] || "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=60",
			progress: w.photos?.[1] || w.images?.[1] || "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=60",
			completed: w.photos?.[2] || w.images?.[2] || "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=60"
		}
	})), ...MOCK_PROJECTS];
	const projects = filter === "all" ? allProjects : allProjects.filter((p) => p.status === filter);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-6xl px-6 py-10 my-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-200 text-slate-950",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl sm:text-3xl font-black text-slate-950 mb-1 font-display",
					children: t("projects.title")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 225,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-slate-800 font-semibold",
					children: "Live tracking of constituency public infrastructure projects and development works."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 226,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 224,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8",
				children: [
					{
						status: "all",
						label: bi({
							en: "Total Projects",
							ta: "மொத்த திட்டங்கள்"
						}),
						count: allProjects.length,
						cls: "bg-slate-100 border-slate-300"
					},
					{
						status: "in_progress",
						label: bi({
							en: "In Progress",
							ta: "நடைபெறுகிறது"
						}),
						count: allProjects.filter((p) => p.status === "in_progress").length,
						cls: "bg-blue-50 border-blue-200"
					},
					{
						status: "completed",
						label: bi({
							en: "Completed",
							ta: "முடிந்தது"
						}),
						count: allProjects.filter((p) => p.status === "completed").length,
						cls: "bg-green-50 border-green-200"
					},
					{
						status: "delayed",
						label: bi({
							en: "Delayed",
							ta: "தாமதம்"
						}),
						count: allProjects.filter((p) => p.status === "delayed").length,
						cls: "bg-red-50 border-red-200"
					}
				].map(({ status, label, count, cls }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => setFilter(status),
					className: cn("rounded-2xl p-4 text-left border-2 transition-all cursor-pointer", cls, filter === status ? "border-primary shadow-sm" : "hover:border-primary/40"),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-2xl font-black text-slate-950",
						children: count
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 269,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs text-slate-800 font-bold mt-0.5",
						children: label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 270,
						columnNumber: 13
					}, this)]
				}, status, true, {
					fileName: _jsxFileName,
					lineNumber: 268,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 230,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-2 flex-wrap mb-6",
				children: FILTER_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: filter === s ? "default" : "outline",
					size: "sm",
					onClick: () => setFilter(s),
					className: `text-xs font-bold ${filter === s ? "bg-primary text-white" : "text-slate-900 border-slate-300 bg-white hover:bg-slate-100"}`,
					children: s === "all" ? t("common.all") : bi(STATUS_CONFIG[s].label)
				}, s, false, {
					fileName: _jsxFileName,
					lineNumber: 276,
					columnNumber: 35
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 275,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectCard, {
					project: p,
					onClick: () => setSelected(p)
				}, p.id, false, {
					fileName: _jsxFileName,
					lineNumber: 285,
					columnNumber: 28
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 284,
				columnNumber: 7
			}, this),
			selected && /* @__PURE__ */ (void 0)(ProjectDetail, {
				project: selected,
				onClose: () => setSelected(null)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 288,
				columnNumber: 20
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 223,
		columnNumber: 10
	}, this);
}
//#endregion
export { DevelopmentPage as component };
