import styled from "styled-components"

const StyledTeamItem = styled.div`
  margin-bottom: 70px;

  .team-name {
    font-weight: 500;
    color: var(--primary-green);
    position: absolute;
    left: 15px;
  }

  .team-name,
  h4 {
    font-size: 28px;
    padding-bottom: 15px;
  }

  h4 {
    font-weight: 400;
    border-bottom: 1px solid var(--text-primary);
    text-align: right;
    width: 90%;
    margin-left: -15px;
  }

  p,
  ul {
    font-size: var(--p-mb);
    font-weight: 300;
  }

  p {
    line-height: var(--line-height-p-mb);
    margin-top: 40px;
    margin-bottom: 70px;
  }

  ul {
    max-height: 165px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-transform: capitalize;

    li {
      margin-bottom: 18px;
    }
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: start;
    position: relative;

    .team-name {
      flex: 1;
      margin-right: 100px;
      border-bottom: 1px solid var(--text-primary);
      position: unset;
      left: unset;
    }

    .team-data {
      flex: 2;
      margin-right: 70px;
    }

    h4 {
      margin-left: unset;
      width: unset;
      text-align: unset;
    }

    p,
    ul {
      font-size: var(--p-lg);
    }

    p {
      margin-top: 60px;
      line-height: var(--line-height-p-lg);
    }

    ul {
      max-height: 220px;
    }
  }

  @media only screen and (min-width: 992px) {
    .team-name {
      margin-right: 200px;
    }
  }
`

export default StyledTeamItem
