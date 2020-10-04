import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--black);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;
export const LeftColumn = styled.div`
  padding: 10vh 0 10vh 20vh;
  color: var(--dark-white);

  > h2 {
    font-size: 34px;
    font-weight: 900;
    margin-bottom: 3vh;
  }

  > p {
    font-size: 16px;
    line-height: 27px;
    font-weight: normal;
    margin-bottom: 5vh;
  }

  > .contact {
    margin-bottom: 30px;
    > span {
      display: block;
      font-size: 16px;
      line-height: 27px;
      font-weight: normal;
      margin-bottom: 10px;

      :last-child {
        color: var(--red);
        font-size: 24px;
      }
    }
  }

  > .social-networks {
    margin-top: 10vh;
    color: var(--white);
    font-size: 18px;
    width: 110px;
    display: flex;
    justify-content: space-between;
  }
`;

export const RigthColumn = styled.div`
  width: 40vw;
  > div {
    width: 100%;
    height: 60%;
    position: relative;
    overflow: hidden;

    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    > button {
      width: 70px;
      height: 70px;
      background: var(--red);
      color: var(--white);
      font-size: 22px;
      position: absolute;
      left: 0;
      bottom: 0;
      border: none;
      outline: 0;
    }
  }

  > #copyright {
    position: relative;
    margin-top: 11vh;
    color: var(--dark-white);
    font-size: 14px;
    text-align: left;
    width: 100%;
    padding-right: 20vh;
    display: flex;
    justify-content: space-around;

    > span {
      :first-child {
        position: absolute;
        left: 0;
      }
      :last-child {
        width: 35px;
        position: absolute;
        right: 20vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
