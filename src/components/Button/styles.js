import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 70px;
  height: 70px;
  background: var(--red);
  color: var(--white);
  border: none;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 5;

  > #icon {
    font-size: 22px;
  }
`;
