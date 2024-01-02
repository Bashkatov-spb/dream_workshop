import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import Footer from '../../footer/components/Footer';
import '../styles/main.scss';
import type { RootState } from '../../../redux/store';

const MainPage = (): JSX.Element => {
  const products = useSelector((store: RootState) => store.products.products);

  return (
    <div className="main">
      <div className="main__container">
        <h1 className="main__title">Приветствую!</h1>
        <Swiper
          loop={true}
          style={{ width: '280px' }}
          effect="cube"
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          modules={[EffectCube, Pagination, Autoplay]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              style={{ width: '285px', borderRadius: '10px' }}
              src="https://parade.com/.image/t_share/MTkwNTgxMTA1Mzk5MTc4MzY1/funny-pictures.jpg"
              alt="product"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: '285px', borderRadius: '10px' }}
              src="https://parade.com/.image/t_share/MTkwNTgxMTA1Mzk5MTc4MzY1/funny-pictures.jpg"
              alt="product"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: '285px', borderRadius: '10px' }}
              src="https://parade.com/.image/t_share/MTkwNTgxMTA1Mzk5MTc4MzY1/funny-pictures.jpg"
              alt="product"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: '285px', borderRadius: '10px' }}
              src="https://parade.com/.image/t_share/MTkwNTgxMTA1Mzk5MTc4MzY1/funny-pictures.jpg"
              alt="product"
            />
          </SwiperSlide>
        </Swiper>

        <div className="main__description">
          <p>
            Здесь краткое описание о мастере и его уникальных техниках работы с воском и гипсом.
          </p>
          <img src="URL_изображения_мастера" alt="мастер" className="main__portrait" />
        </div>
        <div className="main__gallery">
          <h2 className="gallery__title">Примеры моих работ</h2>
          <div className="gallery__items">
            {/* Плитки с изображениями работ */}
            {/* Пример плитки */}
            {products.map((_) => (
              <div className="gallery__item">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="изделие"
                  className="gallery__image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
