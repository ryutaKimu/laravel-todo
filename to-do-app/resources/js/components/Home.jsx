import { Fab, Grid } from "@mui/material";
import React from "react";
import { Todo } from "./Todo";
import { useGetToDoList } from "../Hooks/ToDoList/UseGetToDoList";
import { UseCurrentToDoList } from "../Hooks/ToDoList/UseCurrentToDoList";
import { Add } from "@mui/icons-material";
import { UseStoreToDo } from "../Hooks/ToDoList/todo/UseStoreToDo";

const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
};

export const Home = () => {
    const { storeToDo } = UseStoreToDo();

    const eventStoreToDo = (event) => {
        storeToDo.mutate();
    };

    const { isLoading } = useGetToDoList();
    const toDoList = UseCurrentToDoList();
    if (isLoading) return "Now Loading....";
    return (
        <div>
            <Grid container spacing={4} style={{ marginTop: "3%" }}>
                {toDoList.map((todo) => (
                    <Grid item xs={3} key={todo.id}>
                        <Todo todo={todo} />
                    </Grid>
                ))}
            </Grid>
            <Fab
                color="primary"
                aria-level="add"
                sx={fabStyle}
                onClick={eventStoreToDo}
            >
                <Add />
            </Fab>
        </div>
    );
};
