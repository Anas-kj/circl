import styled from "styled-components"

const StyledSectionHeading = styled.div`
  margin-bottom: 50px;
  span {
    font-family: "Aventa", sans-serif;
    font-weight: 500;
    font-size: var(--sub-heading-mb);
    line-height: 13px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1fbe00;
  }

  p {
    font-family: "Aventa", sans-serif;
    font-weight: 400;
    font-size: var(--heading-mb);
    line-height: 35px;
    letter-spacing: 0.03em;
    text-transform: capitalize;
    color: var(--text-primary);
    margin: 30px 0;
  }

  /* Medium */
  @media only screen and (min-width: 992px) {
    margin-bottom: 150px;

    span {
      font-size: var(--sub-heading-lg);
    }

    p {
      font-size: var(--heading-lg);
      line-height: var(--line-height-heading-lg);
      margin-top: 75px;
    }
  }
`

export default StyledSectionHeading
