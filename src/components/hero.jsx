import React from 'react';

import wave6 from '../assets/wave6.svg';
import { heros } from '../data/links';
import { useNavigate } from 'react-router-dom';
import Gif from '../assets/steps.gif'

const Hero = () => {
    const navigate = useNavigate();
    return (
      <div className="lg:min-h-[85vh] relative hero-section bg-contain bg-bottom">
          <div className="absolute w-full top-10 left-0 right-0 wavy hidden lg:block">
              <img src={wave6} alt="" className="w-full object-cover mb-[-10px] z-0"/>
          </div>
          <div className="w-full h-[50dvh] flex justify-between lg:absolute lg:bottom-[-60px] bg-white flex-wrap mt-32 mb-20 lg:mt-0 lg:mb-0">
              <div className="w-full lg:w-1/2 flex justify-start flex-col gap-4 px-10 lg:pl-24 pt-10">
                  <h1 className="text-xl font-medium text-[#44375f] pr-5 pulsating-text leading-8">
                      Discover and Engage with Exciting Events in your area
                  </h1>
                  <button
                    className="bg-primary font-medium py-3  w-[200px] text-white"
                    onClick={() => navigate('/events')}
                  >
                      Find your next event
                  </button>
                  <button
                    className="w-[200px] font-medium text-gray-700 py-3 px-5 border-2 border-primary"
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
    );
};

export default Hero;
