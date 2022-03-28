import React, { useState } from 'react';
import PropTypes from 'prop-types';





export default function Login(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  async function loginUser(credentials) {
   // return fetch('https://serene-forest-42655.herokuapp.com/currentuser/', {
   return fetch('https://serene-forest-42655.herokuapp.com/auth/', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
    },
      body: JSON.stringify(credentials)
    })
     .then(data => data.json())
     .then( data=>{
        props.userLogin(data.token)
     //   console.log( props.userLogin);
     // console.log('this is user '+ data.token);
    })
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



  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
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

      </form>
    </div>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };
