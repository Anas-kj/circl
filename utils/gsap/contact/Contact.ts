import gsap from "gsap"

export const setupAnimation = (): void => {
  gsap.set(".new_contact-typography > .typography_first-line > .set ", {
    y: "100%",
    autoAlpha: 0,
  })
  gsap.set(".new_contact-typography > .typography_first-line > .set-span", {
    width: "30px",
    autoAlpha: 0,
  })
  gsap.set(".new_contact-typography > .typography_first-line > .t-pre", {
    y: "100%",
    autoAlpha: 0,
  })

  gsap.set(".new_contact-typography > .typography_second-line > .c-age", {
    y: "100%",
    autoAlpha: 0,
  })
  gsap.set(".new_contact-typography > .typography_third-line > .f-the", {
    y: "100%",
    autoAlpha: 0,
  })
  gsap.set(".new_contact-typography > .typography_third-line > .set-span", {
    width: "30px",
    autoAlpha: 0,
  })
  gsap.set(".new_contact-typography > .typography_third-line > .t-pre", {
    y: "100%",
    autoAlpha: 0,
  })

  gsap.fromTo(
    ".contact-head",
    { autoAlpha: 1, scale: 1 },
    {
      autoAlpha: 0,
      scale: 1.3,
      scrollTrigger: {
        start: "100px",
        trigger: "#contact",
        scrub: 3,
        markers: false,
      },
    }
  )
  gsap.to(".contact-heading", {
    opacity: 0,
    y: 200,
    scrollTrigger: {
      start: "100px",
      trigger: "#contact",
      scrub: 3,
      markers: false,
    },
  })
  if (window.innerWidth > 768) {
    gsap.to(".contact-info", {
      opacity: 0,
      y: 200,
      scrollTrigger: {
        start: "-100px",
        trigger: ".contact-info",
        scrub: 3,
        markers: false,
      },
    })
  }
}
export const launchAnimation = () => {
  gsap
    .timeline()
    .delay(0.2)
    .to(
      ".new_contact-typography > .typography_first-line > .set ",
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
      ".new_contact-typography > .typography_first-line > .set-span",
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
      ".new_contact-typography > .typography_first-line > .t-pre",
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
      ".new_contact-typography > .typography_second-line > .c-age",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power4.out",
      },
      "-=.4"
    )
    .to(
      ".new_contact-typography > .typography_third-line > .f-the",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power4.out",
      },
      "-=.4"
    )
    .to(
      ".new_contact-typography > .typography_third-line > .set-span",
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
      ".new_contact-typography > .typography_third-line > .t-pre",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power4.out",
      },
      "-=.2"
    )
}
