
import { useAuth } from '../../../hooks/useAuth';
import { NavLink, Navigate, useOutlet } from 'react-router-dom';
import { LogoutComponent } from '../../components/LogoutComponent';


const navItems = [
    { title: 'Users', path: 'user' },
    { title: 'Settings', path: 'setting' },
  ];

export const ProtectedRoute = ()=>{
    
    const outlet = useOutlet();
    const {user} = useAuth();
    if(!user){
        return <Navigate to="/login"/>
    }
    return <div className='flex flex-row'>     
      <ul className="w-28 flex flex-col p-3 bg-gray-950 ">
        <NavLink to={""}
        className={({isActive})=>isActive?
        "text-gray-200 hover:text-gray-100"
        :
        "text-gray-400 hover:text-gray-100"}>Dashboard</NavLink>
        {navItems.map((item, index) => (
          <li key={index} className='ml-2'>
            <NavLink 
              to={item.path} 
              className={({isActive})=>isActive?
              "text-gray-200 hover:text-gray-100"
              :
              "text-gray-400 hover:text-gray-100"}>{item.title}</NavLink>
          </li>
        ))}
        <div className='flex flex-grow'/>
        <LogoutComponent/>
      </ul>
        <div className='flex-grow'>
        {outlet}
        </div>
    </div>;
}