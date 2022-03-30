import React, { useState, useEffect } from 'react'
import Type from '../components/Type'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const EditHome = (props) => {

  const [cU ,setCU] = useState(sessionStorage.getItem("name"))
  let emptyHome = {...props.home}
  const [home, setHome] = useState(emptyHome)
  const [people, setPeople] = useState([])
  const [homes, setHomes] = useState([])
  const [photos, setPhotos] = useState([])

  let navigate = useNavigate();



  const handleChange = (event) => {
    setHome({ ...home, [event.target.name]: event.target.value })

    console.log('this is owner ' +home.owner);

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


  const handleUpdate = (editHome) => {
  console.log(editHome)
  axios
    .put('https://serene-forest-42655.herokuapp.com/api/homes/' + editHome.id, editHome)
    .then((response) => {
      navigate('/browse' )
      console.log('edited');
      // navigate('/show' )
    })
  }

  const handleCreateHome = (addHome) => {
    axios
      .post('https://serene-forest-42655.herokuapp.com/api/homes', addHome)
      .then((response) => {

      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('sub');
    console.log(home.owner);
    handleUpdate(home)
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

// <img src={home.coverphoto} />
  const handleCreatePhoto = (addPhoto) => {
    axios
      .post('https://serene-forest-42655.herokuapp.com/api/photos', addPhoto)
      .then((response) => {
        console.log(response)
        getHomes()
      })
  }
  useEffect(() => {


  }, [])
// onClick={(e) => {handeleCover(peep.id)}}
// onSubmit={handleSubmit}

  return (
    <>
      <div className="editDiv">
      <img className="homeEditPhoto"  src={home.coverphoto} />
      <div className="edHomesDiv">
        <form className="addForm" onSubmit={handleSubmit}  >
        <div className='set'>
          <div className='pair'>
          <label htmlFor="coverphoto">Photo: </label>
          <input className='input2' type="text" name="coverphoto" defaultValue={home.coverphoto} onChange={handleChange} />
          </div>
          <div className='pair'>
            <label htmlFor='type'>Property Type:</label>
            <select
              className="input2"
              name='type'
              defaultValue={homes.type}
              onChange={handleChange}>
              <option key="select-ANY" defaultValue={home.type}>
                {home.type}
              </option>
              {Type.map((type) => (
                <option key={"select-" + type} defaultValue={home.type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className='pair'>
          <label htmlFor="beds">Bed: </label>
          <input className='input2' type="number" name="beds" defaultValue={home.beds} onChange={handleChange} />
          </div>
          <div className='pair'>
          <label htmlFor="baths">Bath: </label>
          <input className='input2' type="number" name="baths" defaultValue={home.baths} onChange={handleChange} />
          </div>
          <div className='pair'>
          <label htmlFor="garage">Garage: </label>
          <input className='input2' type="number" name="garage" defaultValue={home.garage} onChange={handleChange} />
          </div>
          </div>
          <div className='set'>

          <div className='pair'>
          <label htmlFor="rent">Rent: </label>
          <input className='input2' type="text" name="rent" defaultValue={home.rent} onChange={handleChange} />
          </div>
          <div className='pair'>
          <label htmlFor="street">Street: </label>
          <input className='input2' type="text" name="street" defaultValue={home.street} onChange={handleChange} />
          </div>
          <div className='pair'>
          <label htmlFor="city">City: </label>
          <input className='input2' type="text" name="city" defaultValue={home.city} onChange={handleChange} />
          </div>
          <div className='pair'>
          <label htmlFor="state">State</label>
            <select className='input2' id="state" name="state" defaultValue={home.state} onChange={handleChange}>
              <option defaultValue='--'>---</option><option defaultValue="Alabama">Alabama</option><option defaultValue="Alaska">Alaska</option><option defaultValue="Arizona">Arizona</option><option defaultValue="Arkansas">Arkansas</option><option defaultValue="California">California</option><option defaultValue="Colorado">Colorado</option><option defaultValue="Connecticut">Connecticut</option><option defaultValue="Delaware">Delaware</option><option defaultValue="District of Columbia">District of Columbia</option><option defaultValue="Florida">Florida</option><option defaultValue="Georgia">Georgia</option><option defaultValue="Guam">Guam</option><option defaultValue="Hawaii">Hawaii</option><option defaultValue="Idaho">Idaho</option><option defaultValue="Illinois">Illinois</option><option defaultValue="Indiana">Indiana</option><option defaultValue="Iowa">Iowa</option><option defaultValue="Kansas">Kansas</option><option defaultValue="Kentucky">Kentucky</option><option defaultValue="Louisiana">Louisiana</option><option defaultValue="Maine">Maine</option><option defaultValue="Maryland">Maryland</option><option defaultValue="Massachusetts">Massachusetts</option><option defaultValue="Michigan">Michigan</option><option defaultValue="Minnesota">Minnesota</option><option defaultValue="Mississippi">Mississippi</option><option defaultValue="Missouri">Missouri</option><option defaultValue="Montana">Montana</option><option defaultValue="Nebraska">Nebraska</option><option defaultValue="Nevada">Nevada</option><option defaultValue="New Hampshire">New Hampshire</option><option defaultValue="New Jersey">New Jersey</option><option defaultValue="New Mexico">New Mexico</option><option defaultValue="New York">New York</option><option defaultValue="North Carolina">North Carolina</option><option defaultValue="North Dakota">North Dakota</option><option defaultValue="Northern Marianas Islands">Northern Marianas Islands</option><option defaultValue="Ohio">Ohio</option><option defaultValue="Oklahoma">Oklahoma</option><option defaultValue="Oregon">Oregon</option><option defaultValue="Pennsylvania">Pennsylvania</option><option defaultValue="Puerto Rico">Puerto Rico</option><option defaultValue="Rhode Island">Rhode Island</option><option defaultValue="South Carolina">South Carolina</option><option defaultValue="South Dakota">South Dakota</option><option defaultValue="Tennessee">Tennessee</option><option defaultValue="Texas">Texas</option><option defaultValue="Utah">Utah</option><option defaultValue="Vermont">Vermont</option><option defaultValue="Virginia">Virginia</option><option defaultValue="Virgin Islands">Virgin Islands</option><option defaultValue="Washington">Washington</option><option defaultValue="West Virginia">West Virginia</option><option defaultValue="Wisconsin">Wisconsin</option><option defaultValue="Wyoming">Wyoming</option>
            </select>
          </div>
          </div>
          <div className='pair'>
          <label htmlFor="description">Description: </label>
          <textarea className='input2' rows="5" cols="60" type="text" name="description" defaultValue={home.description} onChange={handleChange} />
          </div>
          <input className='btn2' type='submit' />
          <button className='btnDelete' id='delete'  value={home.id}>Delete</button>
        </form>
      </div>


      </div>
    </>
  )
}
