// Styled component import
import styled from "styled-components"

interface Props {
  isRTL: boolean
}

// Types
const StyledHeader = styled.header<Props>`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.31) 0%,
    rgba(0, 0, 0, 0.12) 35%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  color: var(--text-primary);
  font-family: ${(props) => !props.isRTL && "Aventa"};
  font-family: ${(props) => props.isRTL && "Almarai"};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: -120px;
  width: 100vw;
  max-width: 100%;
  /* Container */
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* .logo,
  .logo > a {
    cursor: pointer;
    width: 204px;
    height: 100%;
  } */
  .contact-us-header-btn {
    padding-bottom: 8px;
    padding-top: 8px;
  }
  .btn {
    background-color: transparent;
    cursor: pointer;
    border: none;

    .light-icon {
      fill: white;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--body-bg);
    z-index: 5;
    padding-top: 50px;
    padding-bottom: 20px;
    text-transform: capitalize;
    transform: translateY(100%);

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .hamburger-menu {
        margin-left: 60px;
      }

      .back {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
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
    }

    .cyber-description {
      margin-bottom: 40px;

      hr {
        margin-bottom: 40px;
      }
    }

    .main {
      ul {
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-size: 34px;
      }

      li {
        position: relative;
        /* padding: 10px 0px; */
        cursor: pointer;
        width: max-content;
        /* &::after {
          content: "";
          position: absolute;
          width: 60%;
          height: 1px;
          background:  var(--text-primary);
          left: 0;
          bottom: 0;
        } */
      }
      li:after {
        content: "";
        display: block;
        height: 3px;
        width: 0px;
        background: transparent;
        transition: width 0.5s ease, 0.5s ease;
      }
      li:hover:after {
        width: 100%;
        background: white;
      }
    }

    .footer {
      .header-social {
        display: flex;

        li {
          width: max-content;
          margin-right: 20px;
        }
        li:after {
          content: "";
          display: block;
          height: 1px;
          width: 0px;
          background: transparent;
          transition: width 0.5s ease, 0.5s ease;
        }
        li:hover:after {
          width: 100%;
          background: gray;
        }
      }
    }
  }
  .header-content_container {
    .nav-content_left {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      align-content: center;
      /* background-color: red; */

      /* .languages {
        span {
          font-weight: 400;
        }
      }  */

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        & > svg {
          height: 20px;
        }
      }
      .logo-symbol {
        display: flex;
        justify-self: start;
        max-height: 30px;
        cursor: pointer;
        position: relative;

        &::after {
          position: absolute;
          width: 1px;
          height: 20px;
          top: 50%;
          transform: translateY(-50%);
          right: ${(props) => !props.isRTL && "-30px"};
          left: ${(props) => props.isRTL && "-30px"};
          background-color: var(--text-primary);
        }
      }

      .hamburger-menu {
        justify-self: end;
        margin-left: 20px;
      }
    }

    .logo-lang {
      display: flex;
      align-items: center;
      gap: 60px;
    }

    .nav-left {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 60px;
    }

    .languages {
      display: none;
      gap: 18px;

      & > li {
        cursor: pointer;
      }
    }
  }

  /* Small */
  @media only screen and (min-width: 768px) {
    .header-content_container {
      .nav-content_left {
        .logo-symbol {
          &::after {
            content: "";
          }
        }
      }

      .languages {
        display: flex;
        align-items: center;

        li.selected {
          font-weight: 600;
          transform: scale(1.15);
          transform-origin: center;
          padding-bottom: 1px;
        }
      }
    }

    .nav-list {
      align-items: center;

      .music {
        display: flex;
        align-items: center;
        cursor: pointer;

        .music-logo {
          display: inline-block;
          height: 15px;
          width: 2px;
          background-color: var(--text-primary);
          margin-right: 20px;
          position: relative;
          display: flex;
          align-items: end;

          &::before,
          &::after {
            content: "";
            position: absolute;
            background-color: var(--text-primary);
            width: 2px;
          }

          &::before {
            height: 12px;
            right: 5px;
          }

          &::after {
            height: 8px;
            left: 5px;
          }
        }
      }

      /* .languages {
        display: flex;
        position: relative;
        margin-right: 10px;
        margin-left: 30px;

        &::before {
          content: "";
          position: absolute;
          top: 3px;
          left: -7px;
          width: 2px;
          height: 80%;
          background-color: var(--text-primary);
        }

        li {
          margin-right: 15px;
          font-weight: 300;
          opacity: 0.6;
        }

        li.selected {
          font-weight: 500;
          opacity: 1;
        }
      }
    } */

      .overlay {
        padding-bottom: 60px;

        & > div {
          width: 750px;
        }

        .header {
          .hamburger-menu {
            display: none;
          }

          .back {
            font-size: 24px;
          }
        }

        .main {
          ul {
            font-size: 55px;
          }
        }

        .footer {
          .header-social {
            max-width: 35%;
          }
        }
      }
    }
    .overlay {
      /* background-color: red; */
      .logo svg {
        height: 30px;
        width: 30px;
        cursor: pointer;
      }
      .cyber-description {
        margin-bottom: 60px;
        hr {
          width: 320px;
          margin-bottom: 60px;
          opacity: 1;
        }
        p {
          width: 270px;
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
        }
      }
      .main {
        /* position: absolute;
        right: 80px;
        top: 240px; */
        li {
          padding: 0;
        }
      }
      /* .footer {
        position: absolute;
        top: 240px;
        left: 80px;

        .gsap-stagger {
        }
      } */
      & > div {
        width: 1170px;
      }
    }
    /* Medium */
    @media only screen and (min-width: 992px) {
      .header-content_container {
        .nav-content_left {
          .logo {
            a > svg {
              height: 30px;
            }
          }
        }

        .nav-left {
          gap: 60px;
        }
      }
      /* .logo,
    .logo > a {
      width: 194px;
    } */
      .overlay {
        & > div {
          width: 970px;
        }

        main {
          li {
            &::after {
              width: 40%;
            }
          }
        }
      }
    }

    /* Large */
    @media only screen and (min-width: 1200px) {
      .overlay {
        .logo svg {
          height: 30px;
          width: 30px;
        }
        .cyber-description {
          margin-bottom: 60px;
          hr {
            width: 320px;
            margin-bottom: 60px;
            opacity: 1;
          }
          p {
            width: 270px;
          }
        }
        .main {
          /* position: absolute;
        right: 80px;
        top: 240px; */
          li {
            padding: 0;
          }
        }
        /* .footer {
        position: absolute;
        top: 240px;
        left: 80px;

        .gsap-stagger {
        }
      } */
        & > div {
          width: 1170px;
        }
      }
    }

    /* X Large */
    @media only screen and (min-width: 1400px) {
      .overlay {
        & > div {
          width: 1320px;
        }
      }
    }
  }
`

export default StyledHeader
