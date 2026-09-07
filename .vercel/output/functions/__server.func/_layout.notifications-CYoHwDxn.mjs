import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { St as Bell, W as Info, gt as CheckCheck, u as TriangleAlert } from "./_libs/lucide-react.mjs";
import { _ as cn, h as Badge, l as Button, m as useWorkflow, v as useI18n } from "./_ssr/router-YfaUB1VU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.notifications-CYoHwDxn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.notifications.tsx?tsr-split=component";
var PRIORITY_CONFIG = {
	high: {
		icon: TriangleAlert,
		cls: "bg-red-100 text-red-600",
		badgeCls: "bg-red-100 text-red-700 border-0"
	},
	normal: {
		icon: Info,
		cls: "bg-blue-100 text-blue-600",
		badgeCls: "bg-blue-100 text-blue-700 border-0"
	}
};
function NotificationsPage() {
	const { t, bi } = useI18n();
	const { notifications, markNotificationRead } = useWorkflow();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const markAllRead = () => {
		notifications.forEach((n) => {
			if (!n.read) markNotificationRead(n.id);
		});
	};
	const markRead = (id) => {
		markNotificationRead(id);
	};
	const displayed = notifications.filter((n) => {
		if (filter === "unread") return !n.read;
		if (filter === "priority") return n.priority === "high";
		return true;
	});
	const unreadCount = notifications.filter((n) => !n.read).length;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl font-bold text-foreground",
					children: t("notif.title")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 11
				}, this), unreadCount > 0 && /* @__PURE__ */ (void 0)("p", {
					className: "text-sm text-muted-foreground mt-0.5",
					children: [
						unreadCount,
						" ",
						t("notif.unread")
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 31
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 9
				}, this), unreadCount > 0 && /* @__PURE__ */ (void 0)(Button, {
					variant: "outline",
					size: "sm",
					onClick: markAllRead,
					className: "gap-2",
					children: [/* @__PURE__ */ (void 0)(CheckCheck, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 13
					}, this), t("notif.markAll")]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 29
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-2 mb-6",
				children: [
					"all",
					"unread",
					"priority"
				].map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: filter === f ? "default" : "outline",
					size: "sm",
					onClick: () => setFilter(f),
					className: "text-xs",
					children: [f === "all" ? t("common.all") : f === "unread" ? t("notif.unread") : t("notif.priority"), f === "unread" && unreadCount > 0 && /* @__PURE__ */ (void 0)(Badge, {
						className: "ml-1.5 h-4 w-4 p-0 flex items-center justify-center bg-destructive text-white text-[10px] border-0",
						children: unreadCount
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 51
					}, this)]
				}, f, true, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 67
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 7
			}, this),
			displayed.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center py-16",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: "h-12 w-12 text-muted-foreground mx-auto mb-3" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-medium text-foreground",
					children: t("notif.empty")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 33
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-3",
				children: displayed.map((n) => {
					const cfg = PRIORITY_CONFIG[n.priority];
					const Icon = cfg.icon;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => markRead(n.id),
						className: cn("w-full text-left rounded-2xl border p-4 flex gap-4 transition-all hover:shadow-soft", n.read ? "bg-white border-border" : "bg-primary/5 border-primary/30"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", cfg.cls),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: cn("text-sm font-semibold leading-snug", n.read ? "text-foreground" : "text-foreground"),
										children: bi(n.title)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 82,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5 shrink-0",
										children: [n.priority === "high" && /* @__PURE__ */ (void 0)(Badge, {
											className: cn("text-[10px] border-0", cfg.badgeCls),
											children: t("notif.priority")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 86,
											columnNumber: 49
										}, this), !n.read && /* @__PURE__ */ (void 0)("span", { className: "h-2 w-2 rounded-full bg-primary shrink-0" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 89,
											columnNumber: 35
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 85,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground mt-1 leading-relaxed",
									children: bi(n.body)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 92,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-muted-foreground/60 mt-1.5",
									children: n.date
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 17
						}, this)]
					}, n.id, true, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 16
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 18
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 10
	}, this);
}
//#endregion
export { NotificationsPage as component };
