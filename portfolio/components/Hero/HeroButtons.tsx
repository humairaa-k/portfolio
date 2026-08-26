import Link from "next/link"
import { useMagnetic } from "@/hooks/useMagnetic"
import { useEffect } from "react";

function HeroButtons() {
  const primaryRef = useMagnetic(0.35);
  const ghostRef = useMagnetic(0.35);

  

  return (
    <div className="flex flex-row items-center gap-4 mt-6">
      <span ref={primaryRef}>
      <Link
       href="#"
       className="
       rounded-full
       bg-[linear-gradient(135deg,var(--color-pink),var(--color-pink-strong))]
       text-[#441120]
       light:text-amber-50
       shadow-[0_10px_30px_color-mix(in_srgb,var(--color-pink)_30%,transparent)]
       px-4 py-2
       sm:px-6 py-4
       text-sm
       sm:text-base
       font-bold
       transition-[filter]
       duration-200
       hover:brightness-[1.08]
       "
       >
       View Projects
      </Link>
    </span>

    <span ref={ghostRef}>
     <Link
      href="#"
      className="
        rounded-full
        border
        border-[var(--color-border)]
        bg-[var(--surface-muted)]
        text-[var(--color-fg)]
        px-4 py-2
        sm:px-6 py-4
        text-sm
        sm:text-base
        transition-colors
        duration-200
        hover:border-[rgba(251,111,146,0.5)]
      "
       >
        Resume
    </Link>
  </span>
      
    </div>
  )
}

export default HeroButtons