import { ReactElement, ReactNode } from "react";
import { ModalBox, ModalOverlay, ModalBlock, Close } from "./styles";

interface IProps {
    children: ReactElement | ReactNode,
    isOpen: boolean,
    toggle: () => void
}

export const Modal = ({ children, isOpen, toggle }: IProps) => {
    return <>
        {
            isOpen && <ModalBlock className="modal-active">
                <ModalOverlay onClick={toggle} />
                <ModalBox>
                    <Close onClick={toggle} />
                    {children}
                </ModalBox>
            </ModalBlock>
        }
    </>
}