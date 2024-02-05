import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const ViewContact = () => {
  const { viewContact } = useSelector((state) => state.contact)

  return (
    <>

      <div className="container">
        <h3 className='text-center mt-3'>View Contact</h3>
        <hr />
        <div className="card mb-3 mx-2 rounded-0 ">
          <div className="row g-0">
            {/* <div className="col-md-4">
    </div> */}
            <div className="col-md-8">
              <ul class="list-group rounded-0 mb-1">
                <li class="list-group-item">
                  Name : <span>{viewContact.PersonName}</span>

                </li>
                <li class="list-group-item">
                  Mobile : <span>{viewContact.mobile}</span>
                </li>
                <li class="list-group-item">
                  Email : <span>{viewContact.email}</span>
                </li>

              </ul>
            </div>
            <div className="row">
              <div className="col">
                <Link to={'/'}> <button className="btn btn-success rounded-0 ">Back</button> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewContact
