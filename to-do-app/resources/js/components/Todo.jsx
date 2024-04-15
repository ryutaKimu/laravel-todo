import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    List,
    TextField,
} from "@mui/material";
import { ToDoDetails } from "./ToDoDetails";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { UseUpdateToDo } from "../Hooks/ToDoList/todo/UseUpdateToDo";
import { UseDeleteToDo } from "../Hooks/ToDoList/todo/UseDeleteToDo";
import { AddCircle } from "@mui/icons-material";
import { UseStoreToDoDetails } from "../Hooks/ToDoList/toDoDetails/UseStoreToDoDetails";

export const Todo = (props) => {
    const { todo} = props;

    const [timer, setTimer] = useState(null);

    const todoObj = {
        id: todo.id,
        title: todo.title,
    };


    const { updateToDoMutation } = UseUpdateToDo();

    const eventUpdateTodo = (event) => {
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            let data = {
                ...todo,
                title: event.target.value,
            };
            updateToDoMutation.mutate(data);
        }, 500);
        setTimer(newTimer);
    };

    const { deleteToDo } = UseDeleteToDo();

    const eventDeleteToDo = (event) => {
        deleteToDo.mutate(todoObj);
        console.log(deleteToDo);
    };

    const {storeToDoDetails} = UseStoreToDoDetails();

    const eventStoreToDoDetails = (event)=>{
        storeToDoDetails.mutate(todoObj);
    }

    return (
        <Card>
            <TextField
                required
                id="standard-required"
                defaultValue={todo.title}
                variant="standard"
                onChange={eventUpdateTodo}
            />
            <CardContent>
                <List>
                    {todo.to_do_details.map((detail, index) => {
                        return <ToDoDetails detail={detail} key={index} />;
                    })}
                </List>
            </CardContent>
            <CardActions>
                <IconButton
                 edge="start"
                 aria-label="add"
                 color="primary"
                 onClick={eventStoreToDoDetails}
                >
                    <AddCircle/>

                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={eventDeleteToDo}
                >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};
