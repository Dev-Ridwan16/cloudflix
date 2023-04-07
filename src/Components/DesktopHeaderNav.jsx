import React from 'react'

function DesktopHeaderNav() {
  return (
    <React.Fragment>
        <div className='hidden xl:block sticky top-0 py-5'>
        <nav className='flex flex-row justify-between items-center py-2 px-3 w-[1024px] mx-auto'>
          <div className='flex flex-row items-center'>
            <input type="search" name="" id="" placeholder='Search with title' className=' bg-[#070101] border border-zinc-800 rounded-2xl w-[250px] px-3 py-2 text-slate-400 text-[12px]' />
            <i className="ri-search-line z-10 -ml-6 bg-[#070101] text-slate-400 text-[12px]"></i>
          </div>
          <div>
            <i className='ri-notification-2-line px-5 text-slate-100'></i>
          <i className="ri-user-3-line text-slate-100"></i>

          </div>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default DesktopHeaderNav