import React from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';
import chairman from '../assets/images/chairman.png'
import ceo from '../assets/images/ceo.jpg';
import thomas from '../assets/images/thomas.jpg';
import vinu from '../assets/images/vinu.png';
import anish from '../assets/images/anish.jpg';
import meera from '../assets/images/meera.jpg';
import krishna from '../assets/images/krishna.jpg';
import patron1 from '../assets/images/patron1.jpg';
import patron2 from '../assets/images/patron2.jpg';
import patron3 from '../assets/images/patron3.jpg';
import patron4 from '../assets/images/patron4.jpg';
import patron5 from '../assets/images/patron5.jpg';
import patron6 from '../assets/images/patron6.png';
import patron7 from '../assets/images/patron7.jpg';
import knowledge1 from '../assets/images/knowledge.jpg';
import knowledge2 from '../assets/images/knowledge1.jpg';
import knowledge3 from '../assets/images/knowledge2.jpg';
import knowledge4 from '../assets/images/knowledge3.png';
import knowledge5 from '../assets/images/knowledge4.jpg';
import knowledge6 from '../assets/images/knowledge5.jpg';
import knowledge7 from '../assets/images/knowledge6.jpg';
import industry from '../assets/images/industry.jpg';
import industry1 from '../assets/images/industry1.jpg';
import industry2 from '../assets/images/industry2.jpg';
import industry3 from '../assets/images/industry3.jpg';
import industry4 from '../assets/images/industry4.jpg';
import industry5 from '../assets/images/industry5.jpg';
import industry6 from '../assets/images/industry6.jpg';

