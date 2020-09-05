import './index.css'

import { Link } from 'react-router-dom'
import React from 'react'

export const Navbar = () => {
    return (
       <nav className='navbar'>
           <ul>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/signup">signup</Link></li>
               <li><Link to="/contact">contact</Link></li>
           </ul>
       </nav>
    )
}
