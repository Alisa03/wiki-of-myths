import styled from "styled-components";

import { baseTheme } from "~/app/styles/theme";

export const Button = styled.button`
    background-color: ${baseTheme.color.elementColor};
    border-radius: 15px;
    cursor: pointer;
    color: black;

    min-width: 15rem;
    height: 3rem;

    font: 400 1.5rem/1.2 ${baseTheme.fonts.text};

    transition: var(--hover);

    :hover {
        background-color: color-mix(in srgb, ${baseTheme.color.elementColor} 70%, transparent);
    }

    :active {
        background: color-mix(in srgb, ${baseTheme.color.elementColor} 60%, transparent);
    }
`