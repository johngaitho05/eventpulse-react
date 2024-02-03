import React from 'react';
import { CalendarDays, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Event = ({ event }) => {
    const navigate = useNavigate();
    const { title, description, date, location, image } = event;
    return (
        <div
            className="max-w-[300px] text-sm border flex flex-col m-5 text-[#2f204e] "
            onClick={() => navigate('/details/1')}
        >
            <img src={image} alt="" className="w-full h-[200px] object-cover" />
            <div className="p-3 flex gap-5 flex-col">
                <h2 className="font-medium text-xl">{title}</h2>
                <p>{description}</p>
                <span className="flex gap-3">
                    <CalendarDays size={18} />
                    <p>{date}</p>
                </span>
                <span className="flex gap-3">
                    <MapPin strokeWidth={3} />
                    <p>{location}</p>
                </span>
            </div>
        </div>
    );
};

export default Event;
