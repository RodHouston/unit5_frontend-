import React, {useState, createContext, useEffect} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'

export const UserProvider = (props) => {

  const location = useLocation();


  const [user, setUser] = useState(sessionStorage.getItem("name"));
  let [people, setPeople] = useState([])
  const [currentUser ,setCurrentUser] = useState([])
  const [isLoading, setIsLoading] = useState(true);



  // const getPeople = () => {
  //  axios
  //    .get('https://serene-forest-42655.herokuapp.com/api/users')
  //    .then(
  //      (response) => setPeople(response.data),
  //      (err) => console.error(err)
  //    )
  //    .catch((error) => console.error(error))
  // }
  const getPeople = () => {
   axios
     .get('https://serene-forest-42655.herokuapp.com/api/users')
     .then(
       (response) => response.data.map((peep) => {
         // console.log('in contxt '+ peep);
         if (peep.username === user){
           return setPeople(peep)
         }
       })
       ,
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))
  }
// console.log(people);

  const getCur = () => {
// console.log('in contxt');
    people.map((peep) => {
      // console.log(people);
      if(peep.username == user){
        return( setCurrentUser(peep)
      )}
    })
  }

  useEffect( async () => {
    getPeople()
    // getCur()
    setIsLoading(false);
  }, [])

  return (
    <>
    {!isLoading && (

    <UserContext.Provider
      value={[currentUser, setCurrentUser]}>{props.children}
    </UserContext.Provider>
  )}
  </>
  )
}

export const UserContext = createContext()
