import React, { useState } from 'react';
import { useStore } from '../../../store/hooks';
import { useAuth } from '../../../../hooks/useAuth';
import { observer } from 'mobx-react-lite';

interface IAddUserPage{
    onPress:()=>void
}
const AddUserPage=observer(({onPress}:IAddUserPage) =>{
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone:'',
      });
      const userStore = useStore('userStore')
      const {user} = useAuth()

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted with data:', formData);
        await userStore.addDataEmployee(formData, user.defaultValue.token)
        onPress()
        
      };
    return (
          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className=" px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-center">
                  <h1 className="text-2xl font-semibold mb-5">Employee Form</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="px-4 py-2 w-full border-2 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-4 py-2 w-full border-2 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="px-4 py-2 w-full border-2 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => 0}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      );
})

export default AddUserPage