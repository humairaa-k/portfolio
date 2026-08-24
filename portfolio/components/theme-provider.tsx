"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode}) {
   return (
    <NextThemesProvider
     attribute="class"
     defaultTheme="dark"  
     enableSystem={false}  //no auto detect theme
    //  value={{ light: "light", dark: ""}}
    >
        { children }
    </NextThemesProvider>

   )
}