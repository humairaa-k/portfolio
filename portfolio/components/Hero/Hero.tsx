"use client"

import Image from "next/image";
import SplitText from "@/components/SplitText"
import HeroBackground from "./HeroBackground";
import GreetingCycle from "./GreetingCycle";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
 <section className="relative flex min-h-[100svh] overflow-x-clip items-start px-0 pb-16 pt-[calc(var(--nav-h)+2rem)] px-6 sm:px-10 sm:pt-[calc(var(--nav-h)+3rem)] md:px-15 md:pt-[calc(var(--nav-h)+6rem)]">

      <div className="hero-atmosphere" />
      <div className="hero-grid" /> 
      <div className="hero-blob hero-blob--one" /> 
       <div className="hero-blob hero-blob--two" />

    
      <div className="relative z-10 w-full max-w-2xl">
        
        <p className="text-[0.68rem] sm:text-[0.78rem] tracking-[0.28em] uppercase text-fg font-semibold flex items-center gap-2 mb-1.5">
          <GreetingCycle />
          <span className="opacity-45">—</span>
          <span className="text-pink">Frontend Web Developer</span>
        </p>

       <h1 className="z-10 font-display font-extrabold flex flex-col leading-[0.95] tracking-[-0.045em] text-[clamp(2.55rem,7.5vw,5.75rem)]">
        <span className="text-fg">
          <SplitText text="Humaira" />
        </span>
         <div className="relative inline-block text-fg dark:hidden">
             <Image
               src="/namebow.png"
               alt=""
               aria-hidden="true"
               width={50}
               height={50}
               className="absolute hidden lg:block pointer-events-none 
               top-[clamp(-6rem,-9vw,-4.5rem)]
               right-[clamp(-5rem,0vw,20rem)]
               w-[clamp(3.5rem,4.5vw,5rem)]
               h-auto
               md: 
               rotate-[-12deg]"
              />
         </div>
    
         <span className="text-transparent [-webkit-text-stroke:1.5px_var(--color-pink)] [text-shadow:0_0_40px_rgba(251,111,146,0.3)]">
           <SplitText text="Khaliq" />
         </span>
        </h1>

      <p className="font-display mt-[1rem] max-w-[34ch] text-[clamp(1rem,2.3vw,1.6rem)] leading-[1.35] text-fg font-medium">
         <SplitText text="Code with intention. Design with feeling."/>
        </p> 

        <HeroButtons/>
     </div>
        <HeroBackground/>
        
    </section>
  )
}

export default Hero