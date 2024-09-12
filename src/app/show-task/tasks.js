import React, { useContext } from 'react'
import UserContext from '../context/userContext'
import { RxCross1 } from "react-icons/rx";
import { deleteTask } from '../services/tasksService';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
const Tasks = ({tasks,removeTaskFromUi}) => {
  // console.error(tasks,'when this code will be execute ........')
    const {currentUser}  = useContext(UserContext)
    const handleTaskDelete = async () => {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "blue",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
    
      // Proceed only if the user confirms
      if (result.isConfirmed) {
        try {
          // Call the delete API
          const response = await deleteTask(tasks._id);
          
          // Show success message
          toast.success("You have deleted the task successfully!");
    
          // Remove the task from the UI
          removeTaskFromUi(tasks._id);
    
          // Show confirmation of successful deletion
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success",
          });
        } catch (error) {
          toast.error("An error occurred while deleting the task.");
        }
      }
    };
    
  return (
    <>
    {currentUser&&(<>
      <div   className={`shadow-lg mt-5 rounded ${{
        'pending': 'bg-red-300',
        'completed': 'bg-green-300',
        'still working': 'bg-yellow-200',
      }[tasks.status] || 'bg-gray-300'}`}>
  
  
  
  
        <div className='p-5'>
          <div className='flex  justify-between'>
        <h1  className='text-2xl  font-bold'>{tasks.title}
        
        </h1>
        <span className='w-9 h-9  shadow-lg text-white hover:bg-gray-600 rounded-full bg-gray-800 flex justify-center items-center'><RxCross1  onClick={handleTaskDelete}/></span>
        </div>
        <p className='font-normal'>{tasks.content} </p>
        <div className='flex justify-between mt-3'>
        <p className='text-left'>{tasks.status.toUpperCase()}</p>
        <p className='text-right'>Author : <span className='font-bold'> {currentUser?.message?.name}</span></p>
        </div>
  
        </div>
      </div>
      </>)}
</>
  )
}

export default Tasks