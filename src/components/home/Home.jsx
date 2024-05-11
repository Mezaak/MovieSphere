import React from 'react'
import Header from '../header/Header'
import Search from '../search/Search'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='main-content'>
        <Search/>
        </div>
        

    </div>
  )
}

export default Home