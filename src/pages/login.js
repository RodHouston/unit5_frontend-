import { useNavigate } from "react-router";




export const Login = (props) => {
let navigate = useNavigate();


  return(
    <>
    <button className='btn1' onClick= {(e) => navigate("https://serene-forest-42655.herokuapp.com/accounts/login/")}>MORE SERVICES</button>
    </>
  )
}
