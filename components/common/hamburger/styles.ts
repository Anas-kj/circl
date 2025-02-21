import styled from "styled-components"

interface Props {
  isRTL: boolean
}

const StyledHamburger = styled.div<Props>`
  cursor: pointer;
  padding: 10px 0;
  width: fit-content;
  position: relative;

  span {
    display: block;
    height: 1px;
    width: 43px;
    background-color: var(--text-primary);
    transition: 0.3s;
    text-align: right;
  }

  :hover {
    span:first-child {
      transform: translateX(-5px);
    }

    span:last-child {
      transform: translateX(5px);
    }
  }

  span:first-child {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 992px) {
    position: relative;

    &::after {
      content: "";
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
`

export default StyledHamburger
