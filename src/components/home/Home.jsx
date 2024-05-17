import React from 'react'
import Header from '../header/Header'
import Search from '../search/Search'
import MovieList from '../movie-list/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../redux/features/movieSlice'

const Home = () => {
  useSelector(state => state.movies)
 const dispatch = useDispatch();
 const handleSearch = (searchTerm) => {
  //make api call
  dispatch(getMovies());

}

  return (
    <div>
        <Header/>
        <div className='main-content'>
        <Search handleSearch={handleSearch}/>
        <MovieList/>
        </div>
        

    </div>
  )
}

export default Home