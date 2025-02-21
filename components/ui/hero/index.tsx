import React, { useEffect } from "react"
import StyledHero from "./styles"
import useTranslation from "next-translate/useTranslation"
import { launchAnimation, setupAnimation } from "@utils/gsap/index/Hero"
export default function Hero({ isLoading }: any) {
  let { t } = useTranslation("index")

  const { lang } = useTranslation()
  const isRTL = lang === "ar"

  useEffect(() => {
    setupAnimation()
  }, [])
  useEffect(() => {
    if (!isLoading) {
      launchAnimation()
    }
  }, [isLoading])

  return (
    <StyledHero isRTL={isRTL}>
      <div className="new_hero-content">
        <div id="img" className="hero-background">
          <video autoPlay muted loop>
            <source src="/assets/CyberDivision-Heroshot.mp4" />
          </video>
        </div>

        <div className="new_hero-typography">
          <div className="typography_first-line">
            <h1 className="hero-stagger set">{t("hero_section_title_1")}</h1>
            <span className="hero-stagger set-span"></span>
            <h1 className="hero-stagger inter-italic t-pre">
              {t("hero_section_title_2")}
            </h1>
          </div>
          <div className="typography_second-line">
            <h1 className="hero-stagger inter-italic f-the">
              {t("hero_section_title_3")}
            </h1>
            <h1 className="hero-stagger c-age">{t("hero_section_title_4")}</h1>
            <h1 className="hero-stagger inter-italic t-co">
              {t("hero_section_title_5")}
            </h1>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <div className="loader-mb"></div>
      </div>
    </StyledHero>
  )
}
