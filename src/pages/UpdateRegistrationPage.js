import React from 'react';
import Sidebar from '../components/Sidebar';
import UpdateReg from '../components/UpdateReg';

const UpdateRegistrationPage = () => {
    return (
        <div className='page'>
            <Sidebar />
            <div className="pagecontent">
            <UpdateReg />
            </div>
            
        </div>
    );
};

export default UpdateRegistrationPage;