import React from "react";
import { motion } from "framer-motion";
import { Menu } from "../../Menu";
import { Container, Information, Images } from "./styles";
import Details from "../../../assets/Details.svg";

export const Featured = () => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  const item2 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 },
  };

  return (
    <Container>
      <Menu />
      <img src={Details} alt="Details" id="details" />
      <motion.div
        id="information"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <motion.h1
          variants={item}
          transition={{
            delay: 0.3,
            when: "beforeChildren",
            duration: 0.5,
          }}
        >
          <span>Get the</span>
          <br />
          architects design
          <br /> you want.
        </motion.h1>
        <motion.p
          variants={item}
          transition={{
            delay: 0.5,
            when: "beforeChildren",
            duration: 0.5,
          }}
        >
          {" "}
          Architecture is not only about engineering, it even tends to
          <br />
          art and aesthetics. with us, you will get a residential design
          <br />
          with an extraordinary touch of art.
        </motion.p>
        <motion.button
          variants={item}
          transition={{
            delay: 0.8,
            when: "beforeChildren",
            duration: 0.5,
          }}
        >
          Contact me
        </motion.button>
      </motion.div>
      <Images initial="hidden" animate="visible" variants={list}>
        <motion.img
          variants={item2}
          transition={{
            delay: 0.8,
            when: "beforeChildren",
            duration: 0.5,
          }}
          src="https://images.unsplash.com/photo-1584140828577-933ad5f0c57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="Building photo 1"
        />
        <motion.img
          variants={item2}
          transition={{
            delay: 1,
            when: "beforeChildren",
            duration: 0.5,
          }}
          src="https://images.unsplash.com/photo-1565371557106-c2abcc6fb36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="Building photo 2"
        />
      </Images>
    </Container>
  );
};
