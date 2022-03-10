import React from 'react';
import { Link } from 'react-router-dom';
import cat1 from '..//assets/images/cat-1.jpg';
import cat2 from '..//assets/images/cat-2.jpg';
import cat3 from '..//assets/images/cat-3.jpg';
import cat4 from '..//assets/images/cat-4.jpg';

function Courses() {
  return (
    <div class="container-xxl py-5 category">
    <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">Categories</h6>
            <h1 class="mb-5">Course Categories</h1>
        </div>
        <div class="row g-3">
            <div class="col-lg-7 col-md-6">
                <div class="row g-3">
                    <div class="col-lg-12 col-md-12 wow zoomIn">
                        <Link to="/retail" class="position-relative d-block overflow-hidden" >
                            <img class="img-fluid" src={cat1} alt=""/>
                            <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" >
                                <h5 class="m-0">Retail</h5>
                                <small class="text-primary">10 Courses</small>
                            </div>
                        </Link>
                    </div>
                    <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                        <Link to="/insti" class="position-relative d-block overflow-hidden">
                            <img class="img-fluid" src={cat2} alt=""/>
                            <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" >
                                <h5 class="m-0">Institutional</h5>
                                <small class="text-primary">10 Courses</small>
                            </div>
                        </Link>
                    </div>
                    <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                    <Link to="/corporate" class="position-relative d-block overflow-hidden" >
                            <img class="img-fluid" src={cat3} alt=""/>
                            <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" >
                                <h5 class="m-0">Corporate</h5>
                                <small class="text-primary">10 Courses</small>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: "350px"}}>
                <a class="position-relative d-block h-100 overflow-hidden" href="">
                    <img class="img-fluid position-absolute w-100 h-100" src={cat4} alt="" />
                    <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" >
                        <h5 class="m-0">Other Courses</h5>
                        <small class="text-primary">0 Courses</small>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Courses