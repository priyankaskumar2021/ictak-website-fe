import React from 'react';
import '..//..//css/style.css';


function Content() {
  return (
    <div className='content'>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 ">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                        <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                            <h5 className="mb-3">Industry Connects</h5>
                            <p>We conduct various programs which leverages the link between 
                                industry and academia.  </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 " >
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5 className="mb-3">Linkedin Learning</h5>
                            <p>Learn the most in-demand Business, Technology, & Creative Skills </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" >
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-home text-primary mb-4"></i>
                            <h5 className="mb-3">Internship</h5>
                            <p>The internship program strategies are very specific measurable and realistic  </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" >
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                            <h5 className="mb-3">100% Placement*</h5>
                            <p>100% Placement Assistance Guarantee with a minimum of 2 job opportunities to the students.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </div>
  )
}

export default Content;