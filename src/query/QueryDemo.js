import React, { useEffect } from 'react'
import { useFetchData } from './Service'

export const QueryDemo = () => {
    
    
    const res3 = useFetchData()
    
    

    useEffect(() => {
      console.log("res3 =",res3.status)  
      
      
    }, [res3.status])
    
    

    // console.log("data", res1.data)
    // console.log("isLoading", res1.isLoading)
    // console.log("isError", res1.isError)
    // console.log("data", res2.data)
    // console.log("isLoading", res2.isLoading)
    // console.log("isError", res2.isError)
    
    

  return (
    <div>
            <button onClick={() => res3.refetch()}>Refetch</button>

    </div>
  )
}
