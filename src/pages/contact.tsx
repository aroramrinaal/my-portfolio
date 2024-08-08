import React from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Head>
                <title>Contact | Mrinaal Arora</title>
                <meta name="description" content="Get in touch with Mrinaal Arora for collaboration, queries, and more." />
                <meta name="keywords" content="Mrinaal Arora, Contact, Get in Touch, Collaboration, Queries" />
                <meta name="author" content="Mrinaal Arora" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://aroramrinaal.vercel.app/contact" />
                <meta property="og:title" content="Contact | Mrinaal Arora" />
                <meta property="og:description" content="Get in touch with Mrinaal Arora for collaboration, queries, and more." />
                <meta property="og:image" content="https://aroramrinaal.vercel.app/images/contact-page-preview.jpg" />
                <meta property="og:url" content="https://aroramrinaal.vercel.app/contact" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact | Mrinaal Arora" />
                <meta name="twitter:description" content="Get in touch with Mrinaal Arora for collaboration, queries, and more." />
                <meta name="twitter:image" content="https://aroramrinaal.vercel.app/images/contact-page-preview.jpg" />
            </Head>

            <main className="flex-grow bg-linen">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-amethyst ">Contact Me</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">Have a project in mind or just want to say hi? Drop me a message! Have any opportunities you would like to discuss? I&apos;d love to hear from you!</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="John Doe" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <div className="flex justify-center w-full">
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}