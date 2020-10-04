import styled from "styled-components";

export const WordLogo = styled.span`
  color: var(--white);
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;

  > span {
    color: var(--light-gray);
  }
`;

export const Container = styled.div`
  width: 100%;
  background: var(--gray);
  padding-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > nav {
    color: var(--light-gray);
    font-size: 14px;
    font-weight: 400;
    display: flex;

    > a {
      cursor: pointer;
      margin: 0 15px;
    }
  }
`;

export const ContainerHamburger = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  width: 24px;
  cursor: pointer;
  > span {
    height: 2px;
    width: 100%;

    background: var(--light-gray);

    :nth-child(2) {
      margin: 6px 0;
    }

    :nth-child(3) {
      width: 70%;
    }
  }
`;
