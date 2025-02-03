import { Text } from "~/app/styles/styledComponents"

import LinksText from "~/fuaters/LinksText"

export const Desc = ({ data, text }: any) => {
    return data &&
        text.split('\n').map((i: any, index: any) =>
            <Text style={{ margin: "10px 0" }} key={index}>
                <LinksText text={i} />
            </Text>
        )
}