import React, { useRef, useEffect } from 'react'
import Header from '../header/Header'
import Search from '../search/Search'
import MovieList from '../movie-list/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../redux/features/movieSlice'
import { debounce } from 'lodash'

const Home = () => {
  const { isLoading, errorMsg, data: movies } = useSelector(state => state.movies)
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current = debounce(searchMovie, 1000);
  }, []);

  function searchMovie(searchTerm) {
    dispatch(getMovies(searchTerm)); // Arama terimini getMovies'e iletiliyor.
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() !== '') {
      searchRef.current(searchTerm);
    }
  }

  return (
    <div>
      <div className='main-content'>
        <Search handleSearch={handleSearch} />
        {isLoading && <p className='loading'>Loading...</p>}
        {errorMsg && <p className='error-msg'>{errorMsg}</p>}
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </div>
  )
}

export default Home