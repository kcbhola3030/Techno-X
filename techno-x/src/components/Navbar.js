// import { useContext } from 'react';
import BookData from "../Data.json";
import Prama from "../Image/Prama.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Search/SearchBar'
import "./Navbar.css"
import {useAuth0} from "@auth0/auth0-react"
import LoginButton from "../login";
import LogoutButton from "../logout-button";

// import Account from './accountBox/index.jsx'
import {Link} from "react-router-dom";

// import React,{useState} from 'react';
// import { AccountBox } from './accountBox';
// import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
function Navbar(){
    // const {isAuthenticated}=useAuth0();

    
    // const [showLinks,setShowLinks]=useState(false)
    return(
        <nav className="navbar navbar-expand-lg navbar-light shadow" >
                <div className="container justify-content-between align-items-center" id="template">
                <a className="navbar-brand text-success align-self-center" href="#" id="prama">
                <Link to="/"><img src={Prama} alt="logo" height="100px" weigth="100px" /></Link>
                        </a>
                    

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-between" id="templatemo_main_nav">
                    
                        <div className="flex-fill">
                        
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><Link to="/">Home</Link></a>
                                    
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><Link to="/about">Categories</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><Link to="/recommend">Books</Link></a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#"><Link to="/contact">Feedback</Link></a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="https://discord.gg/DVXTSNG5qk">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                    {/* <i class="fa fa-fw fa-search"></i> */}
                                </div>

                            </div>
                            <SearchBar className="d-none d-lg-inline" placeholder="Enter a Book Name..." data={BookData} />
                            {/* <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        
                      </a> */}
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                {/* <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>  */}
                                <Link to="/upload"><i class="fa fa-plus-square text-dark mr-1" aria-hidden="true"></i></Link>


                            </a>
                            
                            
                            <a className="nav-icon position-relative text-decoration-none" href="#" >
                                {/* <i onClick={event =>  window.location.href='./accountBox/index.jsx'}className="fa fa-fw fa-user text-dark mr-3"></i> */}
                                <Link to="/profile"><i className="fa fa-fw fa-user text-dark mr-3"></i></Link> 
                            </a>
                            <a className="nav-icon position-relative text-decoration-none" href="#" >
                                {/* <i onClick={event =>  window.location.href='./accountBox/index.jsx'}className="fa fa-fw fa-user text-dark mr-3"></i> */}
                                <Link to="/login"><i class="fa fa-fw fa-power-off text-dark mr-3"></i></Link>
                                {/* <div className="justify-content-end">
                                    {isAuthenticated?<LogoutButton/>:<LoginButton/>}
                                </div> */}
                                
                            </a>
                            
                                {/* <LinkContainer to="/home"><i className="fa fa-fw fa-user text-dark mr-3"></i></LinkContainer> */}
                                {/* <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#"><i className="fa fa-fw fa-user text-dark mr-3"></i><span class="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Sub-menu 1</a></li>
                                            <li><a href="#">Sub-menu 2</a></li>
                                            <li><a href="#">Sub-menu 3</a></li>
                                        </ul>
                                </li> */}
                           
                            
                            
                        </div>
                    </div>

                </div>
                <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="get" className="modal-content modal-body border-0 p-0">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" className="input-group-text bg-success text-light">
                                <i className="fa fa-fw fa-search text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </nav>
    )
}

export default Navbar;