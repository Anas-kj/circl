import styled from "styled-components"

const StyledNav = styled.nav`
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.31) 0%,
      rgba(0, 0, 0, 0.12) 35%,
      rgba(0, 0, 0, 0) 100%
    );
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 400;
    font-family: "Rogan", sans-serif;
    padding-top: 30px;
    padding-bottom: 30px;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    width: 100%;
    z-index: 100;

    /* Container */
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-links {
      display: flex;
      align-items: center;

      li:not(:last-child) {
        margin-right: 35px;
      }

      .opacity-7 {
        opacity: 0.7;
      }

      .opacity-5 {
        opacity: 0.5;
      }

      .opacity-4 {
        opacity: 0.4;
      }

      .opacity-3 {
        opacity: 0.3;
      }
    }

    .company {
      & > span {
        font-weight: 600;
      }
    }
  }
`

export default StyledNav
