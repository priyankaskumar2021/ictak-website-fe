import React, { useEffect, useState } from 'react';
import "./AddCourse.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
import Select from 'react-select';

const UpdateCourse = () => {
  var [cat, setcat] = useState(null);
  var [status, setstatus] = useState(null);
  const options1 = [
    { value: 'Select', label: 'Select Registration Status..' },
    { value: 'Open', label: 'Open' },
    { value: 'Closed', label: 'Closed' },

  ]
  const options2 = [
    { value: 'Select', label: 'Select Course category..' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Institutional', label: 'Institutional' },
    { value: 'Corporate', label: 'Corporate' }
  ]
  
    let navigate = useNavigate();
    const { id } = useParams();
    console.log("Course Id", id)
  var [singleCourse, setSingleCourse] = useState({ title: "", type: "",description:"", cstatus: "",category: "",about: "",entrance: "",commence: "" ,orientation: "",lastdate: "",fees:"",duration:"",objectives:"",image:""})

  useEffect(() => {
    courseData();
}, []);

function courseData() {
    axios.get("http://localhost:3006/api/viewcourse")
        .then((response) => {
            console.log(response.data);
            setSingleCourse(singleCourse = response.data.find(i => i._id === id));
           console.log(singleCourse)
           
        }
        )
}

function contentChange(e) {
    const { name, value } = e.target; //destructuring
    setSingleCourse({ ...singleCourse, [name]: value });

}

function updateCourse() {     
  setSingleCourse(singleCourse.cstatus=status.value);
  setSingleCourse(singleCourse.category=cat.value);
  console.log("in update course",singleCourse)
    axios.post("http://localhost:3006/api/updatecourse", singleCourse )
        .then((res) => {
            alert("Successfully Updated");
            navigate("../admin/courses", { replace: true })
           
        }
        )
    
}
  
  var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files[0].name)
   setSingleCourse(singleCourse.image=event.target.files[0].name);
  };

 
  return (

    <div className="addcourse">
      <form className="screen" method="post">
        <div className="screen-header">
          
          <h1 className='app-title'>UPDATE COURSE</h1>
          
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-form">

              <label className="app-form-group">Course Title</label>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="Course Title" name="title"   value={singleCourse.title} onChange={contentChange} required disabled/>
              </div>

              <label className="app-form-group">Course Type</label>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="Course Type" name="type"  value={singleCourse.type} onChange={contentChange} required />
              </div>

              <label className="app-form-group">Course Description</label>
              <textarea required name="description"  value={singleCourse.description} onChange={contentChange} ></textarea>

              <label className="app-form-group">Registration Status</label>
              <Select options={options1} name="cstatus" className="app-form-control"  placeholder={singleCourse.cstatus}   onChange={setstatus} id="cstatus"/>

              <label className="app-form-group">Course Category</label>
              <Select options={options2} name="category" className="app-form-control"  placeholder={singleCourse.category}   onChange={setcat} id="category"/>

              <label className="app-form-group">About Course</label>
              <textarea required name="about"  value={singleCourse.about} onChange={contentChange} ></textarea>


              <label className="app-form-group">Entrance Examination</label>
              <div className="app-form-group">
                <input className="app-form-control" name="entrance" type="date" required  value={moment(singleCourse.entrance).format('YYYY-MM-DD')} onChange={contentChange}/>
              </div>

            </div>

          </div>
          <div className="screen-body-item">
            <div className="app-form">
            <label className="app-form-group">Commencement Date</label>
              <div className="app-form-group">
                <input className="app-form-control" name="commence" type="date" required  value={moment(singleCourse.commence).format('YYYY-MM-DD')} onChange={contentChange} />
              </div>

              <label className="app-form-group">Orientation Date</label>
              <div className="app-form-group">
                <input className="app-form-control" name="orientation" type="date" required  value={moment(singleCourse.orientation).format('YYYY-MM-DD')} onChange={contentChange}/>
              </div>

              <label className="app-form-group">Last Date of Registration</label>
              <div className="app-form-group">
                <input className="app-form-control" name="lastdate" type="date" required  value={moment(singleCourse.lastdate).format('YYYY-MM-DD')} onChange={contentChange} />
              </div>

              <label className="app-form-group">Course Fees</label>
              <div className="app-form-group">
                <input className="app-form-control" name="fees" type="text" required  value={singleCourse.fees} onChange={contentChange} />
              </div>

              <label className="app-form-group">Course Duration in Months</label>
              <div className="app-form-group">
                <input className="app-form-control" name="duration" type="text" required  value={singleCourse.duration} onChange={contentChange}/>
              </div>

            <label className="app-form-group">Course Objectives</label>
              <textarea required name="objectives"  value={singleCourse.objectives} onChange={contentChange}></textarea>


              <p><input type="file" accept="image/*" name="image" id="file" onChange={loadFile} /></p>
              <p><img id="output" width="100" /></p>
              <label for="file"></label><br />

              

              <div className="app-form-group buttons">
                <button className="app-form-button"  onClick={updateCourse}>UPDATE COURSE</button>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>


  );
};

export default UpdateCourse;