import React from 'react';
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import Landing from '../pages/landing';
import Login from '../pages/login';
import Register from '../pages/register';
import Events from '../pages/events';
import EventDetails from '../pages/evenDetails';
import NewEvent from '../pages/NewEvent';
import OverviewPage from '../pages/OverviewPage.jsx';
import NewVenue from "../pages/NewVenue.jsx";
import {getUser} from "../helpers/utils.js";
import NotFound from "../pages/404.jsx";

const PrivateRoutes = () => {
    const user = getUser()
    return(
      user ? <Outlet/> : <Navigate to="/login"/>
    )
}


const Index = () => {
    return (
      <div>
          <Routes>
              <Route path="*" element={<NotFound/>} />
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetails />} />
              <Route element={<PrivateRoutes />}>
                  <Route path="/dashboard" element={<OverviewPage />} />
                  <Route path="/dashboard/new-event" element={<NewEvent />} />
                  <Route path="/dashboard/new-venue" element={<NewVenue />} />
              </Route>
          </Routes>
      </div>
    );
};

export default Index;
