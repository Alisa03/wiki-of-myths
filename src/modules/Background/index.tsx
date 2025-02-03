import { Container, H1, H2 } from "~/app/styles/styledComponents"

import { FonBlock } from "./styles"

export const Background = (props: any) => {
    return (
        <FonBlock {...props}>
            <Container>
                <H1>{props.title}</H1>
                <H2>{props.subtitle}</H2>
            </Container>
        </FonBlock>
    )
}