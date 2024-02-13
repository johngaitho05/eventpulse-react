import { GithubOutlined } from '@ant-design/icons';
import { Twitter } from '@mui/icons-material';
import { Linkedin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const developers = [
    {
        name: 'John Gaitho',
        role: 'FullStack Developer',
        avatar: 'https://via.placeholder.com/150',
        github: 'https://github.com/johngaitho05',
        linkedIn: 'https://www.linkedin.com/in/jgaitho',
        twitter: 'https://twitter.com/jg_programmar',
    },
];

const ProjectInspiration = () => {
    return (
        <div className="max-w-[90rem] mx-auto p-4 bg-gray-200 my-10 rounded-[8px] ">
            <div className="flex flex-wrap">
                <section className="mb-10 w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">What Inspired Our Project?</h2>
                    <p className="text-gray-700">
                        The spark for our project ignited from a passion to connect people through
                        memorable events. Recognizing the challenges venues and organizers faced in
                        showcasing and discovering events on a global scale, we set out to create a
                        unified platform. Our goal was to simplify the process of finding and
                        booking venues for both local and international events, making it accessible
                        and seamless for everyone involved. By bridging the gap between venues and
                        event organizers, we aspire to foster a vibrant community where every event,
                        regardless of size or location, can find its perfect space.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold my-4">Project Code</h2>
                        <Link
                            to="https://github.com/project-repo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-white hover:text-blue-600 bg-primary p-3"
                        >
                            View the Code on GitHub
                        </Link>
                    </div>
                </section>

                <section className="mb-10 w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold mb-4 text-center">Developer Info</h2>
                    <div className="px-[10px] lg:px-10">
                        {developers.map((dev, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full lg:min-w-[300px]"
                            >
                                <img
                                    src={dev.avatar}
                                    alt={dev.name}
                                    className="w-24 h-24 rounded-full mb-4"
                                />
                                <h3 className="text-lg font-semibold">{dev.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{dev.role}</p>
                                <div className="flex space-x-3">
                                    <Link
                                        to={dev.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:bg-gray-200 w-12 flex items-center justify-center hover:text-blue-600 bg-[#001e2b] p-[12px] rounded-full  "
                                    >
                                        <GithubOutlined />
                                    </Link>
                                    <Link
                                        to={dev.linkedIn}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:bg-gray-200 w-12 flex items-center justify-center hover:text-blue-600 bg-[#001e2b] p-[12px] rounded-full "
                                    >
                                        <Linkedin />
                                    </Link>
                                    <Link
                                        to={dev.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:bg-gray-200 w-12 flex items-center justify-center hover:text-blue-600 bg-[#001e2b] p-[12px] rounded-full "
                                    >
                                        <Twitter />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectInspiration;
