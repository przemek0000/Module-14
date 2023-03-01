import { StyledButton } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, disabled, toggleHideDoneTasks, markAllDoneTasks }) => (
    tasks.length > 0 && (
        <>
            <StyledButton
                onClick={toggleHideDoneTasks}
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

export default Buttons;