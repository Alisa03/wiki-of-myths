import { useParams } from "react-router-dom"

import { InfoText, Info } from "../../assets/styles/styledComponents"
import { TextData } from "../../pages/God/styles"
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
                    <TextData><LinksText text={data} /></TextData>
                </Info>
            }
        </>
    )
}

export default List