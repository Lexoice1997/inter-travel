import React from "react";

function Beat() {
  return (
    <section className="sm:mt-24 mt-10 flex justify-between sm:flex-row flex-col">
      <div className="sm:w-1/2 w-full sm:mt-10 mt-0">
        <h2 className="sm:text-7xl text-5xl font-semibold">
          Let is enjoy the world is beaty with 50% off
        </h2>
        <p className="sm:mt-8 mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem optio porro ut? Impedit, amet ad!
        </p>
      </div>
      <div className="flex justify-center">
        <h1 className="sm:text-[300px] text-[120px] font-bold">50%</h1>
      </div>
    </section>
  );
}

export default Beat;
