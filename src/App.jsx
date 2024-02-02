import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Navbar';
import Hero from './components/hero';
import Events from './components/Events';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Hero />
                <Events />
            </BrowserRouter>
        </div>
    );
};

export default App;
