import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export const UseDeleteToDoDetails = () => {
    const queryClient = useQueryClient();
    const deleteToDoDetails = useMutation(
        (toDoDetails) => axios.delete("/api/toDoDetails/" + toDoDetails.id),
        {
            onMutate: async (toDoDetail) => {
                await queryClient.cancelQueries("toDoList");

                const previousToDoList = queryClient.getQueryCache("toDoList");

                queryClient.setQueryData("toDoList", (oldToDoList) =>
                    oldToDoList.map((oldToDo) => {
                        let newTodoDetails = [];
                        oldToDo.to_do_details.map((oldToDoDetails) => {
                            if (oldToDoDetails.id != toDoDetail.id) {
                                newTodoDetails.push(oldToDoDetails);
                            }
                        });
                        oldToDo.to_do_details = newTodoDetails;
                        return oldToDo;
                    })
                );
                return { previousToDoList };
            },
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            },
        }
    );
    return { deleteToDoDetails };
};
