import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import moment from "moment";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import "./registrationTable.css";
import { useNavigate } from "react-router-dom";

const RegistrationTable = () => {
    let navigate = useNavigate();
    let [Data, SetData] = useState([]);
    useEffect(() => {
        registerData();
    }, []);

    function registerData() {
        axios.get("http://localhost:3006/api/viewreg")
            .then((response) => {
                console.log(response.data);
                SetData(Data = response.data);
            }
            )
    }

    function updateReg(event){
       var rid = event.target.getAttribute("name");
        console.log("in update", rid)
        var s = `../admin/updateregistration/${rid}`;
        console.log(s)
        navigate(s, { replace: true })

    }
    function deleteReg(event){
           var rid = event.target.getAttribute("name");
            axios.post("http://localhost:3006/api/deletereg", { _id: rid })
            .then((res) => {
                alert("Successfully Deleted");
    
                navigate("../admin", { replace: true })
            })
        }
    

    //save to excel
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const fileName = "registrationlist"
    const exportToCSV = (Data, fileName) => {
        const ws = XLSX.utils.json_to_sheet(Data);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
            <div className="RegContainer">  
            <button className='download' onClick={(e) => exportToCSV(Data, fileName)} >Download as excel</button>
            <h2 className='coursehead'>List of Registered Candidates</h2>
            <div class="row">
                <div class="col-lg-11 mx-auto">
                    <div class="card border-0 shadow">
                        <div class="card-body p-5">
                            <div class="table-responsive">
                                <table class="table m-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Mobile No</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Data.map((res, key) => (
                                                
                                                <tr>
                                                    
                                                    <th scope="row">{res.name}</th>
                                                    <td>{res.email}</td>
                                                    <td>{res.mobileno}</td>
                                                    <td>{res.course}</td>
                                                    <td>{res.amount}</td>
                                                    <td>
                                                     
                                                        <ul className="list-inline m-0">
                                                           
                                                            <li className="list-inline-item" id="ud">
                                                                <button className="btn btn-success btn-sm rounded-0" name={res._id} onClick={updateReg} type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit" name={res._id} onClick={updateReg}></i></button>
                                                            </li>
                                                            <li className="list-inline-item"  id="ud">
                                                                <button className="btn btn-danger btn-sm rounded-0" name={res._id} onClick={deleteReg} type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash" name={res._id}></i></button>
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

export default RegistrationTable;