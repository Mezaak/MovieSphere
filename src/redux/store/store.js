import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from '../features/movieSlice'
import detailsReducer from '../features/detailsSlice';

const store = configureStore({
    reducer:{
        movies: moviesReducer,
        details: detailsReducer,
    },
});

export default store