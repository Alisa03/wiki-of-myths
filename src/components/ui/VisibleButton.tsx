import { Button } from "../../assets/styles/styledComponents"

const VisibleButton = ({ list, visible, showMore }: any) => {
    return (
        <>
            {
                (list.length > visible) &&
                <Button onClick={showMore}>Показать еще</Button>
            }
        </>
    )
}

export default VisibleButton