function About() {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src={chairman} alt="" style={{objectFit: "contain"}}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 class="mb-4">Welcome to ICT Academy of Kerala <b style={{color:'teal'}}>eLEARNING</b></h1>
                    <p class="mb-4" style={{textAlign:'justify'}}>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. The Company is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.</p>
                    <h5 class="mb-4">Our Key Focus Areas</h5>
                    <div class="row gy-2 gx-4 mb-4">
                        <div class="col-sm-12">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Industry focused enablement programmes for Faculty members</p>
                        </div>
                        <div class="col-sm-12">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Industry focused ICT Skills development programmes for Students</p>
                        </div>
                        <div class="col-sm-12">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Project assignments related to capability building for Institutions and Corporate.</p>
                        </div>
                        <div class="col-sm-12">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Creating Intellectual Property on niche skill areas and emerging technologies.</p>
                        </div>
                        
                    </div>
                    <h5 class="mb-4">Our Vision</h5>
                    <p class="mb-4" style={{textAlign:'justify'}}>To emerge as the single-point establishment 
                    for all the ICT related capability building in the State</p>
                    <a class="btn btn-primary py-3 px-5 mt-2" href="./courses">View Courses</a>
                </div>
            </div>
        </div>
    </div>

    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center" >
            <h1 class="mb-5">CEO</h1>
            <div class="container-fluid col-md-8 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item ">
                        <div class="overflow-hidden">
                            <img class="border rounded-circle p-2 mx-auto mb-3" src={ceo} alt=""  style={{borderRadius:'10px'}}/>
                        </div>
                        <div class="position-relative d-flex justify-content-center" >
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Santhosh</h5>
                            <small>Chief Executive Officer</small>
                        </div>
                    </div>
                </div>
                <h6 class="section-title bg-white text-center text-primary px-3">Our Team</h6>
                <h1 class="mb-5">Expert Instructors</h1>
               
            </div>
            <div class="row g-4">
                <div class="col-lg " data-wow-delay="0.1s">
                    <div class="team-item">
                    <div class="overflow-hidden" style={{display:'flex', flexDirection:'column', borderRadius:'10px'}}>
                            <img class="border rounded-circle p-2 mx-auto mb-3"   src={thomas} alt=""/>
                        </div>
                        <div class="position-relative d-flex justify-content-center" >
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Mr. Thomas Zachariah</h5>
                            <small>Master Trainer Life Skills</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item">
                        <div class="overflow-hidden" style={{display:'flex', flexDirection:'column', borderRadius:'10px'}}>
                            <img class="border rounded-circle p-2 mx-auto mb-3"   src={vinu} alt=""/>
                        </div>
                        <div class="position-relative d-flex justify-content-center" >
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Mr. Vinu Reghunath</h5>
                            <small>Master Trainer Life Skills</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item">
                        <div class="overflow-hidden" style={{display:'flex', flexDirection:'column', borderRadius:'10px'}}>
                            <img class="border rounded-circle p-2 mx-auto mb-3"   src={anish} alt=""/>
                        </div>
                        <div class="position-relative d-flex justify-content-center" >
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Mr.Anish Nair</h5>
                            <small>IT Trainer</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item">
                        <div class="overflow-hidden" style={{display:'flex', flexDirection:'column', borderRadius:'10px'}}>
                            <img class="border rounded-circle p-2 mx-auto mb-3"   src={meera} alt=""/>
                        </div>
                        <div class="position-relative d-flex justify-content-center" >
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Ms. Meera Menon</h5>
                            <small>IT Trainer</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item">
                        <div class="overflow-hidden"  style={{display:'flex', flexDirection:'column', borderRadius:'10px'}}>
                            <img class="border rounded-circle p-2 mx-auto mb-3" src={krishna} alt=""/>
                        </div>
                        <div class="position-relative d-flex justify-content-center" >
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Mr. Krishna Raj</h5>
                            <small>Master Trainer Life Skills</small>
                        </div>
                    </div>
                </div>
               
                
            </div>
        </div>
    </div>

    
        <div class="container">
            <div class="text-center my-5">
                <h6 class="section-title bg-white text-center text-primary px-3">Patrons </h6>
              

                
            </div>
            <div class="row g-4">
                <div class="col-lg " data-wow-delay="0.1s">
             
                    <img class="border rounded p-2 mx-5 mb-3" src={patron1} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={patron2} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={patron3} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={patron4} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={patron5} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={patron6} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={patron7} style={{width: "80px" ,height: "80px"}}/>
                    
                    
                    
                </div>
                </div>
                </div>
                
                
                <div class="container">
            <div class="text-center my-5">
               
               
            <h6 class="section-title bg-white text-center text-primary px-3">Knowledge Partners</h6>
                
            </div>
            <div class="row g-4">
                <div class="col-lg " data-wow-delay="0.1s">
             
                    <img class="border rounded-circle p-2 mx-5 mb-3" src={knowledge7} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded-circle p-2 mx-5 mb-3" src={knowledge1} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded-circle p-2 mx-5 mb-3" src={knowledge2} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded-circle p-2 mx-5 mb-3" src={knowledge3} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded-circle p-2 mx-5 mb-3" src={knowledge4} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded-circle p-2 mx-5 mb-3" src={knowledge5} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded-circle p-2 mx-5 mb-3" src={knowledge6} style={{width: "80px" ,height: "80px"}}/>
                    
                    
                    
                </div>
                </div>
                </div>
               
               
                <div class="container">
            <div class="text-center my-5">
              
            <h6 class="section-title bg-white text-center text-primary px-3">Industrial Partners</h6>

                
            </div>
            <div class="row g-4">
                <div class="col-lg " data-wow-delay="0.1s">
             
                    <img class="border rounded p-2 mx-5 mb-3" src={industry} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={industry1} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={industry2} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={industry3} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={industry4} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={industry5} style={{width: "80px" ,height: "80px"}}/>
                    <img class="border rounded p-2 mx-5 mb-3" src={industry6} style={{width: "80px" ,height: "80px"}}/>
                    
                    
                    
                </div>
                </div>
                </div>
                
    </div>
   
  )
}

export default About