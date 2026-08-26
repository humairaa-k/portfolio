import gsap from "gsap";
import { useEffect, useRef } from "react";

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current
    if(!element) return;

    //run whenever the mouse moves
  const handleMouseMove = (event: MouseEvent) => {
  //the browser method giving us the element's position and dimensions
   const btnInfo = element.getBoundingClientRect();

   //get the mouse distance 
   const x = event.clientX - (btnInfo.left + btnInfo.width / 2 )
   const y = event.clientY - (btnInfo.top + btnInfo.height / 2)

   gsap.to(element, {
    x: x * strength,
    y: y * strength,    //why 0.35 the btn follows the mouse creating the magnetic feeling
    duration: 0.3
   })
  }

 const handleMouseLeave = () =>{
  gsap.to(element, {
    x: 0,
    y: 0,
    duration: 0.4,
  });
 }

  //listen to mouse move
  element.addEventListener("mousemove", handleMouseMove)
   element.addEventListener("mouseleave", handleMouseLeave)

   //cleanup
   return () => {
     element.removeEventListener("mousemove", handleMouseMove)
     element.removeEventListener("mouseleave", handleMouseLeave)
   }
  },[strength])

   return ref;
}