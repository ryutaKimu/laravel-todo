import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export const UseStoreToDo = () => {
    const queryClient = useQueryClient();
    const storeToDo = useMutation(
        () => axios.post("http://localhost/api/todos",{
            title: null,
        }),
       
        {
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            },
        }
        
    );
   
    return { storeToDo };
};
