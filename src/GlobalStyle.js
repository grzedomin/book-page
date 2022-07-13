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
    margin: 10px 30px;

    @media(max-width: 1200px){
        margin: 10px 20px;
    }

    @media(max-width: 767px){
        margin: 0;
    }
}
`;