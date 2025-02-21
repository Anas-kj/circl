import styled from "styled-components"

const StyledBlogPost = styled.div`
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: transparent;
    opacity: 0.6;
    transition: all 0.3s;
  }

  &:hover::before {
    background-color: transparent;
  }

  &.img-0 {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  &.img-1 {
    grid-column: 2/3;
    grid-row: 2/4;
  }

  &.img-2 {
    grid-column: 1/2;
    grid-row: 3/5;
  }

  &.img-3 {
    grid-column: 2/3;
    grid-row: 4/6;
  }

  &.img-4 {
    grid-column: 1/2;
    grid-row: 5/7;
  }

  &.img-5 {
    grid-column: 2/3;
    grid-row: 6/8;
  }

  &.img-6 {
    grid-column: 1/2;
    grid-row: 7/9;
  }

  &.img-7 {
    grid-column: 2/3;
    grid-row: 8/10;
  }

  img {
    width: 100%;
    height: 400px;
    max-width: 100%;
    object-fit: cover;
  }

  .blog-data {
    margin-top: 10px;
    position: absolute;
    bottom: 20px;
    width: 100%;
    padding: 0 10px;
    max-width: 100%;

    .date,
    .hashtag {
      font-size: 12px;
      max-width: 100%;
    }

    .date {
      margin-bottom: 7px;
      max-width: 100%;
    }

    h5 {
      font-size: 15px;
      font-weight: 400;
      color: var(--text-primary);
    }
  }

  @media only screen and (min-width: 768px) {
    img {
      height: 650px;
    }
  }

  @media only screen and (min-width: 1200px) {
    &.img-0 {
      grid-column: 1/2;
      grid-row: 1/3;
    }

    &.img-1 {
      grid-column: 2/3;
      grid-row: 2/4;
    }

    &.img-2 {
      grid-column: 3/4;
      grid-row: 3/5;
    }

    &.img-3 {
      grid-column: 1/2;
      grid-row: 3/5;
    }

    &.img-4 {
      grid-column: 2/3;
      grid-row: 4/6;
    }

    &.img-5 {
      grid-column: 3/4;
      grid-row: 5/7;
    }

    &.img-6 {
      grid-column: 1/2;
      grid-row: 5/7;
    }

    &.img-7 {
      grid-column: 2/3;
      grid-row: 6/8;
    }
  }
`

export default StyledBlogPost
