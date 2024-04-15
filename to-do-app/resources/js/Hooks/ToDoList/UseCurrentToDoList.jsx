import { useQueryClient } from "react-query"


export const UseCurrentToDoList = ()=>{
    const queryClient = useQueryClient();
    return queryClient.getQueryData("toDoList");
}

