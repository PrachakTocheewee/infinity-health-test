import React, { useState } from 'react'

import './ExerciseForm.css'

const ExerciseForm = () => {
    const [activity, setActivity] = useState('Run')
    const [distance, setDistance] = useState(0)
    const [durationHours, setDurationHours] = useState(0);
    const [durationMin, setDurationMin] = useState(0);
    const [date, setDate] = useState();
    const [calories, setCalories] = useState(0);
    const [heartrate, setHearthrate] = useState(0);
    const [description, setDescription] = useState('');


    const submitRecords = () => {
        const records = {
            activity,
            distance,
            durationHours,
            durationMin,
            date,
            calories,
            heartrate,
            description,
        }
        console.log(records);
        console.log(typeof distance);
    }


    return (
        <div className='exerciseForm'>
            <form>
                <h2>Create your activity</h2>
                <select value={activity} onChange={e => setActivity(e.target.value)}>
                    <option>Run</option>
                    <option>Swim</option>
                    <option>Dance</option>
                </select>
                <br />
                <label >Distance: </label>
                <input type="number" placeholder="put your steps" onChange={e => setDistance(parseFloat(e.target.value))} disabled={activity == 'Run' ? false : true} />
                <br />
                <label >Dutation: </label>
                <input id="hours" type="number" placeholder="Hours" onChange={e => setDurationHours(parseFloat(e.target.value))} /> <span>Hrs.</span>
                <input id="min" type="number" placeholder="Minute" maxLength={59} onChange={e => setDurationMin(parseFloat(e.target.value))} /> <span>Min.</span>
                <br />
                <label >Date: </label>
                <input type="datetime-local" onChange={e => setDate(e.target.value)} required />
                <br />
                <label >Calories: </label>
                <input type="number" placeholder="put your calories" onChange={e => setCalories(parseFloat(e.target.value))} />
                <br />
                <label >Heart Rate: </label>
                <input type="number" placeholder="put your heartrate" onChange={e => setHearthrate(parseFloat(e.target.value))} />
                <br />
                <label >Description: </label>
                <input type="text" placeholder="put your description" onChange={e => setDescription(e.target.value)} />
                <br />
            </form>
            <button onClick={submitRecords}>Submit</button>
        </div>
    )
}

export default ExerciseForm
