import { InfoFamily, ListText, Text } from "~/app/styles/styledComponents"

import LinksText from "~/fuaters/LinksText"

export const List = ({ data, text }: any) => {
    return data &&
        <InfoFamily>
            <Text>{text}: </Text>
            <ListText>
                <LinksText text={data} />
            </ListText>
        </InfoFamily>
}