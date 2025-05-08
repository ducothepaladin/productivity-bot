import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function MainNavbar() {
    return (
        <nav className="flex justify-between items-center fixed w-full py-4 px-6 bg-white z-50">
            {/* Logo Section */}
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

            {/* Navigation Links */}
            <div>
                <NavigationMenu>
                    <NavigationMenuList className="flex space-x-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                                href="/"
                            >
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                                href="/about"
                            >
                                About Us
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Auth Links */}
            <div>
                <NavigationMenu>
                    <NavigationMenuList className="flex space-x-4">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                                href="/auth"
                            >
                                Login
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/auth/register"
                                className="px-4 py-2 border-2 hover:text-blue-500 rounded-lg transition-all duration-300"
                            >
                                Register
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}
