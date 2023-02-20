import './App.css'; 
import React,{ Component } from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core' 
import { BrowserRouter,Router,Route,Routes,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
const  App=()=> {
  const user=JSON.parse(localStorage.getItem('profile'))
  return (
    <BrowserRouter>
    
     <Container maxWidth="xl">
         <Navbar/>
         <Routes>
          <Route path="/" exact element={<Navigate to='/posts'/>}></Route>
          <Route path="/posts" exact element={<Home/>}></Route>
          <Route path="/posts/search" exact element={<Home/>}></Route>
          <Route path="/posts/:id" element={<PostDetails/>} ></Route>
          <Route path="/auth" element={!user?<Auth/>:<Navigate to="/posts"/>}></Route>
         </Routes>
       
     </Container>
     </BrowserRouter>
  );
}

export default App;
