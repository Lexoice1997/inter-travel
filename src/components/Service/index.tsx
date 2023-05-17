"use client";
import React from "react";

function Service() {
  return (
    <section className="flex justify-between sm:flex-row flex-col-reverse  sm:mt-24 mt-16 items-center">
      <div className="sm:w-2/5 w-full sm:mr-24 mr-0 mt-8 sm:mt-0">
        <div className="flex justify-between sm:flex-row flex-col mb-4">
          <div className="sm:w-1/2 w-full h-[250px] bg-gray-600 mr-4 rounded-xl"></div>
          <div className="sm:w-1/2 w-full h-[250px] bg-gray-600 rounded-xl sm:mt-0 mt-6"></div>
        </div>
        <div className="sm:flex hidden justify-between">
          <div className="w-1/2 h-[250px] bg-gray-600 mr-4 rounded-xl"></div>
          <div className="w-1/2 h-[250px] bg-gray-600 rounded-xl"></div>
        </div>
      </div>
      <div className="sm:w-3/5 w-full">
        <h3 className="sm:text-5xl text-3xl font-semibold">
          We always try to give you are best service
        </h3>
        <p className="font-md text-gray-500 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum harum
          autem veritatis iste quisquam molestiae! Magnam dolore ipsam ut,
          adipisci magni aliquid eaque illum odit ab assumenda quis eligendi
          aliquam?
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
      </div>
    </section>
  );
}

export default Service;
