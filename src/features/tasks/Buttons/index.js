import { StyledButton } from "./styled";
import { selectTasksState, toggleHideDoneTasks, markAllDoneTasks } from "../tasksSlice";
import { useSelector, useDispatch } from "react-redux";

const Buttons = ({ disabled}) => {
    const { tasks, hideDoneTasks } = useSelector(selectTasksState);
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
                    onClick={() => dispatch(markAllDoneTasks())}
                    disabled={disabled}
                >
                    Ukończ wszystkie
                </StyledButton>
            </>
        )
    )
}


export default Buttons;