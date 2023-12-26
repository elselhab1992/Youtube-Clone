import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: poppins,sans-serif;
        width: 100%;
        min-height: 100vh;
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.primary};
        text-transform: capitalize;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.primary};
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyles;
