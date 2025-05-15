import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserSideBar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { SiteHeader } from "@/components/site-header";

export default function UserLayout() {
  return (
    <SidebarProvider>
      <UserSideBar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
