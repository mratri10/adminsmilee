// UserPage.tsx

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/hooks';
import AddUserPage from './AddUserPage';

interface UserI{
  username:string,
  phone:string,
  email:string,
}
const UserPage: React.FC = observer(() => {
  const {user} = useAuth()
  const userStore = useStore("userStore")
  const [showAdd, setShowAdd] = useState(false)

  useEffect(()=>{
    initialData()
  },[])

  const initialData = async()=>{ 
    await userStore.getDataEmployee(user.defaultValue.token)
  }
  
  return (
    <div className="min-h-screen bg-gray-500 p-5 flex flex-col items-start -mt-5">
      <button className='p-2 bg-green-500 my-3 text-white rounded-lg' onClick={()=>setShowAdd(!showAdd)}>Tambah User</button>

      <table className="min-w-full bg-white rounded-tl-lg rounded-tr-lg">
            <thead>
                <tr>
                    <th className="px-6 py-3 bg-green-500 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider rounded-tl-lg">ID</th>
                    <th className="px-6 py-3 bg-green-500 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 bg-green-500 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 bg-green-500 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider rounded-tr-lg">Phone</th>
                </tr>
            </thead>
            <tbody className="bg-gray-300 divide-y divide-gray-200">
              {userStore.dataEmployee.map((v:UserI,i) =>{
                return(
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-no-wrap">{i+1}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{v.username}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{v.email}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{v.phone}</td>
                  </tr>
                )
              })}
            </tbody>
        </table>
        {showAdd?<>
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-slate-500 opacity-60'/>
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <AddUserPage onPress={()=> {
            setShowAdd(!showAdd)
          }}/>
        </div>
        </>:null}
    </div>
  );
});



export default UserPage;
