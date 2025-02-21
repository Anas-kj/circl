import gsap from "gsap"

export const setupAnimation = (): void => {
  gsap.fromTo(
    ".footer-content > .footer-content-slider",
    { xPercent: 80 },
    {
      xPercent: -80,
      scrollTrigger: {
        trigger: ".footer-content",
        start: "top bottom-=50",
        end: "bottom top",
        scrub: 9,
      },
    }
  )
}
export const launchAnimation = () => {
  return
}
