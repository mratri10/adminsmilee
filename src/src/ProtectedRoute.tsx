
import { useAuth } from '../hooks/useAuth';
import { Navigate, useOutlet } from 'react-router-dom';


export const ProtectedRoute = ()=>{
    const outlet = useOutlet();
    const {user } = useAuth();
    console.log("+++++++++++++++++++ ", user)
    if(!user){
        return <Navigate to="/login"/>
    }
    return <>{outlet}</>;
}