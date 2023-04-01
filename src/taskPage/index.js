import { useLoaderData } from "react-router-dom";
import Header from "../tasksListPage/common/Header";
import Section from "../tasksListPage/common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksListPage/features/tasks/tasksSlice";

export async function loader({ params }) {
    return params.zadaniaId;
}

const TaskPage = () => {
    const taskId = useLoaderData();
    const task = useSelector(state => getTaskById(state, taskId))
    return (
        <>
            <Header title={"Szczegóły zadania"} />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={<><strong>Ukończono:</strong> {task.done ? "tak" : "nie"}</>}
            />
        </>
    )
}

export default TaskPage;