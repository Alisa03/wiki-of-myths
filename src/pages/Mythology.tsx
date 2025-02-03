import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Gods, Legends } from "~/screens";

import { Background } from "~/modules";

export const Mythology = () => {
    const { id } = useParams();

    const [data, setdata] = useState()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });

        fetch(`/server/${id}.json`)
            .then((res) => console.log(JSON.stringify(res.body)))
    }, [])

    return <>
        {/* <Background fon={"/" + id + "/Fon.webp"} title={mythology.name} subtitle={mythology.subtitle} />
        <Legends data={mythology.legends} />
        <Gods data={mythology.gods} /> */}
    </>
}