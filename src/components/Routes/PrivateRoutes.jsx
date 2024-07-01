import React, { useState } from 'react'

import { Outlet, Navigate } from "react-router-dom"
import { PATHS } from '../data/utils/strings';

const PrivateRoutes = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    
    return (
        isAuthenticated ?
            <Outlet />
            :
            <Navigate to={PATHS.LOGIN_PAGE} />
    )
}

export default PrivateRoutes