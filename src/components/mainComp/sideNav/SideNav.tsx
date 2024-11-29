import { AppSidebar } from "@/components/mainComp/sideNav/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function SideNav() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarTrigger />
    </SidebarProvider>
  );
}

export default SideNav;
