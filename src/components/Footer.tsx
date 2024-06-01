import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-white">
                        &copy; 2024 Mrinaal Arora. All rights reserved.
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Github</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;