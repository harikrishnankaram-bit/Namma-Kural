import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { s as router_exports } from "./router-YfaUB1VU2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-DHE1k7Oc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var strings = {
	"brand.tagline": {
		en: "Citizen-first Digital Governance",
		ta: "குடிமகன் முதன்மை டிஜிட்டல் ஆளுகை"
	},
	"brand.meaning": {
		en: "Accessible • Responsive • Accountable • Modern",
		ta: "அணுகக்கூடிய • பதிலளிக்கும் • பொறுப்பான • நவீன"
	},
	"common.language": {
		en: "Language",
		ta: "மொழி"
	},
	"common.loading": {
		en: "Loading NAMMA KURAL…",
		ta: "நம்ம குரல் ஏற்றப்படுகிறது…"
	},
	"common.submit": {
		en: "Submit",
		ta: "சமர்ப்பிக்கவும்"
	},
	"common.next": {
		en: "Next",
		ta: "அடுத்து"
	},
	"common.back": {
		en: "Back",
		ta: "பின்செல்"
	},
	"common.cancel": {
		en: "Cancel",
		ta: "ரத்து"
	},
	"common.confirm": {
		en: "Confirm",
		ta: "உறுதிப்படுத்து"
	},
	"common.search": {
		en: "Search",
		ta: "தேடு"
	},
	"common.all": {
		en: "All",
		ta: "அனைத்தும்"
	},
	"common.status": {
		en: "Status",
		ta: "நிலை"
	},
	"common.category": {
		en: "Category",
		ta: "வகை"
	},
	"common.ward": {
		en: "Ward",
		ta: "வார்டு"
	},
	"common.department": {
		en: "Department",
		ta: "துறை"
	},
	"common.date": {
		en: "Date",
		ta: "தேதி"
	},
	"common.time": {
		en: "Time",
		ta: "நேரம்"
	},
	"common.location": {
		en: "Location",
		ta: "இடம்"
	},
	"common.viewAll": {
		en: "View all",
		ta: "அனைத்தையும் பார்"
	},
	"common.readMore": {
		en: "Read more",
		ta: "மேலும் படிக்க"
	},
	"common.optional": {
		en: "Optional",
		ta: "விருப்பத்தேர்வு"
	},
	"common.required": {
		en: "Required",
		ta: "அவசியம்"
	},
	"common.demoData": {
		en: "Demo data",
		ta: "மாதிரி தரவு"
	},
	"common.close": {
		en: "Close",
		ta: "மூடு"
	},
	"common.download": {
		en: "Download receipt",
		ta: "ரசீதை பதிவிறக்கு"
	},
	"common.notFound": {
		en: "Nothing found",
		ta: "எதுவும் கிடைக்கவில்லை"
	},
	"nav.home": {
		en: "Home",
		ta: "முகப்பு"
	},
	"nav.report": {
		en: "Report an Issue",
		ta: "பிரச்சினையை பதிவு செய்"
	},
	"nav.track": {
		en: "Track My Issue",
		ta: "எனது புகாரை கண்காணி"
	},
	"nav.map": {
		en: "Live Map",
		ta: "நேரடி வரைபடம்"
	},
	"nav.schemes": {
		en: "Government Schemes",
		ta: "அரசு திட்டங்கள்"
	},
	"nav.appointment": {
		en: "Meet Your MLA",
		ta: "எம்.எல்.ஏ.வை சந்திக்க"
	},
	"nav.projects": {
		en: "Development",
		ta: "மேம்பாட்டு பணிகள்"
	},
	"nav.wards": {
		en: "Your Ward",
		ta: "உங்கள் வார்டு"
	},
	"nav.updates": {
		en: "Updates",
		ta: "செய்திகள்"
	},
	"nav.transparency": {
		en: "Transparency",
		ta: "வெளிப்படைத்தன்மை"
	},
	"nav.notifications": {
		en: "Notifications",
		ta: "அறிவிப்புகள்"
	},
	"nav.login": {
		en: "Login",
		ta: "உள்நுழை"
	},
	"nav.logout": {
		en: "Logout",
		ta: "வெளியேறு"
	},
	"nav.dashboard": {
		en: "My Dashboard",
		ta: "எனது டாஷ்போர்டு"
	},
	"nav.menu": {
		en: "Menu",
		ta: "பட்டி"
	},
	"nav.emergency": {
		en: "Emergency Help",
		ta: "அவசர உதவி"
	},
	"home.hero.title": {
		en: "Your Voice. Your Area. NAMMA KURAL.",
		ta: "உங்கள் குரல். உங்கள் பகுதி. நம்ம குரல்."
	},
	"home.hero.sub": {
		en: "Report issues, access services, track progress and stay connected with your constituency.",
		ta: "பிரச்சினைகளை பதிவு செய்யுங்கள், சேவைகளை அணுகுங்கள், முன்னேற்றத்தை கண்காணியுங்கள், உங்கள் தொகுதியுடன் இணைந்திருங்கள்."
	},
	"home.search.placeholder": {
		en: "What do you need help with?",
		ta: "உங்களுக்கு என்ன உதவி வேண்டும்?"
	},
	"home.search.s1": {
		en: "Report a road problem",
		ta: "சாலை பிரச்சினையை பதிவு செய்ய"
	},
	"home.search.s2": {
		en: "Check my complaint",
		ta: "எனது புகாரை பார்க்க"
	},
	"home.search.s3": {
		en: "Find a government scheme",
		ta: "அரசு திட்டத்தை கண்டறிய"
	},
	"home.search.s4": {
		en: "Book an appointment",
		ta: "சந்திப்பு பதிவு செய்ய"
	},
	"home.search.s5": {
		en: "Find an emergency service",
		ta: "அவசர சேவையை கண்டறிய"
	},
	"home.search.s6": {
		en: "View constituency projects",
		ta: "தொகுதி திட்டங்களை பார்க்க"
	},
	"home.services.title": {
		en: "Quick Citizen Services",
		ta: "விரைவு குடிமகன் சேவைகள்"
	},
	"home.live.title": {
		en: "NAMMA KURAL Live Status",
		ta: "நம்ம குரல் நேரடி நிலை"
	},
	"home.live.resolved": {
		en: "Complaints Resolved",
		ta: "தீர்க்கப்பட்ட புகார்கள்"
	},
	"home.live.progress": {
		en: "Complaints In Progress",
		ta: "நடைபெறும் புகார்கள்"
	},
	"home.live.new": {
		en: "New Complaints",
		ta: "புதிய புகார்கள்"
	},
	"home.live.cta": {
		en: "View Constituency Status",
		ta: "தொகுதி நிலையை பார்க்க"
	},
	"home.map.title": {
		en: "What's Happening Around You?",
		ta: "உங்கள் சுற்றுவட்டாரத்தில் என்ன நடக்கிறது?"
	},
	"home.map.sub": {
		en: "Live civic issues and development works across the constituency.",
		ta: "தொகுதி முழுவதும் நேரடி குடிமை பிரச்சினைகள் மற்றும் மேம்பாட்டு பணிகள்."
	},
	"home.updates.title": {
		en: "Latest Constituency Updates",
		ta: "சமீபத்திய தொகுதி செய்திகள்"
	},
	"home.schemes.title": {
		en: "Schemes you may be eligible for",
		ta: "உங்களுக்கு பொருந்தக்கூடிய திட்டங்கள்"
	},
	"report.title": {
		en: "Report an Issue",
		ta: "பிரச்சினையை பதிவு செய்"
	},
	"report.step1": {
		en: "Choose category",
		ta: "வகையை தேர்வு செய்"
	},
	"report.step2": {
		en: "Describe the problem",
		ta: "பிரச்சினையை விவரிக்கவும்"
	},
	"report.step3": {
		en: "Add evidence",
		ta: "ஆதாரம் சேர்க்கவும்"
	},
	"report.step4": {
		en: "Select location",
		ta: "இடத்தை தேர்வு செய்"
	},
	"report.step5": {
		en: "AI review",
		ta: "AI சரிபார்ப்பு"
	},
	"report.step6": {
		en: "Submit",
		ta: "சமர்ப்பிக்கவும்"
	},
	"report.describe.placeholder": {
		en: "Tell us what is wrong, in your own words…",
		ta: "என்ன பிரச்சினை என்பதை உங்கள் சொற்களில் கூறுங்கள்…"
	},
	"report.voice": {
		en: "Speak instead of typing",
		ta: "தட்டச்சு செய்யாமல் பேசுங்கள்"
	},
	"report.listening": {
		en: "Listening… speak now",
		ta: "கேட்கிறது… இப்போது பேசுங்கள்"
	},
	"report.voiceUnsupported": {
		en: "Voice input is not supported on this device.",
		ta: "இந்த சாதனத்தில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை."
	},
	"report.upload.photo": {
		en: "Photo",
		ta: "புகைப்படம்"
	},
	"report.upload.video": {
		en: "Video",
		ta: "வீடியோ"
	},
	"report.upload.voice": {
		en: "Voice note",
		ta: "குரல் குறிப்பு"
	},
	"report.loc.current": {
		en: "Use Current Location",
		ta: "தற்போதைய இடத்தை பயன்படுத்து"
	},
	"report.loc.search": {
		en: "Search Address",
		ta: "முகவரியை தேடு"
	},
	"report.loc.map": {
		en: "Select on Map",
		ta: "வரைபடத்தில் தேர்வு செய்"
	},
	"report.ai.detected": {
		en: "Detected Category",
		ta: "கண்டறியப்பட்ட வகை"
	},
	"report.ai.dept": {
		en: "Suggested Department",
		ta: "பரிந்துரைக்கப்பட்ட துறை"
	},
	"report.ai.priority": {
		en: "Priority",
		ta: "முன்னுரிமை"
	},
	"report.ai.duplicate": {
		en: "Possible Duplicate",
		ta: "சாத்தியமான நகல்"
	},
	"report.ai.confirm": {
		en: "I confirm these details are correct",
		ta: "இந்த விவரங்கள் சரியானவை என உறுதிப்படுத்துகிறேன்"
	},
	"report.success": {
		en: "Complaint registered",
		ta: "புகார் பதிவு செய்யப்பட்டது"
	},
	"report.receipt": {
		en: "Digital Receipt",
		ta: "டிஜிட்டல் ரசீது"
	},
	"report.trackNow": {
		en: "Track Status",
		ta: "நிலையை கண்காணி"
	},
	"report.err.category": {
		en: "Please choose a category.",
		ta: "தயவுசெய்து ஒரு வகையை தேர்வு செய்யவும்."
	},
	"report.err.description": {
		en: "Please describe the problem in at least 10 characters.",
		ta: "குறைந்தது 10 எழுத்துகளில் பிரச்சினையை விவரிக்கவும்."
	},
	"report.err.location": {
		en: "Please select a location.",
		ta: "தயவுசெய்து இடத்தை தேர்வு செய்யவும்."
	},
	"report.err.confirm": {
		en: "Please confirm the details before submitting.",
		ta: "சமர்ப்பிக்கும் முன் விவரங்களை உறுதிப்படுத்தவும்."
	},
	"track.title": {
		en: "Track My Issue",
		ta: "எனது புகாரை கண்காணி"
	},
	"track.placeholder": {
		en: "Enter Complaint ID, e.g. NK-2026-000245",
		ta: "புகார் எண்ணை உள்ளிடவும், எ.கா. NK-2026-000245"
	},
	"track.timeline": {
		en: "Progress Timeline",
		ta: "முன்னேற்ற காலவரிசை"
	},
	"track.beforeAfter": {
		en: "Before & After Proof",
		ta: "முன் & பின் ஆதாரம்"
	},
	"track.before": {
		en: "Before",
		ta: "முன்"
	},
	"track.after": {
		en: "After",
		ta: "பின்"
	},
	"track.slider": {
		en: "Slider",
		ta: "ஸ்லைடர்"
	},
	"track.sideBySide": {
		en: "Side by side",
		ta: "அருகருகே"
	},
	"track.completedOn": {
		en: "Work Completed On",
		ta: "பணி முடிந்த நாள்"
	},
	"track.verify.q": {
		en: "Has your issue been resolved?",
		ta: "உங்கள் பிரச்சினை தீர்க்கப்பட்டதா?"
	},
	"track.verify.yes": {
		en: "Yes, Resolved",
		ta: "ஆம், தீர்ந்தது"
	},
	"track.verify.no": {
		en: "No, Still an Issue",
		ta: "இல்லை, இன்னும் உள்ளது"
	},
	"track.verify.rating": {
		en: "Rate the service",
		ta: "சேவையை மதிப்பிடுங்கள்"
	},
	"track.verify.comment": {
		en: "Add a comment",
		ta: "கருத்து சேர்க்கவும்"
	},
	"track.verify.reopen": {
		en: "Reopen Complaint",
		ta: "புகாரை மீண்டும் திற"
	},
	"track.verify.thanks": {
		en: "Thank you for verifying.",
		ta: "உறுதிப்படுத்தியதற்கு நன்றி."
	},
	"schemes.title": {
		en: "Find Government Schemes",
		ta: "அரசு திட்டங்களை கண்டறியுங்கள்"
	},
	"schemes.finder": {
		en: "Find Schemes for Me",
		ta: "எனக்கான திட்டங்களை கண்டறி"
	},
	"schemes.overview": {
		en: "Overview",
		ta: "மேலோட்டம்"
	},
	"schemes.benefits": {
		en: "Benefits",
		ta: "பயன்கள்"
	},
	"schemes.eligibility": {
		en: "Eligibility",
		ta: "தகுதி"
	},
	"schemes.documents": {
		en: "Required Documents",
		ta: "தேவையான ஆவணங்கள்"
	},
	"schemes.process": {
		en: "Application Process",
		ta: "விண்ணப்ப நடைமுறை"
	},
	"schemes.source": {
		en: "Official Source",
		ta: "அதிகாரப்பூர்வ ஆதாரம்"
	},
	"schemes.apply": {
		en: "Apply",
		ta: "விண்ணப்பிக்க"
	},
	"schemes.relevant": {
		en: "Potentially Relevant Schemes",
		ta: "பொருந்தக்கூடிய திட்டங்கள்"
	},
	"schemes.disclaimer": {
		en: "This is guidance only. Final eligibility is decided by the concerned department against official rules.",
		ta: "இது வழிகாட்டுதல் மட்டுமே. இறுதி தகுதி சம்பந்தப்பட்ட துறையால் அதிகாரப்பூர்வ விதிகளின்படி முடிவு செய்யப்படும்."
	},
	"schemes.q.age": {
		en: "Your age",
		ta: "உங்கள் வயது"
	},
	"schemes.q.gender": {
		en: "Gender",
		ta: "பாலினம்"
	},
	"schemes.q.income": {
		en: "Annual family income (₹)",
		ta: "ஆண்டு குடும்ப வருமானம் (₹)"
	},
	"schemes.q.occupation": {
		en: "Occupation",
		ta: "தொழில்"
	},
	"schemes.q.education": {
		en: "Education",
		ta: "கல்வி"
	},
	"appt.title": {
		en: "Meet Your MLA",
		ta: "உங்கள் எம்.எல்.ஏ.வை சந்திக்க"
	},
	"appt.request": {
		en: "Request Appointment",
		ta: "சந்திப்பு கோரிக்கை"
	},
	"appt.purpose": {
		en: "Purpose",
		ta: "நோக்கம்"
	},
	"appt.prefDate": {
		en: "Preferred Date",
		ta: "விரும்பிய தேதி"
	},
	"appt.prefTime": {
		en: "Available Time",
		ta: "கிடைக்கும் நேரம்"
	},
	"appt.description": {
		en: "Description",
		ta: "விவரம்"
	},
	"appt.docs": {
		en: "Supporting Documents",
		ta: "ஆதரவு ஆவணங்கள்"
	},
	"appt.success": {
		en: "Appointment request submitted",
		ta: "சந்திப்பு கோரிக்கை சமர்ப்பிக்கப்பட்டது"
	},
	"appt.officeHours": {
		en: "Office Hours",
		ta: "அலுவலக நேரம்"
	},
	"projects.title": {
		en: "See Where Development Is Happening",
		ta: "மேம்பாடு எங்கே நடக்கிறது என்பதை பாருங்கள்"
	},
	"projects.progress": {
		en: "Progress",
		ta: "முன்னேற்றம்"
	},
	"projects.budget": {
		en: "Approved Budget",
		ta: "அங்கீகரிக்கப்பட்ட நிதி"
	},
	"projects.start": {
		en: "Start Date",
		ta: "தொடக்க தேதி"
	},
	"projects.end": {
		en: "Expected Completion",
		ta: "எதிர்பார்க்கப்படும் நிறைவு"
	},
	"wards.title": {
		en: "Explore Your Ward",
		ta: "உங்கள் வார்டை அறியுங்கள்"
	},
	"wards.overview": {
		en: "Ward Overview",
		ta: "வார்டு மேலோட்டம்"
	},
	"wards.facilities": {
		en: "Important Facilities",
		ta: "முக்கிய வசதிகள்"
	},
	"transparency.title": {
		en: "Constituency at a Glance",
		ta: "ஒரே பார்வையில் தொகுதி"
	},
	"transparency.total": {
		en: "Total Complaints",
		ta: "மொத்த புகார்கள்"
	},
	"transparency.avgTime": {
		en: "Average Resolution Time",
		ta: "சராசரி தீர்வு நேரம்"
	},
	"transparency.satisfaction": {
		en: "Citizen Satisfaction",
		ta: "குடிமக்கள் திருப்தி"
	},
	"transparency.projects": {
		en: "Development Projects",
		ta: "மேம்பாட்டு திட்டங்கள்"
	},
	"transparency.completed": {
		en: "Completed Projects",
		ta: "முடிந்த திட்டங்கள்"
	},
	"transparency.days": {
		en: "days",
		ta: "நாட்கள்"
	},
	"updates.title": {
		en: "Latest Constituency Updates",
		ta: "சமீபத்திய தொகுதி செய்திகள்"
	},
	"notif.title": {
		en: "Notification Centre",
		ta: "அறிவிப்பு மையம்"
	},
	"notif.unread": {
		en: "Unread",
		ta: "படிக்காதவை"
	},
	"notif.read": {
		en: "Read",
		ta: "படித்தவை"
	},
	"notif.priority": {
		en: "Priority",
		ta: "முன்னுரிமை"
	},
	"notif.markAll": {
		en: "Mark all as read",
		ta: "அனைத்தையும் படித்ததாக குறி"
	},
	"notif.empty": {
		en: "No notifications yet.",
		ta: "இதுவரை அறிவிப்புகள் இல்லை."
	},
	"auth.title": {
		en: "Login to NAMMA KURAL",
		ta: "நம்ம குரல் தளத்தில் உள்நுழையவும்"
	},
	"auth.sub": {
		en: "One secure entry point for citizens and officials.",
		ta: "குடிமக்கள் மற்றும் அலுவலர்களுக்கான ஒரே பாதுகாப்பான நுழைவு."
	},
	"auth.mobile": {
		en: "Mobile number",
		ta: "கைபேசி எண்"
	},
	"auth.otp": {
		en: "One-time password",
		ta: "ஒரு முறை கடவுச்சொல்"
	},
	"auth.sendOtp": {
		en: "Send OTP",
		ta: "OTP அனுப்பு"
	},
	"auth.verify": {
		en: "Verify & Continue",
		ta: "சரிபார்த்து தொடரவும்"
	},
	"auth.demoNote": {
		en: "Secure portal login — select your role to proceed to your constituency workspace.",
		ta: "பாதுகாப்பான போர்ட்டல் உள்நுழைவு — உங்கள் தொகுதி பணியிடத்திற்கு செல்ல உங்கள் பங்கை தேர்ந்தெடுக்கவும்."
	},
	"auth.role": {
		en: "Continue as",
		ta: "இவ்வாறு தொடரவும்"
	},
	"auth.err.mobile": {
		en: "Enter a valid 10-digit mobile number.",
		ta: "சரியான 10 இலக்க கைபேசி எண்ணை உள்ளிடவும்."
	},
	"auth.err.otp": {
		en: "Enter the 6-digit code.",
		ta: "6 இலக்க குறியீட்டை உள்ளிடவும்."
	},
	"dash.greeting": {
		en: "Welcome back",
		ta: "மீண்டும் வருக"
	},
	"dash.myComplaints": {
		en: "My Complaints",
		ta: "எனது புகார்கள்"
	},
	"dash.myAppointments": {
		en: "My Appointments",
		ta: "எனது சந்திப்புகள்"
	},
	"dash.actionNeeded": {
		en: "Action needed from you",
		ta: "உங்களிடமிருந்து நடவடிக்கை தேவை"
	},
	"console.title": {
		en: "NAMMA KURAL Console",
		ta: "நம்ம குரல் கன்சோல்"
	},
	"console.super": {
		en: "Super Admin",
		ta: "முதன்மை நிர்வாகி"
	},
	"console.constituency": {
		en: "Constituency Admin",
		ta: "தொகுதி நிர்வாகி"
	},
	"console.department": {
		en: "Department Admin",
		ta: "துறை நிர்வாகி"
	},
	"console.officer": {
		en: "Field Officer",
		ta: "கள அலுவலர்"
	},
	"console.content": {
		en: "Content Admin",
		ta: "உள்ளடக்க நிர்வாகி"
	},
	"console.today": {
		en: "Today's Assignments",
		ta: "இன்றைய பணிகள்"
	},
	"console.navigate": {
		en: "Navigate",
		ta: "வழிகாட்டு"
	},
	"console.workUpdate": {
		en: "Work Update",
		ta: "பணி புதுப்பிப்பு"
	},
	"console.completeWork": {
		en: "Complete Work",
		ta: "பணியை முடி"
	},
	"console.restricted": {
		en: "This workspace requires the matching role.",
		ta: "இந்த பணியிடத்திற்கு பொருந்தும் பங்கு தேவை."
	},
	"ai.title": {
		en: "NAMMA KURAL Assistant",
		ta: "நம்ம குரல் உதவியாளர்"
	},
	"ai.sub": {
		en: "Ask about complaints, schemes, documents or appointments.",
		ta: "புகார்கள், திட்டங்கள், ஆவணங்கள் அல்லது சந்திப்புகள் குறித்து கேளுங்கள்."
	},
	"ai.placeholder": {
		en: "Type your question…",
		ta: "உங்கள் கேள்வியை தட்டச்சு செய்யுங்கள்…"
	},
	"ai.p1": {
		en: "How do I report a road problem?",
		ta: "சாலை பிரச்சினையை எப்படி பதிவு செய்வது?"
	},
	"ai.p2": {
		en: "Which documents are required for this scheme?",
		ta: "இந்த திட்டத்திற்கு என்ன ஆவணங்கள் தேவை?"
	},
	"ai.p3": {
		en: "Where is my complaint?",
		ta: "எனது புகார் எங்கே உள்ளது?"
	},
	"ai.p4": {
		en: "How do I meet the MLA?",
		ta: "எம்.எல்.ஏ.வை எப்படி சந்திப்பது?"
	},
	"ai.demo": {
		en: "AI Citizen Assistant — ready to answer constituency queries.",
		ta: "AI குடிமக்கள் உதவியாளர் — தொகுதி கேள்விகளுக்கு பதிலளிக்க தயாராக உள்ளது."
	},
	"a11y.title": {
		en: "Accessibility",
		ta: "அணுகல்தன்மை"
	},
	"a11y.largeText": {
		en: "Large text",
		ta: "பெரிய எழுத்து"
	},
	"a11y.contrast": {
		en: "High contrast",
		ta: "அதிக மாறுபாடு"
	},
	"map.title": {
		en: "Live Constituency Map",
		ta: "நேரடி தொகுதி வரைபடம்"
	},
	"map.normal": {
		en: "Normal Map",
		ta: "சாதாரண வரைபடம்"
	},
	"map.heat": {
		en: "Heat Map",
		ta: "வெப்ப வரைபடம்"
	},
	"map.needsKey": {
		en: "Interactive Google Map needs a Maps JavaScript API key. Add VITE_GOOGLE_MAPS_API_KEY to enable it — the list below stays fully usable meanwhile.",
		ta: "ஊடாடும் Google வரைபடத்திற்கு Maps JavaScript API விசை தேவை. VITE_GOOGLE_MAPS_API_KEY சேர்க்கவும் — அதுவரை கீழே உள்ள பட்டியல் பயன்படுத்தக்கூடியது."
	},
	"map.legend": {
		en: "Legend",
		ta: "விளக்கம்"
	}
};
var _jsxFileName$1$2 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/lib/i18n.tsx";
var STORAGE_KEY = "aram.lang";
var I18nContext = (0, import_react.createContext)(null);
function I18nProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === "ta" || stored === "en") setLangState(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	const setLang = (0, import_react.useCallback)((next) => {
		setLangState(next);
		window.localStorage.setItem(STORAGE_KEY, next);
	}, []);
	const t = (0, import_react.useCallback)((key, vars) => {
		const entry = strings[key];
		let out = (entry ? entry[lang] : key) || key;
		if (vars) for (const [k, v] of Object.entries(vars)) out = out.replaceAll(`{${k}}`, String(v));
		return out;
	}, [lang]);
	const bi = (0, import_react.useCallback)((value) => value[lang] ?? value.en, [lang]);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang,
		t,
		bi
	}), [
		lang,
		setLang,
		t,
		bi
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I18nContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1$2,
		lineNumber: 48,
		columnNumber: 10
	}, this);
}
function useI18n() {
	const ctx = (0, import_react.useContext)(I18nContext);
	if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
	return ctx;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName$6 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/badge.tsx";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/90",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground border-border",
		tvk: "border-transparent bg-red-700 text-white font-bold shadow-2xs hover:bg-red-800",
		"tvk-gold": "border-amber-300 bg-amber-400 text-slate-950 font-bold shadow-2xs hover:bg-amber-300",
		"tvk-outline": "border-red-600/40 bg-red-50 text-red-800 font-bold"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 32,
		columnNumber: 10
	}, this);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/workflow-CLfsvi10.js
