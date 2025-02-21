import React from "react"
import { ContactArrowBtn } from "../../../public/assets"
import useTranslation from "next-translate/useTranslation"
import StyledNavButton from "./styles"
import { useRouter } from "next/router"

const NavButton = () => {
  let { t } = useTranslation("common")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"
  const Router = useRouter()

  return (
    <StyledNavButton
      isRTL={isRTL}
      className="contact-us-btn"
      id="contact-btn-header"
    >
      <button
        className="contact-us-header-btn"
        onClick={() => {
          Router.push("/contact")
        }}
      >
        {t("header_btn_contact")}
        <ContactArrowBtn />
      </button>
    </StyledNavButton>
  )
}

export default NavButton
