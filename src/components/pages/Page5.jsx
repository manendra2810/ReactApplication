import React from 'react'
import { useState, useEffect } from 'react';
import './Page5.css';
import './Page3.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../../assets/images/img_1.webp';
import slide_image_2 from '../../assets/images/img_2.webp';
import slide_image_3 from '../../assets/images/img_3.webp';
import slide_image_4 from '../../assets/images/img_4.webp';
import slide_image_5 from '../../assets/images/img_5.webp';
import slide_image_6 from '../../assets/images/img_6.webp';
import slide_image_7 from '../../assets/images/img_7.webp';

const Page5 = () => {
    useEffect(() => {

        const options3 = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4 // Trigger when 50% of element is visible
        };
      
        //this scrollAnimate function only runs once when element appear into the screen ---------------------------
        const scrollAnimateHeading2 = (el, animateClass)=>{
          const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRect.top <= window.innerHeight) {
                  entry.target.classList.add(animateClass);
                } 
              });
          }, options3);
    
          observer.observe(el);
        }
    
        const page2Heading = document.querySelectorAll('.page3-commonClass');
        page2Heading.forEach((el)=>{
          scrollAnimateHeading2(el, "animate");
        });
  
    },[]);

  return (
    <div className='page5 page5flexClass'>
        <div className="page3-heading-box page2-heading-box page2flexClass">
            <div className='page2flexClass page2-upper-heading'>
                <span className='page2flexClass'></span>
                <h5 className='page3-upper-headingh5'>CONSULTING SERVICES</h5>
            </div>
            <div className='page5-upper-heading page2flexClass'>
                <h3 className='page3-commonClass page2-heading page5-heading'>Our Success Project's</h3>
                <h3 className='page3-commonClass page2-heading'>That Inspire</h3>
            </div>
        </div>

        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide> 
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    </div>
  )
}

export default Page5
