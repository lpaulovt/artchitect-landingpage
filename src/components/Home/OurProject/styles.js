import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 70vh;
  background: var(--white);
  position: relative;
  display: flex;
  justify-content: space-between;

  > #container-image {
    position: relative;
    width: 35vw;
    height: 100%;

    overflow: hidden;
    > #broad-image {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 4;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export const Content = styled.div`
  padding: 10vh 0 10vh 20vh;
  > h3 {
    color: var(--red);
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2vh;
  }

  > h2 {
    color: var(--black);
    font-size: 34px;
    font-weight: 900;
    margin-bottom: 3vh;
  }

  > p {
    color: var(--gray);
    font-size: 16px;
    line-height: 27px;
    font-weight: normal;
    margin-bottom: 10vh;
  }

  > a {
    text-decoration: none;
    color: var(--red);
    display: flex;
    align-items: center;

    :hover > #icon {
      transform: translateX(5px);
    }

    > span {
      margin-right: 10px;
    }

    > #icon {
      font-size: 22px;
      transition: all 200ms ease-in-out;
    }
  }
`;

export const ImageContainer = styled.section`
  width: 100%;
  height: 50vh;
  position: relative;
  overflow: hidden;

  > img {
    width: 100%;
  }
`;
