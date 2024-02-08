import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/landing';
import Login from '../pages/login';
import Register from '../pages/register';
import Events from '../pages/events';
import EventDetails from '../pages/evenDetails';
import NewEvent from '../pages/NewEvent';
import DashboardLayout from '../pages/DashboardLayout.jsx';
import OverviewPage from '../pages/OverviewPage.jsx';

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<EventDetails />} />
                <Route path="/dashboard" element={<OverviewPage />} />
                <Route path="/dashboard/new-event" element={<NewEvent />} />
            </Routes>
        </div>
    );
};

export default Index;
