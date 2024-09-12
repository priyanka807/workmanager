'use client'
import React, { useContext, useEffect, useState } from 'react'
import { getTaskOfUser } from '../services/tasksService'

import UserContext from '../context/userContext'
import Tasks from './tasks'



const ShowTasks = () => {
  const [tasks,setTasks] = useState([])
  // console.log(task,'task show page task ')

  const {currentUser}  = useContext(UserContext)
  
  // console.log(currentUser?.message?._id)

  async function loadTask(currentuser){
    // console.warn(currentuser,'function is calling or not showtask page currentuserr')
    try {
      
      const tasked =  await  getTaskOfUser(currentuser)
  

setTasks([...tasked].reverse())

    } catch (error) {
      
      // console.log(error,'showtask page error')


    }
   }
  useEffect(()=>{


if(currentUser){
  // console.log('if user will delete then this will work ')
  loadTask(currentUser?.message?._id)
}


  },[currentUser])
  // console.log(tasks,'show task on show page')


const removeTaskFromUi = (removeId)=>{

  const filterRemoveTask = tasks.filter((task)=>task._id!==removeId)
  setTasks(filterRemoveTask)
}

  return (
 
    <>
       <div className=' grid  grid-cols-12 pt-5 pb-10'>
    <div  className='col-span-6  col-start-4 '>
     <h1 className='text-3xl  '>Your Tasks    {currentUser?tasks.length:'(0)'}</h1>
    {currentUser&&<>
    
   
 
{tasks.length>0&&tasks.map((tasks)=>(
  <>
  <Tasks  key={tasks._id}  tasks={tasks}  removeTaskFromUi={removeTaskFromUi}/>
  </>
))}

    </>}
    </div>
    </div> 
    </>

  )
}

export default ShowTasks