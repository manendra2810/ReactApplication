import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from 'react';
import personFirstImg from '../../assets/images/person-first.jpg';

const Page1 = () => {
    const [style, setStyle] = useState({});

    useEffect(() => {

        //code for element to animate on mouse move------------------------------- 
        const handleMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;
            const moveX = (x / window.innerWidth - 0.5) * 10; // Adjust the multiplier for more or less movement
            const moveY = (y / window.innerHeight - 0.5) * 10;
        
            setStyle({
                transform: `translate(${moveX}px, ${moveY}px)`,
                transition: `none`
            });
        };
    
        window.addEventListener('mousemove', handleMouseMove);


        // code for element to slide on scroll -----------------------------------------
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of element is visible
        };
      
        const scrollAnimateHeading = (el, animateClass)=>{
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(animateClass);
                    }
                });
            });

            observer.observe(el);
        }
    
        const elements = document.querySelectorAll('.commonClass');
        elements.forEach((el)=>{
            scrollAnimateHeading(el, "animate");
        },options);

        const slide2 = document.querySelectorAll('.slide2Before');
        slide2.forEach((el)=>{
            scrollAnimateHeading(el, "slideAnimate");
        },options);

        const slide3 = document.querySelectorAll('.slide3Before');
        slide3.forEach((el)=>{
            scrollAnimateHeading(el, "slideAnimate");
        },options);

        const slide4 = document.querySelectorAll('.slide4Before');
        slide4.forEach((el)=>{
            scrollAnimateHeading(el, "slideAnimate");
        },options);

        const slideUpImage = document.querySelectorAll('.slideUpImg');
        slideUpImage.forEach((el)=>{
            scrollAnimateHeading(el, "slideUpAnimate"); 
        }, options);
 

    },[]);

  return (
    <div className='page1 flexClass'>
        <div className="page1-content">
            <div className="slide1">
                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/h1-il-4.webp" alt="" style={style}/>
            </div>
            <span>Trendy Collection’s</span>
            <div>
                <h1 className='commonClass page1-heading'>Building</h1>
                <h1 className='commonClass page1-heading'>A Better You</h1>
            </div>
            <p>100% Trusted and Registered Company in India with a professional website that provides the best web development and web design services in India. We are a company that offers multi-functional web portals, and we make sure that a well-developed and attractive website can help our clients to record ROI-driven results.</p>
            <div className="page1-button">
                <div className="explore-btn">
                    <span>EXPLORE MORE</span>
                    <MdArrowRightAlt className='right-arrow'/>
                </div> 
                <div className="play-btn-box">
                    <div className="playBtn-blink">
                        <div className="playBtn">
                            <FaPlay />
                        </div>
                    </div>
                    <span>Play Video</span>
                </div>
            </div>
        </div> 

        <div className="page1-img">
            <div className="page1-box">
                <div className="image-bg-box">
                    <img className='slideUpImg' src={personFirstImg} alt=""/>
                </div>
                <div className="blinking-circle blinking-circle1"></div>
                <div className="blinking-circle blinking-circle2"></div>
                <div className="slide2">
                    <img className='slide2Before' src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/h1-il-2.webp" alt="" style={style}/>
                </div>
                <div className="slide3">
                    <img className='slide3Before' src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/h1-il-3.webp" alt="" style={style}/>
                </div>
                <div className="slide4">
                    <img className='slide4Before' src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/h1-il-1.webp" alt="" style={style}/>
                </div>
            </div>
        </div>

        <div className="blinking-circle"></div>
    </div>
  )
}

export default Page1
