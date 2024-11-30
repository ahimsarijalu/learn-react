import AppSidebar from "@/components/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";

const routeTitles: Record<string, string> = {
  "/dashboard/statistic": "Statistic",
  "/dashboard/invoice": "Invoice",
};

export default function DashboardPage() {
  const location = useLocation();
  const title = routeTitles[location.pathname] || "";

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex shrink-0 items-center gap-2 border-b px-4 py-4">
            <h1 className="text-xl font-semibold">{title}</h1>
          </header>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
