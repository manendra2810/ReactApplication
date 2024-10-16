import React from 'react'
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { MdArrowRightAlt } from "react-icons/md";
import { GiMegaphone } from "react-icons/gi";
import { TbMailOpenedFilled } from "react-icons/tb";
import developmentImage from '../../assets/images/development-icon.jpg';
import personImg from '../../assets/images/person.jpg';
import img1 from '../../assets/images/img_1.webp'
import img4 from '../../assets/images/img_4.webp'
import './Page2.css';

const Page2 = () => {
  const [count, setCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [replyCount, setReplyCount] = useState(0);
  const [coverCount, setCoverCount] = useState(0);
  const [smsCount, setSmsCount] = useState(0);
  let countLength1 = 0;

  useEffect(() => {
    //countUp function for updating count value----------------------------------------
    const countUp = (start, end, duration, str) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        if(str === "trustedUser"){
          setCount(Math.floor(progress * (end - start) + start));
        }
        else if(str === '1'){
          setUserCount(Math.floor(progress * (end - start) + start));
        }
        else if(str === '2'){
          setReviewCount(Math.floor(progress * (end - start) + start));
        }
        else if(str === '3'){
          setReplyCount(Math.floor(progress * (end - start) + start));
        }
        else if(str === '4'){
          setCoverCount(Math.floor(progress * (end - start) + start));
        }
        else if(str === '5'){
          setSmsCount(Math.floor(progress * (end - start) + start));
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };
    
    // code for element to slide on scroll -----------------------------------------
    const options2 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4 // Trigger when 50% of element is visible
    };

    const options3 = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 50% of element is visible
    };
  
    const scrollAnimateHeading = (el, animateClass)=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRect.top <= window.innerHeight) {
                entry.target.classList.add(animateClass);
                countUp(0, 33400, 2000, 'trustedUser'); // Count from 0 to 33400 in 2 seconds
              } 
              else if (entry.boundingClientRect.bottom > window.innerHeight) {
                entry.target.classList.remove(animateClass);
              }
            });
        }, options2);

        observer.observe(el);
    }

    const trustedByBox = document.querySelectorAll('.trustedBy');
    trustedByBox.forEach((el)=>{
        scrollAnimateHeading(el, "animate");
    });



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

    const bottomRightImg = document.querySelectorAll('.right-img-box');
    bottomRightImg.forEach((el)=>{
      scrollAnimateCard(el, "animate", 0.4, 0.5 );
    });



    const scrollAnimateCount = (el, animateClass, enterThreshold, countLength1, countLength2, countLength3) => {
      // countLength1 = countLength;
      const enterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= enterThreshold) {
            entry.target.classList.add(animateClass);
            countUp(0, countLength1, 2000, "1");
            countUp(0, countLength2, 2000, '2');
            countUp(0, countLength3, 2000, '3');
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: enterThreshold
      });
    
      enterObserver.observe(el);
    };

    const countingBox = document.querySelectorAll('.page2-counting-box-inner');
    countingBox.forEach((el)=>{
      scrollAnimateCount(el, "animate", 0.2, 15000, 25000, 35000 );
    });



    const scrollAnimateBottomBoxCount = (el, animateClass, enterThreshold, countLength1, countLength2) => {
      // countLength1 = countLength;
      const enterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= enterThreshold) {
            entry.target.classList.add(animateClass);
            countUp(0, countLength1, 2000, "4");
            countUp(0, countLength2, 2000, '5');
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: enterThreshold
      });
    
      enterObserver.observe(el);
    };

    const bottomCountingBox = document.querySelectorAll('.right-goals-box');
    bottomCountingBox.forEach((el)=>{
      scrollAnimateBottomBoxCount(el, "animate", 0.2, 64000, 94000 );
    });

},[]);

const formatCount = (num) => {
  return num >= 1000 ? (num / 1000).toFixed(1) + 'K' : num;
};

