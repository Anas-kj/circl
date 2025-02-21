import { FC } from "react"
import type { NextPage, GetServerSideProps } from "next"
import Head from "next/head"
import BaseLayout from "@components/layout/baseLayout"
import { createClient } from "contentful"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Hero, History, ContactUs, Header, Footer, Team } from "@components/ui"

const DynamicGallery = dynamic(() => import("@components/ui/gallery"), {
  ssr: false,
})
const DynamicBlog = dynamic(() => import("@components/ui/blog"), {
  ssr: false,
})

// Types !
type HomeComponent = FC & NextPage & { layout: typeof BaseLayout }
// eslint-disable-next-line
const Home: HomeComponent = ({ headline, posts, images, isLoading }: any) => {
  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>Cyber Division</title>
        <meta name="description" content="Cyber Division Website" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Header isLoading={isLoading} />
      <Hero isLoading={isLoading} />
      <History />
      <DynamicGallery images={images} />
      <Team />
      <DynamicBlog
        posts={posts}
        headline={headline.items?.[0].fields.headline}
      />
      <ContactUs />
      <Footer />
    </motion.div>
  )
}

// Data Fetching
export const getServerSideProps: GetServerSideProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID || "e4xw285rrsr5",
    accessToken:
      process.env.NEXT_PUBLIC_ACCESS_KEY ||
      "XqZsaeHJC756zN2oez2U6kg3enyvaH3kZywWoW_yd5A",
  })
  const posts = await client.getEntries({
    content_type: "posts",
    skip: 0,
    limit: 8,
  })
  // eslint-disable-next-line
  const headline: any = await client.getEntries({ content_type: "headline" })
  //Cloudinary
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/upload?prefix=cyber-division-website/gallery`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY +
            ":" +
            process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json())

  const resourcesArray = Array.isArray(results?.resources)
    ? results.resources
    : []

  const images = resourcesArray.map((resource: any) => {
    const { width, height } = resource
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    }
  })
  return {
    props: {
      images,
      headline,
      posts: posts.items.filter(
        // eslint-disable-next-line
        (art: any) =>
          art.fields.slug !== headline.items?.[0]?.fields.headline.fields.slug
      ),
    },
  }
}

Home.layout = BaseLayout

export default Home
