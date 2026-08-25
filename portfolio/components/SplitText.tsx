"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
}

export default function SplitText({ text, className = "" }: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll(".split-text__unit");
    if (!chars) return;

    gsap.fromTo(
      chars,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.85,
        stagger: 0.03,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <span className={`split-text ${className}`} aria-label={text} ref={containerRef}>
      {Array.from(text).map((char, i) => (
        <span className="split-text__mask" key={`${char}-${i}`} aria-hidden="true">
          <span className="split-text__unit">{char === " " ? "\u00A0" : char}</span>
        </span>
      ))}
    </span>
  );
}