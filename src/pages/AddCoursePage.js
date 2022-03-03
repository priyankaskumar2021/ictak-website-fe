import React from 'react';
import AddCourse from '../components/AddCourse';
import Sidebar from '../components/Sidebar';
import "./page.css"
const AddCoursePage = () => {
    return (
        <div className='page'>
            <Sidebar />
            <div className="pagecontent">
            <AddCourse />
            </div>
            
        </div>
    );
};

export default AddCoursePage;