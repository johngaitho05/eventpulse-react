import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { AlignJustify, X, User } from 'lucide-react';
import { links } from '../data/links';
import { Select } from 'antd';
import { FormControl } from '@mui/material';
import MenuItem from 'antd/es/menu/MenuItem';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const user = '';

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`w-full fixed top-0 left-0 z-20 ${
                scrolled ? 'bg-[#050816]' : 'bg-transparent'
            }  ${open ? 'bg-[#050816] lg:bg-transparent' : ' '}`}
        >
            <div className="md:flex items-center justify-between  py-4 md:px-10 px-7 ">
                <div
                    className="font-bold text-2xl cursor-pointer flex items-center gap-1"
                    onClick={() => navigate('/')}
                >
                    <img src={Logo} alt="EventPulse" className="w-[180px]" />
                    {/*<span className="text-white-100 font-bold ">Event Pulse</span>*/}
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
                >
                    {open ? <X color="#fff" /> : <AlignJustify color="#fff" />}
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in text-white ${
                        open ? 'top-12' : 'top-[-490px]'
                    } ${open ? 'bg-[#050816] lg:bg-transparent ' : ' bg-transparent'}`}
                >
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className="md:ml-8 md:my-0 my-7 font-semibold flex capitalize lg:text-white-100 gap-4 lg:pr-20  "
                        >
                            <link.icon />
                            <a
                                href={link.link}
                                className={` hover:text-red-400 duration-500  ${
                                    location.pathname === link.link ? 'text-orange-500' : ''
                                }`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <div className="w-[200px]">
                        {user ? (
                            <div>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="user-menu-label"
                                        id="user-menu"
                                        value={user}
                                        label="Username"
                                    >
                                        <MenuItem value="dashboard">Dashboard</MenuItem>
                                        <MenuItem value="logout">Logout</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        ) : (
                            <div className="flex font-semibold gap-2">
                                <User />
                                <Link to={'/login'}> Login</Link>
                            </div>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;
