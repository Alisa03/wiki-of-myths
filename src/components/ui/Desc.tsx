import { InfoText } from "../../assets/styles/styledComponents"
import LinksText from "./LinksText"

const Desc = ({ data, text }: any) => {
    return (
        <>
            {
                data && text.split('\n').map((i: any, index: any) => <InfoText key={index}><LinksText text={i} /></InfoText>)
            }
        </>
    )
}

export default Desc