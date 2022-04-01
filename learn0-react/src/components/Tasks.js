import Button from './Button'
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {

    // const deleteTask = (id) => {
    //     const newTasks = [...tasks].filter(t => t.id !== id); //state is immutable
    //     setTasks(newTasks);
    // }

    return (
        <>
        {tasks.map((task) => (
            <>
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task> 
            </>
        ))}
        </>
    )
}

export default Tasks;

{/* <Button text='&times;' handleClick={() => {
                    deleteTask(task.id)
                }}/> */}