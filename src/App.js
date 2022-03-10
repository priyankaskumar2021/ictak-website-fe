import React, { useState, useEffect } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import AddCoursePage from './pages/AddCoursePage';
import CoursesAdmin from './pages/CoursesAdmin';
import Dashboard from './pages/Dashboard';
import RegistrationPage from './pages/RegistrationPage';
import UpdateCoursesPage from './pages/UpdateCoursesPage';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Retail from "./pages/Retail";
import Singlecourse from "./pages/Singlecourse";
import Login from './pages/Login';
import Institutional from './pages/Institutional';
import Corporate from './pages/Corporate';
import UpdateRegistrationPage from './pages/UpdateRegistrationPage';
import NavbarAdmin from './components/navbar/NavbarAdmin';
import Partnership from './pages/Partnership';

function App() {
  var [loggedin, setloggedin] = useState(0)
 
  console.log("lin",loggedin)
  
  const setlogin = (l) => {
    setloggedin(l)
  }

  if(loggedin===1)
  {
    return (

      <Router>
        <div className="App">
          <NavbarAdmin   setlogin={setlogin} />
          <Routes>
            <Route path="/admin" element={<Dashboard />} exact></Route>
            <Route path="/admin/updatecourse/:id" element={<UpdateCoursesPage />} ></Route>
            <Route path="/admin/updateregistration/:id" element={<UpdateRegistrationPage />} ></Route>
            <Route path="/admin/courses" element={<CoursesAdmin />} ></Route>
            <Route path="/admin/addcourse" element={<AddCoursePage />} ></Route>
            <Route path="/admin/registration" element={<RegistrationPage />} ></Route>
  
  
            <Route path="/register" element={<Register />} ></Route>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/about" element={<About />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/insti" element={<Institutional />} />
            <Route path="/retail/singlecourse/:id" element={<Singlecourse />} />
            <Route path="/institutional/singlecourse/:id" element={<Singlecourse />} />
            <Route path="/corporate/singlecourse/:id" element={<Singlecourse />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    );
  }
  else{
    return (

      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/register" element={<Register />} ></Route>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<Login setlogin={setlogin}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/insti" element={<Institutional />} />
            <Route path="/retail/singlecourse/:id" element={<Singlecourse />} />
            <Route path="/institutional/singlecourse/:id" element={<Singlecourse />} />
            <Route path="/corporate/singlecourse/:id" element={<Singlecourse />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    );
  }
  
}

export default App;
