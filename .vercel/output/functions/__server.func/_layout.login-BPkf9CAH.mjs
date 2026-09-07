import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { _ as useNavigate, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { Ct as ArrowRight, K as House, O as Minus, Q as FileText, R as LogIn, U as KeyRound, at as Clock, bt as Building2, et as Eye, g as ShieldCheck, lt as CircleCheck, s as User, tt as EyeOff, ut as CircleAlert, w as Phone, xt as Briefcase, z as Lock } from "./_libs/lucide-react.mjs";
import { _ as cn, c as Input, d as ROLE_DASHBOARDS, h as Badge, l as Button, m as useWorkflow, n as Label, p as useAuth, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
import { n as jt, t as Lt } from "./_libs/input-otp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.login-BPkf9CAH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/input-otp.tsx";
var InputOTP = import_react.forwardRef(({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lt, {
	ref,
	containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
	className: cn("disabled:cursor-not-allowed", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 11,
	columnNumber: 3
}, void 0));
InputOTP.displayName = "InputOTP";
var InputOTPGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("flex items-center", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = import_react.forwardRef(({ index, className, ...props }, ref) => {
	const { char, hasFakeCaret, isActive } = import_react.useContext(jt).slots[index] ?? {
		char: null,
		hasFakeCaret: false,
		isActive: false
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref,
		className: cn("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-1 ring-ring", className),
		...props,
		children: [char, hasFakeCaret && /* @__PURE__ */ (void 0)("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ (void 0)("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 55,
				columnNumber: 11
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 54,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 43,
		columnNumber: 5
	}, void 0);
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = import_react.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	role: "separator",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, {}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 68,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 67,
	columnNumber: 3
}, void 0));
InputOTPSeparator.displayName = "InputOTPSeparator";
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.login.tsx?tsr-split=component";
var OTP_RESEND_DELAY = 30;
function CitizenMobileLoginCard({ onGoToOfficerLogin }) {
	const { bi, lang } = useI18n();
	const navigate = useNavigate();
	const { requestOtp, verifyOtpAndLogin } = useWorkflow();
	const [stage, setStage] = (0, import_react.useState)("mobile");
	const [mobile, setMobile] = (0, import_react.useState)("");
	const [otp, setOtp] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [successMsg, setSuccessMsg] = (0, import_react.useState)("");
	const [maskedMobile, setMaskedMobile] = (0, import_react.useState)("");
	const [showOtp, setShowOtp] = (0, import_react.useState)(false);
	const [resendTimer, setResendTimer] = (0, import_react.useState)(0);
	const timerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (resendTimer > 0) timerRef.current = window.setInterval(() => {
			setResendTimer((t) => t <= 1 ? 0 : t - 1);
		}, 1e3);
		return () => {
			if (timerRef.current) window.clearInterval(timerRef.current);
		};
	}, [resendTimer]);
	const maskMobileFn = (m) => {
		const digits = m.replace(/\D/g, "");
		if (digits.length !== 10) return m;
		return `${digits.substring(0, 2)}******${digits.substring(digits.length - 2)}`;
	};
	const validateMobile = (m) => {
		const digits = m.replace(/\D/g, "");
		if (digits.length === 0) return {
			valid: false,
			message: lang === "ta" ? "மொபைல் எண் தேவை" : "Mobile number is required"
		};
		if (!/^[6-9]\d{9}$/.test(digits)) return {
			valid: false,
			message: lang === "ta" ? "6-9-ல் தொடங்கும் சரியான 10 இலக்க இந்திய மொபைல் எண்ணை உள்ளிடவும்" : "Enter a valid 10-digit Indian mobile starting with 6-9"
		};
		return { valid: true };
	};
	const handleRequestOtp = async (e) => {
		if (e) e.preventDefault();
		setError("");
		setSuccessMsg("");
		const v = validateMobile(mobile);
		if (!v.valid) {
			setError(v.message || "");
			return;
		}
		setLoading(true);
		try {
			const res = await requestOtp(mobile);
			setLoading(false);
			if (!res.ok) {
				setError(res.message);
				return;
			}
			setMaskedMobile(maskMobileFn(mobile));
			setStage("otp");
			setResendTimer(OTP_RESEND_DELAY);
			setSuccessMsg(res.message);
		} catch (err) {
			setLoading(false);
			setError(err.message || "Failed to send OTP");
		}
	};
	const handleVerifyOtp = async (e) => {
		if (e) e.preventDefault();
		setError("");
		if (otp.length !== 6) {
			setError(lang === "ta" ? "6 இலக்க OTP ஐ உள்ளிடவும்" : "Please enter a 6-digit OTP");
			return;
		}
		setLoading(true);
		try {
			const res = await verifyOtpAndLogin(mobile, otp);
			setLoading(false);
			if (!res.ok) {
				setError(res.message);
				return;
			}
			setSuccessMsg(lang === "ta" ? "வெற்றிகரமாக உள்நுழையவுள்ளது..." : "Login successful...");
			setTimeout(() => navigate({ to: "/dashboard/citizen" }), 400);
		} catch (err) {
			setLoading(false);
			setError(err.message || "Verification failed");
		}
	};
	const handleResendOtp = async () => {
		if (resendTimer > 0) return;
		setOtp("");
		setError("");
		setLoading(true);
		try {
			const res = await requestOtp(mobile);
			setLoading(false);
			if (!res.ok) {
				setError(res.message);
				return;
			}
			setResendTimer(OTP_RESEND_DELAY);
			setSuccessMsg(lang === "ta" ? "புதிய OTP அனுப்பப்பட்டது" : "A new OTP has been sent");
		} catch (err) {
			setLoading(false);
			setError(err.message || "Failed to resend OTP");
		}
	};
	const handleBackToMobile = () => {
		setStage("mobile");
		setOtp("");
		setError("");
		setSuccessMsg("");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-3xl border border-border bg-white shadow-soft p-6 sm:p-8 space-y-6 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-16 translate-x-16 pointer-events-none" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 152,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-teal-400/5 rounded-full translate-y-12 -translate-x-10 pointer-events-none" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							className: "bg-red-700 text-white border-0 text-[11px] font-black px-3 py-1 shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-3 w-3 mr-1 text-amber-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 13
							}, this), lang === "ta" ? "குடிமகன் உள்நுழைவு" : "Citizen Login"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 157,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							variant: "outline",
							className: "text-[10px] text-slate-700 border-slate-300 font-bold gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-3 w-3 text-emerald-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 162,
								columnNumber: 13
							}, this), lang === "ta" ? "OTP பாதுகாப்பு" : "OTP Secured"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 161,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 156,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-xl sm:text-2xl font-black text-slate-950 font-display tracking-tight pt-1",
						children: lang === "ta" ? "உங்கள் மொபைல் எண்ணைக் கொண்டு உள்நுழையவும்" : "Sign in with your Mobile Number"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 166,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs sm:text-sm text-slate-800 font-medium",
						children: lang === "ta" ? "பிரத்யேக பயனர் பெயர் அல்லது கடவுச்சொல் தேவையில்லை. OTP எளிதாக உள்நுழையவும்." : "No username or password needed. Simply verify with an OTP to track your complaints."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 169,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 155,
				columnNumber: 7
			}, this),
			successMsg && stage === "otp" && /* @__PURE__ */ (void 0)("div", {
				className: "relative flex items-start gap-2 p-3 rounded-2xl bg-emerald-50 border border-emerald-200",
				children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 175,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "text-xs text-emerald-800 font-bold leading-snug",
					children: successMsg
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 174,
				columnNumber: 41
			}, this),
			error && /* @__PURE__ */ (void 0)("div", {
				className: "relative flex items-start gap-2 p-3 rounded-2xl bg-red-50 border border-red-200",
				children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "h-4 w-4 text-red-600 shrink-0 mt-0.5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 182,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "text-xs text-red-800 font-bold leading-snug",
					children: error
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 183,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 181,
				columnNumber: 17
			}, this),
			stage === "mobile" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: handleRequestOtp,
				className: "relative space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								className: "text-xs font-black text-slate-950 flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 191,
									columnNumber: 15
								}, this), lang === "ta" ? "மொபைல் எண் *" : "Mobile Number *"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 190,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute left-0 top-0 bottom-0 w-14 flex items-center justify-center border-r border-slate-300 bg-slate-100 rounded-l-xl text-sm font-black text-slate-800",
									children: "+91"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 195,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									type: "tel",
									inputMode: "numeric",
									maxLength: 10,
									value: mobile,
									onChange: (e) => {
										const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
										setMobile(digits);
										setError("");
									},
									placeholder: lang === "ta" ? "98765 43210" : "98765 43210",
									className: "h-12 rounded-xl pl-16 text-base font-bold text-slate-950 bg-white border-2 border-slate-300 placeholder:text-slate-400 tracking-wider"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 198,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] text-slate-700 font-medium leading-relaxed",
								children: lang === "ta" ? "உங்கள் மொபைல் எண் புகார் பதிவு செய்யப்பட்டது இருக்க வேண்டும். இல்லையெனில், முதலில் புகாரை பதிவு செய்யவும்." : "This mobile must already have at least one complaint registered. If not, please report a complaint first."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 204,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						disabled: loading,
						className: "w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-md gap-2",
						children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "gap-1.5 flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-4 w-4 animate-spin" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 211,
								columnNumber: 17
							}, this), lang === "ta" ? "OTP அனுப்பப்படுகிறது..." : "Sending OTP..."]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 210,
							columnNumber: 24
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyRound, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 214,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "OTP ஐப் பெறு →" : "Send OTP →" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 215,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 213,
							columnNumber: 25
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 209,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "text-xs text-muted-foreground hover:text-foreground gap-1 px-2 h-8",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(House, { className: "h-3.5 w-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 17
								}, this), lang === "ta" ? "முகப்பு" : "Home"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 223,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "text-xs text-primary font-semibold gap-1 px-2 h-8",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/complaints/register",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-3.5 w-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 230,
									columnNumber: 17
								}, this), lang === "ta" ? "புதிய புகார் பதிவு" : "Report a Complaint"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 229,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 228,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 221,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 188,
				columnNumber: 29
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: handleVerifyOtp,
				className: "relative space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								className: "text-xs font-bold text-foreground flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyRound, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 239,
									columnNumber: 17
								}, this), lang === "ta" ? "OTP ஐ உள்ளிடவும்" : "Enter OTP"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 238,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: handleBackToMobile,
								className: "text-[11px] text-muted-foreground hover:text-foreground font-semibold",
								children: ["← ", lang === "ta" ? "மொபைலை மாற்று" : "Change mobile"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 242,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 237,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl bg-slate-50 border border-slate-200 p-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 250,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 249,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[10px] text-muted-foreground font-medium",
									children: lang === "ta" ? "OTP அனுப்பப்பட்டது" : "OTP sent to"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 253,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-black text-foreground font-display tracking-wide",
									children: ["+91 ", maskedMobile]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 256,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 252,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 248,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "outline",
								className: "text-[10px] font-bold bg-white",
								children: ["6 ", lang === "ta" ? "இலக்கங்கள்" : "digits"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 261,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 247,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputOTP, {
								value: otp,
								onChange: (v) => {
									setOtp(v.replace(/\D/g, "").slice(0, 6));
									setError("");
								},
								maxLength: 6,
								render: ({ slots }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputOTPGroup, {
									className: "gap-2",
									children: slots.map((slot, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputOTPSlot, {
										index: idx,
										...slot,
										className: "w-11 h-12 sm:w-12 sm:h-14 rounded-xl border-2 border-slate-200 text-lg font-black font-display bg-white data-[active=true]:border-primary data-[active=true]:ring-2 data-[active=true]:ring-primary/20"
									}, idx, false, {
										fileName: _jsxFileName,
										lineNumber: 273,
										columnNumber: 47
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 272,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 267,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setShowOtp((s) => !s),
										className: "flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground font-semibold",
										children: [showOtp ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-3.5 w-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 277,
											columnNumber: 30
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-3.5 w-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 277,
											columnNumber: 67
										}, this), showOtp ? lang === "ta" ? "மறைக்க" : "Hide" : lang === "ta" ? "காட்டு" : "Show"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 276,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-slate-300 text-xs",
										children: "|"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 280,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: handleResendOtp,
										disabled: resendTimer > 0 || loading,
										className: `text-[11px] font-bold flex items-center gap-1 ${resendTimer > 0 || loading ? "text-muted-foreground cursor-not-allowed" : "text-primary hover:underline"}`,
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-3.5 w-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 282,
											columnNumber: 19
										}, this), resendTimer > 0 ? `${lang === "ta" ? "மீண்டும் அனுப்பு" : "Resend in"} ${resendTimer}s` : lang === "ta" ? "மீண்டும் OTP அனுப்பு" : "Resend OTP"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 281,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 275,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 266,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 236,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "submit",
					disabled: loading,
					className: "w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-md gap-2",
					children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "gap-1.5 flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-4 w-4 animate-spin" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 291,
							columnNumber: 17
						}, this), lang === "ta" ? "உள்நுழைகிறது..." : "Verifying..."]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 290,
						columnNumber: 24
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogIn, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 294,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "உள்நுழைய →" : "Verify & Sign In →" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 295,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 293,
						columnNumber: 25
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 289,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 235,
				columnNumber: 19
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "pt-4 border-t border-border/80",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onGoToOfficerLogin,
					className: "w-full rounded-2xl border border-dashed border-slate-300 hover:border-primary/50 hover:bg-slate-50/80 p-3.5 flex items-center gap-3 transition-all group",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-10 w-10 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center text-indigo-700 transition-colors shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 306,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 305,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-left flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm font-bold text-foreground group-hover:text-primary transition-colors",
								children: lang === "ta" ? "அலுவலர் / நிர்வாகி உள்நுழைவு" : "Officer / Administrative Login"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 309,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[11px] text-muted-foreground truncate",
								children: lang === "ta" ? "துறை நிர்வாகிகள், கள அலுவலர்கள், சட்டமன்ற அலுவலகம் — கடவுச்சொல் மூலம் உள்நுழைய." : "Department admins, field officers & constituency office — sign in with credentials."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 312,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 308,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 316,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 304,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 303,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 151,
		columnNumber: 10
	}, this);
}
function OfficerRoleLoginCard({ onBack }) {
	const { bi, lang } = useI18n();
	const { login } = useAuth();
	const navigate = useNavigate();
	const [identifier, setIdentifier] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [selectedRole, setSelectedRole] = (0, import_react.useState)("field_officer");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const handleLogin = async (e) => {
		if (e) e.preventDefault();
		if (!identifier.trim()) {
			setError(lang === "ta" ? "மின்னஞ்சல் அல்லது மொபைல் எண்ணை உள்ளிடவும்" : "Please enter email or mobile number");
			return;
		}
		if (!password.trim()) {
			setError(lang === "ta" ? "கடவுச்சொல்லை உள்ளிடவும்" : "Please enter your password");
			return;
		}
		setError("");
		setLoading(true);
		try {
			const res = await login(identifier, selectedRole, password);
			setLoading(false);
			if (!res.ok) {
				setError(res.message);
				return;
			}
			const target = ROLE_DASHBOARDS[selectedRole] || "/dashboard/officer";
			navigate({ to: target });
		} catch (err) {
			setLoading(false);
			setError(err.message || "Login failed");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-3xl border border-border bg-white shadow-soft p-6 sm:p-8 space-y-6 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							className: "bg-indigo-500/10 text-indigo-700 border-0 text-[11px] font-bold px-3 py-1 flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Briefcase, { className: "h-3 w-3" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 374,
								columnNumber: 13
							}, this), lang === "ta" ? "அலுவலர் / நிர்வாகி" : "Officer / Admin"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 373,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: onBack,
							className: "text-[11px] text-slate-700 hover:text-slate-950 font-bold flex items-center gap-1",
							children: ["← ", lang === "ta" ? "குடிமகன் உள்நுழைவு" : "Citizen Login"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 377,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 372,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-xl sm:text-2xl font-black text-slate-950 font-display tracking-tight pt-1",
						children: lang === "ta" ? "பணியாளர் கண்ணில் உள்நுழைய" : "Authorized Personnel Sign In"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 381,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs sm:text-sm text-slate-800 font-medium",
						children: lang === "ta" ? "பொறுப்பு சார்ந்த அங்கீகாரம் கொண்ட நிர்வாகிகள் மற்றும் பணியாளர்கள் மட்டும். தயவுசெய்து உங்கள் சான்றுகளை உள்ளிடவும்." : "Restricted to role-based personnel only. Please enter your credentials below."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 384,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 371,
				columnNumber: 7
			}, this),
			error && /* @__PURE__ */ (void 0)("div", {
				className: "relative flex items-start gap-2 p-3 rounded-2xl bg-destructive/10 border border-destructive/20",
				children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "h-4 w-4 text-destructive shrink-0 mt-0.5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 390,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "text-xs text-destructive font-semibold leading-snug",
					children: error
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 391,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 389,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: handleLogin,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "text-xs font-bold text-slate-950 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Briefcase, { className: "h-3.5 w-3.5 text-indigo-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 400,
								columnNumber: 13
							}, this), lang === "ta" ? "பங்கு *" : "Role *"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 399,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
							value: selectedRole,
							onChange: (e) => setSelectedRole(e.target.value),
							className: "h-11 rounded-xl w-full pl-3 text-sm border border-slate-300 bg-white text-slate-950 font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "field_officer",
									children: lang === "ta" ? "கள அலுவலர்" : "Field Officer"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 404,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "department_admin",
									children: lang === "ta" ? "துறை நிர்வாகி" : "Department Admin"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 407,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "constituency_admin",
									children: lang === "ta" ? "சட்டமன்ற அலுவலர்" : "Constituency Admin"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 410,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "super_admin",
									children: lang === "ta" ? "முதன்மை நிர்வாகி" : "Super Admin"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 413,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 403,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 398,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "text-xs font-bold text-slate-950 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-3.5 w-3.5 text-indigo-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 422,
								columnNumber: 13
							}, this), lang === "ta" ? "மின்னஞ்சல் / மொபைல் எண் *" : "Email / Mobile Number *"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 421,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "text",
							value: identifier,
							onChange: (e) => {
								setIdentifier(e.target.value);
								setError("");
							},
							placeholder: lang === "ta" ? "9876543211 அல்லது பெயர்@example.com" : "9876543211 or user@example.com",
							className: "h-11 rounded-xl text-sm font-semibold text-slate-950 bg-white border-slate-300 placeholder:text-slate-400"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 425,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 420,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "text-xs font-bold text-foreground flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-3.5 w-3.5 text-indigo-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 434,
								columnNumber: 13
							}, this), lang === "ta" ? "கடவுச்சொல் *" : "Password *"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 433,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "password",
							value: password,
							onChange: (e) => {
								setPassword(e.target.value);
								setError("");
							},
							placeholder: "••••••••",
							className: "h-11 rounded-xl text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 437,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 432,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						disabled: loading,
						className: "w-full h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md gap-2",
						children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "gap-1.5 flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-4 w-4 animate-spin" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 445,
								columnNumber: 15
							}, this), lang === "ta" ? "உள்நுழைகிறது..." : "Signing in..."]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 444,
							columnNumber: 22
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogIn, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 448,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "உள்நுழைவு →" : "Sign In →" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 449,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 447,
							columnNumber: 23
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 443,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 396,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-xl bg-slate-50 p-2.5 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-4 w-4 text-slate-500 shrink-0 mt-0.5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 455,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "அதிகாரப்பூர்வ பணியாளர்கள் மட்டுமே: நிர்வாக டாஷ்போர்டுகளுக்கு பொறுப்பு சார்ந்த அங்கீகாரம் தேவை." : "Authorized personnel only: Administrative dashboards require role-based authorization." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 456,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 454,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 370,
		columnNumber: 10
	}, this);
}
function LoginPage() {
	const { lang } = useI18n();
	const [mode, setMode] = (0, import_react.useState)("citizen");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-[85vh] flex items-center justify-center px-4 py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "w-full max-w-xl space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-center space-y-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/",
							className: "inline-block transition-transform hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/logo.png",
								alt: "NAMMA KURAL",
								className: "h-16 w-16 mx-auto object-cover rounded-full border-2 border-amber-400/50 shadow-md",
								onError: (e) => {
									const target = e.currentTarget;
									target.style.display = "none";
								}
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 474,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 473,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "text-2xl sm:text-3xl font-black text-foreground tracking-tight font-display",
							children: lang === "ta" ? "நம்ம குரல்" : "NAMMA KURAL"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 479,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs sm:text-sm text-muted-foreground font-medium",
							children: lang === "ta" ? "குடிமக்கள் முதன்மை டிஜிட்டல் ஆட்சி தளம்" : "Citizen-first Digital Governance Platform"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 482,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mt-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 486,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "பாதுகாப்பான அணுகல்" : "Secure Access" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 487,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 485,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 472,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-inner",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setMode("citizen"),
						className: `flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${mode === "citizen" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 496,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "குடிமக்கள் உள்நுழைவு" : "Citizen Sign In" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 497,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 495,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setMode("officer"),
						className: `flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${mode === "officer" ? "bg-white text-indigo-700 shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Briefcase, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 500,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "அலுவலர் / நிர்வாகி" : "Officer / Admin Sign In" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 501,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 499,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 494,
					columnNumber: 9
				}, this),
				mode === "citizen" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CitizenMobileLoginCard, { onGoToOfficerLogin: () => setMode("officer") }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 505,
					columnNumber: 31
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OfficerRoleLoginCard, { onBack: () => setMode("citizen") }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 505,
					columnNumber: 106
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-center text-[11px] text-muted-foreground leading-relaxed max-w-lg mx-auto",
					children: lang === "ta" ? "நம்ம குரல் தளத்தை பயன்படுத்துவதன் மூலம், நீங்கள் சேவை விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கைக்கு உட்படுகிறீர்கள். உங்கள் தகவல் பாதுகாப்பாக மறைக்கப்பட்டு சேமிக்கப்படுகிறது." : "By using NAMMA KURAL, you agree to our Terms of Service and Privacy Policy. Your mobile is stored securely and never shared publicly."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 507,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 471,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 470,
		columnNumber: 10
	}, this);
}
//#endregion
export { LoginPage as component };
