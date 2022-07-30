import React from 'react'
import { useAddData } from './Service2'

export const QueryDemo2 = () => {

    const res = useAddData()
    const add = ()=>{
        var data = {
            "name": "morpheus",
            "job": "leader"
        }

            res.mutate(data)
            console.log(res)
    }
  return (
    <div>
            <button onClick={()=>{add()}}>ADD</button>
    </div>
  )
}
