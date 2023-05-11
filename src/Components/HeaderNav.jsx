import React, { useState } from 'react'
// import './Styles/HeaderNav.css'
import { NavLink } from 'react-router-dom'
import { mobileNavLinks } from '../data/slides'
import { useToggleTheme } from './HandleTheme';

function HeaderNav() {
  const [nav, setNav] = useState(true)
  const [handleTheme, changeTheme] = useToggleTheme();
  const handleNav = () => {
    setNav(!nav)
  }



  return (
    <React.Fragment>
      <div className= {`${handleTheme ? 'bg-[#070101] transition-all duration-1000 ease-in-out' : 'bg-[#ffffff] text-[#070101]'} z-30 py-2 h-[50px] md:hidden sticky top-0`}>
        <div className='flex justify-between items-center  max-w-[100%] mx-5'>
          <span onClick={handleNav} className=" w-7 px-2 text-[20px]">
            {nav ? <i className="ri-menu-line"></i> : < i className="ri-close-line"></i>}
          </span>
          <div className='brand-name text-[#dc2626] font-bold text-2xl'>CLOUDFLIX</div>
          <i className="ri-user-3-line"></i>
        </div>
        <div>
          <nav className={`transition-all duration-500 ease-in-out ${nav ? 'opacity-0 w-0' : 'opacity-100 w-full'} w-auto opacity-100 flex flex-col h-screen fixed ${handleTheme ? 'bg-[#070101] transition-all duration-1000 ease-in-out' : 'bg-[#ffffff]'}`}>

                {mobileNavLinks.map((mobileNavLink, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <div className="changeTheme flex justify-between m-5">
                      <label>Change theme <i className='fa fa-arrow-right'></i></label>
                      <i
                        className={`${handleTheme ? 'fa fa-sun' : 'fa fa-moon'} cursor-pointer`}
                        onClick={changeTheme}
                      ></i>
                    </div>
                    <label className='text-slate-400 text-xs my-3 ml-5'>{mobileNavLink.label}</label>
                    {
                      mobileNavLink.links.map((link, i) => {
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
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeaderNav