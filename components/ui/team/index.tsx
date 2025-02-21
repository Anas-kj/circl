import React, { useEffect } from "react"
import StyledTeamSection from "./styles"
import AccordionItem from "../accordionItem"
import teamData from "./data"
import useTranslation from "next-translate/useTranslation"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { openModel } from "@utils/ModelFunction"
import { setupAnimation } from "@utils/gsap/index/Team"
import ContactButton from "@components/common/contactButton"
gsap.registerPlugin(ScrollTrigger)

export default function Team() {
  let { t } = useTranslation("index")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"

  useEffect(() => {
    setupAnimation()
  }, [])

  return (
    <StyledTeamSection isRTL={isRTL} id="our-team">
      <div className="team-heading">
        <span className="sub-heading">{t("team_section_title")}</span>
        <div className="new_team-typography">
          <div className="typography_first-line hist-fl">
            <h1 className="c-div set">{t("team_section_text_1")}</h1>
            <span className="set-span"></span>
            <h1 className="inter-italic -h t-pre">
              {t("team_section_text_2")}
            </h1>
          </div>
          <div className="typography_second-line">
            <h1 className="inter-italic def-ns set">
              {t("team_section_text_3_1")}
            </h1>

            <h1 className="def-ns set">
              {lang !== "ar" && t("team_section_text_3_2")}
            </h1>
          </div>
          <div className="typography_third-line te-l">
            <h1 className="f-the">{t("team_section_text_4")}</h1>
            <span className="set-span"></span>
            <h1 className="inter-italic t-co">{t("team_section_text_5")}</h1>
          </div>
        </div>
        <div className="team-paragraph">
          <p>{t("team_section_description")}</p>
        </div>
        <ContactButton
          label={t("team_section_contact_us_btn")}
          openModel={openModel}
          className="team-contact-btn"
          id="team-contact-us"
        />
      </div>
      <ul className="accordion">
        {teamData.map((team, index) => (
          <AccordionItem
            key={index}
            teamName={team.teamName}
            teamMembers={team.teamMembers}
          />
        ))}
      </ul>
    </StyledTeamSection>
  )
}
