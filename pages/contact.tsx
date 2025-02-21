import { FC, useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import BaseLayout from "@components/layout/baseLayout"
import useTranslation from "next-translate/useTranslation"
import Container from "@components/common/container"
import { ContactForm, Footer, Header } from "@components/ui"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import { motion } from "framer-motion"
import { launchAnimation, setupAnimation } from "@utils/gsap/contact/Contact"
// Types
type ContactComponent = FC & NextPage & { layout: typeof BaseLayout }
const Contact: ContactComponent = ({ isLoading }: any) => {
  let { t } = useTranslation("contact")
  const { lang } = useTranslation()
  useEffect(() => {
    setupAnimation()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      launchAnimation()
    }
  }, [isLoading])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      id="contact-form"
    >
      <Head>
        <title>Cyber Division Website</title>
        <meta name="description" content="Cyber Division Website" />

        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Header isLoading={isLoading} />
      <div className="contact-head-wrapper">
        <div className="contact-head">
          <div className="contact-heading" id="contact">
            <span className="sub-heading o-hit">{t("contact_title")}</span>
            <div className="new_contact-typography">
              <div className="typography_first-line hist-fl">
                <h1 className="c-div set">{t("contact_text_1")}</h1>
                <span className="set-span"></span>
                <h1 className="inter-italic -h t-pre">{t("contact_text_2")}</h1>
              </div>
              <div className="typography_second-line">
                <h1 className="inter-italic def-ns c-age">
                  {t("contact_text_3_1")}
                </h1>
                <h1 className="def-ns  c-age">
                  {lang !== "ar" && t("contact_text_3_2")}
                </h1>
              </div>
              <div className="typography_third-line t-li">
                <h1 className="it-s f-the">{t("contact_text_4")}</h1>
                <span className="set-span"></span>
                <h1 className="inter-italic t-pre">{t("contact_text_5")}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="contact-info">
          <address>
            <h5>{t("contact_office_1")}</h5>
            <div className="contact-info--addr">
              <span>@-37.800069,144.967099</span>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.google.com/maps/search/?api=1&query=-37.800069,144.967099"
              >
                {t("contact_map_text")}
              </a>
            </div>

            <span>
              {t("contact_address_1")} <br />
              +971 58 519 2491
            </span>
            <a
              href="mailto:contact@cyberdivision.xyz"
              className="contact-info--email"
              target="_blank"
              rel="noreferrer"
            >
              contact@cyberdivision.xyz
            </a>
          </address>
          <address>
            <h5>{t("contact_office_2")}</h5>
            <div className="contact-info--addr">
              <span>@35.8298754,10.638095,17Z</span>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.google.com/maps/search/?api=1&query=35.8298754,10.638095"
              >
                {t("contact_map_text")}
              </a>
            </div>
            <span>
              {t("contact_address_2")} <br /> +216 22 458 624
            </span>
            <a
              href="mailto:contact@cyberdivision.xyz"
              className="contact-info--email"
              target="_blank"
              rel="noreferrer"
            >
              contact@cyberdivision.xyz
            </a>
          </address>
          <address>
            <h5>{t("contact_office_3")}</h5>
            <div className="contact-info--addr">
              <span>@25.194826,55.282854</span>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.google.com/maps/search/?api=1&query=25.194826,55.282854"
              >
                {t("contact_map_text")}
              </a>
            </div>
            <span>
              {t("contact_address_3")} <br /> +971 58 519 2491
            </span>
            <a
              href="mailto:contact@cyberdivision.xyz"
              className="contact-info--email"
              target="_blank"
              rel="noreferrer"
            >
              contact@cyberdivision.xyz
            </a>
          </address>
        </div>
      </Container>
      <iframe
        width="100%"
        height="600"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=35.8298754,10.638095&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginh-height="0"
        margin-width="0"
        className="contact-iframe"
      ></iframe>
      <ContactForm />
      <Footer />
    </motion.div>
  )
}
Contact.layout = BaseLayout
export default Contact
