import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return ( 
          <nav className="main_nav">
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/portfolio'>Portfolio</Link>
               </li>
              <li>
                <Link to='/resume'>Resume</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/createuser'>Create user</Link>
              </li>
              <li>
                <Link to='/signin'>Sign in</Link>
              </li>
            </ul>
         </nav>
  );
};

export default Navbar;
