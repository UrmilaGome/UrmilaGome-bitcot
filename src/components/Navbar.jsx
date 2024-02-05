import React from 'react'
import { Link } from 'react-router-dom';
import { BiSolidContact } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
    <div className="container-fluid text-center">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <Link to={"/"}><h1 className="navbar-brand mb-0 display-8 text-center"><BiSolidContact />  CONTACT APP</h1></Link>
  
    </div>
  </nav>
   
</div>
    </>
  )
}

export default Navbar
