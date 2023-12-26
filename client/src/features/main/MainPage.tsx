import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCube, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const MainPage = (): JSX.Element => {
  return (
    <div>
      <h1>Main page</h1>

      <Swiper
        loop={true}
        style={{ width: '400px' }}
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
          <img
            style={{ width: '400px' }}
            src="https://parade.com/.image/t_share/MTkwNTgxMTA1Mzk5MTc4MzY1/funny-pictures.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: '400px' }}
            src="https://parade.com/.image/t_share/MTkwNTgxMTA1Mzk5MTc4MzY1/funny-pictures.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: '400px' }}
            src="https://parade.com/.image/t_share/MTkwNTgxMTA1Mzk5MTc4MzY1/funny-pictures.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: '400px' }}
            src="https://parade.com/.image/t_share/MTkwNTgxMTA1Mzk5MTc4MzY1/funny-pictures.jpg"
          />
        </SwiperSlide>
      </Swiper>

      <div>Info about me</div>
      <img
        src="https://kartinki.pibig.info/uploads/posts/2023-04/1682463662_kartinki-pibig-info-p-boginya-vesta-kartinki-arti-krasivo-1.jpg"
        alt=""
      />
    </div>
  );
};

export default MainPage;
