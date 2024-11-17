
import React from 'react'


const Contact = () => {
  return (
    <div className="contact-form">
      <div className='contact'>Get in Touch</div>
    <form>
      <input type="text" placeholder="Name" className="input-field" />
      <input type="email" placeholder="Email" className="input-field" />
      <textarea placeholder="Message" className="input-field"></textarea>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
  )
}

export default Contact
