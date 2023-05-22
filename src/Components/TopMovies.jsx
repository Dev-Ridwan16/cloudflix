import { useState, useEffect } from 'react';
import { slides } from '../data/slides.js'
import BottomNav from './BottomNav.jsx';
import DesktopHeaderNav from './DesktopHeaderNav.jsx';
import HeaderNav from './HeaderNav.jsx';
import Recent from './Recent.jsx';
import SideNav from './SideNav.jsx';
import './Styles/TopMovies.css'

function TopMovies() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex">
      <SideNav />
      <div className='w-[750px] mx-auto flex flex-col gap-5'>
        <DesktopHeaderNav />
        <HeaderNav />
        <div className='flex flex-col'>
          <div className="carousel max-[350px] md:max-w-[800px] lg:max-w-[1000px] mx-auto">
            <div className="carousel__slides">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel__slide ${
                    index === activeIndex ? 'active' : ''
                  }`}
                >
                  <img src={slide.imageURL} alt={slide.info.title} className="slide__images" />
                  <div className="carousel__caption">
                    <h1 className='text-lg md:text-2xl lg:text-3xl font-semibold lg:font-bold'>{slide.info.title}</h1>
                    <div className='other__informations'>
                      <h3 className='text-sm font-medium md:text-base md:font-bold py-3'>{slide.info.mainActor}</h3>
                      <div className="flex flex-row justify-between w-auto">
                        <div className="hidden md:flex flex-row">
                          {slide.info.movie_type.map((type, index) => (
                            <span key={index} className="text-xs italic">
                              {Object.values(type).join(' | ')}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-row">
                          {
                            slide.info.location.map((locate, index) => (
                              <span key={index} className='text-[10px] md:text-xs'>
                                {Object.values(locate).join(" ")}
                              </span>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                    <button className='hidden md:block bg-[#dc2626] text-slate-100 relative md:top-24 lg:top-36 py-2 px-3 shadow rounded-lg'>Play video <i className='fa fa-play-circle'></i></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel__indicators">
              {slides.map((slide, index) => (
                <img 
                  src={slide.imageURL}
                  key={index}
                  className={`carousel__indicator ${
                    index === activeIndex ? 'active' : ''
                  } hidden md:block`}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel__indicator ${
                    index === activeIndex ? 'active' : ''
                  } md:hidden`}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
          <Recent />
          <BottomNav />
      </div>
    </div>
  )
}

export default TopMovies