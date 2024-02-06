import React from 'react';
import Hero from '../components/hero';
import Events from "../components/Events.jsx";

const Landing = () => {
  return (
    <div>
      <Hero />
      <div>
        <h1 className="text-xl font-medium text-[#44375f] max-w-[350px] pr-5 leading-8 mb-4 ml-24">
          Upcoming Events
        </h1>
        <Events simplified={true} nosearch={true}/>
      </div>
    </div>
  );
};

export default Landing;
