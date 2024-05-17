import { createAsyncThunk } from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMovies = createAsyncThunk('movies',async () =>{
    const {data} = axios.get(`${BASE_API_URL}/search/movie?query=batman`);
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
        builder.addCase(getMovies.pending, (state,action) =>{
            state.isLoading = true;
            state.errorMsg = '';
        }),
        builder.addCase(getMovies.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.errorMsg = '';
            state.data = action.payload;
        }),
        builder.addCase(getMovies.rejected, (state,action) =>{
            state.isLoading = false;
            state.errorMsg = 'Error while getting list of movies, Try again later';
            state.data = action.payload;
        })

    },
});

export default movieSlice.reducer;