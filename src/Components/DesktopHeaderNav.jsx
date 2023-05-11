import React from 'react';
import { useToggleTheme } from './HandleTheme';

function DesktopHeaderNav() {
  const [handleTheme, changeTheme] = useToggleTheme();

  return (
    <React.Fragment>
      <div className="flex flex-row sticky top-0 z-40">
        <div className="hidden md:hidden lg:flex flex-col lg:w-[full]">
          <div className="hidden lg:block sticky z-10 top-0">
            <nav className={`${handleTheme ? 'bg-[#070101] transition-all duration-1000 ease-in-out' : 'bg-[#ffffff]'} flex flex-row justify-between items-center px-2 py-1 w-[1000px] mx-auto`}>
              <div className="flex flex-row items-center gap-5">
                <i
                  className={`${handleTheme ? 'fa fa-sun' : 'fa fa-moon'} cursor-pointer`}
                  onClick={changeTheme}
                ></i>
                <div>
                  <input
                    type="search"
                    placeholder="Search with title"
                    className="border border-[#070101] rounded-2xl w-[250px] px-3 py-1 text-slate-400 text-[12px]"
                  />
                  <i className="ri-search-line z-10 -ml-6 text-slate-400 text-[12px]"></i>
                </div>
              </div>
              <div className="flex gap-5">
                <i className="ri-notification-2-line"></i>
                <i className="ri-user-3-line"></i>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DesktopHeaderNav;
