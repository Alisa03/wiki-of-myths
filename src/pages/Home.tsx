import json from '../../public/server/db.json'

import { Mythologys } from '~/screens';

import { Background } from "~/modules";

import { Container, H3 } from '~/app/styles/styledComponents';

export const Home = () => {
    const mythologys = json.mythology

    return <div>
        <Background fon="/Fon.webp" title="Сборник мифов&nbsp;" subtitle="и богов" />
        <Container>
            <H3>Мифологии</H3>
            <Mythologys data={mythologys} />
        </Container>
    </div>
}