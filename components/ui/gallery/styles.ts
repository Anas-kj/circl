// Styled component import
import styled from "styled-components"

// Types
interface Props {
  isRTL: boolean
}

const StyledGallery = styled.section<Props>`
  background-color: var(--body-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  margin-top: 200px;
  margin-bottom: 200px;

  .back {
    font-family: "Aventa";
    font-size: 20px;
    padding: 10px;
    width: max-content;
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

  .gallery-heading {
    text-align: center;
    padding: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    max-width: 820px;

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

    .new_gallery-typography {
      margin-bottom: 30px;
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

    .gallery-paragraph {
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 166%;
      max-width: 350px;
    }
  }

  .title {
    width: 100px;
    height: 50px;
    background-color: red;
  }

  .gallery-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    gap: 20px;
  }
  .gallery-contact-btn {
    margin-top: 100px;
    button > svg {
      transform: rotate(-45deg);
    }
  }

  .image {
    img {
      max-width: 100%;
      min-width: 100%;
      object-fit: cover;
      min-height: 380px;
      max-height: 380px;
    }
  }

  .img-9 {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .gallery-heading {
      margin-bottom: 50px;
      .gallery-paragraph {
        max-width: 500px;
        font-size: 17px;
        margin-top: 45px;
      }
      .new_gallery-typography {
        margin-bottom: unset;
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

    .gallery-container {
      gap: 30px;
      grid-template-columns: repeat(2, minmax(250px, 1fr));
    }
  }
  /* Medium */
  @media only screen and (min-width: 992px) {
    .gallery-heading {
      .new_gallery-typography {
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

      .gallery-paragraph {
        max-width: 690px;
        font-size: 17px;
        margin-top: 45px;
      }
    }
  }

  /* Large */
  @media only screen and (min-width: 1200px) {
    .gallery-container {
      gap: 40px;
      grid-template-columns: repeat(3, minmax(300px, 1fr));
    }

    .image {
      img {
        max-width: 100%;
        min-width: 100%;
        min-height: 550px;
        max-height: 550px;
      }
    }

    .img-9 {
      display: unset;
    }
  }
`
export default StyledGallery
