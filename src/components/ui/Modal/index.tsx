import { ModalBox, ModalOverlay, ModalBlock, Close } from "./styles";

function Modal({ children, isOpen, toggle }: any) {
    return (
        <>
            {
                isOpen &&
                <ModalBlock className="modal-active">
                    <ModalOverlay onClick={toggle} />
                    <ModalBox>
                        <Close onClick={toggle} />
                        {children}
                    </ModalBox>
                </ModalBlock>
            }
        </>
    )
}

export default Modal