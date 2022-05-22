import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import DashBoard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
