// Styled component import
import styled from "styled-components"

// Types
interface Props {
  isRTL: boolean
}

const StyledContactUs = styled.section<Props>`
  position: relative;
  overflow: hidden;
  /* background-color: white;
  background-image: url("assets/map.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 70px;
  width: 100%;
  height: 100vh;
  color: #fff;

  .inter-italic {
    font-family: ${(props) => !props.isRTL && "Aventa"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    font-weight: 400;
    font-style: italic;
  }
  .contactUs-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .contactUs-heading {
      text-align: center;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin-bottom: 50px;
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

      .new_contactUs-typography {
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
      }
    }
  }
  /* Small */
  @media only screen and (min-width: 768px) {
    .contactUs-container {
      .contactUs-heading {
        .new_contactUs-typography {
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
        }
      }
    }
  }

  /* Medium */
  @media only screen and (min-width: 992px) {
    .contactUs-container {
      .contactUs-heading {
        .new_contactUs-typography {
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
        }
      }
    }
  }
`
export default StyledContactUs
