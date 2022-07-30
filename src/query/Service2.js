import axios from "axios"
import { useMutation } from "react-query"

const addData =(data)=>{

    return axios.post("https://reqres.in/api/users",data)
}

export const useAddData = ()=>{

            return useMutation(addData)

}