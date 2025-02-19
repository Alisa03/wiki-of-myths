import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Gods, Legends } from "~/screens";

import { Background } from "~/modules";

import { Loading } from "~/shared/ui";

export const Mythology = () => {
    const { id } = useParams();

    const [data, setData] = useState<mythology>()
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });

        setIsLoading(true)
        fetch(`/server/${id}.json`)
            .then((response) => response.json())
            .then((json: mythology) => {
                setData(json)
            })
            .catch((er) => setError(er))
            .finally(() => setIsLoading(false))
    }, [id])

    if (isLoading) return <Loading />
    if (error) return <div className="container">Упс, что-то пошло не так</div>

    return <>
        {
            data
            && <>
                <Background fon={"/" + id + "/Fon.webp"} title={data.name} subtitle={data.subtitle} />
                <Legends data={data.legends} />
                <Gods data={data.gods} />
            </>
        }
    </>
}