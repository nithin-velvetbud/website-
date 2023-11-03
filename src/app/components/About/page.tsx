import React from 'react';

const About = () => {
  return (
    <main className="bg-black text-white pt-20">
      <div className="container mx-auto space-y-16">
        <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900">
          <span
              className="text-5xl font-bold my-8 hover:text-white"
            >
              About Us
            </span>
            
            <h1 className="text-5xl font-extrabold text-green-600 hover:text-white transition duration-200 ease-in-out cursor-pointer">Nalkato</h1>
            <p className="my-8 text-gray-200 hover:text-blue-500 transition duration-300 ease-in-out">
              <span className="font-medium">Flexible and Adaptable Solutions Provider</span>
            </p>
            <p className="my-8 text-gray-200 hover:text-green-600 transition duration-300 ease-in-out">
              <span className="font-medium">Trustworthy Ally for Success</span>
            </p>
            <p className="my-8 text-gray-200 hover:text-blue-500 transition duration-300 ease-in-out">
              <span className="font-medium">Your Success Partner</span>
            </p>
            <p className="my-8 text-gray-200 hover:text-green-600 transition duration-300 ease-in-out">
              <span className="font-medium">Success Partner</span>
            </p>
            <p className="my-8 text-gray-200 hover:text-blue-500 transition duration-300 ease-in-out">
              <span className="font-medium">Success</span>
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg"
            alt=""
            className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </section>
      </div>
    </main>
  );
};

export default About;