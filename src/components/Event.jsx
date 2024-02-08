import React from 'react';
import { CalendarDays, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {CloudinaryImage, formatDate} from '../helpers/utils';

const Event = ({ event }) => {
    const navigate = useNavigate();
    return (
        <div
            className="max-w-[300px] text-sm border flex flex-col m-5 text-[#2f204e] cursor-pointer"
            onClick={() => navigate(`/events/${event.id}`)}
        >
            <img src={CloudinaryImage(event.banner_url)} alt="" className="w-full h-[200px] object-cover " />
            <div className="p-3 flex gap-5 flex-col">
                <h2 className="font-medium text-xl line-clamp-2">{event.title}</h2>
                <p className="line-clamp-4">{event.description}</p>
                <span className="flex gap-3">
                    <CalendarDays size={18} />
                    <p>{formatDate(event.start_date)}</p>
                </span>
                <span className="flex gap-3">
                    <MapPin strokeWidth={3} />
                    <p>{event.venue_id.address}</p>
                </span>
            </div>
        </div>
    );
};

export default Event;
