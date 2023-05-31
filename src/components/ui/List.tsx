import { useParams } from "react-router-dom"

import { InfoText, Info, Text } from "../../assets/styles/styledComponents"
import LinksText from "./LinksText"


const List = ({ data, text }: any) => {

    console.log(
    )

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