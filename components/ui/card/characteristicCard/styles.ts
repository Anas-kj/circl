import styled from "styled-components"

const StyledCharacteristicCard = styled.div`
  max-width: 300px;
  margin-bottom: 60px;

  h5 {
    font-size: 20px;
    font-family: "Trap", sans-serif;
    font-weight: 400;
    margin-bottom: 18px;
  }

  p {
    font-family: "Trap", sans-serif;
    font-size: var(--p-mb);
    line-height: var(--line-height-p-mb);
  }

  @media only screen and (min-width: 768px) {
    max-width: 470px;
    margin-bottom: unset;
    flex: 0 0 auto;

    &:not(:last-child) {
      margin-right: 60px;
    }

    h5 {
      font-size: 32px;
    }

    p {
      font-size: var(--p-lg);
      line-height: var(--line-height-p-lg);
    }
  }
`

export default StyledCharacteristicCard
