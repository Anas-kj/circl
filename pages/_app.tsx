import "../styles/globals.css"
import React, { useEffect } from "react"
import Script from "next/script"
import { useRouter } from "next/router"

import PageWithLayoutType from "@components/layout"
import { GlobalStyle } from "@styles/globalStyles"
import Head from "next/head"
import * as fbq from "../lib/fpixel"
import useTranslation from "next-translate/useTranslation"
type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

import { AnimatePresence } from "framer-motion"
import { Preloader } from "@components/ui"
const isProd = process.env.NODE_ENV === "production"

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>)
  const router = useRouter()

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(`${fbq.FB_PIXEL_ID}`) // facebookPixelId
        ReactPixel.pageView()

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual"
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0)
      }
    }
  }, [])
  const { lang } = useTranslation()

  const isRTL = lang === "ar"

  const [isLoading, setIsLoading] = React.useState(true)

  // @
  return (
    <>
      {isProd && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />

          <Script id="google-analytics" strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
          </Script>
          <Script id="facebook-pixel">
            {`     
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', ${fbq.FB_PIXEL_ID});
              fbq('track', 'PageView');
            `}
          </Script>
        </>
      )}
      <Head>
        <title>Welcome!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <meta property="og:title" content="Cyber Division" />
        <meta
          property="og:image"
          content="https://i.ibb.co/1s0DRpb/Untitled-1.jpg"
        />
        <meta
          property="og:description"
          content="Cyber Division is an R&D company that investigates and assesses businesses to help build the perfect technology solutions."
        />
        <meta property="og:url" content="https://cyberdivision.xyz/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
      </Head>

      <div dir={isRTL ? "rtl" : "ltr"}>
        <GlobalStyle isRTL={isRTL} />
        <Layout>
          <Preloader setIsLoading={setIsLoading} />
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component
              {...pageProps}
              key={router.asPath}
              isLoading={isLoading}
            />
          </AnimatePresence>
        </Layout>
      </div>
    </>
  )
}

export default MyApp
