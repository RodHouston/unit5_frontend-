import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const AddPhoto = (props) => {


  let emptyPhoto = { home: '', photos: '', }
  const [photo, setPhoto] = useState(emptyPhoto)

  const handleChange = (event) => {
    setPhoto({ ...photo, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(photo)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
  <label htmlFor="home">home: </label>
  <input type="text" name="home" value={photo.home} onChange={handleChange} />
  <br />
  <label htmlFor="photos">Photo: </label>
  <input type="text" name="photos" value={photo.photos} onChange={handleChange} />
  <br />

  <input type="submit" />
</form>
    </>
  )
}
export default AddPhoto
