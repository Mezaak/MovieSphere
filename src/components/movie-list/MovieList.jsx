import React from 'react'
import Movie from '../../movie/Movie'
import './MovieList.css'

const MovieList = ({movies}) => {
  return (
    <ul className='movie-list'>
        {movies.map(movie => {return <Movie key={movie.id} movie={movie}/>})}
    </ul>
  )
}

export default MovieList