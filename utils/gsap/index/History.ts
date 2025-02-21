import gsap from "gsap"

export const setupAnimation = (): void => {
  gsap.fromTo(
    ".hist-pg",
    {
      y: -50,
      autoAlpha: 0,
    },
    {
      y: 0,
      duration: 0.4,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".it-s",
        scrub: true,
      },
    }
  )

  let tl = gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".history-heading",
        scrub: 3,
        start: "top bottom",
        end: "center center",
        markers: false,
      },
    })
    .fromTo(
      ".new_history-typography > .typography_first-line > .set ",
      { y: "100%", autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power4.out",
      },
      "-=.2"
    )
    .fromTo(
      ".new_history-typography > .typography_first-line > .set-span",
      { width: "30px", autoAlpha: 0 },
      {
        width: "70px",
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "power4.out",
      },
      "-=.3"
    )
    .fromTo(
      ".new_history-typography > .typography_first-line > .t-pre",
      { y: "100%", autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power4.out",
      },
      "-=.4"
    )
    .fromTo(
      ".new_history-typography > .typography_second-line > .set ",
      { y: "100%", autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power4.out",
      },
      "-=.2"
    )
    .fromTo(
      ".new_history-typography > .typography_third-line > .f-the",
      { y: "100%", autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power4.out",
      },
      "-=.4"
    )
    .fromTo(
      ".new_history-typography > .typography_third-line > .set-span",
      { width: "30px", autoAlpha: 0 },
      {
        width: "70px",
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "power4.out",
      },
      "-=.3"
    )
    .fromTo(
      ".new_history-typography > .typography_third-line > .t-co",
      { y: "100%", autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power4.out",
      },
      "-=.2"
    )
}
export const launchAnimation = () => {
  return
}
