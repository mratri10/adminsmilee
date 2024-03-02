import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import { ProtectedRoute } from './page/admin/ProtectedRoute';
import { AuthProvider } from '../hooks/useAuth';
import DashboardPage from './page/DashboardPage';
import UserPage from './page/admin/UserPage/UserPage';

export default function RouteApp() {
    
    
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path='/' element={<DashboardPage/>}/>
                <Route path='admin' element={<ProtectedRoute/>}>
                    <Route path='' element={<HomePage />}/>
                    <Route path='user' element={<UserPage />}/>
                    <Route path='setting' element={<div />}/>
                    <Route path='profile' element={<HomePage />}/>
                </Route>
            </Routes>
        </AuthProvider>
    )
}