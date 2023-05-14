import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { categories } from "../data/categories"
// import '../Components/Styles/Recent.css' 

export default () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 6,
            spacing: 10,
        },
    })

    const [mobileSliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 8,
        },
    })

    const isMobile = window.innerWidth <= 768;

   


    return (
        <div className={`${isMobile ? 'top-[35%]' : 'top-[58%]'} relative max-w-[350px] mx-auto md:max-w-[769px] md:top-[45%] lg:max-w-[1024px]`}>
        
            {
                categories.map((contexts, index) => (
                    <div key={index} className="my-5">
                        <h1 className='text-xl font-bold mb-5'>{contexts.name}</h1>
                        <div ref={isMobile ? mobileSliderRef : sliderRef} className="keen-slider">
                            {
                                contexts.slides.map((context) => (
                                    <div key={index} className={`keen-slider__slide number-slide${index + 1} md:block rounded`}>
                                        <div className="bg-none" key={context.id} >
                                            <div className={`${isMobile ? 'w-[150px]' : 'w-[200px]'} relative `}>
                                                <div className="">
                                                    <i className={`fa fa-play-circle absolute  text-[#dc2626] opacity-75 bg-slate-100 rounded-full md:translate-x-12 ${isMobile ? "text-lg translate-x-[90px] translate-y-[78px]" : "text-2xl lg:translate-x-16 translate-y-12"} z-20`}></i>
                                                    <img
                                                        src={context.image}
                                                        alt="Your Image"
                                                        className={`${isMobile ? 'w-[150px] h-[100px]' : 'w-[100%] h-[120px]'} object-cover `}
                                                    />
                                                </div>
                                                <div className="absolute inset-0 h-10 flex flex-col top-auto text-slate-100 bg-[#696969] gap-y-2  px-2">
                                                            <h1 className={`${isMobile ? "text-[10px]" : "text-[12px]" } bg-opacity-70 opacity-100`}>
                                                                {context.title.length >= 20 ? (isMobile ? context.title.slice(0, 20) : context.title.slice(0, 20)).concat("...") : context.title}
                                                                
                                                            </h1>
                                                    <div className="flex">
                                                        <em className={`${isMobile ? 'text-[8px]' : 'text-[10px]'}`}>
                                                            {context.year}
                                                        </em>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