const formatCount2 = (num) => {
  return num >= 1000 ? (num / 1000).toFixed(0) : num;
}; 
  
  return (
    <div className='page2 page2flexClass'>
      <div className="trustedBy">
        <div className="headingBox page2flexClass">
          <h3> 
            Trusted By 
            <span className="icon-1 icon">
              <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-world-1.webp" alt=""/>
            </span> 
            <span className="icon-2 icon">
              <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-world-4.webp" alt=""/>
            </span>
            2,500 Business 
            <span className="icon-3 icon">
              <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-world-3.webp" alt=""/>
            </span> 
            <span className="icon-4 icon">
              <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-world-2.webp" alt=""/>
            </span>
          </h3>
        </div>

        <div className="imgBox page2flexClass">
          <div className="playBtn-blink">
            <div className="playBtn">
                <FaPlay />
            </div>
          </div>
        </div>
        
        <div className="ratingBox page2flexClass">
          <div className="ratingBoxInner">
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="border"><span></span></div>
            <div className="ratingText">
              <span>Rated 4.9/5 From Over 600 Reviews</span>
            </div>
          </div>
        </div>

        <div className="trafficBox page2flexClass">
          <div className="trafficBoxInner">
            <div className="trafficText">
              <span>Monthly Traffic</span>
            </div>
            <div className="border"><span></span></div>
            <div className="trafficCount">
              <span>{formatCount(count)}</span>
            </div>
            <div className="progressBarBox">
              <span>Monthly Trafic</span>
              <div className="progressBar"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="page2-heading-box page2flexClass">
        <div className='page2flexClass page2-upper-heading'>
          <span className='page2flexClass'></span>
          <h5 className='upper-headingh5'>BEST FOR YOU</h5>
        </div>
        <div className='page2flexClass'>
          <h3 className='page2-commonClass page2-heading'>Our Services</h3>
        </div>
      </div>

      <div className="page2-cards-box page2flexClass">
        <div className="page2-cards-box-inner page2flexClass">

          <div className="page2-card1 page2flexClass page2-card-CommonClass">
            <div className="page2-card-imgBox page2flexClass">
              <img src={developmentImage} alt="" />
            </div>
            <div className="card-heading page2flexClass">
              <h4>Web Development</h4>
              <p>We are the best web design company in India with highly experienced coders.</p>
            </div>
            <div className="card-border"></div>
            <div className="card-body page2flexClass">
              <div className="card-body-content">
                <div className='card-body-content-item page2flexClass'>
                  <span className='card-body-arrow page2flexClass'><BiSolidRightArrowAlt /></span>
                  <span className='card-body-span1 page2flexClass'>Diversity Business</span>
                </div>
                <div className='card-body-content-item page2flexClass'>
                  <span className='card-body-arrow page2flexClass'><BiSolidRightArrowAlt /></span>
                  <span className='card-body-span2 page2flexClass'>Risk Management</span>
                </div>
                <div className='card-body-content-item page2flexClass'>
                  <span className='card-body-arrow page2flexClass'><BiSolidRightArrowAlt /></span>
                  <span className='card-body-span2 page2flexClass'>Certificated Company</span>
                </div>
              </div>
              <div className="card-body-direction">
                <div className="card-body-direction-circle page2flexClass">
                 <IoMdArrowRoundForward />
                </div>
              </div>
            </div>
          </div>

          <div className="page2-card2 page2flexClass page2-card-CommonClass">
            <div className="page2-card-imgBox page2flexClass">
              <img src={developmentImage} alt="" />
            </div>
            <div className="card-heading page2flexClass">
              <h4>E - Commerse</h4>
              <p>Create custom e-commerce websites with excellent APIs and design structures to boost your overall growth.</p>
            </div>
            <div className="card-border"></div>
            <div className="card-body page2flexClass">
              <div className="card-body-content">
                <div className='card-body-content-item page2flexClass'>
                  <span className='card-body-arrow page2flexClass'><BiSolidRightArrowAlt /></span>
                  <span className='card-body-span1 page2flexClass'>Diversity Business</span>
                </div>
                <div className='card-body-content-item page2flexClass'>
                  <span className='card-body-arrow page2flexClass'><BiSolidRightArrowAlt /></span>
                  <span className='card-body-span2 page2flexClass'>Risk Management</span>
                </div>
                <div className='card-body-content-item page2flexClass'>
                  <span className='card-body-arrow page2flexClass'><BiSolidRightArrowAlt /></span>
                  <span className='card-body-span2 page2flexClass'>Certificated Company</span>
                </div>
              </div>
              <div className="card-body-direction">
                <div className="card-body-direction-circle page2flexClass">
                 <IoMdArrowRoundForward />
                </div>
              </div>
            </div>
          </div>

          <div className="page2-card3 page2flexClass page2-card-CommonClass">
            <div className="page2-card-imgBox page2flexClass">
              <img src={developmentImage} alt="" />
            </div>
            <div className="card-heading page2flexClass">
              <h4>Cost Effective</h4>
              <p>We provide custom web development services to suit your cost utilization needs to meet the goals you have set for your business.</p>
            </div>
            <div className="card-border"></div>
            <div className="card-body page2flexClass">
              <div className="card-body-content">
                <div className='card-body-content-item page2flexClass'>
                  <span className='card-body-arrow page2flexClass'><BiSolidRightArrowAlt /></span>
                  <span className='card-body-span1 page2flexClass'>Diversity Business</span>
                </div>
                <div className='card-body-content-item page2flexClass'>
                  <span className='card-body-arrow page2flexClass'><BiSolidRightArrowAlt /></span>
                  <span className='card-body-span2 page2flexClass'>Risk Management</span>
                </div>
                <div className='card-body-content-item page2flexClass'>
                  <span className='card-body-arrow page2flexClass'><BiSolidRightArrowAlt /></span>
                  <span className='card-body-span2 page2flexClass'>Certificated Company</span>
                </div>
              </div>
              <div className="card-body-direction">
                <div className="card-body-direction-circle page2flexClass">
                 <IoMdArrowRoundForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page2-counting-box page2flexClass">
        <div className="page2-counting-box-inner page2flexClass">

          <div className="page2-trustedUser-counting-box page2flexClass">
            <div className="h3Heading page2flexClass">
              <h3>{formatCount2(userCount)}</h3>
              <h3>k</h3>
              <h3>+</h3>
            </div>
            <div className="h3HeadingPara page2flexClass">
              <h3>Trusted</h3>
              <h3>User</h3>
            </div>
          </div>

          <div className="page2-poisitiveReview-counting-box page2flexClass">
            <div className="h3Heading page2flexClass">
              <h3>{formatCount2(reviewCount)}</h3>
              <h3>k</h3>
            </div>
            <div className="h3HeadingPara page2flexClass">
              <h3>Positive</h3>
              <h3>Reviews</h3>
            </div>
          </div>

          <div className="page2-replyRate-counting-box page2flexClass">
            <div className="h3Heading page2flexClass">
              <h3>{formatCount2(replyCount)}</h3>
              <h3>%</h3>
            </div>
            <div className="h3HeadingPara page2flexClass">
              <h3>Reply</h3>
              <h3>Rate</h3>
            </div>
          </div>

        </div>
      </div>
 
      <div className="page2-bottom-box page2flexClass">
        <div className="page2-bootom-left-box page2-bottom-heading-box page2-heading-box page2flexClass">
          <div className='page2flexClass page2-upper-heading page2-bottom-upper-heading'>
            <span className='page2flexClass'></span>
            <h5 className=''>CONSULTING SERVICES</h5> 
          </div>
          
          <div className='page2-bottom-heading page2flexClass page2-bottom-left-heading'>
            <h3 className='page2-commonClass page2-heading'>Skillset To Improve</h3>
            <h3 className='page2-commonClass page2-heading'>Your Company Brand</h3>
          </div>

          <div className="page2-bottom-left-para">
            <p>We are a One-Stop Solution for delivering the best web design and development services. We render customized and affordable web design facilities to suit your requirements. Choose the best plans for building a responsive web design according to your needs.</p>
          </div>

          <div className="page2-bottom-image-box">
            <div className="page2-bottom-inner-image-box page2flexClass">
              <div className="bottom-img-box">
                <img width="201" height="131" src={img1} alt=''/>
              </div>
              <div className="bottom-img-box">
                <img width="201" height="131" src={img4} alt=""/>
              </div>
            </div>
            <div className="page1-button">
                <div className="explore-btn">
                    <span>EXPLORE MORE</span>
                    <MdArrowRightAlt className='right-arrow'/>
                </div> 
            </div>
          </div>
        </div>

        <div className="page2-bottom-right-box page2flexClass">
          <div className="right-img-box">
            <img src={personImg} alt=""/>
          </div>
          <div className="right-goals-box page2flexClass">
            <div className="goals-box-heading">
              <h5>Goals</h5>
            </div>

            <div className="cover-marketing-box page2flexClass">
              <div className="cover-icon bottom-icon-common-class page2flexClass">
                <GiMegaphone />
              </div>
              <div className="cover-text">
                <div className="percent-box page2flexClass">
                  <h4>{formatCount2(coverCount)}</h4>
                  <h4>%</h4>
                </div>
                <div className="cover-para">
                  <p>Cover Marketing</p>
                </div>
              </div>
            </div>

            <div className="sms-marketing-box page2flexClass">
              <div className="marketing-icon bottom-icon-common-class page2flexClass">
                <TbMailOpenedFilled />
              </div>
              <div className="cover-text">
                <div className="percent-box page2flexClass">
                  <h4>{formatCount2(smsCount)}</h4>
                  <h4>%</h4>
                </div>
                <div className="cover-para">
                  <p>Sms Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
       
    </div>
  );
}


export default Page2
