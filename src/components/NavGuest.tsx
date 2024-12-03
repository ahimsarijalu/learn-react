import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import {
  House,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ThemeChanger";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

export default function NavGuest() {
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
