import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects: React.FC = () => {
    return (
        <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <div className="mt-4">
            <div className="flex flex-col space-y-4">
                <div className="bg-white shadow-lg rounded-md p-4">
                <h2 className="text-xl font-bold text-gray-900">Project 1</h2>
                <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultricies, justo vel ultricies lacinia, ante metus tincidunt
                    nunc, eu iaculis nunc dolor sit amet justo.
                </p>
                </div>
                <div className="bg-white shadow-lg rounded-md p-4">
                <h2 className="text-xl font-bold text-gray-900">Project 2</h2>
                <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultricies, justo vel ultricies lacinia, ante metus tincidunt
                    nunc, eu iaculis nunc dolor sit amet justo.
                </p>
                </div>
                <div className="bg-white shadow-lg rounded-md p-4">
                <h2 className="text-xl font-bold text-gray-900">Project 3</h2>
                <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultricies, justo vel ultricies lacinia, ante metus tincidunt
                    nunc, eu iaculis nunc dolor sit amet justo.
                </p>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    );
    }

export default Projects;