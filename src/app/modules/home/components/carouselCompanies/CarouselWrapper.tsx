import React, { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselWrapperProps {
  children: ReactNode;
}

const CarouselWrapper = ({ children }: CarouselWrapperProps) => {
  const items = React.Children.toArray(children);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="relative w-full pb-5 md:pb-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        className="select-none"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="pl-5 pr-5 pt-5 md:px-20">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselWrapper;