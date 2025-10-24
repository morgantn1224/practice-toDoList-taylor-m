

const ToDoList = () =>  {
    const tasks = ["Learn React", "Make components", 
        "Add Styling with CSS"];

    let tasksJSX = tasks.map(task => {
        return <li id="task">{task}</li>
    });

    return (
        <>
            <ul>
                {tasksJSX}
            </ul>
        </>
    )
}


export default ToDoList;