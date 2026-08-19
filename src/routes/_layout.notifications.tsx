import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, CheckCheck, AlertTriangle, Info, Calendar, Megaphone } from "lucide-react";
import { useWorkflow } from "@/lib/workflow";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_layout/notifications")({
  component: NotificationsPage,
});

const PRIORITY_CONFIG = {
  high: { icon: AlertTriangle, cls: "bg-red-100 text-red-600", badgeCls: "bg-red-100 text-red-700 border-0" },
  normal: { icon: Info, cls: "bg-blue-100 text-blue-600", badgeCls: "bg-blue-100 text-blue-700 border-0" },
};

type FilterType = "all" | "unread" | "priority";

function NotificationsPage() {
  const { t, bi } = useI18n();
  const { notifications, markNotificationRead } = useWorkflow();
  const [filter, setFilter] = useState<FilterType>("all");

  const markAllRead = () => {
    notifications.forEach((n) => {
      if (!n.read) markNotificationRead(n.id);
    });
  };

  const markRead = (id: string) => {
    markNotificationRead(id);
  };

  const displayed = notifications.filter((n) => {
    if (filter === "unread") return !n.read;
    if (filter === "priority") return n.priority === "high";
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{t("notif.title")}</h1>
          {unreadCount > 0 && (
            <p className="text-sm text-muted-foreground mt-0.5">
              {unreadCount} {t("notif.unread")}
            </p>
          )}
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm" onClick={markAllRead} className="gap-2">
            <CheckCheck className="h-4 w-4" />
            {t("notif.markAll")}
          </Button>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {(["all", "unread", "priority"] as FilterType[]).map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(f)}
            className="text-xs"
          >
            {f === "all" ? t("common.all") : f === "unread" ? t("notif.unread") : t("notif.priority")}
            {f === "unread" && unreadCount > 0 && (
              <Badge className="ml-1.5 h-4 w-4 p-0 flex items-center justify-center bg-destructive text-white text-[10px] border-0">
                {unreadCount}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {displayed.length === 0 ? (
        <div className="text-center py-16">
          <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
          <p className="font-medium text-foreground">{t("notif.empty")}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {displayed.map((n) => {
            const cfg = PRIORITY_CONFIG[n.priority];
            const Icon = cfg.icon;
            return (
              <button
                key={n.id}
                onClick={() => markRead(n.id)}
                className={cn(
                  "w-full text-left rounded-2xl border p-4 flex gap-4 transition-all hover:shadow-soft",
                  n.read ? "bg-white border-border" : "bg-primary/5 border-primary/30",
                )}
              >
                <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", cfg.cls)}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className={cn("text-sm font-semibold leading-snug", n.read ? "text-foreground" : "text-foreground")}>
                      {bi(n.title)}
                    </p>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {n.priority === "high" && (
                        <Badge className={cn("text-[10px] border-0", cfg.badgeCls)}>
                          {t("notif.priority")}
                        </Badge>
                      )}
                      {!n.read && (
                        <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{bi(n.body)}</p>
                  <p className="text-[11px] text-muted-foreground/60 mt-1.5">{n.date}</p>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
