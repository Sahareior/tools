import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import OpHero from './OpHomepage/OpHero';
import OpHomepage2 from './OpHomepage/OpHomepage2';

export default function CustomSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      direction={'vertical'}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper h-screen"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      <SwiperSlide className="h-screen">
        <OpHero active={activeIndex === 0} />
      </SwiperSlide>
      <SwiperSlide className="h-screen">
        <OpHomepage2 active={activeIndex === 1} />
      </SwiperSlide>
    </Swiper>
  );
}
