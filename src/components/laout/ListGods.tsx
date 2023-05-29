import { useParams } from "react-router-dom";

import useVisible from "../../hooks/useVisible";

import { Button, Block } from "../../assets/styles/styledComponents";

import LinkBlock from "../ui/LinkBlock"

const ListGods = ({ data }: any) => {
    const { id } = useParams();
    const { showMore, visible } = useVisible()

    return (
        <>
            <Block>
                {data?.slice(0, visible).map((god: any) =>
                    <LinkBlock key={god.id} to={`/wiki-of-myths/mythology/${id}/${god.id}`} item={god} />)
                }
            </Block>
            <Block style={{ margin: "20px 0" }}>
                {data && (data.length > visible) && <Button onClick={showMore}>Показать еще</Button>}
            </Block>
        </>
    )
}

export default ListGods