import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../Components/Styles/Recent.css'

export default () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 6,
            spacing: 15,
        },
    })

    const [mobileSliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 15,
        },
    })



    const slideContents = [
        {
            id: 1,
            title: "Thirteen Reason Why",
            image: '/src/assets/images/movie_image4.jpg'
        },
        {
            id: 2,
            title: "Captain Americ; New World order",
            image: '/src/assets/images/movie_image3.jpg'
        },
        {
            id: 3,
            title: "Black Panther: Wakander Forever",
            image: '/src/assets/images/movie_image6.jpg'
        },
        {
            id: 4,
            title: "Thor: Love and Thunder",
            image: '/src/assets/images/movie_image7.jpg'
        },
        {
            id: 5,
            title: "Captain Americ: The Winter Soldier",
            image: '/src/assets/images/movie_image8.jpg'
        },
        {
            id: 6,
            title: "Iron Man: The Incredible Hulk",
            image: '/src/assets/images/movie_image9.jpg'
        },
        {
            id: 7,
            title: "Doctor Strange in the Multiverse of Madness",
            image: '/src/assets/images/movie_image10.jpg'
        },
        {
            id: 8,
            title: "Jumong (Full Seansons)",
            image: '/src/assets/images/movie_image11.jpg'
        },
        {
            id: 9,
            title: "Tenent",
            image: '/src/assets/images/movie_image12.jpg'
        },
        {
            id: 10,
            title: "The pale blue eye",
            image: '/src/assets/images/movie_image13.jpg'
        },
        {
            id: 11,
            title: "Captain Mavel",
            image: '/src/assets/images/movie_image14.jpg'
        },
        {
            id: 12,
            title: "Superman Returns",
            image: '/src/assets/images/movie_image15.jpg'
        },
    ]

    return (
        <div className=" w-[400px] mx-auto md:w-[1024px]">
            <h1 className='text-slate-100 text-xl font-bold mb-5'>Top Rated Movies movies</h1>
            <div ref={sliderRef} className="keen-slider">
                {slideContents.map((content, index) => (
                    <div key={index} className={`keen-slider__slide number-slide${index + 1} hidden md:block `}>
                        <div className="bg-none" key={content.id} >
                            <div className="relative h-[200px] bg-[#070101]">
                                <div className="mx-2 rounded-xl">
                                    <img
                                        src={content.image}
                                        alt="Your Image"
                                        className="w-[250px] h-[150px] object-cover rounded-lg"
                                    />
                                </div>
                                <div className="inset-0 flex flex-col px-4">
                                    <h1 className=" text-sm text-slate-300 font-bold ">
                                        {content.title.length > 20 ? content.title.slice(0, 20) + "..." : content.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div ref={mobileSliderRef} className="keen-slider">
                {slideContents.map((content, index) => (
                    <div key={index} className={`keen-slider__slide number-slide${index + 1} md:hidden block `}>
                        <div className="bg-none" key={content.id} >
                            <div className="relative h-[200px] bg-[#070101]">
                                <div className="mx-2 rounded-xl">
                                    <img
                                        src={content.image}
                                        alt="Your Image"
                                        className="w-[250px] h-[150px] object-cover rounded-lg"
                                    />
                                </div>
                                <div className="inset-0 flex flex-col px-4">
                                    <h1 className=" text-sm text-slate-300 font-bold ">
                                        {content.title.length > 20 ? content.title.slice(0, 20) + "..." : content.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
