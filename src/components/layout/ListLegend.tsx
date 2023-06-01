import { Title3, Wrap } from "../../assets/styles/styledComponents"

import useVisible from "../../hooks/useVisible"

import LegendsPreview from "../ui/LegendPreview"
import VisibleButton from "../ui/VisibleButton"

const Legends = ({ data }: any) => {
    const { showMore, visible } = useVisible()

    return (
        <>
            {
                data &&
                <Wrap>
                    <Title3>Легенды</Title3>
                    {
                        data.slice(0, visible).map((item: any) =>
                            <LegendsPreview key={item.id} legend={item} />
                        )
                    }
                    <VisibleButton list={data} visible={visible} showMore={showMore} />
                </Wrap>
            }
        </>
    )
}

export default Legends