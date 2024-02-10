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
            <div className="sm: mt-20 bg-[#001e2b] h-auto py-3">
                <Benefits />
                <Slider />
                <Testimonials />
            </div>
        </Layout>
    );
};

export default Landing;
