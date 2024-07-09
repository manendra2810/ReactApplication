import React from 'react'
import { useState, useEffect } from 'react';
import { IoIosCheckmark } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import './Page6.css';
import './Page2.css';

const Page6 = () => {
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
        
        const cardBox1 = document.querySelectorAll('.page2-card1');
        cardBox1.forEach((el) => {
          scrollAnimateCard(el, "animate", 0.2, 0.8);
        });  
    
        const cardBox3 = document.querySelectorAll('.page2-card3');
        cardBox3.forEach((el)=>{
          scrollAnimateCard(el, "animate", 0.2, 0.8 );
        });
    
    },[]);
 
    return (
        <div className='page6 page6flexClass'>
            <div className="page6-heading-box page2-heading-box page2flexClass">
                <div className='page2flexClass page2-upper-heading'>
                    <span className='page2flexClass'></span>
                    <h5 className='upper-headingh5'>DISCOUNT PRICE</h5>
                </div>
                <div className='page2flexClass'>
                    <h3 className='page2-commonClass page2-heading page6-heading'>Make Brand Identities</h3>
                </div>
            </div>

            <div className="page2-cards-box page2flexClass">
                <div className="page6-cards-box-inner page2-cards-box-inner page2flexClass">
                    <div className="page2-card1 page2-card-CommonClass page6-card-CommonClass">
                        <div className="page6-card-header-box">
                            <div className="page6-card-imgBox page2flexClass">
                                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/pc-1-icon-1.webp" alt=""/>
                            </div>
                            <h3>$29 /Month</h3>
                        </div>
                        <div className="page6-heading-para">
                            <h6>Business</h6>
                            <p>Every pleasure is to be welcomed and every pain avoided. is to be welcomed and every</p>
                        </div>
                        <a className="page6-card-button" href="">Get Started</a>
                        <p className='page6-text-after-button page6flexClass'>14-Day Free Trial - No Credit Card Required</p>
                        <ul className="page6-card-bottom-part">
                            <li><IoIosCheckmark className='card6-check-mark'/><span>Setup & Onboarding</span></li>
                            <li><IoIosCheckmark className='card6-check-mark'/><span>Onboarding & Setup</span></li>
                            <li><IoIosCheckmark className='card6-check-mark'/><span>Awosame Consulting</span></li>
                        </ul> 
                        <div className="page6-card-bottom-img page6flexClass">
                            <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-il-2.webp" alt=""/>
                        </div>
                    </div>

                    <div className="page2-card2 page2-card-CommonClass page6-card-CommonClass">
                        <div className="page6-card-header-box">
                            <div className="page6-card-imgBox page2flexClass">
                                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/pc-1-icon-2.webp" alt=""/>
                            </div>
                            <h3>$69 /Month</h3>
                        </div>
                        <div className="page6-heading-para">
                            <h6>Agency</h6>
                            <p>Every pleasure is to be welcomed and every pain avoided. is to be welcomed and every</p>
                        </div>
                        <a className="page6-card-button" href="">Get Started</a>
                        <p className='page6-text-after-button page6flexClass'>30-Day Free Trial - No Credit Card Required</p>
                        <ul className="page6-card-bottom-part">
                            <li><IoIosCheckmark className='card6-check-mark'/><span>Setup & Onboarding</span></li>
                            <li><IoIosCheckmark className='card6-check-mark'/><span>Onboarding & Setup</span></li>
                            <li><IoIosCheckmark className='card6-check-mark'/><span>Awosame Consulting</span></li>
                        </ul>
                        <div className="page6-card-bottom-img page6flexClass">
                            <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-il-2.webp" alt=""/>
                        </div>
                    </div>

                    <div className="page2-card3 page2-card-CommonClass page6-card-CommonClass">
                        <div className="page6-card-header-box">
                            <div className="page6-card-imgBox page2flexClass">
                                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/pc-1-icon-3.webp" alt=""/>
                            </div>
                            <h3>$99 /Month</h3>
                        </div>
                        <div className="page6-heading-para">
                            <h6>Company</h6>
                            <p>Every pleasure is to be welcomed and every pain avoided. is to be welcomed and every</p>
                        </div>
                        <a className="page6-card-button" href="">Get Started</a>
                        <p className='page6-text-after-button page6flexClass'>60-Day Free Trial - No Credit Card Required</p>
                        <ul className="page6-card-bottom-part">
                            <li><IoIosCheckmark className='card6-check-mark'/><span>Setup & Onboarding</span></li>
                            <li><IoIosCheckmark className='card6-check-mark'/><span>Onboarding & Setup</span></li>
                            <li><IoIosCheckmark className='card6-check-mark'/><span>Awosame Consulting</span></li>
                        </ul>
                        <div className="page6-card-bottom-img page6flexClass">
                          <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-il-2.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page6-bottom-heading-box page2-heading-box page2flexClass">
                <div className='page2flexClass page2-upper-heading'>
                    <span className='page2flexClass'></span>
                    <h5 className='upper-headingh5'>MARKETING AGENCY TEAM</h5>
                </div>
                <div className='page2flexClass page6-bottom-heading-upper-part'>
                    <h3 className='page2-commonClass page2-heading page6-heading'>Make Brand Identities From</h3>
                    <h3 className='page2-commonClass page2-heading page6-heading'>Scratch And Help</h3>
                </div>
            </div>

            <div className="page6-bottom-section page6flexClass"> 
              <img className='page6-bottom-blink-image bottom-blink-img1' src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-facebook.webp" alt=""/> 
              <img className='page6-bottom-blink-image bottom-blink-img2' src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-instragram.webp" alt=""/>
              
              <div className="page6-bottom-img-box page6-bottom-img-1-box page6flexClass">
                <img className='img1-side-text' src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-il-text-1.webp" alt=""/>
                <div className="page6-bottom-inner-img-1-box page6-bottom-inner-img-box"> 
                  <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-img-1.webp" alt=""/>
                  <div className="page6-bottom-img-text page6flexClass">
                    <h5 className="page6-bottom-img-text-heading"> 
                      <a href="https://themexriver.com/wp/choicy/about/"> Natalie Portman </a>
                    </h5>
                    <p className="page6-bottom-img-text-para">marketing officer</p>
                  </div>
                </div> 
              </div>

              <div className="page6-bottom-img-box page6-bottom-img-2-box page6flexClass">
                <div className="page6-bottom-inner-img-2-box page6-bottom-inner-img-box"> 
                  <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-img-2.webp" alt=""/>
                  <div className="page6-bottom-img-text page6flexClass">
                    <h5 className="page6-bottom-img-text-heading"> 
                      <a href="https://themexriver.com/wp/choicy/about/"> Dwayne Johnson </a>
                    </h5>
                    <p className="page6-bottom-img-text-para">wp developer</p>
                  </div>
                </div> 
                <img className='img2-side-text' src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-il-text-2.webp" alt=""/>
              </div>
            </div>

            <div className="page6-bottom-button page1-button">
                <div className="explore-btn">
                    <span>EXPLORE MORE</span>
                    <MdArrowRightAlt className='right-arrow'/>
                </div> 
            </div> 

            <div className="page6-bottom-background-div"></div>

            <div className="page6-footer page6flexClass">
              <div className="page6-footer-upper-box">
                <div className="page6-footer-img">
                  <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-slider-img-1.webp" alt=""/>
                </div>
                <div className="page6-footer-upper-right-text-box">
                  <h4>A Framework For Scaling Teams</h4>
                  <p>Every pleasure is to be welcomed and every pain avoided. is to be welcomed and every Every pleasure is to be welcomed and every pain avoided. is to be welcomed every Every pleasure is to be welcomed</p>
                  <h5>Logon D</h5>
                  <span>Founder, Marketing agency</span>
                </div>
              </div>
 
              <div className="page6-footer-middle-border page6flexClass"></div>

              <div className="page6-footer-bottom-box page6flexClass">
                <div className="page6-footer-bottom-left-box">
                  <div className='page6-footer-bottom-heading page2-bottom-heading page2flexClass page2-bottom-left-heading'>
                    <h3 className='page2-commonClass page2-heading'>Our Investors</h3>
                  </div>
                  <div className=" page6-footer-bottom-heading-para page2-bottom-left-para">
                    <p>Every pleasure is to be welcomed and every pain avoided. certain circumstances</p>
                  </div>
                </div>

                <div className="page6-footer-bottom-right-box page6flexClass">
                  <div className="footer-bottom-right-upper-img-box footer-bottom-right-img-box">
                    <div className="page6-footer-img1 page6-footer-img-common">
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-3.webp" alt=""/>
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-3.webp" alt=""/>
                    </div>
                    <div className="page6-footer-img2 page6-footer-img-common">
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-4.webp" alt=""/>
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-4.webp" alt=""/>
                    </div>
                    <div className="page6-footer-img3 page6-footer-img-common">
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-5.webp" alt=""/>
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-5.webp" alt=""/>
                    </div>
                  </div>
                  
                  <div className="footer-bottom-right-bottom-img-box footer-bottom-right-img-box">
                    <div className="page6-footer-img4 page6-footer-img-common">
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-6.webp" alt=""/>
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-6.webp" alt=""/>
                    </div>
                    <div className="page6-footer-img5 page6-footer-img-common">
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-1.webp" alt=""/>
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-1.webp" alt=""/>
                    </div>
                    <div className="page6-footer-img6 page6-footer-img-common">
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-2.webp" alt=""/>
                      <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-2.webp" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        </div> 
    )
}

export default Page6
