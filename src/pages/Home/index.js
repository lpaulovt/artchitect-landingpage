import React from "react";
import { AboutUs } from "../../components/Home/AboutUs";
import { Brands } from "../../components/Home/Brands";
import { Contact } from "../../components/Home/Contact";
import { Featured } from "../../components/Home/Featured";
import { OurProject } from "../../components/Home/OurProject";
import OurServices from "../../components/Home/OurServices";

export const Home = () => {
  return (
    <>
      <Featured />
      <AboutUs />
      <OurProject />
      <Brands />
      <OurServices />
      <Contact />
    </>
  );
};
