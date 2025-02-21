// Styled component import
import styled from "styled-components"

// Types

const StyledVideo = styled.section`
  .video-section {
    position: relative;
    overflow: hidden;
    max-width: 100vw;
    height: 150px;

    .video-title {
      top: 0;
      display: flex;
      h1 {
        font-family: "Aventa";
        font-weight: 400;
        font-size: 3rem;
        line-height: 145px;
        white-space: nowrap;
        margin-right: 20px;
      }
      .vid-h1_italic {
        font-style: italic;
      }
    }
    .video-bg {
      width: 100vw;
      height: 100vh;
      display: none;
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: none;
      }
    }
    /* button {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: none;
      color: var(--body-bg);
      background-color: var(--text-primary);
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      display: block;
      cursor: pointer;
      border-radius: 50%;
      height: 150px;
      width: 150px;
      font-family: "Telegraf";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 25px;
      text-transform: capitalize;
      transition: all 0.3s ease-in-out;
      //make it bigger on hover
      &:hover {
        height: 250px;
        width: 250px;
      }

      z-index: 100;
    } */
  }

  /* Large */
  @media only screen and (min-width: 768px) {
    .video-section {
      .video-title {
        h1 {
          font-size: 5rem;
        }
      }
    }
  }

  /* Medium */
  @media only screen and (min-width: 992px) {
    .video-section {
      .video-title {
        h1 {
          font-size: 6rem;
        }
      }
    }
  }

  /* Large */
  @media only screen and (min-width: 1200px) {
    .video-section {
      .video-title {
        h1 {
          font-size: 7rem;
        }
      }
    }
  }
`
export default StyledVideo
