import React from 'react'
import './Styles/BottomNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faDownload, faCog } from '@fortawesome/free-solid-svg-icons'

function BottomNav() {
  return (
    <React.Fragment>
        <div className="fixed flex flex-row justify-evenly bg-zinc-900 py-2 text-slate-100 mb-5 rounded-b-2xl top-[94%] w-full xl:hidden">
            <FontAwesomeIcon icon={faHome} className="botton-nav-icon" />
            <FontAwesomeIcon icon={faSearch} className="botton-nav-icon" />
            <FontAwesomeIcon icon={faDownload} className="botton-nav-icon" />
            <FontAwesomeIcon icon={faCog} className="botton-nav-icon" />
        </div>
        
    </React.Fragment>

  )
}

export default BottomNav