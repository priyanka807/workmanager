'use client'

import React, { useEffect, useState } from 'react'

import UserContext from './userContext'
import { currentLoginUser } from '../services/loginService'

const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(undefined)
    const [signupModal, setSignupModal] = useState(false);
    const [loginModal, setloginModal] = useState(false); 
    const handleClickOutside = (event,outside) => {
      if (event.target.id === 'modal-overlay') {
        if(outside){
          setloginModal(true);
          setSignupModal(true);
        }else{
          setloginModal(false);
          setSignupModal(false);
        }
   
       
      }
      

    

    };
  
useEffect( ()=>{
    async   function  getCurrentUser(){
        try {

            const currentloginuser =  await   currentLoginUser() 
            console.warn(currentloginuser ,'.........currentloginuser ')
            setCurrentUser({...currentloginuser})   
                   } catch (error) {
                   
                    
                      setCurrentUser(undefined)   
                    //   console.log(error,'........message')
                   }  
    }
if(!currentUser){
  // console.warn('it will run first time when it is undefined ')
  getCurrentUser()
}
},[currentUser,loginModal])
  
  return (
   <UserContext.Provider  value={{currentUser,setCurrentUser,signupModal,setSignupModal,loginModal,setloginModal,handleClickOutside}}>{children}</UserContext.Provider>
  )
}

export default UserProvider