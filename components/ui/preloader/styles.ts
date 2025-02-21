import styled from "styled-components"

const StyledPreloader = styled.div`
  .black-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    z-index: 99999999999;
  }
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    z-index: 999;
    overflow: hidden;
    background-color: transparent;

    .top {
      position: relative;
      top: 0;

      width: 100vw;
      height: 70vh;
      max-width: 100%;
      z-index: 9999999;
      overflow: hidden;
      background-color: black;
      .changing {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        width: 100%;
        padding-bottom: 15px;
        .second-line {
          display: flex;
          gap: 15px;
          h1 {
            font-size: 16px;
          }
          h1:nth-child(1),
          h1:nth-child(3) {
            font-family: "Aventa";
            font-style: italic;
            font-weight: 440;
          }
          h1:nth-child(2) {
            font-family: "Aventa";
            font-style: normal;
            font-weight: 500;
          }
        }
        .first-line {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: end;
          align-items: center;
          overflow: hidden;
          padding-bottom: 5px;
          .first-section {
            display: flex;

            .rotator {
              position: relative;
              vertical-align: text-bottom;
              display: flex;
              justify-content: space-between;
              gap: 15px;
              .the_Line {
                display: block;
                height: 1px;
                width: 50px;
                background-color: white;
                align-self: center;
              }
              .spans_container {
                width: 60px;
                position: relative;
                span {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  opacity: 1;
                  display: block;
                  font-family: "Aventa";
                  font-style: italic;
                  font-weight: 440;
                  font-size: 16px;
                  text-align: right;
                }
              }
              .the_future {
                h1 {
                  font-family: "Aventa";
                  font-style: italic;
                  font-weight: 440;
                  white-space: nowrap;
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
    }
    .logo_container {
      position: absolute;
      /* background-color: red; */
      height: 70%;
      top: 0;
      left: 0;
      width: 100%;
    }
    .logo {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0%);
      /* bottom: 30vh; */
      opacity: 0;
      z-index: 999999999;

      & > svg {
        height: 15px;
      }
    }
    //bottom----------------------------------
    .bottom {
      position: relative;
      bottom: 0;
      width: 100vw;
      height: 30vh;
      max-width: 100%;
      z-index: 99999999;
      overflow: hidden;
      display: flex;
      justify-content: center;
      background-color: black;
      .loader {
        width: 40%;
        height: 10px;
        display: flex;
        justify-content: center;
        .load {
          width: 100%;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          z-index: 1000;
          .progress-bar {
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: white;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .container {
      .logo {
        & > svg {
          height: 20px;
        }
      }
      .top {
        .changing {
          .second-line {
            h1 {
              font-size: 22px;
            }
          }
          .first-line {
            padding-top: 50px;
            .first-section {
              display: flex;

              .rotator {
                .the_Line {
                  width: 70px;
                }
                .spans_container {
                  width: 100px;
                  position: relative;
                  span {
                    font-size: 22px;
                  }
                }
                .the_future {
                  h1 {
                    font-size: 22px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .container {
      .logo {
        & > svg {
          height: 30px;
        }
      }
    }
  }

  /* X Large */
  @media only screen and (min-width: 1400px) {
    .container {
      .top {
        .changing {
          .second-line {
            h1 {
              font-size: 28px;
            }
          }
          .first-line {
            padding-top: 50px;
            .first-section {
              display: flex;
              .rotator {
                .the_Line {
                  width: 100px;
                }
                .spans_container {
                  /* background-color: red; */
                  width: 120px;
                  position: relative;
                  span {
                    font-size: 28px;
                    text-align: right;
                  }
                }
                .the_future {
                  h1 {
                    font-size: 28px;
                  }
                }
              }
            }
          }
        }
      }
      .bottom {
        .loader {
          width: 30%;
          height: 10px;
        }
      }
    }
  }
`

export default StyledPreloader
