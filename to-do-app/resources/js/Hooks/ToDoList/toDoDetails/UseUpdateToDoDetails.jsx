import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export const UseUpdateToDoDetails = () => {
    const queryClient = useQueryClient();
    const updateToDoDetails = useMutation((toDoDetails) =>
        axios.put(
            "/api/toDoDetails/" + toDoDetails.id,
            {
                name: toDoDetails.name,
                completed_flag: toDoDetails.completed_flag,
            },
            {
                onMutate: async (toDoDetail) => {
                    await queryClient.cancelQueries("toDoList");

                    const previousToDoList =
                        queryClient.getQueryCache("toDoList");

                    queryClient.setQueryData("toDoList", (oldToDoList) =>
                        oldToDoList.map((oldToDo) => {
                            if (oldToDo.id == toDoDetail.to_do_id) {
                                let newTodoDetails = [];
                                oldToDo.to_do_details.map((oldToDoDetails) => {
                                    if (oldToDoDetails.id == toDoDetail.id) {
                                        newTodoDetails.push({
                                            ...oldToDoDetails,
                                            name: toDoDetails.name,
                                            completed_flag:
                                                toDoDetail.completed_flag,
                                        });
                                    } else {
                                        newTodoDetails.push(oldToDoDetails);
                                    }
                                });
                                oldToDo.to_do_details = newTodoDetails;
                            }
                            return oldToDo;
                        })
                    );
                    return { previousToDoList };
                },
                onSettled: () => {
                    queryClient.invalidateQueries("toDoList");
                },
            }
        )
    );
    return { updateToDoDetails };
};
