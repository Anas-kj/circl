import React from "react"
import Link from "next/link"
import moment from "moment"

import StyledBlogPost from "./styles"
import Image from "next/image"

interface BlogPostType {
  blogPostIndex: number
  blogPostSlug: string
  blogPostImgUrl: string
  blogPostTitle: string
  blogPostTopics: any[]
  blogPostPublished: Date
}
const BlogPost: React.FC<BlogPostType> = ({
  blogPostIndex,
  blogPostSlug,
  blogPostImgUrl,
  blogPostTitle,
  blogPostTopics,
  blogPostPublished,
}) => {
  return (
    <StyledBlogPost className={`img-${blogPostIndex} post-single-blog`}>
      <Link
        href={`${process.env.NEXT_PUBLIC_BLOG_URL}/${blogPostSlug}`}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <Image
            layout="fill"
            objectFit="cover"
            className={`image`}
            src={`https:${blogPostImgUrl}`}
            alt="blog post image"
            unoptimized={true}
          />
          <div className="blog-data">
            {/* <span className="date">May 26’th, 2022</span> */}
            <span className="date">
              {moment(blogPostPublished).format("MMMM DD, YYYY")}
            </span>
            <h5 className="blog-title">{blogPostTitle}</h5>
            <div className="hashtags">
              {blogPostTopics.map((topic: any) => {
                if (topic.fields) {
                  return (
                    <span key={topic.sys.id} className="hashtag">
                      #{topic.fields.name}
                    </span>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </Link>
    </StyledBlogPost>
  )
}

export default BlogPost
