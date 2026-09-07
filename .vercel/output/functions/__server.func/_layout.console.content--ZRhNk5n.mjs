import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { F as MapPin, P as Megaphone, Q as FileText, S as Plus, lt as CircleCheck, p as Trash2, vt as Calendar, x as RefreshCw, xt as Briefcase } from "./_libs/lucide-react.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./_ssr/tabs-DGON80NW.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./_ssr/dialog-YuB87Z4_.mjs";
import { a as CardContent, c as Input, h as Badge, i as Card, l as Button, m as useWorkflow, n as Label, r as Textarea, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.console.content--ZRhNk5n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.console.content.tsx?tsr-split=component";
function ContentAdminConsole() {
	const { t, bi, lang } = useI18n();
	const { fetchAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement, fetchSchemes, createScheme, fetchDevelopmentWorks, createDevelopmentWork, updateDevelopmentWork, deleteDevelopmentWork } = useWorkflow();
	const [announcements, setAnnouncements] = (0, import_react.useState)([]);
	const [schemes, setSchemes] = (0, import_react.useState)([]);
	const [works, setWorks] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [toastMsg, setToastMsg] = (0, import_react.useState)("");
	const [showAnnModal, setShowAnnModal] = (0, import_react.useState)(false);
	const [annTitleEn, setAnnTitleEn] = (0, import_react.useState)("");
	const [annTitleTa, setAnnTitleTa] = (0, import_react.useState)("");
	const [annDescEn, setAnnDescEn] = (0, import_react.useState)("");
	const [annDescTa, setAnnDescTa] = (0, import_react.useState)("");
	const [annDate, setAnnDate] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
	const [annTime, setAnnTime] = (0, import_react.useState)("10:00 AM");
	const [annLocation, setAnnLocation] = (0, import_react.useState)("Community Center, Ward 110");
	const [annCategory, setAnnCategory] = (0, import_react.useState)("health");
	const [showSchemeModal, setShowSchemeModal] = (0, import_react.useState)(false);
	const [schNameEn, setSchNameEn] = (0, import_react.useState)("");
	const [schNameTa, setSchNameTa] = (0, import_react.useState)("");
	const [schDept, setSchDept] = (0, import_react.useState)("works");
	const [schDescEn, setSchDescEn] = (0, import_react.useState)("");
	const [schDescTa, setSchDescTa] = (0, import_react.useState)("");
	const [schBenefits, setSchBenefits] = (0, import_react.useState)("");
	const [schEligibility, setSchEligibility] = (0, import_react.useState)("");
	const [schDocs, setSchDocs] = (0, import_react.useState)("");
	const [showWorkModal, setShowWorkModal] = (0, import_react.useState)(false);
	const [workNameEn, setWorkNameEn] = (0, import_react.useState)("");
	const [workNameTa, setWorkNameTa] = (0, import_react.useState)("");
	const [workLocation, setWorkLocation] = (0, import_react.useState)("");
	const [workDept, setWorkDept] = (0, import_react.useState)("highways");
	const [workDescEn, setWorkDescEn] = (0, import_react.useState)("");
	const [workProgress, setWorkProgress] = (0, import_react.useState)(10);
	const [workExpected, setWorkExpected] = (0, import_react.useState)("2026-11-30");
	const loadAll = async () => {
		setLoading(true);
		try {
			const [aList, sList, wList] = await Promise.all([
				fetchAnnouncements(false),
				fetchSchemes(),
				fetchDevelopmentWorks()
			]);
			setAnnouncements(aList);
			setSchemes(sList);
			setWorks(wList);
		} catch (err) {
			console.error("Content load error:", err);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadAll();
	}, []);
	const handleCreateAnnouncement = async (e) => {
		e.preventDefault();
		if (!annTitleEn || !annDescEn) return;
		if ((await createAnnouncement({
			title: {
				en: annTitleEn,
				ta: annTitleTa || annTitleEn
			},
			description: {
				en: annDescEn,
				ta: annDescTa || annDescEn
			},
			date: annDate,
			time: annTime,
			location: annLocation,
			category: annCategory,
			published: true
		})).ok) {
			setToastMsg("Announcement published live!");
			setShowAnnModal(false);
			setAnnTitleEn("");
			setAnnTitleTa("");
			setAnnDescEn("");
			setAnnDescTa("");
			loadAll();
			setTimeout(() => setToastMsg(""), 2e3);
		}
	};
	const handleCreateScheme = async (e) => {
		e.preventDefault();
		if (!schNameEn || !schDescEn) return;
		if ((await createScheme({
			name: {
				en: schNameEn,
				ta: schNameTa || schNameEn
			},
			department: schDept,
			description: {
				en: schDescEn,
				ta: schDescTa || schDescEn
			},
			benefits: schBenefits.split("\n").filter((b) => b.trim()),
			eligibility: schEligibility.split("\n").filter((b) => b.trim()),
			documents: schDocs.split("\n").filter((b) => b.trim()),
			active: true
		})).ok) {
			setToastMsg("Scheme registered successfully!");
			setShowSchemeModal(false);
			setSchNameEn("");
			setSchDescEn("");
			loadAll();
			setTimeout(() => setToastMsg(""), 2e3);
		}
	};
	const handleCreateWork = async (e) => {
		e.preventDefault();
		if (!workNameEn || !workLocation) return;
		if ((await createDevelopmentWork({
			name: {
				en: workNameEn,
				ta: workNameTa || workNameEn
			},
			location: workLocation,
			department: workDept,
			description: {
				en: workDescEn,
				ta: workDescEn
			},
			startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			expectedCompletion: workExpected,
			status: "in_progress",
			progressPercent: Number(workProgress),
			published: true
		})).ok) {
			setToastMsg("Development work published!");
			setShowWorkModal(false);
			setWorkNameEn("");
			setWorkLocation("");
			loadAll();
			setTimeout(() => setToastMsg(""), 2e3);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:py-10 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-2xl",
						children: "📢"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 173,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-2xl font-black text-foreground font-display",
						children: "Constituency Content & Citizen Services"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 172,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs sm:text-sm text-muted-foreground",
					children: "Manage live Announcements, Welfare Schemes, and Infrastructure Development Works for NAMMA KURAL Constituency."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 171,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					size: "sm",
					onClick: loadAll,
					className: "rounded-xl text-xs font-bold gap-1 self-start sm:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 184,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sync Content" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 185,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 183,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 170,
				columnNumber: 7
			}, this),
			toastMsg && /* @__PURE__ */ (void 0)("div", {
				className: "p-3.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2",
				children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 shrink-0" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 190,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("span", { children: toastMsg }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 191,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 189,
				columnNumber: 20
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				defaultValue: "announcements",
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
						className: "bg-muted/70 p-1.5 rounded-2xl h-auto flex flex-wrap gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "announcements",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Megaphone, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 197,
										columnNumber: 13
									}, this),
									"Announcements (",
									announcements.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 196,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "schemes",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 201,
										columnNumber: 13
									}, this),
									"Government Schemes (",
									schemes.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 200,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "works",
								className: "rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Briefcase, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 205,
										columnNumber: 13
									}, this),
									"Development Works (",
									works.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 204,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 195,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "announcements",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between items-center bg-white p-4 rounded-2xl border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-base font-bold text-foreground",
								children: "Published Announcements"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 214,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: "Appears immediately on the citizen homepage"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 215,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 213,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								onClick: () => setShowAnnModal(true),
								size: "sm",
								className: "bg-primary text-white font-bold rounded-xl text-xs gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 218,
									columnNumber: 15
								}, this), " Create Announcement"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 217,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 212,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: announcements.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
								className: "rounded-2xl border border-border bg-white shadow-sm overflow-hidden flex flex-col justify-between",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
									className: "p-5 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-start justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
												variant: "secondary",
												className: "text-[10px] font-bold uppercase",
												children: item.category
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 226,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[11px] text-muted-foreground flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-3 w-3" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 230,
														columnNumber: 23
													}, this),
													item.date,
													" ",
													item.time && `· ${item.time}`
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 229,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 225,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
												className: "font-bold text-base text-foreground",
												children: bi(item.title)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 235,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-xs text-muted-foreground mt-1 line-clamp-3",
												children: bi(item.description)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 236,
												columnNumber: 21
											}, this),
											item.location && /* @__PURE__ */ (void 0)("p", {
												className: "text-[11px] text-primary flex items-center gap-1 mt-2",
												children: [/* @__PURE__ */ (void 0)(MapPin, { className: "h-3 w-3 shrink-0" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 238,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", { children: item.location }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 239,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 237,
												columnNumber: 39
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 234,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "pt-2 border-t border-border/60 flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
												variant: "outline",
												className: "bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px]",
												children: "Published"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 243,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: "ghost",
												size: "sm",
												onClick: async () => {
													if (confirm("Are you sure you want to delete this announcement?")) {
														await deleteAnnouncement(item.announcementId);
														loadAll();
													}
												},
												className: "h-7 text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-2 rounded-lg gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 252,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 253,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 246,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 242,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 17
								}, this)
							}, item.announcementId, false, {
								fileName: _jsxFileName,
								lineNumber: 223,
								columnNumber: 40
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 211,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "schemes",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between items-center bg-white p-4 rounded-2xl border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-base font-bold text-foreground",
								children: "Welfare & Government Schemes"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 265,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: "Detailed benefits, eligibility, and application guides"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 266,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 264,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								onClick: () => setShowSchemeModal(true),
								size: "sm",
								className: "bg-primary text-white font-bold rounded-xl text-xs gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 269,
									columnNumber: 15
								}, this), " Add Scheme"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 268,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 263,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: schemes.map((scheme) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
								className: "rounded-2xl border border-border bg-white shadow-sm p-5 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: "outline",
											className: "text-[10px] font-bold uppercase",
											children: scheme.department
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 276,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											className: "bg-emerald-100 text-emerald-800 border-0 text-[10px]",
											children: "Active"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 277,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 275,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
										className: "font-bold text-base text-foreground",
										children: bi(scheme.name)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 280,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-muted-foreground mt-1 line-clamp-2",
										children: bi(scheme.description)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 281,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 279,
										columnNumber: 17
									}, this),
									scheme.benefits && scheme.benefits.length > 0 && /* @__PURE__ */ (void 0)("div", {
										className: "p-3 rounded-xl bg-muted/30 text-xs space-y-1",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "font-bold text-[10px] text-muted-foreground uppercase",
											children: "Key Benefits:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 284,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("ul", {
											className: "list-disc pl-4 space-y-0.5 text-muted-foreground",
											children: scheme.benefits.slice(0, 2).map((b, i) => /* @__PURE__ */ (void 0)("li", { children: b }, i, false, {
												fileName: _jsxFileName,
												lineNumber: 286,
												columnNumber: 66
											}, this))
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 285,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 283,
										columnNumber: 67
									}, this)
								]
							}, scheme.schemeId, true, {
								fileName: _jsxFileName,
								lineNumber: 274,
								columnNumber: 36
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 273,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 262,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "works",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between items-center bg-white p-4 rounded-2xl border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-base font-bold text-foreground",
								children: "Constituency Development Projects"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 297,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: "Track public works, road repairs, and infrastructure progress"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 298,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 296,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								onClick: () => setShowWorkModal(true),
								size: "sm",
								className: "bg-primary text-white font-bold rounded-xl text-xs gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 301,
									columnNumber: 15
								}, this), " Add Project"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 300,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 295,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: works.map((work) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
								className: "rounded-2xl border border-border bg-white shadow-sm p-5 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: "secondary",
											className: "text-[10px] font-bold uppercase",
											children: work.department
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 308,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											className: "bg-blue-100 text-blue-800 border-0 text-[10px] uppercase font-bold",
											children: work.status.replace("_", " ")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 309,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 307,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "font-bold text-base text-foreground",
											children: bi(work.name)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 312,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-muted-foreground flex items-center gap-1 mt-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3 w-3 text-primary shrink-0" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 314,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: work.location }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 315,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 313,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-muted-foreground mt-1 line-clamp-2",
											children: bi(work.description)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 317,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 311,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5 pt-2 border-t border-border/60",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex justify-between text-xs font-bold",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Progress" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 321,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-primary",
													children: [work.progressPercent, "%"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 322,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 320,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "h-2 w-full rounded-full bg-slate-100 overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "h-full bg-primary rounded-full transition-all",
													style: { width: `${work.progressPercent}%` }
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 325,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 324,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "pt-2 flex justify-end",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
													variant: "ghost",
													size: "sm",
													onClick: async () => {
														if (confirm("Are you sure you want to delete this development project?")) {
															await deleteDevelopmentWork(work.workId);
															loadAll();
														}
													},
													className: "h-7 text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-2 rounded-lg gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 336,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 337,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 330,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 329,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 319,
										columnNumber: 17
									}, this)
								]
							}, work.workId, true, {
								fileName: _jsxFileName,
								lineNumber: 306,
								columnNumber: 32
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 305,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 294,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 194,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: showAnnModal,
				onOpenChange: setShowAnnModal,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-lg rounded-3xl p-6 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
						className: "text-xl font-bold font-display",
						children: "Create Announcement"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 350,
						columnNumber: 13
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 349,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						onSubmit: handleCreateAnnouncement,
						className: "space-y-4 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										className: "text-xs font-bold",
										children: "Title (English) *"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 355,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: annTitleEn,
										onChange: (e) => setAnnTitleEn(e.target.value),
										placeholder: "e.g. Free Eye Checkup Camp",
										className: "h-10 rounded-xl text-xs",
										required: true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 356,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 354,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										className: "text-xs font-bold",
										children: "Title (Tamil)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 359,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: annTitleTa,
										onChange: (e) => setAnnTitleTa(e.target.value),
										placeholder: "இலவச கண் மருத்துவ முகாம்",
										className: "h-10 rounded-xl text-xs"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 360,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 358,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 353,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									className: "text-xs font-bold",
									children: "Description *"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 364,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									value: annDescEn,
									onChange: (e) => setAnnDescEn(e.target.value),
									rows: 3,
									placeholder: "Full event information...",
									className: "text-xs rounded-xl",
									required: true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 365,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 363,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
											className: "text-xs font-bold",
											children: "Date"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 369,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
											type: "date",
											value: annDate,
											onChange: (e) => setAnnDate(e.target.value),
											className: "h-10 rounded-xl text-xs"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 370,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 368,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
											className: "text-xs font-bold",
											children: "Time"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 373,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
											value: annTime,
											onChange: (e) => setAnnTime(e.target.value),
											className: "h-10 rounded-xl text-xs"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 374,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 372,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
											className: "text-xs font-bold",
											children: "Category"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 377,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
											value: annCategory,
											onChange: (e) => setAnnCategory(e.target.value),
											className: "h-10 w-full rounded-xl border bg-white text-xs px-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "health",
													children: "Health"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 379,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "education",
													children: "Education"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 380,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "governance",
													children: "Governance"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 381,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "community",
													children: "Community"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 382,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 378,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 376,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 367,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									className: "text-xs font-bold",
									children: "Location"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 387,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: annLocation,
									onChange: (e) => setAnnLocation(e.target.value),
									className: "h-10 rounded-xl text-xs"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 388,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 386,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex justify-end gap-2 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setShowAnnModal(false),
									className: "h-10 rounded-xl text-xs font-bold",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 391,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "submit",
									className: "h-10 rounded-xl text-xs font-bold bg-primary text-white",
									children: "Publish Live"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 394,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 390,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 352,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 348,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 347,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: showSchemeModal,
				onOpenChange: setShowSchemeModal,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-lg rounded-3xl p-6 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
						className: "text-xl font-bold font-display",
						children: "Add Government Scheme"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 406,
						columnNumber: 13
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 405,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						onSubmit: handleCreateScheme,
						className: "space-y-4 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										className: "text-xs font-bold",
										children: "Scheme Name (English) *"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 411,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: schNameEn,
										onChange: (e) => setSchNameEn(e.target.value),
										placeholder: "e.g. Free House Scheme",
										className: "h-10 rounded-xl text-xs",
										required: true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 412,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 410,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										className: "text-xs font-bold",
										children: "Department"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 415,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: schDept,
										onChange: (e) => setSchDept(e.target.value),
										placeholder: "works",
										className: "h-10 rounded-xl text-xs"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 416,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 414,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 409,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									className: "text-xs font-bold",
									children: "Description *"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 420,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									value: schDescEn,
									onChange: (e) => setSchDescEn(e.target.value),
									rows: 2,
									className: "text-xs rounded-xl",
									required: true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 421,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 419,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									className: "text-xs font-bold",
									children: "Key Benefits (one per line)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 424,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									value: schBenefits,
									onChange: (e) => setSchBenefits(e.target.value),
									placeholder: "Free house\nSubsidized power",
									rows: 2,
									className: "text-xs rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 425,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 423,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									className: "text-xs font-bold",
									children: "Eligibility (one per line)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 428,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									value: schEligibility,
									onChange: (e) => setSchEligibility(e.target.value),
									placeholder: "Income below 2L\nResident of TN",
									rows: 2,
									className: "text-xs rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 429,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 427,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex justify-end gap-2 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setShowSchemeModal(false),
									className: "h-10 rounded-xl text-xs font-bold",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 432,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "submit",
									className: "h-10 rounded-xl text-xs font-bold bg-primary text-white",
									children: "Save Scheme"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 435,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 431,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 408,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 404,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 403,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: showWorkModal,
				onOpenChange: setShowWorkModal,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-lg rounded-3xl p-6 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
						className: "text-xl font-bold font-display",
						children: "Add Development Project"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 447,
						columnNumber: 13
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 446,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						onSubmit: handleCreateWork,
						className: "space-y-4 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									className: "text-xs font-bold",
									children: "Project Name *"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 451,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: workNameEn,
									onChange: (e) => setWorkNameEn(e.target.value),
									placeholder: "e.g. Road Relaying Work",
									className: "h-10 rounded-xl text-xs",
									required: true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 452,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 450,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										className: "text-xs font-bold",
										children: "Location *"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 456,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: workLocation,
										onChange: (e) => setWorkLocation(e.target.value),
										placeholder: "Ward 110",
										className: "h-10 rounded-xl text-xs",
										required: true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 457,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 455,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										className: "text-xs font-bold",
										children: "Department"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 460,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										value: workDept,
										onChange: (e) => setWorkDept(e.target.value),
										placeholder: "highways",
										className: "h-10 rounded-xl text-xs"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 461,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 459,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 454,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									className: "text-xs font-bold",
									children: "Description"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 465,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									value: workDescEn,
									onChange: (e) => setWorkDescEn(e.target.value),
									rows: 2,
									className: "text-xs rounded-xl"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 466,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 464,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										className: "text-xs font-bold",
										children: "Progress Percentage"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 470,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "number",
										min: 0,
										max: 100,
										value: workProgress,
										onChange: (e) => setWorkProgress(Number(e.target.value)),
										className: "h-10 rounded-xl text-xs"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 471,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 469,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										className: "text-xs font-bold",
										children: "Expected Completion"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 474,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "date",
										value: workExpected,
										onChange: (e) => setWorkExpected(e.target.value),
										className: "h-10 rounded-xl text-xs"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 475,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 473,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 468,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex justify-end gap-2 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setShowWorkModal(false),
									className: "h-10 rounded-xl text-xs font-bold",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 479,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "submit",
									className: "h-10 rounded-xl text-xs font-bold bg-primary text-white",
									children: "Publish Project"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 482,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 478,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 449,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 445,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 444,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 169,
		columnNumber: 10
	}, this);
}
//#endregion
export { ContentAdminConsole as component };
