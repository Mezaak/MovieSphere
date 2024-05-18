import React from 'react'
import Header from '../header/Header'
import Search from '../search/Search'
import MovieList from '../movie-list/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../redux/features/movieSlice'

const Home = () => {
 const {isLoading, errorMsg, data : movies} =  useSelector(state => state.movies)
 const dispatch = useDispatch();
 const handleSearch = (searchTerm) => {
  //make api call
  dispatch(getMovies());

}



console.log('movies', movies)

  return (
    <div>
        
        <div className='main-content'>
        <Search handleSearch={handleSearch}/>
        {isLoading && <p className='loading'>Loading...</p> }
        {errorMsg && <p className='error-msg'>{errorMsg}</p> }
        {movies.length > 0 && <MovieList movies={movies}/> }
        
        </div>
        

    </div>
  )
}

export default Home