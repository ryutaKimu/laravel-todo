import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export const UseStoreToDoDetails = () => {
    const queryClient = useQueryClient();
    const storeToDoDetails = useMutation(
        (toDo) => axios.post("http://localhost/api/toDoDetails",{
            to_do_id: toDo.id,
            name: null,
        }),
       
        {
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            },
        }
        
    );
   
    return { storeToDoDetails };
};
