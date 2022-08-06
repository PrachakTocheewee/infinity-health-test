import React, { useState,useEffect } from "react";
import Navbar from "../Navbar/Navbar";

import ExerciseCard from "../ExerciseCard/ExerciseCard";
import "./ExerciseList.css";

const  ExerciseList = (props,handleDelete,addAct) => {
/*
    const [exerciselist,setExerciseList] = useState([])

    const addExcerciseCard = (card) =>{

        return;
    }*/
console.log(props)

return (
        <div>

              <div className = 'exerciseList'>
          <h4 className = 'createAct' onClick={() => addAct}>+ Create yor activities<br/></h4>


          <div className="addCardAct">

        <p  className="addCardActText">+ Tap here to add your activity<br/></p>

          </div>

      {props.card.map(({ id, activity, distance,durationHours,durationMin,date,calories,heartrate,description }) => {
        return(
          <><li key={id}></li><button onClick={() => handleDelete(id)}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</button><div className="cardAct">
            <div className="cardActName">
              <div><span className='boldFont'>Run to Forget Christine (again)</span></div>
              <div className="cardActType"><span className='boldFont'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {activity}</span></div>
            </div>
            <div>
              <p className="cardActDuration"><span className='boldFont'>Duration:</span> <span>{durationHours} Hour {durationMin} Minutes</span></p>
              <p className="cardActCalories">{calories}</p>
              <p className="cardActDes">{description}</p>
              <p className="cardActAdddate">added activity on {date}.</p>
              <p className="cardActCompletedDate">completed on {date}.</p>
              <p>id {id} distance {distance}  heart {heartrate}</p>
            </div>
          </div></>
          )}
          )
      }
    
    </div>
    </div>


          )





    
/*
    return(
        <div className = 'exerciseList'>
          <h4 className = 'createAct'>+ Create yor activities<br/></h4>


          <div className="addCardAct">

        <p  className="addCardActText">+ Tap here to add your activity<br/></p>

          </div>

          <div className="cardAct">
        <div className="cardActName">
            <div><span className='boldFont'>Run to Forget Christine (again)</span></div>
            <div className="cardActType"><span className='boldFont'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {props.data.activity}</span></div>
        </div>
        <div>
          <p className="cardActDuration"><span className='boldFont'>Duration:</span> <span>1 Hour 30 Minutes</span></p>
          <p className="cardActCalories">1300 Burned Calories</p>
          <p className="cardActDes">วิ่งเพื่อลืมคริสทีน</p>
          <p className="cardActAdddate">added activity on 17 July 2022 at 20.34 hrs.</p>
          <p className="cardActCompletedDate">completed on 23 July 2022 at 17.30 hrs.</p>
        </div>
      </div>

          <div className="cardAct">
        <div className="cardActName">
            <div><span className='boldFont'>Run to Forget Christine (again)222</span></div>
            <div className="cardActType"><span className='boldFont'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Run</span></div>
        </div>
        <div>
          <p className="cardActDuration"><span className='boldFont'>Duration:</span> <span>1 Hour 30 Minutes</span></p>
          <p className="cardActCalories">1300 Burned Calories</p>
          <p className="cardActDes">วิ่งเพื่อลืมคริสทีน</p>
          <p className="cardActAdddate">added activity on 17 July 2022 at 20.35 hrs.</p>
          <p className="cardActCompletedDate">completed on 24 July 2022 at 17.30 hrs.</p>
        </div>
      </div>

          <div className="cardAct">
        <div className="cardActName">
            <div><span className='boldFont'>Run to Forget Christine (again)333</span></div>
            <div className="cardActType"><span className='boldFont'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Run</span></div>
        </div>
        <div>
          <p className="cardActDuration"><span className='boldFont'>Duration:</span> <span>1 Hour 30 Minutes</span></p>
          <p className="cardActCalories">1300 Burned Calories</p>
          <p className="cardActDes">วิ่งเพื่อลืมคริสทีน</p>
          <p className="cardActAdddate">added activity on 17 July 2022 at 20.36 hrs.</p>
          <p className="cardActCompletedDate">completed on 25 July 2022 at 17.30 hrs.</p>
        </div>
      </div>     


          <h4 className = 'pendingAct'>+ Pending Activities<br/></h4>

        </div>
)*/
    



}

    export default ExerciseList