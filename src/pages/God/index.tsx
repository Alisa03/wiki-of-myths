import { Suspense, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import json from '../../../server/db.json'

import { Container, Text, Title1, Title5, Wrap, Info } from "../../assets/styles/styledComponents";
import { Img, Wr } from "./styles";

import Desc from "../../components/ui/Desc";
import List from "../../components/ui/List";
import Loading from "../../components/ui/Loading";

const God = () => {
    const { id } = useParams()
    const { godsId } = useParams();

    const mythology: any = json.mythology.find((i: any) => i.id === id)
    const god = mythology.gods.find((i: any) => i.id === godsId)

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])

    return (
        <Suspense fallback={<Loading />}>
            <Container>
                <Title1>{god.name}</Title1>
                <Wr>
                    <Img src={`/wiki-of-myths${god.img}`} alt={`${god.id}`} />
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
                    <Title5>История:</Title5>
                    <Desc data={god} text={god.history} />
                </>
            </Container>
        </Suspense >
    )
}

export default God
