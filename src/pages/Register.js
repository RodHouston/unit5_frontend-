import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const Register = () => {




  const [user, setUser] = useState({ image: "./proPic.webp" })
  const [users, setUsers] = useState([])
  const [userImage, setUserImage] = useState(user.image)
  const [toggle, setToggle] = useState(false);
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  let navigate = useNavigate();





  const handleCreate = (addPerson) => {
    axios
      .post('https://serene-forest-42655.herokuapp.com/api/users', addPerson)
      .then((response) => {
        console.log(response)

      })
    navigate('/login')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // perform all neccassary validations
    if (password !== confirmPass) {
      alert("Passwords don't match");
    } else {
      handleCreate(user)
    }
  }
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  const handleImage = (event) => {
    setUserImage(event.target.value)
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  const handlePass = (event) => {
    setPassword(event.target.value)
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  const handleConfirmPass = (event) => {
    setConfirmPass(event.target.value)

  }
  const handleConfirmCheck = (event) => {
    console.log('value ' +event.target.value);

  }



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
  return (
    <>
      <div className='registerBox' >
        <div className='regFormBox' >
          <form className='formReg' onSubmit={handleSubmit}>
            <img className='regImgPre' src={userImage} alt="" />
            <div className='pair'>
              <label htmlFor='image' > Image URL: </label>
              <input className="inputReg" type='text' name='image' defaultValue={user.userphoto} onChange={handleImage} required />
            </div>
            <div className='pair'>
              <label htmlFor='username' > UserName: </label>
              <input className="inputReg" type='text' name='fname' defaultValue={user.username} onChange={handleChange} placeholder="UserName" required />
            </div>
            <div className='pair'>
              <label htmlFor='email' > Email: </label>
              <input className="inputReg" type='email' name='email' defaultValue={user.enamil} onChange={handleChange} placeholder="Email" required />
            </div>
            <div className=' regSet' >
              <div className='pair2'>
                <label htmlFor='firstname' > First Name: </label>
                <input className="inputReg2 " name="firstname" type="text" defaultValue={user.firstname} onChange={handleChange} placeholder="First Name" required />
              </div>
              <div className='pair2 password'>
                <label htmlFor='lastname' > Last Name: </label>
                <input className="inputReg2 password" name="lastname" type="text" defaultValue={user.lastname}  onChange={handleChange} placeholder="Last Name" required />
              </div>
            </div>
            <div className='regSet'>
              <div className='pair2 '>
                <label htmlFor='password' > Password: </label>
                <input className="inputReg2 " name="password" type="password" defaultValue={user.password} pattern="^\S{6,}$" onChange={handlePass} placeholder="Password" required />
              </div>
              <div className='pair2 password'>
                <label htmlFor='password' > Confirm Password: </label>
                <input className="inputReg2 " name="password_two" type="password" pattern="^\S{6,}$" onChange={handleConfirmPass} placeholder="Verify Password" required />
              </div>
            </div>
            <div className=' checkBox'>
              <input type="checkbox" id="vehicle1" name="status" value="owner" onChange={handleConfirmCheck}/>
              <label htmlFor="vehicle1"> I am a home owner</label><br/>
            </div>
            <input className='btn1' type='submit' />
          </form>
        </div>
      </div>



    </>
  )
};
