import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddHome from './pages/addHome'
import { Nav } from "./components/nav";
import { EditProfile} from "./pages/EditProfile";
import { BrowseHomes } from "./pages/browseHomes";
import { HomeShow } from "./pages/homeShow";
import { OwnersPortal } from "./pages/OwnersPortal";
import { Home} from "./pages/home";
import { Register} from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Services from './components/Services/Services';
import About from './components/About/About';
import Login from './components/Login/Login';



// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }
//
// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }
//


const App = () => {





  const [ token, setToken ] = useState('');

  const [ userToken, setUserToken ] = useState(sessionStorage.getItem("token"));
  const [ userName, setUserName ] = useState(sessionStorage.getItem("name"));


  const userLogin = (tok) => {
    sessionStorage.setItem("token", JSON.stringify(tok));

    const tokenString = sessionStorage.getItem("token");
    const userToke = JSON.parse(tokenString);
    setToken(tok)
    setUserToken(userToke)
    console.log('this it app token '+ userToken);
    // console.log('this it app token '+ token);
  }
   const curUser = (nam) => {

   }


//
//   const getHomes = () => {
//    axios
//      .get('https://serene-forest-42655.herokuapp.com/api/homes')
//      .then(
//        (response) => setHomes(response.data),
//        (err) => console.error(err)
//      )
//      .catch((error) => console.error(error))
//   }
//
//   const getPhotos = () => {
//    axios
//      .get('https://serene-forest-42655.herokuapp.com/api/photos')
//      .then(
//        (response) => setPhotos(response.data),
//        (err) => console.error(err)
//      )
//      .catch((error) => console.error(error))
//   }
//
//
//   const handleDelete = (event) => {
//   axios
//     .delete('https://serene-forest-42655.herokuapp.com/api/users/' + event.target.value)
//     .then((response) => {
//       getPeople()
//     })
// }
//
//   const handleCreate = (addPerson) => {
//     axios
//       .post('https://serene-forest-42655.herokuapp.com/api/users', addPerson)
//       .then((response) => {
//         console.log(response)
//         getPeople()
//       })
//   }
//   const handleCreateHome = (addHome) => {
//     axios
//       .post('https://serene-forest-42655.herokuapp.com/api/homes', addHome)
//       .then((response) => {
//         console.log(response)
//         getHomes()
//       })
//   }
//
//   const handleCreatePhoto = (addPhoto) => {
//     axios
//       .post('https://serene-forest-42655.herokuapp.com/api/photos', addPhoto)
//       .then((response) => {
//         console.log(response)
//         getHomes()
//       })
//   }
//
//   const handleUpdate = (editPerson) => {
//   console.log(editPerson)
//   axios
//     .put('https://serene-forest-42655.herokuapp.com/api/users/' + editPerson.id, editPerson)
//     .then((response) => {
//       getPeople()
//     })
// }

  useEffect(() => {
   // getPeople()
   // getHomes()
   // getPhotos()
  }, [])
  return (
    <>
      <div className='mainDiv' style={{backgroundImage: `url('./bg1.jpeg')`}}>
        <header >
          <Nav/>
        </header>
        <div className="container1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login userLogin={userLogin} />} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/browse" element={<BrowseHomes />} />
            <Route exact path="/show" element={<HomeShow/>} />
            <Route exact path="/owner_portal" element={<OwnersPortal token= {userToken} name= {userName}/>} />
            <Route exact path="/addHome" element={<AddHome/>} />
            <Route exact path="/editProfile" element={<EditProfile/>} />
            <Route path="/services" element={<Services/>}/ >
            <Route path="/about" element={<About />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
