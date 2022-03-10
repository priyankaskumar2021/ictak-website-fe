import React from 'react';
import logo from '..//..//assets/images/logo.png';
import '..//..//css/style.css';
import { Link } from "react-router-dom";



function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a href="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
    
    <img src={logo} style={{width:'50px', height:'50px', marginRight:'10px'}}></img>
    </a>
    <div class="content">
<h2>ICTAK</h2>
<h2>ICTAK</h2>
</div>
    
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
       
        <Link to="/" class="nav-item nav-link">Home</Link>
        <Link to="/about" class="nav-item nav-link">About</Link>
        <Link to="/courses" class="nav-item nav-link">Courses</Link>
                
                
            <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/partnership" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Offerings
          </a>
                <div class="dropdown-menu  m-0">
                <Link to="/partnership" class="dropdown-item">Partnership</Link>
                <Link to=""class="dropdown-item">Membership</Link>
                                    
                </div>
            </div>
            <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Events
          </a>
                <div class="dropdown-menu fade-down m-0">
                <Link to=""class="dropdown-item">ICSET</Link>
                <Link to=""class="dropdown-item">Techathlon</Link>
                  
                </div>
            </div>
           
            <Link to="/contact" class="nav-item nav-link">Contact</Link>
            <Link to="//retail.ictkerala.org/" target="_blank" class="nav-item nav-link">Paatshala LMS</Link>
            <Link to="/login" class="nav-item nav-link">Login</Link>
           
            
           
        </div>
       
        <Link to="/register" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Register Now<i class="fa fa-arrow-right ms-3"></i></Link>   
    </div>
</nav>
  )
}

export default Navbar