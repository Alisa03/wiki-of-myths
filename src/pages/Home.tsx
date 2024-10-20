import { Suspense } from "react";

import json from '../../server/db.json'

import { Container, Title3 } from "../assets/styles/styledComponents";

import Background from "../components/ui/Background";
import ListMythology from "../components/layout/ListMythology";
import Loading from "../components/ui/Loading";

const Home = () => {
    const mythologys = json.mythology

    return (
        <Suspense fallback={<Loading />}>
            <div>
                <Background fon="/Fon.webp" title="Сборник мифов&nbsp;" subtitle="и богов" />
                <Container>
                    <Title3>Мифологии</Title3>
                    <ListMythology data={mythologys} />
                </Container>
            </div >
        </Suspense>
    )
}

export default Home