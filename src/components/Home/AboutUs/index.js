import React from "react";
import { Container } from "./styles";

export const AboutUs = () => {
  return (
    <Container>
      <img
        id="about-us-image"
        src="https://images.unsplash.com/photo-1482236416769-247f629d4a34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=368&q=80"
        alt="Photo about us."
      />
      <div id="content">
        <h3>About us</h3>
        <h2>
          Your trust is
          <br />
          our responsability.
        </h2>
        <p>
          We are an architectural firm in london that has
          <br />
          been around for 15 years and has built
          <br />
          hundreds of properties
        </p>
        <div id="numbers">
          <div className="ContainerNumber">
            <h1>15</h1>
            <span>Year Experience</span>
          </div>
          <div className="ContainerNumber">
            <h1>243</h1>
            <span>Properties Build</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
