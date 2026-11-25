import { useLayoutEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CalendarDays, FileText, LayoutDashboard, LibraryBig, LogOut, PanelLeft, Settings, X } from "lucide-react";
import {
  AnimatedSidebar,
  AnimatedSidebarClose,
  AnimatedSidebarContent,
  AnimatedSidebarFooter,
  AnimatedSidebarGroup,
  AnimatedSidebarGroupContent,
  AnimatedSidebarGroupLabel,
  AnimatedSidebarHeader,
  AnimatedSidebarInset,
  AnimatedSidebarMenu,
  AnimatedSidebarMenuButton,
  AnimatedSidebarMenuItem,
  AnimatedSidebarProvider,
  AnimatedSidebarRail,
  AnimatedSidebarTrigger,
} from "@/components/ui/animated-sidebar";
import { LogoMark } from "@/components/Logo";
import { useAuth } from "@/lib/auth";
import { useAvatarUrl } from "@/hooks/useAvatarUrl";

const RAIL = "margin_sidebar_open";

const main = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/library", label: "Library", icon: LibraryBig },
  { to: "/papers", label: "Past Papers", icon: FileText },
];
const settings = { to: "/settings", label: "Settings", icon: Settings };
const ALL = [...main, settings];

function Avatar() {
  const { profile } = useAuth();
  const url = useAvatarUrl(profile?.avatar_url);
  return (
    <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-full bg-primary text-xs font-semibold text-primary-foreground">
      {url ? <img src={url} alt="" className="size-full object-cover" /> : (profile?.public_tag || profile?.display_name?.slice(0, 2).toUpperCase() || "?")}
    </span>
  );
}

/** App shell: collapsible animated sidebar, top bar with the page title, and a drawer on mobile. */
export default function Layout() {
  const { pathname, hash } = useLocation();
  // Every page change starts at the top (breadcrumb #anchors scroll themselves).
  useLayoutEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);
  const navigate = useNavigate();
  const { signOut, profile } = useAuth();
  const [open, setOpen] = useState(() => {
    try {
      return localStorage.getItem(RAIL) !== "0";
    } catch {
      return true;
    }
  });
  const remember = (next: boolean) => {
    setOpen(next);
    try {
      localStorage.setItem(RAIL, next ? "1" : "0");
    } catch {
      /* storage blocked */
    }
  };
  const on = (to: string) => pathname === to || pathname.startsWith(to + "/");
  const title = ALL.find((i) => on(i.to))?.label ?? "Margin";

  const out = async () => {
    navigate("/login", { replace: true }); // leave the protected area first, then clear the session
    await signOut();
  };

  return (
    <AnimatedSidebarProvider open={open} onOpenChange={remember} className="min-h-svh bg-background text-foreground">
      <AnimatedSidebar ariaLabel="Margin menu" collapsible="icon">
        <AnimatedSidebarHeader className="p-3 pb-2">
          <div className="flex min-h-11 items-center gap-3 overflow-hidden px-2">
            <LogoMark className="size-8" />
            <span className="text-base font-semibold tracking-tight group-data-[state=collapsed]/sidebar:hidden">Margin</span>
            <AnimatedSidebarClose className="ml-auto text-muted-foreground hover:bg-muted md:hidden">
              <X aria-hidden="true" className="size-4" />
            </AnimatedSidebarClose>
          </div>
        </AnimatedSidebarHeader>

        <AnimatedSidebarContent className="px-2 pt-1">
          <AnimatedSidebarGroup className="pt-1">
            <AnimatedSidebarGroupLabel>Study</AnimatedSidebarGroupLabel>
            <AnimatedSidebarGroupContent>
              <AnimatedSidebarMenu>
                {main.map((i) => (
                  <AnimatedSidebarMenuItem key={i.to}>
                    <AnimatedSidebarMenuButton icon={<i.icon className="size-4" />} isActive={on(i.to)} onSelect={() => navigate(i.to)}>
                      {i.label}
                    </AnimatedSidebarMenuButton>
                  </AnimatedSidebarMenuItem>
                ))}
              </AnimatedSidebarMenu>
            </AnimatedSidebarGroupContent>
          </AnimatedSidebarGroup>
        </AnimatedSidebarContent>

        <AnimatedSidebarFooter className="gap-1 border-none p-3">
          <AnimatedSidebarMenu>
            <AnimatedSidebarMenuItem>
              <AnimatedSidebarMenuButton icon={<settings.icon className="size-4" />} isActive={on(settings.to)} onSelect={() => navigate(settings.to)}>
                {settings.label}
              </AnimatedSidebarMenuButton>
            </AnimatedSidebarMenuItem>
            <AnimatedSidebarMenuItem>
              <AnimatedSidebarMenuButton icon={<LogOut className="size-4" />} onSelect={out}>
                Sign out
              </AnimatedSidebarMenuButton>
            </AnimatedSidebarMenuItem>
          </AnimatedSidebarMenu>
          <div className="mt-1 flex min-h-11 items-center gap-3 overflow-hidden rounded-xl p-1">
            <Avatar />
            <span className="min-w-0 flex-1 group-data-[state=collapsed]/sidebar:hidden">
              <span className="block truncate text-sm font-medium text-foreground">{profile?.display_name || "Your account"}</span>
              <span className="block truncate text-xs text-muted-foreground">Tag {profile?.public_tag || "-"}</span>
            </span>
          </div>
        </AnimatedSidebarFooter>

        <AnimatedSidebarRail />
      </AnimatedSidebar>

      <AnimatedSidebarInset className="min-h-svh bg-background">
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur">
          <AnimatedSidebarTrigger className="text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <PanelLeft aria-hidden="true" className="size-4" />
          </AnimatedSidebarTrigger>
          <div className="h-5 w-px bg-border" />
          <p className="text-sm font-medium text-foreground">{title}</p>
        </header>
        <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-8 md:py-8">
          <Outlet />
        </div>
      </AnimatedSidebarInset>
    </AnimatedSidebarProvider>
  );
}
