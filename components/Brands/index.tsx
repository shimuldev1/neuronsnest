"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-24 2xl:px-0 ">
          <Swiper
            spaceBetween={100}
            slidesPerView={5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              425: {
                slidesPerView: 3,
              },

              625: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
            }}
          >
            {brandData.map((brand, key) => (
              <SwiperSlide key={key}>
                <SingleBrand brand={brand}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
