import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthProvider } from '../hooks/useAuth';

export default function RouteApp() {
    
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path='/' element={<h1>Hello World</h1>}/>
                <Route path='/admin' element={<ProtectedRoute/>}>
                    <Route path='' element={<HomePage />}/>
                </Route>
                
            </Routes>
        </AuthProvider>
    )
}