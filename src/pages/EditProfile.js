import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";





export const EditProfile = (props) => {

  const userRef = useRef();
  const errRef = useRef();
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);




  const [cU ,setCU] = useState(sessionStorage.getItem("name"))
  const [id,setId] = useState(sessionStorage.getItem("id"))
  const [username, setUserName] = useState();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const [profiles, setProfiles] = useState([]);

  const location = useLocation();



  let eProfile = {...props.profile }
  const [profile, setProfile] = useState(eProfile)

  let eUser = { ...props.user }
  const [user, setUser] = useState(eUser)




  const handleChange =  (event) => {
     setProfile({ ...profile, [event.target.name]: event.target.value })
  }

  const getProfile = async () => {
  await axios
     .get('https://serene-forest-42655.herokuapp.com/api/profile')
     .then(
       (response) => setProfiles(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))

  }

  const handleUpdatePro = async (editPro) => {
  console.log(editPro)
    await axios
    .put('https://serene-forest-42655.herokuapp.com/api/profile/' + editPro.id, editPro)
    .then((response) => {

      console.log('edited');
      // navigate('/show' )
    })
  }


  const handleUpdateUser = (editUser) => {
  return fetch('https://serene-forest-42655.herokuapp.com/api/users/' + editUser.id, {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json'
   },
     body: JSON.stringify(editUser)
   })
    .then(data => data.json())
    .then( data=>{
        console.log(data)

       let pro = { user: data.id, userphoto: profile.userphoto, status: profile.status }
       console.log(pro)
     })
   }


  // const handleUpdateUser = (editUser) => {
  // console.log(editUser)
  // axios
  //   .put('https://serene-forest-42655.herokuapp.com/api/users/' + editUser.id, editUser)
  //   .then((response) => {
  //
  //     console.log('edited');
  //
  //   })
  // }






  const handlePro = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value })
  }
  const handleUser= (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    handleUpdatePro(profile)
    handleUpdateUser(user)
  }


// console.log(profiles);
  // console.log(user);
  useEffect(() => {

    getProfile()
  }, [])



  return (
    <>

    <div className='registerBox' >
      <div className='regFormBox' >

        <form className='formReg' onSubmit={handleSubmit}>
          <div className='regSet'>
            <label>
              Username
            </label>
            <input className="inputReg2"
              type="text"
              onChange={handleUser}
              defaultValue={eUser.username}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
          </div>
          <p className={userFocus && username && !validName ? "instructions" : "offscreen"}>
            4 to 24 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <div className='pair'>
            <label htmlFor='email' > Email: </label>
            <input className="inputReg"
            type='email' name='email'
            onChange={handleUser}
            placeholder="Email" required
            defaultValue={eUser.email}
            />
          </div>
          <div className=' regSet' >
            <div className='pair2 password'>
              <label htmlFor='firstname' > First Name: </label>
              <input className="inputReg2 "
              name="first_name" type="text"
              onChange={handleUser}
              placeholder="First Name" required
              defaultValue={eUser.first_name}/>
            </div>
            <div className='pair2 password'>
              <label htmlFor='lastname' > Last Name: </label>
              <input className="inputReg2 password"
              name="last_name" type="text"
              onChange={handleUser}
              placeholder="Last Name"
              defaultValue={eUser.last_name} required />
            </div>
          </div>

          <div className='regSet'>

            <div className='pair'>
            <label htmlFor="userphoto">Photo: </label>
            <input className='input2'
            type="text" name="userphoto"
            defaultValue={eProfile.userphoto}
            onChange={handlePro}
            />
            </div>
            <div className='pair'>
            <label htmlFor="status">Owner: </label>
            <select
              className="input2"
              name='status'
              onChange={handlePro}
              defaultValue={eProfile.status}>
              <option key="select-ANY" defaultValue='owner' >
                Owner
              </option>
              <option defaultValue='renter' >
                Renter/Tenant
              </option>
            </select>
            </div>

            </div>

            <img src={eProfile.userphoto}/>
          <button className='btn2' type="submit" >Submit</button>
        </form>

      </div>
    </div>
  </>

  )
};
