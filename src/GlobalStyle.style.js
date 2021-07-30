// https://www.youtube.com/watch?v=-FZzPHSLauc

import { createGlobalStyle } from "styled-components";

/*
- Mobile: 375px
- Desktop: 1440px
*/

export const GlobalStyles = createGlobalStyle`
    :root {
        --bright-blue: hsl(220, 98%, 61%);
        --check-background: linear-gradient(150deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        // Light Theme
        --light-gray: hsl(0, 0%, 98%);
        --very-light-grayish-blue: hsl(236, 33%, 92%);
        --light-grayish-blue: hsl(236, 33%, 92%);
        --dark-grayish-blue: hsl(236, 9%, 61%);
        --very-dark-grayish-blue: hsl(235, 19%, 35%);
        // Dark Theme
        --very-dark-blue: hsl(235, 21%, 11%);
        --very-dark-desaturated-blue: hsl(235, 24%, 19%);
        --light-grayish-blue: hsl(234, 39%, 85%);
        --light-grayish-blue-hover: hsl(236, 33%, 92%);
        --dark-grayish-blue: hsl(234, 11%, 52%);
        --darker-grayish-blue: hsl(233, 14%, 35%);
        --very-dark-grayish-blue: hsl(237, 14%, 26%);
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html {
        max-width: 1920px;
        margin: 0 auto;
    }

    body {
        margin: 0;
        padding: 0;
        //color: ${({ theme }) => theme.text};
        color: white;
        background: url(${({ theme }) => theme.imgMobile});
        background-repeat: no-repeat;
        background-size: 100% 15rem;
        background-color: ${({ theme }) => theme.background};
        font-size: 18px;
        font-family: 'Josefin Sans', sans-serif;
        // Animate transition from dark to light
        //transition: all 0.50s linear;

        @media only screen and (min-width: 768px) {
            background: url(${({ theme }) => theme.imgDesktop});
            background-repeat: no-repeat;
            background-size: 100% 15rem;
            background-color: ${({ theme }) => theme.background};
        }
    }
`;
