import { StyledTasks, StyledList, StyledButtons } from "./styled";
import { selectTasks } from "../tasksSlice";
import { useSelector } from "react-redux";

const Tasks = ({ toggleDoneTask, removeTask }) => {
    const { tasks, hideDoneTasks } = useSelector(selectTasks);
    return (
        <StyledTasks>
        {tasks.map(task => (
            <StyledList 
            key={task.id} 
            hidden={task.done && hideDoneTasks}
            >
                <StyledButtons onClick={() => toggleDoneTask(task.id)}>
                    {task.done ? "✔" : ""}
                </StyledButtons>
                <div className={`task__content ${task.done ? "task__content--done" : ""}`}>
                    {task.content}
                </div>
                <StyledButtons remove onClick={() => removeTask(task.id)}>
                    🗑
                </StyledButtons>
            </StyledList>
        ))}
    </StyledTasks>
    )
}

export default Tasks;