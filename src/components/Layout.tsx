import { useEffect, useLayoutEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { CalendarDays, FileText, LayoutDashboard, LibraryBig, LogOut, Menu, PanelLeft, Settings, X } from "lucide-react";
import { LogoMark } from "@/components/Logo";
import { useAuth } from "@/lib/auth";
import { useAvatarUrl } from "@/hooks/useAvatarUrl";
import { cn } from "@/lib/utils";

const RAIL = "margin_sidebar_open";

const NAV = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/library", label: "Library", icon: LibraryBig },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/papers", label: "Past Papers", icon: FileText },
];

const ALL = [...NAV, { to: "/settings", label: "Settings", icon: Settings }];

function Avatar() {
  const { profile } = useAuth();
  const url = useAvatarUrl(profile?.avatar_url);
  const initials = profile?.public_tag || profile?.display_name?.slice(0, 2).toUpperCase() || "?";
  return (
    <span className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-full bg-secondary text-[11px] font-semibold text-foreground">
      {url ? <img src={url} alt="" className="size-full object-cover" /> : initials}
    </span>
  );
}

/** Clean, minimal app shell: slim collapsible sidebar on desktop, slide-over drawer on mobile. */
export default function Layout() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const { signOut, profile } = useAuth();

  const [open, setOpen] = useState(() => {
    try {
      return localStorage.getItem(RAIL) !== "0";
    } catch {
      return true;
    }
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  useLayoutEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setOpen((v) => {
          const next = !v;
          try {
            localStorage.setItem(RAIL, next ? "1" : "0");
          } catch {
            /* ignore */
          }
          return next;
        });
      }
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleDesktop = () => {
    setOpen((v) => {
      const next = !v;
      try {
        localStorage.setItem(RAIL, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const isActive = (to: string) => pathname === to || pathname.startsWith(to + "/");
  const title = ALL.find((i) => isActive(i.to))?.label ?? "Margin";

  const handleSignOut = async () => {
    navigate("/login", { replace: true });
    await signOut();
  };

  const navContent = (collapsed: boolean) => (
    <div className="flex h-full flex-col justify-between py-3">
      <div>
        {/* Brand */}
        <div className={cn("flex h-10 items-center px-3", collapsed ? "justify-center" : "justify-between")}>
          <Link to="/dashboard" className="flex items-center gap-2.5 overflow-hidden">
            <LogoMark className="size-6 shrink-0" />
            {!collapsed && <span className="text-sm font-semibold tracking-tight text-foreground">Margin</span>}
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
            className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation links */}
        <nav aria-label="Primary" className="mt-5 space-y-0.5 px-2">
          {NAV.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                title={collapsed ? item.label : undefined}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] transition-colors",
                  collapsed && "justify-center px-0",
                  active
                    ? "bg-secondary font-medium text-foreground"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                )}
              >
                <item.icon className={cn("size-4 shrink-0", active ? "text-primary" : "")} aria-hidden="true" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer: Settings + compact account strip */}
      <div className="space-y-1 border-t border-border px-2 pt-3">
        <Link
          to="/settings"
          title={collapsed ? "Settings" : undefined}
          aria-current={isActive("/settings") ? "page" : undefined}
          className={cn(
            "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] transition-colors",
            collapsed && "justify-center px-0",
            isActive("/settings")
              ? "bg-secondary font-medium text-foreground"
              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
          )}
        >
          <Settings className={cn("size-4 shrink-0", isActive("/settings") ? "text-primary" : "")} aria-hidden="true" />
          {!collapsed && <span>Settings</span>}
        </Link>

        <div className={cn("flex items-center gap-2.5 px-2 py-1.5", collapsed && "justify-center px-0")}>
          <Avatar />
          {!collapsed && (
            <>
              <span className="min-w-0 flex-1 truncate text-xs font-medium text-foreground">
                {profile?.display_name || "Account"}
              </span>
              <button
                type="button"
                onClick={handleSignOut}
                title="Sign out"
                aria-label="Sign out"
                className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <LogOut className="size-3.5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-svh w-full bg-background text-foreground">
      {/* Desktop sidebar */}
      <aside
        aria-label="Sidebar"
        className={cn(
          "sticky top-0 hidden h-svh shrink-0 border-r border-border bg-background transition-[width] duration-200 ease-out md:block",
          open ? "w-52" : "w-14",
        )}
      >
        {navContent(!open)}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <aside aria-label="Mobile navigation" className="relative z-10 h-full w-60 border-r border-border bg-background">
            {navContent(false)}
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-12 shrink-0 items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          >
            <Menu className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={toggleDesktop}
            aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
            className="hidden rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:inline-flex"
          >
            <PanelLeft className="size-4" aria-hidden="true" />
          </button>
          <span className="h-4 w-px bg-border" aria-hidden="true" />
          <p className="text-xs font-medium text-muted-foreground">{title}</p>
        </header>

        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-7 md:px-10 md:py-9">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
