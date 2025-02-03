import { Block } from "~/app/styles/styledComponents"

import { LinkBlock, VisibleButton } from "~/fuaters"

import { useVisible } from "~/shared/hooks"
import { MYTHOLOGY_ROUTE } from "~/shared/utils/consts"

export const Mythologys = ({ data }: any) => {
    const { showMore, visible } = useVisible()

    return <>
        <Block>
            {
                data.map((item: string) =>
                    <LinkBlock
                        key={item} to={`${MYTHOLOGY_ROUTE}${item}`}
                        name={item} img={"/" + item + "/img.webp"}
                    />
                )
            }
        </Block>
        <Block>
            <VisibleButton list={data.length} showMore={showMore} visible={visible} />
        </Block>
    </>
}