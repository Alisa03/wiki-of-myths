import { InfoText, Info, Text } from "../../assets/styles/styledComponents"
import LinksText from "./LinksText"

const List = ({ data, text }: any) => {
    return (
        <>
            {
                data &&
                <Info>
                    <InfoText>{text}: </InfoText>
                    <Text><LinksText text={data} /></Text>
                </Info>
            }
        </>
    )
}

export default List