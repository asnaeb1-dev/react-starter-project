import React, { useState } from 'react'
import ToastMessage, { ToastType } from '../../common/ToastMessage/ToastMessage'

const LoginScreen = () => {
    const [showToast, setShowToast] = useState(false);

    return (
        <div className=''>
            <button onClick={() => setShowToast(true)}>Show Toast</button>
            <ToastMessage
                showToast={showToast}
                closeToast={() => setShowToast(false)}
                type={ToastType.ERROR}
            />
        </div>
    )
}

export default LoginScreen