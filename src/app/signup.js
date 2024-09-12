'use client'

import React, { useEffect, useState ,memo, useContext} from 'react';
import { addUser } from './services/usersService';
import  {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from './services/loginService';
import { useRouter } from 'next/navigation'
import Cookies  from 'js-cookie'
import UserContext from './context/userContext';
const SignupModal = () => {
  const {signupModal, setSignupModal ,setloginModal,handleClickOutside} = useContext(UserContext);
  const authToken = Cookies.get('authToken');
  // console.log(authToken,'authToken signup token')
  // if(authToken){
  //   // console.warn(authToken, 'it means user has already logged in cant access modal again');
  //   toast.error("You are already registered !! ")
  //   setSignupModal(false)
  //   // setloginModal(false)
  //   // setSignupModal(false)
  // }

  // console.log(signupModal,'.......signupModal page')
  const [user,setUser] = useState({
    name:"",
    phone:"",
    email:"",
    password:"",
    yourrequirement:""
  })

  const router = useRouter()
  if (!signupModal) return null;




const handleSubmit  = async(event)=>{
event.preventDefault();


  try {
//  console.warn(user,'...signup user')
    const result = await addUser(user)
    toast.success("........User created successfully!!!")
  
    setUser({
      name:"",
      phone:"",
      email:"",
      password:"",
      yourrequirement:""
    })
  
 
  
    setSignupModal(false)
    setloginModal(true)

  } catch (error) {

    toast.error(error?.response?.data.message  )
  
      
      
  
 
  } 





}



  return (
    <>
    {signupModal&&(<>
      <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={(event)=>handleClickOutside(event)}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full  mx-4 sm:mx-6 md:mx-8 max-w-lg  ">
        <h2 className="text-xl font-bold mb-4 text-gray-800 hover:text-[#4a5568]">
        Signup
        </h2>
        <form    onSubmit={handleSubmit}>
          <>
            <div className='mb-2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id='name'
               name='name'
               value={user.name}
               onChange={(e)=>setUser({...user,name:e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                placeholder="Enter your name"
          
              />
            </div>

            <div className='mb-2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                placeholder="Enter your phone number"
                id='phone'
                name='phone'
                value={user.phone}
                onChange={(e)=>setUser({...user,phone:e.target.value})}
              />
            </div>
            <div className='mb-2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 ring-gray-500"
                placeholder="Enter your email"
                id='email'
                name='email'
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
              />
            </div>
            <div className='mb-2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 ring-gray-500"
                placeholder="Enter your password"
                id='password'
                name='password'
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
              />
            </div>
            <div className='mb-2'>

              <label className="block text-gray-700 text-sm font-bold mb-2">Your Requirement</label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 ring-gray-500"
                placeholder="Enter your your requirement"
                type="textarea"
                id='yourrequirement'
                name='yourrequirement'
                value={user.yourrequirement}
                onChange={(e)=>setUser({...user,yourrequirement:e.target.value})}
              />
            </div>


            <div className="flex justify-end">
            <button
            type='button'
                onClick={()=>{setSignupModal(false),setloginModal(true)}}
                className="bg-gray-800 text-white px-4 py-2 mr-5 rounded-lg hover:bg-[#4a5568]"
               
              >
                Login
              </button>
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-[#4a5568]"
               
              >
                Signup
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

export default memo(SignupModal);
