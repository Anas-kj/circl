import React, { useEffect, useRef } from "react"
import StyledVideo from "./styles"
import useTranslation from "next-translate/useTranslation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Video() {
  const { t } = useTranslation("index")
  const videoRef: any = useRef(null)
  useEffect(() => {
    gsap.fromTo(
      ".video-section > .video-title",
      { xPercent: 80 },
      {
        xPercent: -80,
        scrollTrigger: {
          trigger: ".video-section",
          start: "top bottom-=50",
          end: "bottom top",
          scrub: 9,
        },
      }
    )
  }, [])

  // function fullScreenClick() {
  //   if (videoRef.current) {
  //     const fullscreenElement =
  //       document.fullscreenElement || document.webkitFullscreenElement
  //     if (!fullscreenElement) {
  //       if (videoRef.current.requestFullscreen) {
  //         videoRef.current.requestFullscreen()
  //       } else if (videoRef.current.webkitRequestFullscreen) {
  //         videoRef.current.webkitRequestFullscreen()
  //       }
  //     } else {
  //       if (document.exitFullscreen) {
  //         document.exitFullscreen()
  //       } else if (document.webkitExitFullscreen) {
  //         document.webkitExitFullscreen()
  //       }
  //     }
  //   }
  // }
  // fullScreenClick()

  return (
    <StyledVideo>
      <div className="video-section">
        <div className="video-title">
          <h1 className="vid-h1">{t("video_section_text_1")}</h1>
          <h1 className="vid-h1_italic">{t("video_section_text_2")}</h1>
        </div>
        <div className="video-bg">
          <video autoPlay muted loop ref={videoRef}>
            <source src="assets/bgvideo.mp4" />
          </video>
        </div>
      </div>
    </StyledVideo>
  )
}
