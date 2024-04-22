import { FC } from "react";

interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode;
    className?: string
}


const Modal: FC<ModalProps> = ({ isOpen, children, className }) => {

    if (isOpen) {
        const modal = document.getElementById('my_modal_5');
        if (modal instanceof HTMLDialogElement) {
            modal.showModal();
        }
    } else {
        const modal = document.getElementById('my_modal_5');
        if (modal instanceof HTMLDialogElement) {
            modal.close();

        }
    }

    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className={`modal-action ${className}`}>
                    {children}
                </div>
            </div>
        </dialog>
    )
}

export default Modal