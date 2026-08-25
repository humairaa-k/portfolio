"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const GREETINGS = [
  "Hello",
  "Bonjour",
  "Salaam",
  "Ciao",
  "Olá",
  "Hallo",
  "Hola",
  "こんにちは",
];

const GreetingCycle = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = textRef.current;

    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let index = 0;

    const ctx = gsap.context(() => {
      const cycle = () => {
        const nextIndex = (index + 1) % GREETINGS.length;

        const tl = gsap.timeline();

        // 1. Current greeting exits upward
        tl.to(element, {
          y: "-0.35em",
          opacity: 0,
          duration: 0.32,
          ease: "power2.in",
        })

          // 2. Change the greeting while invisible
          .call(() => {
            index = nextIndex;
            element.textContent = GREETINGS[index];
          })

          // 3. Put the new greeting slightly below
          .set(element, {
            y: "0.35em",
          })

          // 4. New greeting enters smoothly
          .to(element, {
            y: 0,
            opacity: 1,
            duration: 0.42,
            ease: "power3.out",
          });
      };

      const interval = window.setInterval(cycle, 2200);

      return () => {
        window.clearInterval(interval);
      };
    }, textRef);

    return () => {
      ctx.revert();
      gsap.killTweensOf(element);
    };
  }, []);

  return (
    <span
      ref={textRef}
      className="inline-block min-w-[4.8rem] will-change-transform"
      aria-live="polite"
    >
      {GREETINGS[0]}
    </span>
  );
};

export default GreetingCycle;