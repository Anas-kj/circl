/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react"
import Container from "@components/common/container"
import StyledHistory from "./styles"
import useTranslation from "next-translate/useTranslation"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { setupAnimation } from "@utils/gsap/index/History"
gsap.registerPlugin(ScrollTrigger)
export default function History() {
  let { t } = useTranslation("index")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"
  let historyDescription = [
    "histroy_section_description_1",
    "histroy_section_description_2",
    "histroy_section_description_3",
  ]
  const [historyDescriptionIndex, setHistoryDescriptionIndex] = useState(0)
  const [device, setDevice] = useState(false)
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setDevice(false)
      } else {
        setDevice(true)
      }
    })
    if (window.innerWidth < 768) {
      setDevice(false)
    } else {
      setDevice(true)
    }
    setupAnimation()
  }, [])

  const moveProgressBar1 = () => {
    if (!device) {
      return
    }

    gsap.to(".timeline > .timeline-line > .timeline-line-progress", {
      duration: 0.5,
      width: "10%",
    })
  }
  const moveProgressBar2 = () => {
    gsap.to(".timeline > .timeline-line > .timeline-line-progress", {
      duration: 0.5,
      width: "35%",
    })
  }
  const moveProgressBar3 = () => {
    gsap.to(".timeline > .timeline-line > .timeline-line-progress", {
      duration: 0.5,
      width: "100%",
    })
  }

  return (
    <StyledHistory isRTL={isRTL} id="origins">
      <div className="history-heading">
        <span className="sub-heading">{t("histroy_section_title")}</span>
        <div className="new_history-typography">
          <div className="typography_first-line hist-fl">
            <h1 className="c-div set">{t("history_section_intro_text_1")}</h1>
            <span className="set-span"></span>
            <h1 className="inter-italic -h t-pre">
              {t("history_section_intro_text_2")}
            </h1>
          </div>
          <div className="typography_second-line">
            <h1 className="inter-italic def-ns set">
              {t("history_section_intro_text_3_1")}
            </h1>

            <h1 className="def-ns set">
              {lang !== "ar" && t("history_section_intro_text_3_2")}
            </h1>
          </div>
          <div className="typography_third-line t-li">
            <h1 className="it-s f-the">{t("history_section_intro_text_4")}</h1>
            <span className="set-span"></span>
            <h1 className="inter-italic t-co">
              {t("history_section_intro_text_5")}
            </h1>
          </div>
        </div>
      </div>
      <Container className="history-section-select">
        <ul className="histo-links">
          <li
            className={historyDescriptionIndex === 0 ? "active" : "opacity-9"}
            onClick={() => {
              setHistoryDescriptionIndex(0)
              moveProgressBar1()
            }}
          >
            <button>{t("histroy_section_link_1")}</button>
          </li>
          <li
            className={historyDescriptionIndex === 1 ? "active" : "opacity-7"}
            onClick={() => {
              setHistoryDescriptionIndex(1)
              moveProgressBar2()
            }}
          >
            <button>{t("histroy_section_link_2")}</button>
          </li>
          <li
            className={historyDescriptionIndex === 2 ? "active" : "opacity-5"}
            onClick={() => {
              setHistoryDescriptionIndex(2)
              moveProgressBar3()
            }}
          >
            <button>{t("histroy_section_link_3")}</button>
          </li>
        </ul>
        <p className="hist-pg">
          {t(historyDescription[historyDescriptionIndex])}
        </p>
        <div className="slider-progress-bar"></div>
        {device && (
          <div className="timeline">
            <div className="timeline-line">
              <div className="timeline-line-progress"></div>
            </div>
            <div className="timeline-indicators">
              <div className="timeline-indicator item-1"></div>
              <div className="timeline-indicator item-2"></div>
              <div className="timeline-indicator item-3"></div>
            </div>

            <div className="timeline-events">
              <div
                className="timeline-event item-1"
                onClick={() => {
                  setHistoryDescriptionIndex(0)
                  moveProgressBar1()
                }}
              >
                <p
                  className={`${historyDescriptionIndex === 0 ? "active" : ""}`}
                >
                  {t("histroy_section_link_1")}
                </p>
              </div>
              <div
                className="timeline-event item-2"
                onClick={() => {
                  setHistoryDescriptionIndex(1)
                  moveProgressBar2()
                }}
              >
                <p
                  className={`${historyDescriptionIndex === 1 ? "active" : ""}`}
                >
                  {t("histroy_section_link_2")}
                </p>
              </div>
              <div
                className="timeline-event item-3"
                onClick={() => {
                  setHistoryDescriptionIndex(2)
                  moveProgressBar3()
                }}
              >
                <p
                  className={`${historyDescriptionIndex === 2 ? "active" : ""}`}
                >
                  {t("histroy_section_link_3")}
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </StyledHistory>
  )
}
