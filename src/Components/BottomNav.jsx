import React from 'react'
import './Styles/BottomNav.css'

function BottomNav() {
  return (
    <React.Fragment>
        <div className="fixed flex flex-row justify-evenly bg-zinc-900 py-2 text-slate-100 mb-5 rounded-b-2xl top-[92%] w-full xl:hidden">
            <i className="ri-home-2-line botton-nav-icon"></i>
            <i className="ri-search-line botton-nav-icon"></i>
            <i className="ri-download-cloud-2-line botton-nav-icon" ></i>
            <i className="ri-settings-3-line botton-nav-icon"></i>
        </div>
        
    </React.Fragment>

  )
}

export default BottomNav