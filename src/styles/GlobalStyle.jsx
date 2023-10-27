import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }
    * {
        box-sizing: border-box;
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
        --tag-color: #962dff;
        --tag-text-color: #fff;
        --tag-hover-color: #9b43f3;
        --loader-background-color: #929292;
        --tag-hover-text-color: #ffffffe1;

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
            --container-background-color: #18212f;
            --main-background-color: #111827;
            --sidebar-link-color: #d8d4d4;
            --active-sidebar-link-color: #fff;  

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
            --icon-color:#9ca3af;
            --icon-hover-color:#962dff;
            --nav-color:#0d0c22;
            --nav-active-color:#962dff;
            --button-background-color: #962dff;
            --button-background-hover-color: #962dff9e;
            --icon-color:#131111;
            --button-text-color:#fff;
            --button-text-active-color:#962dff;
            --border-color:rgba( 0, 0, 0, 0.18 );
            --container-background-color: #fff;
            --main-background-color: #f9fafb;
            --sidebar-link-color:#2b3136;
            --active-sidebar-link-color:#0a0909;
        }

        }

`;

export default GlobalStyle;
