import { useRef, useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent , setnewTaskContent ] = useState("");
    const refInput = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimnewTaskContent  = newTaskContent .trim();
        if (trimnewTaskContent  !== "") {
            dispatch(addTask({
                id: nanoid(),
                content: trimnewTaskContent ,
                done: false
            }))
            setnewTaskContent ("");
        }
        refInput.current.focus();
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                ref={refInput}
                value={newTaskContent }
                onChange={({ target }) => setnewTaskContent (target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus />
            <StyledButton>
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
    )
}

export default Form;