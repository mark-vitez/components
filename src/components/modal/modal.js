import { useEffect } from "react";
import { createPortal } from "react-dom"
import Button from "../button/button";

export function Modal({ handleBackdrop = true, onClose, children, actionBar }) {

    const handleBackdropClick = () => {
        if (handleBackdrop) {
            onClose();
        }
    }

    useEffect(() => {
        console.log('no overflow');
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'visible'; console.log('overflow visible'); };
    }, [])

    return createPortal(
        <div>
            <div onClick={ handleBackdropClick } className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="fixed flex-col justify-between h-full">

                    { children }
                    <div className="flex justify-end w-full">{ actionBar }</div>
                </div>
            </div>
        </div>,
        document.getElementById("modal-container")
    )
}

export default Modal