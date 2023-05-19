'use client'

import buxara from '@/assets/buxara.jpg'
import samarkand from '@/assets/samarkand.jpg'
import xiva from '@/assets/xiva.jpg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

function PopularSwiper() {
  const t = useTranslations('Popular')

  const onClick = (productId: number) => {
    const orderForm = document.querySelector('#order-form')!
    // scroll to form
    orderForm.scrollIntoView({ behavior: 'smooth' })
  }

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
            <Image
              src={xiva}
              alt="Picture of the author"
              className="h-[300px] w-full bg-gray-600 rounded-xl"
            />
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">
              {t('xiva')}
            </h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">
              {t('uzbekistan')}
            </p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-[#4D6D44]">120.000 sum</p>
              <button
                className="py-1 px-3  text-white rounded-md bg-[#4D6D44] hover:bg-[#66915A] hover:cursor-pointer hover:transition-all transition ease-in-out delay-150"
                onClick={() => onClick(3)}
              >
                {t('trip')}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:mr-6 mr-0">
            <Image
              src={samarkand}
              alt="Picture of the author"
              className="h-[300px] w-full bg-gray-600 rounded-xl"
            />
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">
              {t('samarkand')}
            </h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">
              {t('uzbekistan')}
            </p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-[#4D6D44]">600.000 sum</p>
              <button
                className="py-1 px-3 bg-[#4D6D44] hover:bg-[#66915A] text-white rounded-md hover:cursor-pointer hover:transition-all transition ease-in-out delay-150"
                onClick={() => onClick(4)}
              >
                {t('trip')}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:mr-6 mr-0">
            <Image
              src={buxara}
              alt="Picture of the author"
              className="h-[300px] w-full bg-gray-600 rounded-xl"
            />
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">
              {t('buxara')}
            </h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">
              {t('uzbekistan')}
            </p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-[#4D6D44]">450.000 sum</p>
              <button
                className="py-1 px-3 bg-[#4D6D44] hover:bg-[#66915A] text-white rounded-md hover:cursor-pointer hover:transition-all transition ease-in-out delay-150"
                onClick={() => onClick(5)}
              >
                {t('trip')}
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="sm:mr-6 mr-0">
            <div className="h-[300px] w-full bg-gray-600 rounded-xl"></div>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5">Alhambra</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-5">Spain</p>
            <div className="flex justify-between mt-5">
              <p className="sm:text-xl text-lg text-[#4D6D44]">$350.00</p>
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
              <p className="sm:text-xl text-lg text-[#4D6D44]">$350.00</p>
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
              <p className="sm:text-xl text-lg text-[#4D6D44]">$350.00</p>
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
              <p className="sm:text-xl text-lg text-[#4D6D44]">$350.00</p>
              <button className="py-1 px-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
                Start trip
              </button>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default PopularSwiper
