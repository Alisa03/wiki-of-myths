import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { List } from "~/modules";

import { Desc } from "~/shared/ui";

import { H1, H4, Info, Text } from "~/app/styles/styledComponents";

import s from './god.module.css'
import clsx from "clsx";

export const God = () => {
    const { id } = useParams()
    const { godsId } = useParams();

    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [god, setGod] = useState<any>()

    useEffect(() => {
        fetch(`/server/${id}.json`)
            .then((response) => {
                setIsLoading(true)
                return response.json()
            })
            .then((data: mythology) => {
                const god = data.gods.find((i: any) => i.id === godsId)
                setGod(god)
            }
            )
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false))
    }, [godsId, id])

    if (isLoading) return <p>Loading</p>
    if (isError) return <p>Error</p>

    return <>
        {
            god
            && <div style={{ paddingTop: '5rem' }}>
                <H1>{god?.name}</H1>
                <div className={clsx(s.wrapper, 'container')}>
                    <div className={s.wrap}>
                        <img className={s.img} src={"/" + id + "/" + godsId + ".webp"} alt={`${godsId}`} />
                        <div className={s.info}>
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
                            <List mythology={id} data={god.parents} text={god.parents > 1 ? "Родители" : "Родитель"} />
                            <List mythology={id} data={god.children} text="Дети" />
                            <List mythology={id} data={god.spouse} text="Партнер" />
                        </div>
                    </div>
                    <div>
                        <H4>История:</H4>
                        <Desc data={god} text={god.history} />
                    </div>
                </div>
            </div>
        }
    </>
}