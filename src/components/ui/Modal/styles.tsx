import styled, { css } from "styled-components";

import { baseTheme } from "../../../assets/styles/theme";

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
    padding: 1rem;

    img {
        width: 100%;
        margin-top: 20px;
        border-radius: 18px
    }

    ::-webkit-scrollbar {
        background: inherit;
        border-radius: 18px;
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
    border-radius: 18px;
    box-shadow: inset 0 0 6px #947772;
    width: 10px;
}

    @media ${baseTheme.media.table} {
        width: 80%
    }

    @media ${baseTheme.media.phone} {
        width: 95%;
        margin: 0 auto;
        header: 99%
    }
`

export const Close = styled.button`
    position: fixed; 

    cursor: pointer; 

    width: 30px;
    height: 30px;

    ::before, ::after {
        content: ""; 
        position: absolute; 

        background: ${baseTheme.color.textColor};
        border-radius: 18px;
        
        width: 24px; 
        height: 4px; 
    }

    :before {
    transform: rotate(45deg);
    }

    :after {
        transform: rotate(-45deg);
    }
`