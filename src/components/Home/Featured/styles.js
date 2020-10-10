import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--gray);
  padding: 5vh 20vh;
  position: relative;
  overflow: hidden;

  > #details {
    position: absolute;
    top: 28vh;
    right: 10px;
    z-index: 5;
  }

  > #information {
    position: relative;
    z-index: 5;

    > h1 {
      color: var(--white);
      font-size: 64px;
      font-weight: 900;
      margin-bottom: 7vh;
      > span {
        color: var(--light-gray);
      }
    }

    > p {
      color: var(--white);
      font-size: 18px;
      line-height: 27px;
      font-weight: normal;
      margin-bottom: 7vh;
    }

    > button {
      width: 150px;
      height: 50px;
      outline: none;
      border-radius: 4px;
      border: none;
      background: var(--red);
      color: var(--white);
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const Images = styled(motion.section)`
  display: flex;
  position: absolute;
  bottom: 9vh;
  right: -68vh;

  > img {
    width: 50vw;
    height: 45vh;
    overflow: hidden;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
    margin-right: 60px;
    object-fit: cover;
    object-position: center;
  }
`;
