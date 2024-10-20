import styled from "styled-components";

import { Title5 } from "../../../assets/styles/styledComponents";
import { baseTheme } from "../../../assets/styles/theme";

export const Wrap = styled.div`
    width: 230px;
    background: #1E1E1E;
    border-radius: 30px;
    padding: 5px;
    overflow: hidden;

    @media ${baseTheme.media.phone} {
        width: 70vw;
        margin: 0 auto
    }
`

export const Title = styled(Title5)`
    text-align: center;
    margin: 10px 0;
`

export const Img = styled.img`
    display: block;
    width: 100%;
    height: 230px;
    border-radius: 25px 25px 10px 10px;
    transition: all 0.2s linear;

    :hover {transform: scale(1.05)}

    @media ${baseTheme.media.phone} {height: 300px}
`

export const ImgBlock = styled.div`
    display: inline-block;
    overflow: hidden;
    width: 100%;
    height: 230px;
    border-radius: 30px 30px 10px 10px;

    @media ${baseTheme.media.phone} {height: 300px}
`