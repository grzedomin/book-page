import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
};
::before, ::after {
    box-sizing: inherit;
};

body {
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    margin: 10px 20px;
}
`;