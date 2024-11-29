import MainFooter from "@/components/mainComp/footer/MainFooter";
import MainHeader from "@/components/mainComp/header/MainHeader";
import { AppSidebar } from "@/components/mainComp/sideNav/components/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-5">
          <MainHeader />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <SidebarTrigger className="-ml-1 bg-white text-black hover:bg-white hover:text-black rounded-xl" />
        </div>

        <main></main>

        <MainFooter />
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Page;
