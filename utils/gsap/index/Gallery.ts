import gsap from "gsap"

export const setupAnimation = (): void => {
  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".gallery-heading",
        scrub: 3,
        start: "top bottom",
        end: "center center",
      },
    })
    .fromTo(
      ".new_gallery-typography > .typography_first-line > .set ",
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
      ".new_gallery-typography > .typography_first-line > .set-span",
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
      ".new_gallery-typography > .typography_first-line > .t-pre",
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
      ".new_gallery-typography > .typography_second-line > .f-the",
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
      ".new_gallery-typography > .typography_second-line > .c-age",
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
      ".new_gallery-typography > .typography_second-line > .t-co",
      { y: "100%", autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power4.out",
      },
      "-=.2"
    )
  const images: any = gsap.utils.toArray(".image")
  images.forEach((image: any) => {
    gsap.fromTo(
      image,
      {
        y: 50,
        autoAlpha: 0,
        scale: 1.1,
      },
      {
        y: 0,
        duration: 1,
        autoAlpha: 1,
        delay: 0.3,
        scale: 1,
        scrollTrigger: {
          trigger: image,
          scrub: 1,
        },
      }
    )
  })
  gsap.fromTo(
    ".gallery-paragraph",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".gallery-paragraph",
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false,
      },
    }
  )
  gsap.fromTo(
    "#gallery-reach-us",
    {
      y: "200%",
    },
    {
      y: "-50%",
      scrollTrigger: {
        trigger: "#gallery-reach-us",
        start: "top bottom",
        end: "center center",
        scrub: 1,
        markers: false,
      },
    }
  )
}
export const launchAnimation = () => {
  return
}
