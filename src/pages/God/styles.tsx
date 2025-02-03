import styled from "styled-components";

import { baseTheme } from "../../app/styles/theme";

export const Img = styled.img`
    border-radius: 20px;
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

