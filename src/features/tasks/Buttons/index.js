import { StyledButton } from "./styled";
import { selectTasks, toggleHideDoneTasks } from "../tasksSlice";
import { useSelector, useDispatch } from "react-redux";

const Buttons = ({ disabled, markAllDoneTasks }) => {
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
                    onClick={markAllDoneTasks}
                    disabled={disabled}
                >
                    Ukończ wszystkie
                </StyledButton>
            </>
        )
    )
}


export default Buttons;