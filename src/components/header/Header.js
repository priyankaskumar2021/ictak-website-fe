import React from 'react';
import carouselimg1 from '..//..//assets/images/carouselimg1.jpg';
import '..//..//css/style.css';
import { Link } from "react-router-dom";

function Header() {
  return (
  
     <div class="container-fluid p-0 mb-5">
        <div class="header-carousel position-relative">
            <div class="owl-carousel-item position-relative">
                <img class="img-fluid" src={carouselimg1} alt=""/>
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-sm-10 col-lg-12">
                                <h5 class="" style={{color: 'silver'}}>Welcome to ICT Academy of Kerala</h5>
                                <h1 class="display-3" id='slogan' style={{color:"teal", letterSpacing:'.1em'}}>Building the Nation's Future</h1>
                                <p class="fs-5 text-light mb-4 pb-2" style={{textAlign:'justify'}}>Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students.</p>
                                <Link to="/courses" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Learner's Click Here</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    </div>
    
   
  )
}

export default Header;