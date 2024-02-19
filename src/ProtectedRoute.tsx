import React, { ReactNode } from 'react';
import { useAuth } from './hooks/useAuth';
import { Navigate } from 'react-router-dom';

interface ProtectedInterface {
    children: ReactNode;
}

export const ProtectedRoute = ({children}:ProtectedInterface)=>{
    const {user } = useAuth();
    if(!user){
        return <Navigate to="/login"/>
    }
    return <>{children}</>;
}