import React from 'react'
import lwsLogo from "../assets/images/LWSBlog.svg"
import { Link } from "react-router-dom"
function Navigation() {
  return (
    <nav className="py-4 border-b">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/"><img src={lwsLogo} alt="search" /></Link>
        </div>
        <div className="auth-buttons">
          <button className="btn btn-primary">sign in</button>
          <button className="btn btn-outline">sign up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation