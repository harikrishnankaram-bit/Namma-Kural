import { o as __toESM } from "./_runtime.mjs";
import { u as MOCK_SCHEMES } from "./_ssr/ssr.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { Ct as ArrowRight, dt as ChevronUp, ht as Check, lt as CircleCheck, mt as ChevronDown, nt as ExternalLink, st as Circle, ut as CircleAlert, v as Search } from "./_libs/lucide-react.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "./_libs/@radix-ui/react-select+[...].mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./_ssr/tabs-DGON80NW.mjs";
import { _ as cn, c as Input, h as Badge, l as Button, n as Label, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "./_libs/radix-ui__react-radio-group.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.schemes-D2NRechr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/select.tsx";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4 opacity-50" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 29,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 28,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 19,
	columnNumber: 3
}, void 0));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronUp, { className: "h-4 w-4" }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 44,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 39,
	columnNumber: 3
}, void 0));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4" }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 58,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 53,
	columnNumber: 3
}, void 0));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollUpButton, {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 79,
			columnNumber: 7
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 80,
			columnNumber: 7
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollDownButton, {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 89,
			columnNumber: 7
		}, void 0)
	]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 68,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 67,
	columnNumber: 3
}, void 0));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 99,
	columnNumber: 3
}, void 0));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 121,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 120,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 119,
		columnNumber: 5
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItemText, { children }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 124,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 111,
	columnNumber: 3
}, void 0));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 133,
	columnNumber: 3
}, void 0));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var _jsxFileName$1 = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/components/ui/radio-group.tsx";
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 11,
		columnNumber: 10
	}, void 0);
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-3.5 w-3.5 fill-primary" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 29,
				columnNumber: 9
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 28,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 20,
		columnNumber: 5
	}, void 0);
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.schemes.tsx?tsr-split=component";
function SchemeCard({ scheme, expanded, onToggle }) {
	const { t, bi } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-2xl border border-slate-200 bg-white shadow-soft overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			className: "w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors cursor-pointer",
			onClick: onToggle,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
						variant: "secondary",
						className: "mb-2 text-xs font-bold bg-amber-100 text-amber-900 border-0",
						children: bi(scheme.tag)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-black text-slate-950 text-base sm:text-lg",
						children: bi(scheme.name)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-slate-700 font-medium mt-1 line-clamp-2",
						children: bi(scheme.overview)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 9
			}, this), expanded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronUp, { className: "h-5 w-5 text-slate-600 shrink-0 mt-1" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 21
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-5 w-5 text-slate-600 shrink-0 mt-1" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 86
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 7
		}, this), expanded && /* @__PURE__ */ (void 0)("div", {
			className: "border-t border-slate-200 px-5 pb-5 bg-white",
			children: [/* @__PURE__ */ (void 0)(Tabs, {
				defaultValue: "overview",
				className: "mt-4",
				children: [
					/* @__PURE__ */ (void 0)(TabsList, {
						className: "w-full justify-start overflow-x-auto bg-slate-100 p-1 rounded-xl",
						children: [
							/* @__PURE__ */ (void 0)(TabsTrigger, {
								value: "overview",
								className: "text-xs font-bold text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary",
								children: t("schemes.overview")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(TabsTrigger, {
								value: "benefits",
								className: "text-xs font-bold text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary",
								children: t("schemes.benefits")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(TabsTrigger, {
								value: "eligibility",
								className: "text-xs font-bold text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary",
								children: t("schemes.eligibility")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(TabsTrigger, {
								value: "documents",
								className: "text-xs font-bold text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary",
								children: t("schemes.documents")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(TabsTrigger, {
								value: "process",
								className: "text-xs font-bold text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary",
								children: t("schemes.process")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)(TabsContent, {
						value: "overview",
						className: "mt-4 text-sm text-slate-800 font-medium leading-relaxed",
						children: bi(scheme.overview)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)(TabsContent, {
						value: "benefits",
						className: "mt-4",
						children: /* @__PURE__ */ (void 0)("ul", {
							className: "space-y-2",
							children: scheme.benefits.map((b, i) => /* @__PURE__ */ (void 0)("li", {
								className: "flex gap-2 text-sm text-slate-800 font-medium",
								children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 142
								}, this), bi(b)]
							}, i, true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 72
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)(TabsContent, {
						value: "eligibility",
						className: "mt-4",
						children: /* @__PURE__ */ (void 0)("ul", {
							className: "space-y-2",
							children: scheme.eligibility.map((e, i) => /* @__PURE__ */ (void 0)("li", {
								className: "flex gap-2 text-sm text-slate-800 font-medium",
								children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 49,
									columnNumber: 145
								}, this), bi(e)]
							}, i, true, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 75
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)(TabsContent, {
						value: "documents",
						className: "mt-4",
						children: /* @__PURE__ */ (void 0)("ul", {
							className: "space-y-2",
							children: scheme.documents.map((d, i) => /* @__PURE__ */ (void 0)("li", {
								className: "flex gap-2 text-sm text-slate-800 font-medium",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "h-4 w-4 shrink-0 mt-0.5 flex items-center justify-center rounded-full bg-slate-200 text-slate-900 text-[10px] font-bold",
									children: i + 1
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 143
								}, this), bi(d)]
							}, i, true, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 73
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)(TabsContent, {
						value: "process",
						className: "mt-4",
						children: /* @__PURE__ */ (void 0)("ol", {
							className: "space-y-3",
							children: scheme.process.map((p, i) => /* @__PURE__ */ (void 0)("li", {
								className: "flex gap-3 text-sm text-slate-800 font-medium",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold shrink-0",
									children: i + 1
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 141
								}, this), bi(p)]
							}, i, true, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 71
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)("div", {
				className: "flex gap-3 mt-5 border-t border-slate-200 pt-4",
				children: [/* @__PURE__ */ (void 0)("a", {
					href: scheme.source,
					target: "_blank",
					rel: "noopener noreferrer",
					children: /* @__PURE__ */ (void 0)(Button, {
						variant: "outline",
						size: "sm",
						className: "gap-1.5 text-xs font-bold text-slate-900 border-slate-300",
						children: [
							/* @__PURE__ */ (void 0)(ExternalLink, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 17
							}, this),
							" ",
							t("schemes.source")
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("a", {
					href: scheme.source,
					target: "_blank",
					rel: "noopener noreferrer",
					children: /* @__PURE__ */ (void 0)(Button, {
						size: "sm",
						className: "gap-1.5 text-xs font-bold bg-primary hover:bg-primary/90 text-white",
						children: [
							t("schemes.apply"),
							" ",
							/* @__PURE__ */ (void 0)(ArrowRight, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 38
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 20
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 10
	}, this);
}
function SchemeFinderWizard({ onResults }) {
	const { t, bi } = useI18n();
	const [age, setAge] = (0, import_react.useState)("");
	const [gender, setGender] = (0, import_react.useState)("");
	const [income, setIncome] = (0, import_react.useState)("");
	const [occupation, setOccupation] = (0, import_react.useState)("");
	const find = () => {
		const ageNum = parseInt(age, 10);
		const incNum = parseInt(income.replace(/,/g, ""), 10);
		onResults(MOCK_SCHEMES.filter((s) => {
			const c = s.criteria;
			if (!c) return false;
			if (c.minAge && ageNum < c.minAge) return false;
			if (c.maxAge && ageNum > c.maxAge) return false;
			if (c.gender && c.gender !== "any" && gender && c.gender !== gender) return false;
			if (c.maxIncome && incNum > 0 && incNum > c.maxIncome) return false;
			return true;
		}).map((s) => s.id));
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-2xl border-2 border-primary/40 bg-white p-6 space-y-5 mb-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white text-sm font-bold",
					children: "?"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-black text-slate-950",
					children: t("schemes.finder")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start gap-2 text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-xl p-3 font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "h-4 w-4 shrink-0 mt-0.5 text-amber-600" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 9
				}, this), t("schemes.disclaimer")]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 106,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid sm:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "text-xs font-bold text-slate-900",
							children: t("schemes.q.age")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "number",
							value: age,
							onChange: (e) => setAge(e.target.value),
							placeholder: "e.g. 28",
							className: "text-slate-950 font-bold bg-white border-slate-300"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "text-xs font-bold text-slate-900",
							children: t("schemes.q.gender")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
							value: gender,
							onValueChange: (v) => setGender(v),
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroupItem, {
									value: "male",
									id: "g-m"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 56
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "g-m",
									className: "text-sm font-bold text-slate-900",
									children: bi({
										en: "Male",
										ta: "ஆண்"
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 96
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroupItem, {
									value: "female",
									id: "g-f"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 56
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "g-f",
									className: "text-sm font-bold text-slate-900",
									children: bi({
										en: "Female",
										ta: "பெண்"
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 98
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "text-xs font-bold text-slate-900",
							children: t("schemes.q.income")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "number",
							value: income,
							onChange: (e) => setIncome(e.target.value),
							placeholder: "e.g. 150000",
							className: "text-slate-950 font-bold bg-white border-slate-300"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 130,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "text-xs font-bold text-slate-900",
							children: t("schemes.q.occupation")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 133,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
							onValueChange: setOccupation,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
								className: "text-slate-950 font-bold bg-white border-slate-300",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: bi({
									en: "Select…",
									ta: "தேர்ந்தெடு…"
								}) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 135,
									columnNumber: 91
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: "salaried",
									children: bi({
										en: "Salaried",
										ta: "சம்பளதாரர்"
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: "self_employed",
									children: bi({
										en: "Self Employed",
										ta: "சுயதொழில்"
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 144,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: "daily_wage",
									children: bi({
										en: "Daily Wage",
										ta: "தினக்கூலி"
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 148,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: "student",
									children: bi({
										en: "Student",
										ta: "மாணவர்"
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: "retired",
									children: bi({
										en: "Retired / Senior",
										ta: "ஓய்வு / மூத்தோர்"
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 156,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				onClick: find,
				className: "gap-2 font-bold bg-primary hover:bg-primary/90 text-white",
				children: [
					t("schemes.finder"),
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 164,
						columnNumber: 122
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 164,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 101,
		columnNumber: 10
	}, this);
}
function SchemesPage() {
	const { t, bi, lang } = useI18n();
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	const [search, setSearch] = (0, import_react.useState)("");
	const [finderResults, setFinderResults] = (0, import_react.useState)(null);
	const [showFinder, setShowFinder] = (0, import_react.useState)(false);
	const schemes = finderResults ? MOCK_SCHEMES.filter((s) => finderResults.includes(s.id)) : MOCK_SCHEMES.filter((s) => bi(s.name).toLowerCase().includes(search.toLowerCase()) || bi(s.tag).toLowerCase().includes(search.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-4xl px-6 py-10 my-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-200 text-slate-950",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl sm:text-3xl font-black text-slate-950 mb-1 font-display",
				children: t("schemes.title")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 179,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-slate-800 font-semibold mb-6",
				children: lang === "ta" ? "திருச்செங்கோடு தொகுதி மக்களுக்கான அரசு நலத்திட்டங்கள்" : "Official Government Welfare Schemes & Citizen Initiatives"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 180,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-3 mb-6 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative flex-1 min-w-40",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						value: search,
						onChange: (e) => {
							setSearch(e.target.value);
							setFinderResults(null);
						},
						placeholder: t("common.search"),
						className: "pl-9 text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 186,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 190,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 185,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: showFinder ? "default" : "outline",
					onClick: () => {
						setShowFinder((s) => !s);
						setFinderResults(null);
					},
					className: "gap-2 font-bold text-slate-900 border-slate-300 bg-white hover:bg-slate-100",
					children: t("schemes.finder")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 192,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 184,
				columnNumber: 7
			}, this),
			showFinder && /* @__PURE__ */ (void 0)(SchemeFinderWizard, {
				onResults: (ids) => {
					setFinderResults(ids);
					setShowFinder(false);
				},
				onClose: () => setShowFinder(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 200,
				columnNumber: 22
			}, this),
			finderResults !== null && /* @__PURE__ */ (void 0)("div", {
				className: "mb-4 flex items-center gap-2",
				children: [
					/* @__PURE__ */ (void 0)(Badge, {
						className: "bg-green-100 text-green-700 border-0",
						children: t("schemes.relevant")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 206,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("span", {
						className: "text-sm text-muted-foreground",
						children: [schemes.length, " results"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 207,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => setFinderResults(null),
						children: t("common.close")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 208,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 205,
				columnNumber: 34
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-4",
				children: schemes.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-center py-16 text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-medium",
						children: t("common.notFound")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 213,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 33
				}, this) : schemes.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SchemeCard, {
					scheme: s,
					expanded: expanded === s.id,
					onToggle: () => setExpanded(expanded === s.id ? null : s.id)
				}, s.id, false, {
					fileName: _jsxFileName,
					lineNumber: 214,
					columnNumber: 37
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 211,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 178,
		columnNumber: 10
	}, this);
}
//#endregion
export { SchemesPage as component };
