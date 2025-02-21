import React, { useEffect } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import StyledFooter from "./styles"
import Container from "@components/common/container"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import { ArrowUp, CyberLogoFooter } from "public/assets"
import ContactButton from "@components/common/contactButton"
import Newsletter from "../newsLetter"
import { setupAnimation } from "@utils/gsap/Footer"
import Image from "next/image"
type FooterProps = {
  // types
}

const Footer: React.FC<FooterProps> = ({}) => {
  const MAILCHIMP_URL: any = process.env.NEXT_PUBLIC_MAILCHIMP_URL

  const { t } = useTranslation("common")
  const router = useRouter()
  const { lang } = useTranslation()
  const isRTL = lang === "ar"

  useEffect(() => {
    setupAnimation()
  }, [])

  return (
    <StyledFooter isRTL={isRTL} className="footer-container">
      <MailchimpSubscribe
        url={MAILCHIMP_URL || ""}
        render={(props: any) => {
          const { subscribe, status, message } = props || {}
          return (
            <Newsletter
              status={status}
              message={message}
              onValidated={(formData: any) => subscribe(formData)}
            />
          )
        }}
      />
      <Container>
        <div className="r-wya">
          <h2>{t("footer_title_1_1")}</h2>
          <h3 className="country">{t("footer_title_1_2")}</h3>
        </div>
        <div className="footer-header">
          <div className="footer-header-subtitle">
            <h2>{t("footer_subtitle_1_1")}</h2>
            <h3>{t("footer_subtitle_1_2")}</h3>
          </div>
          <a
            href="mailto:contact@cyberdivision.xyz"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer-header-title">
              <h1>{t("footer_header_title_1")}</h1>
              <h2>{t("footer_header_title_2")}</h2>
            </div>
          </a>
        </div>
        <div className="footer-content">
          <p className="footer-content-paragraph">
            {router.asPath === "/contact"
              ? t("footer_description_2")
              : t("footer_description_1")}
          </p>
          <div className="footer-content-btns">
            <ContactButton label={t("header_btn_contact")} />
            <div
              className="up"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <ArrowUp />
            </div>
          </div>
          <div className="footer-content-slider">
            <h1>{t("footer_slider_text_1_1")}</h1>
            <h1 className="footer-h1_italic">{t("footer_slider_text_1_2")}</h1>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-media">
            <p>{t("footer_link")}</p>
            <ul className="social">
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/cyberdivisionofficial/"
                  target="_blank"
                >
                  {t("footer_link_1")}
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/cyberdivision.tn"
                  target="_blank"
                >
                  {t("footer_link_2")}
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/company/72256857"
                >
                  {t("footer_link_3")}
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://blog.cyberdivision.xyz/"
                >
                  {t("footer_link_4")}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom-cyber">
            <p> {t("footer_text_2_1")}</p>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.google.com/maps/search/?api=1&query=35.8298754,10.638095"
              className="view-on-map"
            >
              <p> {t("footer_text_2_2")}</p>

              <div className="right-arrow">
                <img src="/assets/footer/Arrow.png" alt="right arrow" />
              </div>
            </a>
          </div>
        </div>
        <div className="footer-logo">
          <CyberLogoFooter />
        </div>
      </Container>
    </StyledFooter>
  )
}

export default Footer
