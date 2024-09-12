import { httpAxios } from "@/helper/httpHelper"


export async function AddTasks (task){

 const result =   httpAxios.post("/api/tasks",task).then((response)=>response.data)

 return result
}



export async function getTaskOfUser (userId){

    const result =   httpAxios.get(`/api/users/${userId}/tasks`).then((response)=>response.data)
   
    return result
   }

   export async function deleteTask (taskId){

    const result =   httpAxios.delete(`/api/tasks/${taskId}`).then((response)=>response.data)
   
    return result
   }