import React from 'react';

import wave6 from '../assets/wave6.svg';
import { useNavigate } from 'react-router-dom';
import Gif from '../assets/steps.gif'

// Part of the landing page
const Hero = () => {
    const navigate = useNavigate();
    return (
      <div className="lg:min-h-[65vh] relative hero-section bg-contain bg-bottom">
          <div className="absolute w-full lg:top-24 xl:top-16 2xl:top-0 left-0 right-0 hidden lg:block">
              <img src={wave6} alt="" className="w-full object-cover z-0"/>
          </div>
          <div className="w-full h-[30dvh] flex justify-between lg:absolute lg:bottom-0 my-36 lg:my-0 bg-white">
              <div className="w-full max-w-[90rem] mx-auto py-4 px-4 flex flex-row flex-wrap align-middle">
                <div className="w-full lg:w-1/2 flex justify-start flex-col gap-4 px-10 py-10">
                  <h1 className="text-xl font-medium text-[#44375f] pr-5 pulsating-text leading-8 mb-4">
                      Discover and Engage with Exciting Events in your area
                  </h1>
                  <button
                    className="bg-primary font-medium py-3  w-[200px] text-white hover:scale-105 hover:bg-red-800"
                    onClick={() => navigate('/events')}
                  >
                      Find your next event
                  </button>
                  <button
                    className="w-[200px] font-medium text-gray-700 py-3 px-5 border-2 border-primary hover:bg-primary hover:text-white"
                    onClick={() => navigate('/dashboard/new-event')}
                  >
                      Publish an Event
                  </button>
              </div>
              <div className="w-full lg:w-1/2">
                  <img src={Gif} alt="Steps"/>
              </div>
              </div>
          </div>
      </div>
    );
};

export default Hero;
