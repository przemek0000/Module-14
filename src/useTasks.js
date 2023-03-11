import { useEffect, useState } from "react";

const useTasks = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

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

    const removeTask = (id) => {
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

    return {
       
    }
}

export default useTasks;