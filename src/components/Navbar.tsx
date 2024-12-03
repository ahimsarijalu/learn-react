import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Camera,
  Database,
  FileJson2,
  FileUp,
  House,
  Package,
  PanelsTopLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ThemeChanger";

export default function Navbar() {
  return (
    <nav className="p-4 bg-background">
      <NavigationMenu className="max-w-full w-full">
        <div className="flex justify-between items-center w-full">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <House className="me-2" />
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/product">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Package className="me-2" />
                  Our Product
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/dashboard">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <PanelsTopLeft className="me-2" />
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/camera">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Camera className="me-2" />
                  Camera
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/indexdb">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Database className="me-2" />
                  Index DB
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/file">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <FileUp className="me-2" />
                  File Upload
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          <NavigationMenuItem>
              <Link to="/laravel">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <FileJson2 className="me-2" />
                  Laravel
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <Link to="/auth/register">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Register
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </nav>
  );
}
