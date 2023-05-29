import { Link } from "react-router-dom"

import { Title, Wrap } from "./styles"

const LinkBlock = ({ name, img, to }: any) => {
    return (
        <Link to={to}>
            <Wrap>
                <img src={img} alt="" />
                <Title>{name}</Title>
            </Wrap>
        </Link>
    )
}

export default LinkBlock