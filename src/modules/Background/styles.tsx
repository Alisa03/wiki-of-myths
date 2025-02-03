import styled from "styled-components"

export const FonBlock = styled.div<{ fon: string }>`
    background: url(${(props: any) => props.fon}) center no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    height: 90vh;
`
