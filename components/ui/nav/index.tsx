import React from "react"
import Container from "@common/container"
import StyledNav from "./styles"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

export default function Nav() {
  const { t } = useTranslation("common")

  return (
    <StyledNav>
      <Container>
        <ul className="nav-links">
          <li>
            <Link href="/">{t("nav_home")}</Link>
          </li>
          <li className="opacity-7">
            <Link href="#origins">{t("nav_origins")}</Link>
          </li>
          <li className="opacity-5">
            <Link href="#projects">{t("nav_projects")}</Link>
          </li>
          <li className="opacity-4">
            <Link href="#team">{t("nav_team")}</Link>
          </li>
          <li className="opacity-3">
            <Link href="#blog">{t("nav_blog")}</Link>
          </li>
        </ul>
        <span className="company">
          Cyber Division <span>TUNISIA</span>
        </span>
      </Container>
    </StyledNav>
  )
}
