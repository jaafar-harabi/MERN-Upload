import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
            <NavLink to="/" className="text-decoration-none mx-5 btn btn-outline-primary ">  Home </NavLink>
      </li>
      <li className="nav-item active">
          <NavLink to="/register" className="text-decoration-none btn btn-outline-primary">   Register </NavLink>
      </li>
      
    </ul>
  </div>
</nav>
  )
}

export default Navbar