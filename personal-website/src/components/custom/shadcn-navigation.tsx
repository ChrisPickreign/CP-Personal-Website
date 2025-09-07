// components/shadcn-navigation.tsx
"use client"

import * as React from "react"
// import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

interface NavProps {
  activeSection: string
  setActiveSection: (section: string) => void
  navLinks: { key: string; label: string }[]
}

export default function ShadcnNavigation({
  activeSection,
  setActiveSection,
  navLinks,
}: NavProps) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <NavigationMenu className="pointer-events-auto">
          <NavigationMenuList className="gap-2 font-geist-mono">
            {navLinks.map((link) => {
              const isActive = activeSection === link.key
              return (
                <NavigationMenuItem key={link.key}>
                  <NavigationMenuLink asChild>
                    <a
                      href={`#${link.key}`}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveSection(link.key)
                        // Optionally scroll into view:
                        document.getElementById(link.key)?.scrollIntoView({ behavior: "smooth", block: "start" })
                        history.replaceState(null, "", `#${link.key}`)
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent font-geist-mono",
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />
      </div>
    </nav>
  )
}

