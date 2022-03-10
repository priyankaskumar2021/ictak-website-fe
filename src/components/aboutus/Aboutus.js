import React from 'react';
import aboutimg from '..//..//assets/images/ict.gif';
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div> 
    <div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-6 "style={{minHeight: '400px'}}>
                <div class="position-relative h-100">
                    <img class="img-fluid position-absolute w-100 h-100" src={aboutimg} alt="" style={{objectFit:'cover'}}/>
                </div>
            </div>
            <div class="col-lg-6">
                <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                <h1 class="mb-4">Welcome to ICT Academy of Kerala eLEARNING</h1>
                <p class="mb-4">ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. The Company is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.</p>
               
                <div class="row gy-2 gx-4 mb-4">
                    <div class="col-sm-6">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Live Recordings</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Linkedin Learning</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Projects</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Assignments</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Internship</p>
                    </div>
                </div>
                <Link to="/about" class="btn btn-primary py-3 px-5 mt-2">Read More</Link>
                
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Aboutus