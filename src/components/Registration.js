import './Registration.css'
import  React , {useEffect, useState} from 'react';
import axios from 'axios';
import validation from "./validation"
export default function Registration() {


  const[formValues,setFormValues]=useState({username:"",email:"",mobileno:"",course:"",amount:""});
  const [isSubmit,setIsSubmit]=useState(false);
  const [formErrorValues, setFormErrorValues] = useState({});


  const handleSubmit=(event)=>{
    event.preventDefault();
        setFormErrorValues(validation(formValues));
        setIsSubmit(true);
  }


  useEffect(()=>{
    if(Object.keys(formErrorValues).length === 0 && isSubmit)
    addUsers();
  }, [formErrorValues]);

  const addUsers=()=>{

      axios.post("http://localhost:3006/api/addreg",formValues).then(
        (res)=>{
          alert('Registered Successfully!!')
        console.log('Successfully added data');
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
  return (
    <div>
      <div className="container">
      Registration
      <form  className="registration">
      <label>Name :</label>
         <input onChange={handleChange}type="text" name="name"placeholder='Enter Name' value={formValues.name}/>
         <span className='error' style={{color:'red'}}>{formErrorValues.name}</span> <br/>
         <label>Email :</label>
         <input type="text" onChange={handleChange} name="email" placeholder='Enter Email'value={formValues.email}/>
         <span className='error' style={{color:'red'}}>{formErrorValues.email}</span> <br/>
         <label>Mobile No :</label>
         <input type="text" onChange={handleChange} name="mobileno" placeholder='Enter Mobile No'value={formValues.mobileno} />
         <span className='error' style={{color:'red'}}>{formErrorValues.mobileno}</span> <br/>
         <label>course :</label>
         <select onChange={handleChange} onMouseOut={handleChange1} defaultValue="Select Course" value={formValues.course} name="course">
         <option defaultValue>Select Course..</option>
                        <option value="FSD">FULL STACK DEVELOPMENT</option>
                        <option value="ST">SOFTWARE TESTING</option>
                        <option value="DSA">DATA SCIENCE AND ANALYTICS</option>
                        <option value="CS">CYBER SECURITY</option>
                        <option value="RPA">ROBOTIC PROCESS AUTOMATION</option>
                        <option value="DM">DIGITAL MARKETING</option>
                        </select> 
                        <span className='error' style={{color:'red'}}>{formErrorValues.course}</span> <br />
       <label>Amount :</label>
        <input  type="number" value={formValues.amount} name='amount' readOnly/><br/> 

         <button onClick={handleSubmit} className="submit">Submit</button> <br />
      </form>

      </div>
    </div>
  )
}
