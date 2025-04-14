import React, { ReactNode, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselWrapperProps {
  children: ReactNode;
}

const CarouselWrapper = ({ children }: CarouselWrapperProps) => {
  const items = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="relative w-full pb-3 md:pb-12"> {/* más padding abajo */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        className="select-none"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="p-5 md:px-20">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos directamente en el componente */}
      <style jsx global>{`
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
        }
      `}</style>
    </div>
  );
};

export default CarouselWrapper;
