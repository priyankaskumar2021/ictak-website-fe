import React from 'react';
import { Link } from 'react-router-dom';
import adminimg from '..//assets/images/admin.png';
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div>
            <main className="main">
                <aside className="sidebar">
                    <nav className="nav">
                        <ul>
                            <img src={adminimg} className="adminlogo"></img>
                           <h1> <li className="active">Admin</li></h1>
                            <li ><Link to="/admin" className="links">Dashboard</Link></li>
                            <li><Link to="/admin/courses" className="links">Courses</Link></li>
                            <li><Link to="/admin/registration" className="links">Registration</Link></li>
                            <li><Link to="/admin" className="links">Membership</Link></li>
                            <li><Link to="/admin" className="links">Partnership</Link></li>
                            <li><Link to="/admin" className="links">Logout</Link></li>
                        </ul>
                    </nav>
                </aside>

               
            </main>
        </div>
    );
};

export default Sidebar;