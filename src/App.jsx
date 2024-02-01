import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Navbar';
import Hero from './components/hero';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Hero />
            </BrowserRouter>
        </div>
    );
};

export default App;
