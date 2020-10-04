import React from "react";
import { Container } from "./styles";

import brand1 from "../../../assets/brand-1.PNG";
import brand2 from "../../../assets/brand-2.PNG";
import brand3 from "../../../assets/brand-3.PNG";
import brand4 from "../../../assets/brand-4.PNG";
import brand5 from "../../../assets/brand-5.PNG";
import brand6 from "../../../assets/brand-6.PNG";
import brand7 from "../../../assets/brand-7.PNG";
import brand8 from "../../../assets/brand-8.PNG";
import brand9 from "../../../assets/brand-9.PNG";
import brand10 from "../../../assets/brand-10.PNG";

export const Brands = () => {
  return (
    <Container>
      <img src={brand1} alt="Brand 01" />
      <img src={brand2} alt="Brand 02" />
      <img src={brand3} alt="Brand 03" />
      <img src={brand4} alt="Brand 04" />
      <img src={brand5} alt="Brand 05" />
      <img src={brand6} alt="Brand 06" />
      <img src={brand7} alt="Brand 07" />
      <img src={brand8} alt="Brand 08" />
      <img src={brand9} alt="Brand 09" />
      <img src={brand10} alt="Brand 10" />
    </Container>
  );
};
