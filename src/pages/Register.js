import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";






const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{8,24}$/;

export const Register = () => {

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

  const [errMsg, setErrMsg] = useState('');

  const [cU ,setCU] = useState(sessionStorage.getItem("name"))
  const [id,setId] = useState(sessionStorage.getItem("id"))


  const [profiles, setProfiles] = useState([]);

  const location = useLocation();

  let emptyProfile = { user: '', userphoto: '', status:'' }
  const [profile, setProfile] = useState(emptyProfile)
  const [userphoto, setPhoto] = useState()
  const [status, setStatus] = useState()




  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value })
  }


  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([])

  const [confirmPass, setConfirmPass] = useState('')
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


  async function regUser(credentials) {
     console.log('inside regUser');
     try {
   // return fetch('https://serene-forest-42655.herokuapp.com/currentuser/', {
   return fetch('https://serene-forest-42655.herokuapp.com/api/users/', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
    },
      body: JSON.stringify(credentials)
    })
     .then(data => data.json())
     .then( data=>{
         console.log(data)

        let pro = { user: data.id, userphoto: profile.userphoto, status: profile.status }
        console.log(pro)
      sessionStorage.setItem("name", username);
      getPeople()



        createProfile(pro)





//try




      // navigate('/owner_portal')

    })
}catch (err) {
    if (!err?.response) {
        setErrMsg('No Server Response');
    } else if (err.response?.status === 400) {
        setErrMsg('Username Taken');
    } else {
        setErrMsg('Registration Failed')
    }
    errRef.current.focus();
}

  }


    const handleReg = async e => {
        e.preventDefault();
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        let success = true
        if (!v1 || !v2) {
          alert("Invalid Entry");
          return;
        } else {
          people.filter((peep) => {
            if (peep.username == username){
              alert("Username Taken");
              success = false
              return;
            }
          })
        }
        if (success){
          regUser({username, password, first_name, last_name, email});
            console.log('reg button hit ');
            console.log('success');
          } else {
            console.log('no success');
          }
        }


    const handlePass = (event) => {
      setPassword(event.target.value)

    }
    const handleConfirmPass = (event) => {
      setConfirmPass(event.target.value)
    }


    const createProfile = (p) => {
      axios
        .post('https://serene-forest-42655.herokuapp.com/api/profile', p)
        .then((response) => {
          console.log(response)

        }).then(
          navigate('/owner_portal')
        )

    }

  useEffect(() => {
   getPeople()
  }, [])
  useEffect(() => {
    const results = USER_REGEX.test(username)
      setValidName(results);
  }, [username])
  useEffect(() => {
    const results = PWD_REGEX.test(password)
      setValidPwd(PWD_REGEX.test(password));
      setValidMatch(password === confirmPass);
  }, [password, confirmPass])
  return (
    <>
    <div className='registerBox' >
      <div className='regFormBox' >
        <h1>Please Sign Up</h1>
        <form className='formReg' onSubmit={handleReg}>
          <div className='regSet'>
            <label>
              Username
            </label>
            <input className="inputReg2"
              type="text"
              onChange={e => setUserName(e.target.value)}
              defaultValue={username}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
          </div>
          <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
            4 to 24 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
          <div className='regSet'>
            <div className='pair2 '>
              <label htmlFor='password' > Password: </label>
              <input
                className="inputReg2 "
                name="password"
                id="password"
                type={passwordShown ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" required
                defaultValue={password}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <div className='showPass'>
                <label className="switch">
                  <input type="checkbox" onChange={togglePassword}/>
                  <span className="slider round"></span>
                </label>
                {passwordShown ? <>Hide Password</> : <>Show Password</>}
              </div>
            </div>
            <div className='pair2 password'>
              <label htmlFor='password_two' > Confirm Password: </label>
              <input className="inputReg2 "
                name="password_two"
                type={passwordShown ? "text" : "password"}
                pattern="^\S{6,}$"
                onChange={handleConfirmPass}
                placeholder="Verify Password"
                required
                defaultValue={confirmPass}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                   8 to 24 characters.<br />
                   Must include uppercase or lowercase letters, and a number <br />
                   Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
              </p>
              <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                   Must match the first password input field.
              </p>
            </div>
          </div>
          <div className='pair'>
            <label htmlFor='email' > Email: </label>
            <input className="inputReg" type='email' name='email'  onChange={e => setEmail(e.target.value)} placeholder="Email" required />
          </div>
          <div className=' regSet' >
            <div className='pair2'>
              <label htmlFor='firstname' > First Name: </label>
              <input className="inputReg2 " name="first_name" type="text"  onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
            </div>
            <div className='pair2 password'>
              <label htmlFor='lastname' > Last Name: </label>
              <input className="inputReg2 password" name="last_name" type="text"   onChange={e => setLastname(e.target.value)} placeholder="Last Name" required />
            </div>
          </div>



          <div className='set'>

            <div className='pair'>
            <label htmlFor="userphoto">Photo: </label>
            <input className='input2' type="text" name="userphoto" defaultValue={userphoto} onChange={handleChange}/>
            </div>
            <div className='pair'>
            <label htmlFor="status">Owner: </label>
            <select
              className="input2"
              name='status'
              defaultValue={status}
              onChange={handleChange}>
              <option key="select-ANY" defaultValue='owner' >
                Owner
              </option>
              <option defaultValue='renter' >
                Renter/Tenant
              </option>
            </select>
            </div>

            </div>

            <img src={profile.userphoto}/>
          <button className='btn2' type="submit" disabled={!validName || !validPwd || !validMatch ? true : false}>Submit</button>
        </form>
        <p>
          Already registered?<br />
          <span className="line">
            <a href="/login">Sign In</a>
          </span>
        </p>
      </div>
    </div>
  </>
  )
};
