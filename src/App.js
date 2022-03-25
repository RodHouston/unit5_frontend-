import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add.js'
import Edit from './components/Edit.js'
import AddHome from './pages/addHome'
import  AddPhoto from './components/addPhotos.js'
import { Nav } from "./components/nav";
import { Login } from "./pages/login";
import { BrowseHomes } from "./pages/browseHomes";
import { HomeShow } from "./pages/homeShow";
import { OwnersPortal } from "./pages/OwnersPortal";
import { Home} from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
// import Login from './components/Login/Login';
import useToken from './components/App/useToken';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}




const App = () => {

  let [people, setPeople] = useState([])
  let [homes, setHomes] = useState([])
  let [photos, setPhotos] = useState([])


  const { token, setToken } = useToken();





  const getPeople = () => {
   axios
     .get('https://serene-forest-42655.herokuapp.com/api/users')
     .then(
       (response) => setPeople(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))
  }
  const getHomes = () => {
   axios
     .get('https://serene-forest-42655.herokuapp.com/api/homes')
     .then(
       (response) => setHomes(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))
  }

  const getPhotos = () => {
   axios
     .get('https://serene-forest-42655.herokuapp.com/api/photos')
     .then(
       (response) => setPhotos(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))
  }


  const handleDelete = (event) => {
  axios
    .delete('https://serene-forest-42655.herokuapp.com/api/users/' + event.target.value)
    .then((response) => {
      getPeople()
    })
}

  const handleCreate = (addPerson) => {
    axios
      .post('https://serene-forest-42655.herokuapp.com/api/users', addPerson)
      .then((response) => {
        console.log(response)
        getPeople()
      })
  }
  const handleCreateHome = (addHome) => {
    axios
      .post('https://serene-forest-42655.herokuapp.com/api/homes', addHome)
      .then((response) => {
        console.log(response)
        getHomes()
      })
  }

  const handleCreatePhoto = (addPhoto) => {
    axios
      .post('https://serene-forest-42655.herokuapp.com/api/photos', addPhoto)
      .then((response) => {
        console.log(response)
        getHomes()
      })
  }

  const handleUpdate = (editPerson) => {
  console.log(editPerson)
  axios
    .put('https://serene-forest-42655.herokuapp.com/api/users/' + editPerson.id, editPerson)
    .then((response) => {
      getPeople()
    })
}

  useEffect(() => {
   getPeople()
   getHomes()
   getPhotos()
  }, [])


  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <>
    <div className='mainDiv'>

        <BrowserRouter>
          <header className='header'>
            <Nav/>
          </header>
          <div className="container1">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/browse" element={<BrowseHomes />} />
              <Route exact path="/show" element={<HomeShow/>} />
              <Route exact path="/owner_portal" element={<OwnersPortal/>} />
              <Route exact path="/addHome" element={<AddHome/>} />


              <Route path="/dashboard" element={<Dashboard/>}/ >

              <Route path="/preferences" element={<Preferences />}/>



            </Routes>
          </div>
        </BrowserRouter>

    </div>

    </>
  )
}

export default App
