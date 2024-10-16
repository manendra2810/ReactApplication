import { MdArrowRightAlt } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import React from 'react'
import './Page8.css';
import './Page9.css';

const Page9 = () => {
  return (
    <div className='page9 page9flexClass'>
      <div className="footer-box">

        <div className="footer-box-top-section">
            <div className="footer-logo-box page9flexClass">
                VG Technologies
            </div>
            <div className="footer-section1-right-box page9flexClass">
                <h2>Ready To Get Started</h2>
                <div className="page1-button">
                    <div className="explore-btn">
                        <span>GET A DEMO</span>
                        <MdArrowRightAlt className='right-arrow'/>
                    </div> 
                </div>
            </div>
        </div>
        
        <div className="devider"></div>

        <div className="footer-center-box">
          <div className="center-box-1">
            <h2>Subscribe To Our</h2>
            <h2>Newsletter</h2>
            <div className="email-search-box">
              <input type="email" name="" id="" placeholder="enter your email"/>
              <button className="page9flexClass"><MdEmail /></button>
            </div>
          </div>

          <div className="center-box-2 page9-footer-center-box">
            <h2>Services</h2> 
            <ul>
              <li><a href="">Email Marketing</a></li>
              <li><a href="">Seo</a></li>
              <li><a href="">Business Strategy</a></li>
              <li><a href="">Print Materials</a></li>
            </ul>
          </div>

          <div className="center-box-3 page9-footer-center-box">
            <h2>About</h2>
            <ul>
              <li><a href="">Our Story</a></li>
              <li><a href="">Benefits</a></li>
              <li><a href="">Team</a></li>
              <li><a href="">Careers</a></li>
            </ul>
          </div>

          <div className="center-box-4 page9-footer-center-box">
            <h2>Navigation</h2>
            <ul>
              <li><a href="">Email Marketing</a></li>
              <li><a href="">Campaign</a></li>
              <li><a href="">Branding</a></li>
              <li><a href="">Offline</a></li>
            </ul>
          </div>

          <div className="center-box-5 page9-footer-center-box">
            <h2>Help</h2>
            <ul>
              <li><a href="">FAQs</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="devider"></div>

        <div className="footer-box-top-section page9flexClass">
            <div className="footer-bottom-icon-box page9flexClass">
                <div className="footer-icon"><FaFacebook /></div>
                <div className="footer-icon"><FaXTwitter /></div>
                <div className="footer-icon"><FaInstagram /></div>
                <div className="footer-icon"><FaYoutube /></div>
            </div>
            <div className="footer-section1-right-box page9flexClass footer-bottom-text">
                <p>2024 ThemeXriver</p>
                <div className="dash"></div>
                <a href="">All Rights Reserve</a>
            </div> 
        </div>

      </div>
    </div>
  )
}

export default Page9
