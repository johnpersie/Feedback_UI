import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

:root{

  //======colours========
  /* Colour mode HSL (hue, saturation, lightness)*/
  /*
    purple: hsl(250, 66%, 72%)
    Blue: hsl(207,90%, 72%)
    Pink: hsl(356, 66%, 75%)
    teal: hsl(174, 63%, 62%)
  */
  --first-hue: 250;
  --sat: 66%;
  --lig: 75%;
  --second-hue:219;

  --first-color: hsl(var(--first-hue), var(--sat), var(--lig));
  --first-color-alt:hsl(var(--first-hue), var(--sat), 71%);
  --title-color: hsl(var(--second-hue), 15%, 95%);
  --text-color: hsl(var(--second-hue), 8%, 75%);
  --text-color-light:hsl(var(--second-hue), 4%, 55%);
  --body-color:hsl(var(--second-hue), 48%, 8%);


}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
    /* font-size: 62.5%; */
    scroll-behavior: smooth;
}

body {
  background-color: var(--body-color);
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
}

ul {
  list-style: none;
}
`;
