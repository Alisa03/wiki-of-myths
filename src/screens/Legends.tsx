import { H3, Wrap } from "~/app/styles/styledComponents"

import { LegendPreview } from "~/modules"

import { VisibleButton } from "~/fuaters"

import { useVisible } from "~/shared/hooks"

export const Legends = ({ data }: any) => {
    const { showMore, visible } = useVisible()

    return data &&
        <Wrap>
            <H3>Мифы</H3>
            {
                data.slice(0, visible).map((item: any) =>
                    <LegendPreview key={item.id} legend={item} />
                )
            }
            <VisibleButton list={data.length} visible={visible} showMore={showMore} />
        </Wrap>
}