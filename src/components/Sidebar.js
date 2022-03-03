import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div>
            <main className="main">
                <aside className="sidebar">
                    <nav className="nav">
                        <ul>
                           <h1> <li className="active">Admin</li></h1>
                            <li className="links"><Link to="/">Dashboard</Link></li>
                            <li className="links"><Link to="/courses">Courses</Link></li>
                            <li className="links"><Link to="/registration">Registration</Link></li>
                            <li className="links"><Link to="/">Membership</Link></li>
                            <li className="links"><Link to="/">Partnership</Link></li>
                            <li className="links"><Link to="/">Logout</Link></li>
                        </ul>
                    </nav>
                </aside>

               
            </main>
        </div>
    );
};

export default Sidebar;