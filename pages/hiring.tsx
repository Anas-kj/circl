import { FC } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import BaseLayout from "@components/layout/baseLayout"
// import useTranslation from "next-translate/useTranslation"
import Container from "@components/common/container"
import SectionHeading, {
  SectionHeadingType,
} from "@components/common/section-heading"
import StyledHiring from "@styles/pages/hiring"
import JobListing from "@components/ui/jobListing"

// Types
type HiringComponent = FC & NextPage & { layout: typeof BaseLayout }

const Hiring: HiringComponent = () => {
  const servicesSection: SectionHeadingType = {
    sectionTitle: "Services",
    sectionDescription: "What we do?",
  }

  const whatWeOfferSection: SectionHeadingType = {
    sectionTitle: "What we offer",
    sectionDescription:
      "Looking to make a hire quickly? Our talented and experienced consultants take the time to understand your needs and then work quickly to match you with the right Strategists, Designers, Product Managers and Engineers.",
  }

  return (
    <div>
      <Head>
        <title>Hiring! - Cyber Division Website</title>
        <meta name="description" content="Cyber Division Website" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <StyledHiring>
        <Container>
          <div className="hero">
            <h1>
              <span>Hello</span> We are happy to see You on this page. Please
              tell us could you join us?
            </h1>
          </div>

          {/* <Work /> */}
          {/* <div className="services-section">
            <SectionHeading {...servicesSection} />
            <div className="services">
              <div className="service">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sed enim augue quam aenean tincidunt diam gravida. Rhoncus,
                fusce pulvinar duis amet, sit vestibulum enim. Auctor fames
                risus at venenatis faucibus mi, phasellus proin dictum. Urna
                tellus vitae magna tempus vitae nam consequat proin.
              </div>
              <div className="service">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sed enim augue quam aenean tincidunt diam gravida. Rhoncus,
                fusce pulvinar duis amet, sit vestibulum enim. Auctor fames
                risus at venenatis faucibus mi, phasellus proin dictum. Urna
                tellus vitae magna tempus vitae nam consequat proin.
              </div>
              <div className="service">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sed enim augue quam aenean tincidunt diam gravida. Rhoncus,
                fusce pulvinar duis amet, sit vestibulum enim. Auctor fames
                risus at venenatis faucibus mi, phasellus proin dictum. Urna
                tellus vitae magna tempus vitae nam consequat proin.
              </div>
            </div>
          </div> */}
          <div className="what-we-offer">
            <SectionHeading {...whatWeOfferSection} />
          </div>
          <JobListing />
          {/* <HiringForm /> */}
        </Container>
      </StyledHiring>
    </div>
  )
}

Hiring.layout = BaseLayout

export default Hiring
