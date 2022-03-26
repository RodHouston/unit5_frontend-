<Add handleCreate={handleCreate} />
<div className="people">
  {people.map((person) => {
    return (
      <div className="person" key={person.id}>
        <h4>Name: {person.name}</h4>

        <Edit handleUpdate={handleUpdate} id={person.id} />
        <button onClick={handleDelete} value={person.id}>
          X
        </button>

      </div>
    )
  })}
  <AddHome handleCreate={handleCreateHome} />
  {homes.map((home) => {
    return (
      <div className="person" key={home.id}>
        <h4>Name: {home.owner}</h4>
        <h5>Street: {home.street}</h5>
        <h5>City: {home.city}</h5>
        <h5>State: {home.state}</h5>
        <h5>Type: {home.type}</h5>
      </div>
    )
  })}

<AddPhoto handleCreate={handleCreatePhoto} />
{photos.map((photo) => {
  return (
    <div className="person" key={photo.id}>
      <h4>Name: {photo.home}</h4>
      <img src={photo.photos}/>

    </div>
  )
})}
</div>
import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const HomeShow = (props) => {
let [people, setPeople] = useState([])

  const getPeople = () => {
   axios
     .get('https://serene-forest-42655.herokuapp.com/currentuser')
     .then(
       (response) => setPeople(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))
  }
  console.log(people);
  useEffect(() => {
   getPeople()
  }, [])
  return(
    <>
    <h1>this is Home Show Page</h1>
    <div className="people">
        <div className="person" key={people.id}>
          <h4>Name: {people.id}</h4>
        </div>
    </div>
    </>
  )
}
