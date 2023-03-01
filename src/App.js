import Header from "./Header";
import Form from "./Form"
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import { ThemeProvider } from "styled-components";
import useTasks from "./useTasks";
import { useState } from "react";

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

function App() {
    const [hideDoneTasks, setHideDoneTasks] = useState(JSON.parse(localStorage.getItem("hideDoneTasks")) || false);

    const toggleHideDoneTasks = () => {
        setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
    }

    const {
        tasks,
        markAllDoneTasks,
        toggleDoneTask,
        removeTask,
        addNewTask
    } = useTasks();

    return (
        <ThemeProvider theme={theme}>
            <Header
                title={"Lista zadań"}
            />
            <Section
                title={"Dodaj nowe zadanie"}
                body={<Form addNewTask={addNewTask} />}
            />
            <Section
                title={"Lista zadań"}
                body={<Tasks tasks={tasks}
                    hideDoneTasks={hideDoneTasks}
                    toggleDoneTask={toggleDoneTask}
                    removeTask={removeTask} />}
                buttons={<Buttons tasks={tasks}
                    hideDoneTasks={hideDoneTasks}
                    disabled={tasks.every(({ done }) => done)}
                    toggleHideDoneTasks={toggleHideDoneTasks}
                    markAllDoneTasks={markAllDoneTasks} />}
            />
        </ ThemeProvider>
    );
}

export default App;
