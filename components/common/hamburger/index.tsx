import React from "react"
import useTranslation from "next-translate/useTranslation"
import StyledHamburger from "./styles"
import { useRouter } from "next/router"

const HamburgerMenu = ({ onClickHamburger }: any) => {
  const { lang } = useTranslation()
  const isRTL = lang === "ar"

  return (
    <StyledHamburger
      isRTL={isRTL}
      className="hamburger-menu"
      id="hamburger-menu"
      onClick={onClickHamburger}
    >
      <span></span>
      <span></span>
    </StyledHamburger>
  )
}

export default HamburgerMenu
