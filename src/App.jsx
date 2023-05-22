import { useState } from 'react'
import './App.css'
import { Router, Route } from 'react-router-dom'
import TopMovies from './Components/TopMovies'
import BottomNav from './Components/BottomNav'
import Profile from './Components/Profile'

function App() {

  return (
    <div className="App">
      <TopMovies />
      {/* <Profile /> */}
    </div>
  )
}

export default App
