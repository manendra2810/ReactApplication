import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { GrSearch } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {

  const handleNavHamMenu = ()=>{
    const nav = document.querySelector(".navBar");
    const floatNavBox = document.querySelector(".navBarFloatBox");
    nav.classList.add('closePannel');
    nav.classList.remove('activePannel');
    floatNavBox.classList.add("activePannel")
    floatNavBox.classList.remove("closePannel")
  }

  const handleFloatBoxNavHamMenu = ()=>{
    const nav = document.querySelector(".navBar");
    const floatNavBox = document.querySelector(".navBarFloatBox");
    nav.classList.add('activePannel');
    nav.classList.remove('closePannel');
    floatNavBox.classList.add("closePannel")
    floatNavBox.classList.remove("activePannel")
  }
  
  return (
    <>
      <div className='navBar flexClass activePannel'>
        <div className="nav-part1 flexClass">
          <div className="ham-menu flexClass" onClick={handleNavHamMenu}>
              <RxHamburgerMenu className="nav_ham-menu active-pannel"/>
          </div>
          <div className="nav-item">
              <ul className='flexClass'>
                  <li>Home</li> 
                  <li>About</li>
                  <li>Services</li>
              </ul>
          </div>
        </div>

        <div className="logo flexClass">
          <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-black.webp"/>
        </div>

        <div className="nav-part2 flexClass">
          <div className="search-cartBox flexClass">
              <GrSearch className='searchIcon'/>
              <input type="search" placeholder='Search'/>
              <div className="line"></div>
              <FaShoppingBag className='cartBag'/>
          </div>
        </div>
      </div>






      <div className="navBarFloatBox flexClass closePannel">
        <div className="nav-box1">
          <div className="nav-floatBox-logo">
            <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/logo-white.webp" alt=""/>
          </div>

          <div className="close-img-box" onClick={handleFloatBoxNavHamMenu}>
            <IoClose className="nav-ham-menu-cross"/>
          </div>
        </div>

        <div className="nav-box2 flexClass">
          <div className="search-bar flexClass">
            <input type="search" placeholder='Search'/>
            <GrSearch className='searchIcon2'/>
          </div>
        </div>

        <div className="nav-box3">
          <div className="nav-box3-1">
            <div className="box3-nav-item">
              <ul className='flexClass'>
                <li>Home</li> 
                <li>About</li>
                <li>Services</li>
              </ul>
            </div>
          </div>

          <div className="nav-box3-2">
            <div className="box3-img-box">
              <a class=""> 
                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-1-1.webp" alt=""/>
              </a>
                
              <a class=""> 
                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-2-1.webp" alt=""/> 
              </a> 
                
              <a class=""> 
                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-3-1.webp" alt=""/> 
              </a> 
                
              <a class=""> 
                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-4.webp" alt=""/> 
              </a> 
                
              <a class=""> 
                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/p3-img-2.webp" alt=""/> 
              </a> 
                
              <a class=""> 
                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/p3-img-3.webp" alt=""/> 
              </a>
            </div>
          </div>
        </div>

        <div className="nav-box4 flexClass">
          <div className="box4-icon-box">
            <div className="box4-icon"><FaFacebook /></div>
            <div className="box4-icon"><FaXTwitter /></div>
            <div className="box4-icon"><FaInstagram /></div>
            <div className="box4-icon"><FaYoutube /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar