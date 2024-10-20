import { Suspense, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import json from '../../server/db.json'

import ListGods from "../components/layout/ListGods";

import Background from "../components/ui/Background";
import Legends from "../components/layout/ListLegend";
import Loading from "../components/ui/Loading";

const Mythology = () => {
    const { id } = useParams();
    const mythology: any = json.mythology.find((i: any) => i.id === id)

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])

    return (
        <Suspense fallback={<Loading />}>
            <>
                <Background fon={"/" + id + "/Fon.webp"} title={mythology.name} subtitle={mythology.subtitle} />
                <Legends data={mythology.legends} />
                <ListGods data={mythology.gods} />
            </>
        </Suspense>
    )
}

export default Mythology