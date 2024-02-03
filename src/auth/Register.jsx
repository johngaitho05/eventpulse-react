import React from 'react';
import image from '../assets/bg.jpg';
import RegistrationForm from './RegisterForm';

const Auth = () => {
    return (
        <div className="h-auto auth py-10 relative min-h-screen">
            <div className="max-w-[90rem] mx-auto bg-white h-[800px] rounded-[20px]  py-5 mt-20  ">
                <div className=" flex justify-around items-center h-full ">
                    <img
                        src={image}
                        alt=""
                        className="rounded-[20px] w-1/2 h-full object-cover object-bottom"
                    />
                    <RegistrationForm />
                </div>
            </div>
        </div>
    );
};

export default Auth;
