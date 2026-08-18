"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./Carousel.css";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="w-full h-100 sm:h-125 md:h-screen relative">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <Image
            src={"/slider.png"}
            alt="slider-image"
            width={1920}
            height={1080}
            loading="eager"
            priority
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/slider.png"}
            alt="slider-image"
            width={1920}
            height={1080}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/slider.png"}
            alt="slider-image"
            width={1920}
            height={1080}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
