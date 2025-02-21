import Container from "@components/common/container"

import useTranslation from "next-translate/useTranslation"
import React, { useEffect } from "react"
import StyledCharacteristics from "./styles"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const Characteristics = () => {
  const { t } = useTranslation("index")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set(" .video-section , #characteristics , #blog", {
      backgroundColor: "#000",
      color: "#fff",
    })
    gsap.fromTo(
      " .video-section , #characteristics , #blog , #contactUs ",
      {
        backgroundColor: "#000",
        color: "#fff",
      },
      {
        backgroundColor: "#fff",
        color: "#000",
        duration: 1,
        scrollTrigger: {
          trigger: "#characteristics",
          start: "-800px center",
          end: "bottom center",
          scrub: true,
          markers: false,
        },
      }
    )
    gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          trigger: ".characteristics-heading",
          scrub: 3,
          start: "top bottom",
          end: "center center",
          markers: false,
        },
      })
      .fromTo(
        ".new_characteristics-typography > .typography_first-line > .set ",
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
        ".new_characteristics-typography > .typography_first-line > .set-span",
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
        ".new_characteristics-typography > .typography_first-line > .t-pre",
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
        ".new_characteristics-typography > .typography_second-line > .c-age",
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
        ".new_characteristics-typography > .typography_second-line > .t-co",
        { y: "100%", autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.4,
          ease: "power4.out",
        },
        "-=.2"
      )
      .fromTo(
        ".new_characteristics-typography > .typography_third-line > .f-the",
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
        ".new_characteristics-typography > .typography_third-line > .set-span",
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
        ".new_characteristics-typography > .typography_third-line > .t-co",
        { y: "100%", autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.4,
          ease: "power4.out",
        },
        "-=.2"
      )
  }, [])

  return (
    <StyledCharacteristics id="characteristics">
      <div className="characteristics-heading">
        <span className="sub-heading">
          {t("characteristics_section_title")}
        </span>
        <div className="new_characteristics-typography">
          <div className="typography_first-line hist-fl">
            <h1 className="c-div set">{t("characteristics_section_text_1")}</h1>
            <span className="set-span n-spa"></span>
            <h1 className="inter-italic -h t-pre">
              {t("characteristics_section_text_2")}
            </h1>
          </div>
          <div className="typography_second-line  se-li">
            <h1 className="inter-italic def-ns c-age">
              {t("characteristics_section_text_3")}
            </h1>
            <h1 className="-of t-co">{t("characteristics_section_text_4")}</h1>
          </div>
          <div className="typography_third-line">
            <h1 className="f-the">{t("characteristics_section_text_5")}</h1>
            <span className="set-span n-spa"></span>
            <h1 className="inter-italic t-co">
              {t("characteristics_section_text_6")}
            </h1>
          </div>
        </div>
      </div>
    </StyledCharacteristics>
  )
}

export default Characteristics
