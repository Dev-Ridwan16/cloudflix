import React, { useState } from 'react'
import './Styles/HeaderNav.css'
import { NavLink } from 'react-router-dom'
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

function HeaderNav() {
  const [nav, setNav] = useState(true)
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

  const handleNav = () => {
    setNav(!nav)
  }

  function handleOptionClick(option) {
    console.log(`You selected ${option}`);
    // setIsOpen(false);
  }

  return (
    <React.Fragment>
      <div className="bg-[#070101] py-2 h-[50px] xl:hidden">
        <div className='flex justify-between items-center text-slate-100 max-w-[100%] mx-5'>
          <span onClick={handleNav} className=" w-7 px-2 text-[20px]">
            {nav ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
          </span>
          <div className='text-[#dc2626] font-bold text-2xl'>CLOUDFLIX</div>
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
        <div className={!nav ? 'navStyle' : 'transition-all duration-700 fixed left-[-100%] h-screen ease-in-out'}>
          <label>Explore</label>
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
                        className="flex flex-row items-center px-4 py-2 cursor-pointer w-[200px] text-[12px]"
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
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeaderNav