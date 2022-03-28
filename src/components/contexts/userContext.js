import {useState, createContext, useEffect} from 'react'

import axios from 'axios'

export const UserProvider = (props) => {

  const [user, setUser] = useState("");
  const [currentUser ,setCurrentUser] = useState(user)


  useEffect(() => {
    getUsers()

  }, [])

  return (
    <UserContext.Provider
      value={[currentUser, setCurrentUser]}>{props.children}
    </UserContext.Provider>
  )
}

export const UserContext = createContext()
