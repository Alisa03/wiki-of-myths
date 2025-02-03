import styled from "styled-components";

import { H4 } from "~/app/styles/styledComponents";

import { baseTheme } from "~/app/styles/theme";

export const Wrap = styled.div`
    width: 23vw;
    height: 30vw;
    border: 2px solid color-mix(in srgb, ${baseTheme.color.elementColor} 60%, transparent);
    border-radius: 20px;
    padding: 5px;
    overflow: hidden;

    @media ${baseTheme.media.phone} {
        width: 70vw;
        margin: 0 auto
    }
`

export const Title = styled(H4)`
    text-align: center;
    margin: 10px 0;
`

export const Img = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.2s linear;

    :hover {transform: scale(1.05)}

    @media ${baseTheme.media.phone} {height: 300px}
`

export const ImgBlock = styled.div`
    display: inline-block;
    overflow: hidden;
    width: 100%;
    height: 85%;
    border-radius: 15px;

    @media ${baseTheme.media.phone} {height: 300px}
`