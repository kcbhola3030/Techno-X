import React from 'react';
import './App.css'
import HomePage from "./components/Home/Home"
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import styled from "styled-components";
import Recommend from './components/Recommend/Recommend';
import Login from './components/login/Login';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

// const AppContainer = styled.div `
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
export default function App() {


    return (
        <Router>
        <div className="App">
                    <Routes>
                        <Route exact path='/' element={< HomePage />}></Route>
                        <Route exact path='/about' element={< Categories />}></Route>
                        <Route exact path='/contact' element={< Footer />}></Route>
                        <Route exact path='/login' element={<Login/>}></Route>
                </Routes>
                </div>
        </Router>

        
    );
}