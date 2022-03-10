import React from 'react';
import RegistrationTable from '../components/RegistrationTable';
import Sidebar from '../components/Sidebar';

const RegistrationPage = () => {
    return (
        <div className='page'>
            <div>
                <Sidebar />
            </div>
            <div className="pagecontent">
                <RegistrationTable/>
            </div>
        </div>
    );
};

export default RegistrationPage;