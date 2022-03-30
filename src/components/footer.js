import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { MdHomeWork, MdRealEstateAgent} from 'react-icons/md';
import {FaReact, FaNode} from 'react-icons/fa';
import {DiDjango, DiPostgresql} from 'react-icons/di';

export const Footer = (props) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 950px)").matches
  );

  useEffect(() => {

    window
      .matchMedia("(min-width: 950px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);


return(
  <>


  <div className='footer'>
    <div className='footerlinks'>

      <ul>
      <h3>FOR OWNERS:</h3>
      <br/>
      <li>For Owners</li>
      <li>For Owners</li>
      <li>For Owners</li>
      <li>For Owners</li>
      <li>For Owners</li>
      </ul>
      <ul>
      <h3>FOR RENTERS:</h3>
      <br/>
      <li>For Renters</li>
      <li>For Renters</li>
      <li>For Renters</li>
      <li>For Renters</li>
      <li>For Renters</li>
      </ul>
      {!matches ? null: <>
        <ul>
        <h3>CONTACT US:</h3>
        <br/>
        <li>Contact Us</li>
        <li>Contact Us</li>
        <li>Contact Us</li>
        <li>Contact Us</li>
        <li>Contact Us</li>
        </ul>
        <ul>
      <h3>OUR COMPANY:</h3>
      <br/>
      <li>Our Company</li>
      <li>Our Company</li>
      <li>Our Company</li>

      </ul>
      </>
    }
    </div>
    <div className='footerLogoDiv'>
    <div>
    <FaReact className='footerLogo' />
    <DiDjango className='footerLogo'/>
    <FaNode className='footerLogo'/>
    <DiPostgresql className='footerLogo'/>
    </div>

    <div className='customLogoDiv'>
    <div className='customLogoBox'>
      <MdRealEstateAgent className='customLogo'/>
      </div>
      <div className='logoText'>
        S&R
      </div>
      <div className='logoTextBox'>
      <div className='logoText2'>
        PROPERTY MANAGEMENT| LEASING | SALES
        </div>
        <div className='logoText3'>
        REAL ESTATE SERVICES
      </div>
      </div>
    </div>


    </div>
    <div className='footerText'>
    <p>© 2022 S&R Property Management, LLC. All Rights Reserved. Website
    created by Roderick Houston Contact Us Privacy Policy</p>

  </div>
  </div>
  </>
);
};
