import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        backdrop-filter: bulr(40px);
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
        scrollbar-width: none;
        user-select: none;
        
        &::-webkit-scrollbar {
            display: none;
        }

    }


    h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }
    :root{
        --anime-sun: #ffdb00;
        --anime-moon: #ffffff;
        --loader-color: #963dff;

        &.dark-mode{
            body{
            background-color: rgb(0, 0, 0);
            }
            --background-color: rgb(0, 0, 0);
            --nav-link-color:#ffffff;
            --text-color:#B4B4B3;
            --title-color:#962dff;
            --card-des-color:#962dff;
            --sub-text-color:#fff;
            --box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
            --icon-color:#B4B4B3;
            --icon-hover-color:#962dff;
            --nav-color:#0d0c22;
            --nav-active-color:#962dff;
            --button-background-color: #962dff;
            --button-background-hover-color: #962dff9e;
            --button-text-color:#fff;
            --button-text-active-color:#fff;
            --border-color:rgba( 255, 255, 255, 0.18 );

        }
        &.light-mode{
            body{
                background-color: rgb(240, 240, 240);
            }
            --background-color:rgb(240, 240, 240);
            --nav-link-colo:#0d0c22;
            --text-color:#000000;
            --title-color:#962dff;
            --card-des-color:#11171d;
            --sub-text-color:#000000;
            --box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
            --icon-color:#131111;
            --icon-hover-color:#962dff;
            --nav-color:#0d0c22;
            --nav-active-color:#962dff;
            --button-background-color: #962dff;
            --button-background-hover-color: #962dff9e;
            --icon-color:#131111;
            --button-text-color:#fff;
            --button-text-active-color:#962dff;
            --border-color:rgba( 0, 0, 0, 0.18 );

        }

        }

`;

export default GlobalStyle;
