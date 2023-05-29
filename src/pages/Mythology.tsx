import { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";

import json from '../../server/db.json'

import ListGods from "../components/laout/ListGods";

import Legends from "../components/laout/ListLegend";
import Background from "../components/ui/Background";
import Loading from "../components/ui/Loading";

const Mythology = () => {
    const { id } = useParams<any>();
    const mythology: any = json.mythology.find((i: any) => i.id === id)

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])

    return (
        <Suspense fallback={<Loading />}>
            <Background fon={mythology.fon} title={mythology.name} subtitle={mythology.subtitle} />
            <Legends list={mythology.legends} />
            <ListGods data={mythology.gods} />
        </Suspense>
    )
}

export default Mythology