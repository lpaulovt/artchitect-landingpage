import React from "react";
import { Container, LeftColumn, RigthColumn } from "./styles";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

export const Contact = () => {
  return (
    <Container>
      <LeftColumn>
        <h2>
          Got a project?
          <br />
          Let's talk.
        </h2>
        <p>
          Architecture is not only about engineering,
          <br />
          extraordinary touch of art.
        </p>
        <div className="contact">
          <span>Send your bussines inquiry</span>
          <span>Halo@artchitect.com</span>
        </div>
        <div className="contact">
          <span>Let's talk</span>
          <span>027-44558899</span>
        </div>
        <div className="social-networks">
          <GrFacebookOption />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <GrLinkedinOption />
        </div>
      </LeftColumn>
      <RigthColumn>
        <div id="image">
          <img
            src="https://images.unsplash.com/photo-1584140828577-933ad5f0c57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Contact image"
          />
          <button>
            <MdLocationOn />
          </button>
        </div>
        <div id="copyright">
          <span>Company 2020 All Rights Reserved</span>
          <span>
            EN <IoIosArrowDown />
          </span>
        </div>
      </RigthColumn>
    </Container>
  );
};
