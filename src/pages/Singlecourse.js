
import '..//css/bootstrap.min.css';
import '..//css/style.css';
import { useParams ,Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Singlecourse() {
    var obj=[];
    var agenda=[];
    var [Objs,setObjs]=useState([]);
    var [Agendas,setAgendas]=useState([]);
    const { id } = useParams();
    console.log("Course Id", id);
    let [singleCourse, setSingleCourse] = useState([]);
    useEffect(() => {
        courseData();
    }, []);

    function courseData() {
        axios.get(`http://localhost:3006/api/viewcourse`)
            .then((response) => {
                console.log(response.data);
                setSingleCourse(singleCourse = response.data.find(i => i._id === id));
                console.log(singleCourse.image)
                obj=singleCourse.objectives.split("\n");
                setObjs(obj)
               agenda=singleCourse.about.split("\n");
               setAgendas(agenda)
            }
            )
    }
  return (
    <>
    <div class="container mt-5">
            <div class="row">
                <div class="col-lg-8">
               
                  
                        {/* <!-- Post header--> */}
                        <header class="mb-4">
                            {/* <!-- Post title--> */}
                            <h1 class="fw-bolder mb-1">{singleCourse.title}</h1>
                           
                            {/* <!-- Post categories--> */}
                            <Link class="badge bg-secondary text-decoration-none link-light" to="/register" style={{marginRight:'10px'}}>Register for Course</Link>
                            <Link class="badge bg-secondary text-decoration-none link-light" to="/contact">Contact Us</Link>
                            
                        </header>
                        {/* <!-- Preview image figure--> */}
                        <div class="mb-4"><img class="img-fluid rounded" src={`./images/${singleCourse.image}`} alt="..." /></div>
                        {/* <!-- Post content--> */}
                        <section class="mb-5">
                            <h2 class="fw-bolder mb-4 mt-5">About the course</h2>
                            <p class="fs-5 mb-4" id='coursedesc'>{singleCourse.description}</p>
                           
                            <h2 class="fw-bolder mb-4 mt-5">Objectives</h2>
                            {
                             Objs.map((objectives, key) => (
                            <div class="col-lg-12">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>{objectives}</p>
                    </div>
                              ) )}
                   
                        </section>
                  
                  </div> 
                {/* <!-- Side widgets--> */}
                <div class="col-lg-4">
                    {/* <!-- Search widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Search</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Categories widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Eligibility​</div>
                        <div class="card-body" >
                            
                        <p class="mb-4" id='coursedesc'>Graduates from Engineering/Science or 3Yr-Diploma in any of the engineering branches, having a foundation level knowledge (plus two equivalent) in Mathematics and Computer fundamental skills, can apply for the course. </p>      
                        <p class="mb-4" id='coursedesc'>Students who have completed their graduation, but awaiting the final results can also apply.</p>      
                        <p class="mb-4" id='coursedesc'>Please note in case we, ICT Academy of Kerala detect any ineligibility at any stage the candidature will be cancelled accordingly.</p>      
                            
                          
                        </div>
                    </div>
                    {/* <!-- Side widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Course Highlights</div>
                        <div class="card-body">
                        <div class="col-lg-12">
                        <ul class="list-group">
                        <li class="list-group-item">100% scholarship for female candidates</li>
                        <li class="list-group-item">70% scholarship for male candidates </li>
                        <li class="list-group-item">Access to Linkedin learning with 14,000 courses</li>
                        <li class="list-group-item">125 hrs virtual internship with TCS Ion</li>
                        <li class="list-group-item">100% placement assistance guarantee*</li>
                        </ul>
                       
                    </div>
                    
                    
                            
                            </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">Course Agenda</div>
                        <div class="card-body">
                        <div class="col-lg-12">
                        <ul class="list-group">
                        {
                        Agendas.map((a, key) => (
                        <li class="list-group-item">{a}</li>
                        ))}
                        </ul>
                       
                    </div>
                    
                    
                            
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Singlecourse