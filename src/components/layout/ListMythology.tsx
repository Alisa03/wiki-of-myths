import useVisible from "../../hooks/useVisible"
import { MYTHOLOGY_ROUTE } from "../../utils/consts"

import { Block } from "../../assets/styles/styledComponents"

import LinkBlock from "../ui/LinkBlock"
import VisibleButton from "../ui/VisibleButton"

const ListMythology = ({ data }: any) => {
    const { showMore, visible } = useVisible()

    return (
        <>
            <Block>
                {
                    data.map((item: any) =>
                        <LinkBlock
                            key={item.id} to={`${MYTHOLOGY_ROUTE}${item.id}`}
                            name={item.name} img={"/" + item.id + "/img.webp"}
                        />
                    )
                }
            </Block>
            <Block>
                <VisibleButton list={data} showMore={showMore} visible={visible} />
            </Block>
        </>
    )
}

export default ListMythology