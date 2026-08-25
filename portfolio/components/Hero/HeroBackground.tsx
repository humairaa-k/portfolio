import Image from "next/image"

function HeroBackground() {
  return (
<Image
  src="/sakura-branch.svg"
  alt=""
  aria-hidden="true"
  width={800}
  height={600}
  className="absolute -right-10 bottom-5 opacity-12 light:opacity-70 pointer-events-none"
/>
  )
}

export default HeroBackground