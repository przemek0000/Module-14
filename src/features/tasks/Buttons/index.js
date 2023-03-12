import { StyledButton } from "./styled";
import { selectTasks, toggleHideDoneTasks, setAllDoneTasks } from "../tasksSlice";
import { useSelector, useDispatch } from "react-redux";

const Buttons = ({ disabled}) => {
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


export default Buttons;