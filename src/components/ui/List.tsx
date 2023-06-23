import { ListText, Info, Text, InfoFamily } from "../../assets/styles/styledComponents"
import LinksText from "./LinksText"

const List = ({ data, text }: any) => {
    return (
        <>
            {
                data &&
                <InfoFamily>
                    <Text>{text}: </Text>
                    <ListText><LinksText text={data} /></ListText>
                </InfoFamily>
            }
        </>
    )
}

export default List