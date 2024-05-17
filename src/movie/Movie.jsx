import React from 'react'

const Movie = ({movie}) => {
    const {title,release_date,poster_path,overview} = movie;
  return (
    <li>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        <div>
            <div>{title}</div>
            <div>Release date :{release_date}</div>
            <div>Description : {overview}</div>

        </div>
    </li>
  )
}

export default Movie