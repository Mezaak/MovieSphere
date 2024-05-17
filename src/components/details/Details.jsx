import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { getMovieDetails } from '../../redux/features/detailsSlice';



const Details = () => {
  const {isLoading,errorMsg,details} = useSelector(state => state.details)
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getMovieDetails(id));
  },[id]);

  const {title,poster_path} = details;



  return(
    <div className='movie-details'>
      {isLoading && <p className='loading'>Loading...</p> }
    {errorMsg && <p className='error-msg'>{errorMsg}</p> }
    <div className='movie-details-info'>
    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className='img' alt={details.title} />
    </div>

    <div>
    <h2>{title}</h2>
    <div></div>
    </div>


    </div>
  ) 
}

export default Details