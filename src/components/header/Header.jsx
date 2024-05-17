import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='link'>
        <h1 className='heading'>Movie Search App</h1>
      </Link>
        
    </div>
  )
}

export default Header