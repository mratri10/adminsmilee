
import { useAuth } from '../hooks/useAuth';
import { Navigate, useOutlet } from 'react-router-dom';


export const ProtectedRoute = ()=>{
    const outlet = useOutlet();
    const {user } = useAuth();
    if(!user){
        return <Navigate to="/login"/>
    }
    return <>{outlet}</>;
}