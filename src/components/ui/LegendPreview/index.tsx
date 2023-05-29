import React, { useState } from "react"

import { InfoText, Title3, Title5 } from "../../../assets/styles/styledComponents"
import { Wrap } from "./styles"

import Modal from "../Modal"
import LinksText from "../LinksText"

const LegendPreview = ({ legend }: any) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Wrap onClick={() => {
                document.body.style.overflow = 'hidden';
                setOpen(!open)
            }
            }>
                <Title5>{legend.title}</Title5>
                {legend && legend.body.slice(0, 200).split('\n').map((i: any, index: any) => <InfoText key={index}><LinksText text={i} /> ...</InfoText>)}
            </Wrap>
            <Modal isOpen={open} toggle={() => {
                document.body.style.overflow = 'unset';
                setOpen(!open)
            }
            }>
                <Title3>{legend.title}</Title3>
                {legend && legend.body.split('\n').map((i: any, index: any) => <InfoText key={index}><LinksText text={i} /></InfoText>)}
                {
                    legend.img &&
                    <img src={`${legend.img}`} />
                }
            </Modal>
        </>
    )
}

export default LegendPreview