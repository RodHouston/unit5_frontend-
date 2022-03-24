import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {


  let emptyPerson = { name: '', age: '' }
  const [person, setPerson] = useState(emptyPerson)

  const handleChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(person)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
  <label htmlFor="name">Name: </label>
  <input type="text" name="name" value={person.name} onChange={handleChange} />
  <br />
  <br />
  <label htmlFor="age">Age: </label>
  <input type="number" name="age" value={person.age} onChange={handleChange} />
  <input type="submit" />
</form>
    </>
  )
}

export default Add
