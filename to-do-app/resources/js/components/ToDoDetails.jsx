import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { UseUpdateToDoDetails } from "../Hooks/ToDoList/toDoDetails/UseUpdateToDoDetails";
import { UseDeleteToDoDetails } from "../Hooks/ToDoList/toDoDetails/UseDeleteToDoDetals";

export const ToDoDetails = (props) => {
    const { detail } = props;
    const [timer, setTimer] = useState(null);

    let todoObj = {
        id: detail.id,
        name: detail.name,
        completed_flag: detail.completed_flag == 1,
        to_do_id: detail.to_do_id,
    };

    const { updateToDoDetails } = UseUpdateToDoDetails();

    const eventUpdateToDoDetails = (event) => {
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            let data = {
                ...todoObj,
                name: event.target.value,
            };
            updateToDoDetails.mutate(data);
        }, 500);
        setTimer(newTimer);
    };

    const eventCheckTodoDetails = (event) => {
        let data = {
            ...todoObj,
            completed_flag: event.target.checked,
        };
        updateToDoDetails.mutate(data);
    };

    const { deleteToDoDetails } = UseDeleteToDoDetails();

    const eventDeleteToDoDetails = (event) => {
        deleteToDoDetails.mutate(todoObj);
    };

    return (
        <ListItem
            key={detail.id}
            secondaryAction={
                <IconButton 
                edge="end" 
                aria-label="delete" 
                onClick={eventDeleteToDoDetails}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <Checkbox
                    edge="start"
                    defaultChecked={detail.completed_flag}
                    onChange={eventCheckTodoDetails}
                />
                <TextField
                    margin="dense"
                    defaultValue={detail.name}
                    variant="standard"
                    onChange={eventUpdateToDoDetails}
                />
            </ListItemButton>
        </ListItem>
    );
};
