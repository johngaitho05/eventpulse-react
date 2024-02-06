import { CalendarDays, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

// Data object for event details and topics
const eventData = {
    name: 'Tech Innovators Summit',
    date: 'April 15, 2024 8:00 AM - 6:00PM (EAT)',
    location: 'Innovation Hub, 123 Tech Avenue, Cityville',
    organizer: {
        name: 'Gritnec Solutions',
        phone: '+254 712 345 678',
        email: 'events@gsk.com',
    },
    topics: [
        {
            time: '8:00 AM',
            title: "Disruptive Dialogues: Unveiling Tomorrow's Tech",
            speaker: 'Derrick Johnson',
            duration: '1 hr',
        },

        {
            time: '9:00 AM',
            title: 'Innovative Minds: Shaping the Future of Tech',
            speaker: 'Alexa Rodriguez',
            duration: '1 hr',
        },
    ],
};

const EventDetails = (eventId) => {
    return (
        <div>
            <div className="w-full flex flex-col sm:flex-row events-header  pt-20">
                <div className="w-full sm:w-1/2 text-white gap-8 flex flex-col px-5 sm:px-12 justify-center text-2xl">
                    <h1 className="text-2xl lg:text-4xl font-medium ">{eventData.name}</h1>
                    <span className="flex gap-6">
                        <CalendarDays />
                        <p>{eventData.date}</p>
                    </span>
                    <span className="flex gap-6">
                        <MapPin />
                        <p>{eventData.location}</p>
                    </span>
                </div>
                <div className="w-full sm:w-1/2 flex justify-center  items-center mt-5 sm:mt-0">
                    <button className="w-[200px] font-medium text-white uppercase py-3 px-5 border-0 bg-primary">
                        Register
                    </button>
                </div>
            </div>

            <div className="p-5 w-full">
                <div className="mb-5">
                    <h1 className="text-4xl font-medium">Topics</h1>
                    <p className="text-base mt-3 w-full lg:w-1/2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam
                        dignissimos sint in, rem tenetur aperiam tempora necessitatibus ipsa ipsum
                        quasi eum voluptates veritatis distinctio quae nesciunt rerum fugit
                        excepturi autem recusandae nisi voluptatibus cupiditate! Porro atque quaerat
                        aut minus?
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between w-full">
                    <div className="w-full sm:w-[70%] mr-5 flex flex-col gap-5">
                        {eventData.topics.map((topic, index) => (
                            <div key={index} className="flex flex-col border-s-8 p-3 border">
                                <p>{topic.time}</p>
                                <p className="text-primary">{topic.title}</p>
                                <p>
                                    {topic.speaker}{' '}
                                    <span className="text-gray-500">{`. ${topic.duration}`}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full sm:w-[30%] mt-5 sm:mt-0 text-sm flex flex-col gap-4 border-s-2 border-primary p-3">
                        <h1 className="uppercase text-gray-600">Organizer</h1>
                        <p className="text-xl">{eventData.organizer.name}</p>
                        <span className="flex gap-4">
                            <Phone size={18} strokeWidth={1} />
                            <p>{eventData.organizer.phone}</p>
                        </span>
                        <span className="flex gap-4">
                            <Mail size={18} strokeWidth={1} />
                            <p>{eventData.organizer.email}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
