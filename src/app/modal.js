'use client'
import React, { useEffect, useState } from 'react';
import { addUser } from './services/usersService';
import  {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from './services/loginService';

const Modal = ({ openAuthModel, onAuthModalClose, modalMode }) => {
  if (!openAuthModel) return null;

  const handleClickOutside = (event) => {
    if (event.target.id === 'modal-overlay') {
      onAuthModalClose();
    }
  };

  const [user,setUser] = useState({
    name:"",
    phone:"",
    email:"",
    password:"",
    yourrequirement:""
  })

  useEffect(()=>{
    console.log(user,'signup eemail')
  },[user])
  const [loginuser,setLoginUser] = useState({
  
    email:"",
    password:"",
  
  })

  console.log(loginuser,'loginuser email')
const handleUser  = async(event)=>{
event.preventDefault();

// if(modalMode==="signup"){
//   try {
//     const result = await addUser(user)
//     toast.success("Added User Sucessfully !!")
//     console.log(result,'.......result')
//     setUser({
//       name:"",
//       phone:"",
//       email:"",
//       password:"",
//       yourrequirement:""
//     })
  
  
//   } catch (error) {
//     toast.error("Something Went Wrong Please Passed Valid Data !!")
//     console.log(error,'user error')
//   } 

// }

if(modalMode==="login"){
  try {
    const result = await loginUser(loginuser)
    toast.success("Added Login User Sucessfully !!")
    console.log(result,'.......result')
    setLoginUser({
      email:"",
      password:"",
      
    })

  
  
  } catch (error) {
    toast.error("Something Went Wrong Please Passed Valid Data !!")
    console.log(error,'user error')
  } 

}


}



  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full  mx-4 sm:mx-6 md:mx-8 max-w-lg  ">
        <h2 className="text-xl font-bold mb-4 text-gray-800 hover:text-[#4a5568]">
          {modalMode === 'login' ? 'Login' : 'Signup'}
        </h2>
        <form  >
          <>
            <div className={`mb-2 ${modalMode === 'login' ? 'hide' : ''}`}>
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

            <div className={`mb-2 ${modalMode === 'login' ? 'hide' : ''}`}>
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
            <div className={`${modalMode === 'login' ? 'mb-5' : 'mb-2'}`}>
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 ring-gray-500"
                placeholder="Enter your email"
                id='email'
                name='email'
                value={user.email}
                onChange={(e)=>{setUser({...user,email:e.target.value});setLoginUser({...loginuser,email:e.target.value})}}
              />
            </div>
            <div className={`${modalMode === 'login' ? 'mb-5' : 'mb-2'}`}>
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 ring-gray-500"
                placeholder="Enter your password"
                id='password'
                name='password'
                value={user.password}
                onChange={(e)=>{setUser({...user,password:e.target.value});setLoginUser({...loginuser,password:e.target.value})}}
              />
            </div>
            <div className={`mb-2 ${modalMode === 'login' ? 'hide' : ''}`}>

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
                type="button"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-[#4a5568]"
                onClick={handleUser}
              >
                {modalMode === 'login' ? 'Login' : 'Signup'}
              </button>
            </div>
          </>
        </form>
      </div>
    </div>
  );
};

export default Modal;
