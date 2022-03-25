import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export const Nav = (props) => {





// <a href="http://localhost:8000/accounts/login/">LOG</a>

  return (
    <>
      <header className="header">
        <div className="nav">

          <a href="https://serene-forest-42655.herokuapp.com/accounts/login/">LOG</a>
          <NavLink className="links" id='firstLink' to="/">
            Login
            </NavLink>
            <NavLink className="links" to="/">
              Home
            </NavLink>
            <NavLink className="links" to="/browse">
                  Browse Homes
            </NavLink>
            <NavLink className="links" to="/show">
                  Show
            </NavLink>
            <NavLink className="links" to="/owner_portal">
                  Owner' Corner
            </NavLink>
            <NavLink className="links" to="/addHome">
                  Add Home+
            </NavLink>



            <NavLink className="links" to="/dashboard">
                  Dashboard
            </NavLink>
            <NavLink className="links" to="/preferences">
                  Preferences
            </NavLink>
          </div>
        </header>


    </>
  );
};
