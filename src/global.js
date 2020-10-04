import { createGlobalStyle } from "styled-components";

import CircularBlack from "./fonts/CircularStd-Black.ttf";
import CircularBold from "./fonts/CircularStd-Black.ttf";
import CircularBook from "./fonts/CircularStd-Book.ttf";
import CircularMedium from "./fonts/CircularStd-Medium.ttf";

export default createGlobalStyle`

:root {
  --black: #313131;
  --white: #FFF ;
  --dark-white: #E4E3E5;
  --red: #FF5657; 
  --gray: #3B3B3B;
  --light-gray: #8A888B;
  --dark-gray: #2B2E37;
  --gray-color: #68768E;
}


@font-face {
  font-family: "Circular Std";
  src: local("Circular Std Black"), local("CircularStd-Black"),
    url(${CircularBlack}) format("truetype");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "Circular Std";
  src: local("Circular Std Bold"), local("CircularStd-Bold"),
    url(${CircularBold}) format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Circular Std Book";
  src: local("Circular Std Book"), local("CircularStd-Book"),
    url(${CircularBook}) format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Circular Std";
  src: local("Circular Std Medium"), local("CircularStd-Medium"),
    url(${CircularMedium}) format("truetype");
  font-weight: 500;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  font-family: "Circular Std";
}

`;
