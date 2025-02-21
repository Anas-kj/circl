import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export const setupAnimation = (teamNameUtil: any): void => {
  const whiteLines: any = gsap.utils.toArray(".white-line")
  whiteLines.forEach((whiteLine: any) => {
    gsap.fromTo(
      whiteLine,
      {
        width: "0%",
      },
      {
        width: "100%",
        scrollTrigger: {
          // scroller: "#smooth-scroll",
          trigger: whiteLine,
          start: "-50px bottom ",
          end: "bottom center",
          scrub: 1,
        },
      }
    )
  })
  const link = document.querySelectorAll(`.${teamNameUtil} .link`) as any
  const linkHoverReveal = document.querySelectorAll(
    `.${teamNameUtil} .hover-reveal`
  ) as any
  const linkImages = document.querySelectorAll(
    `.${teamNameUtil} .hidden-image`
  ) as any

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mouseenter", (e: Event) => {
      linkHoverReveal[i].style.opacity = "1"
      linkHoverReveal[
        i
      ].style.transform = `translate(-100%, -50% ) rotate(5deg)`
      linkImages[i].style.transform = "scale(1, 1)"
    })

    link[i].addEventListener("mouseleave", (e: Event) => {
      linkHoverReveal[i].style.opacity = "0"
      linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`
      linkImages[i].style.transform = "scale(0.8, 0.8)"
    })
  }
}
export const launchAnimation = () => {
  return
}

export const updateScrollTrigger = () => {
  ScrollTrigger.refresh()
}
