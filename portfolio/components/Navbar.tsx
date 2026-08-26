"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const {theme} = useTheme()
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true)},[])

  const isDark = mounted && theme === "dark";

  useEffect(() => {
   const handleScroll = () => setIsScrolled(window.scrollY > 10);
   window.addEventListener("scroll", handleScroll)
   return () => window.removeEventListener("scroll", handleScroll)
  },[])


  return (
    <header className={`nav-bg fixed top-0 right-0 left-0 z-50 px-5 py-3 transition-all duration-300 sm:px-8 md:px-10 lg:px-14 lg:py-4
      ${ isScrolled 
      ? "bg-surface/80 backdrop-blur-md border-b border-border"
      : "bg-transparent border-b border-transparent"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
             <Image 
               src={isDark? "/logo-dark-theme.png": "/logo-light-theme.png"}
               alt="Humaira Logo"
               width={380}
               height={94}
               className="h-12 w-auto sm:h-14 lg:h-17"
               priority
             />

        </Link>
       
        <div className="mr-8 hidden items-center gap-8 text-[17px] md:flex lg:mr-24">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-fg">
              {link.label}
            </a>
          ))}
        </div>

          <div className="shrink-0">
             <ThemeToggle />
          </div>
          
      </nav>
    </header>
  );
}