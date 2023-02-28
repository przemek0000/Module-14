import "./style.css";
import { useRef, useState } from "react";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__input"
                ref={refInput}
                value={readInput}
                onChange={({ target }) => setReadInput(target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus />
            <button className="form__addNewTaskbutton">Dodaj zadanie</button>
        </form>
    )
}

export default Form;