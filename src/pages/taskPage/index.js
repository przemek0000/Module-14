import { useNavigate, useParams } from "react-router-dom";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksListPage/tasksSlice";
import StyledButton, { StyledDiv } from "./styled";

export async function loader({ params }) {
    return params.taskId;
}

const TaskPage = () => {
    const id = useParams();
    const navigate = useNavigate();
    const task = useSelector(state => getTaskById(state, id.taskId));

    return (
        <StyledDiv>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={<>
                    {task ? <strong>Ukończono: </strong> : ""}
                    {task ? task.done ? "tak" : "nie" : ""}
                    {<br />}
                    {<StyledButton onClick={() => { navigate(-1) }}>Cofnij</StyledButton>}
                </>}
            />
        </StyledDiv>
    )
}

export default TaskPage;