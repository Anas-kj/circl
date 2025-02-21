// Styled component import
import styled from "styled-components"

// Types
interface Props {
  isRTL: boolean
}

const StyledAccordionItem = styled.li<Props>`
  transition: all 0.3s ease-in-out;
  font-family: ${(props) => !props.isRTL && "Aventa"};
  font-family: ${(props) => props.isRTL && "Almarai"};
  .accordion-title {
    font-family: ${(props) => !props.isRTL && "Aventa"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
    color: #1fbe00;
    &:hover,
    &.active {
      background-color: #1fbe00;
      color: white;
      button {
        color: white;
      }
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--text-primary);
      padding-top: 30px;
      padding-bottom: 30px;
    }

    button {
      background: none;
      border: none;
      font-size: 28px;
      color: #1fbe00;
    }
  }
  .hover-reveal {
    position: absolute;
    width: 150px;
    height: 210px;
    top: 50%;
    left: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    overflow: hidden;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.5s ease-out;
  }

  .hover-reveal img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    transition: transform 0.4s ease-out;
  }

  .accordion-content {
    padding: 20px 0;

    .member {
      font-weight: 400;
      position: relative;
      padding: 35px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      position: relative;
      .white-line {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 10%;
        height: 1px;
        background-color: var(--text-primary);
      }
    }

    .name {
      grid-column: 1/2;
    }

    .role {
      grid-column: 2/3;
      opacity: 0.6;
    }
  }

  /* Small */
  @media only screen and (min-width: 768px) {
    .accordion-content {
      .member {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    .hover-reveal {
      width: 300px;
      height: 360px;
    }
  }
`
export default StyledAccordionItem
