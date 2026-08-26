import Image from "next/image"

function HeroBackground() {
  return (
  <Image
  src="/sakura-branch.svg"
  alt=""
  aria-hidden="true"
  width={800}
  height={800}
  className="
  pointer-events-none absolute z-[3] hidden md:block
  opacity-12 light:opacity-0

  md:w-[28rem] md:-right-10 md:-top-12

  lg:w-[44rem] lg:-right-10 lg:-top-30

  xl:w-[46rem] xl:-right-10 xl:-top-44
"
/>
  )
}

export default HeroBackground