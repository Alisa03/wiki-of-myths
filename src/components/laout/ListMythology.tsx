import useVisible from "../../hooks/useVisible"

import { Button, Block } from "../../assets/styles/styledComponents"

import LinkBlock from "../ui/LinkBlock"

const ListMythology = ({ list }: any) => {
    const { showMore, visible } = useVisible()

    return (
        <>
            <Block>
                {
                    list.map((item: any) => <LinkBlock key={item.id} to={`/wiki-of-myths/mythology/${item.id}`} item={item}>{item.name}</LinkBlock>)
                }
            </Block>
            <Block>
                {list && (list.length >= visible) && <Button onClick={showMore}>Показать еще</Button>}
            </Block>
        </>
    )
}

export default ListMythology