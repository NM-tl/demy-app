import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import sldie1 from '../../assets/slider/volkswagen.svg';
import sldie2 from '../../assets/slider/att.svg';
import sldie3 from '../../assets/slider/cisco.svg';
import sldie4 from '../../assets/slider/citi.svg';
import sldie5 from '../../assets/slider/ericsson.svg';
import sldie6 from '../../assets/slider/hewlett_packard_enterprise.svg';
import sldie7 from '../../assets/slider/procter_gamble.svg';
import sldie8 from '../../assets/slider/samsung.svg';

export default function Slider() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            speed={1500}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                },
                1440: {
                    slidesPerView: 6,
                },
                1920: {
                    slidesPerView: 8,
                },
            }}
        >
            <SwiperSlide >
                <img src={sldie1} alt="volkswagen" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sldie2} alt="att" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sldie3} alt="cisco" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sldie4} alt="citi" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sldie5} alt="ericsson" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sldie6} alt="hewlett_packard_enterprise" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sldie7} alt="procter_gamble" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sldie8} alt="samsung" />
            </SwiperSlide>
        </Swiper>
    );
}
