import { createAsyncThunk } from '@reduxjs/toolkit'
import {createSlice} from 'reduxjs/toolkit'
import axios from 'axios'

const getMovies = createAsyncThunk('movies',async () =>{
    axios
});
const movieSlice = createSlice({
    name:'movies',
    initialState:{
        isLoading:false,
        errorMsg:"",
        data:[]
    },
    extraReducers:{

    }
})