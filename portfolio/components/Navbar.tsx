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
    <header className={`fixed top-0 left-0 right-0 z-50 px-14 py-4 transition-all duration-300
      ${ isScrolled 
      ? "bg-surface/80 backdrop-blur-md border-b border-border"
      : "bg-transparent border-b border-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto grid grid-cols-[1fr_auto_0.5fr] items-center">
        <Link href="/" className="flex items-center shrink-0">
             <Image 
               src={isDark? "/logo-dark-theme.png": "/logo-light-theme.png"}
               alt="Humaira Logo"
               width={380}
               height={94}
               className="h-18 w-auto"
               priority
             />

        </Link>
       
        <div className="flex items-center gap-8 justify-self-end mr-24 text-[17px]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-fg">
              {link.label}
            </a>
          ))}
        </div>

          <div className="justify-self-end">
             <ThemeToggle />
          </div>
          
      </nav>
    </header>
  );
}