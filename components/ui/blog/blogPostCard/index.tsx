import React from "react"
import Link from "next/link"
import moment from "moment"

import StyledBlogPost from "./styles"
import Image from "next/image"

interface BlogPostType {
  blogPostSlug: string
  blogPostImgUrl: string
  blogPostTitle: string
  blogPostPublished: Date
}
const BlogPost: React.FC<BlogPostType> = ({
  blogPostSlug,
  blogPostImgUrl,
  blogPostTitle,
  blogPostPublished,
}) => {
  return (
    <StyledBlogPost>
      <Link
        href={`${process.env.NEXT_PUBLIC_BLOG_URL}/${blogPostSlug}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className="blog-card-container">
          <Image
            layout="fill"
            objectFit="cover"
            src={`https:${blogPostImgUrl}`}
            alt="blog post image"
            unoptimized={true}
          />
          <div className="blog-data">
            <div className="blog-data-subheading">
              <h6>Cyber Division</h6>
              <h6>{moment(blogPostPublished).format("MMMM DD, YYYY")}</h6>
            </div>
            <div className="blog-data-heading">
              <h5 className="blog-title">{blogPostTitle}</h5>
              <button>Visit Full Blog</button>
            </div>
          </div>
        </div>
      </Link>
    </StyledBlogPost>
  )
}

export default BlogPost
