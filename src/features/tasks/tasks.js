import Header from "../../common/Header";
import Form from "./Form"
import Section from "../../common/Section";
import Tasks from "./TasksList";
import { Buttons, ExampleTasksButton } from "./Buttons";
import { ThemeProvider } from "styled-components";
import { selectTasks } from "./tasksSlice";
import { useSelector } from "react-redux";

const theme = {
    colors: {
        done: {
            display: "hsl(120, 100%, 25%)",
            hover: "hsl(120, 100%, 28%)",
            active: "hsl(120, 100%, 31%)"
        },
        remove: {
            display: "hsl(0, 100%, 50%)",
            hover: "hsl(0, 100%, 62%)",
            active: "hsl(0, 100%, 68%)"
        }
    },
    breakPoints: {
        mobiles: 767
    }
};

function AppTasks() {
    const { tasks } = useSelector(selectTasks);

    return (
        <ThemeProvider theme={theme}>
            <Header title={"Lista zadań"} />
            <Section
                primary={"primary"}
                title={"Dodaj nowe zadanie"}
                body={<Form />}
                button={< ExampleTasksButton />}
            />
            <Section
                title={"Lista zadań"}
                body={<Tasks />}
                buttons={<Buttons
                    disabled={tasks.every(({ done }) => done)} />}
            />
        </ ThemeProvider>
    );
}

export default AppTasks;
