import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import logo from '../assets/logo.png';
import google from '../assets/google.png';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Form Data:', formData);
        // Implement your login logic here
    };

    return (
        <div className=" h-full px-4w-full lg:w-[45%] flex flex-col items-center ">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <img src={logo} alt="" className="h-24 object-cover" />
                </div>
                <h2 className="font-bold text-2xl">Welcome Back</h2>
                <p className="my-1 text-sm text-gray-700">
                    Enter your email and password to access your account
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl space-y-6 bg-white p-8 rounded-lg"
            >
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                        />
                        <button
                            type="button"
                            onClick={handlePasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                        >
                            {showPassword ? (
                                <IoEyeOutline size="20" />
                            ) : (
                                <IoEyeOffOutline size="20" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black-100 hover:bg-gray-800 focus:outline-none focus:border-gray-800 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        Login
                    </button>
                </div>

                <div>
                    <button
                        type="button"
                        className="w-full inline-flex items-center justify-center mb-5 py-4 px-4 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <img src={google} alt="" className="h-6 mr-2" />
                        Sign in with Google
                    </button>
                    <Link
                        to="/register"
                        className="font-medium text-indigo-600 hover:text-indigo-500 text center mt-2"
                    >
                        Don't have an account? Register here
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
