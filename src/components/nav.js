import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import { MdHomeWork, MdRealEstateAgent} from 'react-icons/md';

export const Nav = (props) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 950px)").matches
  );


  useEffect(() => {

    window
      .matchMedia("(min-width: 950px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);


// <a href="http://localhost:8000/accounts/login/">LOG</a>
// <a href="https://serene-forest-42655.herokuapp.com/accounts/login/">LOG</a>

  return (
    <>
      <div className="header">
        <div className="headerTop">

          <div className="headerTopLeft" >
            <div className='customLogoDivNav'>
              <div className='customLogoBoxNav'>
                <MdRealEstateAgent className='customLogoNav'/>
              </div>
              <div className='logoTextNav'>
                S&R
              </div>
              <div className='logoTextBoxNav'>
                <div className='logoText2Nav'>
                  PROPERTY MANAGEMENT| LEASING | SALES
                </div>
              <div className='logoText3Nav'>
                REAL ESTATE SERVICES
              </div>
            </div>
          </div>
        </div>
        {!matches ?   null :<>
        <div className="headerTopMid">
          <NavLink className="links topLink firstLink" to="/login">
            Login
          </NavLink>
          <NavLink className="links topLink" to="/register">
            Register
          </NavLink>
        </div>
        <div className='socialLinkDivHead'>
          <p>555.555.5555</p>
          <FaFacebookSquare className='icons'/>
          <FaTwitterSquare className='icons'/>
          <FaPinterestSquare className='icons'/>
          <FaLinkedin className='icons'/>
          <FaGithubSquare className='icons'/>
        </div>
        </> }
      </div>

      <div className="nav">
        <NavLink  className="links firstLink" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/browse">
              Browse Homes
        </NavLink>
        <NavLink className="links" to="/show">
              Show
        </NavLink>
        <NavLink className="links" to="/owner_portal">
              Owner's Corner
        </NavLink>
        <NavLink className="links" to="/addHome">
              Add Home+
        </NavLink>
        <NavLink className="links" to="/services">
              Services
        </NavLink>
        <NavLink className="links" to="/about">
              About
        </NavLink>
        <NavLink className="links" to="/editProfile">
              EditProfile
        </NavLink>
        <button className='btn1 logOutBtn'>Logout</button>
      </div>
    </div>
  </>
  );
};
