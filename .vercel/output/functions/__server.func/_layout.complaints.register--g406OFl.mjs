import { o as __toESM } from "./_runtime.mjs";
import { c as WARDS, i as DEPARTMENTS, m as validateIndianMobile, n as CONSTITUENCY, p as maskMobile, t as CATEGORIES } from "./_ssr/ssr.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { _ as useNavigate, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { A as MicOff, Ct as ArrowRight, F as MapPin, G as Image, K as House, Q as FileText, T as Pencil, _t as Camera, a as Video, at as Clock, ft as ChevronRight, g as ShieldCheck, h as Sparkles, ht as Check, it as Cpu, k as Mic, lt as CircleCheck, ot as ClipboardList, p as Trash2, u as TriangleAlert, ut as CircleAlert, v as Search, w as Phone, wt as ArrowLeft } from "./_libs/lucide-react.mjs";
import { a as CardContent, c as Input, h as Badge, i as Card, l as Button, m as useWorkflow, p as useAuth, r as Textarea, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.complaints.register--g406OFl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var TAMIL_DIGITS = {
	"0": "பூஜ்யம்",
	"1": "ஒன்று",
	"2": "இரண்டு",
	"3": "மூன்று",
	"4": "நான்கு",
	"5": "ஐந்து",
	"6": "ஆறு",
	"7": "ஏழு",
	"8": "எட்டு",
	"9": "ஒன்பது"
};
function useVoiceGuidance() {
	const [voices, setVoices] = (0, import_react.useState)([]);
	const [speakingField, setSpeakingField] = (0, import_react.useState)(null);
	const currentUtteranceRef = (0, import_react.useRef)(null);
	const lastFocusedFieldRef = (0, import_react.useRef)(null);
	const loadVoices = (0, import_react.useCallback)(() => {
		if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
		const available = window.speechSynthesis.getVoices();
		if (available && available.length > 0) setVoices(available);
		return available;
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
		loadVoices();
		if (window.speechSynthesis.onvoiceschanged !== void 0) window.speechSynthesis.onvoiceschanged = () => {
			loadVoices();
		};
		return () => {
			if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
		};
	}, [loadVoices]);
	const getVoice = (0, import_react.useCallback)((langCode) => {
		if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
		const voiceList = window.speechSynthesis.getVoices().length > 0 ? window.speechSynthesis.getVoices() : voices;
		if (!voiceList || voiceList.length === 0) return null;
		if (langCode.toLowerCase().startsWith("ta")) {
			const taIn = voiceList.find((v) => v.lang.toLowerCase() === "ta-in" || v.lang.toLowerCase() === "ta_in");
			if (taIn) return taIn;
			const anyTa = voiceList.find((v) => v.lang.toLowerCase().startsWith("ta") || v.name.toLowerCase().includes("tamil"));
			if (anyTa) return anyTa;
			const inFallback = voiceList.find((v) => v.lang.toLowerCase() === "en-in" || v.lang.toLowerCase() === "hi-in");
			if (inFallback) return inFallback;
			return voiceList[0] || null;
		}
		const enIn = voiceList.find((v) => v.lang.toLowerCase() === "en-in" || v.lang.toLowerCase() === "en_in");
		if (enIn) return enIn;
		const enUs = voiceList.find((v) => v.lang.toLowerCase() === "en-us" || v.lang.toLowerCase() === "en_us");
		if (enUs) return enUs;
		return voiceList.find((v) => v.lang.toLowerCase().startsWith("en")) || voiceList[0] || null;
	}, [voices]);
	const stopGuidance = (0, import_react.useCallback)(() => {
		if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
		setSpeakingField(null);
		currentUtteranceRef.current = null;
	}, []);
	/**
	* Speak instruction automatically when a field receives focus
	*/
	const handleFocusGuidance = (0, import_react.useCallback)((fieldKey, textOrMap, lang = "en") => {
		if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
		if (lastFocusedFieldRef.current === fieldKey && speakingField === fieldKey) return;
		lastFocusedFieldRef.current = fieldKey;
		window.speechSynthesis.cancel();
		const isTamil = lang.toLowerCase().startsWith("ta");
		let textToSpeak = typeof textOrMap === "string" ? textOrMap : isTamil ? textOrMap.ta : textOrMap.en;
		if (!textToSpeak || !textToSpeak.trim()) return;
		const targetLangTag = isTamil ? "ta-IN" : "en-IN";
		const selectedVoice = getVoice(targetLangTag);
		if (isTamil) textToSpeak = textToSpeak.replace(/\d+/g, (match) => match.split("").map((d) => TAMIL_DIGITS[d] ?? d).join(" "));
		const utterance = new SpeechSynthesisUtterance(textToSpeak);
		utterance.lang = targetLangTag;
		if (selectedVoice) utterance.voice = selectedVoice;
		utterance.rate = isTamil ? .92 : .98;
		utterance.pitch = 1;
		utterance.onstart = () => {
			setSpeakingField(fieldKey);
		};
		utterance.onend = () => {
			setSpeakingField((curr) => curr === fieldKey ? null : curr);
			currentUtteranceRef.current = null;
		};
		utterance.onerror = (e) => {
			if (e.error !== "canceled" && e.error !== "interrupted") console.warn("Voice guidance notice:", e.error);
			setSpeakingField((curr) => curr === fieldKey ? null : curr);
			currentUtteranceRef.current = null;
		};
		currentUtteranceRef.current = utterance;
		window.speechSynthesis.speak(utterance);
	}, [getVoice, speakingField]);
	return {
		speakingField,
		isSpeaking: speakingField !== null,
		handleFocusGuidance,
		stopGuidance
	};
}
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.complaints.register.tsx?tsr-split=component";
var CATEGORY_ICONS = {
	road: "🛣️",
	streetlight: "💡",
	water: "💧",
	drainage: "🌊",
	waste: "🗑️",
	electricity: "⚡",
	publichealth: "🏥",
	infrastructure: "🏗️",
	other: "📌"
};
var DEFAULT_WARD = {
	id: "w-110",
	number: 110,
	name: {
		en: "Thousand Lights",
		ta: "ஆயிரம் விளக்கு"
	},
	center: {
		lat: 13.0604,
		lng: 80.2496
	},
	population: 46980
};
var DEFAULT_DEPT = {
	id: "works",
	name: {
		en: "Public Works",
		ta: "பொதுப்பணித் துறை"
	},
	slaDays: 7
};
var FIELD_GUIDANCE = {
	mobile: {
		en: "Please enter your mobile number.",
		ta: "உங்கள் கைபேசி எண்ணை உள்ளிடவும்."
	},
	name: {
		en: "Please enter your full name.",
		ta: "உங்கள் முழுப் பெயரை உள்ளிடவும்."
	},
	email: {
		en: "Please enter your email address.",
		ta: "உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்."
	},
	category: {
		en: "Please select the category that matches your problem.",
		ta: "உங்கள் பிரச்சனைக்குப் பொருத்தமான வகையைத் தேர்ந்தெடுக்கவும்."
	},
	description: {
		en: "Please describe the problem in your own words.",
		ta: "உங்கள் பிரச்சனையைப் பற்றி உங்கள் சொந்த வார்த்தைகளில் தெரிவிக்கவும்."
	},
	evidence: {
		en: "Please upload a photo or other evidence of the problem.",
		ta: "பிரச்சனைக்கான புகைப்படம் அல்லது ஆதாரத்தை பதிவேற்றவும்."
	},
	location: {
		en: "Please select or enter the location where the problem occurred.",
		ta: "பிரச்சனை ஏற்பட்ட இடத்தைத் தேர்ந்தெடுக்கவும் அல்லது உள்ளிடவும்."
	},
	location_search: {
		en: "Please search for your street or area location.",
		ta: "உங்கள் தெரு அல்லது பகுதியை தேடவும்."
	},
	address: {
		en: "Please enter the street or landmark address.",
		ta: "தெரு அல்லது முகவரியை உள்ளிடவும்."
	},
	ward: {
		en: "Please select your ward number.",
		ta: "வார்டு எண்ணைத் தேர்ந்தெடுக்கவும்."
	},
	review: {
		en: "Please review your complaint details before submitting.",
		ta: "உங்கள் புகார் விவரங்களை சரிபார்த்து பின்னர் சமர்ப்பிக்கவும்."
	}
};
function ComplaintRegister() {
	const { bi, lang } = useI18n();
	const { createComplaint } = useWorkflow();
	const { user } = useAuth();
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(1);
	const [categoryId, setCategoryId] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [media, setMedia] = (0, import_react.useState)([]);
	const [locationMode, setLocationMode] = (0, import_react.useState)("current");
	const [address, setAddress] = (0, import_react.useState)("Thousand Lights, Chennai, Tamil Nadu");
	const [selectedWardId, setSelectedWardId] = (0, import_react.useState)("w-110");
	const [lat, setLat] = (0, import_react.useState)(13.0604);
	const [lng, setLng] = (0, import_react.useState)(80.2496);
	const [isListening, setIsListening] = (0, import_react.useState)(false);
	const [voiceNotice, setVoiceNotice] = (0, import_react.useState)("");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [locLoading, setLocLoading] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [name, setName] = (0, import_react.useState)("");
	const [mobile, setMobile] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [wardNumber, setWardNumber] = (0, import_react.useState)("");
	const [age, setAge] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [complaintId, setComplaintId] = (0, import_react.useState)("");
	const [submittedDate, setSubmittedDate] = (0, import_react.useState)("");
	const { handleFocusGuidance, stopGuidance } = useVoiceGuidance();
	const handleFieldFocus = (0, import_react.useCallback)((fieldKey) => {
		const guidance = FIELD_GUIDANCE[fieldKey];
		if (guidance) handleFocusGuidance(fieldKey, guidance, lang);
	}, [handleFocusGuidance, lang]);
	const selectedCategory = CATEGORIES.find((c) => c.id === categoryId);
	const selectedWard = WARDS.find((w) => w.id === selectedWardId) ?? WARDS[2] ?? DEFAULT_WARD;
	const selectedDept = DEPARTMENTS.find((d) => d.id === selectedCategory?.department) ?? DEPARTMENTS[0] ?? DEFAULT_DEPT;
	const startVoiceInput = () => {
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		if (SpeechRecognition) {
			const recognition = new SpeechRecognition();
			recognition.lang = lang === "ta" ? "ta-IN" : "en-IN";
			recognition.continuous = false;
			recognition.interimResults = false;
			recognition.onstart = () => {
				setIsListening(true);
				setVoiceNotice(lang === "ta" ? "பேசுங்கள், பதிவு செய்யப்படுகிறது..." : "Listening... please speak clearly.");
			};
			recognition.onresult = (event) => {
				const transcript = event.results[0][0].transcript;
				setDescription((prev) => prev ? `${prev} ${transcript}` : transcript);
				setIsListening(false);
				setVoiceNotice(lang === "ta" ? "குரல் பதிவு சேர்க்கப்பட்டது. சரிபார்க்கவும்." : "Voice transcribed. You can review and edit.");
			};
			recognition.onerror = () => {
				setIsListening(false);
				setVoiceNotice(lang === "ta" ? "குரல் பதிவு தோல்வியுற்றது. தட்டச்சு செய்யவும்." : "Voice input error. Please type your description.");
			};
			recognition.onend = () => {
				setIsListening(false);
			};
			recognition.start();
		} else {
			setIsListening(true);
			setVoiceNotice(lang === "ta" ? "குரல் பதிவு செய்யப்படுகிறது (மாதிரி)..." : "Listening (Simulation)...");
			setTimeout(() => {
				const sampleText = lang === "ta" ? "எங்கள் தெருவில் குடிநீர் குழாய் உடைந்து தண்ணீர் வீணாகிறது." : "Drinking water pipe is broken and leaking on our street near the junction.";
				setDescription((prev) => prev ? `${prev} ${sampleText}` : sampleText);
				setIsListening(false);
				setVoiceNotice(lang === "ta" ? "குரல் பதிவு சேர்க்கப்பட்டது. சரிபார்க்கவும்." : "Voice transcribed. You can review and edit.");
			}, 2500);
		}
	};
	const handleFileUpload = (e, type) => {
		const files = e.target.files;
		if (!files || files.length === 0) return;
		const newMedia = [];
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			if (media.length + newMedia.length >= 5 && type === "image") break;
			if (file) newMedia.push({
				id: `${Date.now()}-${i}`,
				name: file.name,
				url: URL.createObjectURL(file),
				type
			});
		}
		setMedia((prev) => [...prev, ...newMedia]);
	};
	const removeMedia = (id) => {
		setMedia((prev) => prev.filter((m) => m.id !== id));
	};
	const useCurrentLocation = () => {
		setLocLoading(true);
		if ("geolocation" in navigator) navigator.geolocation.getCurrentPosition((pos) => {
			const latVal = pos.coords.latitude;
			const lngVal = pos.coords.longitude;
			setLat(latVal);
			setLng(lngVal);
			setAddress(`${latVal.toFixed(4)}, ${lngVal.toFixed(4)} — Anna Salai, Thousand Lights`);
			setSelectedWardId("w-110");
			setLocLoading(false);
		}, () => {
			setLat(CONSTITUENCY.center.lat);
			setLng(CONSTITUENCY.center.lng);
			setAddress("Anna Salai, Thousand Lights, Chennai");
			setSelectedWardId("w-110");
			setLocLoading(false);
		});
		else setLocLoading(false);
	};
	const validateStep = (currentStep) => {
		const newErrors = {};
		if (currentStep === 1) {
			const mobileValid = validateIndianMobile(mobile);
			if (!mobileValid.valid) newErrors.mobile = mobileValid.message;
			if (!categoryId) newErrors.category = lang === "ta" ? "தயவுசெய்து ஒரு வகையைத் தேர்வு செய்யவும்." : "Please select a complaint category.";
			if (!description.trim() || description.trim().length < 5) newErrors.description = lang === "ta" ? "தயவுசெய்து உங்கள் புகாரை சுருக்கமாக விவரிக்கவும்." : "Please describe the problem (at least 5 characters).";
		}
		if (currentStep === 3) {
			if (!address.trim()) newErrors.location = lang === "ta" ? "தயவுசெய்து இடத்தை தேர்வு செய்யவும்." : "Please select or verify the location.";
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleNext = () => {
		if (validateStep(step)) {
			setStep((s) => s + 1);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
	};
	const handleBack = () => {
		setStep((s) => s - 1);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleSubmit = async () => {
		const mobileValid = validateIndianMobile(mobile);
		if (!mobileValid.valid) {
			setErrors({ mobile: mobileValid.message });
			setStep(1);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		const beforeImage = media.find((m) => m.type === "image")?.url;
		try {
			const newComp = await createComplaint({
				categoryId: categoryId || "road",
				description,
				address,
				wardId: selectedWardId,
				lat,
				lng,
				mobileNumber: mobile,
				citizenName: name || void 0,
				citizenEmail: email || void 0,
				...beforeImage !== void 0 ? { beforeImage } : {}
			});
			setComplaintId(newComp.id);
			setSubmittedDate((/* @__PURE__ */ new Date()).toISOString().split("T")[0] ?? "2026-08-14");
			setSubmitted(true);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} catch (err) {
			setErrors({ mobile: err.message || "Failed to submit complaint" });
		}
	};
	const STEPS = [
		{
			num: 1,
			label: lang === "ta" ? "பிரச்சினை" : "Problem"
		},
		{
			num: 2,
			label: lang === "ta" ? "சான்று" : "Evidence"
		},
		{
			num: 3,
			label: lang === "ta" ? "இடம்" : "Location"
		},
		{
			num: 4,
			label: lang === "ta" ? "சரிபார்த்தல்" : "Review"
		}
	];
	if (submitted) {
		const maskedMobile = maskMobile(mobile) || maskMobile("9876543210");
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-5xl px-4 py-8 sm:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl sm:text-3xl font-black text-foreground tracking-tight font-display",
					children: lang === "ta" ? "புகார் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது ✓" : "Complaint Submitted Successfully ✓"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 367,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: lang === "ta" ? "உங்கள் புகார் பதிவு செய்யப்பட்டு சம்பந்தப்பட்ட துறைக்கு அனுப்பப்பட்டுள்ளது." : "Your civic complaint has been registered and routed to the concerned department."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 370,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 366,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "lg:col-span-2 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "border-border shadow-sm bg-white rounded-2xl overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "bg-emerald-50 px-6 py-5 border-b border-emerald-200/60 flex items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-6 ring-emerald-50 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-7 w-7" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 381,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 380,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs font-semibold text-emerald-700 uppercase tracking-wider",
											children: lang === "ta" ? "புகார் எண்" : "Complaint ID"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 384,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-2xl sm:text-3xl font-black text-emerald-900 font-mono tracking-tight",
											children: complaintId
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 387,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 383,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
										className: "ml-auto bg-emerald-100 text-emerald-800 border-0 font-semibold text-xs",
										children: lang === "ta" ? "சமர்ப்பிக்கப்பட்டது" : "Submitted"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 391,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 379,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "p-6",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-2 gap-x-6 gap-y-4 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs text-muted-foreground",
											children: lang === "ta" ? "வகை" : "Category"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 399,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-bold text-foreground mt-0.5 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: CATEGORY_ICONS[categoryId] ?? "📌" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 401,
												columnNumber: 23
											}, this), selectedCategory ? bi(selectedCategory.name) : "Civic Issue"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 400,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 398,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs text-muted-foreground",
											children: lang === "ta" ? "துறை" : "Department"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 406,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-bold text-foreground mt-0.5",
											children: bi(selectedDept.name)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 407,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 405,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs text-muted-foreground",
											children: lang === "ta" ? "வார்டு" : "Ward"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 410,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-bold text-foreground mt-0.5",
											children: [
												"Ward ",
												selectedWard.number,
												" — ",
												bi(selectedWard.name)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 411,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 409,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs text-muted-foreground",
											children: lang === "ta" ? "சமர்ப்பித்த தேதி" : "Submitted Date"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 414,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-bold text-foreground mt-0.5",
											children: submittedDate
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 415,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 413,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs text-muted-foreground",
											children: lang === "ta" ? "மொபைல் எண்" : "Mobile Number"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 418,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-bold text-foreground mt-0.5 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "h-3.5 w-3.5 text-primary shrink-0" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 420,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-mono tracking-wider",
												children: ["+91 ", maskedMobile]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 421,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 419,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 417,
											columnNumber: 19
										}, this),
										name && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: lang === "ta" ? "பெயர்" : "Name"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 425,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "font-bold text-foreground mt-0.5",
											children: name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 426,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 424,
											columnNumber: 28
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-xs text-muted-foreground",
												children: lang === "ta" ? "இடம்" : "Location"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 429,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "font-semibold text-foreground mt-0.5 flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-3.5 w-3.5 text-primary shrink-0" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 431,
														columnNumber: 23
													}, this),
													" ",
													address
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 430,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 428,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-xs text-muted-foreground",
												children: lang === "ta" ? "புகார் விவரம்" : "Issue Description"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 435,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "font-medium text-foreground mt-0.5 text-sm leading-relaxed",
												children: description
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 436,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 434,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 397,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 396,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 378,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "border-primary/30 bg-gradient-to-br from-primary/5 via-white to-blue-50 rounded-2xl shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "p-5 sm:p-6 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 447,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 446,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
											className: "text-sm font-black text-foreground",
											children: lang === "ta" ? "🔐 உங்கள் உள்நுழைவு தகவல் (தனி கணக்கு தேவையில்லை)" : "🔐 Your Login Access (No Separate Account Needed)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 450,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-muted-foreground mt-1 leading-relaxed",
											children: lang === "ta" ? `மீண்டும் வரும்போது உங்கள் மொபைல் எண் (+91 ${maskedMobile})-ல் உள்நுழைந்து எல்லா புகார்களையும் ஒரே இடத்தில் கண்காணிக்கலாம்.` : `Next time, simply login with your mobile (+91 ${maskedMobile}) to track all your complaints from one dashboard.`
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 453,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 449,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 445,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "rounded-xl bg-white border border-primary/20 p-3",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[10px] font-bold uppercase tracking-wider text-primary/70",
											children: lang === "ta" ? "உள்நுழைவு முறை" : "Login Method"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 460,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs font-bold text-foreground mt-1",
											children: "Mobile + OTP"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 461,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 459,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "rounded-xl bg-white border border-primary/20 p-3",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[10px] font-bold uppercase tracking-wider text-primary/70",
											children: lang === "ta" ? "உங்கள் மொபைல்" : "Your Mobile"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 464,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs font-bold text-foreground mt-1 font-mono",
											children: ["+91 ", maskedMobile]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 465,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 463,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 458,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 444,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 443,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									asChild: true,
									size: "lg",
									className: "rounded-xl font-bold bg-primary hover:bg-primary/90 gap-2 h-12 flex-1 shadow-md",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/login",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 475,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "🔐 உடனே உள்நுழைய புகார்களைப் பார்க்க →" : "🔐 Login Now to See Dashboard →" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 476,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 474,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 473,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									className: "rounded-xl font-semibold gap-2 h-12 flex-1",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/complaints/track",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 481,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "புகாரை எண் கொண்டு கண்காணிக்க" : "Track by Complaint ID" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 482,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 480,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 479,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									asChild: true,
									variant: "ghost",
									size: "lg",
									className: "rounded-xl font-semibold gap-1.5 h-12",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(House, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 487,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "முகப்பு" : "Home" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 488,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 486,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 485,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 472,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 377,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "border-border shadow-sm bg-white rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "px-5 py-4 border-b border-border/60",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-sm font-bold text-foreground",
								children: lang === "ta" ? "அடுத்து என்ன நடக்கும்?" : "What Happens Next?"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 498,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 497,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
							className: "p-5 space-y-4",
							children: [
								{
									icon: "1",
									text: lang === "ta" ? "உங்கள் புகார் துறை குழுவுக்கு வழிநடத்தப்படும்." : "Your complaint is routed to the concerned department team.",
									color: "bg-blue-100 text-blue-700"
								},
								{
									icon: "2",
									text: lang === "ta" ? "கள அலுவலர் தளத்தை ஆய்வு செய்வார்." : "A field officer will inspect the reported site.",
									color: "bg-amber-100 text-amber-700"
								},
								{
									icon: "3",
									text: lang === "ta" ? "SLA காலக்கெடுவுக்குள் பணி நிறைவேற்றப்படும்." : "Resolution is completed within the SLA timeline.",
									color: "bg-emerald-100 text-emerald-700"
								},
								{
									icon: "4",
									text: lang === "ta" ? "நீங்கள் சரிபார்க்கும்படி கேட்கப்படுவீர்கள்." : "You will be asked to verify the resolution.",
									color: "bg-violet-100 text-violet-700"
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: `flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold shrink-0 ${item.color}`,
									children: item.icon
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 518,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground leading-relaxed",
									children: item.text
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 521,
									columnNumber: 21
								}, this)]
							}, item.icon, true, {
								fileName: _jsxFileName,
								lineNumber: 517,
								columnNumber: 30
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 500,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 496,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "border-border shadow-sm bg-white rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "px-5 py-4 border-b border-border/60",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-sm font-bold text-foreground flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClipboardList, { className: "h-4 w-4 text-primary" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 530,
									columnNumber: 19
								}, this), lang === "ta" ? "புகார் நிலை சுருக்கம்" : "Complaint Status Summary"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 529,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 528,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
							className: "p-5 space-y-2.5 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between p-2.5 rounded-lg bg-blue-50/70 border border-blue-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-blue-800",
										children: lang === "ta" ? "புதிதாக பதிவு" : "Newly Registered"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 536,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-2 w-2 rounded-full bg-blue-500" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 537,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 535,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-indigo-800",
										children: lang === "ta" ? "துறைக்கு ஒதுக்கீடு" : "Department Assignment"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 540,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-2 w-2 rounded-full bg-indigo-500" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 541,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 539,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between p-2.5 rounded-lg bg-amber-50/70 border border-amber-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-amber-800",
										children: lang === "ta" ? "களப்பணி நடப்படுத்தல்" : "Field Work In Progress"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 544,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-2 w-2 rounded-full bg-amber-500" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 545,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 543,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-emerald-800",
										children: lang === "ta" ? "தீர்வு + உறுதிப்படுத்தல்" : "Resolution & Verified"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 548,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-2 w-2 rounded-full bg-emerald-500" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 549,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 547,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 534,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 527,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 495,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 375,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 364,
			columnNumber: 12
		}, this);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-[#f9f6f0] py-4 sm:py-6",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10 pb-28 sm:pb-16 bg-white min-h-screen rounded-3xl shadow-xl text-slate-950 border border-stone-200/80",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-display",
						children: lang === "ta" ? "புகாரைப் பதிவு செய்யவும்" : "Report a Complaint"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 566,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs sm:text-sm text-slate-800 font-semibold mt-1",
						children: lang === "ta" ? "உங்கள் பகுதியில் உள்ள பிரச்சினையை பதிவு செய்து அதன் முன்னேற்றத்தை ஒரே இடத்தில் கண்காணிக்கவும்." : "Report an issue in your area and track its progress from one place."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 569,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 565,
						columnNumber: 9
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							className: "rounded-lg text-xs font-bold gap-1.5 h-9 text-slate-900 border-slate-300 bg-white hover:bg-slate-100",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/dashboard",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClipboardList, { className: "h-3.5 w-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 576,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "எனது புகார்கள்" : "My Complaints" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 577,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 575,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 574,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							className: "rounded-lg text-xs font-bold gap-1.5 h-9 text-slate-900 border-slate-300 bg-white hover:bg-slate-100",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/complaints/track",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-3.5 w-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 582,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "புகாரைக் கண்காணிக்க" : "Track Complaint" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 583,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 581,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 580,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 573,
						columnNumber: 9
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 564,
					columnNumber: 7
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "lg:col-span-8 xl:col-span-9 space-y-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "border-border shadow-sm bg-white rounded-2xl overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "px-5 sm:px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 602,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 601,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
										className: "text-xl sm:text-2xl font-black text-slate-950",
										children: lang === "ta" ? "புதிய பிரச்சினையை பதிவு செய்க" : "Report a New Issue"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 605,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-slate-700 font-medium mt-0.5",
										children: lang === "ta" ? "படிகளை பின்பற்றி உங்கள் புகாரை பதிவு செய்யவும் — தனி கணக்கு தேவையில்லை" : "Follow the steps to register — no separate account required"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 608,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 604,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 600,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1 sm:gap-1.5",
									children: STEPS.map(({ num, label }) => {
										const isCompleted = step > num;
										const isCurrent = step === num;
										return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1 sm:gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: `flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black transition-all ${isCompleted ? "bg-emerald-600 text-white" : isCurrent ? "bg-red-700 text-white ring-4 ring-amber-400/60 shadow-xs" : "bg-slate-100 text-slate-700 border border-slate-300"}`,
													children: isCompleted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-3.5 w-3.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 624,
														columnNumber: 40
													}, this) : num
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 623,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: `text-[11px] font-bold hidden sm:inline ${isCurrent ? "text-red-700 font-black" : "text-slate-700 font-semibold"}`,
													children: label
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 626,
													columnNumber: 23
												}, this),
												num < 4 && /* @__PURE__ */ (void 0)("div", { className: `h-px w-4 sm:w-6 ${step > num ? "bg-emerald-400" : "bg-slate-200"}` }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 629,
													columnNumber: 35
												}, this)
											]
										}, num, true, {
											fileName: _jsxFileName,
											lineNumber: 622,
											columnNumber: 26
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 615,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 599,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "p-5 sm:p-6 text-slate-900",
								children: [
									step === 1 && /* @__PURE__ */ (void 0)("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl bg-gradient-to-r from-red-50/50 via-slate-50 to-amber-50/40 border border-red-200/80 p-4 sm:p-5",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-start gap-2.5 mb-3",
														children: [
															/* @__PURE__ */ (void 0)("div", {
																className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary",
																children: /* @__PURE__ */ (void 0)(Phone, { className: "h-4 w-4" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 644,
																	columnNumber: 25
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 643,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "flex-1",
																children: [/* @__PURE__ */ (void 0)("h3", {
																	className: "text-sm font-black text-slate-950",
																	children: lang === "ta" ? "மொபைல் எண் (கட்டாயம்)" : "Mobile Number (Mandatory)"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 647,
																	columnNumber: 25
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-[11px] text-slate-700 font-medium mt-0.5 leading-relaxed",
																	children: lang === "ta" ? "உங்கள் புகாரை கண்காணிக்க இதே மொபைல் எண் பயன்படுத்தப்படும். புதிய கணக்கு தேவையில்லை." : "Use this same mobile number later to login and track all your complaints. No separate registration needed."
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 650,
																	columnNumber: 25
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 646,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)(Badge, {
																className: "bg-primary/15 text-primary border-0 text-[10px] font-bold shrink-0",
																children: lang === "ta" ? "தேவை" : "Required"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 654,
																columnNumber: 23
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 642,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-2",
														children: [
															/* @__PURE__ */ (void 0)("div", {
																className: "relative",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-slate-700 select-none",
																	children: "+91"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 661,
																	columnNumber: 25
																}, this), /* @__PURE__ */ (void 0)(Input, {
																	id: "mobileInput",
																	type: "tel",
																	inputMode: "numeric",
																	maxLength: 15,
																	value: mobile,
																	onChange: (e) => {
																		const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
																		setMobile(onlyDigits);
																		setErrors((err) => ({
																			...err,
																			mobile: void 0
																		}));
																	},
																	onFocus: () => handleFieldFocus("mobile"),
																	placeholder: lang === "ta" ? "98765 43210" : "98765 43210",
																	className: "h-12 pl-16 rounded-xl text-base font-bold tracking-wider border-2 border-primary/40 bg-white text-slate-950 placeholder:text-slate-400 focus:border-primary focus-visible:ring-0 shadow-xs"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 662,
																	columnNumber: 25
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 660,
																columnNumber: 23
															}, this),
															errors.mobile && /* @__PURE__ */ (void 0)("p", {
																className: "text-xs text-destructive font-bold flex items-start gap-1 pt-0.5",
																children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "h-3.5 w-3.5 shrink-0 mt-0.5" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 672,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("span", { children: errors.mobile }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 673,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 671,
																columnNumber: 41
															}, this),
															!errors.mobile && mobile && validateIndianMobile(mobile).valid && /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-emerald-800 font-bold flex items-center gap-1 pt-0.5",
																children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-3.5 w-3.5 shrink-0" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 676,
																	columnNumber: 27
																}, this), lang === "ta" ? `எண் சரி: ${maskMobile(mobile)}` : `Number verified: ${maskMobile(mobile)}`]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 675,
																columnNumber: 90
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 659,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-200",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "text-[11px] font-bold text-slate-900 mb-1 block",
															children: lang === "ta" ? "பெயர் (விருப்பம்)" : "Full Name (Optional)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 684,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)(Input, {
															value: name,
															onChange: (e) => setName(e.target.value),
															onFocus: () => handleFieldFocus("name"),
															placeholder: lang === "ta" ? "உங்கள் பெயர்" : "Your name",
															className: "h-10 rounded-lg text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 687,
															columnNumber: 25
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 683,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "text-[11px] font-bold text-slate-900 mb-1 block",
															children: lang === "ta" ? "மின்னஞ்சல் (விருப்பம்)" : "Email (Optional)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 690,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)(Input, {
															type: "email",
															value: email,
															onChange: (e) => setEmail(e.target.value),
															onFocus: () => handleFieldFocus("email"),
															placeholder: "you@example.com",
															className: "h-10 rounded-lg text-sm text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 693,
															columnNumber: 25
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 689,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 682,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 641,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [
												/* @__PURE__ */ (void 0)("h3", {
													className: "text-sm font-black text-slate-950 mb-3",
													children: lang === "ta" ? "பிரச்சினை வகையை தேர்வு செய்யவும்" : "Select Issue Category"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 700,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2.5",
													children: CATEGORIES.map((cat) => {
														const icon = CATEGORY_ICONS[cat.id] ?? "📌";
														const isSelected = categoryId === cat.id;
														return /* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: () => {
																setCategoryId(cat.id);
																setErrors((e) => ({
																	...e,
																	category: void 0
																}));
																handleFieldFocus("category");
															},
															onFocus: () => handleFieldFocus("category"),
															className: `flex flex-col items-center justify-center gap-1.5 p-3 sm:p-4 rounded-2xl border-2 text-center transition-all cursor-pointer ${isSelected ? "border-primary bg-red-50/60 shadow-sm ring-2 ring-primary/20" : "border-slate-200 bg-white hover:border-primary/40 hover:bg-slate-50"}`,
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-2xl sm:text-3xl",
																children: icon
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 715,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: `text-[11px] sm:text-xs font-extrabold leading-tight ${isSelected ? "text-primary" : "text-slate-900"}`,
																children: bi(cat.name)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 716,
																columnNumber: 29
															}, this)]
														}, cat.id, true, {
															fileName: _jsxFileName,
															lineNumber: 707,
															columnNumber: 30
														}, this);
													})
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 703,
													columnNumber: 21
												}, this),
												errors.category && /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-destructive font-bold mt-2",
													children: errors.category
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 722,
													columnNumber: 41
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 699,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [
												/* @__PURE__ */ (void 0)("h3", {
													className: "text-sm font-black text-slate-950 mb-2",
													children: lang === "ta" ? "என்ன நடந்தது என்று கூறுங்கள்" : "Tell us what happened"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 727,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (void 0)(Textarea, {
														value: description,
														onChange: (e) => {
															setDescription(e.target.value);
															setErrors((err) => ({
																...err,
																description: void 0
															}));
														},
														onFocus: () => handleFieldFocus("description"),
														placeholder: lang === "ta" ? "பிரச்சினையை உங்கள் சொந்த வார்த்தைகளில் விவரிக்கவும்..." : "Describe the problem in your own words...",
														rows: 4,
														className: "resize-none text-sm font-semibold text-slate-950 bg-white border-slate-300 rounded-xl pr-14 placeholder:text-slate-400"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 731,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: startVoiceInput,
														disabled: isListening,
														className: `absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl transition-all cursor-pointer ${isListening ? "bg-red-100 text-red-600 animate-pulse" : "bg-primary/10 text-primary hover:bg-primary/20"}`,
														title: lang === "ta" ? "குரல் மூலம் பதிவு செய்ய" : "Record your explanation",
														children: isListening ? /* @__PURE__ */ (void 0)(MicOff, { className: "h-4 w-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 740,
															columnNumber: 40
														}, this) : /* @__PURE__ */ (void 0)(Mic, { className: "h-4 w-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 740,
															columnNumber: 73
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 739,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 730,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between mt-1.5",
													children: [/* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-slate-700 font-medium",
														children: lang === "ta" ? "நீங்கள் தமிழ் அல்லது ஆங்கிலத்தில் விவரிக்கலாம் அல்லது மைக் பட்டனை அழுத்தி பேசலாம்." : "You can describe the issue in Tamil or English or click the microphone to speak."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 744,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[11px] text-slate-700 font-bold",
														children: [description.length, "/500"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 747,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 743,
													columnNumber: 21
												}, this),
												voiceNotice && /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-blue-700 font-bold flex items-center gap-1 mt-1.5",
													children: [
														/* @__PURE__ */ (void 0)(CircleAlert, { className: "h-3.5 w-3.5 shrink-0" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 750,
															columnNumber: 25
														}, this),
														" ",
														voiceNotice
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 749,
													columnNumber: 37
												}, this),
												errors.description && /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-destructive font-bold mt-1",
													children: errors.description
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 752,
													columnNumber: 44
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 726,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 639,
										columnNumber: 30
									}, this),
									step === 2 && /* @__PURE__ */ (void 0)("div", {
										className: "space-y-5",
										children: [
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
												className: "text-sm font-black text-slate-950 mb-1",
												children: lang === "ta" ? "சான்றுகளைச் சேர்க்கவும்" : "Add Evidence"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 759,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-slate-700 font-medium mb-4",
												children: lang === "ta" ? "புகைப்படம் அல்லது வீடியோ சேர்ப்பது விரைவான தீர்வுக்கு உதவும். இது கட்டாயமில்லை." : "Adding photos or video helps the field team resolve faster. This is optional."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 762,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 758,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
												children: [
													/* @__PURE__ */ (void 0)("label", {
														tabIndex: 0,
														onFocus: () => handleFieldFocus("evidence"),
														className: "flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border-2 border-dashed border-slate-300 hover:border-primary bg-slate-50 hover:bg-red-50/40 cursor-pointer transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/30",
														children: [
															/* @__PURE__ */ (void 0)(Camera, { className: "h-7 w-7 text-primary" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 771,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "text-xs font-bold text-slate-950",
																children: lang === "ta" ? "📷 புகைப்படம் எடுக்க" : "📷 Take Photo"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 772,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("input", {
																type: "file",
																accept: "image/*",
																capture: "environment",
																className: "sr-only",
																onChange: (e) => handleFileUpload(e, "image")
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 775,
																columnNumber: 23
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 770,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("label", {
														tabIndex: 0,
														onFocus: () => handleFieldFocus("evidence"),
														className: "flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border-2 border-dashed border-slate-300 hover:border-primary bg-slate-50 hover:bg-red-50/40 cursor-pointer transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/30",
														children: [
															/* @__PURE__ */ (void 0)(Image, { className: "h-7 w-7 text-blue-600" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 779,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "text-xs font-bold text-slate-950",
																children: lang === "ta" ? "🖼 புகைப்படம் பதிவேற்ற" : "🖼 Upload Photo"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 780,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("input", {
																type: "file",
																accept: "image/*",
																multiple: true,
																className: "sr-only",
																onChange: (e) => handleFileUpload(e, "image")
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 783,
																columnNumber: 23
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 778,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("label", {
														tabIndex: 0,
														onFocus: () => handleFieldFocus("evidence"),
														className: "flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border-2 border-dashed border-slate-300 hover:border-primary bg-slate-50 hover:bg-red-50/40 cursor-pointer transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/30",
														children: [
															/* @__PURE__ */ (void 0)(Video, { className: "h-7 w-7 text-rose-600" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 787,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "text-xs font-bold text-slate-950",
																children: lang === "ta" ? "🎥 வீடியோ பதிவேற்ற" : "🎥 Upload Video"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 788,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("input", {
																type: "file",
																accept: "video/*",
																className: "sr-only",
																onChange: (e) => handleFileUpload(e, "video")
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 791,
																columnNumber: 23
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 786,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 768,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-[11px] text-slate-700 font-medium",
												children: lang === "ta" ? "அதிகபட்சம் 5 புகைப்படங்கள். வீடியோ விருப்பத்திற்குரியது." : "Maximum 5 images. Video is optional."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 795,
												columnNumber: 19
											}, this),
											media.length > 0 && /* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3",
												children: media.map((m) => /* @__PURE__ */ (void 0)("div", {
													className: "relative group rounded-xl overflow-hidden border border-slate-300 bg-slate-100 aspect-square",
													children: [m.type === "image" ? /* @__PURE__ */ (void 0)("img", {
														src: m.url,
														alt: m.name,
														className: "w-full h-full object-cover"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 800,
														columnNumber: 49
													}, this) : /* @__PURE__ */ (void 0)("div", {
														className: "w-full h-full flex items-center justify-center bg-slate-100",
														children: /* @__PURE__ */ (void 0)(Video, { className: "h-8 w-8 text-slate-400" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 801,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 800,
														columnNumber: 123
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => removeMedia(m.id),
														className: "absolute top-1.5 right-1.5 h-6 w-6 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer",
														children: /* @__PURE__ */ (void 0)(Trash2, { className: "h-3 w-3" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 804,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 803,
														columnNumber: 27
													}, this)]
												}, m.id, true, {
													fileName: _jsxFileName,
													lineNumber: 799,
													columnNumber: 39
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 798,
												columnNumber: 40
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 757,
										columnNumber: 30
									}, this),
									step === 3 && /* @__PURE__ */ (void 0)("div", {
										className: "space-y-5",
										children: [
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
												className: "text-sm font-black text-slate-950 mb-1",
												children: lang === "ta" ? "பிரச்சினை எங்கே உள்ளது?" : "Where is the issue?"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 813,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-slate-700 font-medium mb-4",
												children: lang === "ta" ? "சரியான இடத்தை குறிக்க கீழ்கண்ட ஒரு வழியை தேர்வு செய்யவும்." : "Select one of the options below to mark the exact location."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 816,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 812,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
												children: [
													/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => {
															setLocationMode("current");
															useCurrentLocation();
															handleFieldFocus("location");
														},
														onFocus: () => handleFieldFocus("location"),
														className: `flex items-center gap-2.5 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${locationMode === "current" ? "border-primary bg-red-50/60" : "border-slate-200 hover:border-primary/40 bg-white"}`,
														children: [/* @__PURE__ */ (void 0)(MapPin, { className: "h-5 w-5 text-primary shrink-0" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 828,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
															className: "text-xs font-black text-slate-950",
															children: lang === "ta" ? "📍 தற்போதைய இடம்" : "📍 Current Location"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 830,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("p", {
															className: "text-[10px] text-slate-700 font-medium",
															children: lang === "ta" ? "GPS பயன்படுத்தவும்" : "Use GPS"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 833,
															columnNumber: 25
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 829,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 823,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => {
															setLocationMode("search");
															handleFieldFocus("location_search");
														},
														onFocus: () => handleFieldFocus("location_search"),
														className: `flex items-center gap-2.5 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${locationMode === "search" ? "border-primary bg-red-50/60" : "border-slate-200 hover:border-primary/40 bg-white"}`,
														children: [/* @__PURE__ */ (void 0)(Search, { className: "h-5 w-5 text-blue-600 shrink-0" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 843,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
															className: "text-xs font-black text-slate-950",
															children: lang === "ta" ? "🔎 முகவரி தேடல்" : "🔎 Search Location"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 845,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("p", {
															className: "text-[10px] text-slate-700 font-medium",
															children: lang === "ta" ? "தெரு / பகுதி" : "Street / Area"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 848,
															columnNumber: 25
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 844,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 839,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => {
															setLocationMode("map");
															handleFieldFocus("location");
														},
														onFocus: () => handleFieldFocus("location"),
														className: `flex items-center gap-2.5 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${locationMode === "map" ? "border-primary bg-red-50/60" : "border-slate-200 hover:border-primary/40 bg-white"}`,
														children: [/* @__PURE__ */ (void 0)(MapPin, { className: "h-5 w-5 text-emerald-600 shrink-0" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 858,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
															className: "text-xs font-black text-slate-950",
															children: lang === "ta" ? "🗺 வரைபடத்தில் தேர்வு" : "🗺 Select on Map"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 860,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("p", {
															className: "text-[10px] text-slate-700 font-medium",
															children: lang === "ta" ? "வரைபடத்தில் கிளிக்" : "Click on map"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 863,
															columnNumber: 25
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 859,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 854,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 822,
												columnNumber: 19
											}, this),
											locLoading && /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-blue-700 font-bold animate-pulse",
												children: lang === "ta" ? "உங்கள் இடத்தை கண்டறிகிறது..." : "Detecting your location..."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 870,
												columnNumber: 34
											}, this),
											locationMode === "search" && /* @__PURE__ */ (void 0)("div", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (void 0)(Input, {
													value: searchQuery,
													onChange: (e) => setSearchQuery(e.target.value),
													onFocus: () => handleFieldFocus("location_search"),
													placeholder: lang === "ta" ? "தெரு, பகுதி அல்லது அடையாளம்..." : "Street, area, or landmark...",
													className: "h-10 rounded-lg text-sm font-semibold text-slate-950 bg-white border-slate-300 flex-1 placeholder:text-slate-400"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 876,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)(Button, {
													type: "button",
													size: "sm",
													className: "h-10 px-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold",
													onClick: () => {
														if (searchQuery.trim()) {
															setAddress(`${searchQuery.trim()}, Thousand Lights, Chennai`);
															setSelectedWardId("w-110");
														}
													},
													children: /* @__PURE__ */ (void 0)(Search, { className: "h-4 w-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 883,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 877,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 875,
												columnNumber: 49
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-xl overflow-hidden border border-slate-300 shadow-sm",
												children: /* @__PURE__ */ (void 0)("iframe", {
													title: "Issue Location Map",
													src: `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat},${lng}&zoom=16`,
													width: "100%",
													height: "280",
													style: { border: 0 },
													allowFullScreen: true,
													loading: "lazy"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 889,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 888,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-1.5",
													children: [
														/* @__PURE__ */ (void 0)("label", {
															className: "text-xs font-black text-slate-950",
															children: lang === "ta" ? "முகவரி" : "Address"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 897,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)(Input, {
															value: address,
															onChange: (e) => {
																setAddress(e.target.value);
																setErrors((err) => ({
																	...err,
																	location: void 0
																}));
															},
															onFocus: () => handleFieldFocus("address"),
															className: "h-10 rounded-lg text-xs font-semibold text-slate-950 bg-white border-slate-300"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 900,
															columnNumber: 23
														}, this),
														errors.location && /* @__PURE__ */ (void 0)("p", {
															className: "text-xs text-destructive font-bold",
															children: errors.location
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 907,
															columnNumber: 43
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 896,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (void 0)("label", {
														className: "text-xs font-black text-slate-950",
														children: lang === "ta" ? "வார்டு" : "Ward"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 910,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("select", {
														value: selectedWardId,
														onChange: (e) => setSelectedWardId(e.target.value),
														onFocus: () => handleFieldFocus("ward"),
														className: "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs font-bold text-slate-950",
														children: WARDS.map((w) => /* @__PURE__ */ (void 0)("option", {
															value: w.id,
															children: [
																"Ward ",
																w.number,
																" — ",
																bi(w.name)
															]
														}, w.id, true, {
															fileName: _jsxFileName,
															lineNumber: 914,
															columnNumber: 41
														}, this))
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 913,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 909,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 895,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 811,
										columnNumber: 30
									}, this),
									step === 4 && /* @__PURE__ */ (void 0)("div", {
										className: "space-y-5",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												tabIndex: 0,
												onFocus: () => handleFieldFocus("review"),
												className: "focus:outline-none",
												children: [/* @__PURE__ */ (void 0)("h3", {
													className: "text-sm font-black text-slate-950 mb-1",
													children: lang === "ta" ? "உங்கள் புகாரை சரிபார்க்கவும்" : "Review Your Complaint"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 925,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-slate-700 font-medium mb-4",
													children: lang === "ta" ? "எல்லா விவரங்களும் சரியா என்று உறுதிப்படுத்திய பின் சமர்ப்பிக்கவும்." : "Please confirm all details are correct before submitting."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 928,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 924,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												tabIndex: 0,
												onFocus: () => handleFieldFocus("review"),
												className: "rounded-xl bg-slate-50 border border-slate-200 p-4 sm:p-5 space-y-3 focus:outline-none focus:ring-1 focus:ring-primary/20",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-xs font-bold text-slate-700",
															children: lang === "ta" ? "வகை" : "Category"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 936,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-sm font-black text-slate-950 flex items-center gap-1.5",
																children: [/* @__PURE__ */ (void 0)("span", { children: CATEGORY_ICONS[categoryId] ?? "📌" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 939,
																	columnNumber: 27
																}, this), selectedCategory ? bi(selectedCategory.name) : "—"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 938,
																columnNumber: 25
															}, this), /* @__PURE__ */ (void 0)("button", {
																type: "button",
																onClick: () => setStep(1),
																className: "text-primary hover:text-primary/80",
																children: /* @__PURE__ */ (void 0)(Pencil, { className: "h-3 w-3" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 943,
																	columnNumber: 27
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 942,
																columnNumber: 25
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 937,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 935,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "border-t border-slate-200 pt-3",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex items-start justify-between",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-xs font-bold text-slate-700 shrink-0",
																children: lang === "ta" ? "விவரம்" : "Description"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 950,
																columnNumber: 25
															}, this), /* @__PURE__ */ (void 0)("button", {
																type: "button",
																onClick: () => setStep(1),
																className: "text-primary hover:text-primary/80 shrink-0 ml-2",
																children: /* @__PURE__ */ (void 0)(Pencil, { className: "h-3 w-3" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 952,
																	columnNumber: 27
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 951,
																columnNumber: 25
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 949,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("p", {
															className: "text-xs font-bold text-slate-950 mt-1 leading-relaxed",
															children: description || "—"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 955,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 948,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "border-t border-slate-200 pt-3 flex items-center justify-between",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-xs font-bold text-slate-700",
															children: lang === "ta" ? "சான்றுகள்" : "Evidence"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 959,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-xs font-bold text-slate-950",
																children: media.length > 0 ? `${media.filter((m) => m.type === "image").length} ${lang === "ta" ? "புகைப்படம்" : "photo(s)"}${media.some((m) => m.type === "video") ? ` + 1 ${lang === "ta" ? "வீடியோ" : "video"}` : ""}` : lang === "ta" ? "சான்று இல்லை" : "No evidence attached"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 961,
																columnNumber: 25
															}, this), /* @__PURE__ */ (void 0)("button", {
																type: "button",
																onClick: () => setStep(2),
																className: "text-primary hover:text-primary/80",
																children: /* @__PURE__ */ (void 0)(Pencil, { className: "h-3 w-3" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 965,
																	columnNumber: 27
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 964,
																columnNumber: 25
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 960,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 958,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "border-t border-slate-200 pt-3 flex items-center justify-between",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-xs font-bold text-slate-700",
															children: lang === "ta" ? "இடம்" : "Location"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 971,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-xs font-bold text-slate-950 truncate max-w-[200px]",
																children: address
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 973,
																columnNumber: 25
															}, this), /* @__PURE__ */ (void 0)("button", {
																type: "button",
																onClick: () => setStep(3),
																className: "text-primary hover:text-primary/80",
																children: /* @__PURE__ */ (void 0)(Pencil, { className: "h-3 w-3" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 975,
																	columnNumber: 27
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 974,
																columnNumber: 25
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 972,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 970,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "border-t border-slate-200 pt-3 flex items-center justify-between",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-xs font-bold text-slate-700",
															children: lang === "ta" ? "வார்டு" : "Ward"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 981,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-xs font-bold text-slate-950",
															children: [
																"Ward ",
																selectedWard.number,
																" — ",
																bi(selectedWard.name)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 982,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 980,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 934,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-4 sm:p-5",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-2 mb-3",
														children: [
															/* @__PURE__ */ (void 0)(Cpu, { className: "h-4 w-4 text-blue-600" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 989,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("h4", {
																className: "text-sm font-black text-slate-950",
																children: "NAMMA KURAL Smart Check"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 990,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)(Badge, {
																className: "bg-blue-100 text-blue-800 border-0 text-[10px] font-bold ml-auto",
																children: lang === "ta" ? "முன்னோட்டம்" : "Preview"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 991,
																columnNumber: 23
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 988,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs",
														children: [
															/* @__PURE__ */ (void 0)("div", {
																className: "bg-white rounded-lg p-3 border border-blue-100",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-slate-700 font-bold",
																	children: lang === "ta" ? "பரிந்துரைக்கப்பட்ட துறை" : "Suggested Department"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 997,
																	columnNumber: 25
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "font-black text-slate-950 mt-0.5",
																	children: bi(selectedDept.name)
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 998,
																	columnNumber: 25
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 996,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "bg-white rounded-lg p-3 border border-blue-100",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-slate-700 font-bold",
																	children: lang === "ta" ? "முன்னுரிமை" : "Priority"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1001,
																	columnNumber: 25
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "font-black text-amber-800 mt-0.5",
																	children: lang === "ta" ? "நடுத்தரம்" : "Medium"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1002,
																	columnNumber: 25
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1e3,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "bg-white rounded-lg p-3 border border-blue-100",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-slate-700 font-bold",
																	children: lang === "ta" ? "நகல் சோதனை" : "Possible Duplicate"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1005,
																	columnNumber: 25
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "font-black text-emerald-800 mt-0.5 flex items-center gap-1",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-3 w-3" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1007,
																		columnNumber: 27
																	}, this), lang === "ta" ? "ஒத்த புகார் இல்லை" : "No similar complaint nearby"]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 1006,
																	columnNumber: 25
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1004,
																columnNumber: 23
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 995,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[10px] text-slate-700 font-semibold mt-3 italic",
														children: lang === "ta" ? "இது தற்போது முன்னோட்ட AI பகுப்பாய்வு. இறுதி துறை ஒதுக்கீடு அலுவலகத்தால் உறுதிப்படுத்தப்படும்." : "This is a preview analysis. Final department assignment will be confirmed by the constituency office."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1012,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 987,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 923,
										columnNumber: 30
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 636,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 598,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 595,
						columnNumber: 9
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "lg:col-span-4 xl:col-span-3 space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "border-border shadow-sm bg-white rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "px-5 py-4 border-b border-slate-200",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-sm font-black text-slate-950",
									children: lang === "ta" ? "இன்றைய சுருக்கம்" : "Today's Overview"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1028,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1027,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "p-4 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between p-3 rounded-xl bg-blue-50 border border-blue-200",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-4.5 w-4.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1037,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1036,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-xs font-extrabold text-slate-950",
												children: lang === "ta" ? "புதிய பிரச்சினைகள்" : "New Issues"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1039,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1035,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-2xl font-black text-blue-700",
											children: "1"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1043,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1034,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between p-3 rounded-xl bg-amber-50 border border-amber-200",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-4.5 w-4.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1050,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1049,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-xs font-extrabold text-slate-950",
												children: lang === "ta" ? "செயல்பாட்டில்" : "In Progress"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1052,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1048,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-2xl font-black text-amber-700",
											children: "0"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1056,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1047,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-4.5 w-4.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1063,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1062,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-xs font-extrabold text-slate-950",
												children: lang === "ta" ? "தீர்க்கப்பட்டது" : "Resolved"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1065,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1061,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-2xl font-black text-emerald-700",
											children: "1"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1069,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1060,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/dashboard",
										className: "flex items-center justify-center gap-1.5 pt-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "எனது புகார்களைப் பார்க்க" : "View My Complaints" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1074,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3.5 w-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1075,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1073,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1032,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1026,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
							className: "border-border shadow-sm bg-white rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "px-5 py-4 border-b border-slate-200",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-sm font-black text-slate-950 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "h-3.5 w-3.5 text-amber-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1084,
										columnNumber: 17
									}, this), lang === "ta" ? "குறிப்புகள்" : "Quick Tips"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1083,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1082,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
								className: "p-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
									className: "space-y-2.5 text-xs text-slate-800 font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-primary font-bold shrink-0",
												children: "•"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1091,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "புகைப்படம் சேர்ப்பது விரைவான தீர்வுக்கு உதவும்." : "Adding photos helps the team resolve faster." }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1092,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1090,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-primary font-bold shrink-0",
												children: "•"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1095,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "சரியான இடத்தை தேர்வு செய்வது மிக முக்கியம்." : "Selecting the exact location improves accuracy." }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1096,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1094,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-primary font-bold shrink-0",
												children: "•"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1099,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "குரல் உள்ளீடு தமிழ் மற்றும் ஆங்கிலத்தில் கிடைக்கும்." : "Voice input supports Tamil and English." }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1100,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1098,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1089,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1088,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1081,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1024,
						columnNumber: 9
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 590,
					columnNumber: 7
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-border px-4 py-3 sm:relative sm:bg-transparent sm:backdrop-blur-none sm:border-0 sm:px-0 sm:py-0 sm:mt-6 sm:z-auto",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-7xl flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "button",
								variant: "outline",
								size: "lg",
								onClick: step === 1 ? () => navigate({ to: "/" }) : handleBack,
								className: "h-11 px-5 rounded-xl font-semibold gap-1.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1116,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "பின்செல்" : "Back" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1117,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1113,
								columnNumber: 13
							}, this), step < 4 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "button",
								size: "lg",
								onClick: handleNext,
								className: "h-11 px-6 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white gap-1.5 text-sm shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: step === 1 ? lang === "ta" ? "அடுத்தது: இடம் சேர்க்க →" : "Next: Add Location →" : step === 2 ? lang === "ta" ? "அடுத்தது: புகைப்படம் சேர்க்க →" : "Next: Add Photo →" : step === 3 ? lang === "ta" ? "புகாரை சரிபார் →" : "Review Complaint →" : lang === "ta" ? "சமர்ப்பிக்கவும் →" : "Submit My Complaint →" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1121,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1122,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1120,
								columnNumber: 25
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "button",
								size: "lg",
								onClick: handleSubmit,
								onFocus: () => handleFieldFocus("review"),
								className: "h-11 px-6 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5 text-sm shadow-md cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1124,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "புகாரை சமர்ப்பிக்கவும்" : "Submit My Complaint" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1125,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1123,
								columnNumber: 27
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1112,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-semibold text-muted-foreground shrink-0",
							children: lang === "ta" ? `படி ${step} / 4` : `Step ${step} of 4`
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1130,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1110,
						columnNumber: 9
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1109,
					columnNumber: 7
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 562,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 561,
		columnNumber: 10
	}, this);
}
//#endregion
export { ComplaintRegister as component };
