import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const AddHome = (props) => {


  let emptyHome = { owner: '', type: '', street:'', city:'', state:'', }
  const [home, setHome] = useState(emptyHome)

  const handleChange = (event) => {
    setHome({ ...home, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(home)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
  <label htmlFor="owner">Owner: </label>
  <input type="text" name="owner" value={home.owner} onChange={handleChange} />
  <br />
  <label htmlFor="type">Type: </label>
  <input type="text" name="type" value={home.type} onChange={handleChange} />
  <br />
  <label htmlFor="street">Street: </label>
  <input type="text" name="street" value={home.street} onChange={handleChange} />
  <br />
  <label htmlFor="city">City: </label>
  <input type="text" name="city" value={home.city} onChange={handleChange} />
  <br />
  <label htmlFor="state">State: </label>
  <input type="text" name="state" value={home.state} onChange={handleChange} />
  <br />


  <input type="submit" />
</form>
    </>
  )
}
export default AddHome
