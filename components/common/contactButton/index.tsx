import React from "react"
import { ContactArrowBtn } from "../../../public/assets"
import useTranslation from "next-translate/useTranslation"
import StyledContactButton from "./styles"
import { useRouter } from "next/router"

const ContactButton = ({
  label = "Contact Us",
  openModel = null,
  className = null,
  id = null,
}: any) => {
  const router = useRouter()
  let { t } = useTranslation("common")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"
  const isFR = lang === "fr"

  return (
    <StyledContactButton
      isRTL={isRTL}
      className={`${className ? className : "contact-us-btn"}`}
      id={id ? id : ""}
    >
      <button
        className="contact-us-header-btn"
        onClick={() => {
          if (openModel) {
            openModel()
            return
          }
          router.push("/contact")
        }}
      >
        {label}
        <ContactArrowBtn />
      </button>
    </StyledContactButton>
  )
}

export default ContactButton
