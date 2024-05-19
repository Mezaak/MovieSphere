import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      
      <Link to='/' className='link'>
        
        <h1 className='heading'>MovieSphere🍿</h1>
      </Link>
        
    </div>
  )
}

export default Header