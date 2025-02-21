import Container from "@components/common/container"
import React, { useEffect } from "react"
import useTranslation from "next-translate/useTranslation"
import StyledContactUs from "./styles"

import ContactButton from "@components/common/contactButton"
import { setupAnimation } from "@utils/gsap/index/ContactUs"

export default function ContactUs() {
  const { t } = useTranslation("index")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"

  useEffect(() => {
    setupAnimation()
  }, [])

  return (
    <StyledContactUs isRTL={isRTL} id="contactUs">
      <Container>
        <div className="contactUs-container">
          <div className="contactUs-heading">
            <span className="sub-heading">{t("contact_us_section_title")}</span>
            <div className="new_contactUs-typography">
              <div className="typography_first-line hist-fl">
                <h1 className="c-div set">{t("contact_us_section_text_1")}</h1>
                <span className="set-span"></span>
                <h1 className="inter-italic -h t-pre">
                  {t("contact_us_section_text_2")}
                </h1>
              </div>
              <div className="typography_second-line">
                <h1 className="inter-italic f-the">
                  {t("contact_us_section_text_3")}
                </h1>
                <h1 className="c-age">{t("contact_us_section_text_4")}</h1>
                <h1 className="inter-italic t-co">
                  {t("contact_us_section_text_5")}
                </h1>
              </div>
            </div>
          </div>
          <ContactButton
            label={t("contact_us_section_title")}
            id="contactUs-btn"
          />
        </div>
      </Container>
    </StyledContactUs>
  )
}
