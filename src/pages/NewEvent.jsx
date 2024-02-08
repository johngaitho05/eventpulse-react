import React from 'react';
import EventCreationForm from '../components/EventForm';
import DashboardLayout from './DashboardLayout'
const NewEvent = () => {
    return (
        <DashboardLayout>
            <h2 className="text-3xl px-4 py-4">Create Event</h2>
            <EventCreationForm />
        </DashboardLayout>
    );
};

export default NewEvent;
