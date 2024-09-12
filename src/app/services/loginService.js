import { httpAxios } from "@/helper/httpHelper"

export const loginUser = (loginUser)=>{

    const loginResponse = httpAxios.post('/api/login',loginUser).then((res)=>res.data)

    return loginResponse
}


export const currentLoginUser = ()=>{

const currentUser1 = httpAxios.get("/api/currentloginuser").then((res)=>res.data)

return currentUser1
} 


export const logout = ()=>{
  
   const logoutUser = httpAxios.post("/api/logout").then((res)=>res.data) 


   return logoutUser 
}



