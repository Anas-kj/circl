import React, { useEffect, useRef } from "react"
import StyledPreloader from "./styles"
import { CyberTextLogo } from "public/assets"
import { gsap } from "gsap"
// import { duration } from "moment"
import { addLock, removeLock } from "@utils/ModelFunction"
const Preloader = ({ setIsLoading }: any) => {
  const preloader = useRef<HTMLDivElement>(null)
  const logo = useRef<HTMLDivElement>(null)
  //reusable function
  function removeElement(element: any) {
    if (typeof element === "string") {
      element = document.querySelector(element)
    }
    return function () {
      if (element) {
        element.remove()
      }
    }
  }
  const finishLoading = () => {
    setIsLoading(false)
    removeLock()
  }

  // const [hidePreloader, setHidePreloader] = useState<boolean>()
  useEffect(() => {
    const words = document.querySelectorAll(".spans_container > span")
    addLock()
    let main = gsap
      .timeline()
      .set(".black-overlay", { autoAlpha: 0 })
      .set(".first-line", { y: "-10%", autoAlpha: 0 })
      .set(".the_Line", { width: "0px" })
      .set(".load > .progress-bar", { width: "0%" })
      .to(".first-line", { y: 0, autoAlpha: 1 })
      .to(".the_Line", { width: "80px" })
    let wordsTl = gsap.timeline()
    //------------------------------------------------------------------------------------------------------
    for (let i = 0; i < words.length; i++) {
      let delay = i - 1
      let wordTL = gsap.timeline()
      if (i !== 0) {
        wordTL.fromTo(
          words[i],
          {
            y: "100%",
            autoAlpha: 0,
          },
          {
            y: "0",
            autoAlpha: 1,
            ease: "power4.out",
            duration: 1,
          },
          "-=0.5"
        )
      }
      if (i !== words.length - 1) {
        wordTL.to(words[i], {
          y: "-100%",
          autoAlpha: 0,
          ease: "power4.out",
          duration: 1,
        })
      }
      if (i === 0) {
        wordsTl.add(wordTL)
      } else {
        wordsTl.add(wordTL, delay)
      }
    }
    wordsTl.to(
      ".load > .progress-bar",
      {
        width: "100%",
        duration: 3.5,
        ease: "sine.inOut",
      },
      "-=3.5"
    )
    main.add(wordsTl)
    let tl = gsap
      .timeline({ defaults: { ease: "power4.out", duration: 0.5 } })
      .to(".first-section", { y: "-50%", autoAlpha: 0 }, "-=0.3")
      .fromTo(
        logo.current,
        { bottom: "50px", autoAlpha: 0 },
        { bottom: "60px", autoAlpha: 1, duration: 0.4 },
        "-=0.2"
      )
      .to(".loader", {
        width: "100vw",
        ease: "power4.inOut",
        delay: 0.5,
      })
      .to(logo.current, { top: "60px", autoAlpha: 1 }, "-=0.3")
      .to(logo.current, {
        y: "-10px",
        autoAlpha: 0,
        ease: "power4.out",
        duration: 0.5,
      })
      .call(finishLoading)
      .to(
        ".top",
        {
          y: "-100vh",
          duration: 1.5,
          // background: "#fff",
          ease: "power4.inOut",
        },
        "-=0.5"
      )
      .to(
        ".bottom",
        {
          y: "100vh",
          ease: "power4.inOut",
          duration: 1,
        },
        "-=0.5"
      )
    main.add(tl).call(removeElement(".container"))
  }, [])
  return (
    <StyledPreloader ref={preloader} id="preloader" dir="ltr">
      <div className="black-overlay"></div>
      <div className="container">
        <div className="top">
          <div className="changing">
            <div className="first-line">
              <div className="first-section">
                <div className="rotator">
                  <div className="spans_container">
                    <span>Become</span>
                    <span>Design</span>
                    <span>Redefine</span>
                    <span>Reshape</span>
                  </div>
                  <span className="the_Line"></span>
                  <div className="the_future">
                    <h1>The Future</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="loader">
            <div className="load">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
        <div className="logo_container">
          <div className="logo" ref={logo}>
            <CyberTextLogo />
          </div>
        </div>
      </div>
    </StyledPreloader>
  )
}

export default Preloader
