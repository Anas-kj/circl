// Styled component import
import styled from "styled-components"

// Types
interface Props {
  isRTL: boolean
}

const StyledHero = styled.section<Props>`
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
  height: 100vh;
  position: relative;

  .hero-background {
    position: absolute;
    height: auto;
    width: auto;
    z-index: -100;
    user-select: none;
  }

  .inter-italic {
    font-family: ${(props) => !props.isRTL && "Aventa"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    font-weight: 400;
    font-style: italic;
  }

  .new_hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;

    #img {
      width: 100vw;
      height: 100vh;

      video {
        width: 100vw;
        height: 100vh;
        transform: scale(1.5);
      }
    }
    .new_hero-typography {
      h1 {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        white-space: nowrap;
      }

      .typography_first-line {
        display: flex;
        align-items: center;
        justify-content: center;
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
        gap: 15px;
        overflow: hidden;

        span {
          display: block;
          width: 45px;
          height: 1px;
          background-color: white;
        }
      }

      .typography_second-line {
        display: flex;
        align-items: center;
        justify-content: center;
        /* flex-wrap: wrap; */
        /* column-gap: 10px; */
        gap: 15px;
        overflow: hidden;
      }
    }
  }

  .hero-footer {
    position: absolute;
    bottom: 10vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    img {
      display: none;
    }

    .loader-mb {
      position: relative;
      height: 1px;
      width: 80%;
      opacity: 0.5;
      background-color: rgba(255, 255, 255, 0.3);

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 20%;
        width: 60%;
        height: 1px;
        opacity: 1;
        background-color: rgba(255, 255, 255, 1);
      }
    }
  }

  h1 {
    font-family: ${(props) => !props.isRTL && "Telegraf"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 106%;
    color: var(--text-primary);
  }

  .content {
    p {
      font-size: var(--p-mb);
      line-height: var(--line-height-p-mb);
      color: var(--text-primary);
      letter-spacing: 0.04em;
      margin-bottom: 20px;
    }

    a {
      font-style: normal;
      font-weight: 400;
      font-size: var(--p-mb);
      line-height: 30px;
      letter-spacing: 0.04em;
      text-transform: capitalize;
      display: flex;
      align-items: center;

      img {
        margin-left: 15px;
        margin-top: 3px;
        width: 30px;
      }
    }
  }

  /* Small */
  @media only screen and (min-width: 768px) {
    .new_hero-content {
      .new_hero-typography {
        .typography_first-line {
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 27px;

          span {
            width: 120px;
            height: 3px;
          }
        }

        .typography_second-line {
          flex-wrap: nowrap;
          column-gap: 27px;
        }
      }

      #img {
        video {
          transform: scale(1);
        }
      }
    }
  }

  /* Medium */
  @media only screen and (min-width: 992px) {
    min-height: calc(100vh - 119px); /* 119px is the Nav Height*/
    .hero-background {
      position: absolute;
      height: 100vh;
      width: 100vw;
      z-index: -100;
    }
    img {
      height: 60%;
    }

    h5 {
      font-size: var(--sub-heading-lg);
      font-style: italic;

      .future {
        font-style: normal;
      }

      .russian {
        display: unset;
        position: relative;
        margin-left: 25px;

        &::before {
          content: "";
          position: absolute;
          top: 7px;
          left: -15px;
          background-color: var(--text-primary);
          height: 70%;
          width: 1px;
        }
      }
    }

    h1 {
      font-size: var(--heading-lg);
      margin-bottom: unset;
    }

    h5 + div {
      display: flex;
      gap: 70px;
    }

    .content {
      p {
        font-size: var(--p-lg);
        line-height: var(--line-height-p-mb);
        margin-bottom: 60px;
      }

      a {
        font-size: var(--p-lg);

        img {
          margin-left: 20px;
          margin-top: 5px;
          width: unset;
        }
      }
    }

    .hero-footer {
      flex-direction: row;

      img {
        display: unset;
        animation: scrolldown 2s infinite;
      }

      @keyframes scrolldown {
        0% {
          transform: translateY(30%);
          opacity: 0.7;
        }
        50% {
          transform: translateY(0%);
          opacity: 0.2;
        }
        100% {
          transform: translateY(30%);
          opacity: 0.7;
        }
      }

      .loader-mb {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .new_hero-content {
      #img {
        display: flex;
        align-items: center;
        justify-content: center;

        video {
          max-width: 60vw;
        }
      }
    }
  }
`

export default StyledHero
