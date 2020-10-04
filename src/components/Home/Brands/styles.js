import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 50vh;
  background: var(--wjite);
  padding: 10vh 30vh;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(5, 1.5fr);
  justify-items: center;
  align-items: center;
  > img {
    cursor: pointer;
    filter: opacity(40%);
  }
`;
