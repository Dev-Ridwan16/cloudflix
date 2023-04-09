import React from 'react'
import './Styles/SideNav.css'
import { NavLink } from 'react-router-dom'
// import { Transition } from 'react-transition-group'
import { feeds, explore, options } from '../utils/home-nav'
import { DropDown } from './Common/DropDown'
function SideNav() {

  return (
    <React.Fragment>
      <div className='hidden sidebar xl:block sticky overflow-scroll top-0 border-r-2 border-r-slate-900 h-screen p-5'>
        <div className='sticky top-0 text-left bg-[#070101]'>
          <span className='brand-name'>CLOUDFLIX</span>
        </div>

        <div className='flex flex-col'>
          {/* Feed Here  */}
          <div className=''>
            <label htmlFor="">Feeds</label>
            <ul className='feeds text-slate-100 flex flex-col text-[12px]'>
              {
                feeds.map(feed => (
                  <NavLink className="side-bar-menus side-bar-parent" to={''} key={feed.id}>
                    <i className={feed.icon}></i> {feed.title}
                  </NavLink>
                ))
              }
            </ul>
          </div>
          {/* Feeds end Here  */}

          <label htmlFor="">Explore</label>
          {explore.map((exp, index) => (
            <DropDown {...exp} key={index} />
          ))}
          <div>
            <label htmlFor="">Options</label>
            <ul className='options text-slate-100 flex flex-col text-[12px]'>
              {
                options.map((op, i) => {
                  <NavLink className="side-bar-menus side-bar-parent" key={i} to={op.route}>
                    <i className={op.icon}></i> {op.title}
                  </NavLink>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SideNav