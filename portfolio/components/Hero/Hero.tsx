"use client"

import Image from "next/image";
import SplitText from "@/components/SplitText"
import HeroBackground from "./HeroBackground";
import GreetingCycle from "./GreetingCycle";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
 <section className="relative min-h-screen overflow-hidden flex flex-column items-center pl-15">

      <div className="hero-atmosphere" />
      <div className="hero-grid" /> 
      <div className="hero-blob hero-blob--one" /> 
       <div className="hero-blob hero-blob--two" />

      {/* <div className="relative z-10 display-grid gap-12 items-center"> */}
      <div className="mt-15">
        
        <p className="text-[0.78rem] tracking-[0.18em] uppercase text-fg font-semibold flex items-center gap-2">
          <GreetingCycle />
          <span className="opacity-45">—</span>
          <span className="text-pink">Web Developer · Creative Developer</span>
        </p>

       <h1 className="z-10 font-display font-extrabold flex flex-col leading-[0.95] tracking-[-0.045em] text-[clamp(2.75rem,7.5vw,5.75rem)]">
        <span className="text-fg">
          <SplitText text="Humaira" />
        </span>
   
        {/* <div className="relative inline-block text-fg light:hidden">
          <Image 
           src={"/namebow.png"}
           alt=""
           aria-hidden="true"
           width={50}
           height={50}
            className="absolute -top-30 -right-18 w-20 rotate-[-12deg] pointer-events-none"/>
         </div> */}
    
         <span className="text-transparent [-webkit-text-stroke:1.5px_var(--color-pink)] [text-shadow:0_0_40px_rgba(251,111,146,0.3)]">
           <SplitText text="Khaliq" />
         </span>
        </h1>

      <p className="font-display mt-[1.4rem] max-w-[34ch] text-[clamp(1.8rem,2.3vw,1.6rem)] leading-[1.35] text-fg font-medium">
         <SplitText text="Code with intention. Design with feeling."/>
        </p> 

        <HeroButtons/>
     </div>
        <HeroBackground/>
        
    </section>
  )
}

export default Hero