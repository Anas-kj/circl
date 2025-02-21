import gsap from "gsap"

export const setupAnimation = (): void => {
  gsap.to(".new_hero-content", {
    autoAlpha: 0,
    scale: 1.3,
    scrollTrigger: {
      trigger: "#origins",
      scrub: true,
    },
  })
  gsap.to(".new_hero-typography > .typography_first-line", {
    autoAlpha: 0,
    y: -50,
    scrollTrigger: {
      trigger: "#origins",
      scrub: 1,
    },
  })

  gsap.to(".new_hero-typography > .typography_second-line", {
    autoAlpha: 0,
    // scale: 1.3,
    y: -50,
    scrollTrigger: {
      trigger: "#origins",
      scrub: 1,
    },
  })

  gsap.set(".new_hero-typography > .typography_first-line > .set ", {
    y: "100%",
    autoAlpha: 0,
  })
  gsap.set(".new_hero-typography > .typography_first-line > .set-span", {
    width: "30px",
    autoAlpha: 0,
  })
  gsap.set(".new_hero-typography > .typography_first-line > .t-pre", {
    y: "100%",
    autoAlpha: 0,
  })

  gsap.set(".new_hero-typography > .typography_second-line > .f-the", {
    y: "100%",
    autoAlpha: 0,
  })
  gsap.set(".new_hero-typography > .typography_second-line > .c-age", {
    y: "100%",
    autoAlpha: 0,
  })
  gsap.set(".new_hero-typography > .typography_second-line > .t-co", {
    y: "100%",
    autoAlpha: 0,
  })

  gsap.set(".hero-footer", { autoAlpha: 0 })
}
export const launchAnimation = () => {
  const image = document.querySelector("#img")
  gsap
    .timeline()
    .to(image, { scale: 0.8, duration: 0.5, ease: "sine.inOut" })
    .to(
      ".new_hero-typography > .typography_first-line > .set ",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power4.out",
      },
      "-=.2"
    )
    .to(
      ".new_hero-typography > .typography_first-line > .set-span",
      {
        width: "70px",
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "power4.out",
      },
      "-=.3"
    )
    .to(
      ".new_hero-typography > .typography_first-line > .t-pre",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power4.out",
      },
      "-=.4"
    )

    .to(
      ".new_hero-typography > .typography_second-line > .f-the",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power4.out",
      },
      "-=.4"
    )
    .to(
      ".new_hero-typography > .typography_second-line > .c-age",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power4.out",
      },
      "-=.3"
    )
    .to(
      ".new_hero-typography > .typography_second-line > .t-co",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power4.out",
      },
      "-=.2"
    )

    .to(image, { scale: 1, duration: 1, ease: "sine.inOut" }, "-=1")
    .to(".hero-footer", { autoAlpha: 1 })
}
