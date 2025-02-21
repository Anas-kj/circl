import styled from "styled-components"

const StyledBlogPost = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--body-bg);
    opacity: 0.6;
    transition: all 0.3s;
  }

  &:hover::before {
    opacity: 0.1;
  }
  .blog-card-container {
    position: relative;
    height: 100%;
    width: 100%;
  }
  img {
    max-width: 100%;
    object-fit: cover;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: -1;
      opacity: 0;
    }
  }

  .blog-data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }

    .blog-data-subheading {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h6 {
      font-size: 14px;
      font-weight: 400;
      font-family: "Aventa", sans-serif;
    }

    .blog-data-heading {
      h6 {
        font-size: 13px;
        text-transform: uppercase;
        margin-bottom: 5px;
      }

      h5 {
        font-size: 24px;
        font-weight: 400;
        font-family: "Aventa", sans-serif;
        margin-bottom: 5px;
      }

      button {
        display: flex;
        align-items: center;
        gap: 15px;
        font-family: "Aventa", sans-serif;
        font-weight: 400;
        font-size: 15px;
        color: #1fbe00;
        background: none;
        border: none;
        cursor: pointer;
      }
    }
  }
`

export default StyledBlogPost
