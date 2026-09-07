import { c as WARDS, f as PUBLIC_STATS, r as DEMO_DATA_NOTICE } from "./_ssr/ssr.mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { at as Clock, bt as Building2, d as TrendingUp, lt as CircleCheck, m as Star, ut as CircleAlert } from "./_libs/lucide-react.mjs";
import { h as Badge, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
import { t as Progress } from "./_ssr/progress-CDAM6lov.mjs";
import { a as Bar, c as Legend, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.transparency-Bye-qT_z.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.transparency.tsx?tsr-split=component";
var DEPT_PERF = [
	{
		dept: "Highways",
		sla: 7,
		avg: 6.1,
		satisfaction: 4.2
	},
	{
		dept: "Water",
		sla: 5,
		avg: 4.8,
		satisfaction: 4.1
	},
	{
		dept: "Drainage",
		sla: 6,
		avg: 7.2,
		satisfaction: 3.8
	},
	{
		dept: "Electricity",
		sla: 3,
		avg: 2.9,
		satisfaction: 4.5
	},
	{
		dept: "Sanitation",
		sla: 2,
		avg: 1.8,
		satisfaction: 4.6
	},
	{
		dept: "Health",
		sla: 4,
		avg: 3.5,
		satisfaction: 4.3
	},
	{
		dept: "Works",
		sla: 10,
		avg: 11.2,
		satisfaction: 3.7
	}
];
function StatCard({ icon: Icon, value, label, sub, color }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-2xl bg-white border border-border shadow-soft p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: `flex h-10 w-10 items-center justify-center rounded-xl mb-3 ${color}`,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-5 w-5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-2xl font-bold text-foreground",
				children: value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-sm font-medium text-foreground mt-0.5",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 7
			}, this),
			sub && /* @__PURE__ */ (void 0)("div", {
				className: "text-xs text-muted-foreground mt-0.5",
				children: sub
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 15
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 10
	}, this);
}
function TransparencyPage() {
	const { t, bi } = useI18n();
	const resolutionRate = Math.round(PUBLIC_STATS.resolved / PUBLIC_STATS.total * 100);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl font-bold text-foreground mb-1",
					children: t("transparency.title")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
						variant: "secondary",
						className: "text-xs gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "h-3 w-3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 13
						}, this), bi(DEMO_DATA_NOTICE)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, {
						icon: CircleAlert,
						value: PUBLIC_STATS.total.toLocaleString(),
						label: t("transparency.total"),
						color: "bg-muted text-muted-foreground"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, {
						icon: CircleCheck,
						value: PUBLIC_STATS.resolved.toLocaleString(),
						label: t("home.live.resolved"),
						color: "bg-green-100 text-green-700"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, {
						icon: Clock,
						value: PUBLIC_STATS.inProgress,
						label: t("home.live.progress"),
						color: "bg-blue-100 text-blue-700"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, {
						icon: TrendingUp,
						value: `${PUBLIC_STATS.avgResolutionDays}d`,
						label: t("transparency.avgTime"),
						color: "bg-amber-100 text-amber-700"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, {
						icon: Star,
						value: `${PUBLIC_STATS.satisfaction}/5`,
						label: t("transparency.satisfaction"),
						color: "bg-violet-100 text-violet-700"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, {
						icon: Building2,
						value: PUBLIC_STATS.projects,
						label: t("transparency.projects"),
						sub: `${PUBLIC_STATS.completedProjects} ${t("transparency.completed")}`,
						color: "bg-primary/10 text-primary"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-2xl bg-white border border-border shadow-soft p-6 mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-semibold text-foreground",
							children: "Resolution Rate"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-2xl font-bold text-green-600",
							children: [resolutionRate, "%"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Progress, {
						value: resolutionRate,
						className: "h-3 rounded-full"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex justify-between text-xs text-muted-foreground mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [PUBLIC_STATS.resolved.toLocaleString(), " resolved"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [(PUBLIC_STATS.total - PUBLIC_STATS.resolved).toLocaleString(), " pending"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-2xl bg-white border border-border shadow-soft p-6 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-semibold text-foreground mb-4",
					children: "Complaint Trends (Last 6 Months)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart, {
							data: PUBLIC_STATS.monthly,
							margin: { left: -20 },
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "var(--color-border)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
									dataKey: "month",
									tick: { fontSize: 11 }
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, { tick: { fontSize: 11 } }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 117,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { contentStyle: {
									borderRadius: "12px",
									fontSize: "12px"
								} }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Legend, { wrapperStyle: { fontSize: "12px" } }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 124,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bar, {
									dataKey: "received",
									name: "Received",
									fill: "var(--color-status-new)",
									radius: [
										4,
										4,
										0,
										0
									]
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bar, {
									dataKey: "resolved",
									name: "Resolved",
									fill: "var(--color-status-resolved)",
									radius: [
										4,
										4,
										0,
										0
									]
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 128,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 109,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 108,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 106,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-2xl bg-white border border-border shadow-soft p-6 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-semibold text-foreground mb-4",
					children: "Department Performance"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
							className: "border-b border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "text-left py-2 text-muted-foreground font-medium text-xs",
									children: "Department"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 141,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "text-right py-2 text-muted-foreground font-medium text-xs",
									children: "SLA (days)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 142,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "text-right py-2 text-muted-foreground font-medium text-xs",
									children: "Avg Resolution"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "text-right py-2 text-muted-foreground font-medium text-xs",
									children: "Rating"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 144,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "text-left py-2 text-muted-foreground font-medium text-xs",
									children: "Performance"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 145,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: DEPT_PERF.map((d) => {
							const withinSla = d.avg <= d.sla;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
								className: "border-b border-border/50 hover:bg-muted/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "py-3 font-medium",
										children: d.dept
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "py-3 text-right text-muted-foreground",
										children: d.sla
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 153,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: `py-3 text-right font-semibold ${withinSla ? "text-green-600" : "text-red-600"}`,
										children: d.avg
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 154,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "py-3 text-right",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "flex items-center justify-end gap-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "h-3 w-3 text-amber-400 fill-amber-400" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 157,
												columnNumber: 25
											}, this), d.satisfaction]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 156,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 155,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "py-3 pl-4 w-32",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "h-1.5 bg-muted rounded-full overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: `h-full rounded-full ${withinSla ? "bg-green-500" : "bg-red-500"}`,
												style: { width: `${Math.min(100, d.sla / d.avg * 100)}%` }
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 162,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 161,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 160,
										columnNumber: 21
									}, this)
								]
							}, d.dept, true, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 22
							}, this);
						}) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 137,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-2xl bg-white border border-border shadow-soft p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-semibold text-foreground mb-4",
					children: "Ward Overview"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: WARDS.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-xl border border-border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-semibold text-sm",
									children: ["Ward ", w.number]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 180,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
									variant: "secondary",
									className: "text-xs",
									children: bi(w.name)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 181,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 179,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-xs text-muted-foreground",
								children: ["Population: ", w.population.toLocaleString()]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 183,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: [
									bi({
										en: "Centre",
										ta: "மையம்"
									}),
									": ",
									w.center.lat.toFixed(4),
									", ",
									w.center.lng.toFixed(4)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 184,
								columnNumber: 15
							}, this)
						]
					}, w.id, true, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 27
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 177,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 175,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 10
	}, this);
}
//#endregion
export { TransparencyPage as component };
