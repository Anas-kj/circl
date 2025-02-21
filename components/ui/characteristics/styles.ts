import styled from "styled-components"

const StyledCharacteristics = styled.section`
  padding-top: 200px;
  padding-bottom: 280px;

  .characteristics-heading {
    margin: 100px auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    .sub-heading {
      font-family: "Trap";
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

    .new_characteristics-typography {
      .typography_first-line {
        h1 {
          font-family: "Aventa", sans-serif;
          font-weight: 400;
          font-size: 1.5rem;
          white-space: nowrap;
          font-style: italic;
        }
        .inter-italic {
          font-family: "Aventa", sans-serif;
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
        /* flex-wrap: wrap; */
        /* column-gap: 10px; */
        gap: 15px;
        h1 {
          font-family: "Aventa", sans-serif;
          font-weight: 400;
          font-size: 1.5rem;
          white-space: nowrap;
          font-style: italic;
        }
        .inter-italic {
          font-family: "Aventa", sans-serif;
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
          font-family: "Aventa", sans-serif;
          font-weight: 400;
          font-size: 1.5rem;
          white-space: nowrap;
          font-style: italic;
        }
        .inter-italic {
          font-family: "Aventa", sans-serif;
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

  button {
    display: block;
    margin: 110px auto 110px;
    color: var(--text-primary);
    background: none;
    border: 1px solid var(--text-primary);
    font-family: "Aventa", sans-serif;
    font-weight: 500;
    font-size: 25px;
    padding: 12px 15px;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
  }

  .characteristics-items {
    padding: 0 20px;
    margin-bottom: 100px;
  }

  .characteristics-items + div {
    border-bottom: 1px solid var(--text-primary);
  }

  @media only screen and (min-width: 768px) {
    .characteristics-items {
      padding: 0 30px;
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;

      /* Hide scrollbar for IE, Edge and Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      /* Hide scrollbar for Chrome, Safari and Opera */
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .characteristics-heading {
      .new_characteristics-typography {
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
    /* .characteristics-heading {
      span.sub-heading {
        font-size: var(--sub-heading-lg);
      }

      span.line {
        margin-bottom: 15px;
      }

      p {
        font-size: var(--heading-lg);
        line-height: 75px;
        margin-top: 50px;
      }
    } */
    .characteristics-heading {
      .new_characteristics-typography {
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

export default StyledCharacteristics
