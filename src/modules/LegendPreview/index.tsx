import { useState } from "react"
import { useParams } from "react-router-dom"

import { H3, H4 } from "~/app/styles/styledComponents"

import { Modal } from "~/fuaters/Modal"

import { Desc } from "~/shared/ui"

import ProviewText from './ProviewText'
import { Wrap } from "./styles"

export const LegendPreview = ({ legend }: any) => {
    const [open, setOpen] = useState(false)
    const { id } = useParams();

    const OpenModal = () => {
        document.body.style.overflow = open ? 'unset' : 'hidden'
        setOpen(!open)
    }

    return (
        <>

            <Wrap onClick={OpenModal}>
                <H4>{legend.title}</H4>
                <ProviewText text={legend.body.slice(0, 200)} />
            </Wrap>

            <Modal isOpen={open} toggle={OpenModal}>
                <H3>{legend.title}</H3>
                <Desc data={legend} text={legend.body} />
                {
                    legend.img &&
                    <img src={"/" + id + "/" + legend.img} />
                }
            </Modal>

        </>
    )
}