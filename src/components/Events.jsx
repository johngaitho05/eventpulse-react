import React from 'react';
import Event from './Event';
import events from '../Data/events';
import { Search } from 'lucide-react';
import clap from '../assets/people.jpg';

const Events = () => {
    return (
        <div className="w-full">
            <div className="relative flex justify-center items-center text-center h-[50vh] w-[full] ">
                <img src={clap} alt="" className="w-full h-full object-cover" />
                <div className="absolute w-full h-full bg-[rgba(0,0,0,0.6)] flex  items-center justify-center  flex-col">
                    <h1 className="text-4xl font-medium text-primary">All Events</h1>
                    <div className="relative mt-4">
                        <input
                            type="text"
                            placeholder="Search for events"
                            className="p-2 w-[90vw]  md:w-[40vw] rounded-e-3xl"
                        />
                        <button className="bg-[#e75022] rounded-3xl py-2 px-6 absolute right-0 top-0 flex text-white font-bold">
                            <Search /> Search
                        </button>
                    </div>
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
