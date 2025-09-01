'use client';

import React, { ReactNode } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselWrapperProps {
  children: ReactNode;
  prevRef?: React.RefObject<HTMLDivElement>;
  nextRef?: React.RefObject<HTMLDivElement>;
}

const CarouselWrapper = ({ children, prevRef, nextRef }: CarouselWrapperProps) => {
  const items = React.Children.toArray(children);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={false}
        // pagination={{
        //   clickable: true,
        //   renderBullet: (index, className) =>
        //     `<span class="${className} custom-bullet"></span>`,
        // }}
        navigation={false} // desactivamos la navegación automática
        onSwiper={(swiper: SwiperClass) => {
            if (prevRef?.current && nextRef?.current) {
              const nav = swiper.params.navigation as {
                prevEl?: HTMLElement | null;
                nextEl?: HTMLElement | null;
              };

              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;

              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
        className="select-none"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 6 },
          400: { slidesPerView: 3, spaceBetween: 6 },
          576: { slidesPerView: 3, spaceBetween: 6 },
          640: { slidesPerView: 3, spaceBetween: 6 },
          768: { slidesPerView: 2, spaceBetween: 6 },
          900: { slidesPerView: 3, spaceBetween: 6 },
          1024: { slidesPerView: 3, spaceBetween: 6 },
          1200: { slidesPerView: 4, spaceBetween: 6 },
          1400: { slidesPerView: 4, spaceBetween: 6 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="!overflow-visible">
            <div className="p-2">{item}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselWrapper;
