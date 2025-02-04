'use client'
import React, { useContext, useEffect, useState } from 'react'
import { getTaskOfUser } from '../services/tasksService'

import UserContext from '../context/userContext'
import Tasks from './tasks'

const ShowTasks = () => {
  const [tasks,setTasks] = useState([])
  const {currentUser}  = useContext(UserContext)
  async function loadTask(currentuser){
    try {
      const tasked =  await  getTaskOfUser(currentuser)
setTasks([...tasked].reverse())

    } catch (error) {

    }
   }
  useEffect(()=>{


if(currentUser){
  loadTask(currentUser?.message?._id)
}


  },[currentUser])
  
const removeTaskFromUi = (removeId)=>{
  const filterRemoveTask = tasks.filter((task)=>task._id!==removeId)
  setTasks(filterRemoveTask)
}

  return (
 
    <>
       <div className=' grid  grid-cols-12 pt-5 pb-10'>
    <div  className='col-start-2  col-span-10 '>
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