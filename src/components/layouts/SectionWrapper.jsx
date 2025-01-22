import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function SectionWrapper({
  children,
  backgroundImage = "https://images.unsplash.com/photo-1459482565928-0acbdd0dceb3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  opacity = 0.4,
}) {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const bgElement = bgRef.current

    if (section && bgElement) {
      gsap.set(bgElement, { opacity: 0 })

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          gsap.to(bgElement, {
            opacity: opacity,
            duration: 1,
            ease: "power2.inOut",
          })
        },
        onLeaveBack: () => {
          gsap.to(bgElement, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          })
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [backgroundImage, opacity])

  return (
    <div ref={sectionRef} className="relative min-h-screen md:w-full">
      <div
        ref={bgRef}
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default SectionWrapper

