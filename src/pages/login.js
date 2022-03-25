import { useNavigate } from "react-router";




export const Login = (props) => {
let navigate = useNavigate();
const login = () => {
  // navigate("http://localhost:8000/accounts/login/")
  navigate("https://serene-forest-42655.herokuapp.com/accounts/login/")
  console.log('login pressed');
}

  return(
    <>
    <button className='btn1' onClick= {(e) => login() }>MORE SERVICES</button>
    </>
  )
}
