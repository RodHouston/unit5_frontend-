
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'
import { BiArrowFromTop, BiArrowFromBottom, BiMessageDots } from 'react-icons/bi';
import TextTransition, { presets } from "react-text-transition";
import { Footer } from "../components/footer";



const TEXTS = [
  "PROPERTY",
  "FINANCES ",
  "SERVICES",
  "LIFE"
];

export const OwnersPortal = (props) => {



// const [currentUser,setCurrentUser] = useContext(UserContext)
    const location = useLocation();
    // const [currentUser, setCurrentUser] = useContext(UserContext)
    const [people, setPeople] = useState([])
    const [homes, setHomes] = useState([])
    const [photos, setPhotos] = useState([])
    const [profile, setProfile] = useState([])
    const [cU ,setCU] = useState(sessionStorage.getItem("name"))
    const [isLoading, setIsLoading] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);

    const [index, setIndex] = React.useState(0);

    let navigate = useNavigate();

    const show = () => {
      setToggle((prevState) => !prevState);
    }

    const [matches, setMatches] = useState(
      window.matchMedia("(min-width: 950px)").matches
    );

    const getPeople = () => {
     axios
       .get('https://serene-forest-42655.herokuapp.com/api/users')
       .then(
         (response) => setPeople(response.data),
         (err) => console.error(err)
       )
       .catch((error) => console.error(error))
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

    const getPhotos = () => {
     axios
       .get('https://serene-forest-42655.herokuapp.com/api/photos')
       .then(
         (response) => setPhotos(response.data),
         (err) => console.error(err)
       )
       .catch((error) => console.error(error))
    }
    const getProfile = () => {
     axios
       .get('https://serene-forest-42655.herokuapp.com/api/profile')
       .then(
         (response) => setProfile(response.data),
         (err) => console.error(err)
       )
       .catch((error) => console.error(error))
    }
    // {profile.map((pro) => {
    //   return(
    //     <>
    //     {profile.user == peep.id ? null:
    //       <p>{peep.first_name}</p>
    //
    //     }
    //     </>
    //   )
    // }
  // )}
  function MouseOver(event) {
          setToggle2((prevState) => !prevState);
        }
        function MouseOut(event){
          setToggle2((prevState) => !prevState);
        }

  // console.log(cU) ;
  // console.log(props.name);

  useEffect(() => {
   getPeople()
   getHomes()
   getPhotos()
   getProfile()
   setIsLoading(false);
   const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000
    );
    return () => clearTimeout(intervalId);
    window
      .matchMedia("(min-width: 950px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [])


  return(
    <>
    {!isLoading && (
      <>
    {people.map((peep) => {
      return(
        <div key={peep.id + " peep"}>
        {peep.username === cU ?
          <>
            <div className="proDiv" >
            <h1 className='title'>Owner's Corner Welcome {peep.first_name}</h1>
            {profile.map((pro) => {
              return(
                <div key={pro.id + " pro"}>
                {pro.user === peep.id ?
                  <>
                    <div className='proContent'>
                      <div className='proPicDivEffect'>
                        <div className='spacer'>
                          <h2 className='colorText'>{peep.first_name} {peep.last_name} </h2>
                          <p>email: {peep.email} </p>
                          <p>phone: 555.555.1515 </p>
                        </div>
                        <div className='proPicDiv'>
                          <div className='proPicDiv2'>

                            <img className='userPic' src={ pro.userphoto } />
                          </div>
                        </div>
                        <div className='spacer'>
                          <p>
                            <span className='editLink' onClick={(e) => navigate('/editProfile', {state:pro})}>Edit Profile </span>
                            |
                            <span className='editLink addPropLink' onClick={(e) => navigate('/addHome', {state:pro})}>Add Property</span>
                          </p>

                        <div className="search-container">
                        <form className='messageForm'>
                          <input className='messageInput input2' type="text" placeholder="Quick Message" name="search"/>
                          <button className='messageButton' type="submit">
                            < BiMessageDots className='messageIcon' />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='proHomes'>
                    <h2 className='subTitle2'>
                    MANAGING
                    <TextTransition
                      className='subTitle2 colorText'
                      text={ TEXTS[index % TEXTS.length] }
                      // springConfig={presets.slow}
                      springConfig={presets.gentle}
                      style={{ margin: "0 4px" }}
                      inline
                      overflow
                    />
                    SO YOU DONT HAVE TO
                    </h2>
                    <div className="searchHomesDiv" style={{ height: toggle ? "220px" : "45px" }}>
                      <div className='searchTitle'>
                        <div className='sTitle' onClick={(event) => show()} style={{ width: toggle ?  "310px": "100%" } }>
                          {toggle ? <BiArrowFromBottom className='iconArrow' /> :
                          <BiArrowFromTop className='iconArrow' />}
                          <h2>Request A Service</h2>
                          {toggle ? <BiArrowFromBottom className='iconArrow' /> :
                          <BiArrowFromTop className='iconArrow' />}
                        </div>
                      </div>
                      <div className='proSeviceList'>
                        <div className="servicGrid">
                          <div className="gridSet">
                            <div className="gridPair">
                              <div className="serviceItems">MARKETING THE PROPERTY</div>
                              <div className="serviceItems">FINDING GOOD TENANTS</div>
                            </div>
                            <div className="gridPair">
                              <div className="serviceItems">RENT COLLECTION & OWNER DISTRIBUTIONS</div>
                              <div className="serviceItems">24/7 MAINTENANCE</div>
                            </div>
                          </div>
                          {!matches ?   null :<>
                          <div className="gridSet">
                            <div className="gridPair">
                              <div className="serviceItems">PROPERTY TURNOVER MANAGEMENT</div>
                              <div className="serviceItems">INSPECTIONS</div>
                            </div>
                            <div className="gridPair">
                              <div className="serviceItems">LAWN CARE</div>
                              <div className="serviceItems">DEDICATED POINT OF CONTACT</div>
                            </div>
                          </div>
                          </>}
                          </div>
                        </div>
                      </div>
                      <h1 className='subTitle'>Your Properties</h1>
                      <div className="homeBoxPro">
                      {homes.filter(home => home.owner == peep.username).reverse().map(filteredHome => (
                        <div className='houseContainerPro' key={filteredHome.id}  >
                          <div className="houseCardProfile" >
                            <div className='houseCardPhotoDivPro'>
                              <img className="houseMainPhotoPro" src={filteredHome.coverphoto} onClick={(e) => navigate('/show', {state:filteredHome})} />
                            </div>
                            <div className='houseCardInfoPro'>
                              <h4>Street: {filteredHome.street}</h4>
                              <h4>City: {filteredHome.city}</h4>
                              <h4>State: {filteredHome.state}</h4>
                              <h5>Type: {filteredHome.type}</h5>

                            </div>
                          </div>
                          <button className='btn2 center' onClick={(e) => navigate('/show', {state:filteredHome})}> Edit / Delete</button>

                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </>
              :null}
              </div>
            )})}
          </div>
        </>
      :null}
    </div>
    )})}
  </>
  )}
  <Footer/>
  </>
  )
}
