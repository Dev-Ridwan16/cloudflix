import React, { useState } from 'react';
import { useToggleTheme } from './HandleTheme';
import Profile from './Profile';

function DesktopHeaderNav() {
  const [handleTheme, changeTheme] = useToggleTheme();
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className="flex flex-row sticky top-0 z-40">
        <div className="hidden md:hidden lg:flex flex-col lg:w-[full]">
          <div className="hidden lg:block sticky z-10 top-0">
            <nav
              className={`${handleTheme
                ? 'bg-[#070101] transition-all duration-1000 ease-in-out'
                : 'bg-[#ffffff]'} flex flex-row justify-between items-center px-2 py-1 w-[1000px] mx-auto`}
            >
              <div className="flex flex-row items-center gap-5">
                <i className={`${handleTheme ? 'fa fa-sun' : 'fa fa-moon'} cursor-pointer`} onClick={changeTheme}></i>
                <div>
                  <input
                    type="search"
                    placeholder="Search with title"
                    className="border border-[#070101] rounded-2xl w-[250px] px-3 py-1 text-slate-400 text-[12px]"
                  />
                  <i className="fa fa-search z-10 -ml-6 text-slate-400 text-[12px]"></i>
                </div>
              </div>
              <button className="text-[#dc2626] font-bold border border-[#dc2626] rounded my-2 px-2">Watch Live</button>
              <div className="flex gap-5">
                <i className="fa fa-bell"></i>
                <i className={!showProfile ? "fa fa-user-circle cursor-pointer" : "fa fa-times"} onClick={toggleProfile}></i>
              </div>
            </nav>
          </div>
        </div>
      {showProfile && <Profile />}
      </div>
    </React.Fragment>
  );
}

export default DesktopHeaderNav;
