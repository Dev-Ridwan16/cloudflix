import { useState } from 'react'
import './App.css'
import { Router, Route } from 'react-router-dom'
import TopMovies from './Components/TopMovies'
import BottomNav from './Components/BottomNav'

function App() {

  return (
    <div className="App">
      <TopMovies />
      <BottomNav />
    </div>
  )
}

export default App
