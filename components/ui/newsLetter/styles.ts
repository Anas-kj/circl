// Styled component import
import styled from "styled-components"

// Types

export const Wrapper = styled.div`
  position: relative;
  background-color: black;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-bottom: 100px;
  color: white;

  label.newsletter-title {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    display: block;
  }

  label.newsletter-title:nth-child(2) {
    margin-bottom: 20px;
  }

  .newsletter-message {
    color: #2d2c29;
  }

  .newsletter-form {
    margin-top: 30px;
  }

  .newsletter-input {
    display: flex;
    gap: 25px;
    .mail-input {
      flex-grow: 2;
      border-radius: 0;
      background: none;
      color: white;
      border: none;
      margin-bottom: 15px;
      font-size: 14px;
      font-family: var(--primary-font);
      border-bottom: 1px solid white;
      padding: 10px 0;
      transition: 0.3s;
      letter-spacing: 1px;
      margin-right: 25px;
      outline: none;

      :focus {
        text-indent: 10px;
      }
      &::placeholder {
        color: white;
        opacity: 0.46;
      }
    }

    .mail-button {
      border: 1px solid white;
      border-radius: 28px;
      font-size: 14px;
      font-family: var(--primary-font);
      letter-spacing: 1px;
      cursor: pointer;
      color: white;
      padding: 10px 20px;
      background-color: transparent;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: all 0.2s ease-in-out;
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 0%;
        top: 0;
        left: 0;
        transition: all 0.5s ease-in-out;
        background-color: white;
        z-index: -1;
      }
      &:hover {
        color: black;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }

  .newsletter-message {
    opacity: 0;
    padding: 3px 10px 2px 10px;
    border-radius: 20px;
    font-size: 0.9rem;
    background: white;
    margin-top: 15px;
    max-width: fit-content;
  }

  .show-message {
    animation: show 4s cubic-bezier(0.15, 0.83, 0.66, 1) forwards;
  }

  @keyframes show {
    0% {
      opacity: 0;
      bottom: 10px;
    }
    10% {
      opacity: 1;
      bottom: 30px;
    }
    90% {
      opacity: 1;
      bottom: 30px;
    }
    100% {
      opacity: 0;
      bottom: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    label.newsletter-title {
      font-size: 2rem;
    }

    .newsletter-form {
      margin-top: 40px;
    }

    .newsletter-input {
      .mail-input {
        min-width: 400px;
      }
    }
  }

  @media screen and (min-width: 992px) {
    label.newsletter-title {
      font-size: 2.2rem;
    }

    .newsletter-form {
      margin-top: 50px;
    }
  }
`
