import styled from "styled-components";

import { Title5 } from "../../../assets/styles/styledComponents";
import { baseTheme } from "../../../assets/styles/theme";

export const Wrap = styled.div`
    width: 230px;
    background: #1E1E1E;
    border-radius: 30px;
    padding: 5px;
    overflow: hidden;

    img {
        width: 100%;
        height: 230px;
        border-radius: 30px 30px 10px 10px;
        transition: all 0.2s linear;
    }

    :hover img {
        transform: scale(1.05);
    }

    @media ${baseTheme.media.phone} {
            width: 70vw;
            margin: 0 auto;

            img {
                height: 300px;
            }
        }
`

export const Title = styled(Title5)`
        text-align: center;
        margin: 10px 0;
`