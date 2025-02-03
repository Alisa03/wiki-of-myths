import { useParams } from "react-router-dom";

import json from '../../../public/server/db.json'

import { List } from "~/modules";

import { Img, Wr } from "./styles";

import { Desc } from "~/shared/ui";

import { Container, H1, H4, Info, Text, Wrap } from "~/app/styles/styledComponents";
import { useEffect } from "react";

export const God = () => {
    const { id } = useParams()
    const { godsId } = useParams();

    const mythology: any = json.mythology.find((i: any) => i.id === id)
    const god = mythology.gods.find((i: any) => i.id === godsId)

    useEffect(() => {
        fetch(`/${id}`)
            .then((response) => console.log(response))

    }, [godsId])

    return (
        <Container style={{}}>
            <H1>{god.name}</H1>
            <Wr>
                <Img src={"/" + id + "/" + godsId + ".webp"} alt={`${god.id}`} />
                <Wrap style={{ alignItems: "flex-start" }}>
                    <Info>
                        <Text>Другое написание:</Text>
                        <Text style={{ fontFamily: "Ubuntu" }}>{god.otherName}</Text>
                    </Info>

                    {
                        god.managed &&
                        <Info>
                            <Text>Является:</Text>
                            <Text>{god.managed}</Text>
                        </Info>
                    }

                    <Text>{god.type}</Text>
                    <List data={god.parents} text="Родители" />
                    <List data={god.children} text="Дети" />
                    <List data={god.spouse} text="Партнер" />
                </Wrap>
            </Wr>
            <>
                <H4>История:</H4>
                <Desc data={god} text={god.history} />
            </>
        </Container>
    )
}