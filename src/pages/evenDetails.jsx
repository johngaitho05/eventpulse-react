import React from 'react';
import Event from '../components/EventDetails';
import {useParams} from "react-router-dom";

const EventDetails = () => {
  const eventId = useParams().id
    return (
        <div>
            <Event eventId={eventId}/>
        </div>
    );
};

export default EventDetails;
