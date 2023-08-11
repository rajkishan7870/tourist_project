import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import PreHome from './pages/preHome/PreHome';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/Register/Register';
function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PreHome/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      
    </div>
  );
}

export default App;
