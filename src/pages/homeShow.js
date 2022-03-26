import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

export const HomeShow = (props) => {

  const location = useLocation();

  const [home, setHome] = useState(location.state)
  let emptyHome = { owner: '', type: '', street:'', city:'', state:'', }


  const [house, setHouse] = useState(emptyHome)


  useEffect(() => {
    // if(home== null){
    //   setHome(house)
    // }else{
    //   return
    // }
  }, [])
  return(
    <>
    {home == null ? <h1> Turn back</h1> :
      <div className="showDiv" >
        <div className="houseCardShow" key={home.id}>
          <div className='houseCardPhotoDivShow'>
            <img className="houseMainPhotoShow" src={home.coverphoto} />
            <button className='morePhotos btn1'> morePhotos</button>
          </div>
          <div className="showDetailDiv" >
            <div className="showDetailDivEffect" >
            <h2>Property Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
              <div className='socialLinkDiv'>
              <FaFacebookSquare className='icons'/>
              <FaTwitterSquare className='icons'/>
              <FaPinterestSquare className='icons'/>
              <FaLinkedin className='icons'/>
              <FaGithubSquare className='icons'/>

              </div>
            </div>
          </div>
          <div className='houseCardInfoShow'>
            <div className='houseCardInfoShowLeft'>
              <h2>Rent: $$$$$$ </h2>
              <h4 >Bed: 4 bed(s)</h4>
              <h4 >Bath: 2 bath(s)</h4>
              <h4 >Garage: 2 car</h4>
            </div>
            <div className='houseCardInfoShowRight'>
              <h5>Street: {home.street}</h5>
              <h5>City: {home.city}</h5>
              <h5>State: {home.state}</h5>
              <h5>Type: {home.type}</h5>
              <h5>Id: {home.id}</h5>
              <h4>Phone: 555-555-5555</h4>
            </div>
          </div>
        </div>
        <div className="showBottomDiv" >

        </div>
      </div>
    }


    </>
  )
}
