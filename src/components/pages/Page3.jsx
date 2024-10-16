import React from 'react'
import { useState, useEffect } from 'react';
import './Page2.css';
import './Page3.css';
import developmentImage from '../../assets/images/development-icon.jpg';

const Page3 = () => {
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
    
        const page2UpperHeading = document.querySelectorAll('.page2-upper-heading');
        page2UpperHeading.forEach((el)=>{
          scrollAnimateHeading2(el, "animate");
        });
    
        const page2Heading = document.querySelectorAll('.page3-commonClass');
        page2Heading.forEach((el)=>{
          scrollAnimateHeading2(el, "animate");
        });



        const scrollAnimateImage = (el, animateClass, enterThreshold, exitThreshold) => {
            const enterObserver = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= enterThreshold) {
                  entry.target.classList.add(animateClass);
                }
              });
            }, {
              root: null,
              rootMargin: '0px',
              threshold: enterThreshold
            });
          
            const exitObserver = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting && entry.boundingClientRect.bottom >= window.innerHeight) {
                  entry.target.classList.remove(animateClass);
                }
              });
            }, {
              root: null,
              rootMargin: '0px',
              threshold: exitThreshold
            });
          
            enterObserver.observe(el);
            exitObserver.observe(el);
        };

        const page3Image1 = document.querySelectorAll('.page3-image-box1');
        page3Image1.forEach((el)=>{
            scrollAnimateImage(el, "animate", 0.2, 0.8);
        });

        const page3Image4 = document.querySelectorAll('.page3-image-box4');
        page3Image4.forEach((el)=>{
            scrollAnimateImage(el, "animate", 0.2, 0.8);
        });

        const page3Image2 = document.querySelectorAll('.page3-image-box2');
        page3Image2.forEach((el)=>{
            scrollAnimateImage(el, "animate", 0.2, 0.8);
        });

        const page3Image3 = document.querySelectorAll('.page3-image-box3');
        page3Image3.forEach((el)=>{
            scrollAnimateImage(el, "animate", 0.2, 0.8);
        });
        
    },[]);  
    
    return (
        <div className='page3 page3flexClass'>
            <div className="page3-heading-box page2-heading-box page2flexClass">
                <div className='page2flexClass page2-upper-heading'>
                    <span className='page2flexClass'></span>
                    <h5 className='page3-upper-headingh5'>CONSULTING SERVICES</h5>
                </div>
                <div className='page2flexClass'>
                    <h3 className='page3-commonClass page2-heading page3-heading'>Consulting Costing</h3>
                </div>
                <div className="page3-heading-para page3flexClass" >
                    <p>We are a One-Stop Solution for delivering the best web design and development services. We render customized and affordable web design facilities to suit your requirements.</p>
                </div>
            </div>

            <div className="page3-images-box page3flexClass">
                <div className="page3-image-box1 page3-image-box-commonClass page3flexClass">
                    <div className="page3-main-img-box page3flexClass">
                        {/* <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/r1-img-1.webp" alt=""/> */}
                        <div className="page3-float-img page3flexClass">
                            <img src={developmentImage} alt=""/>
                        </div>
                    </div>
                    <h5>Digital Marketing</h5>
                    <p>Attract new customers, and achieve your business objectives.</p>
                </div>

                <div className="page3-image-box2 page3-image-box-commonClass page3flexClass">
                    <div className="page3-main-img-box page3flexClass">
                        {/* <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/r1-img-2.webp" alt=""/> */}
                        <div className="page3-float-img page3flexClass">
                            <img src={developmentImage} alt=""/>
                        </div>
                    </div>
                    <h5>SEO Optimization</h5>
                    <p>Drive organic traffic with VG Technologies SEO expertise.</p>
                </div>

                <div className="page3-image-box3 page3-image-box-commonClass page3flexClass">
                    <div className="page3-main-img-box page3flexClass">
                        {/* <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/r1-img-3.webp" alt=""/> */}
                        <div className="page3-float-img page3flexClass">
                            <img src={developmentImage} alt=""/>
                        </div>
                    </div>
                    <h5>Social Media Marketing</h5>
                    <p>VG Technologies amplifies your brand voice through social media.</p>
                </div>

                <div className="page3-image-box4 page3-image-box-commonClass page3flexClass">
                    <div className="page3-main-img-box page3flexClass">
                        {/* <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/r1-img-4.webp" alt=""/> */}
                        <div className="page3-float-img page3flexClass">
                            <img src={developmentImage} alt=""/>
                        </div>
                    </div>
                    <h5>Web Development</h5>
                    <p>We focus on demanding technologies, frameworks, and tools.</p>
                </div>
            </div>
        </div>
    )
}

export default Page3
