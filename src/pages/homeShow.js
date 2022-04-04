import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { Footer } from "../components/footer";
import { EditHome } from "./EditHome";



export const HomeShow = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  const [home, setHome] = useState(location.state)
  const [cU ,setCU] = useState(sessionStorage.getItem("name"))
// console.log(home.owner);

  useEffect(() => {
    // if(home== null){
    //   setHome(house)
    // }else{
    //   return
    // }
  }, [])
  return(
    <>
    {home == null ? <>
      <div className='fillPage'>
      <h1> Please Select Property to View</h1>
      <button className='btn1'  onClick={(e) => navigate('/browse')}>To Browse Page</button>
      </div>
      </>  :
      <div className="showDiv" >
        <div className="houseCardShow" key={home.id}>
          <div className='houseCardPhotoDivShow'>
            <img className="houseMainPhotoShow" src={home.coverphoto} />
            <button className='morePhotos btn1' onClick={(e) => navigate('/photos', {state:home})} > morePhotos</button>
            {cU === home.owner ?
            <a href="#edit" className='editLinkBtn btn1'>Edit</a>
            :null}
          </div>
          <div className="showDetailDiv" >
            <div className="showDetailDivEffect" >
            <h2>Property Description</h2>
            <p>{home.description}</p>
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
              <h2>Rent: {home.rent} </h2>
              <h4 >Bed: {home.beds} bed(s)</h4>
              <h4 >Bath: {home.baths} bath(s)</h4>
              <h4 >Garage: {home.garage} car</h4>
            </div>
            <div id='edit' className='houseCardInfoShowRight'>
              <h5>Street: {home.street}</h5>
              <h5>City: {home.city}</h5>
              <h5>State: {home.state}</h5>
              <h5>Type: {home.type}</h5>
              <h5>Id: {home.id}</h5>
              <h5>Id: {home.owner}</h5>
              <h4>Phone: 555-555-5555</h4>
            </div>
          </div>
        </div>
        {cU === home.owner ?
        <EditHome home={home} />
        :null}
      </div>
    }
    <Footer/>
  </>
  )
}
