
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TutorList from './components/Dashboard/TutorList';
import TutorRegistration from './components/Tutor/TutorRegistration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tutorlist" element={<TutorList />} />
        <Route path="/become-tutor" element={<TutorRegistration />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default App;



        
     



