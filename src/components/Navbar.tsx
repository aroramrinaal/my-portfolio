import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-frenchGray font-semibold text-xl">Mrinaal Arora</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/">
                                    <a className="text-frenchGray px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                </Link>
                                <Link href="/about">
                                    <a className="text-frenchGray px-3 py-2 rounded-md text-sm font-medium">About</a>
                                </Link>
                                <Link href="/projects">
                                    <a className="text-frenchGray px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                </Link>
                                <Link href="/blog">
                                    <a className="text-frenchGray px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
