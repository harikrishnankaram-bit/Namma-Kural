import { o as __toESM } from "./_runtime.mjs";
import { n as CONSTITUENCY, p as maskMobile } from "./_ssr/ssr.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { t as cva } from "./_libs/class-variance-authority+clsx.mjs";
import { f as Outlet, g as Link, l as useLocation } from "./_libs/@tanstack/react-router+[...].mjs";
import { L as LogOut, M as MessageCircle, N as Menu, R as LogIn, V as LayoutDashboard, Y as Globe, _ as Send, ft as ChevronRight, ht as Check, mt as ChevronDown, n as X, s as User, st as Circle } from "./_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "./_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "./_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "./_libs/radix-ui__react-scroll-area.mjs";
import { _ as cn, c as Input, h as Badge, l as Button, m as useWorkflow, p as useAuth, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout-DQ9amlVG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$6 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/dropdown-menu.tsx";
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "ml-auto" }, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 37,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$6,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 46,
	columnNumber: 3
}, void 0));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 62,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 61,
	columnNumber: 3
}, void 0));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 82,
	columnNumber: 3
}, void 0));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 108,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 107,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 106,
		columnNumber: 5
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$6,
	lineNumber: 98,
	columnNumber: 3
}, void 0));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 130,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 129,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 128,
		columnNumber: 5
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$6,
	lineNumber: 120,
	columnNumber: 3
}, void 0));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 144,
	columnNumber: 3
}, void 0));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 156,
	columnNumber: 3
}, void 0));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 166,
		columnNumber: 5
	}, void 0);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var _jsxFileName$5 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/sheet.tsx";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 22,
	columnNumber: 3
}, void 0));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetOverlay, {}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 62,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 65,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 66,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 64,
		columnNumber: 7
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$5,
	lineNumber: 63,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$5,
	lineNumber: 61,
	columnNumber: 3
}, void 0));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 75,
	columnNumber: 3
}, void 0);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 80,
	columnNumber: 3
}, void 0);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 91,
	columnNumber: 3
}, void 0));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 103,
	columnNumber: 3
}, void 0));
SheetDescription.displayName = DialogDescription.displayName;
var _jsxFileName$4 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/layout/Header.tsx";
var NAV_ITEMS = [
	{
		key: "nav.home",
		label: {
			en: "Home",
			ta: "முகப்பு"
		},
		to: "/"
	},
	{
		key: "nav.report",
		label: {
			en: "Report Issue",
			ta: "புகார் பதிவு"
		},
		to: "/complaints/register"
	},
	{
		key: "nav.mycomplaints",
		label: {
			en: "My Complaints",
			ta: "என் புகார்கள்"
		},
		to: "/dashboard/citizen"
	},
	{
		key: "nav.appointment",
		label: {
			en: "Meet MLA",
			ta: "எம்.எல்.ஏ. சந்திப்பு"
		},
		to: "/appointments"
	},
	{
		key: "nav.schemes",
		label: {
			en: "Schemes",
			ta: "திட்டங்கள்"
		},
		to: "/schemes"
	},
	{
		key: "nav.projects",
		label: {
			en: "Development",
			ta: "வளர்ச்சி"
		},
		to: "/development"
	},
	{
		key: "nav.notifications",
		label: {
			en: "Announcements",
			ta: "அறிவிப்புகள்"
		},
		to: "/notifications"
	}
];
function Header() {
	const { lang, setLang } = useI18n();
	const { user, isAuthenticated, logout } = useAuth();
	const { citizenSession, citizenLogout } = useWorkflow();
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const isActive = (to) => {
		if (to === "/") return location.pathname === "/" || location.pathname === "";
		return location.pathname.startsWith(to);
	};
	const citizenDisplayName = citizenSession ? citizenSession.fullName || maskMobile(citizenSession.mobileNumber) : "";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "sticky top-2 sm:top-3 z-50 w-full px-2 sm:px-4 max-w-[1440px] mx-auto transition-all",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex h-14 sm:h-16 items-center justify-between gap-1.5 sm:gap-2 lg:gap-3 px-2.5 sm:px-4 lg:px-5 rounded-full bg-[#2c0508]/95 border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl max-w-full overflow-hidden relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "flex items-center gap-1.5 sm:gap-2 shrink-0 focus-visible:outline-none rounded-full group",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative flex items-center gap-1.5 sm:gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#1b0305] border border-amber-400/40 p-1 flex items-center justify-center shrink-0 shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/logo.png",
								alt: "NAMMA KURAL",
								className: "h-full w-auto object-contain transition-transform group-hover:scale-105",
								onError: (e) => {
									const target = e.currentTarget;
									target.style.display = "none";
								}
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 55,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 54,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-black text-xs sm:text-sm text-white font-display tracking-tight leading-none whitespace-nowrap",
								children: "NAMMA KURAL"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 66,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[8px] sm:text-[9px] font-extrabold uppercase text-amber-400 tracking-wider mt-0.5 whitespace-nowrap",
								children: "TVK · CONSTITUENCY"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 69,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 65,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 53,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center py-1 px-1 min-w-0 overflow-x-auto no-scrollbar scrollbar-none",
					children: NAV_ITEMS.map(({ key, label, to }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to,
						className: `px-1.5 xl:px-2.5 py-1 rounded-full text-[11px] xl:text-xs font-bold whitespace-nowrap transition-all shrink-0 ${isActive(to) ? "text-[#ffb703] border-b-2 border-[#ffb703] bg-white/10 shadow-sm" : "text-slate-200 hover:text-white hover:bg-white/10"}`,
						children: lang === "ta" ? label.ta : label.en
					}, key, false, {
						fileName: _jsxFileName$4,
						lineNumber: 79,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 77,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-1 sm:gap-1.5 xl:gap-2 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => setLang(lang === "en" ? "ta" : "en"),
							className: "flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full border border-white/20 bg-white/5 text-[10px] sm:text-xs font-bold text-slate-100 hover:bg-white/15 transition-all shrink-0",
							"aria-label": "Toggle language",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400 shrink-0" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 101,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "whitespace-nowrap",
								children: lang === "en" ? "English" : "தமிழ்"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 102,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 96,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/complaints/register",
							className: "hidden xl:inline-flex items-center gap-1 px-2.5 xl:px-3 py-1 rounded-full bg-[#d91c2b] text-white text-[11px] xl:text-xs font-bold shadow-md hover:bg-[#b81220] transition-all border border-red-500/30 whitespace-nowrap shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogIn, { className: "h-3 w-3 xl:h-3.5 xl:w-3.5" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 110,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "புதிய புகார்" : "+ New grievance" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 111,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 106,
							columnNumber: 11
						}, this),
						citizenSession ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "ghost",
								size: "sm",
								className: "gap-1.5 h-7 sm:h-8 px-2 sm:px-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-white shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-amber-400 text-[#1b0305] text-[9px] sm:text-[10px] font-bold",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-2.5 w-2.5 sm:h-3 sm:w-3" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 120,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 119,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "hidden sm:inline text-[11px] sm:text-xs font-bold max-w-[80px] sm:max-w-[100px] truncate text-slate-100",
									children: citizenDisplayName
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 122,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 118,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 117,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
							align: "end",
							className: "w-56 rounded-2xl p-2 shadow-lift bg-[#1c0305] text-white border border-white/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "px-3 py-2 border-b border-white/10 text-xs mb-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-bold text-white truncate",
											children: citizenDisplayName
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 129,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[10px] text-slate-300 font-mono mt-0.5",
											children: ["+91 ", maskMobile(citizenSession.mobileNumber)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 130,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: "secondary",
											className: "text-[10px] uppercase font-bold px-1.5 py-0 mt-1 bg-emerald-950 text-emerald-300 border-emerald-500/30",
											children: "Citizen Session"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 133,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 128,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									asChild: true,
									className: "cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 focus:bg-white/10 text-white",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/dashboard/citizen",
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutDashboard, { className: "h-3.5 w-3.5 text-amber-400" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 140,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "குடிமக்கள் முகப்பு" : "Citizen Dashboard" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 141,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 139,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 138,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									asChild: true,
									className: "cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 focus:bg-white/10 text-white",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/complaints/register",
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-3.5 w-3.5 text-amber-400" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 146,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "புதிய புகார் பதிவு" : "Report New Complaint" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 147,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 145,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 144,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "border-t border-white/10 my-1 pt-1",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
										onClick: citizenLogout,
										className: "text-red-400 font-semibold cursor-pointer text-xs rounded-lg flex items-center gap-2 hover:bg-white/10 focus:bg-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "h-3.5 w-3.5" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 153,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "வெளியேறு" : "Sign Out" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 154,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 152,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 151,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 127,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 116,
							columnNumber: 13
						}, this) : isAuthenticated && user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "ghost",
								size: "sm",
								className: "gap-1.5 h-7 sm:h-8 px-2 sm:px-2.5 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-amber-400 text-[#1b0305] text-[9px] sm:text-[10px] font-bold",
									children: user.name.charAt(0)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 163,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "hidden sm:inline text-[11px] sm:text-xs font-medium max-w-[75px] sm:max-w-[90px] truncate text-slate-100",
									children: user.name
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 166,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 162,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 161,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
							align: "end",
							className: "w-56 rounded-2xl p-2 shadow-lift bg-[#1c0305] text-white border border-white/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "px-3 py-2 border-b border-white/10 text-xs mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-bold text-white",
										children: user.name
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 173,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5 mt-0.5",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: "secondary",
											className: "text-[10px] uppercase font-bold px-1.5 py-0 bg-amber-400/20 text-amber-300 border-amber-400/30",
											children: user.role.replace("_", " ")
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 175,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 174,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 172,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									asChild: true,
									className: "cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 text-white",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/dashboard/citizen",
										children: "👤 Citizen Dashboard"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 182,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 181,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									asChild: true,
									className: "cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 text-white",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/dashboard/officer",
										children: "🦺 Field Officer Terminal"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 185,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 184,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									asChild: true,
									className: "cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 text-white",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/dashboard/department",
										children: "🏢 Department Admin"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 188,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 187,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									asChild: true,
									className: "cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 text-white",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/dashboard/constituency",
										children: "🏛️ MLA Constituency Admin"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 191,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 190,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
									asChild: true,
									className: "cursor-pointer text-xs font-semibold rounded-lg hover:bg-white/10 text-white",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/dashboard/superadmin",
										children: "⚙️ Super Admin Console"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 194,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 193,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "border-t border-white/10 my-1 pt-1",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
										onClick: logout,
										className: "text-red-400 font-semibold cursor-pointer text-xs rounded-lg hover:bg-white/10",
										children: "Sign Out"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 198,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 197,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 171,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 160,
							columnNumber: 13
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							size: "sm",
							className: "h-7 sm:h-8 px-2.5 sm:px-3 rounded-full bg-[#d91c2b] hover:bg-[#b81220] text-white font-bold text-[11px] sm:text-xs gap-1 shadow-md border border-red-500/30 shrink-0 whitespace-nowrap",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/login",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogIn, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 207,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? "உள்நுழைக" : "Login" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 208,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 206,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 205,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "lg:hidden shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sheet, {
								open: mobileOpen,
								onOpenChange: setMobileOpen,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "ghost",
										size: "icon",
										className: "h-8 w-8 rounded-full text-white hover:bg-white/10",
										"aria-label": "Open Navigation Menu",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 218,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 217,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 216,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetContent, {
									side: "right",
									className: "w-72 p-0 flex flex-col justify-between bg-[#1c0305] text-white border-white/20",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between p-4 border-b border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
											src: "/logo.png",
											alt: "NAMMA KURAL",
											className: "h-8 w-auto rounded-full"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 224,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetClose, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: "ghost",
												size: "icon",
												className: "h-8 w-8 text-white hover:bg-white/10",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 227,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 226,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 225,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 223,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "p-4 space-y-1",
										children: [NAV_ITEMS.map(({ label, to }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to,
											onClick: () => setMobileOpen(false),
											className: `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive(to) ? "bg-amber-500/20 text-amber-300 font-semibold" : "text-slate-200 hover:bg-white/10"}`,
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "ta" ? label.ta : label.en }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 244,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4 text-slate-400" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 245,
												columnNumber: 25
											}, this)]
										}, to, true, {
											fileName: _jsxFileName$4,
											lineNumber: 234,
											columnNumber: 23
										}, this)), citizenSession && /* @__PURE__ */ (void 0)(Link, {
											to: "/dashboard/citizen",
											onClick: () => setMobileOpen(false),
											className: `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive("/dashboard/citizen") ? "bg-amber-500/20 text-amber-300" : "text-amber-400 hover:bg-white/10"}`,
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (void 0)(LayoutDashboard, { className: "h-4 w-4" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 259,
													columnNumber: 27
												}, this), lang === "ta" ? "என் புகார்கள்" : "My Complaints"]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 258,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "h-4 w-4 text-amber-400" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 262,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 249,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 232,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 222,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "p-4 border-t border-white/10 space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											onClick: () => setLang(lang === "en" ? "ta" : "en"),
											className: "w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-white/20 text-xs font-semibold text-white hover:bg-white/10",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "h-4 w-4 text-amber-400" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 273,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Language: ", lang === "en" ? "தமிழ்" : "English"] }, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 274,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 269,
											columnNumber: 19
										}, this), citizenSession ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											variant: "outline",
											className: "w-full text-xs text-red-400 font-semibold border-white/20 hover:bg-white/10",
											onClick: () => {
												citizenLogout();
												setMobileOpen(false);
											},
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 278,
												columnNumber: 23
											}, this), lang === "ta" ? "வெளியேறு (குடிமகன்)" : "Sign Out (Citizen)"]
										}, void 0, true, {
											fileName: _jsxFileName$4,
											lineNumber: 277,
											columnNumber: 21
										}, this) : !isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											asChild: true,
											className: "w-full text-xs bg-[#d91c2b] hover:bg-[#b81220] text-white",
											onClick: () => setMobileOpen(false),
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: "/login",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogIn, { className: "h-3.5 w-3.5 mr-1.5" }, void 0, false, {
													fileName: _jsxFileName$4,
													lineNumber: 284,
													columnNumber: 25
												}, this), lang === "ta" ? "உள்நுழைக" : "Login"]
											}, void 0, true, {
												fileName: _jsxFileName$4,
												lineNumber: 283,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 282,
											columnNumber: 21
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											variant: "outline",
											className: "w-full text-xs text-red-400 border-white/20 hover:bg-white/10",
											onClick: () => {
												logout();
												setMobileOpen(false);
											},
											children: "Logout"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 289,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 268,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 221,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 215,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 214,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 94,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 47,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/layout/Footer.tsx";
function Footer() {
	const { bi, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "relative bg-[#1c0305] text-white mt-auto border-t border-white/10 overflow-hidden bg-cover bg-center bg-no-repeat transition-all",
		style: { backgroundImage: "url('/image%20copy.png')" },
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-8 space-y-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "lg:col-span-2 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/",
								className: "inline-flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-11 w-11 rounded-full bg-[#2a0508] border border-amber-400/50 p-1.5 flex items-center justify-center shrink-0 shadow-md",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: "/logo.png",
										alt: "NAMMA KURAL",
										className: "h-full w-auto object-contain",
										onError: (e) => {
											const target = e.currentTarget;
											target.style.display = "none";
										}
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 23,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 22,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-black text-lg text-white font-display leading-tight tracking-tight",
										children: "Tamilaga Vettri Kazhagam"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 34,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs font-bold text-[#ffb703] uppercase tracking-wider",
										children: "TVK · NAMMA KURAL CONSTITUENCY"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 37,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 33,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 21,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-slate-300 leading-relaxed max-w-sm font-medium",
								children: lang === "ta" ? "உங்கள் குரல், எங்கள் கடமை — நம்ம குரல் தொகுதிக்கான நவீன குடிமக்கள் சேவை தளம்." : "Your voice, our duty — the citizen-services portal for NAMMA KURAL constituency."
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 43,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 20,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-xs font-black uppercase tracking-wider text-[#ffb703] border-b border-[#ffb703]/30 pb-1.5 mb-3 inline-block",
							children: "QUICK LINKS"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 52,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "space-y-2",
							children: [
								{
									label: lang === "ta" ? "புகார் பதிவு செய்க" : "File grievance",
									to: "/complaints/register"
								},
								{
									label: lang === "ta" ? "நிலையை கண்காணிக்க" : "Track status",
									to: "/complaints/track"
								},
								{
									label: lang === "ta" ? "சமூகம் & திட்டங்கள்" : "Community",
									to: "/schemes"
								},
								{
									label: lang === "ta" ? "குறைதீர்ப்பு டிராக்கர்" : "Grievance tracker",
									to: "/complaints/track"
								}
							].map(({ label, to }, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to,
								className: "text-xs text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 67,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3 w-3 text-slate-500 group-hover:text-amber-400 transition-colors" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 68,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 63,
								columnNumber: 19
							}, this) }, `${idx}-${to}`, false, {
								fileName: _jsxFileName$3,
								lineNumber: 62,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 55,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 51,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-xs font-black uppercase tracking-wider text-[#ffb703] border-b border-[#ffb703]/30 pb-1.5 mb-3 inline-block",
							children: "CONSTITUENCY"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 77,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "space-y-2",
							children: [
								{
									label: bi(CONSTITUENCY.name),
									to: "/development"
								},
								{
									label: lang === "ta" ? "சுயவிவரம் & முகப்பு" : "Profile & Dashboard",
									to: "/dashboard"
								},
								{
									label: lang === "ta" ? "வெளிப்படைத்தன்மை" : "Public Transparency",
									to: "/transparency"
								},
								{
									label: lang === "ta" ? "அறிவிப்புகள்" : "Announcements",
									to: "/notifications"
								}
							].map(({ label, to }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to,
								className: "text-xs text-slate-300 hover:text-white transition-colors flex items-center justify-between group py-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 92,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3 w-3 text-slate-500 group-hover:text-amber-400 transition-colors" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 93,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 88,
								columnNumber: 19
							}, this) }, to, false, {
								fileName: _jsxFileName$3,
								lineNumber: 87,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 80,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 76,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-xs font-black uppercase tracking-wider text-[#ffb703] border-b border-[#ffb703]/30 pb-1.5 mb-3 inline-block",
							children: "HELP"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 102,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
									className: "text-xs text-slate-300 flex items-center justify-between py-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Helpline: ", CONSTITUENCY.helpline] }, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 107,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3 w-3 text-slate-500" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 108,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 106,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
									className: "text-xs text-slate-300 flex items-center justify-between py-0.5",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/appointments",
										className: "hover:text-white transition-colors flex items-center justify-between w-full",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Volunteer / Meet MLA" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 112,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3 w-3 text-slate-500" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 113,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 111,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 110,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
									className: "text-xs text-slate-300 flex items-center justify-between py-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Privacy Policy" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 117,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3 w-3 text-slate-500" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 118,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 116,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 105,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 101,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 17,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-3xl sm:rounded-full bg-gradient-to-r from-[#180204] via-[#2a0408] to-[#180204] border border-red-500/40 p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-[0_0_30px_rgba(217,28,43,0.3)] backdrop-blur-xl relative overflow-hidden my-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3.5 shrink-0 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex items-center justify-center shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 rounded-full bg-red-600/40 blur-md animate-pulse" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 130,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-3xl sm:text-4xl relative z-10 select-none",
									children: "🚨"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 131,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 129,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[10px] sm:text-[11px] font-black text-[#ffb703] tracking-widest uppercase",
									children: "EMERGENCY NUMBERS"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 134,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "text-base sm:text-lg font-black text-white font-display leading-tight",
									children: "For your immediate assistance"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 137,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-slate-400 font-medium",
									children: "A safer constituency, a stronger community"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 140,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 133,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 128,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:block h-10 w-px bg-white/15 shrink-0" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 146,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-center",
							children: [
								{
									icon: "👮",
									label: "POLICE",
									num: "100"
								},
								{
									icon: "🛣️",
									label: "TRAFFIC",
									num: "103"
								},
								{
									icon: "🔥",
									label: "FIRE",
									num: "101"
								},
								{
									icon: "🚑",
									label: "AMBULANCE",
									num: "108"
								},
								{
									icon: "🌀",
									label: "DISASTER",
									num: "1077"
								},
								{
									icon: "🧒",
									label: "CHILD",
									num: "1098"
								},
								{
									icon: "♀️",
									label: "WOMEN",
									num: "181"
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col items-center gap-1 min-w-[52px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "h-9 w-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-sm shadow-xs",
										children: item.icon
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 160,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[9px] font-extrabold text-slate-400 uppercase tracking-wider",
										children: item.label
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 163,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-sm sm:text-base font-black text-white leading-none",
										children: item.num
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 164,
										columnNumber: 17
									}, this)
								]
							}, item.label, true, {
								fileName: _jsxFileName$3,
								lineNumber: 159,
								columnNumber: 15
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 149,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:block h-10 w-px bg-white/15 shrink-0" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 169,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: "tel:112",
								className: "flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d91c2b] to-[#b81220] text-white hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(217,28,43,0.5)] border border-red-400/40 shrink-0 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-black shrink-0",
									children: "📞"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 177,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-left leading-tight",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[10px] font-extrabold uppercase tracking-wider text-red-100 block",
										children: "Call All Services"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 181,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1",
										children: ["112 ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs",
											children: "→"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 185,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 184,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 180,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 173,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[9px] font-extrabold tracking-widest text-slate-400 uppercase text-center mt-1.5",
								children: "ONE NUMBER. A SAFER TOMORROW."
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 189,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 172,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 126,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["© 2026 Tamilaga Vettri Kazhagam - NAMMA KURAL Constituency. All rights reserved. - v1.0.677 · ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
						className: "text-[#ffb703] uppercase",
						children: "PILOT"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 198,
						columnNumber: 107
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 197,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-4 text-xs font-semibold",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "hover:text-white cursor-pointer transition-colors",
							children: "Privacy Policy"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 201,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 200,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 196,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 15,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/scroll-area.tsx";
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 15,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollBar, {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 18,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Corner, {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 19,
			columnNumber: 5
		}, void 0)
	]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 39,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 28,
	columnNumber: 3
}, void 0));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
var _jsxFileName$1 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/AiAssistant.tsx";
function getMockResponse(question, lang) {
	const q = question.toLowerCase();
	if (q.includes("road") || q.includes("சாலை")) return lang === "ta" ? "சாலை பிரச்சினையை பதிவு செய்ய 'பிரச்சினையை பதிவு செய்' பட்டனை கிளிக் செய்து 'சாலை' வகையை தேர்வு செய்யுங்கள். புகைப்படம் மற்றும் இடத்தை சேர்க்கலாம்." : "To report a road issue, click 'Report an Issue', select the 'Road' category, describe the problem, add a photo and your location. You'll receive a complaint ID.";
	if (q.includes("track") || q.includes("complaint") || q.includes("புகார்") || q.includes("கண்காணி")) return lang === "ta" ? "உங்கள் புகார் எண்ணை 'எனது புகாரை கண்காணி' பக்கத்தில் உள்ளிடுங்கள். உதாரணம்: NK-2026-000245" : "Go to 'Track My Issue' and enter your complaint ID (e.g. NK-2026-000245) to see live status and timeline.";
	if (q.includes("scheme") || q.includes("திட்ட") || q.includes("document") || q.includes("ஆவண")) return lang === "ta" ? "அரசு திட்டங்கள் பக்கத்தில் 'எனக்கான திட்டங்களை கண்டறி' பொத்தானை கிளிக் செய்து வயது, வருமானம் போன்றவற்றை உள்ளிடுங்கள். பொருந்தக்கூடிய திட்டங்களை காண்பிப்போம்." : "Visit 'Government Schemes', click 'Find Schemes for Me', and answer a few simple questions. We'll show potentially relevant schemes with required documents.";
	if (q.includes("appointment") || q.includes("mla") || q.includes("சந்திப்பு") || q.includes("எம்.எல்.ஏ")) return lang === "ta" ? "'எம்.எல்.ஏ.வை சந்திக்க' பக்கத்திற்கு சென்று சந்திப்பு கோரிக்கை படிவத்தை நிரப்புங்கள். உங்கள் நோக்கம், விரும்பிய தேதி மற்றும் விவரங்களை குறிப்பிடுங்கள்." : "Go to 'Meet Your MLA', fill the appointment request form with your purpose, preferred date, and details. You'll receive an appointment ID to track status.";
	if (q.includes("department") || q.includes("துறை") || q.includes("water") || q.includes("குடிநீர்")) return lang === "ta" ? "நீர் பிரச்சினைகள் — குடிநீர் வாரியம் | சாலை — நெடுஞ்சாலை துறை | மின்சாரம் — மின்சார வாரியம் | கழிவு — திடக்கழிவு மேலாண்மை | வடிகால் — மழைநீர் துறை" : "Water issues → Water Supply Board | Road → Highways & Roads | Electricity → Electricity Board | Waste → Solid Waste Management | Drainage → Storm Water & Drainage";
	return lang === "ta" ? "நன்றி! புகார் பதிவு, கண்காணிப்பு, அரசு திட்டங்கள், அல்லது சந்திப்பு பதிவு பற்றி கேளுங்கள். நான் உதவுவேன்." : "Thank you for asking! I can help with complaint registration, tracking, government schemes, appointment booking, or department information. What do you need?";
}
function AiAssistant() {
	const { t, lang } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const bottomRef = (0, import_react.useRef)(null);
	const PROMPTS = [
		t("ai.p1"),
		t("ai.p2"),
		t("ai.p3"),
		t("ai.p4")
	];
	(0, import_react.useEffect)(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	const sendMessage = async (text) => {
		if (!text.trim()) return;
		const userMsg = {
			id: Date.now().toString(),
			role: "user",
			text
		};
		setMessages((m) => [...m, userMsg]);
		setInput("");
		setLoading(true);
		await new Promise((r) => setTimeout(r, 800));
		const reply = {
			id: (Date.now() + 1).toString(),
			role: "assistant",
			text: getMockResponse(text, lang)
		};
		setMessages((m) => [...m, reply]);
		setLoading(false);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		id: "ai-assistant-toggle",
		onClick: () => setOpen((o) => !o),
		className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 h-12 px-4 rounded-full bg-primary text-primary-foreground shadow-lift hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
		"aria-label": "Ask NAMMA KURAL AI Assistant",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "h-5 w-5 shrink-0" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 87,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-xs font-bold tracking-wide hidden sm:inline",
				children: lang === "ta" ? "நம்ம குரல்-யிடம் கேளுங்கள்" : "Ask NAMMA KURAL"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 88,
				columnNumber: 9
			}, this),
			open && /* @__PURE__ */ (void 0)(ChevronDown, { className: "h-4 w-4 shrink-0" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 91,
				columnNumber: 18
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 81,
		columnNumber: 7
	}, this), open && /* @__PURE__ */ (void 0)("div", {
		className: "fixed bottom-20 right-4 sm:right-6 z-50 flex w-[340px] max-w-[calc(100vw-2rem)] flex-col rounded-3xl border border-border bg-white shadow-lift overflow-hidden",
		children: [
			/* @__PURE__ */ (void 0)("div", {
				className: "flex items-center justify-between bg-primary px-4 py-3.5",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-white text-xs font-bold",
						children: "NK"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 100,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
						className: "text-sm font-bold text-primary-foreground",
						children: lang === "ta" ? "நம்ம குரல் AI உதவியாளர்" : "Ask NAMMA KURAL Assistant"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 104,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("p", {
						className: "text-[10px] text-primary-foreground/80",
						children: lang === "ta" ? "24/7 தொகுதி வழிகாட்டி" : "24/7 Constituency Civic Guide"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 107,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 103,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 99,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("button", {
					onClick: () => setOpen(false),
					className: "text-primary-foreground/80 hover:text-primary-foreground p-1 rounded-lg hover:bg-white/10 transition-colors",
					children: /* @__PURE__ */ (void 0)(X, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 113,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 112,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 98,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (void 0)(ScrollArea, {
				className: "h-72 px-3 py-3",
				children: [
					messages.length === 0 && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-2 pb-2",
						children: [/* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-muted-foreground px-1",
							children: t("ai.sub")
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 121,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "space-y-1.5",
							children: PROMPTS.map((p) => /* @__PURE__ */ (void 0)("button", {
								onClick: () => sendMessage(p),
								className: "w-full text-left rounded-xl border border-border bg-muted/50 px-3 py-2 text-xs hover:bg-muted transition-colors",
								children: p
							}, p, false, {
								fileName: _jsxFileName$1,
								lineNumber: 124,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 122,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 120,
						columnNumber: 15
					}, this),
					messages.map((m) => /* @__PURE__ */ (void 0)("div", {
						className: `mb-2 flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
						children: /* @__PURE__ */ (void 0)("div", {
							className: `max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`,
							children: m.text
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 140,
							columnNumber: 17
						}, this)
					}, m.id, false, {
						fileName: _jsxFileName$1,
						lineNumber: 136,
						columnNumber: 15
					}, this)),
					loading && /* @__PURE__ */ (void 0)("div", {
						className: "flex justify-start mb-2",
						children: /* @__PURE__ */ (void 0)("div", {
							className: "bg-muted rounded-2xl rounded-bl-sm px-3 py-2",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "flex gap-1",
								children: [
									/* @__PURE__ */ (void 0)("span", { className: "h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0ms]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 155,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("span", { className: "h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:150ms]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 156,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("span", { className: "h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:300ms]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 157,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 154,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 153,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 152,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("div", { ref: bottomRef }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 162,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 118,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (void 0)("div", {
				className: "flex items-center gap-2 border-t px-3 py-2",
				children: [/* @__PURE__ */ (void 0)(Input, {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: t("ai.placeholder"),
					className: "flex-1 h-8 text-xs",
					onKeyDown: (e) => e.key === "Enter" && sendMessage(input)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 167,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)(Button, {
					size: "icon",
					className: "h-8 w-8 shrink-0",
					onClick: () => sendMessage(input),
					children: /* @__PURE__ */ (void 0)(Send, { className: "h-3.5 w-3.5" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 175,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 174,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 166,
				columnNumber: 11
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 96,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 79,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.tsx?tsr-split=component";
function LayoutComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AiAssistant, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 10
	}, this);
}
//#endregion
export { LayoutComponent as component };
