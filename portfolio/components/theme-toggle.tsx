"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, type SunIconHandle } from "@/components/ui/sun";
import { MoonIcon, type MoonIconHandle } from "@/components/ui/moon";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true)
  },[])

  if( !mounted ) return null;

  const isDark = theme === "dark";

  return (
 <button
  onClick={() => setTheme(isDark ? "light" : "dark")}
  className="h-9.5 w-9.5 rounded-full flex items-center justify-center border border-border text-fg/50 hover:border-pink/70 hover:-translate-y-0.5 hover:text-fg/70 transition-all"
  aria-label="Toggle theme"
>
  {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
</button>
  )



}

