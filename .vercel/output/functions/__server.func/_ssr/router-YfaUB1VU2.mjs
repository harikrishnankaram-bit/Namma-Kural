import { o as __toESM } from "../_runtime.mjs";
import { c as WARDS, i as DEPARTMENTS, o as ROLE_META, p as maskMobile, s as STATUS_META, t as CATEGORIES } from "./ssr.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileCheck, C as Play, D as Navigation, F as MapPin, H as Layers, I as Mail, L as LogOut, Q as FileText, S as Plus, St as Bell, Tt as Activity, U as KeyRound, X as FolderOpen, Z as Flame, _ as Send, at as Clock, b as RotateCcw, bt as Building2, c as UserX, et as Eye, ft as ChevronRight, g as ShieldCheck, h as Sparkles, ht as Check, j as MessageSquare, l as UserCheck, lt as CircleCheck, m as Star, n as X, o as Users, p as Trash2, q as History, r as Workflow, ut as CircleAlert, v as Search, vt as Calendar, w as Phone, x as RefreshCw, xt as Briefcase } from "../_libs/lucide-react.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DGON80NW.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-YuB87Z4_.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as CardContent, c as Input, f as WorkflowProvider, g as I18nProvider, h as Badge, i as Card, l as Button, m as useWorkflow, n as Label, o as CardHeader, p as useAuth, r as Textarea, s as CardTitle, u as AuthProvider, v as useI18n } from "./router-YfaUB1VU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-YfaUB1VU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-BUmTGy0l.css";
var _jsxFileName$5 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 27,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 26,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 47,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 50,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 63,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 53,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 46,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
var Route$30 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "NAMMA KURAL — Citizen-first Digital Governance" },
			{
				name: "description",
				content: "NAMMA KURAL is the citizen-first digital governance platform for the Legislative Constituency. Report issues, track complaints, access government schemes and meet your MLA."
			},
			{
				name: "author",
				content: "NAMMA KURAL"
			},
			{
				property: "og:title",
				content: "NAMMA KURAL — Citizen-first Digital Governance"
			},
			{
				property: "og:description",
				content: "Report issues, track complaints, access schemes and meet your MLA."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/logo.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/logo.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Fraunces:wght@600;700&family=Noto+Sans+Tamil:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 119,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 118,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 123,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 121,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 117,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$30.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkflowProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 137,
			columnNumber: 13
		}, this) }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 136,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 135,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 134,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 133,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$24 = () => import("../_layout-DQ9amlVG.mjs");
