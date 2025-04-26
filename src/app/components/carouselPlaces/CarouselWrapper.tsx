import React, { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../styles/CarouselWrapper.css";

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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
            slidesPerView: 2,
            spaceBetween: 14
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 14
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 18
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 22
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 26
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 28
          }
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
          >
            <div className="mx-auto">{item}</div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default CarouselWrapper;