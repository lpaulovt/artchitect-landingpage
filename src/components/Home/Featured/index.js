import React from "react";
import { motion } from "framer-motion";
import { Menu } from "../../Menu";
import { Container, Information, Images } from "./styles";
import Details from "../../../assets/Details.svg";

const list = [
  "visible": { opacity: 1 },
  "hidden": { opacity: 0 },
]

const item = [
  "visible": [ opacity: 1, x: 0 ],
  "hidden": [opacity: 0, x: -100 ],
]


export const Featured = () => {

  return (
    <Container>
      <Menu />
      <img src={Details} alt="Details" id="details" />
      <motion.Information
      initial="hidden"
    animate="visible"
    variants={list}
>
        <motion.h1 variants={item} >
          <span>Get the</span>
          <br />
          architects design
          <br /> you want.
        </motion.h1>
        <motion.p> variants={item} 
          Architecture is not only about engineering, it even tends to
          <br />
          art and aesthetics. with us, you will get a residential design
          <br />
          with an extraordinary touch of art.
        </motion.p>
        <motion.button variants={item} >Contact me</motion.button>
      </motion.Information>
      <Images>
        <img
          src="https://images.unsplash.com/photo-1584140828577-933ad5f0c57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="Building photo 1"
        />
        <img
          src="https://images.unsplash.com/photo-1565371557106-c2abcc6fb36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="Building photo 2"
        />
      </Images>
    </Container>
  );
};
