import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { f as Outlet, l as useLocation } from "./_libs/@tanstack/react-router+[...].mjs";
import { p as useAuth } from "./_ssr/router-YfaUB1VU.mjs";
import { a as SuperAdminDashboard, i as FieldOfficerDashboard, n as ConstituencyAdminDashboard, r as DepartmentAdminDashboard, t as CitizenDashboardPage } from "./_ssr/router-YfaUB1VU2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout.dashboard-BCXTon_p.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/constituency-connect-main (3)/constituency-connect-main/constituency-connect-main/src/routes/_layout.dashboard.tsx?tsr-split=component";
function DashboardDispatcher() {
	const { user } = useAuth();
	const location = useLocation();
	if (location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
		if (user?.role === "constituency_admin") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConstituencyAdminDashboard, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 53
		}, this);
		if (user?.role === "department_admin") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DepartmentAdminDashboard, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 51
		}, this);
		if (user?.role === "field_officer") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldOfficerDashboard, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 48
		}, this);
		if (user?.role === "super_admin") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuperAdminDashboard, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 46
		}, this);
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CitizenDashboardPage, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 12
		}, this);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 10
	}, this);
}
//#endregion
export { DashboardDispatcher as component };
