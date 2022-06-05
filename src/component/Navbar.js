import React from 'react';
import "../styles/Navbar.css";
import { AiOutlineHome } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import {AiOutlineLock} from 'react-icons/ai';

const Navbar = () => {
  return (
        <div className = "NavbarBack">
          <div className = "NavbarStyle">
            <div className = "NavLink">
              <AiOutlineHome />
            </div>
            <div className = "NavLink">
              You're in India
            </div>
            <div className = "NavLink">
              Our Products
            </div>
            <div className = "NavLink">
              Promotions
            </div>
            <div className = "NavLink">
              Services
            </div>
            <div className = "NavLink">
              Help
            </div>
            <div className = "NavLink">
              <BiSearchAlt />
            </div>
          </div>
          <div className = "NavBtn">
            <div className = "NavBtnLink">
              < AiOutlineLock/> Login
            </div>
          </div>
        </div>
  );
};


export default Navbar;