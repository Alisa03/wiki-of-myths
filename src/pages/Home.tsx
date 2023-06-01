import { Suspense, useState } from "react";

import json from '../../server/db.json'

import { Container, Text, Title3 } from "../assets/styles/styledComponents";

import Background from "../components/ui/Background";
import Fon from "../assets/img/fon.jpg"
import ListMythology from "../components/layout/ListMythology";
import Loading from "../components/ui/Loading";

const Home = () => {
    const [mythologys, setMythologys] = useState(json.mythology)

    return (
        <Suspense fallback={<Loading />}>
            <div>
                <Background fon={Fon} title="Сборник мифов&nbsp;" subtitle="и легенд" />
                <Container>
                    <Title3>О нас</Title3>
                    <Text style={{ width: "75%", margin: "0 auto", textAlign: "center" }}>
                        Маленький проект, где собраны мифы разных стран.
                    </Text>
                </Container>
                <Container>
                    <Title3>Мифологии</Title3>
                    <ListMythology data={mythologys} />
                </Container>
            </div >
        </Suspense>
    )
}

export default Home