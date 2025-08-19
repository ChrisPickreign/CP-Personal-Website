import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

interface NavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  navLinks: { key: string; label: string }[];
}

export default function ShadcnNavigation({ activeSection, setActiveSection, navLinks }: NavProps) {
  return (
    <NavigationMenu className="fixed top-0 left-0 w-screen flex justify-center bg-[#171717] border-b border-[#333] py-4 z-50">
      <NavigationMenuList className="flex gap-8">
        {navLinks.map(link => (
          <NavigationMenuItem key={link.key}>
            <NavigationMenuLink
              asChild
              active={activeSection === link.key}
              className={`text-lg px-2 py-1 rounded transition-colors cursor-pointer ${activeSection === link.key ? 'bg-emerald-700 text-blue-300' : 'text-blue-300 hover:bg-gray-300 hover:text-gray-900'}`}
              onClick={() => setActiveSection(link.key)}
            >
              <span>{link.label}</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
