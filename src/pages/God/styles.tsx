import styled from "styled-components";

import { baseTheme } from "../../assets/styles/theme";

export const Img = styled.img`
    border: 4px solid ${baseTheme.color.blockColor};
    border-radius: 48px;
    width: 40%; 
    max-height: 500px;
    margin: 10px 0;

    @media (max-width: 610px) {
        width: 100%;
        max-height: 100%
    }

    @media ${baseTheme.media.phone} {
        min-height: 200px
    }
`

export const Wr = styled.div`
    display: flex;
    gap: 0 25px;

    @media (max-width: 610px) {
        flex-direction: column;
    }
`

export const TextData = styled.p`
    margin: 0 5px;
    font-family: "Ubuntu";

    @media ${baseTheme.media.table} {
        font-size: 1.3rem
    }
`

export const Block = styled.div`
    @media ${baseTheme.media.phone} {
        padding: 0 10px
    }
`