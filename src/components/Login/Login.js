import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";



export default function Login(props) {

  const [people, setPeople] = useState([])
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const [passwordShown, setPasswordShown] = useState(false);

  let navigate = useNavigate();


  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const getPeople = () => {
   axios
     .get('https://serene-forest-42655.herokuapp.com/api/users')
     .then(
       (response) => setPeople(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))
  }

  async function loginUser(credentials) {
   // return fetch('https://serene-forest-42655.herokuapp.com/currentuser/', {
   return fetch("https://serene-forest-42655.herokuapp.com/auth/", {
      method: "POST",
      headers: {
       "Content-Type": "application/json"
    },
      body: JSON.stringify(credentials)
    }).then((response) => {;
      if (response.ok){
        return people.map((peep) => {
          // console.log('pressed '+ peep.username)
          if(peep.username === username){
            console.log('we in here  ' + peep.username);
            sessionStorage.setItem("name", peep.username);
            sessionStorage.setItem("id", peep.id);
            navigate('/owner_portal', {state:peep})
          }
        })
      }
      alert('Invalid UserName or Password')
      throw new Error('Something went wrong');
    })
     .catch((error) => {
  console.log(error)
});
  }



  const handleSubmit = async e => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password
    });

    // setToken(token);
    // console.log('this is token '+ token);
  }

  useEffect(() => {
   getPeople()

  }, [])


  return(
    <div className='registerBox' >
    <div className='regFormBox' >
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit} className='formReg'>
        <label>
          <p>Username</p>
          <input className="inputReg2" type="text" onChange={e => setUserName(e.target.value)} required />
        </label>
        <label>
          <p>Password</p>
          <input className="inputReg2" type={passwordShown ? "text" : "password"} onChange={e => setPassword(e.target.value)} required/>
        </label>
        <div className='showPass'>
          <label className="switch">
            <input type="checkbox" onChange={togglePassword}/>
            <span className="slider round"></span>
          </label>
          {passwordShown ? <>Hide Password</> : <>Show Password</>}
        </div>
          <button className="btn2"type="submit">Submit</button>


      </form>
    </div>
    </div>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };
