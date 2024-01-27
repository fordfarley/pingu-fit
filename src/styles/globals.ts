import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: "Outfit", sans-serif;
    box-sizing: border-box;
    letter-spacing: 0.25px;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: clip;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  b {
    font-weight: 600;
  }
`;
