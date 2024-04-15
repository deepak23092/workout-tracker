import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TrackYourGoal from './pages/TrackYourGoal'
import GetBurn from './pages/GetBurn'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Goals from './pages/Goals'
import WorkoutTracker from './pages/WorkoutTracker'
import WorkoutSchedule from './pages/WorkoutSchedule'

function App() {

  return (
    <div className='flex justify-center font-Montserrat'>
      <Router>
        <Routes>
          <Route exact path='/' element={<TrackYourGoal />} />
          <Route exact path='/getburn' element={<GetBurn />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/goals' element={<Goals />} />
          <Route exact path='/workouttracker' element={<WorkoutTracker />} />
          <Route exact path='/workoutschedule' element={<WorkoutSchedule />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App
