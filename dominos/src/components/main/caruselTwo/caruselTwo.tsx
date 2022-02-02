/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import style from './caruselTwo.module.scss';

SwiperCore.use([Autoplay, Navigation]);

export default function CaruselTwo() {
  return (
    <div className={style.wrapper_swiper}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        loop
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <a href="/">
            <div className={style.container}>
              <div>
                <div className={style.image}>
                  IMAGE
                </div>
              </div>
              <div className={style.size_text_container}>
                <h3 className={style.type_tittle}>Title</h3>
                <div className={style.type_text}>
                  Какой-то текст
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.container}>
            <div>
              <div className={style.image}>
                IMAGE
              </div>
            </div>
            <div className={style.size_text_container}>
              <h3 className={style.type_tittle}>Title</h3>
              <div className={style.type_text}>
                Какой-то текст
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.container}>
            <div>
              <div className={style.image}>
                IMAGE
              </div>
            </div>
            <div className={style.size_text_container}>
              <h3 className={style.type_tittle}>Title</h3>
              <div className={style.type_text}>
                Какой-то текст
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.container}>
            <div>
              <div className={style.image}>
                IMAGE
              </div>
            </div>
            <div className={style.size_text_container}>
              <h3 className={style.type_tittle}>Title</h3>
              <div className={style.type_text}>
                Какой-то текст
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.container}>
            <div>
              <div className={style.image}>
                IMAGE
              </div>
            </div>
            <div className={style.size_text_container}>
              <h3 className={style.type_tittle}>Title</h3>
              <div className={style.type_text}>
                Какой-то текст
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
