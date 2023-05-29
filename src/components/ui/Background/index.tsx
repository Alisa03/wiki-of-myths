import { Title1, Title2 } from "../../../assets/styles/styledComponents"
import { FonBlock } from "./styles"

const Background = (props: any) => {
    return (
        <FonBlock {...props}>
            <Title1>{props.title}</Title1>
            <Title2>{props.subtitle}</Title2>
        </FonBlock>
    )
}

export default Background