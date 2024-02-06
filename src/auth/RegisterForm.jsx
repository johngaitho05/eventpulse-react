import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { RiGoogleFill } from 'react-icons/ri';
import logo from '../assets/logo.png';
import google from '../assets/google.png';
import { RegisteringUser } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'lucide-react';

const RegistrationForm = () => {
    const { isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        country: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(RegisteringUser(formData));
        console.log('Form Data:', formData);
    };

    return (
        <div className=" h-auto lg:h-full px-4 w-full lg:w-[45%] flex flex-col items-center overflow-y-auto no-scrollbar ">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <img src={logo} alt="" className="h-24 object-cover" />
                </div>
                <h2 className="font-bold text-2xl">Welcome to Event Pulse</h2>
                <p className="my-1 text-sm text-gray-700">
                    Enter the details below to create an account
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl space-y-6 bg-white p-8 rounded-lg"
            >
                {isLoading && <Loader />}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                        required
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                        required
                        placeholder="Enter your phone no."
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                            required
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={handlePasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </button>
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                        required
                        placeholder="confirm your password"
                    />
                </div>

                <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                    </label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black-100 hover:bg-gray-800 focus:outline-none focus:border-gray-800 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    Register
                </button>

                <div>
                    <button
                        type="button"
                        className="w-full inline-flex items-center justify-center mb-5 py-4 px-4 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <img src={google} alt="" className="h-6 mr-2" />
                        Sign in with Google
                    </button>
                    <Link
                        to="/login"
                        className="font-medium text-indigo-600 hover:text-indigo-500 text center mt-2"
                    >
                        Already have an account? Login here
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
