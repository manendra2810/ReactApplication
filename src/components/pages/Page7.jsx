import React from 'react'
import { useState, useEffect } from 'react';
import { FaPlay } from "react-icons/fa";
import './Page7.css';
import './Page5.css';
import './Page2.css';

const Page7 = () => {
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


        const scrollAnimateCard = (el, animateClass, enterThreshold, exitThreshold) => {
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
          
          const bgImage = document.querySelectorAll('.page7');
          bgImage.forEach((el) => {
            scrollAnimateCard(el, "animate", 0.1, 0.8);
          });  
      
          const roundCircle = document.querySelectorAll('.page7-rounding-circle-box');
          roundCircle.forEach((el)=>{
            scrollAnimateCard(el, "animate", 0.2, 0.8 );
          });

    },[]);

    return (
        <div className='page7'>
            <div className="page7-rounding-circle-box page7flexClass">
                <FaPlay className='page7-play-icon'/>
                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/plybtn-text.webp" alt=""/>
            </div>
            <div className="page7-heading-box page3-heading-box page2-heading-box page2flexClass">
                <div className='page5-upper-heading page2flexClass'>
                    <h3 className='page3-commonClass page2-heading page5-heading page7-heading'>We Help Your Business</h3>
                    <h3 className='page3-commonClass page2-heading page7-heading'>To Become Stronger</h3> 
                </div>
            </div>
        </div>
    )
}

export default Page7 
