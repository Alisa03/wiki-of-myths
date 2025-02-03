import { Link } from "react-router-dom"

import s from './link_block.module.css'

export const LinkBlock = ({ name, img, to }: {[key: string]: string}) => {
    return (
        <Link to={to}>
            <div className={s.wrap}>
                <div className={s.img_block}>
                    <img className={s.img} src={img} alt="" />
                </div>
                <div style={{
                    display: "flex",
                    height: "calc(100% - 85% - 10px)",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <h4 className={s.title} style={{
                        margin: 0
                    }}>{name}</h4>
                </div>
            </div>
        </Link>
    )
}