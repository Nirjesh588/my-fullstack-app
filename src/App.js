import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TutorList from './components/Dashboard/TutorList';
import TutorRegistration from './components/Tutor/TutorRegistration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tutorlist" element={<TutorList />} />
        <Route path="/become-tutor" element={<TutorRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
