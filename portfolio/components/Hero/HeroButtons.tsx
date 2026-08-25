import Link from "next/link"

function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
      <Link
       href="#"
       className="
       rounded-full
       bg-[linear-gradient(135deg,var(--color-pink),var(--color-pink-strong))]
       text-[#441120]
       light:text-amber-50
       shadow-[0_10px_30px_color-mix(in_srgb,var(--color-pink)_30%,transparent)]
       px-6 py-3
       font-bold
       transition-[filter]
       duration-200
       hover:brightness-[1.06]
       "
       >
       View Projects
      </Link>

     <Link
      href="#"
      className="
        rounded-full
        border
        border-[var(--color-border)]
        bg-[var(--surface-muted)]
        text-[var(--color-fg)]
        px-6 py-3
        transition-colors
        duration-200
        hover:border-[rgba(251,111,146,0.5)]
      "
       >
        Resume
    </Link>

      
    </div>
  )
}

export default HeroButtons