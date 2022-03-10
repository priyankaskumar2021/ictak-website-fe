import React from 'react';
import "./AddCourse.css";
import MyForm from './DbForm';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AddCourse = () => {
  let navigate = useNavigate();
  var [myvalue, setmyValue] = MyForm({ title: "", type: "",description:"", cstatus: "",category: "",about: "",entrance: "",commence: "" ,orientation: "",lastdate: "",fees:"",duration:"",objectives:"",image:""})
  const addCourse = () => {
      console.log(myvalue);
      
      axios.post("http://localhost:3006/api/addcourse", myvalue);
              alert("Successfully Added")
              navigate("../admin/courses", { replace: true })
          
      
  }
  
  var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files[0].name)
   setmyValue(myvalue.image=event.target.files[0].name);
  };
var getStatus=()=>{
  var e = document.getElementById("cstatus");
var st = e.options[e.selectedIndex].text;
console.log(st);
setmyValue(myvalue.cstatus=st);
}
var getCategory=()=>{
  var e = document.getElementById("category");
var ct = e.options[e.selectedIndex].text;
console.log(ct);
setmyValue(myvalue.category=ct);
}
 
  return (

    <div className="addcourse">
      <form className="screen">
        <div className="screen-header">
          
          <h1 className='app-title'>ADD NEW COURSE</h1>
          
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-form">

              <label className="app-form-group">Course Title</label>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="Course Title" name="title"  value={myvalue.title} onChange={setmyValue} required/>
              </div>

              <label className="app-form-group">Course Type</label>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="Course Type" name="type"  value={myvalue.type} onChange={setmyValue} required />
              </div>

              <label className="app-form-group">Course Description</label>
              <textarea required name="description"  value={myvalue.description} onChange={setmyValue} ></textarea>

              <label className="app-form-group">Registration Status</label>
              <select name="cstatus" className="app-form-control" id="cstatus" onClick={getStatus}>
                <option >select</option>
                <option  value="open">Open</option>
                <option value="closed">Closed</option>
              </select>

              <label className="app-form-group">Course Category</label>
              <select name="category" class="app-form-control" id="category"  onClick={getCategory}>
                <option>select</option>
                <option  value="retail">Retail</option>
                <option  value="institutional">Institutional</option>
              </select>

              <label className="app-form-group">About Course</label>
              <textarea required name="about"  value={myvalue.about} onChange={setmyValue} ></textarea>


              <label className="app-form-group">Entrance Examination</label>
              <div className="app-form-group">
                <input className="app-form-control" name="entrance" type="date" required  value={myvalue.entrance} onChange={setmyValue}/>
              </div>

            </div>

          </div>
          <div className="screen-body-item">
            <div className="app-form">
            <label className="app-form-group">Commencement Date</label>
              <div className="app-form-group">
                <input className="app-form-control" name="commence" type="date" required  value={myvalue.commence} onChange={setmyValue} />
              </div>

              <label className="app-form-group">Orientation Date</label>
              <div className="app-form-group">
                <input className="app-form-control" name="orientation" type="date" required  value={myvalue.orientation} onChange={setmyValue}/>
              </div>

              <label className="app-form-group">Last Date of Registration</label>
              <div className="app-form-group">
                <input className="app-form-control" name="lastdate" type="date" required  value={myvalue.lastdate} onChange={setmyValue} />
              </div>

              <label className="app-form-group">Course Fees</label>
              <div className="app-form-group">
                <input className="app-form-control" name="fees" type="text" required  value={myvalue.fees} onChange={setmyValue} />
              </div>

              <label className="app-form-group">Course Duration in Months</label>
              <div className="app-form-group">
                <input className="app-form-control" name="duration" type="text" required  value={myvalue.duration} onChange={setmyValue}/>
              </div>

            <label className="app-form-group">Course Objectives</label>
              <textarea required name="objectives"  value={myvalue.objectives} onChange={setmyValue}></textarea>


              <p><input type="file" accept="image/*" name="image" id="file" onChange={loadFile} /></p>
              <p><img id="output" width="100" /></p>
              <label for="file"></label><br />

              

              <div className="app-form-group buttons">
                <button className="app-form-button"  onClick={addCourse}>ADD COURSE</button>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>


  );
};

export default AddCourse;