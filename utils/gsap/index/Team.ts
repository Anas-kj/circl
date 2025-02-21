import gsap from "gsap"

export const setupAnimation = (): void => {
  gsap.fromTo(
    ".team-paragraph > p ",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".team-heading",
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false,
      },
    }
  )
  gsap.fromTo(
    "#team-contact-us",
    {
      y: "200%",
    },
    {
      y: "-50%",
      scrollTrigger: {
        trigger: ".team-heading",
        start: "top bottom",
        end: "center center",
        scrub: 1,
        markers: false,
      },
    }
  )
  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".team-heading",
        scrub: 3,
        start: "top bottom",
        end: "center center",
        markers: false,
      },
    })
    .fromTo(
      ".new_team-typography > .typography_first-line > .set ",
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
      ".new_team-typography > .typography_first-line > .set-span",
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
      ".new_team-typography > .typography_first-line > .t-pre",
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
      ".new_team-typography > .typography_second-line > .set ",
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
      ".new_team-typography > .typography_third-line > .f-the",
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
      ".new_team-typography > .typography_third-line > .set-span",
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
      ".new_team-typography > .typography_third-line > .t-co",
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
