// Styled component import
import styled from "styled-components"

interface Props {
  isRTL: boolean
}
// Types

const StyledFooter = styled.footer<Props>`
  padding-top: 150px;
  height: 100%;
  width: 100%;
  color: #fff;
  cursor: default;

  font-family: ${(props) => !props.isRTL && "Aventa"};
  font-family: ${(props) => props.isRTL && "Almarai"};
  overflow: hidden;
  .r-wya {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;

    font-family: ${(props) => !props.isRTL && "Aventa"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    h2 {
      font-weight: 400;
    }
    .country {
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-style: italic;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 0.85rem;
      letter-spacing: 0.2rem;
      padding: 5px 20px 0px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 50%;
        right: ${(props) => props.isRTL && "0"};
        left: ${(props) => !props.isRTL && "0"};
        top: 60%;
        transform: translateY(-50%);
        background-color: #fff;
      }
    }
  }

  .footer-header {
    margin-bottom: 55px;

    .footer-header-subtitle {
      display: flex;
      align-items: baseline;
      justify-content: flex-start;
      gap: 10px;

      h2 {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-style: italic;
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 20px;
      }

      h3 {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-style: normal;
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 15px;
      }
    }

    .footer-header-title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;

      h1 {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 76px;
      }

      h2 {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 76px;
        opacity: 0.5;
      }
    }
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    .footer-content-paragraph {
      width: 85%;
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5;
    }

    .footer-content-btns {
      display: flex;
      align-items: center;
      gap: 30px;
      padding-bottom: 50px;

      .up {
        padding: 14px;
        border: 1px solid #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 5;
        position: relative;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;

        &:before {
          content: "";
          position: absolute;
          height: 0%;
          width: 100%;
          bottom: 0;
          left: 0;
          transition: all 0.45s ease-in-out;

          background-color: #fff;
          z-index: -1;
          border-radius: 25px;
        }

        &:hover {
          svg > path {
            fill: black;
          }
        }

        &:hover::before {
          height: 100%;
        }

        img {
          transform: rotate(-90deg);
          transform-origin: center;
        }
      }
    }

    .footer-content-slider {
      display: flex;

      h1 {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-weight: 400;
        font-size: 3rem;
        line-height: 145px;
        white-space: nowrap;
        margin-right: 20px;
      }

      .footer-h1_italic {
        font-style: italic;
      }
    }
  }

  .footer-bottom {
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-bottom: 2px solid #fff;

    .social-media {
      margin-bottom: 30px;

      p {
        margin-bottom: 24px;
        text-transform: capitalize;
      }

      .social {
        display: flex;
        flex-direction: column;
        text-transform: capitalize;
        align-items: flex-start;
        gap: 12px;

        li {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 29px;

          text-decoration-line: underline;
        }
      }
    }
    .footer-bottom-cyber {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      & > p {
        margin-bottom: 15px;
        display: block;
        font-size: 1.17em;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
      }
      .view-on-map {
        display: flex;
        align-items: center;
        gap: 10px;

        cursor: pointer;
        p {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-style: normal;
          font-weight: 200;
          font-size: 20px;
          line-height: 129.5%;
          letter-spacing: 0.04em;
        }
        .right-arrow {
          height: 20px;
          width: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          padding: 10px;
          border: 2px solid #ffffff;
          position: relative;
          transform: ${(props) => !props.isRTL && "rotate(0deg)"};
          transform: ${(props) => props.isRTL && "rotate(180deg)"};
        }
      }
    }
  }

  .footer-logo {
    padding-top: 50px;
    padding-bottom: 75px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    .footer-header {
      margin-bottom: 75px;

      .footer-header-subtitle {
        display: flex;
        align-items: baseline;
        justify-content: flex-start;
        gap: 10px;

        h2 {
          font-size: 2rem;
          line-height: 50px;
        }

        h3 {
          font-size: 2rem;
          line-height: 45px;
        }
      }
      .footer-header-title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 3rem;
        }
      }
    }
    .footer-content {
      .footer-content-paragraph {
        width: 70%;
        font-size: 1.5rem;
      }

      .footer-content-btns {
        gap: 35px;
      }

      .footer-content-slider {
        h1 {
          font-size: 5rem;
        }
      }
    }
    .footer-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .social-media {
        margin-bottom: unset;

        p {
          margin-bottom: 15px;
          display: block;
          font-size: 1.17em;
          margin-top: 1em;
          margin-bottom: 1em;
          margin-left: 0;
          margin-right: 0;
          font-weight: bold;
        }

        h2 {
          font-size: 1rem;
        }

        .social {
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 30px;

          li {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .footer-content {
      .footer-content-paragraph {
        width: 40%;
        font-size: 1.4rem;
        margin-bottom: 20px;
      }

      .footer-content-slider {
        h1 {
          font-size: 7.5rem;
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .footer-bottom-cyber {
      margin-right: 120px;
    }
  }
`
export default StyledFooter
