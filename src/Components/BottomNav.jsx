import React from 'react'
import './Styles/BottomNav.css'

function BottomNav() {
  
  return (
    <React.Fragment>
      <div className="fixed bottom-0 flex flex-row justify-evenly py-12 bg-[#000000] h-[15px] text-slate-100  w-full lg:hidden">
        <div className='bt-nav'>
          <i className="fa fa-home"></i>
          <span>Home</span>
        </div>
        <div className="bt-nav">
          <i className="fa fa-search"></i>
          <span>Search</span>
        </div>
        <div className='bt-nav'>
          <i className="fa fa-television" ></i>
          <span>Live</span>
        </div>
        <div className="bt-nav">
          <i className="fa fa-download"></i>
          <span>Downloads</span>
        </div>
      </div>

    </React.Fragment>

  )
}

export default BottomNav