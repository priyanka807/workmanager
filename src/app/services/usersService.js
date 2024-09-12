import { httpAxios } from "@/helper/httpHelper"


export const addUser = (user)=>{

   const result =   httpAxios.post("/api/users",user).then((response)=>response.data)

  return result

}