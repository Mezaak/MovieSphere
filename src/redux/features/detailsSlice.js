import { createAsyncThunk } from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API_URL } from '../../utils/constants';

export const getMovieDetails = createAsyncThunk('details',async (id) =>{
    try{
       const {data} = await axios.get(`${BASE_API_URL}/movie/268?api_key=${import.meta.env.VITE_MOVIE_API_KEY}`);
       
       return data;
    } catch (error){
        console.log('error',error);
    }
    
    return data;
});
const detailsSlice = createSlice({
    name:'details',
    initialState:{
        isLoading:false,
        errorMsg:"",
        details:null,
    },
    extraReducers: (builder) => {
        builder.addCase(getMovieDetails.pending, (state) =>{
            state.isLoading = true;
            state.errorMsg = '';
        }),
        builder.addCase(getMovieDetails.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.errorMsg = '';
            state.details = action.payload;
        }),
        builder.addCase(getMovieDetails.rejected, (state) =>{
            state.isLoading = false;
            state.errorMsg = 'Error while getting movie information, Try again later';
            state.details = action.payload;
        })

    },
});

export default detailsSlice.reducer;