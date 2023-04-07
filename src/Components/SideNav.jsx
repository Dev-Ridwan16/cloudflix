import React, { useState } from 'react'
import './Styles/SideNav.css'
import { NavLink } from 'react-router-dom'
import { Transition } from 'react-transition-group'

function SideNav() {
    const [countryMovieMenu, setCountryMovieMenu] = useState([
    {
      title: 'Hollywood Movies',
      url: 'hollywood-movies',
      isOpen: false,
      options: [
        {
          iconRep: "ri-hammer-line",
          movieType: 'Action Movies',
          movieLink: '/hollywood/action-movies'
        },
        {
          iconRep: "ri-heart-pulse-line",
          movieType: 'Romatic Movies',
          movieLink: '/hollywood/romantic-movies'
        },
        {
          iconRep: "ri-skull-2-line",
          movieType: 'Horror Movies',
          movieLink: '/hollywood/horro-movies'
        },
      ]
    },
    {
      title: 'Hallyuwood Movies',
      url: 'hallyuwood-movies',
      isOpen: false,
      options: [
        {
          iconRep: "ri-hammer-line",
          movieType: 'Action Movies',
          movieLink: '/hallyuwood/action-movies'
        },
        {
          iconRep: "ri-heart-pulse-line",
          movieType: 'Romantic Movies',
          movieLink: '/hallyuwood/romantic-movies'
        },
        
      ]
    },
    {
      title: 'Nollywood Movies',
      url: 'nollywood-movies',
      isOpen: false,
      options: [
        {
          iconRep: "ri-hammer-line",
          movieType: 'Action Movies',
          movieLink: '/nollywood/action-movies'
        },
        {
          iconRep: "ri-heart-pulse-line",
          movieType: 'Romantic Movies',
          movieLink: '/nollywood/romantic-movies'
        },
        {
          iconRep: "ri-book-line",
          movieType: 'Education Movies',
          movieLink: '/nollywood/edu-movies'
        },
      ]
    },
    {
      title: 'Bollywood Movies',
      url: 'bollywood-movies',
      isOpen: false,
      options: [
        {
          iconRep: "ri-hammer-line",
          movieType: 'Action Movies',
          movieLink: '/bollywood/action-movies'
        },
        {
          iconRep: "ri-heart-pulse-line",
          movieType: 'Romantic Movies',
          movieLink: '/bollywood/romatic-movies'
        }
      ]
    }
  ])
    
    const handleToggle = (index) => {
        const updateCountryMovieMenu = [...countryMovieMenu]
        updateCountryMovieMenu[index].isOpen = !updateCountryMovieMenu[index].isOpen
        setCountryMovieMenu(updateCountryMovieMenu)
    }

    function handleOptionClick(option) {
        console.log(`You selected ${option}`);
        // setIsOpen(false);
    }
  return (
    <React.Fragment>
        <div className='hidden sidebar xl:block sticky overflow-scroll top-0 border-r-2 border-r-slate-900 h-screen p-5'>
              <div className='text-left py-2'>
                  <span className='brand-name'>CLOUDFLIX</span>
              </div>
              <div className='flex flex-col'>
                  <div className=''>
                      <label htmlFor="">Feeds</label>
                      <ul className='feeds text-slate-100 flex flex-col text-[12px]'>
                          <NavLink className="side-bar-menus side-bar-parent" to={''}><i className="ri-home-2-line"></i> Home</NavLink>
                          <NavLink className="side-bar-menus side-bar-parent" to={'downloads'}><i className="ri-download-cloud-2-line"></i> Downloads</NavLink>
                      </ul>
                  </div>
                  <label htmlFor="">Explore</label>
                  {countryMovieMenu.map((menu, index) => (
                        <React.Fragment key={index}>
                        <span className="movie-title" onClick={() => handleToggle(index)}>
                            <NavLink className="side-bar-menus" to={!menu.isOpen ? menu.url : ''}>
                            {menu.title} {menu.isOpen ?<i className="ri-arrow-up-s-line"></i> : <i className="ri-arrow-down-s-line"></i>}
                            </NavLink>
                        </span>
                        <Transition in={menu.isOpen} timeout={500}>
                            {state => (
                            <ul
                                className={`dropdown-menu px-5 left-0 rounded-md overflow-hidden transition-max-height duration-1000 ease-out ${state}`}
                                style={{ maxHeight: state === 'entered' ? '200px' : '0' }}
                            >
                                {menu.options.map(option => (
                                <NavLink
                                    to={option.movieLink}
                                    key={option}
                                    className="side-bar-parent flex flex-row items-center px-4 text-slate-100 py-2 cursor-pointer w-[200px] text-[12px]"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {<i className={option.iconRep }>  </i>} {option.movieType }
                                </NavLink>
                                ))}
                            </ul>
                            )}
                        </Transition>
                        </React.Fragment>
                    ))}
                  <div>
                      <label htmlFor="">Options</label>
                      <ul className='options text-slate-100 flex flex-col text-[12px]'>
                          <NavLink className="side-bar-menus side-bar-parent" to={'settings'}><i className="ri-settings-3-line"></i> Settings</NavLink>
                          <NavLink className="side-bar-menus side-bar-parent" to={'report-history'}><i className="ri-flag-line"></i> Report history</NavLink>
                          <NavLink className="side-bar-menus side-bar-parent" to={'help'}><i className="ri-question-line"></i> Help</NavLink>
                          <NavLink className="side-bar-menus side-bar-parent" to={'feedback'}><i className="ri-feedback-line"></i> Send feedback</NavLink>
                      </ul>
                    </div>
              </div>
        </div>
    </React.Fragment>
  )
}

export default SideNav