
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Userfront from "@userfront/react";

export const OwnersPortal = (props) => {

const userData = JSON.stringify(Userfront.user, null, 2);

// const [currentUser,setCurrentUser] = useContext(UserContext)
    const location = useLocation();

    const [user, setUser] = useState(userData)


  console.log('this is props owner page ' +props);
  console.log(props);


  return(
    <>
    <h1>Owner Page</h1>
    <h2>{user}</h2>
    <button onClick={Userfront.logout}>Logout</button>
    </>
  )
}
