import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Slider = () => {
    const slidesData = [
        { id: 'slide1', text: 'Slide 1' },
        { id: 'slide2', text: 'Slide 2' },
        { id: 'slide3', text: 'Slide 3' },
    ];

    // Duplicate slides for seamless looping
    const slides = [...slidesData, ...slidesData];

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideWidth = 200; // Adjust based on your slide width
    const sliderRef = useRef();

    useEffect(() => {
        // Automatic slide transition with seamless reset
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Adjust time as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden" style={{ width: `${slideWidth * 3}px` }}>
            <motion.div
                className="flex"
                animate={{ x: -(currentSlide * slideWidth) }}
                transition={{ duration: 0.5, ease: 'linear' }}
                style={{ width: `${slideWidth * slides.length}px` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{
                            width: `${slideWidth}px`,
                            height: '100px',
                            backgroundColor: '#ccc',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {slide.text}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;
