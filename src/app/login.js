'use client'
import React, { useContext, useEffect, useState } from 'react';
import { addUser } from './services/usersService';

import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from './services/loginService';
import SignupModal from './signup';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import UserContext from './context/userContext';
import { toast } from 'react-toastify';

const LoginModal = () => {
  const { setSignupModal, loginModal, setloginModal ,handleClickOutside} = useContext(UserContext);

  const redirect = useRouter()
 

  const [loginuser,setLoginUser] = useState({
  
    email:"",
    password:"",
  
  })



const handleSubmit  = async(event)=>{
event.preventDefault();

    try {
       
            const result = await loginUser(loginuser)
            toast.success("Added  User Sucessfully !!")
         
            setLoginUser({
              email:"",
              password:"",
              
            })
            setloginModal(false)
    
          
        
     
    
    } catch (error) {
  
        // if(loginuser.email===""||loginuser.password===""){
        //     toast.info("Please fill Out All Inputs Fields")
        // }else{  } 
      toast.error(error?.response?.data?.message)
    
  
  
    }



}



  return (
    <>
    {loginModal&&(<>
      <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={(event)=>handleClickOutside(event)}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full  mx-4 sm:mx-6 md:mx-8 max-w-lg  ">
        <h2 className="text-xl font-bold mb-4 text-gray-800 hover:text-[#4a5568]">
      Login
        </h2>
        <form  onSubmit={handleSubmit}>
          <>
         
            <div className='mb-5'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 ring-gray-500"
                placeholder="Enter your email"
                id='email'
                name='email'
                value={loginuser.email}
                onChange={(e)=>setLoginUser({...loginuser,email:e.target.value})}
              />
            </div>
            <div className='mb-5'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 ring-gray-500"
                placeholder="Enter your password"
                id='password'
                name='password'
                value={loginuser.password}
                onChange={(e)=>setLoginUser({...loginuser,password:e.target.value})}
              />
            </div>
         

            <div className="flex justify-end">
            <button
             type='button'
           onClick={()=>{setloginModal(false),setSignupModal(true)}}
                className="bg-gray-800 text-white px-4 py-2  mr-5 rounded-lg hover:bg-[#4a5568]"
              
              >
       Signup
              </button>
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-[#4a5568]"
              
              >
         Login
              </button>
            </div>
          </>
        </form>
      </div>
    </div>
   
      </>)}
    
      </>
  );
};

export default LoginModal;
