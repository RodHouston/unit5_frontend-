import React, { useState, useEffect } from 'react'
import HouseCard from '../components/houseCard'
import Type from '../components/Type'
import { useNavigate } from "react-router-dom";
import { BiArrowFromTop, BiArrowFromBottom  } from 'react-icons/bi';
import { Footer } from "../components/footer";

import axios from 'axios'


export const BrowseHomes = (props) => {


  let emptyHome = { owner: '', type: '', street:'', city:'', state:'', }
  const [home, setHome] = useState(emptyHome)

  const [homes, setHomes] = useState([])

  const [query, setQuery] = useState("")
  const [type, setType] = useState("ANY");




  const [toggle, setToggle] = useState(false);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 950px)").matches
  );

  const show = () => {
    setToggle((prevState) => !prevState);
  }



  const getHomes = () => {
   axios
     .get('https://serene-forest-42655.herokuapp.com/api/homes')
     .then(
       (response) => setHomes(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))
  }


  const handleCreateHome = (addHome) => {
    axios
      .post('https://serene-forest-42655.herokuapp.com/api/homes', addHome)
      .then((response) => {
        console.log(response)
        getHomes()
      })
  }




  // <div className='set'>
  // {!matches ?   null :<>
  //   <div className='pair'>
  //   <label htmlFor="rent">Bed: </label>
  //   <input className="input2" placeholder="Beds" onChange={event => setQuery(event.target.value)} />
  // </div>
  //
  // <div className='pair'>
  //   <label htmlFor="rent">Bath: </label>
  //   <input className="input2" placeholder="Baths" onChange={event => setQuery(event.target.value)} />
  // </div>
  // <div className='pair'>
  //   <label htmlFor="rent">Min Rent: </label>
  //   <input className="input2" placeholder="Minimum Rent" onChange={event => setQuery(event.target.value)} />
  // </div>
  // <div className='pair'>
  //   <label htmlFor="rent">Max Rent: </label>
  //   <input className="input2" placeholder="Maximum Rent" onChange={event => setQuery(event.target.value)} />
  // </div>
  // </>
  // }
  // </div>

  useEffect(() => {

   getHomes()

   window
     .matchMedia("(min-width: 950px)")
     .addEventListener("change", (e) => setMatches(e.matches));
  }, [])
  return (
    <>

    <div className="searchHomesDiv" style={{ height: toggle ? "200px" : "45px" }}>
      <div className='searchTitle'>
        <div className='sTitle' onClick={(event) => show()} style={{ width: toggle ?  "310px": "100%" }  }>
          {toggle ? <BiArrowFromBottom className='iconArrow' /> :

          <BiArrowFromTop className='iconArrow' />}
          <h2 > Find The Perfect Home </h2>
          {toggle ? <BiArrowFromBottom className='iconArrow' /> :

          <BiArrowFromTop className='iconArrow' />}
        </div>
      </div>
      <div className='searchForm' >
        <div className='pair'>
          <label htmlFor="rent" >Search: </label>
          <input className="input2" placeholder="Search For Property by keywords, address, city or state" onChange={event => setQuery(event.target.value)} />
        </div>



        <div className='pair'>
          <label htmlFor='properties'>Property Type:</label>
          <select
            className="input2"
            value={homes.type}
            onChange={event => setType(event.target.value)}>
            <option key="select-ANY" value="ANY">
              ANY
            </option>
            {Type.map((type) => (
            <option key={"select-" + type} value={type}>
              {type}
            </option>
            ))}
          </select>
        </div>

    </div>
  </div>
  <div className="homesDiv">

    <div className="homesDiv2">

      {homes.filter(home => {
        if(type==="ANY"){
          if (home === '') {
            return home;
          }else if ((home.state!== null && home.state.toLowerCase().includes(query.toLowerCase()) || (home.type!== null &&  home.type.toLowerCase().includes(query.toLowerCase())) || (home.city != null && home.city.toLowerCase().includes(query.toLowerCase())))) {
            return home;
          }
          }else if((type == home.type && (home.state !== null && home.state.toLowerCase().includes(query.toLowerCase()) || (home.city  != null && home.city .toLowerCase().includes(query.toLowerCase()))))){
            return home;
          }
        }).reverse().map((home) => {
          return (
            <div key={home.id}>
            <h1> {home.size}</h1>
              <HouseCard house={home} />
            </div>
            )}
          )}
        </div>
      </div>
      <Footer/>
    </>
  )
}
