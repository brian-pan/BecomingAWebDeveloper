import { useState } from 'react';
import Button from './Button'

const Tasks = () => {
    const [tasks, setTasks] = useState( //[value, modify fn]
        [
            {
                id: 1,
                text: 'Wan La...',
                day: 'lol',
                reminder: true
            },
            {
                id: 2,
                text: 'barbeque la...',
                day: 'lol',
                reminder: true
            },
            {
                id: 3,
                text: 'mdfker!',
                day: 'lol',
                reminder: true
            },
        ]
    ) 

    const deleteTask = (id) => {
        const newTasks = [...tasks].filter(t => t.id !== id);
        setTasks(newTasks);
    }


    return (
        <>
        {tasks.map((task) => (
            <>
                <h3 key={task.id}>{task.text}<Button text='&times;' handleClick={() => {
                    deleteTask(task.id)
                }}/></h3> 
            </>
        ))}
        </>
    )
}

export default Tasks;