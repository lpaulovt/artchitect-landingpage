import React from "react";
import { Container, WordLogo, ContainerHamburger } from "./styles";

export const Menu = () => {
  return (
    <Container>
      <Brand />
      <nav>
        <a>About us</a>
        <a>Service</a>
        <a>Offer</a>
        <a>Project</a>
        <MenuHamburger />
      </nav>
    </Container>
  );
};

const Brand = () => {
  return (
    <WordLogo>
      Art<span>Chitect</span>
    </WordLogo>
  );
};

const MenuHamburger = () => {
  return (
    <ContainerHamburger>
      <span></span>
      <span></span>
      <span></span>
    </ContainerHamburger>
  );
};
