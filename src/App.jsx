import { useState } from 'react'
import './App.css'
import { Router, Route } from 'react-router-dom'
import HeaderNav from './Components/HeaderNav'
import BottomNav from './Components/BottomNav'
import SideNav from './Components/SideNav'
import DesktopHeaderNav from './Components/DesktopHeaderNav'

function App() {

  return (
    <div className="App">
      <div className='flex flex-row justify-between'>
        <SideNav />
        <DesktopHeaderNav />
      </div>
      <HeaderNav />
      <BottomNav/>
    </div>
  )
}

export default App
