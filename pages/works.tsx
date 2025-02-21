import { FC } from "react"

import type { NextPage, GetStaticProps } from "next"
import Head from "next/head"
import BaseLayout from "../components/layout/baseLayout"
// import useTranslation from "next-translate/useTranslation"
import { createClient } from "contentful"

// Styles

import Container from "@components/common/container"
import { WorkCard } from "@components/ui"

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID || "e4xw285rrsr5",
  accessToken:
    process.env.NEXT_PUBLIC_ACCESS_KEY ||
    "XqZsaeHJC756zN2oez2U6kg3enyvaH3kZywWoW_yd5A",
})

// Types
type WorkComponent = FC & NextPage & { layout: typeof BaseLayout }

const Work: WorkComponent = ({ works }: any) => {
  return (
    <>
      <Head>
        <title>Cyber Division Website</title>
        <meta name="description" content="Cyber Division Website" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Container>
        <span className="works-title">Our Work</span>
        <p className="works-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
          enim augue quam aenean tincidunt diam gravida. Rhoncus, fusce pulvinar
          duis amet, sit vestibulum enim. Auctor fames risus at venenatis
          faucibus mi, phasellus proin dictum. Urna tellus vitae magna tempus
          vitae nam consequat proin.
        </p>
        <Container className="works-container">
          {works.map((work: any) => (
            <WorkCard key={work.sys.id} data={work.fields} />
          ))}
        </Container>
      </Container>
    </>
  )
}

// Data Fetching
export const getStaticProps: GetStaticProps = async () => {
  const data: any = await client.getEntries({
    content_type: "works",
  })
  return {
    props: {
      works: data.items,
    },
  }
}

Work.layout = BaseLayout
export default Work
