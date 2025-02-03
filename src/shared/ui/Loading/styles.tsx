import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
`

export const Loader = styled.span`
    --loader-size: 50px;
    --loader-border-size: 4px;
    --loader-border-color: white;

    position: relative;

    background-color: transparent;
    border: var(--loader-border-size) solid var(--loader-border-color);
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;

    width: var(--loader-size);
    height: var(--loader-size);
    animation: rotateX 1s infinite linear;

    ::before {
    content: "";
    border: var(--loader-border-size) solid var(--loader-border-color);
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: transparent;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    animation: rotateX 0.5s infinite linear reverse;
}

@keyframes rotateX {
  from {
        transform: rotateZ(0deg);
    }
  to {
        transform: rotateZ(360deg);
    }
}
`