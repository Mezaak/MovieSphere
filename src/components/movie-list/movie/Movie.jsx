import React from 'react'
import {Link} from 'react-router-dom'


const Movie = ({movie}) => {
    const {id,title,release_date,poster_path,vote_average} = movie;
  return (
    <li className='movie'>
      <Link to={`/movie/${id}`}>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className='movie-img' />
      </Link>
        
        <div className='movie-info'>
            <h3>{title}</h3>
            <div>Release date :{release_date}</div>
            <div>Rating : {vote_average.toFixed(1)}</div>
            <button className='button-18' role="button">Add to Favourite 👍🏻</button>
            

        </div>
    </li>
  )
}

export default Movie