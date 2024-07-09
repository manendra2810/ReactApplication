import React from 'react'
import { useState, useEffect } from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import './Page8.css';
import './Page6.css';
import './Page2.css';

const Page8 = () => { 
    useEffect(() => {
        // code for element to slide on scroll -----------------------------------------
        const options2 = {
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
          }, options2);
    
          observer.observe(el);
        }
    
        const page2UpperHeading = document.querySelectorAll('.page2-upper-heading');
        page2UpperHeading.forEach((el)=>{
          scrollAnimateHeading2(el, "animate");
        });
    
        const page2Heading = document.querySelectorAll('.page2-commonClass');
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
        
        const page8FloatBox1 = document.querySelectorAll('.page8-top-float-box');
        page8FloatBox1.forEach((el) => {
          scrollAnimateCard(el, "animate", 0.2, 0.8);
        });  

        const page8FloatBox2 = document.querySelectorAll('.page8-top-float-box');
        page8FloatBox2.forEach((el) => {
          scrollAnimateCard(el, "animate", 0.2, 0.8);
        }); 
    
    },[]);

    return (
        <div className='page8 page8flexClass'>
            <div className="page8-top-float-box page8flexClass">
                <div className="page8-heading-box1 page2flexClass">
                    <div className='page2flexClass page2-upper-heading'>
                        <span className='page2flexClass'></span>
                        <h5 className='upper-headingh5'>CONTACT US</h5>
                    </div>
                    <div className='page4-bottom-heading page2-bottom-heading page2flexClass page2-bottom-left-heading'>
                        <h3 className='page2-commonClass page4-heading page8-heading'>Ready To Experience</h3>
                        <h3 className='page2-commonClass page4-heading page8-heading'>Upstage Yourself?</h3>
                    </div>
                </div>
                <div className="page8-float-box-right-btn page1-button">
                    <div className="explore-btn">
                        <span>LET'S GET STARTED</span>
                        <MdArrowRightAlt className='right-arrow'/>
                    </div> 
                </div>
            </div>

            <div className="page8-heading-box2 page2-heading-box page2flexClass">
                <div className='page2flexClass page2-upper-heading'>
                    <span className='page2flexClass'></span>
                    <h5 className='upper-headingh5'>OUR BLOGS</h5>
                </div>
                <div className='page2flexClass'>
                    <h3 className='page2-commonClass page2-heading page8-heading'>The Latest News & Blog</h3>
                </div>
            </div>

            <div className="page2-cards-box page2flexClass">
                <div className="page8-cards-box-inner page2-cards-box-inner page2flexClass">

                    <div className="page8-card-CommonClass">
                      <div className="page8-card-upperPart">
                        <div className="page8-bottom-card-main-img page8flexClass">
                          <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/b1-img-1.webp" alt=""/>
                        </div>
                        <a className="page8-card-button" href="">JANUARY 10, 2024</a>
                        <div className="page8-heading-para">
                            <h6>Get The Most Out Og The Creativity</h6>
                            <p>Every pleasure is to be welcomed and every pain avoided. certain circumstance</p>
                        </div>
                      </div>

                      <div className="page8-card-header-box page8flexClass">
                          <div className="page8-card-imgBox page2flexClass">
                            <img src="https://secure.gravatar.com/avatar/9855b85c8526972b8cb3a82ebe7a17d4?s=50&amp;d=mm&amp;r=g" alt=""/>
                          </div>
                          <h3>BY CHOICY</h3>
                          <div className="page8-card-progressBar page8flexClass"></div>
                      </div>
                    </div>

                    <div className="page8-card-CommonClass">
                      <div className="page8-card-upperPart">
                        <div className="page8-bottom-card-main-img page8flexClass">
                          <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/b1-img-2.webp" alt=""/>
                        </div>
                        <a className="page8-card-button" href="">JANUARY 10, 2024</a>
                        <div className="page8-heading-para">
                          <h6>Better Ship Faster Avoid Unauthorized</h6>
                          <p>Every pleasure is to be welcomed and every pain avoided. certain circumstance</p>
                        </div>
                      </div>

                      <div className="page8-card-header-box page8flexClass">
                        <div className="page8-card-imgBox page2flexClass">
                          <img src="https://secure.gravatar.com/avatar/9855b85c8526972b8cb3a82ebe7a17d4?s=50&amp;d=mm&amp;r=g" alt=""/>
                        </div>
                        <h3>BY CHOICY</h3>
                        <div className="page8-card-progressBar page8flexClass"></div>
                      </div>
                    </div>

                    <div className="page8-card-CommonClass">
                      <div className="page8-card-upperPart">
                        <div className="page8-bottom-card-main-img page8flexClass">
                          <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/b1-img-3-1.webp" alt=""/>
                        </div>
                        <a className="page8-card-button" href="">JANUARY 10, 2024</a>
                        <div className="page8-heading-para">
                          <h6>Faster Avoid Better Unauthorized Ship</h6>
                          <p>Every pleasure is to be welcomed and every pain avoided. certain circumstance</p>
                        </div>
                      </div>

                      <div className="page8-card-header-box page8flexClass">
                        <div className="page8-card-imgBox page2flexClass">
                          <img src="https://secure.gravatar.com/avatar/9855b85c8526972b8cb3a82ebe7a17d4?s=50&amp;d=mm&amp;r=g" alt=""/>
                        </div>
                        <h3>BY CHOICY</h3>
                        <div className="page8-card-progressBar page8flexClass"></div>
                      </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Page8
