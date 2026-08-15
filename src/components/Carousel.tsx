"use client";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./Carousel.css";

// import "./styles.css";

// import required modules
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={"/slider.png"}
            alt="slider-image"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/slider.png"}
            alt="slider-image"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/slider.png"}
            alt="slider-image"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
