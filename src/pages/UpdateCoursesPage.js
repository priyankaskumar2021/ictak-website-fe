import React from 'react';
import Sidebar from '../components/Sidebar';
import UpdateCourse from '../components/UpdateCourse';

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