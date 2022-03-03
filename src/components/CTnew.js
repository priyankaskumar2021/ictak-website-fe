import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment";
import Icon from "react-crud-icons";
import { useNavigate } from "react-router-dom";
import "./CTNew.css";

const CTNew = () => {
    var cid;
    let navigate = useNavigate();
    let [Data, SetData] = useState([]);
    useEffect(() => {
        courseData();
    }, []);

    function courseData() {
        axios.get("http://localhost:3006/api/viewcourse")
            .then((response) => {
                console.log(response.data);
                SetData(Data = response.data);
            }
            )
    }
    function updateCourse(event) {
        
        cid = event.target.getAttribute("name");
        console.log("in update", cid)
        var s = `../updatecourse/${cid}`;
        console.log(s)
        navigate(s, { replace: true })
    }
    function deleteCourse(event) {
        
        cid = event.target.getAttribute("name");
        axios.post("http://localhost:3006/api/deletecourse", { _id: cid })
        .then((res) => {
            alert("Successfully Deleted");

            navigate("../courses", { replace: true })
        })
    }
    function add() {
        navigate("../addcourse", { replace: true })
    }

    return (



        <div className="container">
            <div className="icons">
                <Icon
                    name="add"
                    tooltip="Add"
                    theme="light"
                    size="small"
                    onClick={add}
                />
            </div>

            <h2 className='coursehead'>List of Courses Offered</h2>
            <div class="row">
                <div class="col-lg-11 mx-auto">
                    <div class="card border-0 shadow">
                        <div class="card-body p-5">


                            <div class="table-responsive">
                                <table class="table m-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Course Title</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">Fees</th>
                                            <th scope="col">Last Date</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Data.map((course, key) => (
                                                
                                                <tr>
                                                    
                                                    <th scope="row">{course.title}</th>
                                                    <td>{course.duration}</td>
                                                    <td>{course.fees}</td>
                                                    <td>{moment(course.commence).format('DD-MM-YYYY')}</td>
                                                    <td>
                                                     
                                                        <ul className="list-inline m-0">
                                                           
                                                            <li className="list-inline-item">
                                                                <button className="btn btn-success btn-sm rounded-0" name={course._id} onClick={updateCourse} type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit" name={course._id} onClick={updateCourse}></i></button>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <button className="btn btn-danger btn-sm rounded-0" name={course._id} onClick={deleteCourse} type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash" name={course._id} onClick={deleteCourse}></i></button>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>








    )
}

export default CTNew;