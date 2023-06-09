import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { baseTheme } from "./theme";

const fontStyles = css`
    font: 400 1.25rem/1.1 ${baseTheme.fonts.text};
`

export const AppContainer = styled.div`
    background: #000;

    height: 100%;
    padding-bottom: 50px;

    color: ${baseTheme.color.textColor};
`

export const Container = styled.div`
    width: 60%;
    margin: 0 auto;

    @media (max-width: 1100px) {width: 70%}

    @media ${baseTheme.media.table} {width: 85%}

    @media ${baseTheme.media.phone} {width: 96%}
`

export const Button = styled.button`
    background: #3d2f2c;
    border-radius: 15px;
    cursor: pointer;
    width: 230px;
    color: white;

    padding: 5px 10px;

    font: 400 1.5rem/1.2 ${baseTheme.fonts.text};

    transition: all ease .7s;

    :hover {
        background: rgb(146 106 97);
    }
`

// стили текста 
export const Text = styled.p`
    ${fontStyles};
    text-align: ${({ center }: any) => center ? "center" : "justify"};

    @media ${baseTheme.media.table} {
        font-size: 1.3rem
    }
`

export const ListText = styled(Text)`margin-left: 10px`

export const TextLink = styled(Link)`
    margin: 0 5px;
    
    ${fontStyles};
    font-family: "Ubuntu";

    @media ${baseTheme.media.table} {font-size: 1.7rem}
`

export const TextLinks = styled(Link)`
    text-decoration: underline;
    color: #ffece9;
`

// стили заголвков
export const Title1 = styled.h1`
    font: 400 6.5rem/1 ${baseTheme.fonts.title};
    letter-spacing: 0.25rem;
    text-align: center;

    @media ${baseTheme.media.phone} {
        font-size: 4.5rem;
        letter-spacing: 0.01rem;
    }

    @media (max-width: 450px) {font-size: 3rem}
`
export const Title2 = styled.h2`
    font: 400 4.8rem/1 ${baseTheme.fonts.title};
    letter-spacing: 0.25rem;
    text-align: center;

    @media ${baseTheme.media.phone} {font-size: 2.8rem}

    @media (max-width: 450px) {font-size: 2.5rem}
`
export const Title3 = styled.h3`
    margin: 20px 0;

    font: 400 3.5rem/1 ${baseTheme.fonts.title};
    text-align: center;

    @media ${baseTheme.media.table} {font-size: 3.5rem}
`
export const Title5 = styled.h5`
    margin: 10px 0;

    font: 400 2rem/1 ${baseTheme.fonts.title};
    color: ${baseTheme.color.textColor};

    @media (max-width: 450px) {font-size: 2rem}
`

export const Block = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

export const Wrap = styled(Container)`
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    gap: 20px 0;

    margin: 60px auto
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0 10px
`

export const InfoFamily = styled(Info)`
    gap: 0;
`