import { useState } from "react"

import { Title3, Title5 } from "../../../assets/styles/styledComponents"
import { Wrap } from "./styles"

import Desc from "../Desc"
import Modal from "../Modal"

const LegendPreview = ({ legend }: any) => {
    const [open, setOpen] = useState(false)

    const OpenModal = () => {
        const op = open ? 'unset' : 'hidden'
        document.body.style.overflow = op
        setOpen(!open)
    }

    return (
        <>
            <Wrap onClick={() => OpenModal()}>
                <Title5>{legend.title}</Title5>
                <Desc data={legend} text={legend.body.slice(0, 200)} />
            </Wrap>
            <Modal isOpen={open} toggle={() => OpenModal()}>
                <Title3>{legend.title}</Title3>
                <Desc data={legend} text={legend.body} />
                {
                    legend.img &&
                    <img src={`${legend.img}`} />
                }
            </Modal>
        </>
    )
}

export default LegendPreview