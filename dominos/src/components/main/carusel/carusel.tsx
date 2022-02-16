/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import style from './carusel.module.scss';
import slide1 from '../../../assets/front/slider/slider_one/осн_сайт_тизеры_переработка_коробок_1320х400.png';
import slide2 from '../../../assets/front/slider/slider_one/слайды_кадры_30.03.21.png';
import slide3 from '../../../assets/front/slider/slider_one/тизер_комбо_5-10_пицц_1320х400_биг_2v5Lcnh.png';
import slide4 from '../../../assets/front/slider/slider_one/тизер_Сытые_птички_десктоп-min.png';
import slide5 from '../../../assets/front/slider/slider_one/тизер_ХДБ_1320х400.png';

SwiperCore.use([Pagination, Autoplay]);

export default function Carusel() {
  return (
    <div className={style.wrapper_swiper}>
      <Swiper
        style={{ paddingLeft: '250px', height: '450px' }}
        pagination
        spaceBetween={50}
        slidesPerView={3}
        width={4300}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        centeredSlides
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
