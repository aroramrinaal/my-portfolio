import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="border-gray-200 bg-linen dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/mylogo.svg" className="h-8" alt="MyLogo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mrinaal Arora</span>
                    </a>
                </Link>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <Link href="/projects">
                                <a className="block py-2 px-3 md:p-0 text-lg text-amethyst rounded md:bg-transparent dark:text-amethyst">Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className="block py-2 px-3 md:p-0 text-lg text-amethyst rounded md:hover:bg-transparent md:border-0 dark:text-amethyst">Blog</a>
                            </Link>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1yjz-xb2dyYpmFSMmRzpuR92McE6jnYcJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block py-2 px-3 md:p-0 text-lg text-amethyst rounded md:hover:bg-transparent md:border-0 dark:text-amethyst">Resume</a>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className="block py-2 px-3 md:p-0 text-lg text-amethyst rounded md:hover:bg-transparent md:border-0 dark:text-amethyst">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
