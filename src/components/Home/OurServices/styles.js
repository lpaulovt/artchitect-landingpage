import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 80vh;
  background-color: var(--gray);
  color: var(--dark-white);
  position: relative;
  padding: 10vh 20vh;

  > h3 {
    color: var(--red);
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2vh;
  }
  > h2 {
    font-size: 34px;
    font-weight: 900;
    margin-bottom: 3vh;
  }

  > p {
    font-size: 16px;
    line-height: 27px;
    font-weight: normal;
    margin-bottom: 10vh;
  }

  > img {
    position: absolute;
    top: 3vh;
    right: 3vh;
  }
`;
export const ContainerGridServices = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: flex-start;
  align-items: center;
  gap: 60px;
  padding: 0 100px;
`;
export const ContainerServices = styled.div`
  display: flex;
  align-items: center;

  > h3 {
    padding: 10px 17px;
    margin-right: 20px;
    border: 1px solid var(--dark-white);
    border-radius: 125px;
  }
  > span {
    font-size: 14px;
    font-weight: bold;
  }
`;
