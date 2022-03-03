import React from 'react';
import Sidebar from '../components/Sidebar';
import UpdateCourse from '../components/UpdateCourse';
import "./page.css"
const UpdateCoursesPage = () => {
    return (
        <div className='page'>
            <Sidebar />
            <div className="pagecontent">
            <UpdateCourse />
            </div>
            
        </div>
    );
};

export default UpdateCoursesPage;