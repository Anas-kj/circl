import { createGlobalStyle } from "styled-components"

interface Props {
  isRTL: boolean
}
export const GlobalStyle = createGlobalStyle<Props>`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  letter-spacing: ${(props) => props.isRTL && "0px"} !important;
 }

html {
  font-family: ${(props) => !props.isRTL && "Aventa"}; 
  font-family: ${(props) => props.isRTL && "Almarai"}; 
}

body {
  position: relative ;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 300;
  transition: all .25s;
  background-color: var(--body-bg);
  color: var(--text-primary);
  perspective: 2000px;
  overflow-x:hidden ;
 }


.content{
    grid-column: 3/9;
  }


    //Works Page
  .works-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 50px 0;
    gap: 40px;
  }

  .works-title { 
    font-family: 'Aventa';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color:  var(--text-primary) ;
    margin-bottom: 20px
  }

  .works-intro {
    font-family: 'Aventa';
    font-style: normal;
    font-weight: 250;
    font-size: 18px;
    line-height: 25px ;
    color:  var(--text-primary) ;
  }

  //Contact Page

  .contact-head-wrapper {
    overflow: hidden;
  }

  .contact-head {
    position: relative;
    overflow: hidden;
    background-color: var(--body-bg);
    background-image: url("/assets/map-new.png");
    background-position:  center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 70px;
    width: 100%;
    margin-top: 150px;
    z-index: -1;

    .contact-heading {
      text-align: center;
      margin: 100px auto;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100vw;

      .sub-heading {
        font-family: ${(props) => !props.isRTL && "Aventa"}; 
        font-family: ${(props) => props.isRTL && "Almarai"}; 
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 106%;

        text-align: center;
        letter-spacing: 0.445em;
        text-transform: uppercase;
        color: #1fbe00;
        overflow: hidden;
        margin-bottom: 50px;
      }
      .new_contact-typography {
      .typography_first-line {
        h1 {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-size: 1.5rem;
          white-space: nowrap;
        }
        .inter-italic {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-style: italic;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
        gap: 15px;
        span {
          display: block;
          width: 60px;
          height: 1px;
          background-color: white;
        }
      }

      .typography_second-line {
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 15px;
        h1 {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-size: 1.5rem;
          white-space: nowrap;
        }
        .inter-italic {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-style: italic;
        }
      }
      .typography_third-line {
        display: flex;
        align-items: center;
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
        gap: 15px;
        justify-content: center;
        h1 {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-size: 1.5rem;
          white-space: nowrap;
        }

        .inter-italic {
          font-family: ${(props) => !props.isRTL && "Aventa"};
          font-family: ${(props) => props.isRTL && "Almarai"};
          font-weight: 400;
          font-style: italic;
        }

        span {
          display: block;
          width: 60px;
          height: 1px;
          background-color: white;
        }
      }
    }
      
    }

    /* Small */
    @media only screen and (min-width: 768px) {
      height: 100vh;
      .content{
        grid-column: 1/7;
      }
      .contact-heading {
        .new_contact-typography {
        .typography_first-line {
          h1 {
            font-size: 2.5rem;
            line-height: 106%;
          }

          span {
            width: 80px;
          }
        }

        .typography_second-line {
          h1 {
            font-size: 2.5rem;
            line-height: 106%;
          }
        }
        .typography_third-line {
          h1 {
            font-size: 2.5rem;
            line-height: 106%;
          }

          span {
            width: 80px;
          }
        }
      }

        
      }
    }

    @media only screen and (min-width: 992px) {
      .contact-heading {
        margin-top: 100px;
        .new_contact-typography {
        .typography_first-line {
          h1 {
            font-size: 3.5rem;
            line-height: 106%;
          }

          span {
            width: 120px;
          }
        }

        .typography_second-line {
          h1 {
            font-size: 3.5rem;
            line-height: 106%;
          }
        }
        .typography_third-line {
          h1 {
            font-size: 3.5rem;
            line-height: 106%;
          }

          span {
            width: 120px;
          }
        }
      }
      }
    }
    
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin: -30px 0 60px;
    z-index: 9999;
  }

  .contact-info address {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .contact-info--addr {
    order: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px
  }

  .contact-title {
    font-family: ${(props) => !props.isRTL && "Aventa"}; 
    font-family: ${(props) => props.isRTL && "Almarai"}; 
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    line-height: 110px;
    color:  var(--text-primary) ;
  }

  .contact-info address h5 {
    order: 1;
    font-family: ${(props) => !props.isRTL && "Aventa"}; 
    font-family: ${(props) => props.isRTL && "Almarai"}; 
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 0.12em;
    color:  var(--text-primary) ;
  }

  .contact-info address span {
    font-family: ${(props) => !props.isRTL && "Aventa"}; 
    font-family: ${(props) => props.isRTL && "Almarai"}; 
    font-style: normal;
    font-weight: 250;
    font-size: 16px;
    line-height: 31px ;
    letter-spacing: 0.04em;
    color:  var(--text-primary) ;
  }


  .contact-info--addr span{
    font-family: ${(props) => !props.isRTL && "Aventa"}; 
    font-family: ${(props) => props.isRTL && "Almarai"}; 
    font-style: normal;
    font-weight: 250;
    font-size: 16px;
    line-height: 31px ;
    letter-spacing: 0.04em;
    color:  var(--text-primary) ;
  }

  .contact-info address > span {
    order: 3;
  }

  .contact-info address > a {
    order: 2;
  }

  .contact-info--addr a {
    font-family: ${(props) => !props.isRTL && "Aventa"}; 
    font-family: ${(props) => props.isRTL && "Almarai"}; 
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #6D6D6D;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .contact-info--email {
    font-family: ${(props) => !props.isRTL && "Aventa"}; 
    font-family: ${(props) => props.isRTL && "Almarai"}; 
    font-style: normal;
    font-weight: 250;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.04em;
    text-decoration-line: underline;
    color:  var(--text-primary) ;
  }

  .contact-iframe {
    filter: grayscale(100%);
    padding: 20px ;
    :hover {
      filter: none;
      -webkit-filter: none;
    }
  }


 
  @media (min-width: 768px) {
    .contact-info {
      flex-direction: row;
      justify-content: space-between;
    }
  }


  @media (min-width: 992px) {
    .contact-info address h5 {
      font-size: 16px;
      flex-basis: 25%;
    }
    
    .contact-info address span {
      font-size: 18px;
    }

    .contact-info address > span {
      flex-basis: 25%;
    }
    
    .contact-info--addr, .contact-info--email {
      flex-basis: 25%;
    }

    .contact-info--addr span{
      font-size: 18px;
    }

    .contact-info {
      flex-direction: column;
    }

    .contact-info address {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 50px;
    }

    .contact-info address h5 {
      order: unset;
      grid-column: 1/2;
    }

    .contact-info--addr {
      order: unset;
      grid-column: 2/3;
    }
    
    .contact-info address > span {
      order: unset;
      grid-column: 3/4;
    }
    
    .contact-info address > a {
      order: unset;
      grid-column: 4/5;
      justify-self: self-end;
    }

  }

  @media (min-width: 1200px) {

  }


  @media (min-width: 1400px) {
 
  }
  
`
