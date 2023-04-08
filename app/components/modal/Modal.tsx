'use client'

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io"
import Button from "../Button";
import RegisterModal from "./RegisterModal";
interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {
    const [showModal, setShowModal] = useState(isOpen)
    const registerModal = useRegisterModal()
    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => { onClose() }, 300)

    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit()
    }, [disabled, onSubmit])

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }
        secondaryAction()
    }, [disabled, secondaryAction])

    if (!isOpen) {
        return null
    }
    return (
        <>
            <div className="max-w-[640px] mx-auto items-center flex overflow-y-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
                <div className="mx-auto w-full h-full p-10">
                    {/* content */}
                    <div className={`translate duration-300 h-full 
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}
                    `}>
                        <div className="translate w-full h-full border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-one">
                            {/* header */}
                            <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                                <div className="text-lg font-semibold">
                                    {title}
                                </div>
                                <button onClick={handleClose} className="p-1 border-0 hover:opacity-80 transition absolute right-9">
                                    <IoMdClose size={18} />
                                </button>
                            </div>
                            {/* body */}
                            <div className="relative p-6 flex-auto">
                                {body}
                            </div>
                            {/* footer */}
                            <div className="flex flex-col gap-2 p-6">
                                <div className="flex flex-row items-center gap-4 w-full">
                                    {/* <Button icon={IoMdClose} label="My Button"/> */}
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button disabled={disabled} onClick={handleSecondaryAction} label={secondaryActionLabel} />
                                    )}
                                    <Button disabled={disabled} onClick={handleSubmit} label={actionLabel} />
                                  
                                </div>
                            
                                {footer}
                                <div className="text-neutral-500 text-center mt-4 font-light">
                                        <div className="justify-center flex flex-row items-center gap-2">
                                            <div>Already have an account?</div>
                                            <div
                                                onClick={registerModal.onClose}
                                             className="text-neutral-800 cursor-pointer hover:underline">Login</div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal