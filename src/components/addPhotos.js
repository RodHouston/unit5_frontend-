import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'
import Modal from 'react-modal';





const AddPhoto = (props) => {

  const [cU ,setCU] = useState(sessionStorage.getItem("name"))

  const location = useLocation();
  const [home, setHome] = useState(location.state)

  let emptyPhoto = { home: home.id, photos: '', }
  const [photos, setPhotos] = useState([])
  const [photo, setPhoto] = useState(emptyPhoto)

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [toggle, setToggle] = useState(false);


  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

      padding: '1px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
      content: {
        top: '0',
        left: '20px',
        right: '20px',
        bottom: '0',
        width: '95%',
        // height: '90vh',
        // padding: '50px',

        WebkitOverflowScrolling: 'scroll',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },

    }

  function MouseOver(event) {
          setToggle((prevState) => !prevState);
        }
        function MouseOut(event){
          setToggle((prevState) => !prevState);
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


  const handleChange = (event) => {
    setPhoto({ ...photo, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleCreatePhoto(photo)
    setPhoto(emptyPhoto)
  }

  const handleCreatePhoto = (addPhoto) => {
      axios
        .post('https://serene-forest-42655.herokuapp.com/api/photos', addPhoto)
        .then((response) => {
          console.log(response)
          getPhotos()
        })
    }


    useEffect(() => {
     // getPeople()
     // getHomes()
     getPhotos()
    }, [])
// console.log(home);
  return (
    <>
    <div className="showPhotoDiv" >
    <div className="addPhotoDiv">
    {cU === home.owner ?
      <form className="addForm"  onSubmit={handleSubmit}>
        <label htmlFor="photos">Photo: </label>
        <input className='input3' type="text" name="photos" value={photo.photos} onChange={handleChange} />
        <br />
        <input className='btn2' type="submit" value='+ Add Photo +' />
      </form>
      :null}
      </div>
      <div className='photoDiv'>
      <Modal isOpen={modalIsOpen} preventScroll={
        true} ariaHideApp={false} closeTimeoutMS={1000} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
        <button id='closeModal' onClick={() => setModalIsOpen(false)}>X</button>
        <div className='zoomBox' style={{ backgroundColor: toggle ? "red" : "" }} >
          <div className='zoomImgBox'>
            <img className='zoomImg' src={modalData} onClick={() => setModalIsOpen(false)}/>
          </div>
        </div>
      </Modal>
        <div className='photoGallery'>
          <div className="photoBox" >
            <img className="mainExtraPhoto" src={home.coverphoto} onClick={() => {setModalData(home.coverphoto); setModalIsOpen(true)}}/>
          </div>
          {photos.map((pic) => {
            return(
              < div key={'pic ' + pic.id}>
                  {pic.home == home.id ? <div className="photoBox" >
                <img  className="houseMainPhotoShow" src={pic.photos} onClick={() => {setModalData(pic.photos); setModalIsOpen(true)}}/>

              </div>




            : null}
            </div>
            )
          })}

        </div>
      </div>


</div>


    </>
  )
}
export default AddPhoto
