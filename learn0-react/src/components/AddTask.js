import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text || !date || !time){
            alert('Fill it')
            return 
        }
        onAdd({ text: text, date, time, reminder })

        //reset
        setText('')
        setDate('')
        setTime('')
        setReminder(false)
    }

    return (
        <form className="add-form" action="" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="date" placeholder="Add Date" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="time">Time</label>
                <input type="time" placeholder="Add Time" id="time" value={time} onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Remind?</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value='Save Task' className="btn btn-block"/>
        </form>
    )
}

export default AddTask