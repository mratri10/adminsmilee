import { ReactNode, createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useNavigate } from 'react-router-dom';

interface AuthInterface {
    children: ReactNode;
}
export interface IAuth {
    user: any;
    login:(data:any) => void;
    logout:() => void;
}

const AuthContext = createContext<IAuth>({user:null, login:(data:any)=>{}, logout:()=>{}});
export const AuthProvider = (data:AuthInterface) =>{
    const [user, setUser] = useLocalStorage({keyName: "user", defaultValue:null});
    const navigate = useNavigate();

    const login = (data:any) =>{
        setUser({keyName: "user", defaultValue:data});
        navigate("/")
    }

    const logout = () =>{
        setUser({keyName: "user", defaultValue:null});
        navigate("/login")
    }
    const value = useMemo(() =>({
         user,
         login,
         logout,
    }), [user]);

    return <AuthContext.Provider value={value}>{data.children}</AuthContext.Provider>
}


export const useAuth = () =>{
    return useContext(AuthContext)
}