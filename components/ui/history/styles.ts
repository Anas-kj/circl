// Styled component import
import styled from "styled-components"

// Types
interface Props {
  isRTL: boolean
}

const StyledHistory = styled.section<Props>`
  position: relative;
  background-color: #0f0f0f;
  background-color: var(--body-bg);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 70px;
  overflow: hidden;

  .timeline {
    width: 100%;
    height: 250px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .timeline-line {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      z-index: 5;
      .timeline-line-progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 10%;
        height: 100%;
        background-color: #fff;
        z-index: 6;
      }
    }
    .timeline-events {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      .timeline-event {
        cursor: pointer;
        top: 70%;
        transform: translate(-50%);
        position: absolute;
        width: max-content;
        height: 10px;
        p {
          opacity: 0.3;
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-style: normal;
          font-weight: 300;
          font-size: 1rem;
          line-height: var(--line-height-p-mb);
          letter-spacing: 0.03em;
          color: var(--text-primary);
          height: 150px;
          text-align: center;
        }
        p.active {
          opacity: 1;
          font-weight: 500;
        }
      }
    }
    .timeline-indicators {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      .timeline-indicator {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: #23d80a;
        width: 2px;
        height: 15px;
      }
    }

    .item-1 {
      left: 10%;
    }
    .item-2 {
      left: 35%;
    }
    .item-3 {
      left: 85%;
    }
  }

  .history-heading {
    text-align: center;

    margin: 100px auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    span.sub-heading {
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

    .new_history-typography {
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
  .background-image {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: url("/assets/map.png");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  span {
    font-family: ${(props) => !props.isRTL && "Aventa"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1fbe00;
  }

  p {
    font-family: ${(props) => !props.isRTL && "Aventa"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    font-style: normal;
    font-weight: 300;
    font-size: var(--p-mb);
    line-height: var(--line-height-p-mb);
    letter-spacing: 0.03em;
    color: var(--text-primary);
    text-align: center;
    height: max-content;
  }

  ul {
    margin: 8px 0 55px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    li {
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 1.04;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      margin-bottom: 18px;
      width: max-content;
      color: var(--text-primary);
      position: relative;

      cursor: pointer;
      /* TODO : FIX THIS */
      button {
        border: none;
        outline: none;
        color: var(--text-primary);
        background-color: transparent;
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-style: normal;
        cursor: pointer;
        font-weight: inherit;
        font-size: inherit;
        line-height: 1.04;
        letter-spacing: 0.05em;
        text-transform: capitalize;
        margin-bottom: 18px;
        color: var(--text-primary);
      }
      &:hover::after {
        // add a green arrow
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;

        border-bottom: 13px solid #23d80a;
        z-index: 10;
        animation: arrow-animation 1s infinite;
      }
      @keyframes arrow-animation {
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
    }

    li.active {
      font-weight: 500;
      font-size: 22px;
      transition: all 0.3s ease-in-out;
      position: relative;
      //
      &::after {
        // add a green arrow
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;

        border-bottom: 13px solid #23d80a;
        z-index: 10;
        animation: unset;
      }
    }

    .opacity-9 {
      opacity: 0.9;
    }
    .opacity-7 {
      opacity: 0.7;
    }

    .opacity-5 {
      opacity: 0.5;
    }

    .opacity-3 {
      opacity: 0.3;
    }
  }
  .hist-pg {
    max-width: 350px;
    font-family: ${(props) => !props.isRTL && "Aventa"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 166%;
    text-align: center;
  }
  .history-section-select {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Small */
  @media only screen and (min-width: 768px) {
    .hist-pg {
      max-width: 500px;
    }
    p {
      font-size: calc(var(--p-lg) - 3px);
      line-height: var(--line-height-p-lg);
      text-align: center;
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    .timeline {
      max-width: 500px;
    }
    .history-heading {
      .new_history-typography {
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
    min-height: calc(100vh - 250px);
    background-position: right center;
    .hist-pg {
      max-width: 690px;
    }
    ul {
      display: flex;
      align-items: center;

      li {
        font-size: 24px;
        font-weight: 300;
        margin-right: 45px;
      }
    }

    p {
      font-size: 24px;
    }
    .timeline {
      max-width: 690px;
    }
    .history-heading {
      .new_history-typography {
        .typography_first-line {
          h1 {
            font-size: 3.5rem;
            line-height: 106%;
          }

          span {
            width: 120px;
          }
        }

        .typography_second-line {
          h1 {
            font-size: 3.5rem;
            line-height: 106%;
          }
        }
        .typography_third-line {
          h1 {
            font-size: 3.5rem;
            line-height: 106%;
          }

          span {
            width: 120px;
          }
        }
      }
    }
  }
`
export default StyledHistory
