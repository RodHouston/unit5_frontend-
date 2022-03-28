import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import Userfront from "@userfront/react";

Userfront.init("6bgmgg7b");

const SignupForm = Userfront.build({
  toolId: "kranrm"
});




async function regUser(credentials) {
   console.log('inside regUser');
 // return fetch('https://serene-forest-42655.herokuapp.com/currentuser/', {
 return fetch('http://127.0.0.1:8000/api/users/', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
  },
    body: JSON.stringify(credentials)
  })
   .then(data => data.json())
   .then( data=>{
   console.log('this is user '+ data.token);
  })
}

export const Register = () => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  // const [user, setUser] = useState({ image: "./proPic.webp" })
  // const [users, setUsers] = useState([])
  // const [userImage, setUserImage] = useState(user.image)
  // const [toggle, setToggle] = useState(false);
  // const [password, setPassword] = useState('')
  // const [confirmPass, setConfirmPass] = useState('')
  let navigate = useNavigate();




    const handleReg = async e => {
        e.preventDefault();
      regUser({username, password});
      // setToken(token);
      console.log('reg button hit ');
    }


  // const handleCreate = (addPerson) => {
  //   axios
  //     .post('https://serene-forest-42655.herokuapp.com/api/users', addPerson)
  //     .then((response) => {
  //       console.log(response)
  //
  //     })
  //   navigate('/login')
  // }
  //
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   // perform all neccassary validations
  //   if (password !== confirmPass) {
  //     alert("Passwords don't match");
  //   } else {
  //     handleCreate(user)
  //   }
  // }
  // const handleChange = (event) => {
  //   setUser({ ...user, [event.target.name]: event.target.value })
  // }
  // const handleImage = (event) => {
  //   setUserImage(event.target.value)
  //   setUser({ ...user, [event.target.name]: event.target.value })
  // }
  // const handlePass = (event) => {
  //   setPassword(event.target.value)
  //   setUser({ ...user, [event.target.name]: event.target.value })
  // }
  // const handleConfirmPass = (event) => {
  //   setConfirmPass(event.target.value)
  //
  // }
  // const handleConfirmCheck = (event) => {
  //   console.log('value ' +event.target.value);
  //
  // }



  // console.log(user);
  useEffect(() => {


  }, [])


  // <div className='pairs'>
  // <label htmlFor = 'password'> password: </label>
  // <input className='inputs1'  type='password' name='password' defaultValue={user.password} onChange={handleChange} required/>
  // </div>
  // <div className='pairs'>
  // <label htmlFor = 'rePassword'> rePassword: </label>
  // <input className='inputs1'  type='password' name='rePassword'  onChange={handleVerify} required/>
  // </div>


  // <div className='registerBox' >
  //   <div className='regFormBox' >
  //     <form className='formReg' onSubmit={handleSubmit}>
  //       <img className='regImgPre' src={userImage} alt="" />
  //       <div className='pair'>
  //         <label htmlFor='image' > Image URL: </label>
  //         <input className="inputReg" type='text' name='image' defaultValue={user.userphoto} onChange={handleImage} required />
  //       </div>
  //       <div className='pair'>
  //         <label htmlFor='username' > UserName: </label>
  //         <input className="inputReg" type='text' name='fname' defaultValue={user.username} onChange={handleChange} placeholder="UserName" required />
  //       </div>
  //       <div className='pair'>
  //         <label htmlFor='email' > Email: </label>
  //         <input className="inputReg" type='email' name='email' defaultValue={user.enamil} onChange={handleChange} placeholder="Email" required />
  //       </div>
  //       <div className=' regSet' >
  //         <div className='pair2'>
  //           <label htmlFor='firstname' > First Name: </label>
  //           <input className="inputReg2 " name="firstname" type="text" defaultValue={user.firstname} onChange={handleChange} placeholder="First Name" required />
  //         </div>
  //         <div className='pair2 password'>
  //           <label htmlFor='lastname' > Last Name: </label>
  //           <input className="inputReg2 password" name="lastname" type="text" defaultValue={user.lastname}  onChange={handleChange} placeholder="Last Name" required />
  //         </div>
  //       </div>
  //       <div className='regSet'>
  //         <div className='pair2 '>
  //           <label htmlFor='password' > Password: </label>
  //           <input className="inputReg2 " name="password" type="password" defaultValue={user.password} pattern="^\S{6,}$" onChange={handlePass} placeholder="Password" required />
  //         </div>
  //         <div className='pair2 password'>
  //           <label htmlFor='password' > Confirm Password: </label>
  //           <input className="inputReg2 " name="password_two" type="password" pattern="^\S{6,}$" onChange={handleConfirmPass} placeholder="Verify Password" required />
  //         </div>
  //       </div>
  //       <div className=' checkBox'>
  //         <input type="checkbox" id="vehicle1" name="status" value="owner" onChange={handleConfirmCheck}/>
  //         <label htmlFor="vehicle1"> I am a home owner</label><br/>
  //       </div>
  //       <input className='btn1' type='submit' />
  //     </form>
  //   </div>
  // </div>
  // <SignupForm />


  return (
    <>
    <div className="login-wrapper">
      <h1>Please Sign Up</h1>
      <form onSubmit={handleReg}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>

    </>
  )
};
