import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["border"]};
    }
    body {
        background-color: ${(props) => props.theme["background"]};
        color: ${(props) => props.theme["text"]};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button, span {
        font: 400 1rem Roboto, sans-serif;
        color: ${(props) => props.theme["text"]};

    }
    span {
        font-size: 0.875rem;
    }
    h1 {
        font: 700 1.25rem Roboto, sans-serif;
        color: ${(props) => props.theme["title"]};
    }
    a {
        text-decoration: none;
        &:hover {
            text-decoration: solid;
        }
    }
`;
