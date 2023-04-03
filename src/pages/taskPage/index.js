import { useLoaderData } from "react-router-dom";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksListPage/tasksSlice";

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
                body={<>{task ? <strong>Ukończono:</strong> : ""} {task ? task.done ? "tak" : "nie" : ""}</>}
            />
        </>
    )
}

export default TaskPage;