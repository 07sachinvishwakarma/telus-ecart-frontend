import React from 'react'
import contact from './Image/Contact.webp'
import call from './Image/phone.png'
import email from './Image/email.png'
import location from './Image/location.png'
const Contact = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row space'>
              <div className='col-md-4'>
                <img src={call} className='c-img'/>
                <h5>Call</h5>
                <p>1234-567-889</p>
              </div>
              <div className='col-md-4'>
              <img src={email} className='c-img'/>
                <h5>Email</h5>
                <p>dummmy@gmail.com</p>
              </div>
              <div className='col-md-4'>
              <img src={location} className='c-img'/>
                <h5>Address</h5>
                <p>Noida - UP</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row space bottom-space'>
          <div className='col-md-6 contact-image'>
            <img src={contact} className='image'/>
          </div>
          <div className='col-md-6 contact-form'>
          <form>
          <div className="form-group">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name"/>
          </div>
            <label>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div><br/>
          <button type="submit" className="btn btn-primary">Submit</button>
</form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
