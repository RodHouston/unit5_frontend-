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

    const goToShow =(house) => {


      navigate('/show', {home:house})
    }



  return (
    <>
      <div className="houseCard" key={home.id}>
        <div className='houseCardPhotoDiv'>
          <img className="houseMainPhoto" src={home.coverphoto} />
        </div>
        <div className='houseCardInfo'>
          <h2><span className='colorText'>Rent: $$$$$$ </span>/Month</h2>
          <h4 className='colorText'>Bed: 4 bed(s)</h4>
          <h4 className='colorText'>Bath: 2 bath(s)</h4>
          <h4 className='colorText'>Garage: 2 car</h4>
          <h4>Street: {home.street}</h4>
          <h4>City: {home.city}</h4>
          <h4>State: {home.state}</h4>
          <h5>Type: {home.type}</h5>
          <h5>Id: {home.id}</h5>
          <button className='btn2' onClick={(e) => navigate('/show', {state:home})}> More Details</button>
        </div>
      </div>
    </>
  )
}

export default HouseCard
