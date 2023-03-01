import { StyledTasks, StyledList, StyledButtons } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, toggleDoneTask, removeButton }) => (
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
                <StyledButtons remove onClick={() => removeButton(task.id)}>
                    🗑
                </StyledButtons>
            </StyledList>
        ))}
    </StyledTasks>
);

export default Tasks;