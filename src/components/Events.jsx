import React from 'react';
import Event from './Event';
import events from '../Data/events';

import { Search } from 'lucide-react';

const Events = () => {
    return (
        <div className="w-full">
            <div className="banner flex justify-center items-center text-center">
                <div>
                    <h1 className="text-4xl font-medium text-[#751b1b]">All Events</h1>
                    <br />
                    <span className="relative">
                        <input
                            type="text"
                            placeholder="Search for event by title or location"
                            className="p-2 w-[60vw] md:w-[40vw] rounded-e-3xl"
                        />
                        <button className="bg-[#e75022] rounded-3xl py-2 px-6 absolute right-0">
                            <Search color="#fff" />
                        </button>
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 py-5 sm:grid-cols-2 md:grid-cols-4 mx-auto w-fit">
                {events.map((event) => (
                    <Event event={event} />
                ))}
            </div>
        </div>
    );
};

export default Events;
