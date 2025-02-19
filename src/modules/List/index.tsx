import { Link } from "react-router-dom"
import { Text } from "~/app/styles/styledComponents"
import { MYTHOLOGY_ROUTE } from "~/shared/utils/consts"

import s from './list.module.css'
import clsx from "clsx"

interface IProps {
    data: {
        id: string,
        name: string
    }[] | string[],
    text: string,
    mythology?: string
}

export const List = ({ data, text, mythology }: IProps) => {
    return data &&
        <div style={{ display: 'flex', justifyContent: "space-between", gap: 5 }}>
            <Text>{text}: </Text>
            {
                data.length === 1
                    ? typeof data[0] === "string"
                        ? <p className={clsx(s.item, s.list)}>{data[0]}</p>
                        : <Link className={clsx(s.item, s.list)} to={data[0].id}>
                            {data[0].name}
                        </Link>
                    : data.length > 0
                    && <ul className={s.list} >
                        {data.map((god: {
                            id: string,
                            name: string
                        } | string, index: number) =>
                            <li className={s.item} key={index}>
                                {
                                    typeof god === 'string' ? god :
                                        <Link to={MYTHOLOGY_ROUTE + mythology + '/' + god.id}>
                                            {god.name}
                                        </Link>
                                }
                            </li>
                        )}
                    </ul>
            }
        </div >
}