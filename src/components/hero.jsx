import React from 'react';

import wave6 from '../assets/wave6.svg';
import { heros } from '../Data/links';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="relative w-full hero-section z-0 mx-auto  h-[30dvh] lg:h-[63dvh]">
                <div className="absolute w-full bottom-0 left-0 right-0 z-0 wavy ">
                    <img src={wave6} alt="" className="w-full object-cover mb-[-10px] z-0" />
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row  relative top-[10vw] sm:top-[5vw] md:top-[-5vw] mx-5 sm:mx-10 md:mx-24">
                <div className="w-full flex flex-col justify-center items-center md:items-start md:justify-start   gap-6 lg:mt-[-150px]">
                    <h1 className="text-xl font-medium text-[#44375f] max-w-[350px] pr-5 text-center pulsating-text">
                        Discover and Engage with Exciting Events in Your Area
                    </h1>
                    <button
                        className="bg-primary font-medium py-3  w-[200px] text-white"
                        onClick={() => navigate('/events')}
                    >
                        Find your next event
                    </button>
                    <button
                        className="w-[200px] font-medium text-gray-700 py-3 px-5 border-2 border-primary "
                        onClick={() => navigate('/new-event')}
                    >
                        Publish an Event
                    </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 w-full py-10 sm:py-20">
                    {heros.map((hero) => (
                        <div
                            key={hero.name}
                            className="flex flex-col w-full items-center justify-start gap-4"
                        >
                            <div className="h-[100px] w-[100px] rounded-[50%]  bg-light flex items-center border-2 border-black-100 justify-center">
                                <hero.icon size="32" />
                            </div>

                            <h2 className="text-lg  tracking-wide text-center capitalize ">
                                {hero.name}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
