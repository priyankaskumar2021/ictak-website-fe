import {React,useEffect,useState} from 'react';
import '..//css/bootstrap.min.css';
import '..//css/style.css';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

function Institutional() {
    let navigate = useNavigate();
    let [Data, SetData] = useState([]);
    useEffect(() => {
        courseData();
    }, []);

    function courseData() {
        axios.get("http://localhost:3006/api/viewinstitutionalcourse")
            .then((response) => {
                console.log(response.data);
                SetData(Data = response.data);
                console.log(Data);
            }
            )
    }
  return (
    <> 
    {/*  Retail Page header and tagline*/}

    <header class="py-2 bg-dark  border-bottom mb-4">
        <div class="container">
            <div class="text-center my-5">
                <h1 class="fw-bolder" id='retailheading'>INSTITUTIONAL COURSES</h1>
               
            </div>
        </div>
    </header>

    {/*  Page content*/}
    <div class="container">
        <div class="row">

    {/* Course entries */}
    
            <div class="col-lg-8">
            <div class="row" >
            { Data.map((course, key) => (
                    <div class="col-lg-6">
                   
                        <div class="card mb-4">
                            <a href="#!"><img class="img-fluid" src={`./images/${course.image}`} alt="..." /></a>
                            <div class="card-body">
                                <div class="small text-muted">Status: {course.cstatus} </div>
                                <h2 class="card-title h4">{course.title}</h2>
                                <p class="card-text" id='coursedesc'>{course.description.substr(0,250)} </p>
                                <Link class="btn btn-primary" to={`/institutional/singlecourse/${course._id}`}>Read more →</Link>
                            </div>
                        </div>
                   
                      
                       
                    </div>
                     ))}
                    </div>
                </div>
             
                
            
            {/* Side widgets */}
            <div class="col-lg-4">
              
                <div class="card mb-4">
                    <div class="card-header">Search</div>
                    <div class="card-body">
                        <div class="input-group">
                            <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                            <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                        </div>
                    </div>
                </div>
              
                <div class="card mb-4">
                        <div class="card-header">Categories</div>
                        <div class="card-body" style={{display: 'flex',alignItems: 'center', textAlign: 'center'}}>
                            
                                
                            <Link to="/" class="nav-item nav-link">Retail</Link>
                            <Link to="/about" class="nav-item nav-link">Institutional</Link>
                            <Link to="/courses" class="nav-item nav-link">Corporate</Link>
                                
                          
                        </div>
                    </div>
               
                <div class="card mb-4">
                    <div class="card-header">Extra Remarks</div>
                    <div class="card-body">Will update soon with some contents....!!!</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Institutional;