import { ModalBox, ModalOverlay, ModalBlock, Close } from "./styles";

export const Modal = ({ children, isOpen, toggle }: any) => {
    return isOpen &&
        <ModalBlock className="modal-active">
            <ModalOverlay onClick={toggle} />
            <ModalBox>
                <Close onClick={toggle}  />
                {children}
            </ModalBox>
        </ModalBlock>
}