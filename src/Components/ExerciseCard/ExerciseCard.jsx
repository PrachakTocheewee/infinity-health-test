import React, { useState,useEffect } from "react";
import "./ExerciseCard.css";
//import ExerciseForm from "../ExerciseFrom/ExerciseForm";


 const ExerciseCard =() => {

    const [exercisecard,setExercisecard] = useState([])


    return(
        <div className = 'exerciseCard'>

                <h4 >Add your new activity<br/></h4>
            <p>

                <span className='boldFont'>Run For Who?<br/></span>
                <span className='boldFont'>Duration:</span>2 Hour 30 Minutes<br/>
                1000 Bourned calories<br/><br/>
                add activity date...<br/>
                completed on  date...<br/>

            </p>
            <p>

                <span className='boldFont'>Run For Who?<br/></span>
                <span className='boldFont'>Duration:</span>2 Hour 30 Minutes<br/>
                1000 Bourned calories<br/><br/>
                add activity date...<br/>
                completed on  date...<br/>

            </p>
            <p>

                <span className='boldFont'>Run For Who?<br/></span>
                <span className='boldFont'>Duration:</span>2 Hour 30 Minutes<br/>
                1000 Bourned calories<br/><br/>
                add activity date...<br/>
                completed on  date...<br/>

            </p>

        </div>
    )



}

export default ExerciseCard

