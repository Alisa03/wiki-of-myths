import { Link } from "react-router-dom"

import { Img, ImgBlock, Title, Wrap } from "./styles"

const LinkBlock = ({ name, img, to }: any) => {
    return (
        <Link to={to}>
            <Wrap>
                <ImgBlock>
                    <Img src={img} alt="" />
                </ImgBlock>
                <Title>{name}</Title>
            </Wrap>
        </Link>
    )
}

export default LinkBlock