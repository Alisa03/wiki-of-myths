import { Button } from "~/shared/ui"

export const VisibleButton = ({ list, visible, showMore }: {list: number, visible: number, showMore: (args: any) => void}) => {
    return (list > visible) ?
        <Button onClick={showMore}>Показать еще</Button> : null
}
