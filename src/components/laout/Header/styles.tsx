import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { baseTheme } from "../../../assets/styles/theme";

const StyledText = css`
    color: ${baseTheme.color.textColor};
    font: 500 1.3rem/1 ${baseTheme.fonts.text};
    text-transform: uppercase;
`

export const HeaderContainer = styled.header`
    position: absolute;
    z-index: 10;

    background: rgba(0, 0, 0, 0.7);

    width: 100%;
    padding: 15px 0;
    background-clip: text;
`

export const HeaderLink = styled(Link)`
    position: relative;

    ${StyledText};

    ::after {
        content: '';
        position: absolute;
        bottom: -7px;
        left: 0;

        background: ${baseTheme.color.textColor};
        border-radius: 18px;

        height: 2px;
        width: 0;

        transition: width 1s ease
    }

    :hover:after {
        width: 100%
    }
`

export const Nav = styled.nav`
    display: flex;
    gap: 15px;

    width: 80%;
    margin: 0 auto
`

export const Dropdown = styled.div`
        position: relative;
        ${StyledText};

    ul {
        position: absolute;

        display: none;

        background: ${baseTheme.color.blockColor};
        border-radius: 18px;

        padding: 25px;
        
        li {
            white-space: nowrap;
            margin-bottom: 10px;
            padding: 10px 0;

            @media ${baseTheme.media.table} {
                white-space: inherit;
            }
        }
    }

    :hover ul {
        display: block
    }
`