import styled from "styled-components"

interface Props {
  isRTL: boolean
}

const StyledBlog = styled.section<Props>`
  padding-top: 200px;
  padding-bottom: 100px;

  .slick-arrow {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: unset;
    bottom: -14%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    right: 15%;
    left: unset;
    transform: translate(0, -50%) rotate(45deg);

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      border-width: 0.5vmin 0.5vmin 0 0;
      border-style: solid;
      border-color: #38f200;
      transition: 0.2s ease;
      display: block;
      transform-origin: 100% 0;
    }
  }
  #prev {
    right: 20%;
    left: unset;
    transform: translate(0, -50%) rotate(-135deg);
  }
  #blog-container-posts {
    max-width: 100vw;
  }
  .center-post {
    border: 1px solid #38f200;
  }
  .blog-info {
    margin-bottom: 70px;
    overflow: hidden;
    .sub-heading {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #38f200;
      text-transform: capitalize;
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-size: 18px;
      margin-bottom: 22px;

      h5:first-child {
        font-style: italic;
        font-weight: 400;
      }

      h5:last-child {
        font-weight: 500;
      }
    }

    .blog-heading-info {
      & > p {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-size: 28px;
        font-weight: 400;
        margin-bottom: 25px;
      }

      .content {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-size: 15px;

        p {
          font-weight: 200;
          margin-bottom: 25px;
        }

        a {
          display: flex;
          align-items: center;
          gap: 15px;
          font-weight: 500;
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    padding-top: 250px;
    padding-bottom: 150px;
    .slick-arrow {
      bottom: -20%;
    }
    .blog-info {
      margin-bottom: 100px;

      .sub-heading {
        font-size: 20px;
        margin-bottom: 45px;
      }

      .blog-heading-info {
        display: flex;
        align-items: start;
        justify-content: space-between;

        & > p {
          flex-basis: 45%;
          font-size: 45px;
          line-height: 58px;
          margin-bottom: unset;
        }

        .content {
          flex-basis: 38%;
          font-size: 17px;

          p {
            line-height: 28px;
            margin-bottom: 40px;
          }

          svg {
            transform: ${(props) => props.isRTL && "rotate(-180deg)"};
          }
        }
      }
    }
  }
`

export default StyledBlog
