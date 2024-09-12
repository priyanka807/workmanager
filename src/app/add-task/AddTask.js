'use client'

import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { AddTasks } from "../services/tasksService";
import UserContext from "../context/userContext";
import { useRouter } from 'next/navigation'


const AddTask = () => {

  const {handleClickOutside}  = useContext(UserContext)
const router = useRouter()
  const [addTask,setAddTask] = useState({
    title:"",
  
 
    status:"",
    content:"",
    
  })
  const handleAddTask = async(event)=>{
event.preventDefault()
try {
 
const result = await  AddTasks(addTask)
toast.success("Added Task Successfully !!")
setAddTask({
  title:"",

  status:"",
  content:"",  
})

router.push("/show-task")




} catch(error){
  
  console.warn(error?.response?.data?.message,'add task error')
  toast.error("Something Is Wrong Please Passed Valid Data !!")

}

  }
  return (
    <>
 
  <div className="  mt-3 inset-0   flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
      
        <h3 className="text-center mb-4 text-gray-800  hover:text-[#4a5568]" style={{ fontSize: "1.75rem", marginBottom: '10px' }}>Add Task</h3>
        <form action="https://formspree.io/f/myzgwevw" method="POST" onSubmit={handleAddTask}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm mb-2 font-bold">
            Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={addTask.title}
              onChange={(e)=>setAddTask({...addTask,title:e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"              placeholder="...title"
            />
          </div>
   

<div className="mb-4">
  <label htmlFor="status" className="block text-sm mb-2 font-bold">
    Status
  </label>
  <select
    name="status"
    id="status"
    value={addTask.status}
    
    onChange={(e)=>setAddTask({...addTask,status:e.target.value})}
    className={`w-full px-3  py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500  ${addTask.status===""?'text-gray-400':'text-black'} `}
    // className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"             
 
    
    
    >
    <option value="" className="">...select status</option>
    <option value="pending" className="">pending</option>
    <option value="still working" >still working</option>
    <option value="completed" >completed</option>
  </select>
</div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-sm mb-2 font-bold">
            Content
            </label>
            <textarea
              name="content"
              id="content"
              rows="3"
              value={addTask.content}
              onChange={(e)=>setAddTask({...addTask,content:e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"              placeholder="content"

            ></textarea>
          </div>
  

          <div className="text-center">
            <button type="submit" className="bg-gray-800 text-white  hover:text-black  py-2 px-4   rounded hover:bg-[#4a5568]">
            Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
 
    </>
  )
}

export default AddTask