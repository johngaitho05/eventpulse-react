import { CalendarDays, Mail, MapPin, Phone } from 'lucide-react';
import React, {useEffect, useState} from 'react';
import {
    useGetEventDetailsQuery,
} from "../redux/apis/eventAPI";
import {useParams} from "react-router-dom";

const Event = ({eventId}) => {
    let {data: eventData, isFetching} = useGetEventDetailsQuery(eventId)
    const [event, setEvent] = useState(eventData)

    useEffect(() => {
        setEvent(eventData);
    }, [eventData]);

    return (
      <div>
          <div className="w-full flex flex-col sm:flex-row events-header  pt-20 imaage">
              <div className="w-full sm:w-1/2 text-white gap-8 flex flex-col px-5 sm:px-12 justify-center text-2xl ">
                  <h1 className="text-2xl lg:text-4xl font-medium ">{event?.title}</h1>
                  <span className="flex gap-6">
                        <CalendarDays />
                        <p>{event?.start_date}</p>
                    </span>
                  <span className="flex gap-6">
                        <MapPin />
                        <p>{event?.venue_id?.address}</p>
                    </span>
              </div>
              <div className="w-full sm:w-1/2 flex justify-center  items-center mt-5 sm:mt-0">
                  <button className="w-[200px] font-medium text-white uppercase py-3 px-5 border-0 bg-primary">
                      Register
                  </button>
              </div>
          </div>

          <div className="p-5 w-full mx-10">
              <div className="flex flex-col sm:flex-row justify-between w-full">
                  <div
                    className="w-full sm:w-[70%] mr-5 flex flex-col gap-5">
                      <p className="text-base mt-3 w-full">
                          {event?.description}
                      </p>
                      <h1 className="text-4xl font-medium mt-2">Topics</h1>
                      {event?.tracks.map((track, index) => (
                        <div key={index}
                             className="flex flex-col border-s-8 p-3 border">
                            <p>{track.start_date}</p>
                            <p className="text-primary">{track.title}</p>
                            <p>
                                {track?.user_id?.name}
                                <span
                                  className="text-gray-500"><span className="text-2xl mx-2">.</span> {track.duration} hrs
                                  </span>
                            </p>
                        </div>
                      ))}
                  </div>
                  <div
                    className="w-full sm:w-[30%] mt-5 sm:mt-0 text-sm flex flex-col gap-4 border-s-2 border-primary p-3">
                      <h1 className="uppercase text-gray-600">Organizer</h1>
                      <p className="text-xl">{event?.user_id?.name}</p>
                      <span className="flex gap-4">
                            <Phone size={18} strokeWidth={1}/>
                            <p>{event?.user_id?.phone}</p>
                        </span>
                      <span className="flex gap-4">
                            <Mail size={18} strokeWidth={1} />
                            <p>{event?.user_id?.email}</p>
                        </span>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Event;
