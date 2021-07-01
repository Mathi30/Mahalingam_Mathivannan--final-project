import React from 'react';
import  { useState } from 'react';
const Contact = () => {
  const [contact, setContact] =useState({name: '',  phoneNumber :'', email:'', content:''});

  const submitField = (e)=> {
     e.preventDefault();
  const name = e.target.name
  const value = e.target.value
  setContact ({...contact,[name]:value})
  
  }
  
  const submitContact = async(e) => {
     e.preventDefault();
     if (contact.name && contact.email && contact.phoneNumber){
     const newContact ={...contact}
      const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newContact)
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
        setContact({name :'', phoneNumber :'', email:'', content:''})
     }
  }
  return (

    <section>
     <div className="main-section">
      <div className="sub-section-contact">
        <h1>Contact</h1>
        <p>
          Please complete the form below with your meassage and I will contact
          you with 24 hours.
        </p>
  
      </div>
       <form className="my-form" onSubmit={submitContact}>
          <div className="form-group">
             <label htmlFor="name">Name: 
                <input
                  type="text"
                  id="name"
                  name='name'
                  value={contact.name}
                  onChange={submitField}
                  required />
              </label>
           </div>
           <div className="form-group">
             <label htmlFor="email">Email: 
                <input
                  type="text"
                  id="email"
                  name='email'
                  value={contact.email}
                  onChange={submitField}
                  required />
              </label>
          </div>
          <div className="form-group">
             <label htmlFor="phoneNumber">Phone: 
                <input
                  type="phone"
                  id="phone"
                  name='phoneNumber'
                  value={contact.phoneNumber}
                  onChange={submitField}
                  required />
              </label>
          </div>
          <label htmlFor="content">Message:
              <textarea
              name="content"
              id="content"
              value={contact.content}
              onChange={submitField}
              rows="20"
              cols="40"
            ></textarea>
           </label>
          <input className="button" type="submit" value="Send" />
        </form>   
         <footer>
          <p>Mathi Mahalingam &copy; 2021</p>
        </footer>
      </div>
    </section>
  
  );
};

export default Contact;

