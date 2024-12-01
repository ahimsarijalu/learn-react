import AppSidebar from "@/components/AppSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";

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
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link to="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            {/* <h1 className="text-xl font-semibold">{title}</h1> */}
          </header>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
