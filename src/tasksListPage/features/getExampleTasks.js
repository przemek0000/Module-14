const getExampleTasks = async () => {
    const response = await fetch("/Module-14/exampleTasks.json")

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await response.json();
}

export default getExampleTasks;