"use client";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function PopularSwiper() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={4}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sm:mr-6 mr-0">
            <div className="h-[300px] w-full bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">Alhambra</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">Spain</p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-indigo-600">$350.00</p>
              <button className="py-1 px-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Start trip
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:mr-6 mr-0">
            <div className="h-[300px] w-full bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">Alhambra</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">Spain</p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-indigo-600">$350.00</p>
              <button className="py-1 px-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Start trip
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:mr-6 mr-0">
            <div className="h-[300px] w-full bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">Alhambra</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">Spain</p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-indigo-600">$350.00</p>
              <button className="py-1 px-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Start trip
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:mr-6 mr-0">
            <div className="h-[300px] w-full bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">Alhambra</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">Spain</p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-indigo-600">$350.00</p>
              <button className="py-1 px-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Start trip
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:mr-6 mr-0">
            <div className="h-[300px] w-full bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">Alhambra</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">Spain</p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-indigo-600">$350.00</p>
              <button className="py-1 px-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Start trip
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:mr-6 mr-0">
            <div className="h-[300px] w-full bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">Alhambra</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">Spain</p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-indigo-600">$350.00</p>
              <button className="py-1 px-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Start trip
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:mr-6 mr-0">
            <div className="h-[300px] w-full bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">Alhambra</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">Spain</p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-indigo-600">$350.00</p>
              <button className="py-1 px-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Start trip
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default PopularSwiper;
