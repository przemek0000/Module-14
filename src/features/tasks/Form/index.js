import { useRef, useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [readInput, setReadInput] = useState("");
    const refInput = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimReadInput = readInput.trim();
        if (trimReadInput !== "") {
            dispatch(addTask({
                id: nanoid(),
                content: trimReadInput,
                done: false
            }))
            setReadInput("");
        }
        refInput.current.focus();
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                ref={refInput}
                value={readInput}
                onChange={({ target }) => setReadInput(target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus />
            <StyledButton>
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
    )
}

export default Form;