import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCube, Pagination } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const MainPage = (): JSX.Element => {
  return (
    <div>
      <h1>Main page</h1>

      <Swiper
        loop={true}
        style={{ width: '300px' }}
        effect="cube"
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Pagination]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/300x300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/300x300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/300x300" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/300x300" />
        </SwiperSlide>
      </Swiper>

      <div>Info about me</div>
    </div>
  );
};

export default MainPage;
