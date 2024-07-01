import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PATHS } from '../data/utils/strings';

import DashboardScreen from "../ui/screens/DashboardScreen/DashboardScreen"
import LandingScreen from '../ui/screens/LandingScreen/LandingScreen';
import LoginScreen from '../ui/screens/LoginScreen/LoginScreen';
import PrivateRoutes from './PrivateRoutes';

const RouterRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route exact path={PATHS.LANDING_PAGE} element={<LandingScreen />} />
                    <Route exact path={PATHS.DASHBOARD_PAGE} element={<DashboardScreen />} />
                </Route>
                <Route exact path={PATHS.LOGIN_PAGE} element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterRoutes;