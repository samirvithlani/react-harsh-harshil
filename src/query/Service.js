import axios from "axios";
import { useQuery } from "react-query";



export const fetchUserData = async () => {

    return await axios.get("https://reqres.in/api/users?delay=3")
}

export const useFetchData = (a)=>{

    return useQuery(['demo',a],fetchUserData,{

        refetchOnMount:true,
        enabled:false,
        retry:false,
        retryDelay:10,
    
    })
}

