import React from 'react';
import  { useState } from 'react';
const CreateUser = () => {
  const [user, setUser] =useState({name: '',  email :'', password:''});
//    const [contact, setContact] =useState({name: '',  phoneNumber :'', email:'', content:''});

  const submitField = (e)=> {
     e.preventDefault();
  const name = e.target.name
  const value = e.target.value
  setUser ({...user,[name]:value})
  
  }
  
  const submitUser = async(e) => {
     e.preventDefault();
     if (user.name && user.email && user.password){
     const newUser ={...user}
      const response = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newUser)
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
        setUser({name :'', email :'', password:''})
     }
  }
  return (

    <section>
     <div className="main-section">
      <div className="sub-section-contact">
        <h1>Register user</h1>
        <p>
          Please complete the form below to register.
        </p>
  
      </div>
       <form className="my-form" onSubmit={submitUser}>
          <div className="form-group">
             <label htmlFor="name">Name: 
                <input
                  type="text"
                  id="name"
                  name='name'
                  value={user.name}
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
                  value={user.email}
                  onChange={submitField}
                  required />
              </label>
          </div>
          <div className="form-group">
             <label htmlFor="password">Password: 
                <input
                  type="text"
                  id="pasword"
                  name='password'
                  value={user.password}
                  onChange={submitField}
                  required />
              </label>
          </div>
          
          <input className="button" type="submit" value="Create user" />
        </form>   
         <footer>
          <p>Mathi Mahalingam &copy; 2021</p>
        </footer>
      </div>
    </section>
  
  );
};

export default CreateUser;

