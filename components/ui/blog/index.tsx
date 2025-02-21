import Container from "@components/common/container"
import React, { FC, useEffect } from "react"
import StyledBlog from "./styles"
import BlogPost from "./blogPostCard"
import { GreenArrow } from "public/assets"
import useTranslation from "next-translate/useTranslation"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { setupAnimation } from "@utils/gsap/index/Blog"

// eslint-disable-next-line
export type BlogProps = any
// eslint-disable-next-line
interface DivBaseProps extends React.ComponentPropsWithoutRef<"div"> {}

const Blog: FC<BlogProps & DivBaseProps> = (props) => {
  let { t } = useTranslation("index")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"
  useEffect(() => {
    setupAnimation(isRTL)
  }, [])

  function NextArrow(props: any) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    )
  }

  function PrevArrow(props: any) {
    const { className, style, onClick } = props
    return (
      <div
        id="prev"
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    )
  }
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3.5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    rtl: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3.25,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 692,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,

          centerPadding: "30px",
          centerMode: true,
          speed: 150,
        },
      },
      {
        breakpoint: 492,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "25px",
          centerMode: true,
          speed: 150,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 150,
        },
      },
    ],
  }
  return (
    <StyledBlog isRTL={isRTL} id="#blog">
      <Container>
        <div className="blog-info">
          <div className="sub-heading">
            <h5>{t("blog_section_title_1_1")} </h5>{" "}
            <h5>{t("blog_section_title_1_2")}</h5>
          </div>
          <div className="blog-heading-info">
            <p>{t("blog_section_subtitle")} </p>
            <div className="content">
              <p>{t("blog_section_description")}</p>
              <a
                href="https://blog.cyberdivision.xyz/"
                target="_blank"
                rel="noreferrer"
              >
                {t("blog_section_link")}
                <GreenArrow />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <Container id="blog-container-posts">
        <div className="blog-posts" dir="ltr">
          <Slider {...settings}>
            {props.posts.map((post: any) => (
              <div key={post.sys.id}>
                <BlogPost
                  blogPostSlug={post.fields.slug}
                  blogPostImgUrl={post.fields.featuredImage?.fields?.file?.url}
                  blogPostTitle={post.fields.title}
                  blogPostPublished={post.fields.published}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </StyledBlog>
  )
}

export default Blog
