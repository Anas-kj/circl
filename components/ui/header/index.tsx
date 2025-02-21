import { useEffect, useRef } from "react"
import StyledHeader from "./styles"
import { CyberTextLogo, SymbolWhite } from "../../../public/assets"
import Container from "@common/container"
import { useRouter } from "next/router"
import useTranslation from "next-translate/useTranslation"
import Link from "next/link"
import NavButton from "@components/common/navButton"
import HamburgerMenu from "@components/common/hamburger"
import dynamic from "next/dynamic"
import {
  setupAnimation,
  launchAnimation,
  onClickHamburger,
} from "@utils/gsap/Header"

const DynamicContactModel = dynamic(() => import("../contactModel"), {})

const Header = ({ isLoading }: any) => {
  const router = useRouter()
  const overlayLogo = useRef<HTMLDivElement>(null)
  const { locales, locale, asPath } = useRouter()
  let { t } = useTranslation("common")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"

  const onClickMenu = (path: string) => {
    router.push(`/${path}`)
    onClickHamburger(false)
  }

  useEffect(() => {
    setupAnimation()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      launchAnimation()
    }
  }, [isLoading])

  return (
    <StyledHeader isRTL={isRTL}>
      <Container className="header-content_container">
        <div className="nav-content_left">
          <div className="logo-lang">
            <div
              id="logo"
              className="logo-symbol"
              onClick={() => router.push("/")}
            >
              <SymbolWhite />
            </div>
            <ul className="languages">
              {locales?.map((item: string) => (
                <li className={locale === item ? "selected" : "EN"} key={item}>
                  <Link href={asPath} locale={item}>
                    <div>{item.toUpperCase()}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="logo" id="logo" onClick={() => router.push("/")}>
            {/* <a href="/"> */}
            <CyberTextLogo />
            {/* </a> */}
          </div>
          <div className="nav-left">
            <HamburgerMenu onClickHamburger={onClickHamburger} />
            <NavButton />
          </div>
        </div>
      </Container>

      <div className="overlay">
        <Container>
          <div className="header gsap-stagger">
            <div
              ref={overlayLogo}
              className="logoWrite"
              onClick={() => {
                onClickHamburger(false)
                router.push("/")
              }}
            >
              <SymbolWhite />
            </div>
            <div className="back" onClick={() => onClickHamburger(false)}>
              {t("menu_back")}
            </div>
          </div>
          {/* Menu Page ========================================================*/}
          <div className="main ">
            <ul className="navigation-ul">
              <li
                className="navigation-li gsap-stagger"
                onClick={() => {
                  onClickMenu("contact")
                }}
              >
                <span>01 // {t("menu_contact")}</span>
                <span className="decoration_line"></span>
              </li>
            </ul>
          </div>

          <div className="footer gsap-stagger">
            <div className="cyber-description">
              <hr />
              <p>{t("meu_description")}</p>
            </div>
            <ul className="header-social">
              <li>
                <a
                  href="https://www.facebook.com/cyberdivision.tn"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("footer_link_2")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cyberdivisionofficial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("footer_link_1")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/72256857"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("footer_link_3")}
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <DynamicContactModel />
    </StyledHeader>
  )
}

export default Header
