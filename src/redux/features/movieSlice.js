import { createAsyncThunk } from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API_URL } from '../../utils/constants';

export const getMovies = createAsyncThunk('movies',async (query) =>{
    try{
       const {data} = await axios.get(`${BASE_API_URL}/search/movie?query=${query}&api_key=${import.meta.env.VITE_MOVIE_API_KEY}`);
       
       return data.results;
    } catch (error){
        console.log('error',error);
    }
    
    return data;
});
const movieSlice = createSlice({
    name:'movies',
    initialState:{
        isLoading:false,
        errorMsg:"",
        data:[],
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state) =>{
            state.isLoading = true;
            state.errorMsg = '';
        }),
        builder.addCase(getMovies.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.errorMsg = '';
            state.data = action.payload;
        }),
        builder.addCase(getMovies.rejected, (state) =>{
            state.isLoading = false;
            state.errorMsg = 'Error while getting list of movies, Try again later';
            state.data = action.payload;
        })

    },
});

export default movieSlice.reducer;