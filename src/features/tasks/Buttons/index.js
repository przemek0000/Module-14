import { StyledButton, StyledGetExampleTasksButton } from "./styled";
import { selectTasks, toggleHideDoneTasks, setAllDoneTasks, fetchExampleTasks } from "../tasksSlice";
import { useSelector, useDispatch } from "react-redux";

export const Buttons = ({ disabled }) => {
    const { tasks, hideDoneTasks } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        tasks.length > 0 && (
            <>
                <StyledButton
                    onClick={() => dispatch(toggleHideDoneTasks())}
                >
                    {`${hideDoneTasks ? "Pokaż " : "Ukryj "}`}
                    ukończone
                </StyledButton>
                <StyledButton
                    onClick={() => dispatch(setAllDoneTasks())}
                    disabled={disabled}
                >
                    Ukończ wszystkie
                </StyledButton>
            </>
        )
    )
}

export const ExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <StyledGetExampleTasksButton as={StyledButton} onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </StyledGetExampleTasksButton>
    )
}