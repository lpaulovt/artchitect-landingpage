import React from "react";
import { Container, ContainerGridServices, ContainerServices } from "./styles";
import smallDetails from "../../../assets/small-details.svg";

const OurServices = () => {
  return (
    <Container>
      <h3>Our services</h3>
      <h2>
        Not only architecture services,
        <br />
        we have 6 other services.
      </h2>
      <p>
        Architecture is not only engineering, it even tends to art and
        aesthetics. with us, you will get a
        <br />
        residential design with an extraordinary touch of art.
      </p>
      <GridServices />
      <img src={smallDetails} alt="Small Details" />
    </Container>
  );
};

export default OurServices;

const GridServices = () => {
  return (
    <ContainerGridServices>
      <Services number="1" name="Architecture" />
      <Services number="2" name="Interior Design" />
      <Services number="3" name="Eksterior Design" />
      <Services number="4" name="Garden Design" />
      <Services number="5" name="Engineering" />
      <Services number="6" name="Consultancy" />
    </ContainerGridServices>
  );
};

const Services = ({ number, name }) => {
  return (
    <ContainerServices>
      <h3>{number}</h3>
      <span>{name}</span>
    </ContainerServices>
  );
};
