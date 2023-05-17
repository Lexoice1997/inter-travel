"use client"
import React from "react";

function About() {
  return (
    <section className="sm:mt-24 mt-16">
      <h2 className="sm:text-5xl text-3xl text-center font-semibold">
        About Us
      </h2>
      <p className="sm:text-2xl text-lg text-center font-semibold mt-8 text-gray-500">
        We planned beautiful destination every weekend
      </p>
      <div className="flex justify-between sm:mt-14 mt-8">
        <div className="sm:w-1/3 w-full sm:h-[500px] h-[350px] bg-gray-600 sm:mr-6 mr-0 rounded-xl"></div>
        <div className="sm:w-1/3 h-[500px] bg-gray-600 mr-6 rounded-xl hidden sm:block"></div>
        <div className="sm:w-1/3 h-[500px] bg-gray-600 rounded-xl hidden sm:block"></div>
      </div>
      <p className="text-gray-500 text-center sm:w-1/3 w-full m-auto sm:mt-10 sm:text-lg mt-4 text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero
        vel, ut voluptates in aperiam ducimus est omnis ipsa obcaecati fuga
        quaerat expedita reiciendis nisi magni nulla, consequatur rerum animi?
      </p>
      <div className="flex justify-between sm:w-1/2 m-auto sm:mt-10 mt-6">
        <div>
          <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">
            4.5k+
          </h3>
          <p className="mt-2 text-md">Our Explores</p>
        </div>
        <div>
          <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">
            15k+
          </h3>
          <p className="mt-2 text-md">Destinations</p>
        </div>
        <div>
          <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">
            35k+
          </h3>
          <p className="mt-2 text-md">Year Experience</p>
        </div>
      </div>
    </section>
  );
}

export default About;
