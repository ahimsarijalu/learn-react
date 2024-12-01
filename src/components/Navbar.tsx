import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Camera, House, Package, PanelsTopLeft } from "lucide-react";
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
          </NavigationMenuList>

          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <Link to="/register">
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
