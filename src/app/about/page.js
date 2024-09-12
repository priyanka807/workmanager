import React from 'react'
async function taketime(){
 await new Promise((resvole,reject)=>{

setTimeout(resvole,1000)
  })
}

export default async function About(){
    await  taketime();
    // throw new Error("this is mannual error")
    return (
        <>
          <div>this is about page</div>  
        </>
    
      )
}


