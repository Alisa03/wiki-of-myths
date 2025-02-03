import styled from "styled-components";

import { baseTheme } from "~/app/styles/theme";

export const Wrap = styled.div`
    border: 2px solid color-mix(in srgb, ${baseTheme.color.elementColor} 60%, transparent);
    border-radius: 20px;
    color: ${baseTheme.color.textColor};
    cursor: pointer;

    width: 90%;
    padding: 30px;

    @media (${baseTheme.media.table}) {
        width: 100%
    }
`