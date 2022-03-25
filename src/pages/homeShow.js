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
