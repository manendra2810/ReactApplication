import React from 'react'
import { useState, useEffect } from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import './Page2.css';
import './Page3.css';
import './Page4.css';

const Page4 = () => {
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
        <div className='page4 page4flexClass'>
            <div className="page4-upper-box page4flexClass">
                <div className="page2-bottom-right-box page2flexClass">
                    <div className="page4-upper-img-box">
                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-1.webp" alt=""/>
                    </div>
                </div>

                <div className="page4-upper-right-box page2-bootom-left-box page2-bottom-heading-box page2-heading-box page2flexClass">
                    <div className='page2-bottom-heading page2flexClass page2-bottom-left-heading'>
                        <h3 className='page2-commonClass page4-heading'>We'll Help You Get Started</h3>
                    </div>
                    <div className="page4-upper-right-para page2-bottom-left-para">
                        <p>Every pleasure is to be welcomed and every pain avoided. Certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances</p>
                    </div>

                    <div className="page4-right-bottom-box page4flexClass">
                        <div className="price_button">
                            <div className="page4-upper-price-box page4flexClass">
                                <h4>$16.32</h4>
                                <div className="page4-price-text">
                                    <p>Monthly</p>
                                    <p>Price</p>
                                </div>
                            </div>
                            <div className="page1-button">
                                <div className="explore-btn">
                                    <span>EXPLORE MORE</span>
                                    <MdArrowRightAlt className='right-arrow'/>
                                </div> 
                            </div>
                        </div>
                        <div className="upper-nft-image-box">
                            <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-2.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-container page4flexClass">
                <div className="slider page4flexClass">
                    <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-il-1.webp" alt=""/>
                </div>
            </div>

            <div className="page4-bootom-box page2-bottom-box page2flexClass">
                <div className="page4-bottom-box page2-bootom-left-box page2-bottom-heading-box page2-heading-box page2flexClass">
                    <div className='page4-bottom-heading page2-bottom-heading page2flexClass page2-bottom-left-heading'>
                        <h3 className='page2-commonClass page4-heading'>Better Ship Faster</h3>
                        <h3 className='page2-commonClass page4-heading'>Avoid Unauthorized</h3>
                    </div>
                    <div className="page2-bottom-left-para">
                        <p>Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances</p>
                    </div>
                        
                    <div className="page1-button">
                        <div className="explore-btn">
                            <span>EXPLORE MORE</span>
                            <MdArrowRightAlt className='right-arrow'/>
                        </div> 
                    </div>
                </div>
 
                <div className="page2-bottom-right-box page2flexClass">
                    <div className="page4-right-img-box">
                        <img width="640" height="407" src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-3.webp" alt="" srcSet="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-3.webp 830w, https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-3-300x191.webp 300w, https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-3-768x489.webp 768w, https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-3-600x382.webp 600w" sizes="(max-width: 640px) 100vw, 640px"/>
                    </div>
                </div>
            </div> 
        </div>
    ) 
}

export default Page4
