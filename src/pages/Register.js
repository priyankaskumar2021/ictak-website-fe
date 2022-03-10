
import './register.css';
import axios from 'axios';
import  React , {useEffect, useState} from 'react';
import validation from "./validation"

function Register() {
  //Code to add to db

const[formValues,setFormValues]=useState({name:"",email:"",mobileno:"",course:"",amount:""});
const [isSubmit,setIsSubmit]=useState(false);
const [formErrorValues, setFormErrorValues] = useState({});


const handleSubmit=(event)=>{
  event.preventDefault();
  console.log(formValues);
      setFormErrorValues(validation(formValues));
      console.log(formErrorValues);
      setIsSubmit(true);
}


useEffect(()=>{
  if(Object.keys(formErrorValues).length === 0 && isSubmit)
  addUsers();
}, [formErrorValues]);

const addUsers=()=>{

    axios.post("http://localhost:3006/api/addreg",formValues).then(
      (res)=>{
        sendBrochure();
        alert('Registered Successfully!!Check your email for detailed Brochure')
      
      });
    }


const handleChange = (event) => {

  const { name, value } = event.target; 

  setFormValues({ ...formValues, [name]: value });

}
const handleChange1 = () => {

if(formValues.course==='FSD')
setFormValues({ ...formValues, 'amount': '500' });

else if(formValues.course==='ST')
setFormValues({ ...formValues, 'amount': '600' });

else if(formValues.course==='CS')
setFormValues({ ...formValues, 'amount': '700' });

else if(formValues.course==='DSA')
setFormValues({ ...formValues, 'amount': '800' });
else if(formValues.course==='RPA')
setFormValues({ ...formValues, 'amount': '900' });
else if(formValues.course==='DM')
setFormValues({ ...formValues, 'amount': '600' });
}

//Brochure
 
  function sendBrochure() {
    console.log("in sent brochure",formValues.email)
 
    axios.post("http://localhost:3006/sendbrochure",formValues)
        .then((response) => {
          console.log("Data",formValues)
          
        }
        )
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
    <p align="center">Start growing your career by building a deep understanding in</p>
    <p className='coursenames' ><b>FULLSTACK DEVELOPMENT</b></p><br/> 
    <p className='coursenames'><b> CYBER SECURITY</b></p><br/> 
    <p className='coursenames'><b>DATA SCIENCE AND ANALYTICS</b></p><br/> 
    <p className='coursenames'><b>SOFTWARE TESTING</b></p><br/> 
    <p className='coursenames'><b>ROBOTIC PROCESS AUTOMATION</b></p><br/>
    <p className='coursenames'><b>DIGITAL MARKETING</b></p><br/>
       
      
    <button type="button" className="coursebtn btn btn-info">Learner's Start Here</button>
        </div>
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">Register for Brochure</h3>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example8" class="form-control form-control-lg"  name="name" value={formValues.name} onChange={handleChange}/>
                    <label className="form-label" for="form3Example8">Full Name</label>
                  </div>
                  <span className='error' style={{color:'red'}}>{formErrorValues.name}</span> <br />
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example97" class="form-control form-control-lg" name ="email" value={formValues.email} onChange={handleChange}/>
                    <label class="form-label" for="form3Example97"  >Email ID</label>
                  </div>
                  <span className='error' style={{color:'red'}}>{formErrorValues.email}</span> <br />
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example8" class="form-control form-control-lg"  name ="mobileno" value={formValues.mobileno} onChange={handleChange}/>
                    <label class="form-label" for="form3Example8">Mobile Number</label>
                  </div>
                  <span className='error' style={{color:'red'}}>{formErrorValues.mobileno}</span> <br />
                  <div class="form-outline mb-4">
                  <select class="select form-control form-control-lg" id="course" value={formValues.course} name="course"  onChange={handleChange} onMouseOut={handleChange1}>
                        <option defaultValue>Select Course..</option>
                        <option value="FULL STACK DEVELOPMENT">FULL STACK DEVELOPMENT</option>
                        <option value="SOFTWARE TESTING">SOFTWARE TESTING</option>
                        <option value="DATA SCIENCE AND ANALYTICS">DATA SCIENCE AND ANALYTICS</option>
                        <option value="CYBER SECURITY">CYBER SECURITY</option>
                        <option value="ROBOTIC PROCESS AUTOMATION">ROBOTIC PROCESS AUTOMATION</option>
                        <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
                      </select>
                      <span className='error' style={{color:'red'}}>{formErrorValues.course}</span> <br />
                  </div>
  
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example9"  onChange={handleChange} onMouseOut={handleChange1} class="form-control form-control-lg"   type="number" value={formValues.amount} name='amount' readOnly/>
                    <label class="form-label" for="form3Example9">Amount</label>
                  </div>
                  
  
                  <div class="d-flex justify-content-end pt-3">
                    <button type="button" class="btn btn-light btn-lg">Reset all</button>
                    <button type="button" class="btn btn-warning btn-lg ms-2" onClick={handleSubmit}>Register and get Brochure</button>
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