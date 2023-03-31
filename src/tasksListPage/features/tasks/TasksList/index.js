import { StyledTasks, StyledList, StyledButtons } from "./styled";
import { selectTasks, toggleDoneTask, removeTask } from "../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const Tasks = () => {
    const { tasks, hideDoneTasks } = useSelector(selectTasks);
    const dispatch = useDispatch();

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
                    {task.content}
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