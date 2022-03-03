import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import moment from "moment";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import "./registrationTable.css";
// import Registration from "./Registration";
const RegistrationTable = () => {
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

    //save to excel
    const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
 const fileName="registrationlist"
  const exportToCSV = (Data, fileName) => {
    const ws = XLSX.utils.json_to_sheet(Data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

    return (
        
            <>
           <button className='download' onClick={(e) => exportToCSV(Data, fileName)} >Download as excel</button>
                <div class="container">
                    <h2>Registration Details</h2>
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div class="col col-1">NAME</div>
                            <div class="col col-2">EMAIL</div>
                            <div class="col col-3">MOBILE NO</div>
                            <div class="col col-4">COURSE</div>
                            <div class="col col-5">AMOUNT</div>
                            
                        </li>
                        </ul>
                        </div>
                       {
                            Data.map((res) => (
                                <div  class="container">
                                <ul  class="responsive-table">
                               <li class="table-row">
                               
                                <div class="col col-1" data-label="Name">{res.name}</div>
                                <div class="col col-2" data-label="Email">{res.email}</div>
                                <div class="col col-3" data-label="MobileNo">{res.mobileno}</div>
                                <div class="col col-4" data-label="Course">{res.course}</div>
                                <div class="col col-5" data-label="Amount">{res.amount}</div>
                                
                                        
                                <div class="col col-4"><button className='view'>View</button></div>
                            </li>
                            </ul> 
                                </div>
                               
                            
                            ))
                       }
                    
               
                </>
            
        
            )}

export default RegistrationTable;