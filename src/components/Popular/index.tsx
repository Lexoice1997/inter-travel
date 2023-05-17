import React from "react";
import PopularSwiper from "../PopularSwiper";

function Popular() {
  return (
    <section className="sm:mt-24 mt-16">
      <h2 className="sm:text-5xl text-3xl text-center font-semibold">
        Popular Destination
      </h2>
      <div className="flex sm:justify-between mt-10 sm:mt-16 mt-10 justify-center h-[530px] sm:h-[550px]">
        <PopularSwiper />
      </div>
    </section>
  );
}

export default Popular;
