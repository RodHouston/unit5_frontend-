import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";





export const EditProfile = () => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  let [profiles, setProfiles] = useState([])

  let emptyProfile = { user: '', userphoto: '', status:'', }
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
    {profiles.map((pro) => {
      return(
        <>
        <img src={pro.userphoto}/>
      <h1>hello</h1>
      </>
    )
    })}

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
      <input className='input2' type="text" name="status" defaultValue={profile.status} onChange={handleChange} />
      </div>
        <input type="submit" />
      </div>
      </form>

    </>
  )
};
