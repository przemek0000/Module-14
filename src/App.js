import Header from "./Header";
import Form from "./Form"
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import { useEffect, useState } from "react";


function App() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : []);
    const [hideDoneTasks, setHideDoneTasks] = useState(JSON.parse(localStorage.getItem("hideDoneTasks")) ? JSON.parse(localStorage.getItem("hideDoneTasks")) : false);

   useEffect ( () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("hideDoneTasks", hideDoneTasks);
   }, [tasks, hideDoneTasks]);

    const toggleHideDoneTasks = () => {
        setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
    }

    const markAllDoneTasks = () => (
        setTasks(
            tasks.map(task => (
                { ...task, done: true }
            ))
        )
    )

    const toggleDoneTask = (id) => (
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task, done: !task.done
                }
            }
            return { ...task }
        }))
    )

    const removeButton = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id))
    }

    const addNewTask = (readInput) => (
        setTasks(tasks => [...tasks,
        {
            content: readInput,
            done: false,
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1
        }]
        ))

    return (
        <>
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
                    removeButton={removeButton} />}
                buttons={<Buttons tasks={tasks}
                    hideDoneTasks={hideDoneTasks}
                    disabled={tasks.every(({ done }) => done)}
                    toggleHideDoneTasks={toggleHideDoneTasks}
                    markAllDoneTasks={markAllDoneTasks} />}
            />
        </ >
    );
}

export default App;
