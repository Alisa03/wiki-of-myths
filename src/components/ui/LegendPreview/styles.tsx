import styled from "styled-components";

import { baseTheme } from "../../../assets/styles/theme";

export const Wrap = styled.div`
    background: ${baseTheme.color.blockColor};
    border-radius: 48px;
    color: ${baseTheme.color.textColor};
    cursor: pointer;

    width: 90%;
    padding: 30px;

    @media (${baseTheme.media.table}) {
        width: 100%
    }
`