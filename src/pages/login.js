import { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router";
import Userfront from "@userfront/react";




export const Login = (props) => {

  let user = {image :'',
  fname :'',
  lname :'',
  password :'',
  collection :'',
  created :'',
  favorited :'',
  offers :'',
  bio :''}
const [userA ,setUserA] = useState(user)
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const [users ,setUsers] = useState(user)
let navigate = useNavigate();

// const [currentUser,setCurrentUser] = useContext(UserContext)


const [currentUser,setCurrentUser] = useState([])


// console.log('bio =' +currentUser.bio);

  const getUsers = () => {
    axios.get('https://serene-forest-42655.herokuapp.com/api/users')
    .then(
      (response) => setUsers(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))

  }

  const handleUpdate = (editUser) => {
    axios.put('https://serene-forest-42655.herokuapp.com/api/users' + editUser.id, editUser)
      .then((response) => {
        alert('logged in')
        navigate('/profile', currentUser)
      })
  }
  const randomDelay = () => new Promise(resolve => setTimeout(resolve, 1000));

  const login = async () => {
    // navigate('/profile')
    // console.log('this is '+ user.bio)
    // setCurrentUser({ ...user, bio: 'currentUser'})
      handleUpdate(currentUser)
  }



  const handleSubmit = async (e) => {
      e.preventDefault();
      axios.get('https://serene-forest-42655.herokuapp.com/api/users')
      .then(
        (response) =>
        response.data.map((user)  =>  {
          if(user.username === username && user.password == password){
            setCurrentUser(user)
              console.log('logged in there ' + user);
              navigate('/owner_portal', {state:user})

        }}),
        (err) => console.error(err)
      )
    };


  useEffect(() => {
    getUsers()

  }, [])


  Userfront.init("6bgmgg7b");

  const LoginForm = Userfront.build({
    toolId: "nrnorr"
  });

      //
      // <form onSubmit={handleSubmit}>
      //           <div className="formBox">
      //             <div className="pair1">
      //               UserName:{" "}
      //               <input
      //                 className="inputEdit"
      //                 type="text"
      //                 value={username}
      //                 onChange={(e) => setUsername(e.target.value)}
      //               />
      //             </div>
      //             <div className="pair1">
      //               Password:{" "}
      //               <input
      //                 className="inputEdit"
      //                 type="password"
      //                 value={password}
      //                 onChange={(e) => setPassword(e.target.value)}
      //               />
      //               </div>
      //               <div className="btnPair">
      //               <input className="btn2" type='submit' value='Login'onClick= {(e) => handleSubmit} />
      //               <button className='btn1' onClick= {(e) => navigate('/register')}>Register</button>
      //
      //             </div>
      //           </div>
      //         </form>


  return (
    <>
    <div className="loginDiv">
    <h1 className='title'>Login</h1>
            <LoginForm />
            </div>
</>
  )
};
