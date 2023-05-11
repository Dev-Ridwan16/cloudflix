import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { categories } from "../data/categories"
// import '../Components/Styles/Recent.css' 

export default () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 6,
            spacing: 15,
        },
    })

    const [mobileSliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 15,
        },
    })

    const isMobile = window.innerWidth <= 768;

    return (
        <div className={`${isMobile ? 'top-[35%]' : 'top-[58%]'} relative max-w-[350px] mx-auto md:max-w-[1024px]`}>
        
            {
                categories.map((contexts, index) => (
                    <div key={index} className="mt-5">
                        <h1 className='text-xl font-bold mb-5'>{contexts.name}</h1>
                        <div ref={isMobile ? mobileSliderRef : sliderRef} className="keen-slider">
                            {
                                contexts.slides.map((context) => (
                                    <div key={index} className={`keen-slider__slide number-slide${index + 1} md:block `}>
                                        <div className="bg-none" key={context.id} >
                                            <div className={`${isMobile ? 'w-[100px]' : 'w-[150px]'}relative h-full rounded-lg`}>
                                                <div className="mx-2 rounded-xl">
                                                    <i className="fa fa-play-circle absolute text-2xl text-[#dc2626] opacity-75 bg-slate-100 rounded-full translate-x-14 translate-y-12 z-20"></i>
                                                    <img
                                                        src={context.image}
                                                        alt="Your Image"
                                                        className={`${isMobile ? 'w-[200px] h-[80px]' : 'w-[250px] h-[120px]'} object-cover rounded-lg`}
                                                    />
                                                </div>
                                                <div className="absolute inset-0 flex flex-col top-auto px-2">
                                                    <h1 className="h-10 text-[12px] text-slate-100 bg-[#696969] bg-opacity-70 opacity-100 px-2 rounded-b-lg">
                                                        {context.title.length > 20 ? context.title.slice(0, 25).concat('...') : context.title}
                                                    </h1>
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
