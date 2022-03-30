import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { HomeShow } from "../pages/homeShow";
//only need props as a param if we are passing in props to this component (we are going to here).


const HouseCard= (props) => {


    let emptyHome = {... props.house }
    const [home, setHome] = useState(emptyHome)
    const [people, setPeople] = useState([])
    const [homes, setHomes] = useState([])
    const [photos, setPhotos] = useState([])

    let navigate = useNavigate();

    const handleChange = (event) => {
      setHome({ ...home, [event.target.name]: event.target.value })
    }

  return (
    <>
      <div className="houseCard" key={home.id}>
        <div className='houseCardPhotoDiv'>
          <img className="houseMainPhoto" src={home.coverphoto} />
        </div>
        <div className='houseCardInfo'>
          <h2><span className='colorText'>Rent: {home.rent} </span>/Month</h2>
          <h4 className='colorText'>Bed: {home.beds} bed(s)</h4>
          <h4 className='colorText'>Bath: {home.baths} bath(s)</h4>
          <h4 className='colorText'>Garage: {home.garage} car</h4>
          <h4>Street: {home.street}</h4>
          <h4>City: {home.city}</h4>
          <h4>State: {home.state}</h4>
          <h5>Type: {home.type}</h5>
          <h5>Owner: {home.owner}</h5>
          <button className='btn2' onClick={(e) => navigate('/show', {state:home})}> More Details</button>
        </div>
      </div>
    </>
  )
}

export default HouseCard
