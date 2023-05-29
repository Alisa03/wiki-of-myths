import { useState } from "react"

const useVisible = () => {
    const [visible, setVisible] = useState<number>(3)

    const showMore = () => {
        setVisible(visible + 3)
    }

    return { showMore, visible }
}

export default useVisible