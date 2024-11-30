import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-background">
      <NavigationMenu className="flex flex-grow justify-between">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="mx-4">
              <Link to={"/"}>Home</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="mx-4">
              <Link to={"/product"}>Product</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="mx-4">
              <Link to={"/dashboard"}>Dashboard</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="mx-4">
              <Link to={"/register"}>Register</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="mx-4">
              <Link to={"/camera"}>Camera</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
