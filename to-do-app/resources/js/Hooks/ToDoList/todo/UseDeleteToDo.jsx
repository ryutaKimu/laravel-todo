import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export const UseDeleteToDo = () => {
    const queryClient = useQueryClient();
    const deleteToDo = useMutation(
        (toDo) => axios.delete("/api/todos/" + toDo.id),
        {
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            },
        }
    );
    return { deleteToDo };
};
