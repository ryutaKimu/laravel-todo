import axios from "axios"
import { useQuery, useQueryClient } from "react-query";


  const getToDoList = async()=>{
     const {data} = await axios.get("http://localhost/api/todos");
     console.log(data);
     return data;
}

export const useGetToDoList = ()=>{
    const queryClient = useQueryClient();
    return useQuery("toDoList",getToDoList,{
        onError:()=>{
            queryClient.setQueryData("toDoList",null);
        }
    });
}