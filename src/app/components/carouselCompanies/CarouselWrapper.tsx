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
          <SwiperSlide key={index} className="pl-5 pr-5 md:px-20">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos directamente en el componente */}
      <style>{`
        .custom-bullet {
          width: 14px;
          height: 14px;
          margin: 0 4px;
          border-radius: 50%;
          background: #d1d5db;
          transition: all 0.3s ease;
          opacity: 1;
        }

        .swiper-pagination-bullet-active.custom-bullet {
          width: 24px;
          border-radius: 7px;
          background: #3b82f6;
        }

        .swiper-pagination {
          position: static !important;
          margin-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .custom-bullet {
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active.custom-bullet {
            width: 18px;
            border-radius: 6px;
          }
        }

        @media (max-width: 480px) {
          .custom-bullet {
            width: 8px;
            height: 8px;
          }
          .swiper-pagination-bullet-active.custom-bullet {
            width: 14px;
            border-radius: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselWrapper;
