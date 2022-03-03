import React from 'react';

import CTNew from '../components/CTnew';
import Sidebar from '../components/Sidebar';
import "./page.css"
const Courses = () => {
    return (
        <div className='page'>
            <div>
                <Sidebar />
            </div>
            <div className="pagecontent">
                <CTNew />
            </div>
        </div>
    );
};

export default Courses;