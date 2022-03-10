import React, { useEffect, useState } from 'react';
import "./UpdateReg.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Select from 'react-select';


const UpdateReg = () => {
    
    let navigate = useNavigate();
    const { id } = useParams();
    console.log("Registration Id", id)
    var [singleReg, setSingleReg] = useState({ name: "", email: "", mobileno: "", course: "", amount: ""})
    //var [singleReg1, setSingleReg1] = useState({ name: "", email: "", mobileno: "", course: "", amount: ""})
    var [sel, setsel] = useState(null);
    const options = [
        { value: 'Select', label: 'Select Course..' },
        { value: 'FULL STACK DEVELOPMENT', label: 'FULL STACK DEVELOPMENT' },
        { value: 'SOFTWARE TESTING', label: 'SOFTWARE TESTING' },
        { value: 'DATA SCIENCE AND ANALYTICS', label: 'DATA SCIENCE AND ANALYTICS' },
        { value: 'CYBER SECURITY', label: 'CYBER SECURITY' },
        { value: 'ROBOTIC PROCESS AUTOMATION', label: 'ROBOTIC PROCESS AUTOMATION' },
        { value: 'DIGITAL MARKETING', label: 'DIGITAL MARKETING' }
      ]

    useEffect(() => {
        registrationData();
    }, []);

    function registrationData() {
        axios.get("http://localhost:3006/api/viewreg")
            .then((response) => {
                console.log(response.data);
                setSingleReg(singleReg = response.data.find(i => i._id === id));
                console.log(singleReg)
            }
            )
    }

    function contentChange(e) {
        const { name, value } = e.target; //destructuring
        setSingleReg({ ...singleReg, [name]: value });
    }
    function updateReg() {
        setSingleReg(singleReg.course=sel.value);
       // console.log(singleReg);
        axios.post("http://localhost:3006/api/updatereg", singleReg)
            .then((res) => {
                alert("Successfully Updated");
                navigate("../admin/registration", { replace: true })
            }
            )
    }

    
   
    return (
        <div className='updatereg'>
            <h1 align="center" className='updatehead'>UPDATE REGISTRATION DETAILS</h1>
            <form>
                <label for="name">First Name</label>
                <input type="text" className='textfields' name="name"   value={singleReg.name} onChange={contentChange} required  />

                <label for="email">Email</label>
                <input type="email" className='textfields' name="email" value={singleReg.email} onChange={contentChange} required />
                <label for="mobileno">Mobile Number</label>
                <input type="text" className='textfields' name="mobileno" value={singleReg.mobileno} onChange={contentChange} required />

                <label for="country">Course</label>
                
                <Select options={options} className="course" name="course"  placeholder={singleReg.course}  onChange={setsel} id="course"/>
                <label for="amount">Amount</label>
                <input type="text" className='textfields' name="amount" value={singleReg.amount} onChange={contentChange} required />
                <input type="submit" value="Update" className='update'   onClick={updateReg} />
            </form>

        </div>
    );
};

export default UpdateReg;