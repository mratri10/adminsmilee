import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import HomePage from './src/page/HomePage';
import LoginPage from './src/page/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';

export default function RouteApp() {
    
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                path="/"
                element={<ProtectedRoute>
                    <HomePage />
                    </ProtectedRoute>
                }
                />
            </Routes>
        </AuthProvider>
    )
}