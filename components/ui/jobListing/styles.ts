import styled from "styled-components"

const StyledJobListing = styled.div`
  font-family: var(--primary-font);
  text-transform: capitalize;
  padding-top: 100px;
  padding-bottom: 100px;

  .full-time {
    margin-bottom: 150px;
  }

  h2 {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 85px;
  }

  .col {
    margin-bottom: 40px;
  }

  h3.department {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 35px;
  }

  ul {
    li {
      font-family: var(--secondary-font);
      border-bottom: 1px solid var(--text-primary);
      margin-bottom: 15px;
      width: -webkit-fit-content;
      width: fit-content;
    }

    li.ios {
      text-transform: none;
    }
  }

  @media only screen and (min-width: 768px) {
    .positions {
      display: flex;
      flex-wrap: wrap;
    }

    .col {
      :not(:last-child) {
        margin-right: 100px;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    padding-top: unset;

    .job-type {
      display: flex;
      flex-direction: column;
    }

    .positions {
      align-self: flex-end;
      flex-wrap: nowrap;
    }

    .col {
      margin-bottom: unset;
    }
  }
`

export default StyledJobListing
