import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Transition } from 'react-transition-group'
import {
  faBars,
  faTimes, faUserCircle,
  faAngleDown,
  faAngleUp,
  faHammer,
  faHeartbeat,
  faSkull,
  faGraduationCap,
  faSearch,
  faBell,
} from '@fortawesome/free-solid-svg-icons'

function DesktopHeaderNav() {
  return (
    <React.Fragment>
        <div className='hidden xl:block sticky top-0 py-5'>
        <nav className='flex flex-row justify-between items-center py-2 px-3 w-[1024px] mx-auto'>
          <div className='flex flex-row items-center'>
            <input type="search" name="" id="" placeholder='Search with title' className=' bg-[#070101] border border-zinc-800 rounded-2xl w-[250px] px-3 py-2 text-slate-400 text-[12px]' />
            <FontAwesomeIcon icon={faSearch} className='z-10 -ml-6 bg-[#070101] text-slate-400 text-[12px]' />
          </div>
          <div>
            <FontAwesomeIcon icon={faBell} className='px-5 text-slate-100'/>
            <FontAwesomeIcon icon={faUserCircle} className='text-slate-100' />
          </div>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default DesktopHeaderNav