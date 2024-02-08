import React from 'react';
import Hero from '../components/hero';
import Events from "../components/Events.jsx";
import Layout from './Layout';

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <div className="sm: mt-20">
        <h1 className="text-xl font-medium text-[#44375f] pr-5 leading-8 mb-4 text-center w-full">
          Upcoming Events
        </h1>
        <Events simplified={true} nosearch={true}/>
      </div>
    </Layout>
  );
};

export default Landing;
