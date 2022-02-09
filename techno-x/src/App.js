import React from 'react';
import './App.css'
import HomePage from "./components/Home/Home"
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';

import Recommend from './components/Recommend/Recommend';
import Login from './components/login/Login';
import {Signup} from './components/Signup/Signup';
import Upload from './components/Upload/Upload';
import Profile from './components/Profile/Profile';


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
                        <Route exact path='/signup' element={<Signup/>}></Route>
                        <Route exact path='/upload' element={<Upload/>}></Route>
                        <Route exact path='/profile' element={<Profile/>}></Route>
                        <Route exact path='/recommend' element={<Recommend/>}></Route>
                    </Routes>
                </div>
        </Router>

        
    );
}