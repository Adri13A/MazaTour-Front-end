'use client'

import React, { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../../styles/CarouselWrapper.css";

interface CarouselWrapperProps {
  children: ReactNode;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
}

const CarouselWrapper = ({ 
  children, 
 
}: CarouselWrapperProps) => {
  const items = React.Children.toArray(children);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
        centeredSlides={false}
     
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
       
        className="select-none"
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 24
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 12
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 6
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 6
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 6
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 6
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 6
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 6
          },
          1400: {
            slidesPerView: 3.5,
            spaceBetween: 6
          }
        }}
      >
        {items.map((item, index) => (
        <SwiperSlide
          key={index}
          className="!overflow-visible"
        >
          <div className="m-2 md:pt-5 md:pb-5 md:pl-2 md:pr-2">
            {item}
          </div>
        </SwiperSlide>

        ))}
      </Swiper>

    </div>
  );
};

export default CarouselWrapper;