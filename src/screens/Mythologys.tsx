import { Block } from "~/app/styles/styledComponents"

import { LinkBlock, VisibleButton } from "~/fuaters"

import { useVisible } from "~/shared/hooks"
import { MYTHOLOGY_ROUTE } from "~/shared/utils/consts"

export const Mythologys = ({ data }: { data: { [key: string]: string }[] }) => {
    const { showMore, visible } = useVisible()

    return <>
        <Block>
            {
                data!.map(({ id, name }: { [key: string]: string }) =>
                    <LinkBlock
                        key={id} to={`${MYTHOLOGY_ROUTE}${id}`}
                        name={name} img={"/" + id + "/img.webp"}
                    />
                )
            }
        </Block>
        <Block>
            <VisibleButton list={data.length} showMore={showMore} visible={visible} />
        </Block>
    </>
}