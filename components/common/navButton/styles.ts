import styled from "styled-components"
interface Props {
  isRTL: boolean
}

const StyledNavButton = styled.div<Props>`
  display: none;

  @media only screen and (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border-radius: 25px;
      display: flex;
      align-items: center;
      gap: 20px;
      border: 1px solid #fff;
      padding: 10px 18px;
      background-color: transparent;
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      letter-spacing: 3px;
      text-transform: uppercase;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.2s ease-in-out;
      z-index: 1;
      color: #fff;
      line-height: 22px;

      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: var(--text-primary);
        transition: all 0.45s ease-in-out;
        right: ${(props) => !props.isRTL && "43px"};
        left: ${(props) => props.isRTL && "43px"};
      }

      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 0%;
        top: 0;
        left: 0;
        transition: all 0.45s ease-in-out;
        background-color: #fff;
        z-index: -1;
      }

      svg {
        transform: ${(props) => props.isRTL && "rotate(-90deg)"};
      }

      svg > path {
        transition: all 0.45s ease-in-out;
      }

      &:hover {
        color: #000;

        svg > path {
          stroke: #000;
        }
      }

      &:hover::after {
        width: 100%;
      }

      &:hover::before {
        background-color: #000;
      }
    }
  }
`

export default StyledNavButton
