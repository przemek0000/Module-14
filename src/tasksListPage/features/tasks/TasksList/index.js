import { StyledTasks, StyledList, StyledButtons, StyledLink } from "./styled";
import { selectTasks, toggleDoneTask, removeTask, filterTasksbySearch } from "../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Tasks = () => {
    const { hideDoneTasks } = useSelector(selectTasks);
    const dispatch = useDispatch();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const tasks = useSelector(state => filterTasksbySearch(state, searchParams.get("search")))

    return (
        <StyledTasks>
            {tasks.map(task => (
                <StyledList
                    key={task.id}
                    hidden={task.done && hideDoneTasks}
                >
                    <StyledButtons onClick={() => dispatch(toggleDoneTask(task.id))}>
                        {task.done ? "✔" : ""}
                    </StyledButtons>
                    <div className={`task__content ${task.done ? "task__content--done" : ""}`}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </div>
                    <StyledButtons remove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </StyledButtons>
                </StyledList>
            ))}
        </StyledTasks>
    )
}

export default Tasks;