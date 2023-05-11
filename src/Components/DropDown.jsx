// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import '../Common/styles/dropdown.css'
// import { explore } from "../utils/home-nav"

// export function DropDown(exp) {
//   // const [isOpen, setIsOpen] = useState(false)
//   const [countryMovieMenu, setCountryMovieMenu] = useState(explore)

//   const handleToggle = (index) => {
//     const updateCountryMovieMenu = [...countryMovieMenu]
//     updateCountryMovieMenu[index].isOpen = !updateCountryMovieMenu[index].isOpen
//     setCountryMovieMenu(updateCountryMovieMenu)
//   }
//   return (
//     <div className="dropdown-item">
//       <div className="dropdown-title" onClick={() => handleToggle(index)}>
//         {exp.title}
//         <i className={`ri-arrow-up-s-line ${exp.isOpen ? 'rotate-90' : 'rotate-0'}`}></i>
//       </div>
//       <ul className={`dropdown-item ${exp.isOpen ? `h-[${exp.options.length * 38}px]` : 'h-0'}`}>
//         {exp.options.map((option, i) => <DropdownItem {...option} key={i} />)}
//       </ul>
//     </div>
//   )
// }

// export function DropdownItem(option) {
//   return <>
//     <NavLink
//       to={option.movieLink}
//       className="dropdown-item-sublist"
//       onClick={() => handleOptionClick(option)}
//     >
//       {<i className={option.iconRep}>  </i>} {option.movieType}
//     </NavLink>
//   </>
// }