import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";

const EventDetails = () => {
  return (
    <div>
      <div className="w-full flex events-header">
        <div className="w-full text-white gap-8 flex flex-col px-5 sm:px-12 justify-center text-2xl">
          <h1 className="text-4xl font-medium ">Tech Innovators Summit</h1>
          <span className="flex gap-6">
            <CalendarDays />
            <p>April 15, 2024 8:00 AM - 6:00PM (EAT)</p>
          </span>
          <span className="flex gap-6">
            <MapPin />
            <p>Innovation Hub, 123 Tech Avenue, Cityville</p>
          </span>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="w-[200px] font-medium text-white uppercase py-3 px-5  border-0 bg-primary">
            Register
          </button>
        </div>
      </div>

      <div className="p-5 w-full">
        <h1 className="text-4xl font-medium mb-5">Topics</h1>
        <div className=" flex justify-between  w-full">
          <div className="w-[70%] mr-5 flex flex-col gap-5"> 
            <span className="flex flex-col border-s-8 p-3 border ">
              <p>8:00 AM</p>
              <p className="text-primary">
                Disruptive Dialogues: Unveiling Tomorrow's Tech Innovators
                Summit
              </p>
              <p>
                Derrick Johnson <span className="text-gray-500">. 1 hr</span>
              </p>
            </span>
            <span className="flex flex-col border-s-8 p-3 border">
              <p>8:00 AM</p>
              <p className="text-primary">
                Disruptive Dialogues: Unveiling Tomorrow's Tech Innovators
                Summit
              </p>
              <p>
                Derrick Johnson <span className="text-gray-500 ">. 1 hr</span>
              </p>
            </span>
          </div>
          <div className="w-[30%] text-sm flex flex-col gap-4 border-s-2 border-primary p-3 ">
            <h1 className="uppercase text-gray-600">Organizer</h1>
            <p className="text-xl">Gritnec Solutions</p>
            <span className="flex gap-4">
              <Phone size={18} strokeWidth={1} />
              <p>+254 712 345 678</p>
            </span>
            <span className="flex gap-4 ">
              <Mail size={18} strokeWidth={1} />
              <p>events@gsk.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
