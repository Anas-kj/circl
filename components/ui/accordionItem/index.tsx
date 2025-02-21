import Container from "@components/common/container"
import React, { useEffect, useState } from "react"
import StyledAccordionItem from "./styles"
import useTranslation from "next-translate/useTranslation"

import {
  setupAnimation,
  updateScrollTrigger,
} from "@utils/gsap/index/Accordion"
import Image from "next/image"
type AccordionItemProps = {
  teamName: string
  teamMembers: { role: string; name: string }[]
}

const AccordionItem = ({ teamName, teamMembers }: AccordionItemProps) => {
  let { t } = useTranslation("index")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"
  const [isActive, setIsActive] = useState<boolean>(false)
  const teamNameUtil = teamName.trim().toLowerCase()

  useEffect(() => {
    if (isActive) {
      setupAnimation(teamNameUtil)
    }
    updateScrollTrigger()
  }, [isActive, teamNameUtil])

  return (
    <StyledAccordionItem isRTL={isRTL} className="accordion-item">
      <div
        className={`accordion-title ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <Container>
          <span>{t(`${teamName}`)}</span>
          <button>{isActive ? "-" : "+"}</button>
        </Container>
      </div>
      {isActive && (
        <div className="accordion-content">
          <Container>
            <ul className={`${teamNameUtil}`}>
              {teamMembers.map((member, index) => (
                <li key={`${teamNameUtil}${index}`} className="member link">
                  <span className="name">{t(`${member.name}`)}</span>
                  <span className="role">{t(`${member.role}`)}</span>
                  <div className="hover-reveal image01">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      className="hidden-image"
                      src="/assets/placeholder.jpg"
                      alt="tets"
                      unoptimized={true}
                    />
                  </div>
                  <div className="white-line"></div>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </StyledAccordionItem>
  )
}

export default AccordionItem
export type { AccordionItemProps }
