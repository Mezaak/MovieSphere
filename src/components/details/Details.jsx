import React, { useEffect} from 'react'
import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { getMovieCredits} from '../../redux/features/detailsSlice';
import { getMovieDetails } from '../../redux/features/detailsSlice';
import './Details.css'



const Details = () => {
  const {isLoading,errorMsg,details,credits} = useSelector((state) => state.details);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getMovieDetails(id));
    dispatch(getMovieCredits(id));
  },[id]);

  console.log('credits',credits)

  if(!details){
    return null;
  }

  const {title,poster_path,release_date,vote_average,overview} = details;
  
  

  return(
    <div className='movie-details'>
      {isLoading && <p className='loading'>Loading...</p> }
    {errorMsg && <p className='error-msg'>{errorMsg}</p> }
    <div className='movie-details-info'>
    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}/`} className='img' alt={title} />
    </div>

    <div className='extra-details'>
    <h2>{title}</h2>
    <div><span>Release Date: </span>{release_date}</div>
    <div>Rating: {vote_average ? Number(vote_average).toFixed(1) : 'N/A'}</div>
    <div>Description: {overview}</div>
    
    </div>


    </div>
  ) 
}

export default Details