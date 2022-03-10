import React from 'react';


function Footer() {
  return (
    <>
   <footer class="text-center text-lg-start "  style={{position: 'sticky'}} >
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >

    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>

  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">
     
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>ICTAK
          </h6>
          <p>
          "We conduct various programs which leverages the link between industry and academia. 
          These interactions not only limits to students, but also extends to faculties too" 
         
          </p>
        </div>
    

    
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
        Quick links
          </h6>
          <p>
            <a href="#!" class="text-reset" style={{textDecoration:'none'}}>Full Stack Development</a>
          </p>
          <p>
            <a href="#!" class="text-reset" style={{textDecoration:'none'}}>Cyber Security</a>
          </p>
          <p>
            <a href="#!" class="text-reset" style={{textDecoration:'none'}}>Data science & Analytics</a>
          </p>
          <p>
            <a href="#!" class="text-reset" style={{textDecoration:'none'}}>Software Testing</a>
          </p>
        </div>
       

     
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
          
          </h6>
          <p>
            <a href="/courses" class="text-reset" style={{textDecoration:'none'}}>Courses</a>
          </p>
          <p>
            <a href="/about" class="text-reset" style={{textDecoration:'none'}}>About Us</a>
          </p>
          <p>
            <a href="#" class="text-reset" style={{textDecoration:'none'}}>Events</a>
          </p>
          <p>
            <a href="/contact" class="text-reset" style={{textDecoration:'none'}}>Contact Us</a>
          </p>
        </div>
      

       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i>ICT ACADEMY HQ <br/> 
            G1,Ground Floor, Thejaswini Building,
            Technopark, Thiruvananthapuram,<br/>
                Kerala, India.</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@ictak.org
          </p>
          <p><i class="fas fa-phone me-3"></i> + 91 759 405 1437</p>
          <p><i class="fas fa-print me-3"></i> + 91 471 270 0811</p>
        </div>
      
      </div>
    
    </div>
  </section>


 
  <div class="text-center p-4" >
    © 2022 Copyright : 
    <a class="text-reset fw-bold" href="https://ictkerala.org/" style={{textDecoration:'none', marginLeft:"5px" }}>ICTAK</a>
  </div>
  
</footer>

</>
  )
}

export default Footer