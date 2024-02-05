import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { edit, remove, view } from '../features/contact/contactSlice'

const ContactList = ({ contact }) => {

    
    const nav = useNavigate()
    const dispatch = useDispatch()

    const handledelete = (id) => {

        dispatch(remove(id))

    }

    const handleEdit = (contact) => {
        dispatch(edit(contact))

        nav("/add")

    }
    const showContact = (contact) => {
        dispatch(view(contact))

        nav("/view")

    }
    return (
        <>
            <div className="card-body">
                <div className="col-md-4">
                    <ul className="list-group rounded-0 mb-1">
                        <li className="list-group-item">
                            Name : <span>{contact.PersonName}</span>

                        </li>
                        <li className="list-group-item">
                            Mobile : <span>{contact.mobile}</span>
                        </li>
                        <li className="list-group-item">
                            Email : <span>{contact.email}</span>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-horizontal-1">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <button className="btn btn-warning rounded-0 float-end"
                                onClick={() => showContact(contact)}
                            ><FaEye /></button>
                            <button className="btn btn-danger rounded-0 float-end"
                                onClick={() => handledelete(contact.id)}
                            ><MdDelete /></button>
                            <button className="btn btn-success rounded-0 float-end"
                                onClick={() => handleEdit(contact)}
                            ><MdEdit /></button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ContactList