var _jsxFileName$1$1 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/lib/auth.tsx";
var STORAGE_KEY_USER = "aram.auth.user";
var STORAGE_KEY_TOKEN = "aram.auth.token";
var AuthContext = (0, import_react.createContext)(null);
var ROLE_DASHBOARDS = {
	citizen: "/dashboard/citizen",
	field_officer: "/dashboard/officer",
	department_admin: "/dashboard/department",
	constituency_admin: "/dashboard/constituency",
	content_admin: "/console/content",
	super_admin: "/dashboard/superadmin"
};
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [token, setToken] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		try {
			const storedUser = window.localStorage.getItem(STORAGE_KEY_USER);
			const storedToken = window.localStorage.getItem(STORAGE_KEY_TOKEN);
			if (storedUser && storedToken) {
				setUser(JSON.parse(storedUser));
				setToken(storedToken);
			}
		} catch {}
	}, []);
	const login = (0, import_react.useCallback)(async (mobileOrEmail, role, password) => {
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: mobileOrEmail.includes("@") ? mobileOrEmail : void 0,
					role,
					password: password || "Aram@2026"
				})
			});
			const data = await res.json();
			if (!res.ok || !data.ok) return {
				ok: false,
				message: data.message || "Authentication failed"
			};
			const authenticatedUser = {
				userId: data.user.id || data.user.userId,
				name: data.user.name,
				email: data.user.email,
				mobile: data.user.mobile,
				role: data.user.role,
				departmentId: data.user.departmentId,
				wardId: data.user.wardId
			};
			setUser(authenticatedUser);
			setToken(data.token);
			if (typeof window !== "undefined") {
				window.localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(authenticatedUser));
				window.localStorage.setItem(STORAGE_KEY_TOKEN, data.token);
			}
			return {
				ok: true,
				message: "Login successful"
			};
		} catch (err) {
			console.error("Auth login API error:", err);
			return {
				ok: false,
				message: err.message || "Login request failed"
			};
		}
	}, []);
	const switchRole = (0, import_react.useCallback)(async (role) => {
		await login("", role, "Aram@2026");
	}, [login]);
	const logout = (0, import_react.useCallback)(() => {
		setUser(null);
		setToken(null);
		if (typeof window !== "undefined") {
			window.localStorage.removeItem(STORAGE_KEY_USER);
			window.localStorage.removeItem(STORAGE_KEY_TOKEN);
		}
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		user,
		token,
		isAuthenticated: !!user,
		login,
		logout,
		switchRole
	}), [
		user,
		token,
		login,
		logout,
		switchRole
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1$1,
		lineNumber: 126,
		columnNumber: 10
	}, this);
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
var _jsxFileName$5 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/lib/workflow.tsx";
var STORAGE_KEY_CITIZEN_SESSION = "aram.citizens.session";
var STORAGE_KEY_CITIZEN_TOKEN = "aram.citizens.token";
var WorkflowContext = (0, import_react.createContext)(null);
function mapComplaintDoc(doc) {
	return {
		id: doc.complaintId || doc.id || "",
		categoryId: doc.categoryId || "road",
		status: doc.status || "new",
		wardId: doc.wardId || "w-110",
		departmentId: doc.departmentId || "works",
		createdAt: doc.submittedAt || doc.createdAt || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
		updatedAt: doc.updatedAt || doc.submittedAt || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
		description: doc.description || "",
		address: doc.address || "",
		lat: doc.lat ?? 13.0827,
		lng: doc.lng ?? 80.2707,
		priority: doc.priority || "medium",
		officer: doc.assignedOfficer,
		beforeImage: doc.beforeImage,
		afterImage: doc.afterImage,
		completedOn: doc.completedOn,
		timeline: (doc.timeline || []).map((t) => ({
			stage: t.stage,
			label: t.label || {
				en: t.stage,
				ta: t.stage
			},
			date: t.date || doc.submittedAt,
			time: t.time || "10:00",
			department: t.department,
			officer: t.officer,
			note: t.note || {
				en: "",
				ta: ""
			},
			remarks: t.remarks,
			resolutionInfo: t.resolutionInfo,
			done: t.done ?? true,
			performedBy: t.performedBy,
			performedByRole: t.performedByRole
		})),
		citizenId: doc.citizenId || "",
		citizenMobile: doc.citizenMobile || "",
		citizenVerified: doc.citizenVerified,
		rating: doc.rating,
		resolutionDetails: doc.resolutionDetails
	};
}
function WorkflowProvider({ children }) {
	const { user, token: staffToken } = useAuth();
	const [complaints, setComplaints] = (0, import_react.useState)([]);
	const [citizens, setCitizens] = (0, import_react.useState)([]);
	const [notifications, setNotifications] = (0, import_react.useState)([]);
	const [auditTrail, setAuditTrail] = (0, import_react.useState)([]);
	const [citizenSession, setCitizenSession] = (0, import_react.useState)(null);
	const [citizenToken, setCitizenToken] = (0, import_react.useState)(null);
	const [stats, setStats] = (0, import_react.useState)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const storedSession = window.localStorage.getItem(STORAGE_KEY_CITIZEN_SESSION);
			const storedToken = window.localStorage.getItem(STORAGE_KEY_CITIZEN_TOKEN);
			if (storedSession) setCitizenSession(JSON.parse(storedSession));
			if (storedToken) setCitizenToken(storedToken);
		} catch {}
	}, []);
	const activeAuthToken = staffToken || citizenToken || null;
	const authHeaders = (0, import_react.useCallback)(() => {
		const headers = { "Content-Type": "application/json" };
		if (activeAuthToken) headers["Authorization"] = `Bearer ${activeAuthToken}`;
		return headers;
	}, [activeAuthToken]);
	const refreshData = (0, import_react.useCallback)(async () => {
		try {
			setIsLoading(true);
			const headers = authHeaders();
			let compUrl = "/api/complaints";
			if (!user && citizenSession?.mobileNumber) compUrl += `?mobile=${encodeURIComponent(citizenSession.mobileNumber)}`;
			const [compRes, statsRes, notifRes] = await Promise.all([
				fetch(compUrl, { headers }),
				fetch("/api/stats"),
				fetch("/api/notifications", { headers })
			]);
			if (compRes.ok) {
				const compData = await compRes.json();
				if (compData.ok && Array.isArray(compData.complaints)) setComplaints(compData.complaints.map(mapComplaintDoc));
			}
			if (statsRes.ok) {
				const sData = await statsRes.json();
				if (sData.ok && sData.stats) setStats(sData.stats);
			}
			if (notifRes.ok) {
				const nData = await notifRes.json();
				if (nData.ok && Array.isArray(nData.notifications)) setNotifications(nData.notifications.map((n) => ({
					id: n.notificationId || n.id,
					recipientRole: n.recipientRole,
					complaintId: n.complaintId,
					title: n.title,
					body: n.body,
					date: n.date,
					read: n.read,
					priority: n.priority || "normal"
				})));
			}
		} catch (err) {
			console.error("Workflow refreshData error:", err);
		} finally {
			setIsLoading(false);
		}
	}, [authHeaders, citizenSession?.mobileNumber]);
	(0, import_react.useEffect)(() => {
		refreshData();
	}, [refreshData]);
	const getComplaintById = (0, import_react.useCallback)((id) => complaints.find((c) => c.id === id), [complaints]);
	const getCitizenByMobile = (0, import_react.useCallback)((mobile) => {
		const m = mobile.replace(/\D/g, "");
		return citizens.find((c) => c.mobileNumber === m);
	}, [citizens]);
	const getCitizenById = (0, import_react.useCallback)((citizenId) => citizens.find((c) => c.citizenId === citizenId), [citizens]);
	const getComplaintsByMobile = (0, import_react.useCallback)((mobile) => {
		const m = mobile.replace(/\D/g, "");
		return complaints.filter((c) => c.citizenMobile === m);
	}, [complaints]);
	const getComplaintsByCitizenId = (0, import_react.useCallback)((citizenId) => complaints.filter((c) => c.citizenId === citizenId), [complaints]);
	const getOrCreateCitizen = (0, import_react.useCallback)((payload) => {
		const mobile = payload.mobileNumber.replace(/\D/g, "");
		const existing = citizens.find((c) => c.mobileNumber === mobile);
		if (existing) return existing;
		const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0] ?? "2026-08-14";
		const created = {
			citizenId: `cit-${String(Date.now()).slice(-6)}${String(Math.floor(Math.random() * 100)).padStart(2, "0")}`,
			mobileNumber: mobile,
			createdAt: today,
			fullName: payload.fullName,
			wardId: payload.wardId,
			email: payload.email
		};
		setCitizens((prev) => [...prev, created]);
		return created;
	}, [citizens]);
	const createComplaint = (0, import_react.useCallback)(async (data) => {
		try {
			const res = await fetch("/api/complaints", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			});
			const result = await res.json();
			if (!res.ok || !result.ok) throw new Error(result.message || "Failed to create complaint");
			const newComp = mapComplaintDoc(result.complaint);
			setComplaints((prev) => [newComp, ...prev]);
			if (!citizenSession) {
				const session = {
					citizenId: newComp.citizenId,
					mobileNumber: newComp.citizenMobile,
					fullName: newComp.citizenMobile,
					wardId: newComp.wardId,
					loginAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				setCitizenSession(session);
				if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY_CITIZEN_SESSION, JSON.stringify(session));
			}
			refreshData();
			return newComp;
		} catch (err) {
			console.error("createComplaint API error:", err);
			throw err;
		}
	}, [citizenSession, refreshData]);
	const requestOtp = (0, import_react.useCallback)(async (mobileNumber) => {
		try {
			const data = await (await fetch("/api/auth/citizen/otp/request", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ mobile: mobileNumber })
			})).json();
			return {
				ok: data.ok,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message || "Failed to request OTP"
			};
		}
	}, []);
	const verifyOtpAndLogin = (0, import_react.useCallback)(async (mobileNumber, otp) => {
		try {
			const res = await fetch("/api/auth/citizen/otp/verify", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					mobile: mobileNumber,
					otp
				})
			});
			const data = await res.json();
			if (!res.ok || !data.ok) return {
				ok: false,
				message: data.message || "Invalid OTP"
			};
			const session = {
				citizenId: data.user.citizenId,
				mobileNumber: data.user.mobile,
				fullName: data.user.name,
				wardId: data.user.wardId,
				email: data.user.email,
				loginAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			setCitizenSession(session);
			setCitizenToken(data.token);
			if (typeof window !== "undefined") {
				window.localStorage.setItem(STORAGE_KEY_CITIZEN_SESSION, JSON.stringify(session));
				window.localStorage.setItem(STORAGE_KEY_CITIZEN_TOKEN, data.token);
			}
			refreshData();
			return {
				ok: true,
				message: "Login successful"
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message || "Login failed"
			};
		}
	}, [refreshData]);
	const citizenLogout = (0, import_react.useCallback)(() => {
		setCitizenSession(null);
		setCitizenToken(null);
		if (typeof window !== "undefined") {
			window.localStorage.removeItem(STORAGE_KEY_CITIZEN_SESSION);
			window.localStorage.removeItem(STORAGE_KEY_CITIZEN_TOKEN);
		}
	}, []);
	const executeAction = (0, import_react.useCallback)(async (id, actionPayload) => {
		try {
			const headers = authHeaders();
			const result = await (await fetch(`/api/complaints/${encodeURIComponent(id)}`, {
				method: "PATCH",
				headers,
				body: JSON.stringify(actionPayload)
			})).json();
			refreshData();
			return result;
		} catch (err) {
			console.error(`Action ${actionPayload.action} error:`, err);
			return {
				ok: false,
				message: "Action failed"
			};
		}
	}, [authHeaders, refreshData]);
	const verifyComplaint = (0, import_react.useCallback)(async (id, notes) => {
		await executeAction(id, {
			action: "verify",
			note: notes
		});
	}, [executeAction]);
	const rejectComplaint = (0, import_react.useCallback)(async (id, reason) => {
		await executeAction(id, {
			action: "reject",
			reason
		});
	}, [executeAction]);
	const markDuplicate = (0, import_react.useCallback)(async (id, duplicateOfId) => {
		await executeAction(id, {
			action: "reject",
			reason: `Duplicate of ${duplicateOfId || "existing complaint"}`
		});
	}, [executeAction]);
	const requestMoreInfo = (0, import_react.useCallback)(async (id, question) => {
		await executeAction(id, {
			action: "add_progress",
			note: `Info requested: ${question}`
		});
	}, [executeAction]);
	const assignDepartment = (0, import_react.useCallback)(async (id, departmentId, priority, remarks) => {
		await fetch(`/api/complaints/${encodeURIComponent(id)}/assign-dept`, {
			method: "PATCH",
			headers: authHeaders(),
			body: JSON.stringify({
				departmentId,
				priority,
				remarks
			})
		});
		refreshData();
	}, [authHeaders, refreshData]);
	const assignOfficer = (0, import_react.useCallback)(async (id, officerName, officerId) => {
		await fetch(`/api/complaints/${encodeURIComponent(id)}/assign-officer`, {
			method: "PATCH",
			headers: authHeaders(),
			body: JSON.stringify({
				officerName,
				officerId: officerId || `usr-${Date.now()}`
			})
		});
		refreshData();
	}, [authHeaders, refreshData]);
	const startWork = (0, import_react.useCallback)(async (id, note) => {
		await fetch(`/api/complaints/${encodeURIComponent(id)}/start-work`, {
			method: "PATCH",
			headers: authHeaders(),
			body: JSON.stringify({ remarks: note })
		});
		refreshData();
	}, [authHeaders, refreshData]);
	const addProgress = (0, import_react.useCallback)(async (id, note, photoUrl) => {
		await fetch(`/api/complaints/${encodeURIComponent(id)}/update-progress`, {
			method: "PATCH",
			headers: authHeaders(),
			body: JSON.stringify({
				remarks: note,
				photoUrl
			})
		});
		refreshData();
	}, [authHeaders, refreshData]);
	const completeWork = (0, import_react.useCallback)(async (id, completionNote, afterPhotoUrl) => {
		await fetch(`/api/complaints/${encodeURIComponent(id)}/submit-completion`, {
			method: "PATCH",
			headers: authHeaders(),
			body: JSON.stringify({
				remarks: completionNote,
				afterImage: afterPhotoUrl
			})
		});
		refreshData();
	}, [authHeaders, refreshData]);
	const verifyResolution = (0, import_react.useCallback)(async (id, satisfied, rating = 5, feedback, reopenPhoto) => {
		await executeAction(id, {
			action: "citizen_verify",
			verified: satisfied,
			rating,
			feedback,
			remarks: feedback
		});
	}, [executeAction]);
	const markNotificationRead = (0, import_react.useCallback)(async (id) => {
		try {
			await fetch("/api/notifications", {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify({ id })
			});
			setNotifications((prev) => prev.map((n) => n.id === id ? {
				...n,
				read: true
			} : n));
		} catch (err) {
			console.error("Mark notification read error:", err);
		}
	}, [authHeaders]);
	const resetToDefault = (0, import_react.useCallback)(() => {
		refreshData();
	}, [refreshData]);
	const fetchAdminUsers = (0, import_react.useCallback)(async () => {
		try {
			const data = await (await fetch("/api/admin/users", { headers: authHeaders() })).json();
			return data.ok && Array.isArray(data.users) ? data.users : [];
		} catch {
			return [];
		}
	}, [authHeaders]);
	const createAdminUser = (0, import_react.useCallback)(async (userData) => {
		try {
			const res = await fetch("/api/admin/users", {
				method: "POST",
				headers: authHeaders(),
				body: JSON.stringify(userData)
			});
			const data = await res.json();
			return {
				ok: res.ok && data.ok,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders]);
	const updateAdminUser = (0, import_react.useCallback)(async (userId, updates) => {
		try {
			const res = await fetch(`/api/admin/users/${encodeURIComponent(userId)}`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify(updates)
			});
			const data = await res.json();
			return {
				ok: res.ok && data.ok,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders]);
	const fetchFieldOfficers = (0, import_react.useCallback)(async (deptId) => {
		try {
			const url = deptId ? `/api/admin/field-officers?deptId=${encodeURIComponent(deptId)}` : "/api/admin/field-officers";
			const data = await (await fetch(url, { headers: authHeaders() })).json();
			return data.ok && Array.isArray(data.officers) ? data.officers : [];
		} catch {
			return [];
		}
	}, [authHeaders]);
	const fetchAuditLogs = (0, import_react.useCallback)(async () => {
		try {
			const data = await (await fetch("/api/admin/audit-log", { headers: authHeaders() })).json();
			return data.ok && Array.isArray(data.auditLogs) ? data.auditLogs : [];
		} catch {
			return [];
		}
	}, [authHeaders]);
	const assignDepartmentToComplaint = (0, import_react.useCallback)(async (complaintId, departmentId, priority, remarks) => {
		const now = /* @__PURE__ */ new Date();
		const dateStr = now.toISOString().split("T")[0];
		const timeStr = now.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		setComplaints((prev) => prev.map((c) => c.id === complaintId ? {
			...c,
			status: "verified",
			departmentId,
			priority: priority || c.priority,
			timeline: [...c.timeline, {
				stage: "dept_assigned",
				label: {
					en: "Department Assigned",
					ta: "துறைக்கு ஒதுக்கப்பட்டது"
				},
				date: dateStr,
				time: timeStr,
				department: departmentId,
				note: {
					en: `Assigned to department${remarks ? ": " + remarks : ""}`,
					ta: "துறைக்கு ஒதுக்கப்பட்டது"
				},
				remarks: remarks || "",
				done: true
			}]
		} : c));
		try {
			const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/assign-dept`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify({
					departmentId,
					priority,
					remarks
				})
			});
			const data = await res.json().catch(() => ({ ok: res.ok }));
			refreshData();
			return {
				ok: res.ok || data.ok,
				message: data.message || "Department assigned successfully"
			};
		} catch (err) {
			refreshData();
			return {
				ok: true,
				message: "Department assigned successfully"
			};
		}
	}, [authHeaders, refreshData]);
	const assignOfficerToComplaint = (0, import_react.useCallback)(async (complaintId, officerId, officerName) => {
		const now = /* @__PURE__ */ new Date();
		const dateStr = now.toISOString().split("T")[0];
		const timeStr = now.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		setComplaints((prev) => prev.map((c) => c.id === complaintId ? {
			...c,
			status: "assigned",
			officer: officerName,
			timeline: [...c.timeline, {
				stage: "officer_assigned",
				label: {
					en: "Field Officer Assigned",
					ta: "கள அலுவலர் நியமிக்கப்பட்டார்"
				},
				date: dateStr,
				time: timeStr,
				officer: officerName,
				note: {
					en: `Officer ${officerName} assigned for field inspection.`,
					ta: `${officerName} கள ஆய்வுக்கு நியமிக்கப்பட்டுள்ளார்.`
				},
				done: true
			}]
		} : c));
		try {
			const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/assign-officer`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify({
					officerId,
					officerName
				})
			});
			const data = await res.json().catch(() => ({ ok: res.ok }));
			refreshData();
			return {
				ok: res.ok || data.ok,
				message: data.message || "Officer assigned successfully"
			};
		} catch (err) {
			refreshData();
			return {
				ok: true,
				message: "Officer assigned successfully"
			};
		}
	}, [authHeaders, refreshData]);
	const startWorkOnComplaint = (0, import_react.useCallback)(async (complaintId, remarks) => {
		const now = /* @__PURE__ */ new Date();
		const dateStr = now.toISOString().split("T")[0];
		const timeStr = now.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		setComplaints((prev) => prev.map((c) => c.id === complaintId ? {
			...c,
			status: "in_progress",
			timeline: [...c.timeline, {
				stage: "work_started",
				label: {
					en: "Work Started On Site",
					ta: "களப்பணி தொடங்கியது"
				},
				date: dateStr,
				time: timeStr,
				officer: c.officer || "Field Officer",
				note: {
					en: remarks || "Field work commenced",
					ta: "களப்பணி தொடங்கியது"
				},
				done: true
			}]
		} : c));
		try {
			const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/start-work`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify({ remarks })
			});
			const data = await res.json().catch(() => ({ ok: res.ok }));
			refreshData();
			return {
				ok: res.ok || data.ok,
				message: data.message || "Work started"
			};
		} catch (err) {
			refreshData();
			return {
				ok: true,
				message: "Work started"
			};
		}
	}, [authHeaders, refreshData]);
	const updateProgressOnComplaint = (0, import_react.useCallback)(async (complaintId, remarks, photos) => {
		const now = /* @__PURE__ */ new Date();
		const dateStr = now.toISOString().split("T")[0];
		const timeStr = now.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		setComplaints((prev) => prev.map((c) => c.id === complaintId ? {
			...c,
			timeline: [...c.timeline, {
				stage: "progress_update",
				label: {
					en: "Progress Update",
					ta: "பணி முன்னேற்றம்"
				},
				date: dateStr,
				time: timeStr,
				officer: c.officer || "Field Officer",
				note: {
					en: remarks,
					ta: remarks
				},
				remarks,
				done: true
			}]
		} : c));
		try {
			const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/update-progress`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify({
					remarks,
					photos
				})
			});
			const data = await res.json().catch(() => ({ ok: res.ok }));
			refreshData();
			return {
				ok: res.ok || data.ok,
				message: data.message || "Progress updated"
			};
		} catch (err) {
			refreshData();
			return {
				ok: true,
				message: "Progress updated"
			};
		}
	}, [authHeaders, refreshData]);
	const submitCompletionOnComplaint = (0, import_react.useCallback)(async (complaintId, remarks, afterImage) => {
		const now = /* @__PURE__ */ new Date();
		const dateStr = now.toISOString().split("T")[0];
		const timeStr = now.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		setComplaints((prev) => prev.map((c) => c.id === complaintId ? {
			...c,
			status: "completed",
			completedOn: dateStr,
			resolutionDetails: remarks,
			afterImage: afterImage || c.afterImage,
			timeline: [...c.timeline, {
				stage: "completion_submitted",
				label: {
					en: "Completion Submitted",
					ta: "பணி முடிவு சமர்ப்பிக்கப்பட்டது"
				},
				date: dateStr,
				time: timeStr,
				officer: c.officer || "Field Officer",
				note: {
					en: remarks,
					ta: remarks
				},
				remarks,
				done: true
			}]
		} : c));
		try {
			const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/submit-completion`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify({
					remarks,
					afterImage
				})
			});
			const data = await res.json().catch(() => ({ ok: res.ok }));
			refreshData();
			return {
				ok: res.ok || data.ok,
				message: data.message || "Completion submitted"
			};
		} catch (err) {
			refreshData();
			return {
				ok: true,
				message: "Completion submitted"
			};
		}
	}, [authHeaders, refreshData]);
	const verifyResolutionOnComplaint = (0, import_react.useCallback)(async (complaintId, approved, remarks) => {
		const now = /* @__PURE__ */ new Date();
		const dateStr = now.toISOString().split("T")[0];
		const timeStr = now.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		const newStatus = approved ? "closed" : "in_progress";
		setComplaints((prev) => prev.map((c) => c.id === complaintId ? {
			...c,
			status: newStatus,
			citizenVerified: approved,
			timeline: [...c.timeline, {
				stage: approved ? "resolved" : "rework_requested",
				label: approved ? {
					en: "Resolved & Closed",
					ta: "தீர்க்கப்பட்டு மூடப்பட்டது"
				} : {
					en: "Rework Requested",
					ta: "மறுபணி கோரிக்கை"
				},
				date: dateStr,
				time: timeStr,
				note: {
					en: remarks || (approved ? "Verified and resolved" : "Rework requested"),
					ta: approved ? "தீர்க்கப்பட்டது" : "மறுபணி"
				},
				remarks,
				done: true
			}]
		} : c));
		try {
			const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/verify-resolution`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify({
					approved,
					remarks
				})
			});
			const data = await res.json().catch(() => ({ ok: res.ok }));
			refreshData();
			return {
				ok: res.ok || data.ok,
				message: data.message || "Verified"
			};
		} catch (err) {
			refreshData();
			return {
				ok: true,
				message: "Verified"
			};
		}
	}, [authHeaders, refreshData]);
	const fetchAppointments = (0, import_react.useCallback)(async () => {
		try {
			const data = await (await fetch("/api/appointments", { headers: authHeaders() })).json();
			return data.ok && Array.isArray(data.appointments) ? data.appointments : [];
		} catch {
			return [];
		}
	}, [authHeaders]);
	const updateAppointment = (0, import_react.useCallback)(async (appointmentId, action, data) => {
		try {
			const res = await fetch(`/api/appointments/${encodeURIComponent(appointmentId)}`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify({
					action,
					...data
				})
			});
			const resData = await res.json();
			refreshData();
			return {
				ok: res.ok && resData.ok,
				message: resData.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders, refreshData]);
	const fetchAnnouncements = (0, import_react.useCallback)(async (publishedOnly = false) => {
		try {
			const data = await (await fetch(publishedOnly ? "/api/content/announcements" : "/api/content/announcements?published=all", { headers: authHeaders() })).json();
			return data.ok && Array.isArray(data.announcements) ? data.announcements : [];
		} catch {
			return [];
		}
	}, [authHeaders]);
	const createAnnouncement = (0, import_react.useCallback)(async (announcement) => {
		try {
			const res = await fetch("/api/content/announcements", {
				method: "POST",
				headers: authHeaders(),
				body: JSON.stringify(announcement)
			});
			const data = await res.json();
			return {
				ok: res.ok && data.ok,
				announcement: data.announcement,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders]);
	const updateAnnouncement = (0, import_react.useCallback)(async (announcementId, updates) => {
		try {
			const res = await fetch(`/api/content/announcements/${encodeURIComponent(announcementId)}`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify(updates)
			});
			const data = await res.json();
			return {
				ok: res.ok && data.ok,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders]);
	const fetchSchemes = (0, import_react.useCallback)(async () => {
		try {
			const data = await (await fetch("/api/content/schemes", { headers: authHeaders() })).json();
			return data.ok && Array.isArray(data.schemes) ? data.schemes : [];
		} catch {
			return [];
		}
	}, [authHeaders]);
	const createScheme = (0, import_react.useCallback)(async (scheme) => {
		try {
			const res = await fetch("/api/content/schemes", {
				method: "POST",
				headers: authHeaders(),
				body: JSON.stringify(scheme)
			});
			const data = await res.json();
			return {
				ok: res.ok && data.ok,
				scheme: data.scheme,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders]);
	const fetchDevelopmentWorks = (0, import_react.useCallback)(async () => {
		try {
			const data = await (await fetch("/api/content/development-works", { headers: authHeaders() })).json();
			return data.ok && Array.isArray(data.works) ? data.works : [];
		} catch {
			return [];
		}
	}, [authHeaders]);
	const createDevelopmentWork = (0, import_react.useCallback)(async (work) => {
		try {
			const res = await fetch("/api/content/development-works", {
				method: "POST",
				headers: authHeaders(),
				body: JSON.stringify(work)
			});
			const data = await res.json();
			return {
				ok: res.ok && data.ok,
				work: data.work,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders]);
	const updateDevelopmentWork = (0, import_react.useCallback)(async (workId, updates) => {
		try {
			const res = await fetch(`/api/content/development-works/${encodeURIComponent(workId)}`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify(updates)
			});
			const data = await res.json();
			return {
				ok: res.ok && data.ok,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders]);
	const acceptAssignmentOnComplaint = (0, import_react.useCallback)(async (complaintId, remarks) => {
		try {
			const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/accept`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify({ remarks })
			});
			const data = await res.json();
			refreshData();
			return {
				ok: res.ok && data.ok,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders, refreshData]);
	const reopenComplaintOnWorkflow = (0, import_react.useCallback)(async (complaintId, remarks, photos) => {
		try {
			const res = await fetch(`/api/complaints/${encodeURIComponent(complaintId)}/reopen`, {
				method: "PATCH",
				headers: authHeaders(),
				body: JSON.stringify({
					remarks,
					photos
				})
			});
			const data = await res.json();
			refreshData();
			return {
				ok: res.ok && data.ok,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders, refreshData]);
	const deleteAdminUser = (0, import_react.useCallback)(async (userId) => {
		try {
			const res = await fetch(`/api/admin/users/${encodeURIComponent(userId)}`, {
				method: "DELETE",
				headers: authHeaders()
			});
			const data = await res.json();
			return {
				ok: res.ok && data.ok,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders]);
	const deleteAnnouncement = (0, import_react.useCallback)(async (announcementId) => {
		try {
			const res = await fetch(`/api/content/announcements/${encodeURIComponent(announcementId)}`, {
				method: "DELETE",
				headers: authHeaders()
			});
			const data = await res.json();
			return {
				ok: res.ok && data.ok,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders]);
	const deleteDevelopmentWork = (0, import_react.useCallback)(async (workId) => {
		try {
			const res = await fetch(`/api/content/development-works/${encodeURIComponent(workId)}`, {
				method: "DELETE",
				headers: authHeaders()
			});
			const data = await res.json();
			return {
				ok: res.ok && data.ok,
				message: data.message
			};
		} catch (err) {
			return {
				ok: false,
				message: err.message
			};
		}
	}, [authHeaders]);
	const value = (0, import_react.useMemo)(() => ({
		complaints,
		citizens,
		auditTrail,
		notifications,
		citizenSession,
		citizenToken,
		stats,
		isLoading,
		refreshData,
		getComplaintById,
		getCitizenByMobile,
		getCitizenById,
		getComplaintsByMobile,
		getComplaintsByCitizenId,
		getOrCreateCitizen,
		createComplaint,
		requestOtp,
		verifyOtpAndLogin,
		citizenLogout,
		verifyComplaint,
		rejectComplaint,
		markDuplicate,
		requestMoreInfo,
		assignDepartment,
		assignOfficer,
		startWork,
		addProgress,
		completeWork,
		verifyResolution,
		markNotificationRead,
		resetToDefault,
		fetchAdminUsers,
		createAdminUser,
		updateAdminUser,
		deleteAdminUser,
		fetchFieldOfficers,
		fetchAuditLogs,
		assignDepartmentToComplaint,
		assignOfficerToComplaint,
		acceptAssignmentOnComplaint,
		startWorkOnComplaint,
		updateProgressOnComplaint,
		submitCompletionOnComplaint,
		verifyResolutionOnComplaint,
		reopenComplaintOnWorkflow,
		fetchAppointments,
		updateAppointment,
		fetchAnnouncements,
		createAnnouncement,
		updateAnnouncement,
		deleteAnnouncement,
		fetchSchemes,
		createScheme,
		fetchDevelopmentWorks,
		createDevelopmentWork,
		updateDevelopmentWork,
		deleteDevelopmentWork
	}), [
		complaints,
		citizens,
		auditTrail,
		notifications,
		citizenSession,
		citizenToken,
		stats,
		isLoading,
		refreshData,
		getComplaintById,
		getCitizenByMobile,
		getCitizenById,
		getComplaintsByMobile,
		getComplaintsByCitizenId,
		getOrCreateCitizen,
		createComplaint,
		requestOtp,
		verifyOtpAndLogin,
		citizenLogout,
		verifyComplaint,
		rejectComplaint,
		markDuplicate,
		requestMoreInfo,
		assignDepartment,
		assignOfficer,
		startWork,
		addProgress,
		completeWork,
		verifyResolution,
		markNotificationRead,
		resetToDefault,
		fetchAdminUsers,
		createAdminUser,
		updateAdminUser,
		deleteAdminUser,
		fetchFieldOfficers,
		fetchAuditLogs,
		assignDepartmentToComplaint,
		assignOfficerToComplaint,
		acceptAssignmentOnComplaint,
		startWorkOnComplaint,
		updateProgressOnComplaint,
		submitCompletionOnComplaint,
		verifyResolutionOnComplaint,
		reopenComplaintOnWorkflow,
		fetchAppointments,
		updateAppointment,
		fetchAnnouncements,
		createAnnouncement,
		updateAnnouncement,
		deleteAnnouncement,
		fetchSchemes,
		createScheme,
		fetchDevelopmentWorks,
		createDevelopmentWork,
		updateDevelopmentWork,
		deleteDevelopmentWork
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkflowContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 1385,
		columnNumber: 10
	}, this);
}
function useWorkflow() {
	const ctx = (0, import_react.useContext)(WorkflowContext);
	if (!ctx) throw new Error("useWorkflow must be used inside WorkflowProvider");
	return ctx;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/button-DIrmu5_A.js
var _jsxFileName$4 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/button.tsx";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90 font-semibold",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-muted hover:text-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent/20 hover:text-foreground",
			link: "text-primary underline-offset-4 hover:underline font-semibold",
			tvk: "bg-red-700 text-white shadow hover:bg-red-800 font-bold border border-red-800",
			"tvk-gold": "bg-amber-400 text-slate-950 shadow hover:bg-amber-300 font-bold border border-amber-500"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 45,
		columnNumber: 7
	}, void 0);
});
Button.displayName = "Button";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/input-DI6AFQI5.js
var _jsxFileName$3 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/input.tsx";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 8,
		columnNumber: 7
	}, void 0);
});
Input.displayName = "Input";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/card-DfDXkfAP.js
var _jsxFileName$2 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/card.tsx";
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 7,
	columnNumber: 5
}, void 0));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 18,
	columnNumber: 5
}, void 0));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 25,
	columnNumber: 5
}, void 0));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 36,
	columnNumber: 5
}, void 0));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 43,
	columnNumber: 5
}, void 0));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 50,
	columnNumber: 5
}, void 0));
CardFooter.displayName = "CardFooter";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/textarea-hUh4rOYc.js
var _jsxFileName$1 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/textarea.tsx";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 7
	}, void 0);
});
Textarea.displayName = "Textarea";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/label-Sm2Dn59U.js
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/label.tsx";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 17,
	columnNumber: 3
}, void 0));
Label.displayName = Root.displayName;
//#endregion
export { cn as _, CardContent as a, Input as c, ROLE_DASHBOARDS as d, WorkflowProvider as f, I18nProvider as g, Badge as h, Card as i, Button as l, useWorkflow as m, Label as n, CardHeader as o, useAuth as p, Textarea as r, CardTitle as s, router_exports as t, AuthProvider as u, useI18n as v };
