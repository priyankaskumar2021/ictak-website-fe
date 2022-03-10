import React from 'react';
import AddCourse from '../components/AddCourse';
import Sidebar from '../components/Sidebar';

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