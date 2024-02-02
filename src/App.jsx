import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Navbar';
import Hero from './components/hero';
import Events from './components/Events';
import Auth from './auth/Login';
import Register from './auth/Register';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Hero />
                <Events />
                <Auth />
                <Register />
            </BrowserRouter>
        </div>
    );
};

export default App;
