import { motion } from "framer-motion";
import React from "react";
import { Container } from "./styles";

export const AboutUs = () => {
  const item2 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -150 },
  };
  const item1 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };
  return (
    <Container>
      <motion.img
        initial="hidden"
        animate="visible"
        variants={item2}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
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
          <motion.div
            className="ContainerNumber"
            initial="hidden"
            animate="visible"
            variants={item1}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
          >
            <h1>15</h1>
            <span>Year Experience</span>
          </motion.div>
          <motion.div
            className="ContainerNumber"
            initial="hidden"
            animate="visible"
            variants={item1}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
          >
            <h1>243</h1>
            <span>Properties Build</span>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};
