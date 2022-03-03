
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AddCoursePage from './pages/AddCoursePage';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';

import RegistrationPage from './pages/RegistrationPage';
import UpdateCoursesPage from './pages/UpdateCoursesPage';

function App() {
  return (

    <Router>
      <div className="App">
      <Routes>
              <Route path="/" element={<Dashboard />} exact></Route>
              <Route path="/updatecourse/:id" element={<UpdateCoursesPage />} ></Route>
              <Route path="/courses" element={<Courses />} ></Route>
              <Route path="/courses/:id" element={<UpdateCoursesPage />} ></Route>
              <Route path="/addcourse" element={<AddCoursePage />} ></Route>
              <Route path="/registration" element={<RegistrationPage />} ></Route>
            </Routes>
            </div>
    </Router>
  );
}

export default App;
