import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="border-gray-200 bg-linen">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/mylogo.svg" alt="MyLogo" width={32} height={32} />
                    <span className="self-center text-xl md:text-3xl font-semibold whitespace-nowrap">Mrinaal Arora</span>
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-solid-bg"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-black md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {['Home', 'About', 'Projects', 'Blog', 'Resume', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === 'Resume' 
                                        ? "https://drive.google.com/file/d/1tsqz2RhisXburDd8JujT0gexq_i2p0fl/view?usp=sharing"
                                        : item === 'Home' ? "/" : `/${item.toLowerCase()}`}
                                    target={item === 'Resume' ? "_blank" : ""}
                                    rel={item === 'Resume' ? "noopener noreferrer" : ""}
                                    className="block py-2 px-3 md:p-0 text-base md:text-lg text-white md:text-darkPurple rounded md:hover:bg-transparent md:border-0 md:hover:underline md:hover:underline-offset-4"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
