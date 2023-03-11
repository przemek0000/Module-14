import { useRef, useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [readInput, setReadInput] = useState("");
    const refInput = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimReadInput = readInput.trim();
        if (trimReadInput !== "") {
            addNewTask(trimReadInput);
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