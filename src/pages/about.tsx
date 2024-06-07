import React from 'react';
import Navbar from '@/components/Navbar';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linen">
      <Navbar />
      <main className="flex-grow p-8">
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <img src="/images/profile.jpeg" alt="Profile Picture" className="w-40 h-40 rounded-full mx-auto" />
            <h1 className="text-4xl font-bold mt-4">Hi, I'm Mrinaal Arora</h1>
            <p className="text-lg text-gray-600 mt-2">@mrinaal_arora</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Short Bio</h2>
            <p className="mt-2 text-gray-700">
              I'm a product maker (... and full stack developer) currently based in Arizona, USA. I'm passionate about building products that help people and make a difference in the world. I'm also a big fan of open source software - which is why almost everything I build is open source! I also love educating others about technology and programming, which is why I'm a content creator and write blogs in my free time. I mainly write code in the T3 Stack.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Career</h2>
            <p className="mt-2 text-gray-700">
              I sold my first venture, Epikhost, at an age of 16. And then went on to build and fail a lot of times. I also worked as a freelancer, creating and selling discord bots and landing pages. Then, I went on to work as an app developer for Commnet, a startup based in Mumbai, India.
              <br /><br />
              My second exit was Tweets.beauty, a tool to beautify tweets and other web content. I sold it to Hypefury in 2023, and I got an opportunity to work with them as a full stack developer.
              <br /><br />
              I've won several hackathons as well, like Calhacks, by UC Berkeley, which was the biggest college hackathon of the time, and Sunhacks, by ASU.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <div className="mt-4 space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  {/* Icon for Hyperfury */}
                  <img src="/images/hyperfury-icon.png" alt="Hyperfury Icon" className="w-8 h-8" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Feature head and Full-Stack developer</h3>
                  <p className="text-gray-500">Hyperfury</p>
                  <p className="text-gray-500">Mar. 2023 - Aug. 2023</p>
                  <p className="mt-2 text-gray-700">
                    As a Project Lead, my responsibility was to oversee and maintain all the codebase of one of Hypefury's core offerings. Typescript, Rust, Python were used in the infrastructure. We utilized NextJS with the “T-3 stack” – ensuring developer productivity as well as a bug-free typesafe codebase.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  {/* Icon for Commnete */}
                  <img src="/images/commnete-icon.png" alt="Commnete Icon" className="w-8 h-8" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">App Developer and Project Manager</h3>
                  <p className="text-gray-500">Commnete</p>
                  <p className="text-gray-500">Aug. 2022 - Dec. 2022</p>
                  <p className="mt-2 text-gray-700">
                    This was my first job at a startup. Commnete is a management, security and accounting solution for housing societies. I built their security app for guards, using React native and Expo. The security guards have to enter the visitor's information in a smooth simple yet easy to use form, along with other features such as emergency and parcel delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  {/* Icon for Epikhost */}
                  <img src="/images/epikhost-icon.png" alt="Epikhost Icon" className="w-8 h-8" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Co-Founder</h3>
                  <p className="text-gray-500">Epikhost</p>
                  <p className="text-gray-500">Oct. 2021 - Apr. 2022</p>
                  <p className="mt-2 text-gray-700">
                    I was the Co-Owner of Epikhost, a hosting company. At our peak, we had more than 5000 members in our active discord community and more than 3000 users. I managed the community, managed finances and some of the technologies that enabled us to grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Let's Connect</h2>
            <p className="mt-2 text-gray-700">
              I'm excited to connect with others via <a href="mailto:hi@dhavrya.dev" className="text-blue-500 hover:underline">email (hi@dhavrya.dev)</a> and <a href="https://twitter.com/dhrwtf" className="text-blue-500 hover:underline">Twitter</a> to chat about projects and ideas. Currently, I'm not taking on freelance projects, but I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it's a good fit.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
