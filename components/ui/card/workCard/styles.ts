// Styled component import
import styled from "styled-components"

// Types

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;

  .card-content {
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-family: "Telegraf";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-transform: capitalize;
    color: #fdfdfd;
    opacity: 0.6;
    .date {
      color: #1fbe00;
      margin-left: 12px;
      opacity: unset;
    }
    color: var(--text-primary);
  }

  p {
    font-family: "Aeonik";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 27px;
    text-transform: capitalize;
    color: var(--text-primary);
  }
  a {
    font-family: "Aeonik";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-transform: capitalize;
    color: #1fbe00;
  }
`

export const ImageComponent = styled.div`
  width: 100%;
  height: 100%;
  max-height: 210px;

  img {
    width: 100%;
    height: 100%;
  }
`
