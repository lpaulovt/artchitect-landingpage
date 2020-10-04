import React from "react";
import { Container, ImageContainer, Content } from "./styles";
import { BsArrowRightShort } from "react-icons/bs";
import { Button } from "../../Button";
export const OurProject = () => {
  return (
    <>
      <Container>
        <Content>
          <h3>Our project</h3>
          <h2>
            All of our work emphasizes
            <br />
            the latest art and technology.
          </h2>
          <p>
            Apart from highlighting art, we also strive to use
            <br /> the latest technology to maximize building
            <br />
            quality
          </p>
          <a href="#">
            <span>Explore more</span>
            <BsArrowRightShort id="icon" />
          </a>
        </Content>

        <div id="container-image">
          <img
            id="broad-image"
            src="https://images.unsplash.com/photo-1477613180592-2836381ead83?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="The Broad"
          />
          <Button id="button-image" />
        </div>
      </Container>
      <ImageContainer>
        <img
          id="background-image"
          src="https://images.unsplash.com/photo-1463130456064-77fda7f96d6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
        <Button />
      </ImageContainer>
    </>
  );
};
