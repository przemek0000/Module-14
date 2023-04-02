import Header from "../../common/Header";
import Form from "./Form"
import Section from "../../common/Section";
import Tasks from "./TasksList";
import Search from "./Search/index";
import { Buttons, ExampleTasksButton } from "./Buttons";
import { selectTasks } from "./tasksSlice";
import { useSelector } from "react-redux";

function AppTasks() {
    const { tasks } = useSelector(selectTasks);

    return (
        <>
            <Header title={"Lista zadań"} />
            <Section
                primary={"primary"}
                title={"Dodaj nowe zadanie"}
                body={<Form />}
                button={< ExampleTasksButton />}
            />
            <Section
                title={"Wyszukiwarka"}
                body={<Search />}
            />
            <Section
                title={"Lista zadań"}
                body={<Tasks />}
                buttons={<Buttons
                    disabled={tasks.every(({ done }) => done)} />}
            />
        </>
    );
}

export default AppTasks;
