import gsap from "gsap"

export const setupAnimation = (isRTL: boolean): void => {
  if (!isRTL) {
    gsap.fromTo(
      ".blog-heading-info > p , .blog-info > .sub-heading",
      {
        x: "-=100%",
        autoAlpha: 0,
      },
      {
        x: 0,
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".blog-heading-info",
          start: "top bottom",
          end: "center center",
          scrub: 1,
          markers: false,
        },
      }
    )
    gsap.fromTo(
      ".blog-heading-info > .content > p ,.blog-heading-info > .content > a ",
      {
        x: "+=100%",
        autoAlpha: 0,
      },
      {
        x: 0,
        duration: 5,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".blog-heading-info",
          start: "top bottom",
          end: "center center",
          scrub: 2,
          markers: false,
        },
      }
    )
  } else {
    gsap.fromTo(
      ".blog-heading-info > p , .blog-info > .sub-heading",
      {
        x: "+=100%",
        autoAlpha: 0,
      },
      {
        x: 0,
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".blog-heading-info",
          start: "top bottom",
          end: "center center",
          scrub: 1,
          markers: false,
        },
      }
    )
    gsap.fromTo(
      ".blog-heading-info > .content > p ,.blog-heading-info > .content > a ",
      {
        x: "-=100%",
        autoAlpha: 0,
      },
      {
        x: 0,
        duration: 5,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".blog-heading-info",
          start: "top bottom",
          end: "center center",
          scrub: 2,
          markers: false,
        },
      }
    )
  }
  gsap.fromTo(
    ".blog-posts ",
    {
      y: "100%",
      autoAlpha: 0,
    },
    {
      y: 0,
      duration: 3,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".blog-posts",
        start: "-200px bottom",
        end: "top bottom",
        scrub: 1,
        markers: false,
      },
    }
  )
}

export const launchAnimation = () => {
  return
}
