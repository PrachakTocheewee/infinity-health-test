
import React from 'react'

import Navbar from '../Navbar/Navbar'
import ExerciseForm from '../ExerciseForm/ExerciseForm'

import './App.css'


const App = () => {
  return (
    <div className='area'>
      <div>
        <Navbar />
      </div>
      <div>
        <ExerciseForm />
      </div>
    </div>
  )
}

export default App
