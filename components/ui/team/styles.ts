// Styled component import
import styled from "styled-components"

// Types
interface Props {
  isRTL: boolean
}

const StyledTeamSection = styled.section<Props>`
  .team-contact-btn {
    margin-top: 100px;
    button > svg {
      transform: rotate(-45deg);
    }
  }
  .team-heading {
    text-align: center;

    padding: 100px auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    margin-top: 100px;
    margin-bottom: 100px;
    .back {
      font-family: "Aventa";
      font-size: 20px;
      width: fit-content;
      cursor: pointer;
      position: relative;
      margin-top: 50px;

      &:after {
        content: "";
        display: block;
        height: 1px;
        width: 0px;
        background: transparent;
        transition: width 0.5s ease, 0.5s ease;
      }
      &:hover:after {
        width: 100%;
        background: white;
      }
    }

    .sub-heading {
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-style: normal;
      font-weight: 500;
      font-size: var(--sub-heading-mb);
      line-height: 106%;
      text-align: center;
      letter-spacing: 0.445em;
      text-transform: uppercase;
      overflow: hidden;
      margin-bottom: 50px;
      color: #1fbe00;
    }
    .team-paragraph {
      margin-top: 50px;
      max-width: 350px;
      overflow: hidden;
      p {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 166%;
      }
    }
    .new_team-typography {
      .typography_first-line {
        h1 {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-size: 1.5rem;
          white-space: nowrap;
        }
        .inter-italic {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-style: italic;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
        gap: 15px;
        span {
          display: block;
          width: 60px;
          height: 1px;
          background-color: white;
        }
      }

      .typography_second-line {
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 15px;
        h1 {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-size: 1.5rem;
          white-space: nowrap;
        }
        .inter-italic {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-style: italic;
        }
      }
      .typography_third-line {
        display: flex;
        align-items: center;
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
        gap: 15px;
        justify-content: center;
        h1 {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-size: 1.5rem;
          white-space: nowrap;
        }
        .inter-italic {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-style: italic;
        }

        span {
          display: block;
          width: 60px;
          height: 1px;
          background-color: white;
        }
      }
    }
  }

  .btn {
    position: relative;

    overflow: hidden;
    cursor: pointer;

    text-transform: uppercase;
    font-family: ${(props) => !props.isRTL && "Aventa"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    letter-spacing: -1px;

    .btn__text-dynamic,
    .btn__text-dynamic-inner {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;

      transition: all ease 0.5s;
    }

    .btn__text-dynamic {
      background-color: #fff;
      color: #222;

      overflow: hidden;
    }

    &:hover {
      .btn__text-dynamic {
        transform: translateX(-100%);
      }
      .btn__text-dynamic-inner {
        transform: translateX(100%);
      }
    }
  }

  .btn--animation-from-right {
    &:hover {
      .btn__text-dynamic {
        transform: translateX(100%);
      }
      .btn__text-dynamic-inner {
        transform: translateX(-100%);
      }
    }
  }
  button.join {
    display: block;
    margin: 70px -15px 90px auto;
    color: var(--text-primary);
    background: none;
    border: 1px solid var(--text-primary);
    font-family: ${(props) => !props.isRTL && "Aventa"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    font-weight: 500;
    font-size: 20px;
    padding: 12px 18px;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    border-radius: 40px;
  }

  .join-us-btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 100px;

    button {
      border-radius: 25px;
      display: flex;
      align-items: center;
      gap: 20px;
      border: 1px solid #fff;
      padding: 10px 18px;
      background-color: transparent;
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      letter-spacing: 3px;
      text-transform: uppercase;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.2s ease-in-out;
      z-index: 1;
      color: #fff;

      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: var(--text-primary);
        right: 43px;
      }
    }
  }
  /* Small */
  @media only screen and (min-width: 768px) {
    p {
      font-size: calc(var(--p-lg) - 3px);
      line-height: var(--line-height-p-lg);
    }
    .team-heading {
      .team-paragraph {
        max-width: 500px;
        p {
          font-size: 1rem;
        }
      }
      .new_team-typography {
        .typography_first-line {
          h1 {
            font-size: 2.5rem;
            line-height: 106%;
          }

          span {
            width: 80px;
          }
        }

        .typography_second-line {
          h1 {
            font-size: 2.5rem;
            line-height: 106%;
          }
        }
        .typography_third-line {
          h1 {
            font-size: 2.5rem;
            line-height: 106%;
          }

          span {
            width: 80px;
          }
        }
      }
    }
  }
  /* Medium */
  @media only screen and (min-width: 992px) {
    .team-heading {
      .team-paragraph {
        max-width: 690px;
      }
      .new_team-typography {
        .typography_first-line {
          h1 {
            font-size: 3.5rem;
          }

          span {
            width: 120px;
          }
        }

        .typography_second-line {
          h1 {
            font-size: 3.5rem;
          }
        }
        .typography_third-line {
          h1 {
            font-size: 3.5rem;
          }

          span {
            width: 120px;
          }
        }
      }
    }
  }
`
export default StyledTeamSection
