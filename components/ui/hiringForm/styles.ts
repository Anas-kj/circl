import styled from "styled-components"

const StyledHiringForm = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;

  h2 {
    font-family: var(--secondary-font);
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 30px;
  }

  input,
  textarea {
    border-radius: 0;
    background: none;
    color: var(--text-primary);
    border: none;
    margin-bottom: 15px;
    font-family: var(--primary-font);
    font-size: 14px;
  }

  input:not([type="file"]) {
    border-bottom: 1px solid var(--text-primary);
  }

  input[type="submit"] {
    cursor: pointer;
  }

  input:not([type="submit"]),
  textarea {
    width: 100%;
  }

  .form-item.submit {
    position: relative;
    margin-top: 10px;
  }

  input[type="submit"] {
    position: absolute;
    right: 0;
    cursor: pointer;
  }

  input:not([type="submit"]):not([type="file"]) {
    padding: 10px 0;
    transition: 0.3s;

    :focus {
      text-indent: 10px;
    }
  }

  textarea {
    border: 1px solid var(--text-primary);
    padding: 10px;
    margin-top: 10px;
    height: 120px;
    resize: none;
  }

  .file {
    flex: 1;
    height: 120px;
    border: 1px solid var(--text-primary);
    position: relative;
    overflow: hidden;

    span {
      color: #6d6d6d;
      font-family: var(--primary-font);
      font-size: 14px;
      font-weight: 500;
      display: block;
    }

    input,
    span {
      padding: 10px;
    }

    input {
      width: fit-content;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-37%, -50%);
    }
  }

  @media only screen and (min-width: 768px) {
    .form-item:not(.file):not(.message):not(.submit) {
      max-width: 80%;
    }

    form .wrapper {
      margin-top: 20px;
      display: flex;
      gap: 40px;
    }

    .file {
      flex: 1;
      height: 200px;
    }

    .message {
      flex: 2;

      textarea {
        height: 200px;
        margin-top: unset;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 73px;
      max-width: 988px;
    }

    .form-item:not(.file):not(.message):not(.submit) {
      max-width: 65%;
    }
  }
`

export default StyledHiringForm
