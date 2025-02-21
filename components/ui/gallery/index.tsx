import React, { useEffect } from "react"
import StyledGallery from "./styles"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import useTranslation from "next-translate/useTranslation"
import Container from "@components/common/container"
import { setupAnimation } from "@utils/gsap/index/Gallery"
import ContactButton from "@components/common/contactButton"
import { openModel } from "@utils/ModelFunction"
import Image from "next/image"

export type ImagesProps = {
  id: string
  image: string
  title: string
  height: number
  width: number
}

gsap.registerPlugin(ScrollTrigger)
export default function Gallery({ images }: any) {
  let { t } = useTranslation("index")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"
  useEffect(() => {
    setupAnimation()
  }, [])
  return (
    <StyledGallery isRTL={isRTL} className="gallery-con">
      <div className="gallery-heading">
        <span className="sub-heading">{t("gallery_section_title")}</span>
        <div className="new_gallery-typography">
          <div className="typography_first-line">
            <h1 className="set">{t("gallery_section_text_1")}</h1>
            <span className="set-span"></span>
            <h1 className="inter-italic t-pre">
              {t("gallery_section_text_2")}
            </h1>
          </div>
          <div className="typography_second-line">
            <h1 className="inter-italic f-the">
              {t("gallery_section_text_3_1")}
            </h1>
            <h1 className="c-age">{t("gallery_section_text_3_2")}</h1>{" "}
            <h1 className="inter-italic t-co">
              {t("gallery_section_text_3_3")}
            </h1>
          </div>
        </div>
        <div>
          <p className="gallery-paragraph">
            {t("gallery_section_description")}
          </p>
        </div>
        <ContactButton
          label={t("gallery_section_reach_us_btn")}
          openModel={openModel}
          className="gallery-contact-btn"
          id="gallery-reach-us"
        />
      </div>

      <Container>
        <div className="gallery-container">
          {images.slice(0, 9).map((item: any, index: number) => (
            <div key={item.id} className={`image img-${index + 1}`}>
              <Image
                layout="responsive"
                src={item.image}
                width={2064}
                height={3096}
                alt={item.title}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </Container>
    </StyledGallery>
  )
}
