import React from 'react';
import Register from '../components/Register';
import RegistrationTable from '../components/RegistrationTable';
import Sidebar from '../components/Sidebar';
import "./page.css"
const RegistrationPage = () => {
    return (
        <div className='page'>
            <div>
                <Sidebar />
            </div>
            <div className="pagecontent">
                <Register/>
            </div>
        </div>
    );
};

export default RegistrationPage;