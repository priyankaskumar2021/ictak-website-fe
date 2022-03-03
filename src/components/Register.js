import React from 'react';
import './register.css';
import MyForm from './DbForm';
import axios from 'axios';

function Register() {

  var [myvalue, setmyValue] = MyForm({ email: "", course: ""})
  
  function sendBrochure() {
    axios.post("http://localhost:3006/sendbrochure",myvalue)
        .then((response) => {
          console.log("Data",myvalue)
          alert
        }
        )
}

var getCourse=()=>{
  var e = document.getElementById("course");
var sc = e.selectedIndex;
let bname="";
if(sc===1)
bname="FSD.pdf";
else if(sc===2)
bname="DSA.pdf";
else if(sc===3)
bname="CSA.pdf"
else if(sc===4)
bname="ST.pdf"
else if(sc===5)
bname="RPA.pdf"
else if(sc===6)
bname="DM.pdf"
console.log(bname);
setmyValue(myvalue.course=bname);
}

  return (
   
    <form class="container py-5 h-100"   style={{border:'none'}}  >
      <div class="row d-flex justify-content-center align-items-center h-100"  style={{border:'none'}}>
        <div class="col">
          <div class="full card card-registration my-4" style={{border:'none'}}>
            <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
              <div className="div1 container-sm">
    <h3 className='learnersside'>Learners Side</h3>
    <h1 className='youcanlearn'>You Can Learn Anything</h1>
    <p>Start growing your career by building a deep understanding in</p>
    <p className='coursenames' ><b>FULLSTACK DEVELOPMENT</b></p><br/> 
    <p className='coursenames'><b> CYBER SECURITY</b></p><br/> 
    <p className='coursenames'><b>DATA SCIENCE AND ANALYTICS</b></p><br/> 
    <p className='coursenames'><b>SOFTWARE TESTING</b></p><br/> 
    <p className='coursenames'><b>ROBOTIC PROCESS AUTOMATION</b></p><br/>
    <p className='coursenames'><b>DIGITAL MARKETING</b></p><br/>
       
      
    <button type="button" class="coursebtn btn btn-info">Learner's Start Here</button>
        </div>
              </div>
              <div class="col-xl-6">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase">Register for Brochure</h3>
  
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1m">First name</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1n">Last name</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example97" class="form-control form-control-lg"   name ="email" value={myvalue.email} onChange={setmyValue}/>
                    <label class="form-label" for="form3Example97"  >Email ID</label>
                  </div>
                  
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example8" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example8">Address</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example90" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example90">Pincode</label>
                  </div>
  
  
                  <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
  
                    <h6 class="mb-0 me-4">Gender: </h6>
  
                    <div class="form-check form-check-inline mb-0 me-4">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="femaleGender"
                        value="option1"
                      />
                      <label class="form-check-label" for="femaleGender">Female</label>
                    </div>
  
                    <div class="form-check form-check-inline mb-0 me-4">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="maleGender"
                        value="option2"
                      />
                      <label class="form-check-label" for="maleGender">Male</label>
                    </div>
  
                    <div class="form-check form-check-inline mb-0">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="otherGender"
                        value="option3"
                      />
                      <label class="form-check-label" for="otherGender">Other</label>
                    </div>
  
                  </div>
  
                 
  
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example9" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example9">Mobile</label>
                  </div>
  
                  
                  <div class="form-outline mb-4">
                  <select class="select form-control form-control-lg" id="course" onClick={getCourse}>
                        <option value="1">Select Course</option>
                        <option value="2">Fullstack Development</option>
                        <option value="3">Cyber Security</option>
                        <option value="4">DATA SCIENCE AND ANALYTICS</option>
                        <option value="5">Software Testing</option>
                      </select>
                   
                  </div>
  
                  
  
                  <div class="d-flex justify-content-end pt-3">
                    <button type="button" class="btn btn-light btn-lg">Reset all</button>
                    <button type="button" class="btn btn-warning btn-lg ms-2" onClick={sendBrochure}>Get Brochure</button>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  
  )
}

export default Register