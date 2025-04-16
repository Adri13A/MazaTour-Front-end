import React, { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselWrapperProps {
  children: ReactNode;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
}

const CarouselWrapper = ({ 
  children, 
  slidesPerView = 5, 
  spaceBetween = 30 
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
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
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
            spaceBetween: 12
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 14
          },
          576: {
            slidesPerView: 4,
            spaceBetween: 16
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 18
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 22
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 24
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 26
          },
          1400: {
            slidesPerView: 6,
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

      {/* Pagination bullets */}
      <style>{`
        .custom-bullet {
          @apply w-3 h-3 bg-gray-300 rounded-full mx-1 transition-all;
        }
        .swiper-pagination-bullet-active.custom-bullet {
          @apply w-6 bg-blue-500 rounded-lg;
        }
        .swiper-pagination {
          @apply mt-6 flex justify-center;
        }
      `}</style>
    </div>
  );
};

export default CarouselWrapper;