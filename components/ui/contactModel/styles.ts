// Styled component import

interface Props {
  isRTL: boolean
}

import styled from "styled-components"
const StyledContactModel = styled.div<Props>`
  #loading-spinner {
    animation: loading-spinner-spin 2s linear infinite;
    will-change: transform;
    margin-left: auto;
    margin-bottom: 15px;
    line-height: 44px;
  }

  @keyframes loading-spinner-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  //  ---- Small ----
  #loading-circle {
    stroke-dasharray: 105;
    stroke-dashoffset: 105;
    stroke-linecap: round;
    animation: loading-spinner-small 1.7s cubic-bezier(0.445, 0.05, 0.55, 0.95)
      infinite;
    transform: translateZ(0);
    transform-origin: center;
    will-change: stroke-dashoffset;
  }

  @keyframes loading-spinner-small {
    0% {
      stroke-dashoffset: 95;
      transform: scaleY(1);
    }
    49.99% {
      stroke-dashoffset: 0;
      transform: scaleY(1);
    }
    50% {
      stroke-dashoffset: 0;
      transform: scaleY(-1) rotate(25deg);
    }
    100% {
      stroke-dashoffset: 95;
      transform: scaleY(-1) rotate(-32deg);
    }
  }
  .model-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    color: black;
    padding-top: 25px;
    padding-bottom: 90px;
    top: 0;
    left: 0;
    overflow-y: auto;
    *:focus {
      outline: none;
    }

    .contact-model-navigation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 45px;
    }
    .logo-symbol {
      svg {
        fill: black;
      }
    }
    .back {
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-size: 20px;
      padding: 10px;
      width: max-content;
      cursor: pointer;
      position: relative;

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
        background: black;
      }
    }
    .header {
      display: flex;
      flex-direction: column-reverse;
    }
    .dropdown {
      position: relative;
      &.active::before {
        transform: rotate(135deg);
      }
      &::before {
        content: "";
        position: absolute;
        top: 10px;
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        right: ${(props) => (!props.isRTL ? "10px" : "unset")};
        left: ${(props) => (props.isRTL ? "10px" : "unset")};
        width: 10px;
        height: 10px;
        z-index: 1000;
        border: 2px solid black;
        border-top: none;
        border-right: none;
        transform: rotate(-45deg);
        transition: 0.5s ease;
        pointer-events: none;
      }
      .text-box {
        border: none;
        outline: none;
        position: relative;
        cursor: pointer;
        border: unset;
        font-family: ${(props) => !props.isRTL && "Aventa"};
        font-family: ${(props) => props.isRTL && "Almarai"};
        font-weight: 500;
      }
      .options {
        position: absolute;
        max-height: 0px;
        top: 40px;
        width: 100%;
        background-color: white;
        box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);
        color: black;
        overflow: hidden;
        border-bottom: 1px solid black;
        transition: all 0.2s ease-out;
        &.active {
          max-height: 300%;
          transition: all 0.2s ease-in;
        }
        div {
          padding: 10px;
          font-size: 12px;
          cursor: pointer;
          transition: 0.5s ease;
          &:hover {
            background-color: #dfdfdf;
            color: black;
          }
        }
      }
    }
    h2 {
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-weight: 400;
      font-size: 24px;
      line-height: 106%;
      margin-bottom: 30px;
    }
    p {
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
    }

    label {
      height: 20px;
    }

    input,
    textarea,
    select {
      border-radius: 0;
      background: none;
      color: black;
      border: none;
      margin-bottom: 15px;
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-size: 14px;
    }

    input:not([type="submit"]),
    textarea {
      width: 100%;
    }

    input:not([type="file"]) {
      border-bottom: 1px solid black;
    }

    .form-item {
      max-width: 100%;
      margin: 5px 0;
      height: 100%;
    }

    .text-danger {
      color: red;
    }

    .form-item:last-child {
      position: relative;
      display: flex;
      margin-top: 10px;
    }
    input[type="submit"] {
      font-family: ${(props) => !props.isRTL && "Aventa"};
      font-family: ${(props) => props.isRTL && "Almarai"};
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 44px;
      text-transform: capitalize;
      cursor: pointer;
      width: fit-content;
      align-self: flex-end;
    }
    input:not([type="submit"]) {
      padding: 10px 0;
      transition: 0.3s;
    }

    textarea {
      border-bottom: 1px solid black;
      padding: 10px 0px;
      margin-top: 10px;
      min-height: 120px;
      resize: none;
      transition: 0.3s;
    }
    select {
      border-bottom: 1px solid black;
      resize: none;
      padding: 10px 0px;
      width: 100%;
      opacity: 0.45;
    }

    @media only screen and (min-width: 768px) {
      padding-top: 100px;
      .form-item {
        max-width: 100%;
      }
    }

    @media only screen and (min-width: 992px) {
      h2 {
        font-size: 36px;
      }

      .form-item {
        max-width: 100%;
      }

      textarea {
        min-height: 150px;
      }
    }
  }

  form {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    .checkboxes {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      gap: 10%;
      .checkbox-item {
        display: flex;
        align-items: center;
        cursor: pointer;
        & > input {
          margin: 0px;
          margin-right: ${(props) => (!props.isRTL ? "10px" : "unset")};
          margin-left: ${(props) => (props.isRTL ? "3px" : "unset")};
          padding: 0px;
          width: 20px;
          height: 20px;
          accent-color: black;
        }
      }
    }

    .form-item {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }

    .contact-duologue {
      display: flex;
      flex-direction: column;
      .contact {
        margin-bottom: 30px;
      }
    }
    .last-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      & > input {
        align-self: flex-end;
      }
    }
  }
  .success {
    display: flex;
    gap: 10px;
    font-family: ${(props) => !props.isRTL && "Aventa"};
    font-family: ${(props) => props.isRTL && "Almarai"};
    margin-bottom: 15px;
    line-height: 44px;
    svg {
      fill: #23d80a;
    }
  }

  @media only screen and (min-width: 992px) {
    .contact-model-navigation {
      display: unset;
      align-items: unset;
      justify-content: unset;
      margin-bottom: unset;
    }
    .logo-symbol {
      display: none;
    }
    .model-overlay {
      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      form {
        .contact-duologue {
          flex-direction: row;
          align-items: baseline;
          gap: 10%;
        }
        .last-item {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          & > input {
            margin-left: auto;
          }
        }
      }
    }
  }
`
export default StyledContactModel
