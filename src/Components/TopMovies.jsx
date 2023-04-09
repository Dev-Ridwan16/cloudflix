import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './Styles/TopMovies.css';
import Recent from './Recent';

function TopMovies() {
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    duration: 1000,
    dragStart: () => setIsPaused(true),
    dragEnd: () => setIsPaused(false),
  });
  const [currentIndex, setCurrentIndex] = useState(0)


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = (i) => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    // wrapper.style.marginLeft = `${-100 * currentIndex}%`
    setCurrentIndex(newIndex)
  }

  const slides = [
    {
      image: '/src/assets/images/movie_image1.jpg',
      title: 'Spider-Man Home coming',
      info: {
        types: {
          type1: "Action",
          type2: 'Advengers',
          type3: 'Fantancy'
        }
      }
    },
    {
      image: '/src/assets/images/movie_image2.jpg',
      title: 'Love is Blind',
      info: {
        types: {
          type1: "Romatic",
          type2: 'Love',
          type3: '18+'
        }
      }
    },
    {
      image: '/src/assets/images/movie_image3.jpg',
      title: 'Captain America: The winter soldier',
      info: {
        types: {
          type1: "Action",
          type2: 'Advengers',
          type3: 'Fantancy'
        }

      }
    },
  ];

  return (
    <React.Fragment>
      <div className="w-[450px] mx-auto my-5 md:md:w-[1024px] ">
        <h1 className='text-slate-100 text-xl font-bold mb-5'>Trending movies</h1>
        <div className="w-full">
          <div ref={sliderRef} className="keen-slider rounded-xl">
            {slides.map((slide, index) => (
              <div key={index} className="keen-slider__slide relative bg-gradient-to-tl from-black to-black">
                <img src={slide.image} alt="Your Image" className="w-full h-[300px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent mix-blend-ovelay"></div>
                <div className="absolute inset-0 flex flex-col py-5 px-4">
                  <h1 className="text-xl text-slate-300 font-bold w-[200px]">{slide.title}</h1>
                  <div className='movie-info'>
                    <span>{slide['info'].types.type1}</span>
                    <span>{slide['info'].types.type2}</span>
                    <span>{slide['info'].types.type3}</span>
                  </div>

                  <button className='bg-[#dc2626] w-[100px] p-2 mt-20 text-slate-100 text-sm rounded-xl'>Play now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Recent />
    </React.Fragment>
  );
}

export default TopMovies;
