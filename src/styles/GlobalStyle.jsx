import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }
    :root{
        --button-background-color: #0d0c22;
        --button-background-hover-color: #565564;

    }

`;

export default GlobalStyle;
