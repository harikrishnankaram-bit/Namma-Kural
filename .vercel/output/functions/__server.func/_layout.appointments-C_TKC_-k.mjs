import { o as __toESM } from "./_runtime.mjs";
import { a as MLA, c as WARDS, p as maskMobile } from "./_ssr/ssr.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { F as MapPin, K as House, Q as FileText, at as Clock, p as Trash2, s as User, vt as Calendar, yt as CalendarCheck } from "./_libs/lucide-react.mjs";
import { a as CardContent, c as Input, h as Badge, i as Card, l as Button, m as useWorkflow, p as useAuth, r as Textarea, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.appointments-C_TKC_-k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.appointments.tsx?tsr-split=component";
var APPOINTMENT_PURPOSES = [
	{
		id: "civic",
		en: "Civic Grievance / Complaint",
		ta: "குடிமை புகார்"
	},
	{
		id: "development",
		en: "Constituency Development Proposal",
		ta: "தொகுதி வளர்ச்சி திட்டம்"
	},
	{
		id: "scheme",
		en: "Government Welfare Scheme Assistance",
		ta: "அரசு நலத்திட்ட உதவி"
	},
	{
		id: "personal",
		en: "Personal Grievance / Representation",
		ta: "தனிநபர் குறைதீர்ப்பு"
	},
	{
		id: "community",
		en: "Community / Resident Association Issue",
		ta: "குடியிருப்போர் நலச்சங்க விவகாரம்"
	},
	{
		id: "other",
		en: "Other Official Matter",
		ta: "மற்றவை"
	}
];
var TIME_SLOTS = [
	{
		time: "10:00 AM",
		available: true
	},
	{
		time: "10:30 AM",
		available: true
	},
	{
		time: "11:00 AM",
		available: true
	},
	{
		time: "11:30 AM",
		available: true
	},
	{
		time: "12:00 PM",
		available: true
	},
	{
		time: "12:30 PM",
		available: true
	}
];
var STATUS_CONFIG = {
	pending: {
		label: "Pending Review",
		cls: "bg-amber-100 text-amber-800 border-amber-200"
	},
	under_review: {
		label: "Under Review",
		cls: "bg-blue-100 text-blue-800 border-blue-200"
	},
	approved: {
		label: "Approved / Scheduled",
		cls: "bg-emerald-100 text-emerald-800 border-emerald-200"
	},
	rescheduled: {
		label: "Rescheduled",
		cls: "bg-purple-100 text-purple-800 border-purple-200"
	},
	upcoming: {
		label: "Upcoming Meeting",
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
function AppointmentsPage() {
	const { bi, lang } = useI18n();
	const { user } = useAuth();
	const { citizenSession, complaints } = useWorkflow();
	const [activeTab, setActiveTab] = (0, import_react.useState)("book");
	const [appointmentsList, setAppointmentsList] = (0, import_react.useState)([]);
	const [loadingHistory, setLoadingHistory] = (0, import_react.useState)(false);
	const [fullName, setFullName] = (0, import_react.useState)(citizenSession?.fullName || user?.name || "");
	const [mobile, setMobile] = (0, import_react.useState)(citizenSession?.mobileNumber || user?.mobile || "");
	const [email, setEmail] = (0, import_react.useState)(citizenSession?.email || user?.email || "");
	const [wardId, setWardId] = (0, import_react.useState)(citizenSession?.wardId || "w-110");
	const [relatedComplaintId, setRelatedComplaintId] = (0, import_react.useState)("");
	const [purposeId, setPurposeId] = (0, import_react.useState)("civic");
	const [description, setDescription] = (0, import_react.useState)("");
	const tomorrow = /* @__PURE__ */ new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	const minDateStr = tomorrow.toISOString().split("T")[0] ?? "2026-08-19";
	const [preferredDate, setPreferredDate] = (0, import_react.useState)(minDateStr);
	const [preferredTime, setPreferredTime] = (0, import_react.useState)("10:30 AM");
	const [documentFile, setDocumentFile] = (0, import_react.useState)(null);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submittedAppt, setSubmittedAppt] = (0, import_react.useState)(null);
	const [cancellingId, setCancellingId] = (0, import_react.useState)(null);
	const citizenComplaints = complaints.filter((c) => c.citizenMobile === mobile.replace(/\D/g, "") || c.citizenId === citizenSession?.citizenId);
	const fetchAppointments = (0, import_react.useCallback)(async () => {
		try {
			setLoadingHistory(true);
			const queryMobile = mobile.replace(/\D/g, "");
			const url = queryMobile ? `/api/appointments?mobile=${queryMobile}` : `/api/appointments`;
			const res = await fetch(url);
			const data = await res.json();
			if (res.ok && data.ok && Array.isArray(data.appointments)) setAppointmentsList(data.appointments);
		} catch {} finally {
			setLoadingHistory(false);
		}
	}, [mobile]);
	(0, import_react.useEffect)(() => {
		if (activeTab === "history") fetchAppointments();
	}, [activeTab, fetchAppointments]);
	const selectedPurpose = APPOINTMENT_PURPOSES.find((p) => p.id === purposeId) ?? APPOINTMENT_PURPOSES[0];
	const validateForm = () => {
		const newErrors = {};
		if (!fullName.trim()) newErrors.name = lang === "ta" ? "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்." : "Please enter your full name.";
		const cleanMobile = mobile.replace(/\D/g, "");
		if (!cleanMobile || !/^[6-9]\d{9}$/.test(cleanMobile)) newErrors.mobile = lang === "ta" ? "தயவுசெய்து சரியான 10 இலக்க இந்திய மொபைல் எண்ணை உள்ளிடவும்." : "Please enter a valid 10-digit Indian mobile number.";
		if (!description.trim() || description.trim().length < 5) newErrors.description = lang === "ta" ? "தயவுசெய்து சந்திப்பின் காரணத்தை விவரிக்கவும்." : "Please briefly describe the reason for your appointment.";
		if (!preferredDate) newErrors.date = lang === "ta" ? "தயவுசெய்து தேதியை தேர்வு செய்யவும்." : "Please select a date.";
		if (!preferredTime) newErrors.time = lang === "ta" ? "தயவுசெய்து நேரத்தை தேர்வு செய்யவும்." : "Please select a time slot.";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;
		setSubmitting(true);
		try {
			const res = await fetch("/api/appointments", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					fullName: fullName.trim(),
					citizenName: fullName.trim(),
					mobileNumber: mobile.replace(/\D/g, ""),
					mobile: mobile.replace(/\D/g, ""),
					email: email.trim() || void 0,
					wardId,
					purpose: selectedPurpose.en,
					preferredDate,
					appointmentDate: preferredDate,
					preferredTime,
					appointmentTime: preferredTime,
					description: description.trim(),
					location: "MLA Constituency Office, Thousand Lights, Chennai",
					venue: "MLA Constituency Office, Thousand Lights, Chennai",
					relatedComplaintId: relatedComplaintId || void 0
				})
			});
			const data = await res.json();
			setSubmitting(false);
			if (res.ok && data.ok && data.appointment) {
				setSubmittedAppt(data.appointment);
				setSubmitted(true);
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			} else setErrors({ description: data.message || "Failed to book appointment" });
		} catch (err) {
			setSubmitting(false);
			setErrors({ description: err.message || "Failed to book appointment" });
		}
	};
	const handleCancelAppt = async (apptId) => {
		if (!confirm(lang === "ta" ? "இந்த சந்திப்பை ரத்து செய்ய விரும்புகிறீர்களா?" : "Are you sure you want to cancel this appointment?")) return;
		setCancellingId(apptId);
		try {
			if ((await fetch(`/api/appointments/${apptId}`, { method: "DELETE" })).ok) fetchAppointments();
		} catch {} finally {
			setCancellingId(null);
		}
	};
	if (submitted && submittedAppt) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-xl px-4 py-12 sm:py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-6 shadow-sm ring-8 ring-emerald-50",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarCheck, { className: "h-10 w-10" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 283,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 282,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl sm:text-3xl font-black text-foreground mb-2 font-display",
				children: lang === "ta" ? "சந்திப்பு கோரிக்கை வெற்றிகரமாக பதிவு செய்யப்பட்டது!" : "Appointment Request Submitted!"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 286,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs sm:text-sm text-muted-foreground mb-8 max-w-md mx-auto",
				children: lang === "ta" ? "உங்கள் சந்திப்பு கோரிக்கை தொகுதி தலைமை நிர்வாகிக்கு அனுப்பப்பட்டுள்ளது. அலுவலகம் சரிபார்த்தவுடன் உறுதிப்படுத்தல் தகவல் உங்களுக்கு அனுப்பப்படும்." : "Your appointment request has been registered and forwarded to the Constituency Admin Office. You will receive an SMS update once reviewed."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 289,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				className: "border-border shadow-soft bg-white rounded-3xl overflow-hidden text-left mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "bg-primary/5 px-6 py-4 border-b border-border/80 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
						children: lang === "ta" ? "சந்திப்பு எண்" : "Appointment ID"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 296,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
						className: "bg-amber-100 text-amber-800 border-0 font-bold text-xs",
						children: lang === "ta" ? "பரிசீலனையில்" : "Pending Review"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 299,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 295,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
					className: "p-6 space-y-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-2xl sm:text-3xl font-black text-primary font-mono tracking-tight",
						children: submittedAppt.appointmentId
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 304,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-4 pt-2 border-t border-border/50 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: [lang === "ta" ? "பெயர்" : "Citizen Name", ":"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 310,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-bold text-foreground mt-0.5",
								children: submittedAppt.citizenName
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 311,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 309,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: [lang === "ta" ? "மொபைல்" : "Mobile", ":"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 314,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-bold text-foreground mt-0.5",
								children: ["+91 ", maskMobile(submittedAppt.mobile || submittedAppt.mobileNumber)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 315,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 313,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: [lang === "ta" ? "சந்திப்பு நோக்கம்" : "Purpose", ":"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 318,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-bold text-foreground mt-0.5",
								children: submittedAppt.purpose
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 319,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 317,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: [lang === "ta" ? "விருப்ப நேரம்" : "Date & Time", ":"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 322,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-bold text-foreground mt-0.5",
								children: [
									submittedAppt.appointmentDate || submittedAppt.preferredDate,
									" · ",
									submittedAppt.appointmentTime || submittedAppt.preferredTime
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 323,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 321,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-muted-foreground",
									children: [lang === "ta" ? "இடம்" : "Venue", ":"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 328,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-semibold text-foreground mt-0.5",
									children: "MLA Constituency Office, Thousand Lights, Chennai"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 329,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 327,
								columnNumber: 15
							}, this),
							submittedAppt.relatedComplaintId && /* @__PURE__ */ (void 0)("div", {
								className: "col-span-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: "Related Complaint: "
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 334,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "font-mono font-bold text-primary",
									children: ["#", submittedAppt.relatedComplaintId]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 335,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 333,
								columnNumber: 52
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 308,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 303,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 294,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "lg",
					className: "rounded-xl font-bold bg-primary hover:bg-primary/90 gap-2 h-12",
					onClick: () => {
						setSubmitted(false);
						setActiveTab("history");
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 347,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "என் சந்திப்புகள்" : "View My Appointments" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 348,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 343,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					variant: "ghost",
					size: "lg",
					className: "rounded-xl font-semibold gap-1.5 h-12",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(House, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 353,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "முகப்புக்கு செல்ல" : "Back to Home" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 354,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 352,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 351,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 342,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 281,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-[#f9f6f0] py-4 sm:py-6",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-3xl px-4 py-8 sm:py-12 pb-20 bg-white min-h-screen rounded-3xl shadow-xl text-slate-950 border border-stone-200/80",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-display",
						children: lang === "ta" ? "சட்டமன்ற உறுப்பினருடன் சந்திப்பு" : "Meet Your MLA — Book Appointment"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 368,
						columnNumber: 9
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs sm:text-sm text-slate-800 font-semibold mt-1",
						children: lang === "ta" ? "தொகுதி விவகாரங்கள், கோரிக்கைகள் மற்றும் உதவிகளுக்கு மாண்புமிகு சட்டமன்ற உறுப்பினருடன் நேரடி சந்திப்பை முன்பதிவு செய்க." : "Request an official meeting appointment with your Member of Legislative Assembly to discuss constituency issues."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 371,
						columnNumber: 9
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 367,
					columnNumber: 7
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-3xl border border-rose-200/80 bg-gradient-to-r from-rose-50/80 via-white to-rose-50/50 p-5 sm:p-6 shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-12 w-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-6 w-6" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 380,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 379,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-base font-black text-slate-950",
								children: bi(MLA.name)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 383,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-slate-700 font-bold",
								children: bi(MLA.role)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 384,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] text-rose-800 font-bold mt-0.5 flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-3 w-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 386,
										columnNumber: 15
									}, this),
									" ",
									bi(MLA.officeHours)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 385,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 382,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 378,
						columnNumber: 9
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-300 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveTab("book"),
							className: `px-3.5 py-2 rounded-lg text-xs font-black transition-colors ${activeTab === "book" ? "bg-primary text-white shadow-xs" : "text-slate-700 hover:text-slate-950"}`,
							children: lang === "ta" ? "முன்பதிவு" : "Book Appointment"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 393,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveTab("history"),
							className: `px-3.5 py-2 rounded-lg text-xs font-black transition-colors ${activeTab === "history" ? "bg-primary text-white shadow-xs" : "text-slate-700 hover:text-slate-950"}`,
							children: lang === "ta" ? "என் சந்திப்புகள்" : "My Appointments"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 396,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 392,
						columnNumber: 9
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 377,
					columnNumber: 7
				}, this),
				activeTab === "history" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-sm font-black text-slate-950",
							children: lang === "ta" ? "உங்கள் முந்தைய சந்திப்பு கோரிக்கைகள்" : "Your Appointment Requests"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 407,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							variant: "outline",
							className: "text-xs font-bold rounded-xl text-slate-900 border-slate-300 bg-white",
							onClick: () => setActiveTab("book"),
							children: ["+ ", lang === "ta" ? "புதிய சந்திப்பு" : "Book New Request"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 410,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 406,
						columnNumber: 11
					}, this), loadingHistory ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-8 text-center text-xs text-slate-700 font-bold",
						children: lang === "ta" ? "சந்திப்புகள் ஏற்றப்படுகின்றன..." : "Loading appointments..."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 415,
						columnNumber: 29
					}, this) : appointmentsList.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-10 text-center border border-dashed border-slate-300 rounded-3xl bg-slate-50/80 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-8 w-8 text-slate-400 mx-auto" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 418,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm font-black text-slate-950",
								children: lang === "ta" ? "முன்பதிவு செய்யப்பட்ட சந்திப்புகள் எதுவும் இல்லை" : "No appointments found"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 419,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-slate-700 font-medium max-w-sm mx-auto",
								children: lang === "ta" ? "சட்டமன்ற உறுப்பினருடன் புதிய சந்திப்பை முன்பதிவு செய்ய மேலே உள்ள படிவத்தைப் பயன்படுத்தவும்." : "You haven't requested any MLA appointments yet. Use the Book Appointment tab to request a slot."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 422,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 417,
						columnNumber: 54
					}, this) : appointmentsList.map((item) => {
						const statusMeta = STATUS_CONFIG[item.status] ?? STATUS_CONFIG["pending"];
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "rounded-3xl border-border bg-white shadow-sm p-5 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start justify-between gap-3 flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-mono text-xs font-bold text-primary",
												children: item.appointmentId
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 431,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
												className: `text-[10px] border font-bold px-2 py-0.5 ${statusMeta.cls}`,
												children: statusMeta.label
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 432,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 430,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "font-bold text-sm text-foreground mt-1",
											children: item.purpose
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 436,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: item.description
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 437,
											columnNumber: 23
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 429,
										columnNumber: 21
									}, this), item.status === "pending" && /* @__PURE__ */ (void 0)(Button, {
										size: "sm",
										variant: "ghost",
										disabled: cancellingId === item.appointmentId,
										onClick: () => handleCancelAppt(item.appointmentId),
										className: "text-xs text-destructive hover:bg-destructive/10 rounded-xl h-8 px-2.5 font-bold",
										children: [/* @__PURE__ */ (void 0)(Trash2, { className: "h-3.5 w-3.5 mr-1" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 441,
											columnNumber: 25
										}, this), lang === "ta" ? "ரத்து செய்க" : "Cancel Request"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 440,
										columnNumber: 51
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 428,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-border/60 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 448,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
												item.confirmedDate || item.appointmentDate || item.preferredDate,
												" · ",
												item.confirmedTime || item.appointmentTime || item.preferredTime
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 449,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 447,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 452,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "truncate",
												children: item.venue || item.meetingLocation || "MLA Constituency Office"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 453,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 451,
											columnNumber: 21
										}, this),
										item.relatedComplaintId && /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (void 0)(FileText, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 456,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", { children: ["Complaint #", item.relatedComplaintId] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 457,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 455,
											columnNumber: 49
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 446,
									columnNumber: 19
								}, this),
								item.instructions && /* @__PURE__ */ (void 0)("div", {
									className: "p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium",
									children: [
										/* @__PURE__ */ (void 0)("strong", { children: "Office Instructions:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 462,
											columnNumber: 23
										}, this),
										" ",
										item.instructions
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 461,
									columnNumber: 41
								}, this),
								item.rejectionReason && /* @__PURE__ */ (void 0)("div", {
									className: "p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900 font-medium",
									children: [
										/* @__PURE__ */ (void 0)("strong", { children: "Rejection Note:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 466,
											columnNumber: 23
										}, this),
										" ",
										item.rejectionReason
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 465,
									columnNumber: 44
								}, this)
							]
						}, item.appointmentId, true, {
							fileName: _jsxFileName,
							lineNumber: 427,
							columnNumber: 18
						}, this);
					})]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 405,
					columnNumber: 34
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: handleSubmit,
					className: "space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "rounded-3xl border-border bg-white p-5 sm:p-8 shadow-soft space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2 border-b border-slate-200 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold",
										children: "1"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 480,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-sm sm:text-base font-black text-slate-950",
										children: lang === "ta" ? "குடிமக்கள் விவரங்கள்" : "Citizen Details"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 483,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 479,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
													className: "text-xs font-bold text-slate-950",
													children: lang === "ta" ? "முழு பெயர் *" : "Full Name *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 490,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
													value: fullName,
													onChange: (e) => {
														setFullName(e.target.value);
														setErrors((err) => ({
															...err,
															name: void 0
														}));
													},
													placeholder: "e.g. Priya Raman",
													className: "h-11 rounded-xl text-xs sm:text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 493,
													columnNumber: 19
												}, this),
												errors.name && /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-destructive font-medium",
													children: errors.name
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 500,
													columnNumber: 35
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 489,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
													className: "text-xs font-bold text-slate-950",
													children: lang === "ta" ? "மொபைல் எண் *" : "Mobile Number *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 504,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 px-3 text-xs font-black text-slate-900",
														children: "+91"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 508,
														columnNumber: 21
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
														type: "tel",
														maxLength: 10,
														value: mobile,
														onChange: (e) => {
															setMobile(e.target.value.replace(/\D/g, ""));
															setErrors((err) => ({
																...err,
																mobile: void 0
															}));
														},
														placeholder: "98765 43210",
														className: "h-11 rounded-xl text-xs sm:text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400 flex-1"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 511,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 507,
													columnNumber: 19
												}, this),
												errors.mobile && /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-destructive font-medium",
													children: errors.mobile
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 519,
													columnNumber: 37
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 503,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
												className: "text-xs font-bold text-slate-950",
												children: lang === "ta" ? "மின்னஞ்சல் முகவரி (விருப்பத்திற்குரியது)" : "Email Address (Optional)"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 523,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
												type: "email",
												value: email,
												onChange: (e) => setEmail(e.target.value),
												placeholder: "e.g. citizen@example.com",
												className: "h-11 rounded-xl text-xs sm:text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 526,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 522,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
												className: "text-xs font-bold text-slate-950",
												children: lang === "ta" ? "வார்டு *" : "Ward *"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 530,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
												value: wardId,
												onChange: (e) => setWardId(e.target.value),
												className: "h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-xs sm:text-sm font-semibold text-slate-950",
												children: WARDS.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: w.id,
													children: [
														"Ward ",
														w.number,
														" — ",
														bi(w.name)
													]
												}, w.id, true, {
													fileName: _jsxFileName,
													lineNumber: 534,
													columnNumber: 37
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 533,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 529,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 488,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 478,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2 border-b border-slate-200 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold",
										children: "2"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 545,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-sm sm:text-base font-black text-slate-950",
										children: lang === "ta" ? "சந்திப்பின் நோக்கம்" : "Purpose of Meeting"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 548,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 544,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
											children: APPOINTMENT_PURPOSES.map((p) => {
												const isSelected = purposeId === p.id;
												return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
													type: "button",
													onClick: () => setPurposeId(p.id),
													className: `px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-left truncate ${isSelected ? "border-primary bg-primary/10 text-primary font-black shadow-xs" : "border-slate-300 hover:border-primary/40 text-slate-900 bg-white"}`,
													children: lang === "ta" ? p.ta : p.en
												}, p.id, false, {
													fileName: _jsxFileName,
													lineNumber: 557,
													columnNumber: 26
												}, this);
											})
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 554,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1.5 pt-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
													className: "text-xs font-bold text-slate-950",
													children: lang === "ta" ? "சந்திப்பின் காரணத்தை சுருக்கமாக விவரிக்கவும் *" : "Brief Description / Subject *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 564,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
													value: description,
													onChange: (e) => {
														setDescription(e.target.value);
														setErrors((err) => ({
															...err,
															description: void 0
														}));
													},
													placeholder: lang === "ta" ? "சந்திப்பின் நோக்கம், தொகுதி விவகாரம் மற்றும் தேவைப்படும் உதவிகளை இங்கு விவரிக்கவும்..." : "Please describe the reason for your appointment and what support or action you are requesting from the MLA...",
													rows: 3,
													className: "resize-none text-xs sm:text-sm rounded-2xl border-slate-300 text-slate-950 font-semibold bg-white placeholder:text-slate-400"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 567,
													columnNumber: 19
												}, this),
												errors.description && /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-destructive font-medium",
													children: errors.description
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 574,
													columnNumber: 42
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 563,
											columnNumber: 17
										}, this),
										citizenComplaints.length > 0 && /* @__PURE__ */ (void 0)("div", {
											className: "space-y-1.5 pt-2",
											children: [/* @__PURE__ */ (void 0)("label", {
												className: "text-xs font-bold text-slate-950 flex items-center gap-1.5",
												children: [/* @__PURE__ */ (void 0)(FileText, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 580,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", { children: lang === "ta" ? "தொடர்புடைய புகார் (விருப்பத்திற்குரியது)" : "Link an Existing Complaint (Optional)" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 581,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 579,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("select", {
												value: relatedComplaintId,
												onChange: (e) => setRelatedComplaintId(e.target.value),
												className: "h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-950",
												children: [/* @__PURE__ */ (void 0)("option", {
													value: "",
													children: "No related complaint"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 584,
													columnNumber: 23
												}, this), citizenComplaints.map((c) => /* @__PURE__ */ (void 0)("option", {
													value: c.id,
													children: [
														"#",
														c.id,
														" — ",
														c.description.slice(0, 50),
														"... (",
														c.status,
														")"
													]
												}, c.id, true, {
													fileName: _jsxFileName,
													lineNumber: 585,
													columnNumber: 51
												}, this))]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 583,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 578,
											columnNumber: 50
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 553,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 543,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2 border-b border-slate-200 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold",
										children: "3"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 596,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-sm sm:text-base font-black text-slate-950",
										children: lang === "ta" ? "விருப்பமான தேதி மற்றும் நேரம்" : "Preferred Appointment Slot"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 599,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 595,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
												className: "text-xs font-bold text-slate-950",
												children: lang === "ta" ? "விருப்பமான தேதி *" : "Preferred Date *"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 606,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
												type: "date",
												min: minDateStr,
												value: preferredDate,
												onChange: (e) => {
													setPreferredDate(e.target.value);
													setErrors((err) => ({
														...err,
														date: void 0
													}));
												},
												className: "h-11 rounded-xl text-xs sm:text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 609,
												columnNumber: 19
											}, this),
											errors.date && /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-destructive font-medium",
												children: errors.date
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 616,
												columnNumber: 35
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 605,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5 sm:col-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
												className: "text-xs font-bold text-slate-950",
												children: lang === "ta" ? "விருப்பமான நேரம் *" : "Preferred Time Slot *"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 620,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-1",
												children: TIME_SLOTS.map(({ time, available }) => {
													return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
														type: "button",
														disabled: !available,
														onClick: () => {
															if (available) {
																setPreferredTime(time);
																setErrors((err) => ({
																	...err,
																	time: void 0
																}));
															}
														},
														className: `h-10 rounded-xl border text-xs transition-all ${!available ? "opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200" : preferredTime === time ? "border-[#d91c2b] bg-[#d91c2b] text-white shadow-sm font-black" : "border-slate-300 hover:border-[#d91c2b]/40 text-slate-900 bg-white hover:bg-slate-50 font-bold"}`,
														children: time
													}, time, false, {
														fileName: _jsxFileName,
														lineNumber: 629,
														columnNumber: 28
													}, this);
												})
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 623,
												columnNumber: 19
											}, this),
											errors.time && /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-destructive font-medium",
												children: errors.time
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 642,
												columnNumber: 35
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 619,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 604,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 594,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-4 pt-4 border-t border-slate-200",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-2xl bg-slate-50 p-4 border border-slate-200 text-xs space-y-2.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex justify-between items-center",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-slate-600 font-semibold",
												children: "Citizen Name:"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 651,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-slate-950",
												children: fullName || "—"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 652,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 650,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex justify-between items-center",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-slate-600 font-semibold",
												children: "Mobile Number:"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 655,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-slate-950",
												children: mobile || "—"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 656,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 654,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex justify-between items-center",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-slate-600 font-semibold",
												children: "Purpose:"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 659,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-slate-950",
												children: lang === "ta" ? selectedPurpose.ta : selectedPurpose.en
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 660,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 658,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex justify-between items-center",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-slate-600 font-semibold",
												children: "Requested Slot:"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 663,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-black text-[#d91c2b]",
												children: [
													preferredDate,
													" at ",
													preferredTime
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 664,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 662,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 649,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "submit",
									size: "lg",
									disabled: submitting,
									className: "w-full h-12 rounded-xl font-bold bg-[#d91c2b] hover:bg-[#b81220] text-white shadow-md text-sm gap-2 mt-4",
									children: submitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Submitting..." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 669,
										columnNumber: 31
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarCheck, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 670,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "சந்திப்பு கோரிக்கையை சமர்ப்பிக்கவும்" : "Submit Appointment Request" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 671,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 669,
										columnNumber: 60
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 668,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 648,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 475,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 474,
					columnNumber: 7
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 365,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 364,
		columnNumber: 10
	}, this);
}
//#endregion
export { AppointmentsPage as component };
