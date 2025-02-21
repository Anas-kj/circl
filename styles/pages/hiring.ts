import styled from "styled-components"

const StyledHiring = styled.div`
  .hero {
    min-height: calc(100vh - 132px);
    display: flex;
    align-items: center;

    h1 {
      font-family: var(--secondary-font);
      font-weight: 400;
      font-size: 40px;
      line-height: 42px;

      span {
        display: block;
      }
    }
  }

  .services-section {
    padding-top: 100px;
    padding-bottom: 100px;
    min-height: 100vh;
  }

  .services {
    padding-right: 35px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;
  }

  .service {
    border-top: 1px solid var(--text-primary);
    padding: 25px 35px 0 0;
  }

  @media only screen and (min-width: 778px) {
    .hero {
      h1 {
        font-size: 73px;
        line-height: 73px;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .hero {
      h1 {
        max-width: 980px;
      }
    }

    .services {
      padding-right: unset;
      gap: 80px;
    }

    .what-we-offer {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
`

export default StyledHiring
