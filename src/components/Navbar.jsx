import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { AlignJustify, X } from 'lucide-react';
import { links } from '../Data/links';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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
            className={` w-full fixed top-0 left-0 z-20 ${
                scrolled ? 'bg-[#050816]' : 'bg-transparent]'
            }  ${open ? 'bg-[#050816] lg:bg-transparent' : ' lg:bg-transparent'}`}
        >
            <div className="md:flex items-center justify-between  py-4 md:px-10 px-7 ">
                <div
                    className="font-bold text-2xl cursor-pointer flex items-center gap-1"
                    onClick={() => navigate('/')}
                >
                    <img src={Logo} alt="" className="w-[50px] h-[50px]" />
                    <span className="text-white-100 font-bold">𝔈𝔳𝔢𝔫𝔱 𝔭𝔲𝔩𝔰𝔢</span>
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
                    {/* <form action="" className="mt-4 lg:mt-0 relative lg:ml-4">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md py-2 px-10 focus:outline-none focus:border-blue-500"
                            placeholder="Search"
                        />
                        <Search className="absolute top-3 left-1 text-gray-500" />
                    </form> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;
