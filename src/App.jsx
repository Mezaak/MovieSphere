import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Details from './components/details/Details';
import Home from './components/home/Home';

const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie:id" element={<Details/>} />
    </Routes>
    
    
    </BrowserRouter>
  );
};
export default App
