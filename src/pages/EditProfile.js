import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";





export const EditProfile = () => {


  const [cU ,setCU] = useState(sessionStorage.getItem("name"))
  const [id,setId] = useState(sessionStorage.getItem("id"))
  const [username, setUserName] = useState();

  const [profiles, setProfiles] = useState([]);

  const location = useLocation();

  let emptyProfile = { user: id, userphoto: '', status:'' }
  const [profile, setProfile] = useState(emptyProfile)




  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value })
  }



  const getProfile = () => {
   axios
     .get('https://serene-forest-42655.herokuapp.com/api/profile')
     .then(
       (response) => setProfiles(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))

  }
  const handleCreateProfile = (addProfile) => {
    axios
      .post('https://serene-forest-42655.herokuapp.com/api/profile', addProfile)
      .then((response) => {
        console.log(response)
        getProfile()
      })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    handleCreateProfile(profile)
  }


console.log(profiles);
  // console.log(user);
  useEffect(() => {

    getProfile()
  }, [])



  return (
    <>
    <h1>hi</h1>


    <form className="addForm" onSubmit={handleSubmit}>
    <div className='set'>
      <div className='pair'>
      <label htmlFor="user">user: </label>
      <input className='input2' type="text" name="user" defaultValue={profile.user} onChange={handleChange} />
      </div>
      <div className='pair'>
      <label htmlFor="userphoto">Photo: </label>
      <input className='input2' type="text" name="userphoto" defaultValue={profile.userphoto} onChange={handleChange} />
      </div>
      <div className='pair'>
      <label htmlFor="status">Owner: </label>
      <select
        className="input2"
        name='status'
        defaultValue={profile.status}
        onChange={handleChange}>
        <option key="select-ANY" defaultValue='owner' >
          Owner
        </option>
        <option defaultValue='renter' >
          Renter/Tenant
        </option>
      </select>
      </div>
        <input type="submit" />
      </div>
      </form>
      <img src={profile.userphoto}/>
    </>
  )
};
