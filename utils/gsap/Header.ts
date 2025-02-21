import { addLock, removeLock } from "@utils/ModelFunction"
import gsap from "gsap"

export const setupAnimation = (): void => {
  gsap.set("#logo", { autoAlpha: 0, y: "-100vh" })
  gsap.set("#hamburger-menu", { autoAlpha: 0, y: "-100vh" })
  gsap.set("#contact-btn-header", { autoAlpha: 0, y: "-100vh" })
  gsap.set(".languages", { autoAlpha: 0, y: "-100vh" })
  gsap.set(".model-overlay", { y: "100%" })
  gsap.set(".overlay", { y: "100%", display: "none" })
}
export const launchAnimation = () => {
  gsap.to(["#hamburger-menu", "#logo", "#contact-btn-header", ".languages"], {
    autoAlpha: 1,
    y: 0,
    duration: 1,
  })
}

export const onClickHamburger = (hamState: boolean) => {
  if (hamState) {
    gsap
      .timeline()
      .call(addLock)
      .to(".overlay", { y: "0%", display: "block" })
      .fromTo(
        ".gsap-stagger , .cyber-description, hr ",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
        }
      )
  } else {
    gsap
      .timeline()
      .to(".gsap-stagger , .cyber-description , hr", {
        duration: 0.3,
        opacity: 0,
        y: 40,
        stagger: 0.1,
      })
      .to(".overlay", { y: "100%", display: "none" }, "-=0.2")
      .call(removeLock)
  }
}
