import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../assets/logo-sm.png';

const EventCreationForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        bannerUrl: '',
        venueId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDateChange = (date, dateType) => {
        setFormData((prevState) => ({
            ...prevState,
            [dateType]: date,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        console.log(formData);
    };

    return (
        <div className=" p-4 auth h-auto lg:h-screen pt-[7rem]">
            <div className="bg-white py-10 max-w-7xl mx-auto px-10 rounded-[20px]">
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <img src={logo} alt="" className="h-16 object-cover" />
                    </div>
                    <h2 className="font-bold text-2xl">Event Pulse</h2>
                    <p className="my-1 text-sm text-gray-700">
                        You are a few clicks away from creating a new event
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Event Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            required
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            rows="4"
                            required
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="startDate"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Start Date
                            </label>
                            <DatePicker
                                selected={formData.startDate}
                                onChange={(date) => handleDateChange(date, 'startDate')}
                                className="mt-1 block w-full border border-gray-300 p-2 shadow-sm text-gray-700 sm:text-sm rounded-md"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="endDate"
                                className="block text-sm font-medium text-gray-700"
                            >
                                End Date
                            </label>
                            <DatePicker
                                selected={formData.endDate}
                                onChange={(date) => handleDateChange(date, 'endDate')}
                                className="mt-1 block w-full border border-gray-300 p-2 shadow-sm text-gray-700 sm:text-sm rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="bannerUrl"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Banner URL
                        </label>
                        <input
                            type="url"
                            name="bannerUrl"
                            id="bannerUrl"
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                            value={formData.bannerUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="venueId"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Venue ID
                        </label>
                        <input
                            type="text"
                            name="venueId"
                            id="venueId"
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                            value={formData.venueId}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full lg:w-1/3  items-center flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                            Create Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventCreationForm;
