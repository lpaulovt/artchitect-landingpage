import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 80vh;
  background: var(--black);
  padding: 10vh 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  > #about-us-image {
    width: 45vw;
    height: 100%;
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);
    object-fit: cover;
    object-position: top;
    position: relative;
    z-index: 2;
  }

  > #content {
    text-align: right;
    position: absolute;
    z-index: 5;
    right: 20vh;
    bottom: 5vh;
    > h3 {
      color: var(--red);
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 2vh;
    }

    > h2 {
      color: var(--white);
      font-size: 34px;
      font-weight: 900;
      margin-bottom: 3vh;
    }

    > p {
      color: var(--white);
      font-size: 18px;
      line-height: 27px;
      font-weight: normal;
      margin-bottom: 3vh;
    }

    > #numbers {
      display: flex;
      justify-content: center;
      padding: 5vh 0 7vh 5vh;
      background: var(--black);

      > .ContainerNumber {
        display: flex;
        align-items: center;
        max-width: 230px;

        :first-child {
          margin-right: 50px;
        }
        > h1 {
          color: var(--red);
          font-size: 60px;
          font-weight: bold;
          margin-right: 15px;
        }

        > span {
          text-align: left;
          color: var(--white);
          font-size: 22px;
          font-weight: normal;
        }
      }
    }
  }
`;
