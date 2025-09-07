"use client"



import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // const label =
  //   theme === "system"
  //     ? `System (${resolvedTheme})`
  //     : (theme ?? "light").charAt(0).toUpperCase() + (theme ?? "light").slice(1)

  return (
    <Button
      variant={isDark ? "default" : "outline"}
      size="icon"
      aria-label="Toggle theme"
      className={isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
