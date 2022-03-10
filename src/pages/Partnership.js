import React from 'react';
import '..//css/bootstrap.min.css';
import '..//css/style.css';
import partnership from '..//assets/images/partnership.jpg'

function Partnership() {
  return (
    <div>
        <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src={partnership} alt="" style={{objectFit: "contain"}}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start text-primary pe-3">Partnership With Us</h6>
                    <h1 class="mb-4">Training Service Provider</h1>
                    <p class="mb-4" style={{textAlign:'justify'}}>Fantabulous Opportunity to handhold Nation Building Process with ICT Academy of kerala. </p>
                    <h5 class="mb-4">Download Partnership Proposal</h5>
                    <div class="row gy-2 gx-4 mb-4">
                    <a class="btn btn-primary py-3 px-5 mt-2" href="./assets/ICTAK.pdf">Click Here</a>
                        
                    </div>
                    <h5 class="mb-4">Click here to Fill the Form</h5>
                    
                    <div class="row gy-2 gx-4 mb-4">
                    <a class="btn btn-primary py-3 px-5 mt-2" href="">Enter the details</a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Partnership