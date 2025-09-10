"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarouselesProps {
  images: string[];
  className?: string;
}

const Carouseles = ({ images, className }: CarouselesProps) => {
  return (
    <div className={`relative w-full h-full ${className ?? ""}`}>
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="!h-full"                // Swiper must fill the parent height
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            className="!h-full flex items-center justify-center bg-white"
          >
            {/* The trick: don't force w/h to full; use max-* with object-contain */}
            <img
              src={src}
              alt={`carousel-img-${i}`}
              className="block max-w-full max-h-full w-auto h-auto object-contain object-center"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carouseles;
