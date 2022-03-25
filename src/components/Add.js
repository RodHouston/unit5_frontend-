import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {


  let emptyUser = { name: '', password: '', email: '', firstname: '' , lastname: '' }
  const [user, setUser] = useState(emptyUser)

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(user)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
  <label htmlFor="name">Name: </label>
  <input type="text" name="name" value={user.name} onChange={handleChange} />

  <label htmlFor="password">password: </label>
  <input type="password" name="password" value={user.password} onChange={handleChange} />

  <label htmlFor="email">email: </label>
  <input type="text" name="email" value={user.email} onChange={handleChange} />

  <label htmlFor="firstname">firstname: </label>
  <input type="text" name="firstname" value={user.firstname} onChange={handleChange} />

  <label htmlFor="lastname">lastname: </label>
  <input type="text" name="lastname" value={user.lastname} onChange={handleChange} />
  <input type="submit" />
</form>
    </>
  )
}

export default Add
