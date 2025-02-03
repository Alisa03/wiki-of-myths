import { Button } from "~/shared/ui"

export const VisibleButton = ({ list, visible, showMore }: any) => {
    return (list > visible) ?
        <Button onClick={showMore}>Показать еще</Button> : null
}
