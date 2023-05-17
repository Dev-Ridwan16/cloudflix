import React from 'react'
import './Styles/SideNav.css'
import { sideNavLinks } from '../data/slides'
import Icon from '../assets/images/LogoIcon.png'
import Name from '../assets/images/LogoName.png'
import { NavLink } from 'react-router-dom'

function SideNav() {
  return (
    <div className="hidden xl:flex flex-row fixed top-0 bottom-0">
        <div className="sideNav border-r-2 border-slate-700 h-screen w-[260px] overflow-y-scroll">
            <div className="logo">
                <img src={Icon} alt="" />
                <img src={Name} alt="" />
            </div>
            <nav className='flex flex-col'>
                {sideNavLinks.map((sideNavLink, index) => {
                return (
                    <div key={index} className="flex flex-col">
                    <label className='text-slate-400 text-xs my-3 ml-5'>{sideNavLink.label}</label>
                    { 
                        sideNavLink.links.map((link, i) => {
                            return (                                    
                                <NavLink
                                    key={i}
                                    to={link.to}
                                    className=". text-base px-5 transition-all my-3 duration-500 ease-in-out"
                                >
                                    {/* {Object.values(link.title)} */}
                                    <div className=' space-x-3'>
                                        <i className={link.icon}></i>
                                        <span>
                                            {link.title}
                                        </span>
                                    </div>
                                </NavLink>
                            );
                        })}
                    </div>
                );
                })}
            </nav>
            <hr className='mx-3 mt-12 mb-5'/>
            <div className='flex items-center'>
                  <button className="bg-[#dc2626] w-[150px] mx-auto text-slate-100 flex items-center gap-5 justify-center px-3 py-1 rounded-lg">
                      <span>Log out</span>
                      <i className='fa fa-sign-out'></i>
                  </button>
            </div>
        </div>
    </div>
  )
}

export default SideNav;
