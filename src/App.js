import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add.js'
import Edit from './components/Edit.js'
import AddHome from './components/addHome.js'

const App = () => {

  let [people, setPeople] = useState([])
  let [homes, setHomes] = useState([])


  const getPeople = () => {
   axios
     .get('https://fathomless-mesa-16523.herokuapp.com/api/users')
     .then(
       (response) => setPeople(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))
  }
  const getHomes = () => {
   axios
     .get('https://fathomless-mesa-16523.herokuapp.com/api/homes')
     .then(
       (response) => setHomes(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))
  }
  const handleDelete = (event) => {
  axios
    .delete('https://fathomless-mesa-16523.herokuapp.com/api/users/' + event.target.value)
    .then((response) => {
      getPeople()
    })
}

  const handleCreate = (addPerson) => {
    axios
      .post('https://fathomless-mesa-16523.herokuapp.com/api/users', addPerson)
      .then((response) => {
        console.log(response)
        getPeople()
      })
  }
  const handleCreateHome = (addHome) => {
    axios
      .post('https://fathomless-mesa-16523.herokuapp.com/api/homes', addHome)
      .then((response) => {
        console.log(response)
        getHomes()
      })
  }

  const handleUpdate = (editPerson) => {
  console.log(editPerson)
  axios
    .put('https://fathomless-mesa-16523.herokuapp.com/api/users/' + editPerson.id, editPerson)
    .then((response) => {
      getPeople()
    })
}

  useEffect(() => {
   getPeople()
  }, [])

  return (
    <>
      <Add handleCreate={handleCreate} />
      <div className="people">
        {people.map((person) => {
          return (
            <div className="person" key={person.id}>
              <h4>Name: {person.name}</h4>
              <h5>Age: {person.age}</h5>
              <Edit handleUpdate={handleUpdate} id={person.id} />
              <button onClick={handleDelete} value={person.id}>
                X
              </button>

            </div>
          )
        })}
        <AddHome handleCreate={handleCreateHome} />
        {homes.map((person) => {
          return (
            <div className="person" key={person.id}>
              <h4>Name: {person.name}</h4>
              <h5>Age: {person.age}</h5>



            </div>
          )
        })}
      </div>

    </>
  )
}

export default App
