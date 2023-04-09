import { useState } from 'react'
import './App.css'
import { Router, Route } from 'react-router-dom'
import HeaderNav from './Components/HeaderNav'
import BottomNav from './Components/BottomNav'
import SideNav from './Components/SideNav'
import DesktopHeaderNav from './Components/DesktopHeaderNav'
import Recent from './Components/Recent'

function App() {

  return (
    <div className="App">
      <DesktopHeaderNav />
      <HeaderNav />
      <BottomNav />
      {/* <Recent /> */}
    </div>
  )
}

export default App
