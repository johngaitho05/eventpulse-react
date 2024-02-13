import React from 'react';
import Hero from '../components/hero';
import Benefits from '../components/Benefits';
import Layout from './Layout';
import Slider from '../components/Slider';
import Testimonials from '../components/TestmonialSlide';

const Landing = () => {
    return (
        <Layout>
            <Hero />
            <div className="bg-[#001e2b] relative z-50 pt-20">
                <Benefits />
                <Slider />
                {/* <Testimonials /> */}
            </div>
        </Layout>
    );
};

export default Landing;
