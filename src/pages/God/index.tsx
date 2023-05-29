import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import json from '../../../server/db.json'


import { Container, InfoText, Text, Title1, Title5, Wrap, Info } from "../../assets/styles/styledComponents";
import { Img, TextData, Wr, Block } from "./styles";

import Loading from "../../components/ui/Loading";
import LinksText from "../../components/ui/LinksText";
import List from "../../components/ui/List";

const God = () => {
    const { id } = useParams()
    const { godsId } = useParams();

    const [mythology, setMythology] = useState<any>(json.mythology.find((i: any) => i.id === id))
    const god = mythology.gods.find((i: any) => i.id === godsId)

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])

    return (
        <Suspense fallback={<Loading />}>
            {god &&
                <Container>
                    <Title1>{god.name}</Title1>
                    <Wr>
                        <Img src={`/wiki-of-myths${god.img}`} alt={`${god.id}`} />
                        <Wrap style={{ alignItems: "flex-start" }}>
                            <Info>
                                <Text>Греческое написание:</Text>
                                <TextData>{god.otherName}</TextData>
                            </Info>
                            {god.managed &&
                                <Info>
                                    <Text>Является:</Text>
                                    <TextData>{god.managed}</TextData>
                                </Info>
                            }

                            <Text>{god.type}</Text>
                            <List data={god.parents} text="Родители" />
                            <List data={god.children} text="Дети" />
                            <List data={god.spouse} text="Партнер" />
                        </Wrap>

                    </Wr>
                    <Block>
                        <Title5>История:</Title5>
                        {god && god.history.split('\n').map((i: any, index: any) => <InfoText key={index}><LinksText text={i} /></InfoText>)}
                    </Block>
                </Container>
            }
        </Suspense >
    )
}

export default God
