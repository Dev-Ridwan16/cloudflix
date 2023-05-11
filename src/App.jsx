import { useState } from 'react'
import './App.css'
import { Router, Route } from 'react-router-dom'
import TopMovies from './Components/TopMovies'

function App() {

  return (
    <div className="App">
        <TopMovies />
    </div>
  )
}

export default App
