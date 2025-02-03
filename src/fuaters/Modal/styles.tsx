import styled from "styled-components";

import { baseTheme } from "~/app/styles/theme";

export const ModalBlock = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;

    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;

    background: rgba(0, 0, 0, 0.7);

    width: 100vw;
    height: 100vh;
`

export const ModalBox = styled.div`
    position: relative;
    z-index: 50;
    display: block;

    background: ${baseTheme.color.blockColor};
    border-radius: 1rem;
    overflow: auto;

    width: 50%;
    max-height: 85%;
    padding: 3rem;

    img {
        width: 100%;
        margin-top: 20px;
        border-radius: .5rem
    }

    ::-webkit-scrollbar {
        background: #00000000;
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 50px;
        box-shadow: inset 0 0 3rem ${baseTheme.color.elementColor};
    }

    @media ${baseTheme.media.table} {
        width: 80%
    }

    @media ${baseTheme.media.phone} {
        width: 97%;
        margin: 0 auto;
        header: 99%
    }
`

export const Close = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    opacity: 0.3;
    cursor: pointer;
    transition: all .7s ease;

    :hover {opacity: 1}
    
    :before, :after {
        position: absolute;
        content: ' ';
        
        height: 30px;
        width: 3px;
        margin-top: -15px;
        border-radius: 20px;
        background-color: ${baseTheme.color.textColor};
    }

    :before {transform: rotate(45deg)}
    :after {transform: rotate(-45deg)}
`