import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircle } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './contactList';



const Contact = () => {

  const { contacts} = useSelector((state) => state.contact)



  return (
    <>
      <div className="container">
        <div><h3 className='tagline text-center mt-4'>All Contacts <IoMdContact /></h3><hr /> </div>
        <Link to={"/add"}> <button  className="btn btn-success mx-3"><IoIosAddCircle /> New</button></Link>
        <div className="container-fluid mt-3">
          <form  className="d-flex w-3 float-start" role="search">
            <input className="form-control me-2"  type="search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

        <br /><br /> <br />

        <div className="card mb-3 mx-2 rounded-0 ">
          { contacts.map((contact) => (
              <ContactList key={contact.id} contact={contact} />
            ))}
        </div>
      </div>
    </>
  )
}

export default Contact
