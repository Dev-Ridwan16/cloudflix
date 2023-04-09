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
            image: 'https://i.pinimg.com/236x/4f/7f/da/4f7fda386c85c5626f79175e06932224.jpg'
        },
        {
            id: 2,
            title: "Captain Americ; New World order",
            image: 'https://i.pinimg.com/564x/0e/f3/2b/0ef32ba41130c40d9dd94b1b495baae0.jpg'
        },
        {
            id: 3,
            title: "Black Panther: Wakander Forever",
            image: 'https://i.pinimg.com/236x/eb/f4/bb/ebf4bbcdc6c411f9df6ed14bb9c7d11a.jpg'
        },
        {
            id: 4,
            title: "Thor: Love and Thunder",
            image: 'https://i.pinimg.com/564x/88/ba/ff/88baff41519c851cbd8612185bcc2768.jpg'
        },
        {
            id: 5,
            title: "Captain Americ: The Winter Soldier",
            image: 'https://i.pinimg.com/236x/bf/f6/03/bff603aa0d6fd81516088346988ef469.jpg'
        },
        {
            id: 6,
            title: "Iron Man: The Incredible Hulk",
            image: 'https://i.pinimg.com/236x/bd/ec/d8/bdecd83ebbd830907d3a052f352caeee.jpg'
        },
        {
            id: 7,
            title: "Doctor Strange in the Multiverse of Madness",
            image: 'https://i.pinimg.com/236x/15/18/6e/15186e1afee0d09bd414ccb45a838f35.jpg'
        },
        {
            id: 8,
            title: "Jumong (Full Seansons)",
            image: 'https://i.pinimg.com/236x/97/a2/19/97a219b58ff76bad33240835a6207c90.jpg'
        },
        {
            id: 9,
            title: "Tenent",
            image: 'https://i.pinimg.com/236x/19/41/8a/19418a861ef38e556daae20f3b7cdb2e.jpg'
        },
        {
            id: 10,
            title: "The pale blue eye",
            image: 'https://i.pinimg.com/236x/87/a5/67/87a56748692a2c9f6afd230777ea175d.jpg'
        },
        {
            id: 11,
            title: "Captain Mavel",
            image: 'https://i.pinimg.com/564x/ef/79/51/ef79514a27f478a951862e5d080cd885.jpg'
        },
        {
            id: 12,
            title: "Superman Returns",
            image: 'https://i.pinimg.com/564x/04/08/d8/0408d8e80ae02dcc09ee5e4e5ad6c4a8.jpg'
        },
    ]

    return (
        <div className=" max-w-[400px] mx-auto md:max-w-[1024px]">
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
