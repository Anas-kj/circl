import gsap from "gsap"

export const setupAnimation = (): void => {
  gsap.fromTo(
    "#contactUs-btn",
    {
      autoAlpha: 0,
      y: "100%",
    },
    {
      autoAlpha: 1,
      y: "0%",
      scrollTrigger: {
        trigger: "#contactUs-btn",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    }
  )
  gsap.fromTo(
    ".footer-container, #contactUs, #newsLetter  ",
    {
      backgroundColor: "black",
      color: "#fff",
    },
    {
      x: 0,
      autoAlpha: 1,
      backgroundColor: "#1fbe00",
      color: "#fff",
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-container",
        start: "+200px bottom",
        end: "center bottom",
        scrub: true,
        markers: false,
      },
    }
  )
  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".contactUs-heading",
        scrub: 3,
        start: "top bottom",
        end: "center center",
        markers: false,
      },
    })
    .fromTo(
      ".new_contactUs-typography > .typography_first-line > .set ",
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
      ".new_contactUs-typography > .typography_first-line > .set-span",
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
      ".new_contactUs-typography > .typography_first-line > .t-pre",
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
      ".new_contactUs-typography > .typography_second-line > .f-the",
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
      ".new_contactUs-typography > .typography_second-line > .c-age",
      { y: "100%", autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power4.out",
      },
      "-=.3"
    )
    .fromTo(
      ".new_contactUs-typography > .typography_second-line > .t-co",
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
