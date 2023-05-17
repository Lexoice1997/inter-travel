"use client";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function RecentlySwiper() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={3}
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
          <div className="sx:mr-8 mr-0">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="sm:text-2xl text-xl font-semibold sx:mt-4 mt-2">
              Birthplace Music Museum
            </h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="sx:mt-4 mt-2 text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              iusto, architecto nobis ipsum quaerat repellendus asperiores,
              ullam suscipit odit repudiandae cum incidunt numquam
              exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sx:mr-8 mr-0">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="sm:text-2xl text-xl font-semibold sx:mt-4 mt-2">
              Birthplace Music Museum
            </h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="sx:mt-4 mt-2 text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              iusto, architecto nobis ipsum quaerat repellendus asperiores,
              ullam suscipit odit repudiandae cum incidunt numquam
              exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sx:mr-8 mr-0">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="sm:text-2xl text-xl font-semibold sx:mt-4 mt-2">
              Birthplace Music Museum
            </h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="sx:mt-4 mt-2 text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              iusto, architecto nobis ipsum quaerat repellendus asperiores,
              ullam suscipit odit repudiandae cum incidunt numquam
              exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sx:mr-8 mr-0">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="sm:text-2xl text-xl font-semibold sx:mt-4 mt-2">
              Birthplace Music Museum
            </h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="sx:mt-4 mt-2 text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              iusto, architecto nobis ipsum quaerat repellendus asperiores,
              ullam suscipit odit repudiandae cum incidunt numquam
              exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sx:mr-8 mr-0">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="sm:text-2xl text-xl font-semibold sx:mt-4 mt-2">
              Birthplace Music Museum
            </h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="sx:mt-4 mt-2 text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              iusto, architecto nobis ipsum quaerat repellendus asperiores,
              ullam suscipit odit repudiandae cum incidunt numquam
              exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sx:mr-8 mr-0">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="sm:text-2xl text-xl font-semibold sx:mt-4 mt-2">
              Birthplace Music Museum
            </h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="sx:mt-4 mt-2 text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              iusto, architecto nobis ipsum quaerat repellendus asperiores,
              ullam suscipit odit repudiandae cum incidunt numquam
              exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sx:mr-8 mr-0">
            <div className="w-full h-[350px] bg-gray-600 rounded-xl"></div>
            <h3 className="sm:text-2xl text-xl font-semibold sx:mt-4 mt-2">
              Birthplace Music Museum
            </h3>
            <div className="flex items-center mt-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  className="mr-2"
                  key={item}
                  width="25"
                  height="25"
                  fill="#FCCB2A"
                  stroke="#FCCB2A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z"></path>
                </svg>
              ))}
              <p className="font-semibold text-lg">5.0</p>
            </div>
            <p className="sx:mt-4 mt-2 text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              iusto, architecto nobis ipsum quaerat repellendus asperiores,
              ullam suscipit odit repudiandae cum incidunt numquam
              exercitationem eos!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default RecentlySwiper;
