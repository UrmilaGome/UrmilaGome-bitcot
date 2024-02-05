import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { add, update } from '../features/contact/contactSlice'

const AddContact = () => {

  const { editcontact } = useSelector((state) => state.contact)

  const dispatch = useDispatch()
  const nav = useNavigate()


  const [form, setform] = useState({
    id: crypto.randomUUID(),
    PersonName: "",
    mobile: "",
    email: ""
  })


  const { PersonName, mobile, email } = form

  const handlChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (editcontact.isedit) {
      console.log(editcontact);
      console.log(form)
      const updateContact = {

        id: editcontact.contact.id,
        PersonName: form.PersonName,
        mobile: form.mobile,
        email: form.email,
      }

      dispatch(update(updateContact))
      setform({
        PersonName: "",
        mobile: "",
        email: ""
      })
      nav("/")

    } else {
      dispatch(add(form))
      setform({
        PersonName: "",
        mobile: "",
        email: ""
      })
      console.log(form);
      nav("/")

    }

  }

  useEffect(() => {
    if (editcontact.isedit) {

      setform(editcontact.contact)
    }

  }, [editcontact])

  return (
    <>
      <div className="container mt-5" onSubmit={handleSubmit}>
        <div className="add-contact">
          <h3>Add Contact</h3>
          <hr />
          <form className="form-control">
            <div className="mb-3">
              <label className="form-label">Name :</label>
              <input type="text" className="form-control" id="exampleInputText1"
                name="PersonName"
                value={PersonName}
                onChange={handlChange}
                required
              />

            </div>
            <div className="mb-3">
              <label className="form-label">Email :</label>
              <input type="email" className="form-control" id="exampleInputEmail1"
                name="email"
                value={email}
                onChange={handlChange}
                required />

            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number :</label>
              <input type="number" className="form-control" id="exampleInputNumber1"
                name="mobile"
                value={mobile}
                onChange={handlChange}
                required
              />

            </div>

            <span>
              <button type="submit" className="btn btn-primary me-2 rounded-0">Save</button>
              <Link to={'/'}><button type="submit" className="btn btn-dark rounded-0 ">Cancel</button></Link>
            </span>

          </form>
        </div>
      </div>
    </>
  )
}

export default AddContact
