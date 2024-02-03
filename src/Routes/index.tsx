import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Header from '../components/Navbar';
import Landing from '../pages/landing';
import Login from '../pages/login';
import Register from '../pages/register';
import Events from '../pages/events';
import EventDetails from '../pages/evenDetails';

const Index = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/event" element={<Events />} />
                <Route path="/details/:id" element={<EventDetails />} />
            </Routes>
        </div>
    );
};

export default Index;
