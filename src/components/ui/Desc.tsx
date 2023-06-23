import { Text } from "../../assets/styles/styledComponents"
import LinksText from "./LinksText"

const Desc = ({ data, text }: any) => {
    return (
        <>
            {
                data && text.split('\n').map((i: any, index: any) => <Text key={index}><LinksText text={i} /></Text>)
            }
        </>
    )
}

export default Desc