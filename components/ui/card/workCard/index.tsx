import React from "react"
import { Wrapper as Card, ImageComponent } from "./styles"
import Link from "next/link"
import moment from "moment"
export type WorkProps = any
export default function WorkCard({ data }: WorkProps) {
  return (
    <Card>
      <ImageComponent>
        <img src={data.image?.fields?.file?.url} alt="work" />
      </ImageComponent>

      <div className="card-content">
        <span className="title">
          {data.title}
          <span className="title date">
            {moment(data.published).format("MMMM DD")}
          </span>
        </span>

        <p>{data.description}</p>
        <Link href={data.link} rel="noreferrer" target="_blank">
          <div>&#10230; &nbsp; Visit Case Study</div>
        </Link>
      </div>
    </Card>
  )
}
