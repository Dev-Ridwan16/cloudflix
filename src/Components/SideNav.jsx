import React, { useState } from 'react'
import './Styles/SideNav.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Transition } from 'react-transition-group'
import {
  faAngleDown,
  faAngleUp,
  faHammer,
  faHeartbeat,
  faSkull,
  faGraduationCap,
  faHome,
  faDownload,
  faCog,
  faFlag,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

function SideNav() {
    const [countryMovieMenu, setCountryMovieMenu] = useState([
    {
      title: 'Hollywood Movies',
      url: 'hollywood-movies',
      isOpen: false,
      options: [
        {
          iconRep: faHammer,
          movieType: 'Action Movies',
          movieLink: '/hollywood/action-movies'
        },
        {
          iconRep: faHeartbeat,
          movieType: 'Romatic Movies',
          movieLink: '/hollywood/romantic-movies'
        },
        {
          iconRep: faSkull,
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
          iconRep: faHammer,
          movieType: 'Action Movies',
          movieLink: '/hallyuwood/action-movies'
        },
        {
          iconRep: faHeartbeat,
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
          iconRep: faHammer,
          movieType: 'Action Movies',
          movieLink: '/nollywood/action-movies'
        },
        {
          iconRep: faHeartbeat,
          movieType: 'Romantic Movies',
          movieLink: '/nollywood/romantic-movies'
        },
        {
          iconRep: faGraduationCap,
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
          iconRep: faHammer,
          movieType: 'Action Movies',
          movieLink: '/bollywood/action-movies'
        },
        {
          iconRep: faHeartbeat,
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
                          <NavLink to={''}><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                          <NavLink to={'downloads'}><FontAwesomeIcon icon={faDownload} /> Downloads</NavLink>
                      </ul>
                  </div>
                  <label htmlFor="">Explore</label>
                  {countryMovieMenu.map((menu, index) => (
                        <React.Fragment key={index}>
                        <span className="movie-title" onClick={() => handleToggle(index)}>
                            <NavLink to={!menu.isOpen ? menu.url : ''}>
                            {menu.title} {menu.isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
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
                                    className="flex flex-row items-center px-4 text-slate-100 py-2 cursor-pointer w-[200px] text-[12px]"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    { <FontAwesomeIcon icon={option.iconRep} className="mx-2"/>} {option.movieType }
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
                          <NavLink to={'settings'}><FontAwesomeIcon icon={faCog} /> Settings</NavLink>
                          <NavLink to={'report-history'}><FontAwesomeIcon icon={faFlag} /> Report history</NavLink>
                          <NavLink to={'help'}><FontAwesomeIcon icon={faQuestionCircle} /> Help</NavLink>
                          <NavLink to={'feedback'}><FontAwesomeIcon icon={faCommentAlt} /> Send feedback</NavLink>
                      </ul>
                    </div>
              </div>
        </div>
    </React.Fragment>
  )
}

export default SideNav