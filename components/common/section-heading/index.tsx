import React from "react"
import StyledSectionHeading from "./styles"

interface SectionHeadingType {
  sectionTitle: string
  sectionDescription: string
}

const SectionHeading: React.FC<SectionHeadingType> = ({
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <StyledSectionHeading>
      <span>{sectionTitle}</span>
      <p>{sectionDescription}</p>
    </StyledSectionHeading>
  )
}

export default SectionHeading
export type { SectionHeadingType }
