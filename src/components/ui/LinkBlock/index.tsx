import { Link } from "react-router-dom"

import { Title, Wrap } from "./styles"

const LinkBlock = ({ item, to }: any) => {
    return (
        <Link to={to}>
            <Wrap>
                <img src={item.img} alt="" />
                <Title>{item.name}</Title>
            </Wrap>
        </Link>
    )
}

export default LinkBlock