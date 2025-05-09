import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { getAccessToken } from "@/store/authStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MainNavbar() {
  const token = getAccessToken();

  return (
    <nav className="flex justify-between items-center fixed w-full py-4 px-6 bg-white z-50">
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="font-bold text-2xl text-gray-800 hover:text-blue-500 transition-colors duration-300"
                href="/"
              >
                Logo
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-gray-600 text-md hover:text-blue-500 transition-colors duration-300"
                href="/"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-gray-600 text-md hover:text-blue-500 transition-colors duration-300"
                href="/about"
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div>
        <NavigationMenu>
          {!token ? (
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg"
                  href="/auth"
                >
                  Login
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/auth/register"
                  className="px-5 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full shadow-md transition-all duration-300"
                >
                  Register
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          ) : (
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg"
                  href="/user"
                >
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          )}
        </NavigationMenu>
      </div>
    </nav>
  );
}