var Route$29 = createFileRoute("/_layout")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("../_layout.index-BBtzrLZq.mjs");
var Route$28 = createFileRoute("/_layout/")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("../_layout.appointments-C_TKC_-k.mjs");
var Route$27 = createFileRoute("/_layout/appointments")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("../_layout.dashboard-BCXTon_p.mjs");
var Route$26 = createFileRoute("/_layout/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("../_layout.development-DCY-4vit.mjs");
var Route$25 = createFileRoute("/_layout/development")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("../_layout.login-BPkf9CAH.mjs");
var Route$24 = createFileRoute("/_layout/login")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("../_layout.notifications-CYoHwDxn.mjs");
var Route$23 = createFileRoute("/_layout/notifications")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("../_layout.schemes-D2NRechr.mjs");
var Route$22 = createFileRoute("/_layout/schemes")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("../_layout.transparency-Bye-qT_z.mjs");
var Route$21 = createFileRoute("/_layout/transparency")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./api.appointments-2zu1gp2O.mjs");
var Route$20 = createFileRoute("/api/appointments")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./api.complaints-Bxh-cK6Z.mjs");
var Route$19 = createFileRoute("/api/complaints")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./api.db-test-Cl5fFBI0.mjs");
var Route$18 = createFileRoute("/api/db-test")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./api.notifications-Dkn4vYqt.mjs");
var Route$17 = createFileRoute("/api/notifications")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./api.stats-DA4650hW.mjs");
var Route$16 = createFileRoute("/api/stats")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("../_layout.complaints.register--g406OFl.mjs");
var Route$15 = createFileRoute("/_layout/complaints/register")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("../_layout.complaints.track-RDhWVyZf.mjs");
var Route$14 = createFileRoute("/_layout/complaints/track")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("../_layout.console.constituency-BQ_sHVc9.mjs");
var Route$13 = createFileRoute("/_layout/console/constituency")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("../_layout.console.content--ZRhNk5n.mjs");
var Route$12 = createFileRoute("/_layout/console/content")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("../_layout.console.department-CdEp-6BB.mjs");
var Route$11 = createFileRoute("/_layout/console/department")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("../_layout.console.officer-CoOMDDYg.mjs");
var Route$10 = createFileRoute("/_layout/console/officer")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("../_layout.console.super-DzLosiEO.mjs");
var Route$9 = createFileRoute("/_layout/console/super")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var _jsxFileName$4 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.dashboard.citizen.tsx";
var Route$8 = createFileRoute("/_layout/dashboard/citizen")({ component: CitizenDashboardPage });
var STATUS_BADGES = {
	new: {
		bg: "bg-blue-100",
		text: "text-blue-800"
	},
	pending_verification: {
		bg: "bg-amber-100",
		text: "text-amber-800"
	},
	verified: {
		bg: "bg-sky-100",
		text: "text-sky-800"
	},
	assigned: {
		bg: "bg-indigo-100",
		text: "text-indigo-800"
	},
	in_progress: {
		bg: "bg-amber-100",
		text: "text-amber-800"
	},
	completed: {
		bg: "bg-emerald-100",
		text: "text-emerald-800"
	},
	citizen_verification: {
		bg: "bg-violet-100",
		text: "text-violet-800"
	},
	closed: {
		bg: "bg-slate-100",
		text: "text-slate-700"
	},
	reopened: {
		bg: "bg-rose-100",
		text: "text-rose-800"
	}
};
var TIMELINE_STAGE_META = {
	submitted: {
		label: {
			en: "Submitted",
			ta: "சமர்ப்பிக்கப்பட்டது"
		},
		tone: "from-blue-500 to-blue-600",
		icon: FileText,
		color: "bg-blue-500"
	},
	verified: {
		label: {
			en: "Admin Review",
			ta: "நிர்வாகி ஆய்வு"
		},
		tone: "from-sky-500 to-sky-600",
		icon: ShieldCheck,
		color: "bg-sky-500"
	},
	assigned: {
		label: {
			en: "Department Assigned",
			ta: "துறை ஒதுக்கீடு"
		},
		tone: "from-indigo-500 to-indigo-600",
		icon: Building2,
		color: "bg-indigo-500"
	},
	officer: {
		label: {
			en: "Officer Assigned",
			ta: "அலுவலர் நியமனம்"
		},
		tone: "from-violet-500 to-violet-600",
		icon: UserCheck,
		color: "bg-violet-500"
	},
	started: {
		label: {
			en: "Work Started",
			ta: "பணி தொடக்கம்"
		},
		tone: "from-orange-500 to-orange-600",
		icon: Activity,
		color: "bg-orange-500"
	},
	progress: {
		label: {
			en: "Work In Progress",
			ta: "பணி நடைபெறுகிறது"
		},
		tone: "from-amber-500 to-amber-600",
		icon: Workflow,
		color: "bg-amber-500"
	},
	completed: {
		label: {
			en: "Resolution Submitted",
			ta: "தீர்வு சமர்ப்பணம்"
		},
		tone: "from-teal-500 to-teal-600",
		icon: FileCheck,
		color: "bg-teal-500"
	},
	closed: {
		label: {
			en: "Complaint Resolved",
			ta: "புகார் தீர்வு"
		},
		tone: "from-emerald-500 to-emerald-600",
		icon: CircleCheck,
		color: "bg-emerald-500"
	},
	reopened: {
		label: {
			en: "Reopened",
			ta: "மீண்டும் திறக்கப்பட்டது"
		},
		tone: "from-rose-500 to-rose-600",
		icon: RefreshCw,
		color: "bg-rose-500"
	},
	citizen_verify: {
		label: {
			en: "Citizen Verification",
			ta: "குடிமகன் உறுதிப்படுத்தல்"
		},
		tone: "from-violet-500 to-purple-600",
		icon: UserCheck,
		color: "bg-violet-500"
	}
};
var EXPECTED_STAGE_ORDER = [
	"submitted",
	"verified",
	"assigned",
	"officer",
	"started",
	"progress",
	"completed",
	"closed"
];
function ComplaintTimeline({ timeline, lang }) {
	new Set(timeline.map((t) => t.stage));
	const orderedStages = [];
	let firstMissing = true;
	EXPECTED_STAGE_ORDER.forEach((s) => {
		const entriesForStage = timeline.filter((t) => t.stage === s);
		if (entriesForStage.length > 0) {
			entriesForStage.forEach((entry, i) => {
				orderedStages.push({
					stage: s,
					entry,
					status: "done"
				});
			});
			firstMissing = false;
		} else if (firstMissing) {
			orderedStages.push({
				stage: s,
				status: "current"
			});
			firstMissing = false;
		} else orderedStages.push({
			stage: s,
			status: "pending"
		});
	});
	timeline.filter((t) => t.stage === "citizen_verify").forEach((entry) => {
		orderedStages.push({
			stage: "citizen_verify",
			entry,
			status: "done"
		});
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-1",
		children: orderedStages.map((item, idx) => {
			const meta = TIMELINE_STAGE_META[item.stage];
			const IconComp = meta?.icon || FileText;
			const isLast = idx === orderedStages.length - 1;
			const isDone = item.status === "done";
			const isCurrent = item.status === "current";
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex gap-3 min-h-[72px]",
				children: [
					!isLast && /* @__PURE__ */ (void 0)("div", { className: `absolute left-[19px] top-[38px] w-0.5 h-[calc(100%-32px)] ${isDone ? "bg-emerald-300" : isCurrent ? "bg-primary/30" : "bg-slate-200"}` }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 144,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: `relative z-10 h-9 w-9 rounded-full flex items-center justify-center shrink-0 ring-4 ${isDone ? `bg-gradient-to-br ${meta?.tone || "from-primary to-primary/80"} ring-emerald-200 text-white` : isCurrent ? "bg-white ring-primary/40 border-2 border-primary text-primary" : "bg-white ring-slate-100 text-slate-400 border border-slate-200"}`,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComp, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 159,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 150,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex-1 min-w-0 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start justify-between gap-2 pt-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: `text-sm font-bold ${isDone ? "text-foreground" : isCurrent ? "text-primary" : "text-slate-400"}`,
								children: meta ? lang === "ta" ? meta.label.ta : meta.label.en : item.stage
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 163,
								columnNumber: 17
							}, this), item.entry && /* @__PURE__ */ (void 0)("span", {
								className: "text-[10px] text-muted-foreground shrink-0 font-medium",
								children: [
									item.entry.date,
									" • ",
									item.entry.time
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 171,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 162,
							columnNumber: 15
						}, this), item.entry ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1 mt-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground leading-relaxed",
								children: item.entry.note?.[lang] || item.entry.note?.en || ""
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 178,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap gap-x-3 gap-y-1 text-[11px]",
								children: [
									item.entry.department && /* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1 text-muted-foreground",
										children: [/* @__PURE__ */ (void 0)(Building2, { className: "h-3 w-3" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 184,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-semibold text-slate-700",
											children: DEPARTMENTS.find((d) => d.id === item.entry.department) ? lang === "ta" ? DEPARTMENTS.find((d) => d.id === item.entry.department).name.ta : DEPARTMENTS.find((d) => d.id === item.entry.department).name.en : item.entry.department
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 185,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 183,
										columnNumber: 23
									}, this),
									item.entry.officer && /* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1 text-muted-foreground",
										children: [/* @__PURE__ */ (void 0)(UserCheck, { className: "h-3 w-3" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 196,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-semibold text-slate-700",
											children: item.entry.officer
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 197,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 195,
										columnNumber: 23
									}, this),
									item.entry.remarks && /* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-start gap-1 text-muted-foreground max-w-full",
										children: [/* @__PURE__ */ (void 0)(MessageSquare, { className: "h-3 w-3 mt-0.5 shrink-0" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 202,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-medium",
											children: item.entry.remarks
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 203,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 201,
										columnNumber: 23
									}, this),
									item.entry.resolutionInfo && /* @__PURE__ */ (void 0)("div", {
										className: "w-full rounded-lg bg-emerald-50 border border-emerald-200 p-2 mt-1 text-emerald-800",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "text-[10px] font-bold uppercase tracking-wide text-emerald-700 mb-0.5",
											children: lang === "ta" ? "தீர்வு விவரம்" : "Resolution Details"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 208,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-xs font-medium leading-relaxed",
											children: item.entry.resolutionInfo
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 211,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 207,
										columnNumber: 23
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 181,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 177,
							columnNumber: 17
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] text-slate-400 mt-0.5 italic",
							children: lang === "ta" ? "இந்த நிலை வரை எதிர்பார்க்கப்படுகிறது..." : "Pending — awaiting this step..."
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 217,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 161,
						columnNumber: 13
					}, this)
				]
			}, `${item.stage}-${idx}`, true, {
				fileName: _jsxFileName$4,
				lineNumber: 142,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 134,
		columnNumber: 5
	}, this);
}
function CitizenDashboardPage() {
	const { bi, lang } = useI18n();
	const { user } = useAuth();
	const navigate = useNavigate();
	const { complaints, citizens, citizenSession, notifications, verifyResolution, markNotificationRead, citizenLogout, getComplaintsByCitizenId, getComplaintsByMobile } = useWorkflow();
	const [activeTab, setActiveTab] = (0, import_react.useState)("complaints");
	const [selectedComplaint, setSelectedComplaint] = (0, import_react.useState)(null);
	const [verificationFeedback, setVerificationFeedback] = (0, import_react.useState)("");
	const [rating, setRating] = (0, import_react.useState)(5);
	const [showReopenForm, setShowReopenForm] = (0, import_react.useState)(false);
	const [reopenReason, setReopenReason] = (0, import_react.useState)("");
	const [actionDoneMsg, setActionDoneMsg] = (0, import_react.useState)("");
	const [searchText, setSearchText] = (0, import_react.useState)("");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("all");
	const [citizenAppts, setCitizenAppts] = (0, import_react.useState)([]);
	const [loadingAppts, setLoadingAppts] = (0, import_react.useState)(false);
	const effectiveCitizen = citizenSession ? {
		citizenId: citizenSession.citizenId,
		mobile: citizenSession.mobileNumber,
		fullName: citizenSession.fullName,
		wardId: citizenSession.wardId
	} : user ? {
		citizenId: "demo-citizen-01",
		mobile: user.mobile,
		fullName: user.name,
		wardId: user.wardId
	} : null;
	const fetchCitizenAppts = (0, import_react.useCallback)(async () => {
		if (!effectiveCitizen?.mobile) return;
		try {
			setLoadingAppts(true);
			const res = await fetch(`/api/appointments?mobile=${effectiveCitizen.mobile.replace(/\D/g, "")}`);
			const data = await res.json();
			if (res.ok && data.ok && Array.isArray(data.appointments)) setCitizenAppts(data.appointments);
		} catch {} finally {
			setLoadingAppts(false);
		}
	}, [effectiveCitizen?.mobile]);
	(0, import_react.useEffect)(() => {
		if (!effectiveCitizen) navigate({ to: "/login" });
		else fetchCitizenAppts();
	}, [
		effectiveCitizen,
		navigate,
		fetchCitizenAppts
	]);
	const handleCancelCitizenAppt = async (apptId) => {
		if (!confirm(lang === "ta" ? "இந்த சந்திப்பை ரத்து செய்ய விரும்புகிறீர்களா?" : "Are you sure you want to cancel this appointment?")) return;
		try {
			if ((await fetch(`/api/appointments/${apptId}`, { method: "DELETE" })).ok) fetchCitizenAppts();
		} catch {}
	};
	if (!effectiveCitizen) return null;
	const myComplaints = citizenSession ? getComplaintsByCitizenId(citizenSession.citizenId) : getComplaintsByMobile(effectiveCitizen.mobile);
	const filteredComplaints = myComplaints.filter((c) => {
		if (filterStatus !== "all" && c.status !== filterStatus) return false;
		if (searchText.trim()) {
			const q = searchText.toLowerCase();
			return c.id.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.address.toLowerCase().includes(q);
		}
		return true;
	});
	const total = myComplaints.length;
	const newlyRegistered = myComplaints.filter((c) => c.status === "new" || c.status === "pending_verification").length;
	const assigned = myComplaints.filter((c) => c.status === "assigned" || c.status === "verified").length;
	const inProgress = myComplaints.filter((c) => c.status === "in_progress").length;
	const resolved = myComplaints.filter((c) => c.status === "citizen_verification" || c.status === "completed").length;
	const closed = myComplaints.filter((c) => c.status === "closed").length;
	const awaitingVerification = myComplaints.filter((c) => c.status === "citizen_verification");
	const displayMobile = maskMobile(effectiveCitizen.mobile);
	const displayName = effectiveCitizen.fullName || (lang === "ta" ? "அரசு குடிமகன்" : "Citizen");
	const initial = displayName.charAt(0).toUpperCase();
	const ward = effectiveCitizen.wardId ? WARDS.find((w) => w.id === effectiveCitizen.wardId) : null;
	const handleVerifyYes = () => {
		if (!selectedComplaint) return;
		verifyResolution(selectedComplaint.id, true, rating, verificationFeedback);
		setActionDoneMsg(lang === "ta" ? "தீர்வு உறுதிப்படுத்தப்பட்டு புகார் மூடப்பட்டது!" : "Resolution verified! Complaint closed successfully.");
		setTimeout(() => {
			setSelectedComplaint(null);
			setActionDoneMsg("");
		}, 1800);
	};
	const handleVerifyNo = () => {
		if (!selectedComplaint) return;
		verifyResolution(selectedComplaint.id, false, 0, reopenReason);
		setActionDoneMsg(lang === "ta" ? "புகார் மீண்டும் திறக்கப்பட்டு துறைக்கு அனுப்பப்பட்டது." : "Complaint reopened and sent back to the department.");
		setTimeout(() => {
			setSelectedComplaint(null);
			setShowReopenForm(false);
			setActionDoneMsg("");
		}, 1800);
	};
	const handleLogout = () => {
		citizenLogout();
		navigate({ to: "/" });
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-6xl px-4 py-6 sm:py-10 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-3xl border border-border bg-white shadow-soft p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-primary/10 to-teal-400/10 rounded-full -translate-y-24 translate-x-24 pointer-events-none" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 387,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-4 relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-teal-500 text-white text-2xl font-bold font-display shadow-md ring-4 ring-white",
							children: initial
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 389,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 flex-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
									className: "text-xl sm:text-2xl font-black text-slate-950 font-display tracking-tight",
									children: displayName
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 394,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
									className: "bg-primary/10 text-primary border-0 text-xs font-bold",
									children: lang === "ta" ? "குடிமகன்" : "Citizen"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 397,
									columnNumber: 15
								}, this),
								citizenSession && /* @__PURE__ */ (void 0)(Badge, {
									variant: "outline",
									className: "bg-emerald-50 text-emerald-800 border-emerald-300 text-[10px] font-extrabold gap-1",
									children: [/* @__PURE__ */ (void 0)(ShieldCheck, { className: "h-3 w-3" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 402,
										columnNumber: 19
									}, this), lang === "ta" ? "OTP சரிபார்ப்பு" : "OTP Verified"]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 401,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 393,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-4 text-xs text-slate-800 font-semibold mt-1.5 flex-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 409,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-bold tracking-wide",
										children: ["+91 ", displayMobile]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 410,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 408,
									columnNumber: 15
								}, this),
								ward && /* @__PURE__ */ (void 0)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (void 0)(MapPin, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 414,
										columnNumber: 19
									}, this), lang === "ta" ? ward.name.ta : ward.name.en]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 413,
									columnNumber: 17
								}, this),
								citizens.find((c) => c.citizenId === effectiveCitizen.citizenId)?.email && /* @__PURE__ */ (void 0)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (void 0)(Mail, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 420,
										columnNumber: 19
									}, this), citizens.find((c) => c.citizenId === effectiveCitizen.citizenId).email]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 419,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 407,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 392,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 388,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2.5 w-full md:w-auto relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							className: "h-11 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold gap-2 flex-1 md:flex-initial shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/complaints/register",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 431,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "புதிய புகார்" : "Report Complaint" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 432,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 430,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 429,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							onClick: handleLogout,
							className: "h-11 rounded-xl font-bold gap-1.5 flex-1 md:flex-initial text-slate-900 border-slate-300 bg-white hover:bg-slate-100",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 440,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "வெளியேறு" : "Logout" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 441,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 435,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 428,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 386,
				columnNumber: 7
			}, this),
			awaitingVerification.length > 0 && /* @__PURE__ */ (void 0)("div", {
				className: "rounded-2xl bg-amber-50 border-2 border-amber-300 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 shrink-0",
						children: /* @__PURE__ */ (void 0)(CircleAlert, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 450,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 449,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
						className: "text-sm font-black text-amber-950",
						children: lang === "ta" ? "உங்கள் உறுதிப்படுத்தல் தேவை!" : "Action Required: Verify Resolution"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 453,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("p", {
						className: "text-xs text-amber-900 font-bold mt-0.5",
						children: [
							awaitingVerification.length,
							" ",
							lang === "ta" ? "புகார்(கள்) கள அலுவலரால் முடிக்கப்பட்டுள்ளது. பிரச்சினை தீர்க்கப்பட்டதா என உறுதிப்படுத்தவும்." : "complaint(s) marked complete. Please confirm if resolved."
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 456,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 452,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 448,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)(Button, {
					size: "sm",
					onClick: () => setSelectedComplaint(awaitingVerification[0] || null),
					className: "bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 rounded-xl",
					children: lang === "ta" ? "இப்போது சரிபார்க்கவும் →" : "Verify Now →"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 464,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 447,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] font-bold text-slate-600 uppercase tracking-wide",
								children: lang === "ta" ? "மொத்தம்" : "Total"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 476,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-display",
								children: total
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 477,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-slate-200/40 group-hover:bg-slate-200 transition-colors flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FolderOpen, { className: "h-5 w-5 text-slate-500" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 479,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 478,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 475,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] font-bold text-blue-700 uppercase tracking-wide",
								children: lang === "ta" ? "புதிதாக பதிவு" : "New Registered"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 483,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-2xl sm:text-3xl font-black text-blue-900 mt-1 font-display",
								children: newlyRegistered
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 484,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-blue-200/40 group-hover:bg-blue-200 transition-colors flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-5 w-5 text-blue-600" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 486,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 485,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 482,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] font-bold text-indigo-700 uppercase tracking-wide",
								children: lang === "ta" ? "ஒதுக்கப்பட்டது" : "Assigned"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 490,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-2xl sm:text-3xl font-black text-indigo-900 mt-1 font-display",
								children: assigned
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 491,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-indigo-200/40 group-hover:bg-indigo-200 transition-colors flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-5 w-5 text-indigo-600" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 493,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 492,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 489,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-200 p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] font-bold text-amber-700 uppercase tracking-wide",
								children: lang === "ta" ? "செயல்பாட்டில்" : "In Progress"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 497,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-2xl sm:text-3xl font-black text-amber-900 mt-1 font-display",
								children: inProgress
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 498,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-amber-200/40 group-hover:bg-amber-200 transition-colors flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Activity, { className: "h-5 w-5 text-amber-600" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 500,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 499,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 496,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-200 p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] font-bold text-teal-700 uppercase tracking-wide",
								children: lang === "ta" ? "தீர்க்கப்பட்டது" : "Resolved"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 504,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-2xl sm:text-3xl font-black text-teal-900 mt-1 font-display",
								children: resolved
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 505,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-teal-200/40 group-hover:bg-teal-200 transition-colors flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileCheck, { className: "h-5 w-5 text-teal-600" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 507,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 506,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 503,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] font-bold text-emerald-700 uppercase tracking-wide",
								children: lang === "ta" ? "மூடப்பட்டது" : "Closed"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 511,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-2xl sm:text-3xl font-black text-emerald-900 mt-1 font-display",
								children: closed
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 512,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute -right-3 -bottom-3 h-12 w-12 rounded-full bg-emerald-200/40 group-hover:bg-emerald-200 transition-colors flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-5 w-5 text-emerald-600" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 514,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 513,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 510,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 474,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				value: activeTab,
				onValueChange: setActiveTab,
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
						className: "bg-slate-200/70 p-1 rounded-2xl h-auto flex flex-wrap gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "complaints",
								className: "rounded-xl text-xs font-black py-2.5 px-4 text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 522,
										columnNumber: 13
									}, this),
									lang === "ta" ? "எனது புகார்கள்" : "My Complaints",
									" (",
									total,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 521,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "notifications",
								className: "rounded-xl text-xs font-black py-2.5 px-4 text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 526,
									columnNumber: 13
								}, this), lang === "ta" ? "அறிவிப்புகள்" : "Notifications"]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 525,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "appointments",
								className: "rounded-xl text-xs font-black py-2.5 px-4 text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 530,
									columnNumber: 13
								}, this), lang === "ta" ? "எனது சந்திப்புகள்" : "Appointments"]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 529,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "schemes",
								className: "rounded-xl text-xs font-black py-2.5 px-4 text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 534,
									columnNumber: 13
								}, this), lang === "ta" ? "அரசு திட்டங்கள்" : "Schemes"]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 533,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "profile",
								className: "rounded-xl text-xs font-black py-2.5 px-4 text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCheck, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 538,
									columnNumber: 13
								}, this), lang === "ta" ? "சுயவிவரம்" : "Profile"]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 537,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 520,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "complaints",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-slate-200 bg-white shadow-sm p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 546,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: searchText,
									onChange: (e) => setSearchText(e.target.value),
									placeholder: lang === "ta" ? "புகார் ID / விவரம் / முகவரி..." : "Search by ID, description, or address...",
									className: "h-10 pl-10 rounded-xl text-sm font-semibold text-slate-950 bg-white border-slate-300 placeholder:text-slate-400"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 547,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 545,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 overflow-x-auto",
								children: [
									{
										id: "all",
										label: {
											en: "All",
											ta: "அனைத்தும்"
										}
									},
									{
										id: "new",
										label: {
											en: "New",
											ta: "புதிய"
										}
									},
									{
										id: "assigned",
										label: {
											en: "Assigned",
											ta: "ஒதுக்கப்பட்டது"
										}
									},
									{
										id: "in_progress",
										label: {
											en: "Progress",
											ta: "முன்னேற்றம்"
										}
									},
									{
										id: "citizen_verification",
										label: {
											en: "To Verify",
											ta: "சரிபார்க்க"
										}
									},
									{
										id: "closed",
										label: {
											en: "Closed",
											ta: "மூடப்பட்டது"
										}
									}
								].map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setFilterStatus(f.id),
									className: `shrink-0 px-3 py-2 rounded-xl text-[11px] font-black border transition-all ${filterStatus === f.id ? "bg-primary text-white border-primary shadow-sm" : "bg-white text-slate-800 border-slate-300 hover:border-primary/40 hover:text-primary"}`,
									children: lang === "ta" ? f.label.ta : f.label.en
								}, f.id, false, {
									fileName: _jsxFileName$4,
									lineNumber: 563,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 554,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 544,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-1 gap-3.5",
							children: filteredComplaints.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
								className: "rounded-2xl border-dashed border-slate-300 bg-slate-50/60",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
									className: "p-10 text-center space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "h-14 w-14 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-7 w-7" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 583,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 582,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
												className: "text-sm font-black text-slate-800",
												children: lang === "ta" ? "இப்போது புகார்கள் எதுவும் இல்லை" : "No complaints yet"
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 586,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-xs text-slate-500 max-w-sm mx-auto leading-relaxed",
												children: lang === "ta" ? "இந்த மொபைல் எண்ணுக்கு புகார் பதிவு செய்யப்படவில்லை. புதிய புகாரை பதிவு செய்ய கீழே கிளிக் செய்யவும்." : "You haven't registered any complaints on this mobile yet."
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 589,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 585,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											asChild: true,
											className: "mt-2 h-11 rounded-xl bg-primary hover:bg-primary/90 font-bold text-sm gap-2",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: "/complaints/register",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 597,
													columnNumber: 23
												}, this), lang === "ta" ? "புதிய புகாரை பதிவு செய்க" : "Report Your First Complaint"]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 596,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 595,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 581,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 580,
								columnNumber: 15
							}, this) : filteredComplaints.map((c) => {
								const cat = CATEGORIES.find((x) => x.id === c.categoryId);
								const dept = DEPARTMENTS.find((d) => d.id === c.departmentId);
								const ward = WARDS.find((w) => w.id === c.wardId);
								const badgeStyle = STATUS_BADGES[c.status] || {
									bg: "bg-muted",
									text: "text-muted-foreground"
								};
								const meta = STATUS_META[c.status];
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
									onClick: () => setSelectedComplaint(c),
									className: "border-slate-200 bg-white hover:border-primary/50 shadow-sm hover:shadow-md transition-all cursor-pointer rounded-2xl overflow-hidden group",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
										className: "p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-2 flex-1 min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-2 flex-wrap",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-xs font-mono font-black text-primary",
															children: c.id
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 620,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
															className: `text-[11px] font-extrabold border-0 ${badgeStyle.bg} ${badgeStyle.text}`,
															children: meta ? bi(meta.label) : c.status.replace("_", " ")
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 621,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-xs text-slate-700 flex items-center gap-1 font-bold",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-3 w-3" }, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 625,
																columnNumber: 29
															}, this), c.createdAt]
														}, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 624,
															columnNumber: 27
														}, this),
														c.updatedAt && c.updatedAt !== c.createdAt && /* @__PURE__ */ (void 0)("span", {
															className: "text-[11px] text-slate-600 font-semibold flex items-center gap-0.5",
															children: [
																/* @__PURE__ */ (void 0)(RefreshCw, { className: "h-3 w-3" }, void 0, false, {
																	fileName: _jsxFileName$4,
																	lineNumber: 630,
																	columnNumber: 31
																}, this),
																lang === "ta" ? "புதுப்பிக்கப்பட்டது:" : "Updated:",
																" ",
																c.updatedAt
															]
														}, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 629,
															columnNumber: 29
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 619,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
													className: "text-sm sm:text-base font-black text-slate-950 group-hover:text-primary transition-colors line-clamp-1",
													children: [
														cat ? bi(cat.name) : c.categoryId,
														": ",
														c.description
													]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 636,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-x-3 gap-y-1 text-xs text-slate-800 font-medium flex-wrap",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3.5 w-3.5 text-primary shrink-0" }, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 642,
																columnNumber: 29
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "line-clamp-1 font-semibold",
																children: c.address
															}, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 643,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 641,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 645,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "font-bold",
															children: ["Ward ", ward?.number || 110]
														}, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 646,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 647,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "font-extrabold text-slate-900",
															children: dept ? bi(dept.name) : "Public Works"
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 648,
															columnNumber: 27
														}, this),
														c.officer && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("span", { children: "•" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 653,
															columnNumber: 31
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "inline-flex items-center gap-1 font-semibold text-slate-800",
															children: [/* @__PURE__ */ (void 0)(UserCheck, { className: "h-3 w-3" }, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 655,
																columnNumber: 33
															}, this), c.officer]
														}, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 654,
															columnNumber: 31
														}, this)] }, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 652,
															columnNumber: 29
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 640,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 618,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2 shrink-0 md:flex-row w-full md:w-auto",
											children: [c.status === "citizen_verification" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												className: "flex-1 md:flex-none bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs gap-1.5 h-10 px-4",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-3.5 w-3.5" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 666,
													columnNumber: 29
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "சரிபார்க்க" : "Verify" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 667,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 665,
												columnNumber: 27
											}, this) : null, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: "outline",
												className: "flex-1 md:flex-none rounded-xl text-xs font-semibold gap-1 group-hover:bg-primary group-hover:text-white transition-colors h-10 px-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-3.5 w-3.5" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 671,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "விவரங்கள்" : "View Details" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 672,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3.5 w-3.5 -mr-1" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 673,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 670,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 663,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 617,
										columnNumber: 21
									}, this)
								}, c.id, false, {
									fileName: _jsxFileName$4,
									lineNumber: 612,
									columnNumber: 19
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 578,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 543,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "notifications",
						className: "space-y-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-2xl border-border shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
								className: "pb-3",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
									className: "text-base font-bold",
									children: lang === "ta" ? "அறிவிப்புகள்" : "Notifications"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 687,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 686,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "space-y-3",
								children: notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-8 text-center text-xs text-muted-foreground",
									children: lang === "ta" ? "இப்போது அறிவிப்புகள் எதுவும் இல்லை" : "No notifications yet."
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 691,
									columnNumber: 17
								}, this) : notifications.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									onClick: () => markNotificationRead(n.id),
									className: `p-4 rounded-xl border transition-all cursor-pointer ${n.read ? "bg-white border-border" : "bg-primary/5 border-primary/30"}`,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-2 w-2 rounded-full mt-1.5 shrink-0 ${n.read ? "bg-muted-foreground" : "bg-primary"}` }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 705,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
												className: "text-sm font-bold text-foreground",
												children: bi(n.title)
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 707,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-xs text-muted-foreground mt-0.5 leading-relaxed",
												children: bi(n.body)
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 708,
												columnNumber: 27
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 706,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 704,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-[10px] text-muted-foreground shrink-0",
											children: n.date
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 711,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 703,
										columnNumber: 21
									}, this)
								}, n.id, false, {
									fileName: _jsxFileName$4,
									lineNumber: 696,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 689,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 685,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 684,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "appointments",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-2xl border-border shadow-sm p-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between border-b border-border/60 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-base font-bold text-foreground",
									children: lang === "ta" ? "சட்டமன்ற உறுப்பினர் சந்திப்பு கோரிக்கைகள்" : "MLA Meeting Appointments"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 724,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: lang === "ta" ? "பதிவு செய்யப்பட்ட நேரடி சந்திப்பு விவரங்கள்" : "Track and manage your official appointment requests"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 727,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 723,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									asChild: true,
									size: "sm",
									className: "rounded-xl font-bold h-9",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/appointments",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-3.5 w-3.5 mr-1" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 733,
											columnNumber: 19
										}, this), lang === "ta" ? "புதிய சந்திப்பு" : "Book New"]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 732,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 731,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 722,
								columnNumber: 13
							}, this), loadingAppts ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "p-8 text-center text-xs text-muted-foreground",
								children: "Loading your appointments..."
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 740,
								columnNumber: 15
							}, this) : citizenAppts.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "p-10 text-center border border-dashed border-border rounded-2xl bg-muted/20 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-8 w-8 text-muted-foreground/40 mx-auto" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 745,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-bold text-foreground text-sm",
										children: "No MLA appointments requested yet"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 746,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-muted-foreground",
										children: "You can request an official meeting with your MLA to discuss constituency matters."
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 747,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 744,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-3",
								children: citizenAppts.map((appt) => {
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "rounded-2xl border border-border p-4 bg-white shadow-xs space-y-2.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-start justify-between gap-3 flex-wrap",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-0.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "text-xs font-mono font-bold text-primary",
																children: appt.appointmentId
															}, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 771,
																columnNumber: 29
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
																className: `text-[10px] border font-bold px-2 py-0.5 ${{
																	pending: "bg-amber-100 text-amber-800 border-amber-200",
																	under_review: "bg-blue-100 text-blue-800 border-blue-200",
																	approved: "bg-emerald-100 text-emerald-800 border-emerald-200",
																	rescheduled: "bg-purple-100 text-purple-800 border-purple-200",
																	upcoming: "bg-indigo-100 text-indigo-800 border-indigo-200",
																	completed: "bg-slate-100 text-slate-800 border-slate-200",
																	rejected: "bg-rose-100 text-rose-800 border-rose-200",
																	cancelled: "bg-red-100 text-red-800 border-red-200"
																}[appt.status] || "bg-slate-100"}`,
																children: appt.status?.replace("_", " ")?.toUpperCase()
															}, void 0, false, {
																fileName: _jsxFileName$4,
																lineNumber: 772,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 770,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
															className: "text-sm font-bold text-foreground mt-1",
															children: appt.purpose
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 776,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
															className: "text-xs text-muted-foreground",
															children: appt.description
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 777,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 769,
													columnNumber: 25
												}, this), appt.status === "pending" && /* @__PURE__ */ (void 0)(Button, {
													size: "sm",
													variant: "ghost",
													onClick: () => handleCancelCitizenAppt(appt.appointmentId),
													className: "text-xs text-destructive hover:bg-destructive/10 rounded-xl h-8 px-2.5 font-bold",
													children: [/* @__PURE__ */ (void 0)(Trash2, { className: "h-3.5 w-3.5 mr-1" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 787,
														columnNumber: 29
													}, this), "Cancel"]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 781,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 768,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-border/60 text-xs text-muted-foreground",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 795,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
															appt.confirmedDate || appt.preferredDate,
															" · ",
															appt.confirmedTime || appt.preferredTime
														] }, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 796,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 794,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 799,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "truncate",
															children: appt.meetingLocation || "MLA Constituency Office"
														}, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 800,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 798,
														columnNumber: 25
													}, this),
													appt.relatedComplaintId && /* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ (void 0)(FileText, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 804,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", { children: ["Complaint #", appt.relatedComplaintId] }, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 805,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 803,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 793,
												columnNumber: 23
											}, this),
											appt.instructions && /* @__PURE__ */ (void 0)("div", {
												className: "p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900",
												children: [
													/* @__PURE__ */ (void 0)("strong", { children: "Office Instructions:" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 812,
														columnNumber: 27
													}, this),
													" ",
													appt.instructions
												]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 811,
												columnNumber: 25
											}, this),
											appt.rejectionReason && /* @__PURE__ */ (void 0)("div", {
												className: "p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900",
												children: [
													/* @__PURE__ */ (void 0)("strong", { children: "Note:" }, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 818,
														columnNumber: 27
													}, this),
													" ",
													appt.rejectionReason
												]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 817,
												columnNumber: 25
											}, this)
										]
									}, appt.appointmentId, true, {
										fileName: _jsxFileName$4,
										lineNumber: 764,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 750,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 721,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 720,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "schemes",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-2xl border-border shadow-sm p-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between border-b border-border/60 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-base font-bold text-foreground",
									children: lang === "ta" ? "பொருந்தக்கூடிய நலத்திட்டங்கள்" : "Eligible Citizen Schemes"
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 832,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									asChild: true,
									variant: "ghost",
									size: "sm",
									className: "text-xs text-primary h-8",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/schemes",
										children: lang === "ta" ? "அனைத்தையும் காண்க →" : "Explore All →"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 836,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 835,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 831,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-xl border border-border bg-white space-y-2 hover:shadow-sm transition-shadow",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: "secondary",
											className: "text-[10px]",
											children: "Education"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 843,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "text-sm font-bold text-foreground",
											children: "Higher Education Scholarship"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 844,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-muted-foreground",
											children: "Tuition assistance up to ₹25,000 per year for college students."
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 845,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 842,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-xl border border-border bg-white space-y-2 hover:shadow-sm transition-shadow",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: "secondary",
											className: "text-[10px]",
											children: "Welfare"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 848,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "text-sm font-bold text-foreground",
											children: "Senior Citizen Care Assistance"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 849,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-muted-foreground",
											children: "Monthly direct assistance and free health camp access."
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 850,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 847,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 841,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 830,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 829,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "profile",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-2xl border-border shadow-sm p-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-bold text-foreground mb-4",
								children: lang === "ta" ? "குடிமக்கள் விவரக் குறிப்பு" : "Citizen Profile Details"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 858,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-muted-foreground",
											children: lang === "ta" ? "பெயர்:" : "Name:"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 863,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-sm font-bold text-foreground mt-0.5",
											children: displayName
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 864,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 862,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-muted-foreground",
											children: lang === "ta" ? "மொபைல்:" : "Mobile:"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 867,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-sm font-bold text-foreground mt-0.5 font-mono tracking-wide",
											children: ["+91 ", displayMobile]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 868,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 866,
										columnNumber: 15
									}, this),
									citizens.find((c) => c.citizenId === effectiveCitizen.citizenId)?.email && /* @__PURE__ */ (void 0)("div", {
										className: "p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-muted-foreground",
											children: lang === "ta" ? "மின்னஞ்சல்:" : "Email:"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 872,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-sm font-bold text-foreground mt-0.5",
											children: citizens.find((c) => c.citizenId === effectiveCitizen.citizenId).email
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 873,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 871,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-muted-foreground",
											children: lang === "ta" ? "தொகுதி & வார்டு:" : "Constituency & Ward:"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 879,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-sm font-bold text-foreground mt-0.5",
											children: ward ? lang === "ta" ? ward.name.ta : ward.name.en : "Ward 110 (Thousand Lights)"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 880,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 878,
										columnNumber: 15
									}, this),
									citizenSession?.loginAt && /* @__PURE__ */ (void 0)("div", {
										className: "p-3.5 rounded-xl bg-gradient-to-br from-primary/5 to-white border border-primary/20 sm:col-span-2",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-muted-foreground",
											children: lang === "ta" ? "கடைசி உள்நுழைவு நேரம்:" : "Last Login:"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 886,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-sm font-bold text-foreground mt-0.5",
											children: citizenSession.loginAt
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 887,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 885,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 861,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 857,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 856,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 519,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: !!selectedComplaint,
				onOpenChange: (open) => !open && setSelectedComplaint(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-2xl rounded-3xl p-0 max-h-[92vh] overflow-hidden flex flex-col",
					children: selectedComplaint && /* @__PURE__ */ (void 0)("div", {
						className: "flex flex-col max-h-[92vh]",
						children: [/* @__PURE__ */ (void 0)(DialogHeader, {
							className: "px-6 pt-6 pb-4 border-b border-border/60 shrink-0",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "flex items-start justify-between gap-3",
								children: /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(DialogTitle, {
									className: "text-lg sm:text-xl font-black font-display text-foreground flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "font-mono",
										children: selectedComplaint.id
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 903,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)(Badge, {
										className: `text-[11px] font-bold border-0 ${STATUS_BADGES[selectedComplaint.status]?.bg || "bg-slate-100"} ${STATUS_BADGES[selectedComplaint.status]?.text || "text-slate-800"}`,
										children: STATUS_META[selectedComplaint.status]?.label ? bi(STATUS_META[selectedComplaint.status].label) : selectedComplaint.status.replace("_", " ")
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 904,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 902,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: [
										lang === "ta" ? "சமர்ப்பித்த நேரம்:" : "Submitted:",
										" ",
										selectedComplaint.createdAt,
										"  •  ",
										lang === "ta" ? "கடைசி புதுப்பிப்பு:" : "Last Updated:",
										" ",
										selectedComplaint.updatedAt
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 910,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 901,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 900,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 899,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex-1 overflow-y-auto overflow-x-hidden px-6 py-5 space-y-5",
							children: [
								actionDoneMsg && /* @__PURE__ */ (void 0)("div", {
									className: "p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2 border border-emerald-200",
									children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 shrink-0" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 921,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("span", { children: actionDoneMsg }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 922,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 920,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-2xl bg-gradient-to-br from-slate-50/80 to-white border border-border p-4.5 p-5 space-y-3",
									children: [/* @__PURE__ */ (void 0)("p", {
										className: "font-semibold text-foreground leading-relaxed",
										children: selectedComplaint.description
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 927,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "grid grid-cols-2 gap-2.5 pt-2 border-t border-border/60 text-xs",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-lg bg-white border border-border p-2.5",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-muted-foreground text-[11px] block",
													children: lang === "ta" ? "முகவரி:" : "Address:"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 930,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-foreground block mt-0.5 leading-snug",
													children: selectedComplaint.address
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 931,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 929,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-lg bg-white border border-border p-2.5",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-muted-foreground text-[11px] block",
													children: lang === "ta" ? "வார்டு:" : "Ward:"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 934,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-foreground block mt-0.5",
													children: WARDS.find((w) => w.id === selectedComplaint.wardId) ? lang === "ta" ? WARDS.find((w) => w.id === selectedComplaint.wardId).name.ta : WARDS.find((w) => w.id === selectedComplaint.wardId).name.en : `Ward ${WARDS.find((w) => w.id === selectedComplaint.wardId)?.number || 110}`
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 935,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 933,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-lg bg-white border border-border p-2.5",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-muted-foreground text-[11px] block",
													children: lang === "ta" ? "துரை:" : "Department:"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 944,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-bold text-foreground block mt-0.5",
													children: DEPARTMENTS.find((d) => d.id === selectedComplaint.departmentId) ? lang === "ta" ? DEPARTMENTS.find((d) => d.id === selectedComplaint.departmentId).name.ta : DEPARTMENTS.find((d) => d.id === selectedComplaint.departmentId).name.en : selectedComplaint.departmentId
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 945,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 943,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-lg bg-white border border-border p-2.5",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-muted-foreground text-[11px] block",
													children: lang === "ta" ? "முன்னுரிமை:" : "Priority:"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 954,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-bold text-foreground uppercase block mt-0.5",
													children: selectedComplaint.priority
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 955,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 953,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-lg bg-white border border-border p-2.5 sm:col-span-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-muted-foreground text-[11px] block",
													children: lang === "ta" ? "பொறுப்பு அலுவலர்:" : "Assigned Officer:"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 958,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-foreground block mt-0.5",
													children: selectedComplaint.officer || (lang === "ta" ? "ஒதுக்கப்படவில்லை" : "Pending Assignment")
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 959,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 957,
												columnNumber: 21
											}, this),
											selectedComplaint.resolutionDetails && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 sm:col-span-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-emerald-700 text-[11px] font-bold block uppercase tracking-wide",
													children: lang === "ta" ? "தீர்வு விவரம்:" : "Resolution Details:"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 965,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-medium text-emerald-900 block mt-0.5 leading-relaxed",
													children: selectedComplaint.resolutionDetails
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 968,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 964,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 928,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 926,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [selectedComplaint.beforeImage && /* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[11px] font-bold text-slate-600 flex items-center gap-1",
											children: [/* @__PURE__ */ (void 0)(Clock, { className: "h-3 w-3" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 980,
												columnNumber: 25
											}, this), lang === "ta" ? "புகார் புகைப்படம்:" : "Before (Complaint):"]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 979,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "rounded-xl overflow-hidden border border-border aspect-video shadow-sm",
											children: /* @__PURE__ */ (void 0)("img", {
												src: selectedComplaint.beforeImage,
												alt: "Before",
												className: "w-full h-full object-cover"
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 984,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 983,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 978,
										columnNumber: 21
									}, this), selectedComplaint.afterImage && /* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[11px] font-bold text-emerald-700 flex items-center gap-1",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-3 w-3" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 991,
												columnNumber: 25
											}, this), lang === "ta" ? "தீர்வு புகைப்படம்:" : "After (Resolved):"]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 990,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "rounded-xl overflow-hidden border border-emerald-300 ring-2 ring-emerald-100 aspect-video shadow-sm",
											children: /* @__PURE__ */ (void 0)("img", {
												src: selectedComplaint.afterImage,
												alt: "After",
												className: "w-full h-full object-cover"
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 995,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 994,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 989,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 976,
									columnNumber: 17
								}, this),
								selectedComplaint.status === "citizen_verification" && /* @__PURE__ */ (void 0)("div", {
									className: "rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border-2 border-violet-300 p-5 space-y-4",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-5 w-5 text-violet-700" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 1004,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("h4", {
												className: "text-sm font-black text-violet-950 font-display",
												children: lang === "ta" ? "பிரச்சினை தீர்க்கப்பட்டதா?" : "Has your issue been resolved?"
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 1005,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 1003,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-violet-800 leading-relaxed",
											children: lang === "ta" ? "களப்பணி முடிந்ததாக குறிக்கப்பட்டுள்ளது. மேலேயுள்ள புகைப்படங்கள் மற்றும் கள நிலையை சரிபார்த்து உறுதிப்படுத்தவும்." : "The field officer has marked this work complete with evidence. Please verify the resolution."
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 1009,
											columnNumber: 21
										}, this),
										!showReopenForm ? /* @__PURE__ */ (void 0)("div", {
											className: "space-y-4 pt-1",
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (void 0)(Label, {
														className: "text-xs font-bold text-violet-950",
														children: lang === "ta" ? "தீர்வு மதிப்பீடு (Rating):" : "Rate Resolution Quality:"
													}, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 1018,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-2",
														children: [[
															1,
															2,
															3,
															4,
															5
														].map((star) => /* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: () => setRating(star),
															className: `text-2xl transition-transform hover:scale-110 ${star <= rating ? "text-amber-500" : "text-slate-300"}`,
															children: "★"
														}, star, false, {
															fileName: _jsxFileName$4,
															lineNumber: 1023,
															columnNumber: 31
														}, this)), /* @__PURE__ */ (void 0)("span", {
															className: "text-xs font-bold text-violet-900 ml-2",
															children: [rating, " / 5 Stars"]
														}, void 0, true, {
															fileName: _jsxFileName$4,
															lineNumber: 1034,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 1021,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 1017,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)(Textarea, {
													value: verificationFeedback,
													onChange: (e) => setVerificationFeedback(e.target.value),
													placeholder: lang === "ta" ? "உங்கள் கருத்துக்களைப் பகிரவும் (விருப்பத்திற்குரியது)..." : "Share your feedback (optional)...",
													rows: 2,
													className: "text-xs rounded-xl bg-white border-violet-200 focus-visible:ring-violet-400"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 1038,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1",
													children: [/* @__PURE__ */ (void 0)(Button, {
														onClick: handleVerifyYes,
														className: "flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 rounded-xl gap-1.5 shadow-md",
														children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 1051,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", { children: lang === "ta" ? "ஆம், தீர்க்கப்பட்டது" : "YES, ISSUE RESOLVED" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 1052,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 1047,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)(Button, {
														type: "button",
														variant: "outline",
														onClick: () => setShowReopenForm(true),
														className: "flex-1 border-rose-300 text-rose-700 hover:bg-rose-50 font-bold h-11 rounded-xl",
														children: [/* @__PURE__ */ (void 0)(X, { className: "h-4 w-4" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 1060,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", { children: lang === "ta" ? "இல்லை, இன்னும் உள்ளது" : "NO, STILL AN ISSUE" }, void 0, false, {
															fileName: _jsxFileName$4,
															lineNumber: 1061,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$4,
														lineNumber: 1054,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 1046,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 1016,
											columnNumber: 23
										}, this) : /* @__PURE__ */ (void 0)("div", {
											className: "space-y-3 pt-1",
											children: [
												/* @__PURE__ */ (void 0)(Label, {
													className: "text-xs font-bold text-rose-900",
													children: lang === "ta" ? "பிரச்சினை மீண்டும் திறக்கப்படுவதற்கான காரணம்:" : "Reason for reopening:"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 1067,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)(Textarea, {
													value: reopenReason,
													onChange: (e) => setReopenReason(e.target.value),
													placeholder: "Please describe why the work is incomplete...",
													rows: 3,
													className: "text-xs rounded-xl bg-white border-rose-200 focus-visible:ring-rose-400"
												}, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 1070,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5",
													children: [/* @__PURE__ */ (void 0)(Button, {
														onClick: handleVerifyNo,
														className: "flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold h-10 rounded-xl",
														children: lang === "ta" ? "புகாரை மீண்டும் திறக்க" : "Reopen Complaint"
													}, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 1078,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)(Button, {
														variant: "ghost",
														onClick: () => setShowReopenForm(false),
														className: "text-xs h-10",
														children: "Cancel"
													}, void 0, false, {
														fileName: _jsxFileName$4,
														lineNumber: 1084,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$4,
													lineNumber: 1077,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 1066,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1002,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "space-y-3 pt-2",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (void 0)("h4", {
											className: "text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5",
											children: [/* @__PURE__ */ (void 0)(Workflow, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 1100,
												columnNumber: 23
											}, this), lang === "ta" ? "முழு காலவரிசை (Timeline)" : "Full Complaint Timeline"]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 1099,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(Badge, {
											variant: "outline",
											className: "text-[10px] text-muted-foreground bg-slate-50",
											children: [
												selectedComplaint.timeline.length,
												" ",
												lang === "ta" ? "நிலைகள்" : "stages"
											]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 1103,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 1098,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-border bg-gradient-to-br from-white to-slate-50/60 p-4 sm:p-5",
										children: /* @__PURE__ */ (void 0)(ComplaintTimeline, {
											timeline: selectedComplaint.timeline,
											lang
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 1108,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 1107,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 1097,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 918,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 898,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 896,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 895,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 385,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.dashboard.constituency.tsx";
var Route$7 = createFileRoute("/_layout/dashboard/constituency")({ component: ConstituencyAdminDashboard });
var APPT_STATUS_CONFIG = {
	pending: {
		label: "Pending Review",
		cls: "bg-amber-100 text-amber-800 border-amber-200"
	},
	under_review: {
		label: "Under Review",
		cls: "bg-blue-100 text-blue-800 border-blue-200"
	},
	approved: {
		label: "Approved",
		cls: "bg-emerald-100 text-emerald-800 border-emerald-200"
	},
	rescheduled: {
		label: "Rescheduled",
		cls: "bg-purple-100 text-purple-800 border-purple-200"
	},
	upcoming: {
		label: "Upcoming",
		cls: "bg-indigo-100 text-indigo-800 border-indigo-200"
	},
	completed: {
		label: "Completed",
		cls: "bg-slate-100 text-slate-800 border-slate-200"
	},
	rejected: {
		label: "Rejected",
		cls: "bg-rose-100 text-rose-800 border-rose-200"
	},
	cancelled: {
		label: "Cancelled",
		cls: "bg-red-100 text-red-800 border-red-200"
	}
};
var COMPLAINT_STATUS_BADGES = {
	new: "bg-blue-100 text-blue-800",
	pending_verification: "bg-amber-100 text-amber-800",
	verified: "bg-sky-100 text-sky-800",
	assigned: "bg-indigo-100 text-indigo-800",
	in_progress: "bg-amber-100 text-amber-800",
	completed: "bg-purple-100 text-purple-800",
	citizen_verification: "bg-purple-100 text-purple-800",
	closed: "bg-emerald-100 text-emerald-800"
};
function ConstituencyAdminDashboard() {
	const { bi, lang } = useI18n();
	const { user } = useAuth();
	const { complaints, assignDepartmentToComplaint, verifyResolutionOnComplaint, fetchAppointments, updateAppointment, fetchFieldOfficers, refreshData } = useWorkflow();
	const [activeMainTab, setActiveMainTab] = (0, import_react.useState)("overview");
	const [selectedComplaint, setSelectedComplaint] = (0, import_react.useState)(null);
	const [filterWard, setFilterWard] = (0, import_react.useState)("all");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [assignDeptId, setAssignDeptId] = (0, import_react.useState)("highways");
	const [assignPriority, setAssignPriority] = (0, import_react.useState)("medium");
	const [assignRemarks, setAssignRemarks] = (0, import_react.useState)("");
	const [reworkRemarks, setReworkRemarks] = (0, import_react.useState)("");
	const [showReworkBox, setShowReworkBox] = (0, import_react.useState)(false);
	const [toastMsg, setToastMsg] = (0, import_react.useState)("");
	const [appointments, setAppointments] = (0, import_react.useState)([]);
	const [loadingAppts, setLoadingAppts] = (0, import_react.useState)(false);
	const [selectedAppt, setSelectedAppt] = (0, import_react.useState)(null);
	const [apptStatusFilter, setApptStatusFilter] = (0, import_react.useState)("all");
	const [apptSearchQuery, setApptSearchQuery] = (0, import_react.useState)("");
	const [showApproveDialog, setShowApproveDialog] = (0, import_react.useState)(false);
	const [confirmDate, setConfirmDate] = (0, import_react.useState)("");
	const [confirmTime, setConfirmTime] = (0, import_react.useState)("10:30 AM");
	const [venue, setVenue] = (0, import_react.useState)("MLA Constituency Office, Thousand Lights, Chennai");
	const [representative, setRepresentative] = (0, import_react.useState)("Hon. Member of Legislative Assembly");
	const [instructions, setInstructions] = (0, import_react.useState)("Please bring any supporting documents or previous complaint receipts.");
	const [apptRemarks, setApptRemarks] = (0, import_react.useState)("");
	const [showRescheduleDialog, setShowRescheduleDialog] = (0, import_react.useState)(false);
	const [rescheduleDate, setRescheduleDate] = (0, import_react.useState)("");
	const [rescheduleTime, setRescheduleTime] = (0, import_react.useState)("11:00 AM");
	const [showRejectApptDialog, setShowRejectApptDialog] = (0, import_react.useState)(false);
	const [apptRejectReason, setApptRejectReason] = (0, import_react.useState)("");
	const [officers, setOfficers] = (0, import_react.useState)([]);
	const [isSyncing, setIsSyncing] = (0, import_react.useState)(false);
	const loadAppts = async () => {
		setLoadingAppts(true);
		const data = await fetchAppointments();
		setAppointments(data);
		setLoadingAppts(false);
	};
	const loadOfficers = async () => {
		const list = await fetchFieldOfficers();
		setOfficers(list);
	};
	const handleSyncDb = async () => {
		setIsSyncing(true);
		try {
			await fetch("/api/seed", { method: "POST" });
			await refreshData();
			await loadAppts();
			await loadOfficers();
			setToastMsg("Database synced with MongoDB successfully! All records loaded.");
			setTimeout(() => setToastMsg(""), 4e3);
		} catch (err) {
			setToastMsg("Sync error: " + (err?.message || "Failed to sync"));
			setTimeout(() => setToastMsg(""), 4e3);
		} finally {
			setIsSyncing(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadAppts();
		loadOfficers();
	}, []);
	const totalComplaints = complaints.length;
	const newCount = complaints.filter((c) => c.status === "new").length;
	const assignedCount = complaints.filter((c) => c.status === "assigned" || c.status === "verified").length;
	const inProgressCount = complaints.filter((c) => c.status === "in_progress").length;
	const pendingVerificationCount = complaints.filter((c) => ["completed", "citizen_verification"].includes(c.status)).length;
	const resolvedCount = complaints.filter((c) => c.status === "closed").length;
	const overdueCount = complaints.filter((c) => c.priority === "high" && c.status !== "closed").length;
	const totalAppts = appointments.length;
	appointments.filter((a) => a.status === "pending" || a.status === "under_review").length;
	appointments.filter((a) => a.status === "approved").length;
	const [isAssigningDept, setIsAssigningDept] = (0, import_react.useState)(false);
	const handleOpenComplaintReview = (c) => {
		setSelectedComplaint(c);
		setShowReworkBox(false);
		setReworkRemarks("");
		const cat = CATEGORIES.find((x) => x.id === c.categoryId);
		const suggestedDept = cat ? cat.department : "highways";
		setAssignDeptId(c.departmentId || suggestedDept);
		setAssignPriority(c.priority || "medium");
		setAssignRemarks("");
	};
	const handleAssignDepartment = async () => {
		if (!selectedComplaint || isAssigningDept) return;
		setIsAssigningDept(true);
		try {
			const res = await assignDepartmentToComplaint(selectedComplaint.id, assignDeptId, assignPriority, assignRemarks);
			if (res.ok) {
				setToastMsg(`Complaint #${selectedComplaint.id} allocated to department!`);
				setTimeout(() => {
					setSelectedComplaint(null);
					setToastMsg("");
					refreshData();
				}, 1200);
			} else {
				setToastMsg(`Error: ${res.message || "Failed to assign department"}`);
				setTimeout(() => setToastMsg(""), 3500);
			}
		} catch (err) {
			setToastMsg(`Error: ${err?.message || "Failed to assign department"}`);
			setTimeout(() => setToastMsg(""), 3500);
		} finally {
			setIsAssigningDept(false);
		}
	};
	const handleApproveResolution = async (id) => {
		if ((await verifyResolutionOnComplaint(id, true, "Verified and approved by Constituency Admin.")).ok) {
			setToastMsg(`Complaint #${id} resolution verified and closed! Citizen notified.`);
			setTimeout(() => {
				setSelectedComplaint(null);
				setToastMsg("");
				refreshData();
			}, 1500);
		}
	};
	const handleRequestRework = async (id) => {
		if (!reworkRemarks.trim()) return;
		if ((await verifyResolutionOnComplaint(id, false, reworkRemarks)).ok) {
			setToastMsg(`Complaint #${id} returned for rework with instructions.`);
			setTimeout(() => {
				setSelectedComplaint(null);
				setShowReworkBox(false);
				setReworkRemarks("");
				setToastMsg("");
				refreshData();
			}, 1500);
		}
	};
	const openApptDetails = (appt) => {
		setSelectedAppt(appt);
		setConfirmDate(appt.preferredDate);
		setConfirmTime(appt.preferredTime);
		setRescheduleDate(appt.preferredDate);
		setRescheduleTime(appt.preferredTime);
		setApptRemarks(appt.adminRemarks || "");
	};
	const handleApproveAppt = async () => {
		if (!selectedAppt) return;
		if ((await updateAppointment(selectedAppt.appointmentId, "approve", {
			confirmedDate: confirmDate || selectedAppt.preferredDate,
			confirmedTime: confirmTime || selectedAppt.preferredTime,
			meetingLocation: venue,
			mlaRepresentative: representative,
			instructions,
			adminRemarks: apptRemarks
		})).ok) {
			setToastMsg(`Appointment #${selectedAppt.appointmentId} confirmed and citizen notified!`);
			setShowApproveDialog(false);
			setSelectedAppt(null);
			loadAppts();
			setTimeout(() => setToastMsg(""), 2e3);
		}
	};
	const handleRescheduleAppt = async () => {
		if (!selectedAppt) return;
		if ((await updateAppointment(selectedAppt.appointmentId, "reschedule", {
			confirmedDate: rescheduleDate,
			confirmedTime: rescheduleTime,
			adminRemarks: apptRemarks
		})).ok) {
			setToastMsg(`Appointment #${selectedAppt.appointmentId} rescheduled!`);
			setShowRescheduleDialog(false);
			setSelectedAppt(null);
			loadAppts();
			setTimeout(() => setToastMsg(""), 2e3);
		}
	};
	const handleRejectAppt = async () => {
		if (!selectedAppt || !apptRejectReason.trim()) return;
		if ((await updateAppointment(selectedAppt.appointmentId, "reject", {
			reason: apptRejectReason.trim(),
			adminRemarks: apptRemarks
		})).ok) {
			setToastMsg(`Appointment #${selectedAppt.appointmentId} rejected.`);
			setShowRejectApptDialog(false);
			setSelectedAppt(null);
			setApptRejectReason("");
			loadAppts();
			setTimeout(() => setToastMsg(""), 2e3);
		}
	};
	const handleCompleteAppt = async (apptId) => {
		if ((await updateAppointment(apptId, "complete", { adminRemarks: "Meeting concluded with MLA office." })).ok) {
			setToastMsg(`Appointment #${apptId} marked as completed!`);
			setSelectedAppt(null);
			loadAppts();
			setTimeout(() => setToastMsg(""), 2e3);
		}
	};
	const filteredComplaints = complaints.filter((c) => {
		if (filterWard !== "all" && c.wardId !== filterWard) return false;
		if (filterStatus !== "all" && c.status !== filterStatus) return false;
		if (searchQuery.trim()) {
			const q = searchQuery.toLowerCase();
			return c.id.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.address.toLowerCase().includes(q);
		}
		return true;
	});
	const filteredAppointments = appointments.filter((a) => {
		if (apptStatusFilter !== "all" && a.status !== apptStatusFilter) return false;
		if (apptSearchQuery.trim()) {
			const q = apptSearchQuery.toLowerCase();
			return a.appointmentId.toLowerCase().includes(q) || a.citizenName.toLowerCase().includes(q) || a.mobileNumber.includes(q) || a.purpose.toLowerCase().includes(q);
		}
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-3xl border border-red-900/20 bg-slate-900 text-white shadow-lift p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 355,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-4 relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 text-3xl font-black shrink-0 shadow-lg border border-amber-300",
							children: "🏛️"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 357,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2.5 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "text-xl sm:text-2xl font-black text-white font-display tracking-tight",
								children: "TVK Constituency Command Center"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 362,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								className: "bg-red-700 text-white border-0 text-xs font-bold px-2.5 py-0.5 shadow-sm",
								children: "MLA Presentation Mode"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 365,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 361,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-slate-300 mt-1",
							children: [
								"Logged in: ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
									className: "text-amber-400",
									children: user?.name || "Hon. MLA Office / Admin"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 370,
									columnNumber: 26
								}, this),
								" • Public Grievance Operations Desk"
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 369,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 360,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 356,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 relative z-10",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							disabled: isSyncing,
							onClick: handleSyncDb,
							className: "h-10 rounded-xl text-xs font-bold gap-1.5 border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `h-3.5 w-3.5 text-amber-400 ${isSyncing ? "animate-spin" : ""}` }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 383,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: isSyncing ? "Syncing..." : "Sync DB" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 384,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 376,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 375,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 354,
				columnNumber: 7
			}, this),
			toastMsg && /* @__PURE__ */ (void 0)("div", {
				className: "p-3.5 rounded-2xl bg-emerald-900/90 text-emerald-100 text-xs font-bold flex items-center gap-2 shadow-sm border border-emerald-700",
				children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 shrink-0 text-emerald-400" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 391,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("span", { children: toastMsg }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 392,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 390,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				value: activeMainTab,
				onValueChange: (v) => setActiveMainTab(v),
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
						className: "bg-slate-200/80 dark:bg-slate-800 p-1.5 rounded-2xl h-auto flex flex-wrap gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "overview",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layers, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 400,
									columnNumber: 13
								}, this), "Overview"]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 399,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "complaints",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 404,
										columnNumber: 13
									}, this),
									"Complaints (",
									totalComplaints,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 403,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "verification",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-3.5 w-3.5 mr-1.5 text-amber-400" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 408,
										columnNumber: 13
									}, this),
									"Verification (",
									pendingVerificationCount,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 407,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "appointments",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-3.5 w-3.5 mr-1.5 text-amber-400" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 412,
										columnNumber: 13
									}, this),
									"MLA Appointments (",
									totalAppts,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 411,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "officers",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 416,
										columnNumber: 13
									}, this),
									"Field Officers (",
									officers.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 415,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "escalations",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flame, { className: "h-3.5 w-3.5 mr-1.5 text-amber-400" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 420,
										columnNumber: 13
									}, this),
									"SLA Escalations (",
									overdueCount,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 419,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 398,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "overview",
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-2xl bg-white border border-red-200 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[11px] font-bold text-red-700 uppercase tracking-wider",
										children: "New Reports"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 429,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-display",
										children: newCount
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 430,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 428,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-2xl bg-white border border-indigo-200 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[11px] font-bold text-indigo-700 uppercase tracking-wider",
										children: "Assigned"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 433,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-display",
										children: assignedCount
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 434,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 432,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-2xl bg-white border border-amber-300 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[11px] font-bold text-amber-800 uppercase tracking-wider",
										children: "In Progress"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 437,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-display",
										children: inProgressCount
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 438,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 436,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-2xl bg-white border border-purple-200 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[11px] font-bold text-purple-700 uppercase tracking-wider",
										children: "To Verify"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 441,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-display",
										children: pendingVerificationCount
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 442,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 440,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-2xl bg-white border border-emerald-300 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[11px] font-bold text-emerald-700 uppercase tracking-wider",
										children: "Resolved"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 445,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-display",
										children: resolvedCount
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 446,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 444,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-2xl bg-white border border-red-400 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[11px] font-bold text-red-800 uppercase flex items-center gap-1 tracking-wider",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flame, { className: "h-3 w-3 text-red-600" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 450,
											columnNumber: 17
										}, this), " Overdue"]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 449,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-2xl sm:text-3xl font-black text-rose-950 mt-1 font-display",
										children: overdueCount
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 452,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 448,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 427,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
								className: "rounded-3xl border-border p-6 bg-white space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-base font-bold text-foreground",
									children: "Recent New Complaints Awaiting Allocation"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 458,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "divide-y divide-border/60",
									children: complaints.filter((c) => c.status === "new").slice(0, 4).map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "py-3 flex items-center justify-between gap-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "font-bold text-primary",
												children: c.id
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 463,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "font-semibold text-foreground",
												children: c.description
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 464,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-muted-foreground",
												children: c.address
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 465,
												columnNumber: 23
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 462,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											size: "sm",
											onClick: () => handleOpenComplaintReview(c),
											className: "bg-primary hover:bg-primary/90 text-white text-xs rounded-xl h-8 font-bold",
											children: "Assign Dept →"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 467,
											columnNumber: 21
										}, this)]
									}, c.id, true, {
										fileName: _jsxFileName$3,
										lineNumber: 461,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 459,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 457,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
								className: "rounded-3xl border-border p-6 bg-white space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-base font-bold text-foreground",
									children: "Pending MLA Appointment Requests"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 480,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "divide-y divide-border/60",
									children: appointments.filter((a) => a.status === "pending").slice(0, 4).map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "py-3 flex items-center justify-between gap-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "font-bold text-rose-700",
												children: [
													a.appointmentId,
													" • ",
													a.citizenName
												]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 485,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "font-medium text-foreground",
												children: a.purpose
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 486,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-muted-foreground",
												children: [
													a.preferredDate,
													" at ",
													a.preferredTime
												]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 487,
												columnNumber: 23
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 484,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => openApptDetails(a),
											className: "text-xs rounded-xl h-8 font-bold hover:bg-rose-50 hover:text-rose-700",
											children: "Review →"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 489,
											columnNumber: 21
										}, this)]
									}, a.appointmentId, true, {
										fileName: _jsxFileName$3,
										lineNumber: 483,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 481,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 479,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 456,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 426,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "complaints",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-border shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									placeholder: "Search complaints by ID, description, or address...",
									className: "h-10 text-xs pl-9 rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 508,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 514,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 507,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
									value: filterWard,
									onChange: (e) => setFilterWard(e.target.value),
									className: "h-10 rounded-xl border border-input bg-background px-3 text-xs font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value: "all",
										children: "All Wards (108 - 113)"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 523,
										columnNumber: 17
									}, this), WARDS.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value: w.id,
										children: [
											"Ward ",
											w.number,
											" — ",
											bi(w.name)
										]
									}, w.id, true, {
										fileName: _jsxFileName$3,
										lineNumber: 525,
										columnNumber: 19
									}, this))]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 518,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
									value: filterStatus,
									onChange: (e) => setFilterStatus(e.target.value),
									className: "h-10 rounded-xl border border-input bg-background px-3 text-xs font-semibold",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "all",
											children: "All Statuses"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 536,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "new",
											children: "New Complaints"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 537,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "verified",
											children: "Verified (Assigned Dept)"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 538,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "assigned",
											children: "Assigned Officer"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 539,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "in_progress",
											children: "Work In Progress"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 540,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "completed",
											children: "Pending Verification"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 541,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "closed",
											children: "Resolved & Closed"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 542,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 531,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 517,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 506,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border shadow-sm overflow-hidden bg-white",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
								className: "border-b border-border/60 bg-muted/20 px-6 py-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
									className: "text-base font-bold text-foreground",
									children: [
										"Constituency Complaints List (",
										filteredComplaints.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 549,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 548,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "divide-y divide-border/60",
								children: filteredComplaints.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-12 text-center text-xs text-muted-foreground",
									children: "No complaints found matching criteria."
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 555,
									columnNumber: 17
								}, this) : filteredComplaints.map((c) => {
									const catObj = CATEGORIES.find((cat) => cat.id === c.categoryId);
									const wardObj = WARDS.find((w) => w.id === c.wardId);
									const statusObj = STATUS_META[c.status];
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "p-4 sm:p-5 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1.5 flex-1 min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-2 flex-wrap",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "font-mono font-bold text-xs text-primary",
															children: c.id
														}, void 0, false, {
															fileName: _jsxFileName$3,
															lineNumber: 571,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
															className: "bg-muted text-muted-foreground border-0 text-[10px]",
															children: bi(catObj?.name || {
																en: c.categoryId,
																ta: c.categoryId
															})
														}, void 0, false, {
															fileName: _jsxFileName$3,
															lineNumber: 572,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-[11px] text-muted-foreground flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3 w-3 text-primary" }, void 0, false, {
																fileName: _jsxFileName$3,
																lineNumber: 576,
																columnNumber: 29
															}, this), wardObj ? `Ward ${wardObj.number} (${bi(wardObj.name)})` : c.wardId]
														}, void 0, true, {
															fileName: _jsxFileName$3,
															lineNumber: 575,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
															className: `text-[10px] border-0 font-bold ${c.priority === "high" ? "bg-rose-100 text-rose-800" : "bg-blue-100 text-blue-800"}`,
															children: c.priority.toUpperCase()
														}, void 0, false, {
															fileName: _jsxFileName$3,
															lineNumber: 579,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 570,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-xs sm:text-sm font-semibold text-foreground line-clamp-1",
													children: c.description
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 589,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11px] text-muted-foreground truncate",
													children: c.address
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 592,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 569,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-3 self-end sm:self-center shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
												className: `text-xs border-0 font-semibold ${COMPLAINT_STATUS_BADGES[c.status] || "bg-muted"}`,
												children: bi(statusObj?.label || {
													en: c.status,
													ta: c.status
												})
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 596,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												size: "sm",
												variant: "outline",
												onClick: () => handleOpenComplaintReview(c),
												className: "h-9 px-3.5 rounded-xl text-xs font-semibold",
												children: "Review & Manage →"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 599,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 595,
											columnNumber: 23
										}, this)]
									}, c.id, true, {
										fileName: _jsxFileName$3,
										lineNumber: 565,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 553,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 547,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 505,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "verification",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border shadow-sm p-6 bg-white space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-bold text-foreground",
								children: [
									"Pending Admin Verification Queue (",
									pendingVerificationCount,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 620,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: "Field officers have submitted resolution evidence for these issues. Review and verify to resolve or request rework."
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 623,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 619,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "divide-y divide-border/60",
								children: complaints.filter((c) => ["completed", "citizen_verification"].includes(c.status)).length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-12 text-center text-xs text-muted-foreground",
									children: "No complaints awaiting admin verification. All resolutions verified."
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 630,
									columnNumber: 17
								}, this) : complaints.filter((c) => ["completed", "citizen_verification"].includes(c.status)).map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "py-5 flex flex-col md:flex-row md:items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold text-primary font-mono",
													children: c.id
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 640,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
													className: "bg-purple-100 text-purple-800 border-0 text-[10px] font-bold",
													children: "Resolution Submitted"
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 641,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 639,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
												className: "font-bold text-sm text-foreground",
												children: c.description
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 645,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-xs text-muted-foreground",
												children: c.address
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 646,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "font-semibold text-foreground",
													children: ["Officer Remarks: ", c.resolutionDetails || "Work completed on site."]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 648,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-muted-foreground",
													children: [
														"Officer: ",
														c.officer || "Field Unit",
														" • Completed Date: ",
														c.completedOn || "Today"
													]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 649,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 647,
												columnNumber: 25
											}, this),
											c.afterImage && /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2 pt-1",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-xs font-semibold text-foreground",
													children: "Work Proof Photo:"
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 653,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("img", {
													src: c.afterImage,
													alt: "Work Proof",
													className: "h-16 w-24 object-cover rounded-lg border border-border"
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 654,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 652,
												columnNumber: 27
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 638,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-col sm:flex-row gap-2 shrink-0 self-end md:self-center",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											size: "sm",
											onClick: () => handleApproveResolution(c.id),
											className: "bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl h-10 gap-1.5 shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 665,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Approve & Resolve" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 666,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 660,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => {
												setSelectedComplaint(c);
												setShowReworkBox(true);
											},
											className: "text-xs rounded-xl h-10 text-rose-600 border-rose-200 hover:bg-rose-50",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4 mr-1" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 677,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Request Rework" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 678,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 668,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 659,
										columnNumber: 23
									}, this)]
								}, c.id, true, {
									fileName: _jsxFileName$3,
									lineNumber: 637,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 628,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 618,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 617,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "appointments",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-border shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: apptSearchQuery,
									onChange: (e) => setApptSearchQuery(e.target.value),
									placeholder: "Search appointments by ID, Citizen Name, Mobile, or Purpose...",
									className: "h-10 text-xs pl-9 rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 692,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 698,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 691,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
									value: apptStatusFilter,
									onChange: (e) => setApptStatusFilter(e.target.value),
									className: "h-10 rounded-xl border border-input bg-background px-3 text-xs font-semibold",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "all",
											children: "All Appointment Statuses"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 707,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "pending",
											children: "Pending Review"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 708,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "approved",
											children: "Approved"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 709,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "upcoming",
											children: "Upcoming"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 710,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "rescheduled",
											children: "Rescheduled"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 711,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "completed",
											children: "Completed"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 712,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "rejected",
											children: "Rejected"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 713,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 702,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "outline",
									size: "sm",
									onClick: loadAppts,
									className: "h-10 rounded-xl px-3 text-xs font-semibold gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "h-3.5 w-3.5" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 722,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Refresh" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 723,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 716,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 701,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 690,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border shadow-sm overflow-hidden bg-white",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
								className: "border-b border-border/60 bg-muted/20 px-6 py-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
									className: "text-base font-bold text-foreground",
									children: [
										"Citizen MLA Appointment Pipeline (",
										filteredAppointments.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 730,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 729,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "p-0 overflow-x-auto",
								children: filteredAppointments.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-10 text-center text-xs text-muted-foreground",
									children: "No appointment requests found."
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 737,
									columnNumber: 17
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
									className: "w-full text-left text-xs border-collapse",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
										className: "border-b border-border/80 bg-slate-50 text-[11px] font-bold text-muted-foreground uppercase",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
												className: "py-3.5 px-4",
												children: "Appointment ID"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 744,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
												className: "py-3.5 px-4",
												children: "Citizen Name"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 745,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
												className: "py-3.5 px-4",
												children: "Mobile"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 746,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
												className: "py-3.5 px-4",
												children: "Requested Slot"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 747,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
												className: "py-3.5 px-4",
												children: "Purpose"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 748,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
												className: "py-3.5 px-4",
												children: "Status"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 749,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
												className: "py-3.5 px-4 text-right",
												children: "Action"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 750,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 743,
										columnNumber: 21
									}, this) }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 742,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
										className: "divide-y divide-border/60",
										children: filteredAppointments.map((appt) => {
											const statusMeta = APPT_STATUS_CONFIG[appt.status] ?? APPT_STATUS_CONFIG["pending"];
											return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
												className: "hover:bg-slate-50/70 transition-colors",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
														className: "py-3.5 px-4 font-mono font-bold text-primary",
														children: appt.appointmentId
													}, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 758,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
														className: "py-3.5 px-4 font-bold text-foreground",
														children: appt.citizenName
													}, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 761,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
														className: "py-3.5 px-4 font-mono text-muted-foreground",
														children: ["+91 ", maskMobile(appt.mobileNumber)]
													}, void 0, true, {
														fileName: _jsxFileName$3,
														lineNumber: 764,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
														className: "py-3.5 px-4 font-medium text-foreground",
														children: [
															appt.preferredDate,
															" · ",
															appt.preferredTime
														]
													}, void 0, true, {
														fileName: _jsxFileName$3,
														lineNumber: 767,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
														className: "py-3.5 px-4 font-medium text-foreground max-w-[160px] truncate",
														children: appt.purpose
													}, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 770,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
														className: "py-3.5 px-4",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
															className: `text-[10px] border font-bold px-2 py-0.5 ${statusMeta.cls}`,
															children: statusMeta.label
														}, void 0, false, {
															fileName: _jsxFileName$3,
															lineNumber: 774,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 773,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
														className: "py-3.5 px-4 text-right",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
															size: "sm",
															variant: "outline",
															onClick: () => openApptDetails(appt),
															className: "h-8 px-3 rounded-xl text-xs font-bold",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-3.5 w-3.5 mr-1" }, void 0, false, {
																fileName: _jsxFileName$3,
																lineNumber: 785,
																columnNumber: 31
															}, this), "Manage"]
														}, void 0, true, {
															fileName: _jsxFileName$3,
															lineNumber: 779,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 778,
														columnNumber: 27
													}, this)
												]
											}, appt.appointmentId, true, {
												fileName: _jsxFileName$3,
												lineNumber: 757,
												columnNumber: 25
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 753,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 741,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 735,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 728,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 689,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "officers",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border shadow-sm p-6 bg-white space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-bold text-foreground",
								children: "Field Officers Roster Across All Departments"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 802,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
								children: officers.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-2xl border border-border bg-slate-50/60 space-y-2 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-sm text-foreground",
												children: o.name
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 807,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
												variant: "outline",
												className: "text-[10px] font-bold uppercase",
												children: o.departmentName || o.departmentId
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 808,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 806,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-muted-foreground",
											children: [
												"Mobile: +91 ",
												o.mobile,
												" • Ward: ",
												o.wardId?.toUpperCase() || "W-110"
											]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 810,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center justify-between pt-2 border-t border-border/60",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[11px] font-semibold text-amber-700",
												children: ["Active: ", o.activeTasks]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 812,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[11px] font-semibold text-emerald-700",
												children: ["Completed: ", o.completedTasks]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 813,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 811,
											columnNumber: 19
										}, this)
									]
								}, o.userId, true, {
									fileName: _jsxFileName$3,
									lineNumber: 805,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 803,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 801,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 800,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "escalations",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border shadow-sm p-6 bg-white space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-bold text-rose-950 flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flame, { className: "h-4 w-4 text-rose-600" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 826,
										columnNumber: 17
									}, this),
									"Escalated & High SLA Complaints (",
									overdueCount,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 825,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: "Complaints requiring immediate executive administrative attention"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 829,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 824,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "divide-y divide-border/60",
								children: complaints.filter((c) => c.priority === "high" && c.status !== "closed").map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "py-4 flex items-center justify-between gap-3 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-mono font-bold text-rose-700",
												children: c.id
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 837,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
												className: "bg-rose-100 text-rose-800 border-0 text-[10px] font-bold",
												children: "High Priority SLA"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 838,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 836,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-bold text-foreground mt-1",
											children: c.description
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 840,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-muted-foreground",
											children: [
												c.address,
												" • Department: ",
												c.departmentId
											]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 841,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 835,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "sm",
										onClick: () => handleOpenComplaintReview(c),
										className: "bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl h-8",
										children: "Take Action →"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 843,
										columnNumber: 19
									}, this)]
								}, c.id, true, {
									fileName: _jsxFileName$3,
									lineNumber: 834,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 832,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 823,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 822,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 397,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: !!selectedComplaint,
				onOpenChange: (open) => !open && setSelectedComplaint(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-6",
					children: selectedComplaint && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (void 0)(DialogHeader, {
								className: "border-b border-border pb-3",
								children: /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (void 0)(DialogTitle, {
											className: "text-lg font-black text-foreground font-mono",
											children: selectedComplaint.id
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 865,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(Badge, {
											className: `text-xs border-0 font-semibold ${COMPLAINT_STATUS_BADGES[selectedComplaint.status] || "bg-muted"}`,
											children: bi(STATUS_META[selectedComplaint.status]?.label || {
												en: selectedComplaint.status,
												ta: selectedComplaint.status
											})
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 868,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 864,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-xs text-muted-foreground",
										children: ["Registered: ", selectedComplaint.createdAt]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 872,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 863,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 862,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5",
								children: [
									/* @__PURE__ */ (void 0)("h4", {
										className: "font-bold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground",
										children: "Citizen Details"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 878,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "font-bold text-foreground",
										children: ["Mobile: +91 ", maskMobile(selectedComplaint.citizenMobile)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 881,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-muted-foreground flex items-center gap-1",
										children: [/* @__PURE__ */ (void 0)(MapPin, { className: "h-3 w-3 text-primary shrink-0" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 883,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", { children: [
											selectedComplaint.address,
											" (Ward ",
											selectedComplaint.wardId,
											")"
										] }, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 884,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 882,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 877,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "p-4 rounded-2xl bg-muted/30 border border-border text-xs space-y-2",
								children: [
									/* @__PURE__ */ (void 0)("h4", {
										className: "font-bold text-foreground uppercase tracking-wider text-[10px] text-muted-foreground",
										children: "Problem Description"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 890,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "font-semibold text-foreground text-sm",
										children: selectedComplaint.description
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 893,
										columnNumber: 17
									}, this),
									selectedComplaint.beforeImage && /* @__PURE__ */ (void 0)("div", {
										className: "pt-2",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "text-[10px] text-muted-foreground font-bold mb-1",
											children: "Citizen Evidence Photo:"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 896,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("img", {
											src: selectedComplaint.beforeImage,
											alt: "Citizen Evidence",
											className: "h-32 w-48 object-cover rounded-xl border"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 897,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 895,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 889,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "p-5 rounded-2xl bg-indigo-50/80 border border-indigo-300 space-y-4",
								children: [
									/* @__PURE__ */ (void 0)("h4", {
										className: "text-sm font-bold text-indigo-950",
										children: "Assign Department & SLA Priority"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 904,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (void 0)(Label, {
													className: "text-xs font-bold text-indigo-950",
													children: "Department"
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 910,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("select", {
													value: assignDeptId,
													onChange: (e) => setAssignDeptId(e.target.value),
													className: "h-10 w-full rounded-xl border border-indigo-200 bg-white px-3 text-xs font-semibold",
													children: DEPARTMENTS.map((d) => /* @__PURE__ */ (void 0)("option", {
														value: d.id,
														children: [
															bi(d.name),
															" (SLA: ",
															d.slaDays,
															" days)"
														]
													}, d.id, true, {
														fileName: _jsxFileName$3,
														lineNumber: 917,
														columnNumber: 25
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 911,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 909,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (void 0)(Label, {
													className: "text-xs font-bold text-indigo-950",
													children: "Priority Level"
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 925,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("select", {
													value: assignPriority,
													onChange: (e) => setAssignPriority(e.target.value),
													className: "h-10 w-full rounded-xl border border-indigo-200 bg-white px-3 text-xs font-semibold",
													children: [
														/* @__PURE__ */ (void 0)("option", {
															value: "high",
															children: "High Priority"
														}, void 0, false, {
															fileName: _jsxFileName$3,
															lineNumber: 931,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "medium",
															children: "Medium Priority"
														}, void 0, false, {
															fileName: _jsxFileName$3,
															lineNumber: 932,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "low",
															children: "Low Priority"
														}, void 0, false, {
															fileName: _jsxFileName$3,
															lineNumber: 933,
															columnNumber: 23
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 926,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 924,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1.5 sm:col-span-2",
												children: [/* @__PURE__ */ (void 0)(Label, {
													className: "text-xs font-bold text-indigo-950",
													children: "Instructions / Remarks for Department"
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 938,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)(Input, {
													value: assignRemarks,
													onChange: (e) => setAssignRemarks(e.target.value),
													placeholder: "e.g. Please dispatch field crew to repair immediately...",
													className: "h-10 rounded-xl text-xs bg-white"
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 939,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 937,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 908,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)(Button, {
										onClick: handleAssignDepartment,
										disabled: isAssigningDept,
										className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-11 rounded-xl shadow-md gap-2 text-xs",
										children: [/* @__PURE__ */ (void 0)(Send, { className: `h-4 w-4 ${isAssigningDept ? "animate-spin" : ""}` }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 953,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", { children: isAssigningDept ? "Dispatching Task..." : "Assign Department & Dispatch Task" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 954,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 948,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 903,
								columnNumber: 15
							}, this),
							showReworkBox && /* @__PURE__ */ (void 0)("div", {
								className: "p-4 rounded-2xl bg-rose-50 border border-rose-300 space-y-3",
								children: [
									/* @__PURE__ */ (void 0)(Label, {
										className: "text-xs font-bold text-rose-900",
										children: "Explain why rework is required *:"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 961,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)(Textarea, {
										value: reworkRemarks,
										onChange: (e) => setReworkRemarks(e.target.value),
										placeholder: "e.g. Streetlight is still not functioning. Please revisit site...",
										rows: 2,
										className: "text-xs bg-white rounded-xl"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 962,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (void 0)(Button, {
											size: "sm",
											onClick: () => handleRequestRework(selectedComplaint.id),
											disabled: !reworkRemarks.trim(),
											className: "bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold",
											children: "Confirm Rework Request"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 970,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: () => setShowReworkBox(false),
											className: "text-xs",
											children: "Cancel"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 978,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 969,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 960,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-2 pt-2 border-t border-border",
								children: [/* @__PURE__ */ (void 0)(Label, {
									className: "text-xs font-bold",
									children: "Lifecycle Audit Trail:"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 987,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2 pl-2 border-l-2 border-primary/30 max-h-40 overflow-y-auto",
									children: selectedComplaint.timeline.map((entry, idx) => /* @__PURE__ */ (void 0)("div", {
										className: "relative pl-3 text-xs space-y-0.5",
										children: [
											/* @__PURE__ */ (void 0)("div", { className: "absolute -left-[15px] top-1 h-2.5 w-2.5 rounded-full bg-primary" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 991,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "font-bold text-foreground",
													children: bi(entry.label)
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 993,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-[10px] text-muted-foreground",
													children: [
														entry.date,
														" ",
														entry.time
													]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 994,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 992,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-muted-foreground",
												children: bi(entry.note)
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 996,
												columnNumber: 23
											}, this),
											entry.performedBy && /* @__PURE__ */ (void 0)("p", {
												className: "text-[10px] text-primary",
												children: [
													"By: ",
													entry.performedBy,
													" (",
													entry.performedByRole,
													")"
												]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 998,
												columnNumber: 25
											}, this)
										]
									}, idx, true, {
										fileName: _jsxFileName$3,
										lineNumber: 990,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 988,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 986,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 861,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 859,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 858,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: !!selectedAppt,
				onOpenChange: (open) => !open && setSelectedAppt(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-6",
					children: selectedAppt && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
						/* @__PURE__ */ (void 0)(DialogHeader, {
							className: "border-b border-border pb-3",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)(DialogTitle, {
										className: "text-lg font-black text-foreground font-mono",
										children: selectedAppt.appointmentId
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 1017,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)(Badge, {
										className: `text-xs border font-bold ${APPT_STATUS_CONFIG[selectedAppt.status]?.cls}`,
										children: APPT_STATUS_CONFIG[selectedAppt.status]?.label
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 1020,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1016,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-xs text-muted-foreground",
									children: ["Submitted: ", selectedAppt.createdAt.split("T")[0]]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1024,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 1015,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 1014,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs grid grid-cols-2 sm:grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: "Citizen Name:"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 1033,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "font-bold text-foreground mt-0.5",
									children: selectedAppt.citizenName
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 1034,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1032,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: "Mobile:"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 1037,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "font-bold text-foreground mt-0.5",
									children: ["+91 ", maskMobile(selectedAppt.mobileNumber)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1038,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1036,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: "Requested Slot:"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 1041,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "font-bold text-primary mt-0.5",
									children: [
										selectedAppt.preferredDate,
										" at ",
										selectedAppt.preferredTime
									]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1042,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1040,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "col-span-2 sm:col-span-3",
									children: [
										/* @__PURE__ */ (void 0)("span", {
											className: "text-muted-foreground",
											children: "Purpose of Meeting:"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1045,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "font-bold text-foreground mt-0.5",
											children: selectedAppt.purpose
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1046,
											columnNumber: 19
										}, this),
										selectedAppt.description && /* @__PURE__ */ (void 0)("p", {
											className: "text-muted-foreground mt-1 bg-white p-2.5 rounded-xl border border-slate-200",
											children: selectedAppt.description
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1048,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1044,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 1031,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "pt-2 border-t border-border space-y-4",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (void 0)(Button, {
										size: "sm",
										onClick: () => setShowApproveDialog(true),
										className: "bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl h-10 gap-1.5",
										children: [/* @__PURE__ */ (void 0)(Check, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1061,
											columnNumber: 21
										}, this), " Approve & Confirm"]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 1056,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => setShowRescheduleDialog(true),
										className: "text-xs font-bold rounded-xl h-10 border-purple-300 text-purple-700 hover:bg-purple-50",
										children: [/* @__PURE__ */ (void 0)(Clock, { className: "h-4 w-4 mr-1" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1070,
											columnNumber: 21
										}, this), " Reschedule Slot"]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 1064,
										columnNumber: 19
									}, this),
									selectedAppt.status === "approved" && /* @__PURE__ */ (void 0)(Button, {
										size: "sm",
										onClick: () => handleCompleteAppt(selectedAppt.appointmentId),
										className: "bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl h-10",
										children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 mr-1" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1079,
											columnNumber: 23
										}, this), " Mark Meeting Completed"]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 1074,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => setShowRejectApptDialog(true),
										className: "text-xs font-bold rounded-xl h-10 text-rose-600 hover:bg-rose-50",
										children: [/* @__PURE__ */ (void 0)(X, { className: "h-4 w-4 mr-1" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1089,
											columnNumber: 21
										}, this), " Reject Request"]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 1083,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 1055,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 1054,
							columnNumber: 15
						}, this),
						showApproveDialog && /* @__PURE__ */ (void 0)("div", {
							className: "p-5 rounded-3xl bg-emerald-50/80 border border-emerald-300 space-y-4",
							children: [
								/* @__PURE__ */ (void 0)("h4", {
									className: "text-sm font-bold text-emerald-950",
									children: "Confirm Meeting Schedule & Venue"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 1097,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (void 0)(Label, {
												className: "font-bold",
												children: "Confirmed Date"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 1100,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)(Input, {
												type: "date",
												value: confirmDate,
												onChange: (e) => setConfirmDate(e.target.value),
												className: "bg-white rounded-xl h-10"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 1101,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 1099,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (void 0)(Label, {
												className: "font-bold",
												children: "Confirmed Time"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 1109,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)(Input, {
												value: confirmTime,
												onChange: (e) => setConfirmTime(e.target.value),
												className: "bg-white rounded-xl h-10"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 1110,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 1108,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1 sm:col-span-2",
											children: [/* @__PURE__ */ (void 0)(Label, {
												className: "font-bold",
												children: "Meeting Venue"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 1117,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)(Input, {
												value: venue,
												onChange: (e) => setVenue(e.target.value),
												className: "bg-white rounded-xl h-10"
											}, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 1118,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 1116,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1098,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "flex gap-2 pt-2",
									children: [/* @__PURE__ */ (void 0)(Button, {
										onClick: handleApproveAppt,
										className: "bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold h-10 rounded-xl",
										children: "Send Confirmation to Citizen"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 1126,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)(Button, {
										variant: "ghost",
										onClick: () => setShowApproveDialog(false),
										className: "text-xs h-10 rounded-xl",
										children: "Cancel"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 1129,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1125,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 1096,
							columnNumber: 17
						}, this),
						showRescheduleDialog && /* @__PURE__ */ (void 0)("div", {
							className: "p-5 rounded-3xl bg-purple-50/80 border border-purple-300 space-y-4",
							children: [
								/* @__PURE__ */ (void 0)("h4", {
									className: "text-sm font-bold text-purple-950",
									children: "Propose New Slot for Appointment"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 1139,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (void 0)(Label, {
											className: "font-bold",
											children: "New Date"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1142,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)(Input, {
											type: "date",
											value: rescheduleDate,
											onChange: (e) => setRescheduleDate(e.target.value),
											className: "bg-white rounded-xl h-10"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1143,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 1141,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (void 0)(Label, {
											className: "font-bold",
											children: "New Time"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1151,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)(Input, {
											value: rescheduleTime,
											onChange: (e) => setRescheduleTime(e.target.value),
											className: "bg-white rounded-xl h-10"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 1152,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 1150,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1140,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (void 0)(Button, {
										onClick: handleRescheduleAppt,
										className: "bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold h-10 rounded-xl",
										children: "Confirm Reschedule"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 1160,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)(Button, {
										variant: "ghost",
										onClick: () => setShowRescheduleDialog(false),
										className: "text-xs h-10 rounded-xl",
										children: "Cancel"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 1163,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1159,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 1138,
							columnNumber: 17
						}, this),
						showRejectApptDialog && /* @__PURE__ */ (void 0)("div", {
							className: "p-5 rounded-3xl bg-rose-50 border border-rose-300 space-y-4",
							children: [
								/* @__PURE__ */ (void 0)("h4", {
									className: "text-sm font-bold text-rose-950",
									children: "Reason for Rejection"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 1173,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(Textarea, {
									value: apptRejectReason,
									onChange: (e) => setApptRejectReason(e.target.value),
									placeholder: "Specify why appointment cannot be scheduled...",
									rows: 2,
									className: "bg-white rounded-xl text-xs"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 1174,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (void 0)(Button, {
										onClick: handleRejectAppt,
										className: "bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold h-10 rounded-xl",
										children: "Confirm Rejection"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 1182,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)(Button, {
										variant: "ghost",
										onClick: () => setShowRejectApptDialog(false),
										className: "text-xs h-10 rounded-xl",
										children: "Cancel"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 1185,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 1181,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 1172,
							columnNumber: 17
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 1013,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 1011,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 1010,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 352,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.dashboard.department.tsx";
var Route$6 = createFileRoute("/_layout/dashboard/department")({ component: DepartmentAdminDashboard });
function DepartmentAdminDashboard() {
	const { bi, lang } = useI18n();
	const { user } = useAuth();
	const { complaints, fetchFieldOfficers, assignOfficerToComplaint, refreshData } = useWorkflow();
	const [activeDept, setActiveDept] = (0, import_react.useState)(user?.departmentId || "highways");
	const [fieldOfficers, setFieldOfficers] = (0, import_react.useState)([]);
	const [selectedComplaint, setSelectedComplaint] = (0, import_react.useState)(null);
	const [selectedOfficerId, setSelectedOfficerId] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [toastMsg, setToastMsg] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("complaints");
	const deptObj = DEPARTMENTS.find((d) => d.id === activeDept) || DEPARTMENTS[0];
	const loadOfficers = async (deptId) => {
		setLoading(true);
		try {
			const officers = await fetchFieldOfficers(deptId);
			setFieldOfficers(officers);
			if (officers.length > 0 && !selectedOfficerId) setSelectedOfficerId(officers[0].userId);
		} catch (err) {
			console.error("Load officers error:", err);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadOfficers(activeDept);
	}, [activeDept]);
	const deptComplaints = complaints.filter((c) => c.departmentId === activeDept || !c.departmentId && activeDept === "works");
	const filtered = deptComplaints.filter((c) => {
		if (statusFilter !== "all" && c.status !== statusFilter) return false;
		if (!searchQuery.trim()) return true;
		const q = searchQuery.toLowerCase();
		return c.id.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.address.toLowerCase().includes(q) || c.officer && c.officer.toLowerCase().includes(q);
	});
	const totalAssigned = deptComplaints.length;
	const newDepartmentCount = deptComplaints.filter((c) => [
		"new",
		"verified",
		"assigned"
	].includes(c.status) && !c.officer).length;
	const inProgressCount = deptComplaints.filter((c) => c.status === "in_progress").length;
	const resolutionSubmittedCount = deptComplaints.filter((c) => ["completed", "citizen_verification"].includes(c.status)).length;
	const closedCount = deptComplaints.filter((c) => c.status === "closed").length;
	const overdueCount = deptComplaints.filter((c) => c.priority === "high" && c.status !== "closed").length;
	const handleAssignOfficer = async () => {
		if (!selectedComplaint || !selectedOfficerId) return;
		const officer = fieldOfficers.find((o) => o.userId === selectedOfficerId);
		if (!officer) return;
		if ((await assignOfficerToComplaint(selectedComplaint.id, officer.userId, officer.name)).ok) {
			setToastMsg(`Assigned to ${officer.name}! Direct dispatch notification sent.`);
			setTimeout(() => {
				setSelectedComplaint(null);
				setToastMsg("");
				loadOfficers(activeDept);
				refreshData();
			}, 1500);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-3xl border border-border bg-white shadow-soft p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-600 to-indigo-600 text-white text-2xl shrink-0 shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-8 w-8" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 136,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 135,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "text-xl sm:text-2xl font-black text-foreground font-display",
							children: deptObj ? bi(deptObj.name) : "Department Command"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 140,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							className: "bg-teal-100 text-teal-800 border-0 text-xs font-bold",
							children: "Department Administrator"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 143,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 139,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: [
							"Officer in Charge: ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "text-foreground",
								children: user?.name || "Department Admin"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 148,
								columnNumber: 34
							}, this),
							" • SLA Target: ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [deptObj?.slaDays || 7, " Days"] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 148,
								columnNumber: 128
							}, this),
							" • Assigned Department: ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: deptObj?.name.en }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 148,
								columnNumber: 197
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 147,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 138,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 134,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1 w-full md:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						className: "text-[11px] text-muted-foreground font-semibold",
						children: "Switch Department View:"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 155,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
						value: activeDept,
						onChange: (e) => setActiveDept(e.target.value),
						className: "h-10 w-full md:w-64 rounded-xl border border-input bg-background px-3 text-xs font-semibold",
						children: DEPARTMENTS.map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
							value: d.id,
							children: bi(d.name)
						}, d.id, false, {
							fileName: _jsxFileName$2,
							lineNumber: 162,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 156,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 154,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 133,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-4 rounded-2xl bg-slate-50 border border-slate-200",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] font-bold text-slate-700 uppercase",
							children: "Total Department"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 173,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-2xl font-black text-slate-900 mt-1 font-display",
							children: totalAssigned
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 174,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 172,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-4 rounded-2xl bg-blue-50 border border-blue-200",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] font-bold text-blue-800 uppercase",
							children: "Unassigned Tasks"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 178,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-2xl font-black text-blue-950 mt-1 font-display",
							children: newDepartmentCount
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 179,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 177,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-4 rounded-2xl bg-amber-50 border border-amber-200",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] font-bold text-amber-800 uppercase",
							children: "In Progress"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 183,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-2xl font-black text-amber-950 mt-1 font-display",
							children: inProgressCount
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 184,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 182,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-4 rounded-2xl bg-purple-50 border border-purple-200",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] font-bold text-purple-800 uppercase",
							children: "Resolutions Submitted"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 188,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-2xl font-black text-purple-950 mt-1 font-display",
							children: resolutionSubmittedCount
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 189,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 187,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-4 rounded-2xl bg-emerald-50 border border-emerald-200",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] font-bold text-emerald-800 uppercase",
							children: "Verified Closed"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 193,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-2xl font-black text-emerald-950 mt-1 font-display",
							children: closedCount
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 194,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 192,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-4 rounded-2xl bg-rose-50 border border-rose-200",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] font-bold text-rose-800 uppercase flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flame, { className: "h-3 w-3 text-rose-600" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 199,
								columnNumber: 13
							}, this), " High SLA"]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 198,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-2xl font-black text-rose-950 mt-1 font-display",
							children: overdueCount
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 201,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 197,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 171,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				value: activeTab,
				onValueChange: (v) => setActiveTab(v),
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
						className: "bg-muted/70 p-1.5 rounded-2xl h-auto flex flex-wrap gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "complaints",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Briefcase, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 209,
										columnNumber: 13
									}, this),
									"Assigned Complaints (",
									filtered.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 208,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "officers",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 213,
										columnNumber: 13
									}, this),
									"Field Officers & Workloads (",
									fieldOfficers.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 212,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "resolutions",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 217,
										columnNumber: 13
									}, this),
									"Submitted Resolutions (",
									resolutionSubmittedCount,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 216,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 207,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "complaints",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-border shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									placeholder: "Search complaints by ID, description, address, or officer...",
									className: "h-10 text-xs pl-9 rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 226,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 232,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 225,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
									value: statusFilter,
									onChange: (e) => setStatusFilter(e.target.value),
									className: "h-10 rounded-xl px-3 text-xs border border-border bg-white font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "all",
											children: "All Department Tasks"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 241,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "verified",
											children: "Unassigned / Pending Officer"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 242,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "assigned",
											children: "Assigned to Officer"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 243,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "in_progress",
											children: "Work In Progress"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 244,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "completed",
											children: "Work Completed (Pending Verify)"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 245,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "closed",
											children: "Closed & Resolved"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 246,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 236,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 235,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 224,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-3",
							children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
								className: "rounded-2xl p-12 text-center text-sm text-muted-foreground font-medium bg-white",
								children: "No complaints found in this department queue matching the filter."
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 253,
								columnNumber: 15
							}, this) : filtered.map((c) => {
								const cat = CATEGORIES.find((x) => x.id === c.categoryId);
								const ward = WARDS.find((w) => w.id === c.wardId);
								const isUnassigned = !c.officer;
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
									className: `rounded-2xl border transition-all overflow-hidden bg-white ${isUnassigned ? "border-amber-300 bg-amber-50/20 shadow-sm" : "border-border hover:border-teal-400 shadow-sm"}`,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
										className: "p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-2 flex-1 min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-2 flex-wrap",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-xs font-mono font-bold text-primary",
															children: c.id
														}, void 0, false, {
															fileName: _jsxFileName$2,
															lineNumber: 274,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
															className: "bg-muted text-muted-foreground border-0 text-[10px] font-bold",
															children: [
																"Ward ",
																ward?.number || 110,
																" (",
																ward ? bi(ward.name) : "Thousand Lights",
																")"
															]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 275,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
															className: `text-[10px] font-bold border-0 ${c.priority === "high" ? "bg-rose-100 text-rose-800" : "bg-blue-100 text-blue-800"}`,
															children: ["Priority: ", c.priority.toUpperCase()]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 278,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
															variant: "outline",
															className: "text-[10px] uppercase font-bold",
															children: c.status.replace("_", " ")
														}, void 0, false, {
															fileName: _jsxFileName$2,
															lineNumber: 287,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 273,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
													className: "text-base font-bold text-foreground",
													children: [
														cat ? bi(cat.name) : c.categoryId,
														": ",
														c.description
													]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 292,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center gap-3 text-xs text-muted-foreground flex-wrap",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3 w-3 text-primary shrink-0" }, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 298,
																columnNumber: 29
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: c.address }, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 299,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 297,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
															fileName: _jsxFileName$2,
															lineNumber: 301,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
															"Field Officer:",
															" ",
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
																className: c.officer ? "text-foreground font-bold" : "text-amber-700 font-bold",
																children: c.officer ? `🦺 ${c.officer}` : "⚠️ Unassigned — Action Required"
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 304,
																columnNumber: 29
															}, this)
														] }, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 302,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
															fileName: _jsxFileName$2,
															lineNumber: 308,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Registered: ", c.createdAt] }, void 0, true, {
															fileName: _jsxFileName$2,
															lineNumber: 309,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 296,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 272,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												size: "sm",
												onClick: () => {
													setSelectedComplaint(c);
													if (fieldOfficers.length > 0 && !selectedOfficerId) setSelectedOfficerId(fieldOfficers[0].userId);
												},
												className: `font-bold text-xs rounded-xl h-10 gap-1.5 shadow-sm text-white ${isUnassigned ? "bg-amber-600 hover:bg-amber-700" : "bg-teal-600 hover:bg-teal-700"}`,
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-3.5 w-3.5" }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 328,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: isUnassigned ? "Assign Field Officer →" : "Reassign Officer" }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 329,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 314,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 313,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 271,
										columnNumber: 21
									}, this)
								}, c.id, false, {
									fileName: _jsxFileName$2,
									lineNumber: 263,
									columnNumber: 19
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 251,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 223,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "officers",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border shadow-sm p-6 bg-white space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-base font-bold text-foreground",
									children: [
										"Field Officers in ",
										deptObj ? bi(deptObj.name) : "Department",
										" (",
										fieldOfficers.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 345,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: "Real-time live workload and active duty roster"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 348,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 344,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => loadOfficers(activeDept),
									className: "rounded-xl text-xs font-semibold gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `h-3 w-3 ${loading ? "animate-spin" : ""}` }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 356,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Refresh Roster" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 357,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 350,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 343,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: fieldOfficers.map((officer) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-5 rounded-2xl border border-border bg-slate-50/50 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "h-10 w-10 rounded-xl bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-sm",
												children: "🦺"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 369,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
												className: "font-bold text-sm text-foreground",
												children: officer.name
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 373,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-muted-foreground",
												children: [
													"+91 ",
													officer.mobile,
													" • ",
													officer.email
												]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 374,
												columnNumber: 25
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 372,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 368,
											columnNumber: 21
										}, this), officer.activeTasks === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											className: "bg-emerald-100 text-emerald-800 border-0 text-[10px] font-bold",
											children: "Available"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 378,
											columnNumber: 23
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											className: "bg-amber-100 text-amber-800 border-0 text-[10px] font-bold",
											children: [officer.activeTasks, " Active Tasks"]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 382,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 367,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "grid grid-cols-3 gap-2 pt-2 text-center border-t border-border/60 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "p-2 rounded-xl bg-white border border-border",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[10px] text-muted-foreground",
													children: "Ward"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 390,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "font-bold text-foreground uppercase",
													children: officer.wardId || "w-110"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 391,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 389,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "p-2 rounded-xl bg-white border border-border",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[10px] text-muted-foreground",
													children: "Active"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 394,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "font-bold text-amber-600",
													children: officer.activeTasks
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 395,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 393,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "p-2 rounded-xl bg-white border border-border",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[10px] text-muted-foreground",
													children: "Completed"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 398,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "font-bold text-emerald-600",
													children: officer.completedTasks
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 399,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 397,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 388,
										columnNumber: 19
									}, this)]
								}, officer.userId, true, {
									fileName: _jsxFileName$2,
									lineNumber: 363,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 361,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 342,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 341,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "resolutions",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border shadow-sm p-6 bg-white space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-bold text-foreground",
								children: "Field Officer Completion Reports"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 412,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: "Complaints where work is completed and awaiting admin verification"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 413,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 411,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "divide-y divide-border/60",
								children: deptComplaints.filter((c) => ["completed", "citizen_verification"].includes(c.status)).length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground py-8 text-center",
									children: "No pending resolutions currently awaiting review."
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 418,
									columnNumber: 17
								}, this) : deptComplaints.filter((c) => ["completed", "citizen_verification"].includes(c.status)).map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold text-primary",
													children: c.id
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 426,
													columnNumber: 27
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
													className: "bg-purple-100 text-purple-800 border-0 text-[10px]",
													children: "Work Completed"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 427,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 425,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "font-semibold text-foreground",
												children: c.description
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 429,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-muted-foreground",
												children: ["Officer Remarks: ", c.resolutionDetails || "Work completed on site."]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 430,
												columnNumber: 25
											}, this),
											c.completedOn && /* @__PURE__ */ (void 0)("p", {
												className: "text-muted-foreground",
												children: ["Completed Date: ", c.completedOn]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 431,
												columnNumber: 43
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 424,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
										variant: "outline",
										className: "bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0",
										children: "Forwarded to Constituency Admin"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 433,
										columnNumber: 23
									}, this)]
								}, c.id, true, {
									fileName: _jsxFileName$2,
									lineNumber: 423,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 416,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 410,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 409,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 206,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: !!selectedComplaint,
				onOpenChange: (open) => !open && setSelectedComplaint(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-lg rounded-3xl p-6 sm:p-8",
					children: selectedComplaint && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (void 0)(DialogHeader, { children: /* @__PURE__ */ (void 0)(DialogTitle, {
								className: "text-lg font-bold font-display",
								children: ["Assign Field Officer: ", selectedComplaint.id]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 450,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 449,
								columnNumber: 15
							}, this),
							toastMsg && /* @__PURE__ */ (void 0)("div", {
								className: "p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2",
								children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 457,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", { children: toastMsg }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 458,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 456,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "p-4 rounded-2xl bg-muted/30 border border-border text-xs space-y-1.5",
								children: [/* @__PURE__ */ (void 0)("p", {
									className: "font-semibold text-foreground",
									children: selectedComplaint.description
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 463,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-muted-foreground",
									children: [selectedComplaint.address, " (Ward 110)"]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 464,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 462,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (void 0)(Label, {
									className: "text-xs font-bold",
									children: "Select Eligible Field Officer (Workload Aware):"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 468,
									columnNumber: 17
								}, this), fieldOfficers.length === 0 ? /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-rose-600 font-semibold p-3 bg-rose-50 rounded-xl",
									children: [
										"No active field officers found in ",
										deptObj?.name.en,
										". Create an officer in Super Admin Console."
									]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 470,
									columnNumber: 19
								}, this) : /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2 max-h-60 overflow-y-auto pr-1",
									children: fieldOfficers.map((officer) => /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setSelectedOfficerId(officer.userId),
										className: `w-full flex items-center justify-between p-3.5 rounded-2xl border text-xs font-semibold text-left transition-all ${selectedOfficerId === officer.userId ? "border-teal-500 bg-teal-50 text-teal-900 ring-2 ring-teal-200" : "border-border hover:bg-muted/40"}`,
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-xl",
												children: "🦺"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 487,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
												className: "font-bold text-foreground",
												children: officer.name
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 489,
												columnNumber: 29
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[10px] text-muted-foreground",
												children: [
													"Ward ",
													officer.wardId?.toUpperCase() || "W-110",
													" • Active Tasks: ",
													officer.activeTasks
												]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 490,
												columnNumber: 29
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 488,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 486,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)(Badge, {
												className: `text-[9px] font-bold border-0 ${officer.activeTasks === 0 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`,
												children: officer.activeTasks === 0 ? "Available" : `${officer.activeTasks} Active`
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 496,
												columnNumber: 27
											}, this), selectedOfficerId === officer.userId && /* @__PURE__ */ (void 0)(Check, { className: "h-4 w-4 text-teal-600" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 505,
												columnNumber: 68
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 495,
											columnNumber: 25
										}, this)]
									}, officer.userId, true, {
										fileName: _jsxFileName$2,
										lineNumber: 476,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 474,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 467,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(Button, {
								onClick: handleAssignOfficer,
								disabled: !selectedOfficerId || fieldOfficers.length === 0,
								className: "w-full bg-teal-600 hover:bg-teal-700 text-white font-bold h-12 rounded-xl shadow-md gap-1.5 text-xs",
								children: [/* @__PURE__ */ (void 0)(Send, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 518,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Confirm Assignment & Notify Officer" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 519,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 513,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 448,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 446,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 445,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 131,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.dashboard.officer.tsx";
var Route$5 = createFileRoute("/_layout/dashboard/officer")({ component: FieldOfficerDashboard });
function FieldOfficerDashboard() {
	const { bi, lang } = useI18n();
	const { user } = useAuth();
	const { complaints, acceptAssignmentOnComplaint, startWorkOnComplaint, updateProgressOnComplaint, submitCompletionOnComplaint, refreshData } = useWorkflow();
	const [selectedTask, setSelectedTask] = (0, import_react.useState)(null);
	const [activeModalAction, setActiveModalAction] = (0, import_react.useState)("view");
	const [progressRemarks, setProgressRemarks] = (0, import_react.useState)("");
	const [progressPhoto, setProgressPhoto] = (0, import_react.useState)("");
	const [completionRemarks, setCompletionRemarks] = (0, import_react.useState)("Resolution completed. Site inspected, repaired, and cleaned.");
	const [completionDate, setCompletionDate] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
	const [afterPhotoUrl, setAfterPhotoUrl] = (0, import_react.useState)("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=60");
	const [toastMsg, setToastMsg] = (0, import_react.useState)("");
	const [loadingAction, setLoadingAction] = (0, import_react.useState)(false);
	const [activeFilterTab, setActiveFilterTab] = (0, import_react.useState)("all");
	const officerTasks = complaints.filter((c) => {
		if (user?.name && c.officer && c.officer.toLowerCase().includes(user.name.toLowerCase())) return true;
		if (user?.departmentId && c.departmentId === user.departmentId) return true;
		return [
			"verified",
			"assigned",
			"ASSIGNED",
			"accepted",
			"ACCEPTED",
			"in_progress",
			"IN_PROGRESS",
			"completed",
			"COMPLETED",
			"citizen_verification",
			"closed"
		].includes(c.status);
	});
	const activeTasks = officerTasks.filter((c) => [
		"assigned",
		"ASSIGNED",
		"accepted",
		"ACCEPTED",
		"in_progress",
		"IN_PROGRESS",
		"verified"
	].includes(c.status));
	const inProgressTasks = officerTasks.filter((c) => ["in_progress", "IN_PROGRESS"].includes(c.status));
	const completedTasks = officerTasks.filter((c) => [
		"completed",
		"COMPLETED",
		"closed",
		"resolved",
		"RESOLVED",
		"citizen_verification"
	].includes(c.status));
	const displayedTasks = officerTasks.filter((c) => {
		if (activeFilterTab === "active") return [
			"assigned",
			"ASSIGNED",
			"accepted",
			"ACCEPTED",
			"verified"
		].includes(c.status);
		if (activeFilterTab === "in_progress") return ["in_progress", "IN_PROGRESS"].includes(c.status);
		if (activeFilterTab === "completed") return [
			"completed",
			"COMPLETED",
			"closed",
			"resolved",
			"RESOLVED",
			"citizen_verification"
		].includes(c.status);
		return true;
	});
	const handleAcceptTask = async (id) => {
		setLoadingAction(true);
		try {
			const res = await acceptAssignmentOnComplaint(id, "Field officer accepted assignment and scheduled inspection.");
			if (res.ok) {
				setToastMsg(lang === "ta" ? "பணி ஏற்றுக்கொள்ளப்பட்டது!" : "Complaint Accepted! Status updated to Accepted.");
				setTimeout(() => {
					setToastMsg("");
					refreshData();
				}, 1200);
			} else {
				setToastMsg(`Error: ${res.message || "Failed to accept task"}`);
				setTimeout(() => setToastMsg(""), 3500);
			}
		} catch (err) {
			setToastMsg(`Error: ${err?.message || "Failed to accept task"}`);
			setTimeout(() => setToastMsg(""), 3500);
		} finally {
			setLoadingAction(false);
		}
	};
	const handleStartWork = async (id) => {
		setLoadingAction(true);
		try {
			const res = await startWorkOnComplaint(id, "Field officer arrived at site and commenced resolution.");
			if (res.ok) {
				setToastMsg(lang === "ta" ? "பணி தொடங்கியது! நிலை மாற்றப்பட்டது." : "Work Started! Status updated to In Progress.");
				setTimeout(() => {
					setToastMsg("");
					refreshData();
				}, 1200);
			} else {
				setToastMsg(`Error: ${res.message || "Failed to start work"}`);
				setTimeout(() => setToastMsg(""), 3500);
			}
		} catch (err) {
			setToastMsg(`Error: ${err?.message || "Failed to start work"}`);
			setTimeout(() => setToastMsg(""), 3500);
		} finally {
			setLoadingAction(false);
		}
	};
	const handleUpdateProgress = async (id) => {
		if (!progressRemarks.trim()) return;
		setLoadingAction(true);
		const res = await updateProgressOnComplaint(id, progressRemarks, progressPhoto ? [progressPhoto] : []);
		setLoadingAction(false);
		if (res.ok) {
			setToastMsg(lang === "ta" ? "முன்னேற்றக் குறிப்பு பதிவு செய்யப்பட்டது!" : "Progress update recorded successfully!");
			setTimeout(() => {
				setProgressRemarks("");
				setProgressPhoto("");
				setActiveModalAction("view");
				setToastMsg("");
				refreshData();
			}, 1200);
		}
	};
	const handleSubmitCompletion = async (id) => {
		if (!completionRemarks.trim()) return;
		setLoadingAction(true);
		const res = await submitCompletionOnComplaint(id, completionRemarks, afterPhotoUrl);
		setLoadingAction(false);
		if (res.ok) {
			setToastMsg(lang === "ta" ? "பணி முடிவு சமர்ப்பிக்கப்பட்டது! நிர்வாகி சரிபார்ப்புக்கு அனுப்பப்பட்டது." : "Work completion submitted! Sent to Constituency Admin for resolution verification.");
			setTimeout(() => {
				setSelectedTask(null);
				setToastMsg("");
				refreshData();
			}, 1500);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-4xl px-4 py-6 sm:py-10 space-y-6",
		children: [
			toastMsg && /* @__PURE__ */ (void 0)("div", {
				className: "p-3.5 rounded-2xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-2 shadow-md",
				children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4.5 w-4.5 shrink-0" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 180,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("span", { children: toastMsg }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 181,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 179,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-3xl border border-border bg-white shadow-soft p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white text-2xl shrink-0 shadow-md",
						children: "🦺"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 188,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "text-lg sm:text-xl font-black text-foreground font-display",
							children: "Field Officer Terminal"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 193,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							className: "bg-amber-100 text-amber-800 border-0 text-[10px] font-bold",
							children: "Mobile Field Unit"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 196,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 192,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: [
							"Officer: ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "text-foreground",
								children: user?.name || "Kumar S."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 201,
								columnNumber: 24
							}, this),
							" • Ward: ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: user?.wardId?.toUpperCase() || "W-110" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 201,
								columnNumber: 104
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 200,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 191,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 187,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 text-xs w-full sm:w-auto justify-between sm:justify-start",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 font-bold text-amber-800",
						children: [activeTasks.length, " Active Tasks"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 207,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 font-bold text-emerald-800",
						children: [completedTasks.length, " Completed"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 210,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 206,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 186,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-base font-bold text-foreground",
							children: lang === "ta" ? "களப் பணிகள்" : "Field Tasks & Work Orders"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 220,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							variant: "secondary",
							className: "text-xs font-bold",
							children: displayedTasks.length
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 223,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 219,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1.5 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								size: "sm",
								variant: activeFilterTab === "all" ? "default" : "outline",
								onClick: () => setActiveFilterTab("all"),
								className: "text-xs h-8 rounded-lg font-bold",
								children: [
									"All (",
									officerTasks.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 227,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								size: "sm",
								variant: activeFilterTab === "active" ? "default" : "outline",
								onClick: () => setActiveFilterTab("active"),
								className: "text-xs h-8 rounded-lg font-bold",
								children: [
									"Ready / Assigned (",
									activeTasks.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 235,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								size: "sm",
								variant: activeFilterTab === "in_progress" ? "default" : "outline",
								onClick: () => setActiveFilterTab("in_progress"),
								className: "text-xs h-8 rounded-lg font-bold",
								children: [
									"In Progress (",
									inProgressTasks.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 243,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								size: "sm",
								variant: activeFilterTab === "completed" ? "default" : "outline",
								onClick: () => setActiveFilterTab("completed"),
								className: "text-xs h-8 rounded-lg font-bold",
								children: [
									"Completed (",
									completedTasks.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 251,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => refreshData(),
								className: "text-xs font-semibold text-muted-foreground h-8 px-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: "h-3 w-3 mr-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 265,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Refresh" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 266,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 259,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 226,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 218,
					columnNumber: 9
				}, this), displayedTasks.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					className: "rounded-3xl border border-dashed border-border p-12 text-center bg-muted/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-10 w-10 text-muted-foreground/40 mx-auto mb-3" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 273,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-base font-bold text-foreground",
							children: lang === "ta" ? "செயலில் உள்ள கள பணிகள் எதுவும் இல்லை" : "No tasks found in this view"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 274,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted-foreground mt-1 max-w-sm mx-auto",
							children: lang === "ta" ? "துறை நிர்வாகியால் புதிய பணிகள் ஒதுக்கப்பட்டவுடன் இங்கு காட்டப்படும்." : "Switch to 'All' or assign tasks from the Department Admin console."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 277,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 272,
					columnNumber: 11
				}, this) : displayedTasks.map((c) => {
					const cat = CATEGORIES.find((x) => x.id === c.categoryId);
					const ward = WARDS.find((w) => w.id === c.wardId);
					c.status === "assigned" || c.status;
					const isInProgress = c.status === "in_progress";
					const isResolutionSubmitted = c.status === "completed" || c.status === "citizen_verification";
					const isClosed = c.status === "closed";
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: `rounded-2xl border-2 shadow-sm transition-all overflow-hidden bg-white ${isInProgress ? "border-amber-400 bg-amber-50/10" : isResolutionSubmitted ? "border-purple-300 bg-purple-50/20" : isClosed ? "border-emerald-300" : "border-border"}`,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
							className: "p-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2 flex-wrap",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-xs font-mono font-bold text-primary",
													children: c.id
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 309,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
													className: "bg-muted text-muted-foreground border-0 text-[10px] font-bold",
													children: [
														"Ward ",
														ward?.number || 110,
														" (",
														ward ? bi(ward.name) : "Thousand Lights",
														")"
													]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 310,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
													className: `text-[10px] font-bold border-0 ${c.priority === "high" ? "bg-rose-100 text-rose-800" : "bg-blue-100 text-blue-800"}`,
													children: [c.priority.toUpperCase(), " PRIORITY"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 313,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 308,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
											className: "text-base font-bold text-foreground",
											children: [
												cat ? bi(cat.name) : c.categoryId,
												": ",
												c.description
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 324,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 307,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
										className: `text-xs font-bold border-0 shrink-0 ${isInProgress ? "bg-amber-500 text-white" : isResolutionSubmitted ? "bg-purple-600 text-white" : isClosed ? "bg-emerald-600 text-white" : "bg-blue-600 text-white"}`,
										children: isInProgress ? "In Progress" : isResolutionSubmitted ? "Resolution Submitted" : isClosed ? "Resolved & Verified" : "Assigned to You"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 329,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 306,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-xs text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3.5 w-3.5 text-primary shrink-0" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 352,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: c.address }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 353,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 351,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 355,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Assigned: ", c.createdAt] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 356,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 357,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Due: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "3 Days SLA" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 358,
											columnNumber: 32
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 358,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 350,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2 flex-wrap pt-3 border-t border-border/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
											href: `https://maps.google.com/?q=${c.lat},${c.lng}`,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-foreground transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 369,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "GPS Directions" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 370,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 363,
											columnNumber: 21
										}, this),
										["assigned", "ASSIGNED"].includes(c.status) && /* @__PURE__ */ (void 0)(Button, {
											size: "sm",
											disabled: loadingAction,
											onClick: () => handleAcceptTask(c.id),
											className: "bg-primary hover:bg-primary/90 text-white font-bold text-xs h-9 rounded-xl gap-1.5 shadow-md",
											children: [/* @__PURE__ */ (void 0)(Check, { className: "h-3.5 w-3.5" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 381,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Accept Task →" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 382,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 375,
											columnNumber: 23
										}, this),
										[
											"accepted",
											"ACCEPTED",
											"verified"
										].includes(c.status) && /* @__PURE__ */ (void 0)(Button, {
											size: "sm",
											disabled: loadingAction,
											onClick: () => handleStartWork(c.id),
											className: "bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs h-9 rounded-xl gap-1.5 shadow-md",
											children: [/* @__PURE__ */ (void 0)(Play, { className: "h-3.5 w-3.5" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 394,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Start Work →" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 395,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 388,
											columnNumber: 23
										}, this),
										["in_progress", "IN_PROGRESS"].includes(c.status) && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => {
												setSelectedTask(c);
												setActiveModalAction("progress");
											},
											className: "text-xs h-9 rounded-xl font-semibold gap-1",
											children: "+ Update Progress"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 402,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)(Button, {
											size: "sm",
											onClick: () => {
												setSelectedTask(c);
												setActiveModalAction("complete");
											},
											className: "bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs h-9 rounded-xl gap-1.5 shadow-md",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-3.5 w-3.5" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 422,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Submit Completion →" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 423,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 414,
											columnNumber: 25
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 401,
											columnNumber: 23
										}, this),
										isResolutionSubmitted && /* @__PURE__ */ (void 0)(Badge, {
											variant: "outline",
											className: "bg-purple-50 text-purple-700 border-purple-200 text-xs py-1.5 px-3",
											children: "✓ Completion Submitted (Pending Admin Verification)"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 430,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: () => {
												setSelectedTask(c);
												setActiveModalAction("view");
											},
											className: "text-xs h-9 rounded-xl ml-auto",
											children: "View Details →"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 435,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 362,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 305,
							columnNumber: 17
						}, this)
					}, c.id, false, {
						fileName: _jsxFileName$1,
						lineNumber: 293,
						columnNumber: 15
					}, this);
				})]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 217,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: !!selectedTask,
				onOpenChange: (open) => !open && setSelectedTask(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-lg rounded-3xl p-6 sm:p-8",
					children: selectedTask && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (void 0)(DialogHeader, { children: /* @__PURE__ */ (void 0)(DialogTitle, {
								className: "text-lg font-bold font-display",
								children: activeModalAction === "complete" ? `Submit Work Completion: ${selectedTask.id}` : activeModalAction === "progress" ? `Add Progress Update: ${selectedTask.id}` : `Complaint Details: ${selectedTask.id}`
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 460,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 459,
								columnNumber: 15
							}, this),
							toastMsg && /* @__PURE__ */ (void 0)("div", {
								className: "p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2",
								children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 471,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", { children: toastMsg }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 472,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 470,
								columnNumber: 17
							}, this),
							activeModalAction === "complete" && /* @__PURE__ */ (void 0)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "p-3.5 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-900 space-y-1",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "font-bold",
											children: "Administrative Accountability Notice:"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 480,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "leading-relaxed",
											children: [
												"Submitting completion changes status to ",
												/* @__PURE__ */ (void 0)("strong", { children: "Resolution Submitted" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 482,
													columnNumber: 63
												}, this),
												". The Constituency Admin will inspect remarks and evidence to verify and resolve."
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 481,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 479,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (void 0)(Label, {
											className: "text-xs font-bold",
											children: "Supporting Evidence / Resolution Photo:"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 487,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-center space-y-2",
											children: [/* @__PURE__ */ (void 0)("img", {
												src: afterPhotoUrl,
												alt: "Work Evidence",
												className: "h-36 w-full object-cover rounded-xl shadow-sm"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 489,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[11px] text-emerald-700 font-semibold",
												children: "✓ Work proof attached"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 490,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 488,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 486,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (void 0)(Label, {
											className: "text-xs font-bold",
											children: "Work Completion Remarks *:"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 495,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(Textarea, {
											value: completionRemarks,
											onChange: (e) => setCompletionRemarks(e.target.value),
											rows: 2,
											className: "text-xs rounded-xl",
											placeholder: "Describe the exact repair or resolution performed..."
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 496,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 494,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)(Button, {
										onClick: () => handleSubmitCompletion(selectedTask.id),
										disabled: loadingAction || !completionRemarks.trim(),
										className: "w-full bg-purple-600 hover:bg-purple-700 text-white font-bold h-12 rounded-xl shadow-md gap-2 text-xs",
										children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 510,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Submit Completion for Admin Verification" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 511,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 505,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 478,
								columnNumber: 17
							}, this),
							activeModalAction === "progress" && /* @__PURE__ */ (void 0)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (void 0)(Label, {
										className: "text-xs font-bold",
										children: "Field Progress Remarks *:"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 520,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)(Textarea, {
										value: progressRemarks,
										onChange: (e) => setProgressRemarks(e.target.value),
										placeholder: "e.g. Parts delivered to site, repair crew active...",
										rows: 3,
										className: "text-xs rounded-xl"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 521,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 519,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)(Button, {
									onClick: () => handleUpdateProgress(selectedTask.id),
									disabled: loadingAction || !progressRemarks.trim(),
									className: "w-full bg-primary hover:bg-primary/90 text-white font-bold h-11 rounded-xl text-xs",
									children: "Save Progress Note"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 529,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 518,
								columnNumber: 17
							}, this),
							activeModalAction === "view" && /* @__PURE__ */ (void 0)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "p-3.5 rounded-2xl bg-muted/30 text-xs space-y-1 border border-border",
									children: [/* @__PURE__ */ (void 0)("p", {
										className: "font-bold text-foreground",
										children: selectedTask.description
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 543,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-muted-foreground",
										children: selectedTask.address
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 544,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 542,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (void 0)(Label, {
										className: "text-xs font-bold",
										children: "Lifecycle Timeline History:"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 548,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-2 pl-2 border-l-2 border-primary/30 max-h-48 overflow-y-auto",
										children: selectedTask.timeline.map((entry, idx) => /* @__PURE__ */ (void 0)("div", {
											className: "relative pl-3 text-xs space-y-0.5",
											children: [
												/* @__PURE__ */ (void 0)("div", { className: "absolute -left-[15px] top-1 h-2.5 w-2.5 rounded-full bg-primary" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 552,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "font-bold text-foreground",
														children: bi(entry.label)
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 554,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[10px] text-muted-foreground",
														children: [
															entry.date,
															" ",
															entry.time
														]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 555,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 553,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "text-muted-foreground",
													children: bi(entry.note)
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 557,
													columnNumber: 27
												}, this),
												entry.performedBy && /* @__PURE__ */ (void 0)("p", {
													className: "text-[10px] text-primary",
													children: [
														"By: ",
														entry.performedBy,
														" (",
														entry.performedByRole,
														")"
													]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 559,
													columnNumber: 29
												}, this)
											]
										}, idx, true, {
											fileName: _jsxFileName$1,
											lineNumber: 551,
											columnNumber: 25
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 549,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 547,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 541,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 458,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 456,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 455,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 177,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.dashboard.superadmin.tsx";
var Route$4 = createFileRoute("/_layout/dashboard/superadmin")({ component: SuperAdminDashboard });
var ROLE_PERMISSIONS = {
	citizen: [
		"Create complaint",
		"View own complaints",
		"Track live complaint timeline",
		"Verify completed resolutions",
		"Book MLA appointments",
		"Receive status notifications"
	],
	field_officer: [
		"View assigned work",
		"GPS navigation to site",
		"Start work (update status)",
		"Add progress updates & notes",
		"Upload after photos & complete work"
	],
	department_admin: [
		"View department complaints",
		"Assign field officers & teams",
		"Update SLA & priority levels",
		"Review completed work evidence",
		"Department performance monitoring"
	],
	constituency_admin: [
		"View all constituency complaints",
		"Verify new citizen reports",
		"Allocate department & priority",
		"Reject & mark duplicate complaints",
		"Constituency ward SLA oversight",
		"Manage announcements & appointments"
	],
	content_admin: [
		"Publish announcements & notices",
		"Manage government schemes",
		"Update project development progress"
	],
	super_admin: [
		"Manage all users & accounts",
		"Configure roles & permissions",
		"Manage departments & SLA policies",
		"Audit entire system event logs",
		"Platform configuration & backups"
	]
};
function SuperAdminDashboard() {
	const { bi, lang } = useI18n();
	const { user } = useAuth();
	const { complaints, fetchAdminUsers, createAdminUser, updateAdminUser, fetchAuditLogs, fetchAppointments, refreshData } = useWorkflow();
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [adminUsers, setAdminUsers] = (0, import_react.useState)([]);
	const [auditLogs, setAuditLogs] = (0, import_react.useState)([]);
	const [appointmentsCount, setAppointmentsCount] = (0, import_react.useState)(0);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [roleFilter, setRoleFilter] = (0, import_react.useState)("all");
	const [showCreateModal, setShowCreateModal] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		mobile: "",
		role: "field_officer",
		departmentId: "highways",
		wardId: "w-110",
		password: ""
	});
	const [formError, setFormError] = (0, import_react.useState)("");
	const [formSuccess, setFormSuccess] = (0, import_react.useState)("");
	const [actionSuccess, setActionSuccess] = (0, import_react.useState)("");
	const loadData = async () => {
		setLoading(true);
		try {
			const [uList, aLogs, appts] = await Promise.all([
				fetchAdminUsers(),
				fetchAuditLogs(),
				fetchAppointments()
			]);
			setAdminUsers(uList);
			setAuditLogs(aLogs);
			setAppointmentsCount(appts.length);
		} catch (err) {
			console.error("Super Admin loadData error:", err);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const constituencyAdminsCount = adminUsers.filter((u) => u.role === "constituency_admin").length;
	const deptAdminsCount = adminUsers.filter((u) => u.role === "department_admin").length;
	const fieldOfficersCount = adminUsers.filter((u) => u.role === "field_officer").length;
	const totalDepartments = DEPARTMENTS.length;
	const totalComplaints = complaints.length;
	complaints.filter((c) => [
		"new",
		"verified",
		"assigned",
		"in_progress"
	].includes(c.status)).length;
	const resolvedComplaints = complaints.filter((c) => [
		"completed",
		"closed",
		"citizen_verification"
	].includes(c.status)).length;
	const overdueComplaints = complaints.filter((c) => c.priority === "high" && c.status !== "closed").length;
	const handleCreateUser = async (e) => {
		e.preventDefault();
		setFormError("");
		setFormSuccess("");
		if (!formData.name || !formData.email || !formData.mobile) {
			setFormError(lang === "ta" ? "அனைத்து விவரங்களையும் நிரப்பவும்" : "Please fill in all required fields");
			return;
		}
		const deptObj = DEPARTMENTS.find((d) => d.id === formData.departmentId);
		const res = await createAdminUser({
			name: formData.name,
			email: formData.email,
			mobile: formData.mobile,
			role: formData.role,
			departmentId: ["department_admin", "field_officer"].includes(formData.role) ? formData.departmentId : void 0,
			departmentName: ["department_admin", "field_officer"].includes(formData.role) ? deptObj?.name.en : void 0,
			wardId: formData.role === "field_officer" ? formData.wardId : void 0,
			password: formData.password || "Aram@2026"
		});
		if (res.ok) {
			setFormSuccess(lang === "ta" ? "பயனர் வெற்றிகரமாக உருவாக்கப்பட்டது!" : "Admin user created successfully!");
			setTimeout(() => {
				setShowCreateModal(false);
				setFormSuccess("");
				setFormData({
					name: "",
					email: "",
					mobile: "",
					role: "field_officer",
					departmentId: "highways",
					wardId: "w-110",
					password: ""
				});
				loadData();
			}, 1e3);
		} else setFormError(res.message || "Failed to create user");
	};
	const handleToggleUserStatus = async (userItem) => {
		if ((await updateAdminUser(userItem.userId, { active: !userItem.active })).ok) {
			setActionSuccess(`${userItem.name} ${!userItem.active ? "activated" : "deactivated"}.`);
			setTimeout(() => setActionSuccess(""), 3e3);
			loadData();
		}
	};
	const filteredUsers = adminUsers.filter((u) => {
		if (roleFilter !== "all" && u.role !== roleFilter) return false;
		if (!searchQuery.trim()) return true;
		const q = searchQuery.toLowerCase();
		return u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.mobile.includes(q) || u.departmentName && u.departmentName.toLowerCase().includes(q);
	});
	const filteredAudit = auditLogs.filter((a) => {
		if (!searchQuery.trim()) return true;
		const q = searchQuery.toLowerCase();
		return a.entityId && a.entityId.toLowerCase().includes(q) || a.action.toLowerCase().includes(q) || a.userName && a.userName.toLowerCase().includes(q) || a.remarks && a.remarks.toLowerCase().includes(q);
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-3xl border border-border bg-white shadow-soft p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-700 text-white text-2xl shrink-0 shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-8 w-8" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 240,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 239,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "text-xl sm:text-2xl font-black text-foreground font-display",
							children: "NAMMA KURAL Super Admin Command"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 244,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							className: "bg-purple-100 text-purple-800 border-0 text-xs font-bold",
							children: "Platform Root Access"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 247,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 243,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: [
							"Logged in as: ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "text-foreground",
								children: user?.name || "System Super Administrator"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 252,
								columnNumber: 29
							}, this),
							" • Central Governance Engine"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 251,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 242,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 238,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "sm",
						onClick: loadData,
						disabled: loading,
						className: "rounded-xl font-semibold gap-1.5 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 265,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "புதுப்பி" : "Refresh" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 266,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 258,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						onClick: () => setShowCreateModal(true),
						className: "rounded-xl font-bold gap-1.5 text-xs bg-primary hover:bg-primary/90 text-white shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 274,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "புதிய நிர்வாகி சேர்" : "Create Admin User" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 275,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 269,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 257,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 237,
				columnNumber: 7
			}, this),
			actionSuccess && /* @__PURE__ */ (void 0)("div", {
				className: "p-3.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2",
				children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 shrink-0" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 282,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("span", { children: actionSuccess }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 283,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 281,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "rounded-2xl border-border bg-white shadow-sm p-4 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wider",
							children: "Constituency Admins"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 290,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-2xl font-black text-foreground",
								children: constituencyAdminsCount
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 292,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "outline",
								className: "text-[10px] bg-blue-50 text-blue-700",
								children: "Command"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 293,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 291,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 289,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "rounded-2xl border-border bg-white shadow-sm p-4 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wider",
							children: "Department Admins"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 298,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-2xl font-black text-foreground",
								children: deptAdminsCount
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 300,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "outline",
								className: "text-[10px] bg-indigo-50 text-indigo-700",
								children: [totalDepartments, " Depts"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 301,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 299,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 297,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "rounded-2xl border-border bg-white shadow-sm p-4 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wider",
							children: "Field Officers"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 306,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-2xl font-black text-foreground",
								children: fieldOfficersCount
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 308,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "outline",
								className: "text-[10px] bg-teal-50 text-teal-700",
								children: "Active Duty"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 309,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 307,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 305,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "rounded-2xl border-border bg-white shadow-sm p-4 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wider",
							children: "Total Complaints"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 314,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-2xl font-black text-foreground",
								children: totalComplaints
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 316,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-semibold text-emerald-600",
								children: [resolvedComplaints, " Resolved"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 317,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 315,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 313,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "rounded-2xl border-border bg-white shadow-sm p-4 space-y-1 col-span-2 sm:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wider",
							children: "MLA Appointments"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 322,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-2xl font-black text-foreground",
								children: appointmentsCount
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 324,
								columnNumber: 13
							}, this), overdueComplaints > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								className: "bg-rose-100 text-rose-800 border-0 text-[10px]",
								children: [overdueComplaints, " Overdue"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 326,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "outline",
								className: "text-[10px] bg-emerald-50 text-emerald-700",
								children: "Optimal"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 328,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 323,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 321,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 288,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				value: activeTab,
				onValueChange: setActiveTab,
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
						className: "bg-muted/70 p-1.5 rounded-2xl h-auto flex flex-wrap gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "overview",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 338,
										columnNumber: 13
									}, this),
									"Admin User Management (",
									adminUsers.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 337,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "audit",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(History, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 342,
										columnNumber: 13
									}, this),
									"Live Audit Trail (",
									auditLogs.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 341,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "departments",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 346,
									columnNumber: 13
								}, this), "Departments & SLA Policy"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 345,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "permissions",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyRound, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 350,
									columnNumber: 13
								}, this), "Role Hierarchy & Permissions"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 349,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 336,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "overview",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-border shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									placeholder: "Search administrators by Name, Email, Mobile or Department...",
									className: "h-10 text-xs pl-9 rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 359,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 365,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 358,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
									value: roleFilter,
									onChange: (e) => setRoleFilter(e.target.value),
									className: "h-10 rounded-xl px-3 text-xs border border-border bg-white font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "all",
											children: "All Roles"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 374,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "constituency_admin",
											children: "Constituency Admin"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 375,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "department_admin",
											children: "Department Admin"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 376,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "field_officer",
											children: "Field Officer"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 377,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "content_admin",
											children: "Content Admin"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 378,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "super_admin",
											children: "Super Admin"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 379,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 369,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 368,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 357,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border shadow-sm overflow-hidden bg-white",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
								className: "bg-muted/20 border-b border-border/60 px-6 py-4 flex flex-row items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
									className: "text-sm font-bold text-foreground",
									children: [
										"Administrative Accounts Directory (",
										filteredUsers.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 386,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs text-muted-foreground",
									children: "Managed via Role-Based Security"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 389,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 385,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "divide-y divide-border/60",
								children: filteredUsers.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-12 text-center text-sm text-muted-foreground font-medium",
									children: "No admin accounts found matching criteria."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 394,
									columnNumber: 17
								}, this) : filteredUsers.map((u) => {
									const roleMeta = ROLE_META[u.role];
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "p-4 sm:p-5 hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1 flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2 flex-wrap",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "font-bold text-sm text-foreground",
														children: u.name
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 407,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
														className: `border-0 text-[10px] uppercase font-bold ${u.role === "super_admin" ? "bg-purple-100 text-purple-800" : u.role === "constituency_admin" ? "bg-blue-100 text-blue-800" : u.role === "department_admin" ? "bg-indigo-100 text-indigo-800" : "bg-teal-100 text-teal-800"}`,
														children: roleMeta ? bi(roleMeta.label) : u.role.replace("_", " ")
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 408,
														columnNumber: 27
													}, this),
													u.active ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
														variant: "outline",
														className: "text-[10px] text-emerald-700 bg-emerald-50 border-emerald-200",
														children: "Active"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 422,
														columnNumber: 29
													}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
														variant: "outline",
														className: "text-[10px] text-rose-700 bg-rose-50 border-rose-200",
														children: "Inactive"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 426,
														columnNumber: 29
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 406,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Email: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
														className: "text-foreground",
														children: u.email
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 433,
														columnNumber: 40
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 433,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Mobile: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
														className: "text-foreground",
														children: ["+91 ", u.mobile]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 434,
														columnNumber: 41
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 434,
														columnNumber: 27
													}, this),
													u.departmentName && /* @__PURE__ */ (void 0)("span", { children: ["Department: ", /* @__PURE__ */ (void 0)("strong", {
														className: "text-foreground",
														children: u.departmentName
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 436,
														columnNumber: 47
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 436,
														columnNumber: 29
													}, this),
													u.wardId && /* @__PURE__ */ (void 0)("span", { children: ["Ward: ", /* @__PURE__ */ (void 0)("strong", {
														className: "text-foreground",
														children: u.wardId.toUpperCase()
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 439,
														columnNumber: 41
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 439,
														columnNumber: 29
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 432,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 405,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2 self-start md:self-auto",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												size: "sm",
												variant: "outline",
												onClick: () => handleToggleUserStatus(u),
												className: `rounded-xl text-xs font-semibold gap-1 ${u.active ? "text-rose-600 hover:bg-rose-50 hover:text-rose-700" : "text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"}`,
												children: [u.active ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserX, { className: "h-3.5 w-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 455,
													columnNumber: 39
												}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCheck, { className: "h-3.5 w-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 455,
													columnNumber: 75
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: u.active ? "Deactivate" : "Activate" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 456,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 445,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 444,
											columnNumber: 23
										}, this)]
									}, u.userId, true, {
										fileName: _jsxFileName,
										lineNumber: 401,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 392,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 384,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 356,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "audit",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between bg-white p-4 rounded-2xl border border-border shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									placeholder: "Search audit trail by Complaint ID, User Name, or Action...",
									className: "h-10 text-xs pl-9 rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 471,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 477,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 470,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 469,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border shadow-sm overflow-hidden bg-white",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
								className: "bg-muted/20 border-b border-border/60 px-6 py-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
									className: "text-sm font-bold text-foreground",
									children: [
										"Chronological Governance & Decision Audit Records (",
										filteredAudit.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 483,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 482,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "divide-y divide-border/60",
								children: filteredAudit.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-12 text-center text-sm text-muted-foreground font-medium",
									children: "No audit trail records logged yet."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 489,
									columnNumber: 17
								}, this) : filteredAudit.map((rec, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 sm:p-5 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1 flex-1 min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2 flex-wrap",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "font-mono font-bold text-primary",
														children: rec.entityId || rec.complaintId || "SYSTEM"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 497,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
														className: "bg-muted text-muted-foreground border-0 text-[10px] font-bold",
														children: rec.action
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 498,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "text-[10px] text-muted-foreground",
														children: new Date(rec.timestamp).toLocaleString()
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 501,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 496,
												columnNumber: 23
											}, this),
											rec.remarks && /* @__PURE__ */ (void 0)("p", {
												className: "font-medium text-foreground",
												children: rec.remarks
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 505,
												columnNumber: 39
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-muted-foreground",
												children: [
													"Performed by: ",
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
														className: "text-foreground",
														children: rec.userName || rec.performedBy || "System"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 507,
														columnNumber: 39
													}, this),
													" (Role: ",
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "uppercase text-[10px] font-semibold",
														children: String(rec.role).replace("_", " ")
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 507,
														columnNumber: 137
													}, this),
													")"
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 506,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 495,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
										variant: "outline",
										className: "text-[10px] text-emerald-700 bg-emerald-50 shrink-0 self-start sm:self-auto",
										children: "Immutable Log"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 510,
										columnNumber: 21
									}, this)]
								}, rec.id || rec.logId || idx, true, {
									fileName: _jsxFileName,
									lineNumber: 494,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 487,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 481,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 468,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "departments",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
								className: "rounded-3xl border-border shadow-sm p-6 space-y-4 bg-white",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-base font-bold text-foreground",
									children: "Constituency Administrative Wards"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 524,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2.5",
									children: WARDS.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "p-3.5 rounded-2xl bg-muted/30 flex items-center justify-between text-xs border border-border/50",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-bold text-foreground",
											children: [
												"Ward ",
												w.number,
												" — ",
												bi(w.name)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 529,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-muted-foreground mt-0.5",
											children: ["Population: ", w.population.toLocaleString()]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 530,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 528,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: "secondary",
											className: "text-[10px] font-bold",
											children: "Active Ward"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 532,
											columnNumber: 21
										}, this)]
									}, w.id, true, {
										fileName: _jsxFileName,
										lineNumber: 527,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 525,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 523,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
								className: "rounded-3xl border-border shadow-sm p-6 space-y-4 bg-white",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-base font-bold text-foreground",
									children: "Department SLA Performance Standards"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 539,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2.5",
									children: DEPARTMENTS.map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "p-3.5 rounded-2xl bg-muted/30 flex items-center justify-between text-xs border border-border/50",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-bold text-foreground",
											children: bi(d.name)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 543,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											className: "bg-teal-100 text-teal-800 border-0 text-[10px] font-bold",
											children: [
												"Standard SLA: ",
												d.slaDays,
												" Days"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 544,
											columnNumber: 21
										}, this)]
									}, d.id, true, {
										fileName: _jsxFileName,
										lineNumber: 542,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 540,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 538,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 522,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 521,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "permissions",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border shadow-sm p-6 space-y-6 bg-white",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-base font-bold text-foreground",
									children: "Hierarchical Role-Based Access Control (RBAC) Matrix"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 558,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: "Super Admin → Constituency Admin → Department Admin → Field Officer"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 559,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 557,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
								children: Object.entries(ROLE_PERMISSIONS).map(([role, perms]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-2xl border border-border bg-slate-50/50 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between border-b border-border/60 pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-bold text-xs text-foreground uppercase tracking-wider",
											children: role.replace("_", " ")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 567,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: "outline",
											className: "text-[10px] font-bold",
											children: [perms.length, " Permissions"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 570,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 566,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
										className: "space-y-2 text-xs text-muted-foreground",
										children: perms.map((p, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-600 shrink-0" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 577,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: p }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 578,
												columnNumber: 25
											}, this)]
										}, idx, true, {
											fileName: _jsxFileName,
											lineNumber: 576,
											columnNumber: 23
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 574,
										columnNumber: 19
									}, this)]
								}, role, true, {
									fileName: _jsxFileName,
									lineNumber: 565,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 563,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 556,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 555,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 335,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: showCreateModal,
				onOpenChange: setShowCreateModal,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-lg rounded-3xl p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, {
							className: "space-y-1 pb-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
								className: "text-xl font-bold font-display",
								children: lang === "ta" ? "புதிய நிர்வாகியைச் சேர்" : "Create Administrative User"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 593,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 592,
							columnNumber: 11
						}, this),
						formError && /* @__PURE__ */ (void 0)("div", {
							className: "p-3 rounded-xl bg-destructive/10 text-destructive text-xs font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "h-4 w-4 shrink-0" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 600,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", { children: formError }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 601,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 599,
							columnNumber: 13
						}, this),
						formSuccess && /* @__PURE__ */ (void 0)("div", {
							className: "p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 shrink-0" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 607,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", { children: formSuccess }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 608,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 606,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							onSubmit: handleCreateUser,
							className: "space-y-4 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										className: "text-xs font-bold",
										children: lang === "ta" ? "முழுப் பெயர் *" : "Full Name *"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 614,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: formData.name,
										onChange: (e) => setFormData({
											...formData,
											name: e.target.value
										}),
										placeholder: "e.g. S. Narayanan",
										className: "h-10 rounded-xl text-xs"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 615,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 613,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
											className: "text-xs font-bold",
											children: lang === "ta" ? "மின்னஞ்சல் *" : "Official Email *"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 625,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
											type: "email",
											value: formData.email,
											onChange: (e) => setFormData({
												...formData,
												email: e.target.value
											}),
											placeholder: "officer@aram.gov.in",
											className: "h-10 rounded-xl text-xs"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 626,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 624,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
											className: "text-xs font-bold",
											children: lang === "ta" ? "மொபைல் எண் *" : "Official Mobile *"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 636,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
											value: formData.mobile,
											onChange: (e) => setFormData({
												...formData,
												mobile: e.target.value.replace(/\D/g, "").slice(0, 10)
											}),
											placeholder: "9876543210",
											className: "h-10 rounded-xl text-xs"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 637,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 635,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 623,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										className: "text-xs font-bold",
										children: lang === "ta" ? "நிர்வாக பங்கு *" : "Administrative Role *"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 647,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
										value: formData.role,
										onChange: (e) => setFormData({
											...formData,
											role: e.target.value
										}),
										className: "h-10 w-full rounded-xl px-3 text-xs border border-border bg-white font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
												value: "constituency_admin",
												children: "Constituency Admin"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 653,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
												value: "department_admin",
												children: "Department Admin"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 654,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
												value: "field_officer",
												children: "Field Officer"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 655,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
												value: "content_admin",
												children: "Content Admin"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 656,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
												value: "super_admin",
												children: "Super Admin"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 657,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 648,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 646,
									columnNumber: 13
								}, this),
								["department_admin", "field_officer"].includes(formData.role) && /* @__PURE__ */ (void 0)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (void 0)(Label, {
										className: "text-xs font-bold",
										children: lang === "ta" ? "துறை *" : "Department *"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 663,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("select", {
										value: formData.departmentId,
										onChange: (e) => setFormData({
											...formData,
											departmentId: e.target.value
										}),
										className: "h-10 w-full rounded-xl px-3 text-xs border border-border bg-white font-medium",
										children: DEPARTMENTS.map((d) => /* @__PURE__ */ (void 0)("option", {
											value: d.id,
											children: d.name.en
										}, d.id, false, {
											fileName: _jsxFileName,
											lineNumber: 670,
											columnNumber: 21
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 664,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 662,
									columnNumber: 15
								}, this),
								formData.role === "field_officer" && /* @__PURE__ */ (void 0)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (void 0)(Label, {
										className: "text-xs font-bold",
										children: lang === "ta" ? "வார்டு / பகுதி *" : "Assigned Ward *"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 680,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("select", {
										value: formData.wardId,
										onChange: (e) => setFormData({
											...formData,
											wardId: e.target.value
										}),
										className: "h-10 w-full rounded-xl px-3 text-xs border border-border bg-white font-medium",
										children: WARDS.map((w) => /* @__PURE__ */ (void 0)("option", {
											value: w.id,
											children: [
												"Ward ",
												w.number,
												" — ",
												w.name.en
											]
										}, w.id, true, {
											fileName: _jsxFileName,
											lineNumber: 687,
											columnNumber: 21
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 681,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 679,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
											className: "text-xs font-bold",
											children: lang === "ta" ? "கடவுச்சொல்" : "Initial Password"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 696,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
											type: "password",
											value: formData.password,
											onChange: (e) => setFormData({
												...formData,
												password: e.target.value
											}),
											placeholder: "Default: Aram@2026",
											className: "h-10 rounded-xl text-xs"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 697,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[10px] text-muted-foreground",
											children: "Leave empty to use default password (Aram@2026)."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 704,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 695,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-end gap-2 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										type: "button",
										variant: "outline",
										onClick: () => setShowCreateModal(false),
										className: "h-10 rounded-xl text-xs font-semibold",
										children: "Cancel"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 708,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										type: "submit",
										className: "h-10 rounded-xl text-xs font-bold bg-primary hover:bg-primary/90 text-white",
										children: "Create Account"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 716,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 707,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 612,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 591,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 590,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 235,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$3 = () => import("./api.auth.login-CKgBfAyd.mjs");
var Route$3 = createFileRoute("/api/auth/login")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./api.complaints._id-OUyQkZzr.mjs");
var Route$2 = createFileRoute("/api/complaints/$id")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./api.auth.citizen.otp.request-BhZSMjJZ.mjs");
var Route$1 = createFileRoute("/api/auth/citizen/otp/request")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./api.auth.citizen.otp.verify-B3Nuj9TA.mjs");
var Route = createFileRoute("/api/auth/citizen/otp/verify")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var LayoutRoute = Route$29.update({
	id: "/_layout",
	getParentRoute: () => Route$30
});
var LayoutIndexRoute = Route$28.update({
	id: "/",
	path: "/",
	getParentRoute: () => LayoutRoute
});
var LayoutAppointmentsRoute = Route$27.update({
	id: "/appointments",
	path: "/appointments",
	getParentRoute: () => LayoutRoute
});
var LayoutDashboardRoute = Route$26.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => LayoutRoute
});
var LayoutDevelopmentRoute = Route$25.update({
	id: "/development",
	path: "/development",
	getParentRoute: () => LayoutRoute
});
var LayoutLoginRoute = Route$24.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => LayoutRoute
});
var LayoutNotificationsRoute = Route$23.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => LayoutRoute
});
var LayoutSchemesRoute = Route$22.update({
	id: "/schemes",
	path: "/schemes",
	getParentRoute: () => LayoutRoute
});
var LayoutTransparencyRoute = Route$21.update({
	id: "/transparency",
	path: "/transparency",
	getParentRoute: () => LayoutRoute
});
var ApiAppointmentsRoute = Route$20.update({
	id: "/api/appointments",
	path: "/api/appointments",
	getParentRoute: () => Route$30
});
var ApiComplaintsRoute = Route$19.update({
	id: "/api/complaints",
	path: "/api/complaints",
	getParentRoute: () => Route$30
});
var ApiDbTestRoute = Route$18.update({
	id: "/api/db-test",
	path: "/api/db-test",
	getParentRoute: () => Route$30
});
var ApiNotificationsRoute = Route$17.update({
	id: "/api/notifications",
	path: "/api/notifications",
	getParentRoute: () => Route$30
});
var ApiStatsRoute = Route$16.update({
	id: "/api/stats",
	path: "/api/stats",
	getParentRoute: () => Route$30
});
var LayoutComplaintsRegisterRoute = Route$15.update({
	id: "/complaints/register",
	path: "/complaints/register",
	getParentRoute: () => LayoutRoute
});
var LayoutComplaintsTrackRoute = Route$14.update({
	id: "/complaints/track",
	path: "/complaints/track",
	getParentRoute: () => LayoutRoute
});
var LayoutConsoleConstituencyRoute = Route$13.update({
	id: "/console/constituency",
	path: "/console/constituency",
	getParentRoute: () => LayoutRoute
});
var LayoutConsoleContentRoute = Route$12.update({
	id: "/console/content",
	path: "/console/content",
	getParentRoute: () => LayoutRoute
});
var LayoutConsoleDepartmentRoute = Route$11.update({
	id: "/console/department",
	path: "/console/department",
	getParentRoute: () => LayoutRoute
});
var LayoutConsoleOfficerRoute = Route$10.update({
	id: "/console/officer",
	path: "/console/officer",
	getParentRoute: () => LayoutRoute
});
var LayoutConsoleSuperRoute = Route$9.update({
	id: "/console/super",
	path: "/console/super",
	getParentRoute: () => LayoutRoute
});
var LayoutDashboardCitizenRoute = Route$8.update({
	id: "/citizen",
	path: "/citizen",
	getParentRoute: () => LayoutDashboardRoute
});
var LayoutDashboardConstituencyRoute = Route$7.update({
	id: "/constituency",
	path: "/constituency",
	getParentRoute: () => LayoutDashboardRoute
});
var LayoutDashboardDepartmentRoute = Route$6.update({
	id: "/department",
	path: "/department",
	getParentRoute: () => LayoutDashboardRoute
});
var LayoutDashboardOfficerRoute = Route$5.update({
	id: "/officer",
	path: "/officer",
	getParentRoute: () => LayoutDashboardRoute
});
var LayoutDashboardSuperadminRoute = Route$4.update({
	id: "/superadmin",
	path: "/superadmin",
	getParentRoute: () => LayoutDashboardRoute
});
var ApiAuthLoginRoute = Route$3.update({
	id: "/api/auth/login",
	path: "/api/auth/login",
	getParentRoute: () => Route$30
});
var ApiComplaintsIdRoute = Route$2.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ApiComplaintsRoute
});
var ApiAuthCitizenOtpRequestRoute = Route$1.update({
	id: "/api/auth/citizen/otp/request",
	path: "/api/auth/citizen/otp/request",
	getParentRoute: () => Route$30
});
var ApiAuthCitizenOtpVerifyRoute = Route.update({
	id: "/api/auth/citizen/otp/verify",
	path: "/api/auth/citizen/otp/verify",
	getParentRoute: () => Route$30
});
var LayoutDashboardRouteChildren = {
	LayoutDashboardCitizenRoute,
	LayoutDashboardConstituencyRoute,
	LayoutDashboardDepartmentRoute,
	LayoutDashboardOfficerRoute,
	LayoutDashboardSuperadminRoute
};
var LayoutRouteChildren = {
	LayoutAppointmentsRoute,
	LayoutDashboardRoute: LayoutDashboardRoute._addFileChildren(LayoutDashboardRouteChildren),
	LayoutDevelopmentRoute,
	LayoutLoginRoute,
	LayoutNotificationsRoute,
	LayoutSchemesRoute,
	LayoutTransparencyRoute,
	LayoutIndexRoute,
	LayoutComplaintsRegisterRoute,
	LayoutComplaintsTrackRoute,
	LayoutConsoleConstituencyRoute,
	LayoutConsoleContentRoute,
	LayoutConsoleDepartmentRoute,
	LayoutConsoleOfficerRoute,
	LayoutConsoleSuperRoute
};
var LayoutRouteWithChildren = LayoutRoute._addFileChildren(LayoutRouteChildren);
var ApiComplaintsRouteChildren = { ApiComplaintsIdRoute };
var rootRouteChildren = {
	LayoutRoute: LayoutRouteWithChildren,
	ApiAppointmentsRoute,
	ApiComplaintsRoute: ApiComplaintsRoute._addFileChildren(ApiComplaintsRouteChildren),
	ApiDbTestRoute,
	ApiNotificationsRoute,
	ApiStatsRoute,
	ApiAuthLoginRoute,
	ApiAuthCitizenOtpRequestRoute,
	ApiAuthCitizenOtpVerifyRoute
};
var routeTree = Route$30._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { SuperAdminDashboard as a, FieldOfficerDashboard as i, ConstituencyAdminDashboard as n, getRouter as o, DepartmentAdminDashboard as r, router_exports as s, CitizenDashboardPage as t };
