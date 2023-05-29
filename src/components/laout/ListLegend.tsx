import { Button, Title3, Wrap } from "../../assets/styles/styledComponents"

import useVisible from "../../hooks/useVisible"

import LegendsPreview from "../ui/LegendPreview"

const Legends = ({ list }: any) => {
    const { showMore, visible } = useVisible()

    return (
        <>
            {
                list &&
                <Wrap>
                    <Title3>Легенды</Title3>
                    {list.slice(0, visible).map((item: any) => <LegendsPreview key={item.id} legend={item} />)}
                    {(list.length > visible) && <Button onClick={showMore}>Показать еще</Button>}
                </Wrap>
            }
        </>
    )
}

export default Legends