import React from 'react';
import Hero from '../components/hero';
import Events from "../components/Events.jsx";

const Landing = () => {
  return (
    <div>
      <Hero />
      <div>
        <h2 className="ml-36">Upcoming Events</h2>
        <Events simplified={true} nosearch={true}/>
      </div>
    </div>
  );
};

export default Landing;
