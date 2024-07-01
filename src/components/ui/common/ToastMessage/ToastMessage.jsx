import React, { useEffect, useState } from 'react'

import { ImCross as DeleteIcon } from "react-icons/im";
import { FaExclamation as WarningIcon } from "react-icons/fa6";
import { MdError as ErrorIcon } from "react-icons/md";
import { MdMessage as InfoIcon } from "react-icons/md";
import { IoCheckmarkDoneCircle as SuccessIcon } from "react-icons/io5";

export const ToastType = {
    INFO: 0,
    WARNING: 1,
    ERROR: 2,
    SUCCESS: 3,
}

const ToastMessage = ({
    type = ToastType.INFO,
    showToast = false, 
    closeToast,
    timeout = 3000,
}) => {

    const [isMouseOver, setMouseOver] = useState(false);

    const getToastIcon = () => {
        switch (type) {
            case ToastType.INFO:
                return <InfoIcon size={20} color='rgb(59 130 246)' />;
            case ToastType.WARNING:
                return <WarningIcon size={20} color='rgb(255, 193, 7)' />;
            case ToastType.ERROR:
                return <ErrorIcon size={20} color='rgb(239 68 68)' />;
            case ToastType.SUCCESS:
                return <SuccessIcon size={20} color='rgb(16 185 129)' />;
            default:
                return <InfoIcon size={20} color='rgb(59 130 246)' />;
        }
    }

    // useEffect(() => {
    //     let timer;
    //     if(!isMouseOver) {
    //         timer = setTimeout(() => closeToast(), timeout);
    //     } 
    //     return () => clearTimeout(timer);  // cleanup function to cancel the timer when the component unmounts  // eslint-disable-next-line
    // }, [isMouseOver, showToast])

    if(!showToast) return; 
    return (
        <div onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)} className={`fixed top-2 right-2 border-2 border-red-500 bg-red-500/10 rounded-t-lg rounded-b-xl shadow-xl border-red w-96 h-16   `}>
            {/* <div className='h-1 rounded-t-xl'>
                <div className='bg-red-500 w-full h-full'></div>
            </div> */}
            <div className='px-2 py-1 flex flex-row justify-between'>
                <div className='flex flex-row-reverse items-start gap-2'>
                    <div>
                        <h1 className=' font-semibold text-md  '>Toast title</h1>
                        <p className=' w-24 text-sm overflow-x-hidden whitespace-nowrap text-ellipsis'>Toast message ohrevrwrwlhrwugrwgrwpbgrwugohrwughrwgrwncj</p>
                    </div>
                    <div className='mt-[0.21rem]'>
                        {getToastIcon()}
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <button onClick={closeToast} className='border-red-500 rounded-full border-2 p-1'>
                        <DeleteIcon size={10} color='rgb(239 68 68)' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToastMessage